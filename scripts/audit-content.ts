/**
 * İçerik denetimi — `npm run audit:content`
 *  - iç linkler (markdown + related/guides alanları) gerçek sayfalara çözülüyor mu
 *  - görsel yuvaları manifestte tanımlı mı
 *  - title/description uzunluğu ve benzersizliği, H1 benzersizliği
 *  - sayfa başına kelime sayısı (thin content), SSS varlığı
 *  - sayfalar arası tekrar (8'li kelime dizisi benzerliği) → duplicate/thin sinyali
 */
import { guides, pages } from "../src/content/tr/registry";
import { SLOTS } from "../src/content/tr/images";
import { eventTypes, homeFaq, homeMeta, activities, modules, venues, scenarios, whyDestination, processSection, staffing, destinations } from "../src/content/tr/home";

type Doc = { id: string; title: string; desc: string; h1: string; text: string; words: number; links: string[]; slots: string[] };
const STATIC = new Set(["/", "/rehberler", "/teklif-al", "/gizlilik-kvkk"]);
const pagePaths = new Set(pages.map((p) => p.path));
const guidePaths = new Set(guides.map((g) => `/rehberler/${g.slug}`));
const guideSlugs = new Set(guides.map((g) => g.slug));
const REDIRECT_OK = new Set(["/antalya", "/belek"]);

const mdLinks = (s: string) => [...s.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
const walk = (v: unknown, out: string[]) => {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => walk(x, out));
};
const hrefs = (v: unknown, out: string[]) => {
  if (Array.isArray(v)) v.forEach((x) => hrefs(x, out));
  else if (v && typeof v === "object") {
    for (const [k, x] of Object.entries(v)) {
      if (k === "href" && typeof x === "string") out.push(x);
      else hrefs(x, out);
    }
  }
};

const docs: Doc[] = [];
const errors: string[] = [];
const warns: string[] = [];

for (const p of pages) {
  const strs: string[] = [];
  walk({ lead: p.lead, sections: p.sections, faq: p.faq }, strs);
  const links = strs.flatMap(mdLinks);
  hrefs(p.sections, links);
  const slots: string[] = [p.heroMedia];
  JSON.stringify(p.sections, (k, v) => (k === "media" && typeof v === "string" ? (slots.push(v), v) : v));
  const text = strs.map(strip).join(" ");
  docs.push({ id: p.path, title: p.metaTitle, desc: p.metaDescription, h1: p.h1, text, words: text.split(/\s+/).length, links, slots });
  for (const r of p.related) if (!pagePaths.has(r)) errors.push(`${p.path}: related bilinmeyen sayfa ${r}`);
  for (const g of p.guides) if (!guideSlugs.has(g)) errors.push(`${p.path}: guides bilinmeyen rehber ${g}`);
  if (p.faq.length < 3) warns.push(`${p.path}: SSS az (${p.faq.length})`);
  if (!p.crumbs.length) errors.push(`${p.path}: breadcrumb yok`);
}

for (const g of guides) {
  const strs: string[] = [];
  walk({ lead: g.lead, sections: g.sections, faq: g.faq, pitch: g.primaryService.pitch }, strs);
  const links = strs.flatMap(mdLinks);
  links.push(g.primaryService.href);
  const text = strs.map(strip).join(" ");
  docs.push({ id: `/rehberler/${g.slug}`, title: g.metaTitle, desc: g.metaDescription, h1: g.h1, text, words: text.split(/\s+/).length, links, slots: [g.heroMedia] });
  for (const r of g.related) if (!pagePaths.has(r)) errors.push(`rehber ${g.slug}: related bilinmeyen sayfa ${r}`);
  for (const r of g.relatedGuides) if (!guideSlugs.has(r)) errors.push(`rehber ${g.slug}: relatedGuides bilinmeyen ${r}`);
  if (g.relatedGuides.includes(g.slug)) errors.push(`rehber ${g.slug}: kendine bağlanıyor`);
  if (!pagePaths.has(g.primaryService.href)) errors.push(`rehber ${g.slug}: primaryService bilinmeyen ${g.primaryService.href}`);
  // Bilgi amaçlı rehber ticari sayfaya DOĞAL iç link vermeli (metin içinde en az bir ticari link)
  const commercial = links.filter((l) => pagePaths.has(l));
  if (commercial.length < 2) warns.push(`rehber ${g.slug}: gövdede ticari sayfaya link az (${commercial.length})`);
}

