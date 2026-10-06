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

/* ---------- Otel / kapasite veri modeli (docs/HOTEL-DATA.md) ---------- */
export type Region = "belek" | "antalya-lara";
export type EventTag =
  | "kongre" | "konferans" | "bayi-toplantisi" | "satis-toplantisi" | "yonetim-toplantisi" | "workshop" | "egitim"
  | "urun-lansmani" | "gala" | "odul-toreni" | "kokteyl" | "fuar" | "basin-lansmani" | "kick-off" | "board-meeting"
  | "incentive" | "team-building" | "golf-etkinligi" | "retreat";
export type Layout = "theatre" | "banquet" | "cocktail" | "classroom";
export type Source = {
  url: string;
  label: string;
  /** official: otelin kendi sayfası · trade-listing: MICE/venue rehber listesi */
  type: "official" | "trade-listing";
  retrievedAt: string; // ISO tarih
};
export type Hall = {
  name: string;
  areaM2?: number;
  capacity?: Partial<Record<Layout, number>>;
  divisible?: string;
  /** Yalnızca `verified` + kaynaklı satırlar sayfada yayınlanır */
  status: "verified" | "pending";
  source?: Source;
};
export type HotelFact = { label: string; value: string; source: Source };
export type Hotel = {
  id: string;
  slug: string; // /rehberler/<slug>
  name: string;
  region: Region;
  segment: string;
  positioning: string[];
  eventTags: EventTag[];
  outdoor: string[];
  facts: HotelFact[];
  halls: Hall[];
  /** Doğrulanamayan/çelişen iddialar — sayfada GÖSTERİLMEZ, yalnızca denetim için */
  pendingClaims: string[];
  editorial: {
    intro: string[];
    indoor: string[];
    outdoor: string[];
    teamBuilding: string[];
    gala: string[];
    access: string;
    scenarios: { size: number; text: string }[];
  };
};
export type HotelFilter = {
  region?: Region;
  ids?: string[];
  tag?: EventTag;
  /** Doğrulanmış tek salon kapasitesi en az n olan oteller/salonlar */
  minCapacity?: { layout: Layout; n: number };
};
export type HotelBlock = {
  mode: "halls" | "hotels";
  filter: HotelFilter;
  layouts: Layout[];
  caption?: string;
};

export type GuideSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
  /** Veriden otomatik üretilen otel/salon tablosu */
  hotelBlock?: HotelBlock;
};

export type Guide = {
  slug: string;
  category: "Fikirler" | "Planlama" | "Kavramlar" | "Destinasyon" | "Oteller" | "Kapasite & Etkinlik Türü";
  intent: "informational" | "commercial-investigation";
  /** hub: destinasyon mekân hub'ı · hotel: otel profili · capacity: kapasite/etkinlik türü listesi */
  kind?: "hub" | "hotel" | "capacity";
  hotelId?: string;
  /** Bu rehberin yayınlanması için gereken en az doğrulanmış otel sayısı (capacity) */
  minVerifiedHotels?: number;
  /** Teklif formunu önceden dolduran varsayılanlar */
  quoteDefaults?: { participants?: number; location?: string };
  ctaHeading?: string;
  ctaText?: string;
  showDisclaimer?: boolean;
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
