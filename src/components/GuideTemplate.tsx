import Link from "next/link";
import type { Guide } from "@/content/types";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { slugify } from "@/lib/slug";
import { SITE, absoluteUrl } from "@/lib/site";
import { requirePage, requireGuide, guidePath } from "@/content/tr/registry";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { HotelTable } from "./HotelTable";
import { hallRows, hotelIndexable } from "@/lib/hotels";
import { JsonLd } from "./JsonLd";
import { Media } from "./Media";
import { QuoteSection } from "./QuoteSection";
import { RichText } from "./RichText";

const fmt = (iso: string) => new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

const words = (g: Guide) =>
  [g.lead, ...g.sections.flatMap((s) => [s.h2, ...s.paras, ...(s.bullets ?? []), ...(s.table?.rows.flat() ?? [])])].join(" ").split(/\s+/).length;

export function GuideTemplate({ guide: g }: { guide: Guide }) {
  const crumbs = [
    { label: "Rehberler", href: "/rehberler" },
    { label: g.h1, href: guidePath(g.slug) },
  ];
  const related = g.related.map(requirePage);
  const moreGuides = g.relatedGuides.map(requireGuide);
  const minutes = Math.max(3, Math.round(words(g) / 200));
  const inlineAfter = Math.min(1, g.sections.length - 1);

  // Otel listeleyen rehberlerde: yalnızca kendi (indekslenebilir) otel profillerimizi içeren ItemList
  const listed = new Map<string, string>();
  for (const sec of g.sections)
    if (sec.hotelBlock)
      for (const r of hallRows(sec.hotelBlock.filter)) if (hotelIndexable(r.hotel)) listed.set(r.hotel.id, r.hotel.slug);
  const itemList = listed.size
    ? [{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: g.h1,
        itemListElement: [...listed.values()].map((slug, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/rehberler/${slug}`) })),
      }]
    : [];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(g), ...(g.faq ? [faqSchema(g.faq)] : []), ...itemList]} />

      <section className="ghero">
        <div className="container ghero__grid">
          <div>
            <Breadcrumbs crumbs={crumbs} />
            <p className="eyebrow">
              {g.category} · {minutes} dk okuma
            </p>
            <h1 className="h1 h1--guide">{g.h1}</h1>
            <p className="lead lead--hero">
              <RichText text={g.lead} />
            </p>
            <p className="byline">
              {SITE.name} editoryal ekibi · Güncelleme: <time dateTime={SITE.updated}>{fmt(SITE.updated)}</time>
            </p>
          </div>
          <div className="ghero__media">
            <Media slot={g.heroMedia} priority ratio="3/2" sizes="(min-width: 960px) 36vw, 92vw" />
          </div>
        </div>
      </section>

      <section className="section section--paper gbody">
        <div className="container gbody__grid">
          <aside className="toc" aria-label="İçindekiler">
            <p className="toc__title">Bu yazıda</p>
            <ol>
              {g.sections.map((s) => (
                <li key={s.h2}>
                  <a href={`#${slugify(s.h2)}`}>{s.h2}</a>
                </li>
              ))}
            </ol>
            <Link href={g.primaryService.href} className="btn btn--primary btn--md toc__cta" data-track="guide_to_service_click" data-track-guide={g.slug} data-track-id="guide_toc">
              Teklif Alın
            </Link>
          </aside>

          <article className="article">
            {g.sections.map((s, i) => (
              <div key={s.h2}>
                <h2 id={slugify(s.h2)} className="h2 h2--article">
                  {s.h2}
                </h2>
                {s.paras.map((p, k) => (
                  <p key={k} className="prose">
                    <RichText text={p} />
                  </p>
                ))}
                {s.bullets && (
                  <ul className="dash-list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <RichText text={b} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="table-wrap" tabIndex={0} role="region" aria-label={s.h2}>
                    <table className="table">
                      <thead>
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r) => (
                          <tr key={r[0]}>
                            {r.map((c, k) =>
                              k === 0 ? (
                                <th key={k} scope="row">
                                  <RichText text={c} />
                                </th>
                              ) : (
                                <td key={k} data-label={s.table!.head[k]}>
                                  <RichText text={c} />
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.hotelBlock && <HotelTable block={s.hotelBlock} label={s.h2} />}
                {i === inlineAfter && (
                  <aside className="callout">
                    <p className="eyebrow">Fikri etkinliğe dönüştürün</p>
                    <p className="callout__text">{g.primaryService.pitch}</p>
                    <Link href={g.primaryService.href} className="arrow-link" data-track="guide_to_service_click" data-track-guide={g.slug} data-track-id="guide_inline">
                      {g.primaryService.label}
                    </Link>
                  </aside>
                )}
              </div>
            ))}

            {g.showDisclaimer && (
              <aside className="disclaimer" aria-label="Şeffaflık notu">
                <strong>Şeffaflık notu:</strong> {SITE.name} bağımsız bir etkinlik planlama ajansıdır; burada anılan otellerle resmî bir iş ortaklığı veya temsilcilik iddiasında bulunmuyoruz. Otel adları ve markalar ilgili sahiplerine aittir. Kapasite ve alan bilgileri yayımlanmış tesis ve MICE rehber verilerine dayanır; her satırın kaynağı tabloda verilmiştir ve teklif öncesi otel satış ekibiyle teyit edilir.
              </aside>
            )}

            <aside className="callout callout--end">
              <p className="eyebrow">Sonraki adım</p>
              <p className="callout__text">{g.primaryService.pitch}</p>
              <div className="callout__row">
                <Link href={g.primaryService.href} className="btn btn--primary btn--md" data-track="guide_to_service_click" data-track-guide={g.slug} data-track-id="guide_end">
                  {g.primaryService.label}
                </Link>
                <a href="#teklif" className="arrow-link" data-track="cta_click" data-track-id="guide_end_quote">
                  Doğrudan teklif isteyin
                </a>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <section className="section section--sand nextsec">
        <div className="container nextsec__grid">
          <div>
            <p className="eyebrow">İlgili hizmetler</p>
            <h2 className="h3 nextsec__title">Bu konuda destek alın</h2>
            <ul className="linkrows">
              {related.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className="linkrow linkrow--compact" data-track="guide_to_service_click" data-track-guide={g.slug} data-track-id="guide_related_service">
                    <span className="linkrow__label">{r.h1}</span>
                    <span className="linkrow__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Okumaya devam edin</p>
            <h2 className="h3 nextsec__title">İlgili rehberler</h2>
            <ul className="linkrows">
              {moreGuides.map((m) => (
                <li key={m.slug}>
                  <Link href={guidePath(m.slug)} className="linkrow linkrow--compact">
                    <span className="linkrow__label">{m.h1}</span>
                    <span className="linkrow__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {g.faq && <Faq items={g.faq} />}
      <QuoteSection
        formId={`quote_guide_${g.slug}`}
        defaultType={g.defaultEventType}
        defaultLocation={g.quoteDefaults?.location}
        defaultParticipants={g.quoteDefaults?.participants}
        heading={g.ctaHeading ?? "Fikirleri etkinliğe dönüştürelim"}
        text={g.ctaText ?? "Bu rehberdeki seçeneklerden hangisinin ekibinize uyduğunu birlikte belirleyelim; brief'inize göre konsept ve bütçe çerçevesi çıkaralım."}
      />
    </>
  );
}
