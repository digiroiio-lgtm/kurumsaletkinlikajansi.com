import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";
import { hreflangFor } from "./i18n";

type Args = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/** Tüm sayfalar için canonical + OG + Twitter üretir. `title` marka eki OLMADAN, tam başlıktır. */
export function buildMetadata({ title, description, path, type = "website", publishedTime, modifiedTime, noindex }: Args): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: hreflangFor(path) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE.name,
      locale: "tr_TR",
      images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: `${SITE.name} — Antalya & Belek` }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og.png")] },
  };
}
