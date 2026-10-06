import { SITE, absoluteUrl } from "./site";
import type { Crumb, Guide, PageContent, QA } from "@/content/types";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Organization + ProfessionalService. Adres/telefon yalnızca ortam değişkeniyle verildiyse eklenir. */
export function organizationSchema() {
  const { email, phone } = SITE.contact;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/og.png"),
    description:
      "Antalya ve Belek'te kurumsal etkinlik, team building, incentive, toplantı, gala ve outdoor organizasyonlarını konseptten saha operasyonuna yöneten etkinlik ajansı.",
    areaServed: [
      { "@type": "City", name: "Antalya" },
      { "@type": "Place", name: "Belek, Serik, Antalya" },
    ],
    knowsAbout: ["Kurumsal etkinlik", "Team building", "Incentive", "MICE", "Corporate retreat", "Etkinlik personeli", "Etkinlik mekanları"],
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.language,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  const all = [{ label: "Ana Sayfa", href: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function serviceSchema(page: PageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.serviceType,
    description: page.metaDescription,
    url: absoluteUrl(page.path),
    provider: { "@id": ORG_ID },
    areaServed: page.areaServed.map((n) => ({ "@type": "Place", name: n })),
    audience: { "@type": "BusinessAudience", name: "Şirketler, acenteler, İK ve etkinlik ekipleri" },
  };
}

/** Yalnızca sayfada GÖRÜNEN SSS için kullanılmalı. */
export function faqSchema(faq: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripMarkup(f.a) },
    })),
  };
}

export function articleSchema(g: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.metaDescription,
    datePublished: g.published,
    dateModified: SITE.updated,
    inLanguage: SITE.language,
    mainEntityOfPage: absoluteUrl(`/rehberler/${g.slug}`),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** `[etiket](/yol)` ve `**kalın**` işaretlerini düz metne indirger. */
export function stripMarkup(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}
