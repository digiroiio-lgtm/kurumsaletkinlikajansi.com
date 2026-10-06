import Link from "next/link";
import type { Guide } from "@/content/types";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { slugify } from "@/lib/slug";
import { SITE } from "@/lib/site";
import { requirePage, requireGuide, guidePath } from "@/content/tr/registry";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
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

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(g), ...(g.faq ? [faqSchema(g.faq)] : [])]} />

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
        heading="Fikirleri etkinliğe dönüştürelim"
        text="Bu rehberdeki seçeneklerden hangisinin ekibinize uyduğunu birlikte belirleyelim; brief'inize göre konsept ve bütçe çerçevesi çıkaralım."
      />
    </>
  );
}
