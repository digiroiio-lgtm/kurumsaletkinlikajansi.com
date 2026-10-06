/** Özgün işaret: kemer (Aspendos) içinde doğan güneş ve ufuk çizgisi. */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false" className="logo__mark">
      <path d="M6 36V19a14 14 0 0 1 28 0v17Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="22" r="6" className="logo__sun" />
      <path d="M2 36h36" stroke="currentColor" strokeWidth="2" />
      <path d="M11 30h18" stroke="currentColor" strokeWidth="1.5" opacity=".55" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">Kurumsal Etkinlik Ajansı</span>
        <span className="logo__sub">Antalya · Belek</span>
      </span>
    </span>
  );
}
