// QA taraması: sitemap'teki tüm URL'lerde HTTP, tek H1, yatay taşma, konsol hatası, kırık iç link ve görsel alt kontrolü.
// Kullanım: node scripts/qa-crawl.mjs http://localhost:3100
import { createRequire } from "node:module";
const require = createRequire("/opt/node22/lib/node_modules/");
const { chromium } = require("playwright");
const base = process.argv[2] ?? "http://localhost:3100";
const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
urls.push("/teklif-al", "/gizlilik-kvkk");
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox", "--no-proxy-server"] });
const problems = [];
const seenLinks = new Map();
for (const width of [360, 768, 1440]) {
  const ctx = await b.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  const errs = [];
  p.on("pageerror", (e) => errs.push(String(e)));
  p.on("console", (m) => m.type() === "error" && !/404|status of 4/.test(m.text()) && errs.push(m.text()));
  for (const u of urls) {
    errs.length = 0;
    const res = await p.goto(base + u, { waitUntil: "load" });
    if (res.status() !== 200) problems.push(`${width} ${u}: HTTP ${res.status()}`);
    const r = await p.evaluate(() => ({
      h1: document.querySelectorAll("h1").length,
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      imgNoAlt: [...document.images].filter((i) => !i.hasAttribute("alt")).length,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content?.length ?? 0,
      ld: document.querySelectorAll('script[type="application/ld+json"]').length,
      links: window.innerWidth === 1440 ? [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href").split("#")[0].split("?")[0]) : [],
    }));
    if (r.h1 !== 1) problems.push(`${width} ${u}: h1 sayısı ${r.h1}`);
    if (r.overflow > 1) problems.push(`${width} ${u}: yatay taşma ${r.overflow}px`);
    if (r.imgNoAlt) problems.push(`${width} ${u}: alt'sız img ${r.imgNoAlt}`);
    if (width === 1440 && !r.canonical) problems.push(`${u}: canonical yok`);
    if (width === 1440 && r.ld < (["/", "/teklif-al", "/gizlilik-kvkk"].includes(u) ? 2 : 3)) problems.push(`${u}: JSON-LD ${r.ld}`);
    for (const l of r.links) seenLinks.set(l, u);
    if (errs.length) problems.push(`${width} ${u}: konsol hatası ${errs.join(" | ").slice(0, 200)}`);
  }
  await ctx.close();
}
// iç linkleri doğrula
for (const [l, from] of seenLinks) {
  if (!l || l.startsWith("/_next") || l.startsWith("/fonts")) continue;
  const r = await fetch(base + l, { redirect: "manual" });
  if (r.status >= 400) problems.push(`kırık link ${l} (kaynak ${from}): ${r.status}`);
}
await b.close();
console.log(`${urls.length} URL × 3 viewport tarandı, ${seenLinks.size} benzersiz iç link doğrulandı`);
console.log(problems.length ? "SORUNLAR:\n- " + problems.join("\n- ") : "✓ sorun yok");
