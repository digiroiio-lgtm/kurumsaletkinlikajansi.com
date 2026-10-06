import type { Guide, PageContent } from "../types";
import { servicesCore } from "./services-core";
import { servicesPrograms } from "./services-programs";
import { servicesOps } from "./services-ops";
import { antalyaPages } from "./antalya";
import { belekPages } from "./belek";
import { guidesIdeas } from "./guides-ideas";
import { guidesPlanning } from "./guides-planning";
import { guidesConcepts } from "./guides-concepts";

export const servicePages: PageContent[] = [...servicesCore, ...servicesPrograms, ...servicesOps];
export const pages: PageContent[] = [...servicePages, ...antalyaPages, ...belekPages];
export const guides: Guide[] = [...guidesIdeas, ...guidesPlanning, ...guidesConcepts];

const pageMap = new Map(pages.map((p) => [p.path, p]));
const guideMap = new Map(guides.map((g) => [g.slug, g]));

export const getPage = (path: string): PageContent | undefined => pageMap.get(path);
export const getGuide = (slug: string): Guide | undefined => guideMap.get(slug);
export const requirePage = (path: string): PageContent => {
  const p = pageMap.get(path);
  if (!p) throw new Error(`Bilinmeyen sayfa yolu: ${path}`);
  return p;
};
export const requireGuide = (slug: string): Guide => {
  const g = guideMap.get(slug);
  if (!g) throw new Error(`Bilinmeyen rehber: ${slug}`);
  return g;
};

export const guidePath = (slug: string) => `/rehberler/${slug}`;
export const pagesIn = (prefix: string) => pages.filter((p) => p.path.startsWith(prefix));
