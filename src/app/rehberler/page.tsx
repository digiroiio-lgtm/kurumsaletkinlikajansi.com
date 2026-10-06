import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Media } from "@/components/Media";
import { QuoteSection } from "@/components/QuoteSection";
import type { Guide } from "@/content/types";
import { getGuide, guides, guidePath } from "@/content/tr/registry";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const crumbs = [{ label: "Rehberler", href: "/rehberler" }];

export const metadata: Metadata = buildMetadata({
  title: "Antalya & Belek MICE ve Kurumsal Etkinlik Rehberleri",
  description:
    "Antalya ve Belek kongre otelleri, etkinlik mekanları, salon kapasiteleri, otel profilleri; team building, incentive ve planlama rehberleri. Doğrulanmış verilerle MICE destinasyon rehberi.",
  path: "/rehberler",
});

type Cluster = { key: string; title: string; text: string; pick: (g: Guide) => boolean; compact?: boolean };

const CLUSTERS: Cluster[] = [
  { key: "mekan", title: "Destinasyon ve mekân rehberleri", text: "Antalya ve Belek'te mekân, gala ve MICE rehberleri.", pick: (g) => g.category === "Destinasyon" },
  { key: "otel-liste", title: "Kongre, toplantı ve bayi toplantısı otelleri", text: "Etkinlik türüne göre otel ve salon karşılaştırmaları (doğrulanmış kapasitelerle).", pick: (g) => g.category === "Oteller" && g.kind === "capacity", compact: true },
  { key: "kapasite", title: "Kapasiteye ve etkinlik türüne göre", text: "500 ve 1.000 kişilik etkinlikler, ürün lansmanı mekânları.", pick: (g) => g.category === "Kapasite & Etkinlik Türü", compact: true },
  { key: "otel", title: "Otel profilleri", text: "Belek ve Lara'daki başlıca kongre otellerinin planlama gözüyle değerlendirmesi.", pick: (g) => g.kind === "hotel", compact: true },
  { key: "fikir", title: "Etkinlik fikirleri", text: "Ekibinize uyan formatı bulmak için örnekler ve karşılaştırmalar.", pick: (g) => g.category === "Fikirler" },
  { key: "planlama", title: "Planlama ve seçim", text: "Bütçe, takvim, ajans ve format seçimi için karar rehberleri.", pick: (g) => g.category === "Planlama" },
  { key: "kavram", title: "Kavramlar", text: "Incentive, retreat ve bayi toplantısı gibi formatların ne olduğu ve nasıl kurulduğu.", pick: (g) => g.category === "Kavramlar" },
];

const FEATURED = ["antalya-kurumsal-etkinlik-mekanlari", "belek-kurumsal-etkinlik-mekanlari", "antalya-kongre-otelleri"];

export default function Page() {
  const featured = FEATURED.map((s) => getGuide(s)).filter((g): g is Guide => Boolean(g));
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Antalya & Belek MICE ve Kurumsal Etkinlik Rehberleri",
            url: absoluteUrl("/rehberler"),
            hasPart: guides.map((g) => ({ "@type": "Article", headline: g.h1, url: absoluteUrl(guidePath(g.slug)) })),
          },
        ]}
      />
      <section className="ghero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <p className="eyebrow">Rehberler</p>
          <h1 className="h1 h1--guide">Antalya & Belek MICE ve kurumsal etkinlik rehberleri</h1>
          <p className="lead lead--hero">
            Kongre otelleri, etkinlik mekânları, salon kapasiteleri, otel profilleri; team building, incentive ve planlama rehberleri. Her rehber sizi ilgili hizmete ve teklif formuna götürür.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <header className="sec-head">
            <p className="eyebrow">Önce buradan başlayın</p>
            <h2 className="h2">En çok başvurulan üç rehber</h2>
          </header>
          <ul className="gcards">
            {featured.map((g) => (
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

      {CLUSTERS.map((c, i) => {
        const list = guides.filter((g) => c.pick(g));
        if (!list.length) return null;
        return (
          <section key={c.key} className={`section ${i % 2 ? "section--paper" : "section--sand"}`}>
            <div className="container">
              <header className="sec-head">
                <h2 className="h2">{c.title}</h2>
                <p className="lead">{c.text}</p>
              </header>
              {c.compact ? (
                <ul className="linkrows linkrows--cols">
                  {list.map((g) => (
                    <li key={g.slug}>
                      <Link href={guidePath(g.slug)} className="linkrow">
                        <span className="linkrow__label">{g.h1}</span>
                        <span className="linkrow__arrow" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
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
              )}
            </div>
          </section>
        );
      })}
      <QuoteSection formId="quote_guides_index" />
    </>
  );
}
