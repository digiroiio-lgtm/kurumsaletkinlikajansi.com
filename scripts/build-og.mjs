// OG görseli (1200×630) üretir: node scripts/build-og.mjs  →  public/og.png
// Gerçek marka görseli geldiğinde bu dosyayı public/og.png olarak değiştirmeniz yeterlidir.
import sharp from "sharp";
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f1e9dc"/>
  <path d="M760 630V300a200 200 0 0 1 400 0v330Z" fill="#e3d5be"/>
  <circle cx="960" cy="330" r="86" fill="#d9b06a"/>
  <path d="M760 430l90-70 80 50 90-90 120 80v230H760Z" fill="#3c8a8c"/>
  <rect x="760" y="470" width="400" height="160" fill="#1c5b63"/>
  <path d="M760 540q100-20 200 0t200 0v90H760Z" fill="#14303b" opacity=".55"/>
  <g transform="translate(80 84)">
    <path d="M0 56V22a22 22 0 0 1 44 0v34Z" fill="none" stroke="#0b1d25" stroke-width="3"/>
    <circle cx="22" cy="30" r="8" fill="#b5481f"/>
    <path d="M-6 56h56" stroke="#0b1d25" stroke-width="3"/>
    <text x="64" y="36" font-family="Georgia, 'DejaVu Serif', serif" font-size="30" font-weight="700" fill="#0b1d25">Kurumsal Etkinlik Ajansı</text>
    <text x="64" y="58" font-family="Arial, 'DejaVu Sans', sans-serif" font-size="15" letter-spacing="5" fill="#4a5b61">ANTALYA · BELEK</text>
  </g>
  <text x="80" y="290" font-family="Georgia, 'DejaVu Serif', serif" font-size="62" font-weight="700" fill="#0b1d25">Antalya &amp; Belek</text>
  <text x="80" y="370" font-family="Georgia, 'DejaVu Serif', serif" font-size="62" font-weight="700" fill="#0b1d25">Kurumsal Etkinlik</text>
  <text x="80" y="450" font-family="Georgia, 'DejaVu Serif', serif" font-size="62" font-weight="700" fill="#0b1d25">Ajansı</text>
  <text x="80" y="525" font-family="Arial, 'DejaVu Sans', sans-serif" font-size="26" fill="#4a5b61">Konseptten saha operasyonuna kurumsal etkinlikler</text>
  <rect x="80" y="560" width="350" height="4" fill="#b5481f"/>
</svg>`;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("public/og.png yazıldı");
