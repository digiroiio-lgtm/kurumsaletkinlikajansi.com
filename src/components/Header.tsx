"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/tr/nav";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const prev = useRef(pathname);

  useEffect(() => {
    if (prev.current !== pathname) {
      prev.current = pathname;
      setOpenGroup(null);
      setDrawer(false);
    }
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setDrawer(false);
      }
    };
    const onDoc = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDoc);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-locked", drawer);
    return () => document.documentElement.classList.remove("is-locked");
  }, [drawer]);

  return (
    <header className="site-header" ref={barRef}>
      <a href="#main" className="skip-link">
        İçeriğe geç
      </a>
      <div className="container site-header__bar">
        <Link href="/" className="site-header__brand" aria-label="Kurumsal Etkinlik Ajansı — Ana sayfa">
          <Logo />
        </Link>

        <nav className="primary-nav" aria-label="Ana menü">
          <ul>
            {nav.map((g) => {
              const hasMenu = Boolean(g.columns || g.links);
              const isOpen = openGroup === g.label;
              return (
                <li
                  key={g.label}
                  onMouseEnter={() => hasMenu && setOpenGroup(g.label)}
                  onMouseLeave={() => hasMenu && setOpenGroup((c) => (c === g.label ? null : c))}
                >
                  {hasMenu ? (
                    <>
                      <button
                        type="button"
                        className="primary-nav__trigger"
                        aria-expanded={isOpen}
                        aria-controls={`menu-${g.label}`}
                        onClick={() => setOpenGroup(isOpen ? null : g.label)}
                      >
                        {g.label}
                        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </button>
                      <div id={`menu-${g.label}`} className="mega" hidden={!isOpen}>
                        <div className={`mega__inner${g.columns ? " mega__inner--wide" : ""}`}>
                          {(g.columns ?? [{ heading: "", links: g.links! }]).map((col) => (
                            <div key={col.heading || "links"} className="mega__col">
                              {col.heading && <p className="mega__heading">{col.heading}</p>}
                              <ul>
                                {col.links.map((l) => (
                                  <li key={l.href}>
                                    <Link href={l.href}>{l.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={g.href!} className="primary-nav__link">
                      {g.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link href="/teklif-al" className="btn btn--primary btn--md site-header__cta" data-track="cta_click" data-track-id="header_quote">
            Teklif Alın
          </Link>
          <button
            type="button"
            className="burger"
            aria-label={drawer ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={drawer}
            aria-controls="mobile-drawer"
            onClick={() => setDrawer((d) => !d)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-drawer" className="drawer" hidden={!drawer}>
        <div className="drawer__inner">
          {nav.map((g) =>
            g.href ? (
              <Link key={g.label} href={g.href} className="drawer__link">
                {g.label}
              </Link>
            ) : (
              <details key={g.label} className="drawer__group">
                <summary>{g.label}</summary>
                {(g.columns ?? [{ heading: "", links: g.links! }]).map((col) => (
                  <div key={col.heading || "links"}>
                    {col.heading && <p className="drawer__heading">{col.heading}</p>}
                    <ul>
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </details>
            ),
          )}
          <Link href="/teklif-al" className="btn btn--primary btn--lg drawer__cta" data-track="cta_click" data-track-id="drawer_quote">
            Etkinliğiniz İçin Teklif Alın
          </Link>
        </div>
      </div>
    </header>
  );
}
