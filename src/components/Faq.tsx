import type { QA } from "@/content/types";
import { RichText } from "./RichText";

/** Native <details>: JS gerektirmez, klavye/erişilebilirlik tarayıcıdan gelir. Metin DOM'da olduğu için FAQ schema ile birebir uyumludur. */
export function Faq({ items, heading = "Sık sorulan sorular", eyebrow = "SSS" }: { items: QA[]; heading?: string; eyebrow?: string }) {
  return (
    <section className="section section--paper faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <header className="faq__head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="faq-title" className="h2">
            {heading}
          </h2>
        </header>
        <div className="faq__list">
          {items.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </summary>
              <p>
                <RichText text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
