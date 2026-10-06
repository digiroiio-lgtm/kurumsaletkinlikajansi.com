// docs/IMAGE-BRIEF.md üretir: npx tsx scripts/gen-image-brief.ts
import { writeFileSync } from "node:fs";
import { SLOTS } from "../src/content/tr/images";

const groups: [string, RegExp, string][] = [
  ["Ana sayfa", /^(home|card|dest)-/, "Ana sayfa hero'su en kritik görseldir (LCP). Dikey 4:5, en az 1200×1500 px; kart görselleri 4:3, en az 1200×900."],
  ["Hizmet ve destinasyon hero'ları", /^hero-/, "Dikey kemer kırpma (4:5), en az 1200×1500 px. Konu merkezde, üst %25 boş bırakılabilir (kemer kırpar)."],
  ["Bölüm görselleri", /^media-/, "4:3 veya 4:5, en az 1200 px genişlik."],
  ["Örnek senaryo kartları", /^scenario-/, "3:2, en az 1200×800. Not: bunlar *örnek senaryo* görselleridir; gerçek müşteri etkinliği olarak etiketlenmez."],
  ["Rehber kapakları", /^guide-/, "3:2, en az 1200×800."],
];
let md = `# Görsel çekim ve yerleştirme brief'i

> Bu dosya \`scripts/gen-image-brief.ts\` ile üretilir (\`src/content/tr/images.ts\` kaynağından).

## İlkeler
- **Gerçek etkinlik atmosferi.** Stok kurumsal poz (el sıkışan takım elbiseliler, cam toplantı odası) kullanmayın. Hedef: gerçek çekim ya da gerçek etkinliklerden kareler; yaşanmışlık, doğal ışık, hareket.
- **Premium corporate destination.** Antalya/Belek turist broşürü gibi değil: resort, plaj, golf, antik mekân; ama *iş yapan insanlarla* (toplantı, gala, ekip görevi).
- **Kişi gizliliği.** Tanınabilir kişiler için yazılı görsel kullanım izni alın (KVKK). Çocuk görseli için ayrıca veli izni.
- **Sahte referans yok.** Gerçek müşteri etkinliği değilse "referans" olarak etiketlenmez; örnek senaryo kartları bunu açıkça belirtir.
- **Teknik.** JPG/PNG/WebP yükleyin; Next.js AVIF/WebP'ye dönüştürür. \`width\`/\`height\` gerçek piksel değerleri olmalı (CLS için). Hero görseli \`priority\` ile preload edilir (otomatik).
- **Alt metin.** Görseli betimleyin (kim, ne yapıyor, nerede). Anahtar kelime doldurmayın.

## Nasıl takılır?
1. Dosyayı \`public/images/<ad>.jpg\` olarak koyun.
2. \`src/content/tr/images.ts\` içinde ilgili yuvaya \`src: "/images/<ad>.jpg", width: 1200, height: 1500\` ekleyin ve \`alt\` metnini gerçek görsele göre güncelleyin.
3. \`npm run build\` — yuva anında SVG sahne yerine fotoğrafı gösterir.

`;
for (const [title, re, note] of groups) {
  const rows = Object.entries(SLOTS).filter(([k]) => re.test(k));
  md += `## ${title} (${rows.length})\n${note}\n\n| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |\n|---|---|---|\n`;
  for (const [k, v] of rows) md += `| \`${k}\` | ${v.alt} | ${v.scene} |\n`;
  md += "\n";
}
writeFileSync("docs/IMAGE-BRIEF.md", md);
console.log("docs/IMAGE-BRIEF.md yazıldı:", Object.keys(SLOTS).length, "yuva");
