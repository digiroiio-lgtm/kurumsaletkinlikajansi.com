// Etkileşim testi: mega menü, mobil çekmece, sticky CTA gizlenmesi, CTA izleme, 404.
import { createRequire } from "node:module";
const require = createRequire("/opt/node22/lib/node_modules/");
const { chromium } = require("playwright");
const base = process.argv[2] ?? "http://localhost:3100";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox", "--no-proxy-server"] });
const ok = (c, m) => console.log(c ? "✓" : "✗ FAIL", m);

// Masaüstü
let ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
let p = await ctx.newPage();
await p.addInitScript(() => { window.dataLayer = []; });
await p.goto(base + "/", { waitUntil: "load" }); await p.waitForTimeout(600);
await p.getByRole("button", { name: "Hizmetler" }).click();
ok(await p.locator("#menu-Hizmetler").isVisible(), "mega menü tıklayınca açılıyor");
ok((await p.locator("#menu-Hizmetler a").count()) === 12, "mega menüde 12 hizmet linki");
await p.keyboard.press("Escape");
ok(!(await p.locator("#menu-Hizmetler").isVisible()), "Escape menüyü kapatıyor");
await p.getByRole("link", { name: "Etkinliğiniz İçin Teklif Alın" }).first().click();
await p.waitForTimeout(300);
const ev = await p.evaluate(() => window.dataLayer.filter((e) => e.event === "cta_click").map((e) => e.cta_id));
ok(ev.includes("hero_quote"), "hero CTA cta_click olayı gönderdi: " + ev.join(","));
await p.goto(base + "/team-building", { waitUntil: "load" });
await p.getByRole("button", { name: "Antalya" }).hover();
ok(await p.locator("#menu-Antalya").isVisible(), "hover ile Antalya menüsü açılıyor");
await p.goto(base + "/rehberler/team-building-fikirleri", { waitUntil: "load" }); await p.waitForTimeout(400);
await p.locator(".callout a.arrow-link").first().click(); await p.waitForTimeout(300);
const ev2 = await p.evaluate(() => window.dataLayer.map((e) => e.event));
ok(ev2.includes("guide_to_service_click"), "rehber → hizmet linki guide_to_service_click gönderdi");
await p.goto(base + "/team-building", { waitUntil: "load" }); await p.waitForTimeout(400);
await p.locator("details.faq__item summary").first().click(); await p.waitForTimeout(300);
ok((await p.evaluate(() => window.dataLayer.map((e) => e.event))).includes("faq_toggle"), "SSS açılışı faq_toggle gönderdi");
await ctx.close();

// Mobil
ctx = await b.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce", isMobile: true, hasTouch: true });
p = await ctx.newPage();
await p.goto(base + "/belek/team-building", { waitUntil: "load" }); await p.waitForTimeout(600);
ok(await p.locator(".sticky-cta").isVisible(), "mobilde sticky CTA görünür");
await p.getByRole("button", { name: "Menüyü aç" }).click();
ok(await p.locator("#mobile-drawer").isVisible(), "hamburger çekmeceyi açıyor");
await p.locator("#mobile-drawer summary", { hasText: "Belek" }).click();
ok(await p.locator("#mobile-drawer a", { hasText: "Belek Gala Organizasyonu" }).isVisible(), "çekmecede Belek alt menüsü açılıyor");
await p.getByRole("button", { name: "Menüyü kapat" }).click();
await p.evaluate(() => document.getElementById("teklif").scrollIntoView());
await p.waitForTimeout(700);
ok(await p.locator(".sticky-cta.is-hidden").count() === 1, "form görünürken sticky CTA gizleniyor");
await ctx.close();

// 404
const r = await fetch(base + "/olmayan-sayfa");
ok(r.status === 404, "bilinmeyen URL 404 dönüyor");
const r2 = await fetch(base + "/antalya", { redirect: "manual" });
ok(r2.status === 308 && r2.headers.get("location") === "/antalya/kurumsal-etkinlik", "/antalya → /antalya/kurumsal-etkinlik 308");
await b.close();
