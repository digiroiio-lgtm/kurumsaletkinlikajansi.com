import Link from "next/link";
import type { PageContent } from "@/content/types";
import { getGuide, requirePage, guidePath } from "@/content/tr/registry";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { Cta } from "./Cta";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { Media } from "./Media";
import { QuoteSection } from "./QuoteSection";
import { RichText } from "./RichText";
import { Sections } from "./Sections";

export function PageTemplate({ page }: { page: PageContent }) {
  const related = page.related.map(requirePage);
  const guides = page.guides.map((g) => getGuide(g)).filter((g): g is NonNullable<typeof g> => Boolean(g));
  const location = page.areaServed.join(" & ");
  const secondary = guides[0];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(page.crumbs), serviceSchema(page), faqSchema(page.faq)]} />

      <section className="phero">
        <div className="container phero__grid">
          <div className="phero__copy">
            <Breadcrumbs crumbs={page.crumbs} />
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="h1">{page.h1}</h1>
            <p className="lead lead--hero">
              <RichText text={page.lead} />
            </p>
            <div className="phero__cta">
              <Cta id="hero_quote" size="lg">
                Etkinliğiniz İçin Teklif Alın
              </Cta>
              {secondary && (
                <Link href={guidePath(secondary.slug)} className="arrow-link" data-track="cta_click" data-track-id="hero_secondary_guide">
                  {secondary.h1.length > 44 ? "İlgili rehberi okuyun" : secondary.h1}
                </Link>
              )}
            </div>
            <dl className="facts">
              <div>
                <dt>Ne yapıyoruz</dt>
                <dd>{page.serviceType}</dd>
              </div>
              <div>
                <dt>Nerede</dt>
                <dd>{location}</dd>
              </div>
              <div>
                <dt>Nasıl teklif alırsınız</dt>
                <dd>2 adımlı kısa form</dd>
              </div>
            </dl>
          </div>
          <div className="phero__media">
            <Media slot={page.heroMedia} arch priority ratio="4/5" sizes="(min-width: 960px) 40vw, 90vw" />
          </div>
        </div>
      </section>

      <Sections sections={page.sections} ctaText={page.ctaText} />

      {(related.length > 0 || guides.length > 0) && (
        <section className="section section--paper nextsec">
          <div className="container nextsec__grid">
            {related.length > 0 && (
              <div>
                <p className="eyebrow">Birlikte planlanan hizmetler</p>
                <h2 className="h3 nextsec__title">Aynı brief'in devamı</h2>
                <ul className="linkrows">
                  {related.map((r) => (
                    <li key={r.path}>
                      <Link href={r.path} className="linkrow linkrow--compact">
                        <span className="linkrow__label">{r.h1}</span>
                        <span className="linkrow__arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {guides.length > 0 && (
              <div>
                <p className="eyebrow">Rehberler</p>
                <h2 className="h3 nextsec__title">Karar vermeden önce okuyun</h2>
                <ul className="linkrows">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={guidePath(g.slug)} className="linkrow linkrow--compact">
                        <span className="linkrow__label">{g.h1}</span>
                        <span className="linkrow__arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <Faq items={page.faq} />
      <QuoteSection
        formId={`quote_${page.path.replace(/\//g, "_").replace(/^_/, "")}`}
        defaultType={page.defaultEventType}
        defaultLocation={page.path.startsWith("/belek") ? "Belek" : page.path.startsWith("/antalya") ? "Antalya (şehir merkezi)" : undefined}
        heading={page.ctaHeading}
        text={page.ctaText}
      />
    </>
  );
}
