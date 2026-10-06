/** İçerik modeli — tüm sayfa tipleri bu şemalarla yazılır; şablonlar yalnızca bunları render eder. */

export type SlotKey = string;
export type QA = { q: string; a: string };
export type Crumb = { label: string; href: string };

/** Formdaki "Etkinlik Türü" değerleri. */
export const EVENT_TYPES = [
  { value: "team-building", label: "Team Building" },
  { value: "incentive", label: "Incentive" },
  { value: "gala", label: "Gala" },
  { value: "corporate-retreat", label: "Corporate Retreat" },
  { value: "toplanti", label: "Toplantı" },
  { value: "lansman", label: "Lansman" },
  { value: "outdoor", label: "Outdoor Activity" },
  { value: "kongre", label: "Kongre / Konferans" },
  { value: "diger", label: "Diğer" },
] as const;
export type EventTypeValue = (typeof EVENT_TYPES)[number]["value"];

export type Tone = "paper" | "sand" | "ink";

/**
 * Sayfa bölümleri. Her sayfa kendi bölüm dizisini taşır; böylece sayfalar
 * aynı iskeletin kelime değiştirilmiş kopyası olmaz.
 * Metin alanlarında `[etiket](/yol)` iç link ve `**kalın**` söz dizimi desteklenir.
 */
export type Section =
  | {
      kind: "split";
      eyebrow?: string;
      title: string;
      body: string[];
      bullets?: string[];
      media?: SlotKey;
      mediaSide?: "left" | "right";
      arch?: boolean;
      tone?: Tone;
      cta?: { label: string; href: string };
    }
  | {
      kind: "index";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: { title: string; text: string; tag?: string; href?: string }[];
      tone?: Tone;
    }
  | { kind: "steps"; eyebrow?: string; title: string; intro?: string; items: { title: string; text: string }[]; tone?: Tone }
  | {
      kind: "scenarios";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: { title: string; text: string; group: string; duration: string; format: string; media?: SlotKey }[];
      tone?: Tone;
    }
  | { kind: "table"; eyebrow?: string; title: string; intro?: string; head: string[]; rows: string[][]; note?: string; tone?: Tone }
  | { kind: "pull"; text: string; tone?: Tone }
  | { kind: "checklist"; eyebrow?: string; title: string; intro?: string; items: string[]; tone?: Tone }
  | { kind: "links"; eyebrow?: string; title: string; intro?: string; items: { label: string; href: string; text: string }[]; tone?: Tone };

export type PageContent = {
  path: string;
  kind: "service" | "destination";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  lead: string;
  heroMedia: SlotKey;
  defaultEventType?: EventTypeValue;
  crumbs: Crumb[]; // Ana sayfa hariç, son öğe geçerli sayfa
  sections: Section[];
  faq: QA[];
  related: string[]; // path
  guides: string[]; // guide slug
  serviceType: string; // Service schema
  areaServed: string[];
  ctaHeading?: string;
  ctaText?: string;
};

export type GuideSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type Guide = {
  slug: string;
  category: "Fikirler" | "Planlama" | "Kavramlar" | "Destinasyon";
  intent: "informational" | "commercial-investigation";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  heroMedia: SlotKey;
  published: string;
  sections: GuideSection[];
  faq?: QA[];
  /** Rehberden akışın taşınacağı ticari sayfa */
  primaryService: { href: string; label: string; pitch: string };
  related: string[]; // path
  relatedGuides: string[]; // slug
  defaultEventType?: EventTypeValue;
};
