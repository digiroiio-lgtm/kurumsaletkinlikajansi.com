"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { phoneHref, whatsappHref } from "@/lib/site";

/** Yalnızca mobilde: sayfadaki teklif formu görünür olunca kendini gizler. */
export function StickyCta() {
  const [hidden, setHidden] = useState(false);
  const wa = whatsappHref();
  const tel = phoneHref();

  useEffect(() => {
    const target = document.getElementById("teklif");
    if (!target || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.15 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${hidden ? " is-hidden" : ""}`} role="region" aria-label="Hızlı teklif">
      <Link href="/teklif-al" className="btn btn--primary btn--lg sticky-cta__main" data-track="cta_click" data-track-id="sticky_mobile_quote">
        Teklif Alın
      </Link>
      {wa && (
        <a href={wa} className="sticky-cta__icon" aria-label="WhatsApp ile yazın" target="_blank" rel="noopener">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.500-4-4.700-4.200-.100-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.4.600c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.700-.1l1.900.9c.3.100.5.200.6.400.1.200.1.800-.1 1.400Z" />
          </svg>
        </a>
      )}
      {tel && (
        <a href={tel} className="sticky-cta__icon" aria-label="Bizi arayın">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M6.6 10.800a15.100 15.100 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.2 11.400 11.400 0 0 0 3.600.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.6 3.600a1 1 0 0 1-.2 1Z" />
          </svg>
        </a>
      )}
    </div>
  );
}
