import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

/** `[etiket](/yol)` → <Link>, `**kalın**` → <strong>. Yalnızca site içi veya mutlak URL'ler. */
export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href} className="textlink">
              {label}
            </Link>
          ) : (
            <a key={i} href={href} className="textlink" rel="noopener">
              {label}
            </a>
          );
        }
        const bold = p.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
