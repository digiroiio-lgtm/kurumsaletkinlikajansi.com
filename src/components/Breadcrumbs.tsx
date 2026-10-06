import Link from "next/link";
import type { Crumb } from "@/content/types";

export function Breadcrumbs({ crumbs, tone = "light" }: { crumbs: Crumb[]; tone?: "light" | "dark" }) {
  const all: Crumb[] = [{ label: "Ana Sayfa", href: "/" }, ...crumbs];
  return (
    <nav aria-label="Sayfa yolu" className={`crumbs crumbs--${tone}`}>
      <ol>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href}>
              {last ? (
                <span aria-current="page">{c.label}</span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
