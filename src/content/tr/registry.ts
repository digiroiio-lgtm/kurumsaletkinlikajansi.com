import type { Guide, PageContent } from "../types";
import { servicesCore } from "./services-core";
import { servicesPrograms } from "./services-programs";
import { servicesOps } from "./services-ops";
import { antalyaPages } from "./antalya";
import { belekPages } from "./belek";
import { guidesIdeas } from "./guides-ideas";
import { guidesPlanning } from "./guides-planning";
import { guidesConcepts } from "./guides-concepts";
import { guidesVenues } from "./guides-venues";
import { hotelGuides } from "./hotel-guides";
import { hotelIndexable, getHotel, matchingHotelCount } from "../../lib/hotels";

export const servicePages: PageContent[] = [...servicesCore, ...servicesPrograms, ...servicesOps];
export const pages: PageContent[] = [...servicePages, ...antalyaPages, ...belekPages];

/**
 * YAYIN KAPISI (doğrulanmış veri):
 *  - capacity rehberi: ilk otel bloğunu sağlayan doğrulanmış otel sayısı `minVerifiedHotels`'in altındaysa yayınlanmaz
 *  - otel profili: doğrulanmış satır sayısı eşiğin altındaysa yayınlanmaz
 * Yayınlanmayanlar `unpublishedGuides` içinde gerekçeyle listelenir (scripts/audit-content.ts raporlar).
 */
const all: Guide[] = [...guidesIdeas, ...guidesPlanning, ...guidesConcepts, ...guidesVenues, ...hotelGuides];
export const unpublishedGuides: { slug: string; reason: string }[] = [];

const gate = (g: Guide): boolean => {
  if (g.kind === "hotel") {
    const h = g.hotelId ? getHotel(g.hotelId) : undefined;
    if (!h || !hotelIndexable(h)) return (unpublishedGuides.push({ slug: g.slug, reason: "doğrulanmış otel verisi eşiğin altında" }), false);
  }
  if (g.kind === "capacity" && g.minVerifiedHotels) {
    const block = g.sections.find((s) => s.hotelBlock)?.hotelBlock;
    const n = block ? matchingHotelCount(block.filter) : 0;
    if (n < g.minVerifiedHotels) return (unpublishedGuides.push({ slug: g.slug, reason: `doğrulanmış otel ${n} < ${g.minVerifiedHotels}` }), false);
  }
  return true;
};

const published = all.filter(gate);
const slugs = new Set(published.map((g) => g.slug));
// Yayınlanmamış rehberlere verilen ilişkili rehber referansları sessizce düşürülür (audit'te raporlanır)
export const guides: Guide[] = published.map((g) => ({ ...g, relatedGuides: g.relatedGuides.filter((s) => slugs.has(s)) }));
export const droppedRelations = published.flatMap((g) => g.relatedGuides.filter((s) => !slugs.has(s)).map((s) => `${g.slug} → ${s}`));

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
