import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Media } from "@/components/Media";
import { QuoteSection } from "@/components/QuoteSection";
import { guides, guidePath } from "@/content/tr/registry";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const crumbs = [{ label: "Rehberler", href: "/rehberler" }];

export const metadata: Metadata = buildMetadata({
  title: "Kurumsal Etkinlik Rehberleri | Fikirler, Planlama, Antalya & Belek",
  description:
    "Kurumsal etkinlik fikirleri, team building ve motivasyon etkinlikleri, bütçe ve planlama rehberleri; Antalya ve Belek'e özel mekân ve aktivite önerileri.",
  path: "/rehberler",
});

const CATEGORIES: { key: (typeof guides)[number]["category"]; title: string; text: string }[] = [
  { key: "Fikirler", title: "Etkinlik fikirleri", text: "Ekibinize uyan formatı bulmak için örnekler ve karşılaştırmalar." },
  { key: "Planlama", title: "Planlama ve seçim", text: "Bütçe, takvim, ajans ve format seçimi için karar rehberleri." },
  { key: "Kavramlar", title: "Kavramlar", text: "Incentive, retreat ve bayi toplantısı gibi formatların ne olduğu ve nasıl kurulduğu." },
  { key: "Destinasyon", title: "Antalya & Belek", text: "Lokasyona özel mekân, aktivite ve karşılaştırma yazıları." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Kurumsal Etkinlik Rehberleri",
            url: absoluteUrl("/rehberler"),
            hasPart: guides.map((g) => ({ "@type": "Article", headline: g.h1, url: absoluteUrl(guidePath(g.slug)) })),
          },
        ]}
      />
      <section className="ghero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <p className="eyebrow">Rehberler</p>
          <h1 className="h1 h1--guide">Kurumsal etkinlik rehberleri</h1>
          <p className="lead lead--hero">
            Fikir aşamasından bütçeye, Antalya ve Belek'te mekân seçiminden ajans seçimine kadar planlamanın her adımı için pratik rehberler. Hazır olduğunuzda
            her rehber sizi ilgili hizmete ve teklif formuna götürür.
          </p>
        </div>
      </section>
      {CATEGORIES.map((c, i) => {
        const list = guides.filter((g) => g.category === c.key);
        if (!list.length) return null;
        return (
          <section key={c.key} className={`section ${i % 2 ? "section--sand" : "section--paper"}`}>
            <div className="container">
              <header className="sec-head">
                <h2 className="h2">{c.title}</h2>
                <p className="lead">{c.text}</p>
              </header>
              <ul className="gcards">
                {list.map((g) => (
                  <li key={g.slug}>
                    <Link href={guidePath(g.slug)} className="gcard">
                      <Media slot={g.heroMedia} ratio="3/2" sizes="(min-width: 960px) 30vw, 92vw" />
                      <span className="gcard__body">
                        <span className="gcard__title">{g.h1}</span>
                        <span className="gcard__text">{g.metaDescription}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <QuoteSection formId="quote_guides_index" />
    </>
  );
}
