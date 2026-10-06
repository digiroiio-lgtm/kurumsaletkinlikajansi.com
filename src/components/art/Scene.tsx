import type { ReactNode } from "react";

/**
 * Özgün, düz (flat) SVG sahneler. Gerçek fotoğraflar `public/images` altına konup
 * `src/content/tr/images.ts` içinde bağlanana kadar yer tutucu görevi görür.
 * Renkler CSS değişkenlerinden gelir (bkz. tokens.css, `.f-*` / `.s-*` sınıfları).
 */
export type SceneKind =
  | "coast" | "golf" | "gala" | "outdoor" | "meeting" | "team"
  | "sail" | "wellness" | "table" | "staff" | "arches" | "stage";

const scenes: Record<SceneKind, ReactNode> = {
  coast: (
    <>
      <rect width="800" height="600" className="f-sand2" />
      <circle cx="560" cy="210" r="74" className="f-gold" />
      <path d="M0 330 L120 250 L210 300 L330 215 L470 320 L560 280 L690 340 L800 290 V380 H0Z" className="f-sea2" />
      <rect y="360" width="800" height="240" className="f-sea" />
      <path d="M0 420 Q100 405 200 420 T400 420 T600 420 T800 420 V440 H0Z" className="f-mist" opacity=".35" />
      <path d="M0 490 Q120 472 240 490 T480 490 T800 490 V520 H0Z" className="f-ink2" opacity=".35" />
      <path d="M0 560 Q200 520 420 548 T800 530 V600 H0Z" className="f-sand" />
    </>
  ),
  golf: (
    <>
      <rect width="800" height="600" className="f-mist" />
      <circle cx="170" cy="170" r="56" className="f-gold" />
      <path d="M0 300 Q220 220 420 290 T800 250 V600 H0Z" className="f-pine2" />
      <path d="M0 390 Q260 310 520 380 T800 350 V600 H0Z" className="f-pine" />
      <path d="M0 480 Q300 420 560 470 T800 450 V600 H0Z" className="f-sea" opacity=".9" />
      <rect x="548" y="262" width="4" height="96" className="f-ink" />
      <path d="M552 262 L600 278 L552 294Z" className="f-clay" />
      <ellipse cx="550" cy="360" rx="42" ry="9" className="f-ink" opacity=".25" />
    </>
  ),
  gala: (
    <>
      <rect width="800" height="600" className="f-ink" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${160 + i * 120} 0 V${90 + (i % 2) * 40}`} className="s-gold" strokeWidth="2" fill="none" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={160 + i * 120} cy={110 + (i % 2) * 40} r="22" className="f-gold" opacity=".9" />
      ))}
      <path d="M0 330 Q400 230 800 330" className="s-gold" strokeWidth="1.5" fill="none" opacity=".5" />
      <path d="M0 360 Q400 270 800 360" className="s-gold" strokeWidth="1.5" fill="none" opacity=".3" />
      {[140, 330, 520, 700].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={470 + (i % 2) * 22} rx="76" ry="22" className="f-ink2" />
          <ellipse cx={x} cy={462 + (i % 2) * 22} rx="76" ry="22" className="f-sea" opacity=".7" />
          <circle cx={x} cy={452 + (i % 2) * 22} r="6" className="f-gold" />
        </g>
      ))}
    </>
  ),
  outdoor: (
    <>
      <rect width="800" height="600" className="f-sand2" />
      <path d="M0 360 L130 210 L230 300 L380 150 L520 310 L640 220 L800 340 V600 H0Z" className="f-sea2" />
      <path d="M0 430 L160 320 L300 410 L470 300 L640 420 L800 360 V600 H0Z" className="f-pine2" />
      <path d="M330 600 Q380 520 430 470 T560 380 T720 330 L800 330 V345 Q690 360 600 420 T470 520 Q440 560 420 600Z" className="f-mist" />
      {[60, 120, 200, 640, 710, 760].map((x, i) => (
        <path key={x} d={`M${x} ${520 + (i % 3) * 14} l22 -70 l22 70Z`} className="f-pine" />
      ))}
      <circle cx="620" cy="130" r="40" className="f-gold" />
    </>
  ),
  meeting: (
    <>
      <rect width="800" height="600" className="f-sea2" />
      <rect x="90" y="90" width="620" height="300" className="f-mist" opacity=".5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={110 + i * 150} y="110" width="120" height="260" className="f-sand" opacity={0.9 - i * 0.12} />
      ))}
      <rect x="40" y="430" width="720" height="26" className="f-ink" />
      {[110, 250, 390, 530, 650].map((x) => (
        <rect key={x} x={x} y="456" width="10" height="70" className="f-ink2" />
      ))}
      {[150, 300, 450, 600].map((x) => (
        <circle key={x} cx={x} cy="410" r="14" className="f-clay" />
      ))}
    </>
  ),
  team: (
    <>
      <rect width="800" height="600" className="f-sand2" />
      <circle cx="320" cy="300" r="170" className="f-sea" />
      <circle cx="470" cy="300" r="170" className="f-clay" opacity=".9" />
      <circle cx="395" cy="410" r="150" className="f-gold" opacity=".85" />
      <circle cx="395" cy="300" r="46" className="f-ink" />
    </>
  ),
  sail: (
    <>
      <rect width="800" height="600" className="f-mist" />
      <circle cx="640" cy="150" r="52" className="f-gold" />
      <rect y="360" width="800" height="240" className="f-sea" />
      <path d="M0 440 Q140 420 280 440 T560 440 T800 440" className="s-mist" strokeWidth="2" fill="none" opacity=".5" />
      <path d="M0 500 Q160 478 320 500 T640 500 T800 490" className="s-mist" strokeWidth="2" fill="none" opacity=".35" />
      <path d="M300 372 H520 L480 410 H340Z" className="f-ink" />
      <rect x="408" y="150" width="5" height="224" className="f-ink" />
      <path d="M416 160 L500 360 H416Z" className="f-paper" />
      <path d="M404 190 L330 360 H404Z" className="f-sand2" />
    </>
  ),
  wellness: (
    <>
      <rect width="800" height="600" className="f-paper" />
      <circle cx="400" cy="210" r="120" className="f-sand2" />
      <circle cx="400" cy="210" r="76" className="f-gold" opacity=".9" />
      <ellipse cx="400" cy="470" rx="120" ry="34" className="f-ink2" />
      <ellipse cx="400" cy="424" rx="88" ry="28" className="f-sea2" />
      <ellipse cx="400" cy="386" rx="56" ry="22" className="f-clay" />
      <path d="M120 540 Q260 518 400 540 T680 540" className="s-sea" strokeWidth="2" fill="none" />
      <path d="M180 570 Q290 554 400 570 T620 570" className="s-sea" strokeWidth="2" fill="none" opacity=".5" />
    </>
  ),
  table: (
    <>
      <rect width="800" height="600" className="f-sand2" />
      <ellipse cx="400" cy="390" rx="330" ry="120" className="f-ink2" />
      <ellipse cx="400" cy="372" rx="330" ry="120" className="f-paper" />
      {[250, 400, 550].map((x) => (
        <g key={x}>
          <circle cx={x} cy="372" r="52" className="f-sand" />
          <circle cx={x} cy="372" r="34" className="f-paper" />
          <circle cx={x} cy="372" r="34" fill="none" className="s-gold" strokeWidth="2" />
        </g>
      ))}
      <path d="M120 150 Q400 40 680 150" className="s-gold" strokeWidth="2" fill="none" />
      {[160, 260, 360, 460, 560, 650].map((x, i) => (
        <circle key={x} cx={x} cy={118 + Math.abs(i - 2.5) * -0 + [30, 8, -4, -4, 8, 30][i]} r="9" className="f-gold" />
      ))}
    </>
  ),
  staff: (
    <>
      <rect width="800" height="600" className="f-sea2" />
      {[130, 250, 370, 490, 610].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={250 + (i % 2) * 20} r="34" className={i === 2 ? "f-gold" : "f-sand"} />
          <path d={`M${x - 58} 560 V${380 + (i % 2) * 20} Q${x - 58} ${322 + (i % 2) * 20} ${x} ${322 + (i % 2) * 20} T${x + 58} ${380 + (i % 2) * 20} V560Z`} className={i === 2 ? "f-clay" : "f-ink"} />
        </g>
      ))}
    </>
  ),
  arches: (
    <>
      <rect width="800" height="600" className="f-sand2" />
      <rect y="470" width="800" height="130" className="f-sand" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${80 + i * 170} 470 V270 A70 70 0 0 1 ${220 + i * 170} 270 V470Z`} className="f-ink2" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${100 + i * 170} 470 V272 A50 50 0 0 1 ${200 + i * 170} 272 V470Z`} className="f-gold" opacity={0.55 + i * 0.1} />
      ))}
      <rect x="60" y="205" width="700" height="14" className="f-ink2" />
      <circle cx="680" cy="110" r="38" className="f-clay" />
    </>
  ),
  stage: (
    <>
      <rect width="800" height="600" className="f-ink" />
      <path d="M250 0 L120 470 H380Z" className="f-gold" opacity=".25" />
      <path d="M550 0 L420 470 H680Z" className="f-clay" opacity=".3" />
      <path d="M400 0 L300 470 H500Z" className="f-mist" opacity=".18" />
      <rect x="70" y="470" width="660" height="34" className="f-ink2" />
      <rect x="70" y="504" width="660" height="96" className="f-sea2" opacity=".6" />
      {[200, 400, 600].map((x) => (
        <circle key={x} cx={x} cy="40" r="10" className="f-gold" />
      ))}
    </>
  ),
};

export function Scene({ kind, className }: { kind: SceneKind; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {scenes[kind]}
    </svg>
  );
}