// Ana sayfa (içerik home.ts içinde)
{
  const strs: string[] = [];
  walk({ eventTypes, homeFaq, activities, modules, venues, scenarios, whyDestination, processSection, staffing, destinations }, strs);
  const links = strs.flatMap(mdLinks);
  hrefs({ eventTypes, activities, modules, venues, staffing, destinations }, links);
  const slots = [...eventTypes.map((e) => e.slot), ...destinations.map((d) => d.slot), "home-hero", "home-hero-inset", "home-venues"];
  JSON.stringify(scenarios, (k, v) => (k === "media" && typeof v === "string" ? (slots.push(v), v) : v));
  docs.push({ id: "/", title: homeMeta.title, desc: homeMeta.description, h1: "Antalya & Belek Kurumsal Etkinlik Ajansı", text: strs.map(strip).join(" "), words: strs.join(" ").split(/\s+/).length, links, slots });
}

for (const d of docs) {
  for (const raw of d.links) {
    const l = raw.split("#")[0];
    if (!l.startsWith("/")) continue;
    if (STATIC.has(l) || pagePaths.has(l) || guidePaths.has(l) || REDIRECT_OK.has(l)) continue;
    errors.push(`${d.id}: kırık iç link → ${raw}`);
  }
  for (const s of d.slots) if (!SLOTS[s]) errors.push(`${d.id}: tanımsız görsel yuvası → ${s}`);
  if (d.title.length > 65) errors.push(`${d.id}: title uzun (${d.title.length}) → ${d.title}`);
  if (d.title.length < 30) warns.push(`${d.id}: title kısa (${d.title.length})`);
  if (d.desc.length < 110 || d.desc.length > 175) warns.push(`${d.id}: description uzunluğu ${d.desc.length}`);
  if (d.words < 380) warns.push(`${d.id}: ince içerik (${d.words} kelime)`);
}

const uniq = (key: "title" | "desc" | "h1") => {
  const seen = new Map<string, string>();
  for (const d of docs) {
    const k = d[key].toLowerCase();
    if (seen.has(k)) errors.push(`yinelenen ${key}: ${d.id} ↔ ${seen.get(k)}`);
    seen.set(k, d.id);
  }
};
uniq("title"); uniq("desc"); uniq("h1");

// Sayfalar arası benzerlik (8'li shingle Jaccard)
const shingles = (t: string) => {
  const w = t.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  const s = new Set<string>();
  for (let i = 0; i + 8 <= w.length; i++) s.add(w.slice(i, i + 8).join(" "));
  return s;
};
const sh = docs.map((d) => ({ id: d.id, s: shingles(d.text) }));
let maxSim = 0;
for (let i = 0; i < sh.length; i++)
  for (let j = i + 1; j < sh.length; j++) {
    const a = sh[i].s, b = sh[j].s;
    let inter = 0;
    for (const x of a) if (b.has(x)) inter++;
    const sim = inter / Math.min(a.size, b.size);
    maxSim = Math.max(maxSim, sim);
    if (sim > 0.12) warns.push(`benzer içerik %${Math.round(sim * 100)}: ${sh[i].id} ↔ ${sh[j].id}`);
  }

const total = docs.reduce((n, d) => n + d.words, 0);
console.log(`Sayfa: ${pages.length} hizmet/destinasyon + ${guides.length} rehber + ana sayfa · toplam ~${total} kelime`);
console.log(`En düşük kelime: ${Math.min(...docs.map((d) => d.words))} · en yüksek sayfa-arası benzerlik: %${Math.round(maxSim * 100)}`);
if (warns.length) console.log(`\nUYARI (${warns.length}):\n- ` + warns.join("\n- "));
if (errors.length) {
  console.log(`\nHATA (${errors.length}):\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log("\n✓ İçerik denetimi geçti");
