import type { MetadataRoute } from "next";
import { guides, guidePath, pages } from "@/content/tr/registry";
import { SITE, absoluteUrl } from "@/lib/site";

/** İndekslenebilir tüm URL'ler içerik kayıt defterinden üretilir; elle liste tutulmaz. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.updated);
  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/rehberler"), lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];
  const commercial = pages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: p.path.split("/").length === 2 ? 0.9 : 0.8,
  }));
  const info = guides.map((g) => ({
    url: absoluteUrl(guidePath(g.slug)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...core, ...commercial, ...info];
}
