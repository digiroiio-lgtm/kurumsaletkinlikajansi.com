import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  /** Analytics: cta_click olayındaki cta_id */
  id: string;
  variant?: "primary" | "ghost" | "light" | "line";
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export const PRIMARY_CTA = "Etkinliğiniz İçin Teklif Alın";

/** Tüm CTA'lar buradan geçer: tek stil, tek izleme sözleşmesi (data-track). */
export function Cta({ href = "#teklif", id, variant = "primary", children, className = "", size = "md" }: Props) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const data = { "data-track": "cta_click", "data-track-id": id };
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls} {...data}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...data}>
      {children}
    </Link>
  );
}
