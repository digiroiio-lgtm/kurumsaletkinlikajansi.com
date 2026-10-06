"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Tek, delegated dinleyici: sayfadaki tüm CTA/telefon/WhatsApp/e-posta tıklamaları ve SSS açılışları
 * ayrı client bileşeni gerektirmeden izlenir. Sunucu bileşenleri yalnızca `data-track*` niteliği ekler.
 */
export function TrackingListener() {
  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as Element | null)?.closest<HTMLElement>("a,button");
      if (!el) return;
      const href = el.getAttribute("href") ?? "";
      const where = el.closest("header") ? "header" : el.closest("footer") ? "footer" : el.closest(".sticky-cta") ? "sticky" : "content";
      if (href.startsWith("tel:")) return track("phone_click", { link_url: href, location: where });
      if (href.startsWith("mailto:")) return track("email_click", { link_url: href, location: where });
      if (/^https:\/\/wa\.me\//.test(href)) return track("whatsapp_click", { link_url: href, location: where });
      const t = el.dataset.track;
      if (!t) return;
      track(t, {
        cta_id: el.dataset.trackId,
        cta_text: (el.textContent ?? "").trim().slice(0, 80),
        destination: href || undefined,
        event_type: el.dataset.trackEventType,
        guide: el.dataset.trackGuide,
      });
    };
    const onToggle = (ev: Event) => {
      const d = ev.target as HTMLDetailsElement | null;
      if (d?.tagName === "DETAILS" && d.open && d.classList.contains("faq__item")) {
        track("faq_toggle", { question: (d.querySelector("summary")?.textContent ?? "").trim().slice(0, 120) });
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true); // toggle olayı kabarcıklanmaz → capture
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);
  return null;
}
