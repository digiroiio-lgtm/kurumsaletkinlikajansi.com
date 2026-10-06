import { hotels } from "../content/tr/hotels";
import type { Hall, Hotel, HotelBlock, HotelFilter, Layout } from "../content/types";

/** Doğrulanmış veri kapısı: yalnızca `verified` + kaynaklı salonlar yayınlanır. */
export const isPublishable = (h: Hall) => h.status === "verified" && Boolean(h.source?.url && h.source.retrievedAt);
export const publishableHalls = (h: Hotel) => h.halls.filter(isPublishable);

/** Otel profili indekslensin diye en az bu kadar doğrulanmış satır (salon + olgu) gerekir. */
export const HOTEL_INDEX_THRESHOLD = 2;
export const hotelScore = (h: Hotel) => publishableHalls(h).length + h.facts.length;
export const hotelIndexable = (h: Hotel) => hotelScore(h) >= HOTEL_INDEX_THRESHOLD;

export const getHotel = (id: string) => hotels.find((h) => h.id === id);
export const hotelBySlug = (slug: string) => hotels.find((h) => h.slug === slug);

const matchesHotel = (h: Hotel, f: HotelFilter) =>
  (!f.region || h.region === f.region) && (!f.ids || f.ids.includes(h.id)) && (!f.tag || h.eventTags.includes(f.tag));

export type HallRow = { hotel: Hotel; hall: Hall };

/** Filtreye uyan doğrulanmış salon satırları (kapasite filtresi tek salon düzeyinde uygulanır). */
export function hallRows(f: HotelFilter): HallRow[] {
  const rows: HallRow[] = [];
  for (const hotel of hotels) {
    if (!matchesHotel(hotel, f)) continue;
    for (const hall of publishableHalls(hotel)) {
      // Liste sayfalarında sayısal veri taşımayan salonlar (ör. yalnızca "bölünebilir" notu) gösterilmez.
      if (!f.ids && !hall.areaM2 && !maxCap(hall)) continue;
      if (f.minCapacity) {
        const v = hall.capacity?.[f.minCapacity.layout];
        if (!v || v < f.minCapacity.n) continue;
      }
      rows.push({ hotel, hall });
    }
  }
  return rows.sort((a, b) => maxCap(b.hall) - maxCap(a.hall));
}

export const maxCap = (hall: Hall, layouts?: Layout[]) =>
  Math.max(0, ...Object.entries(hall.capacity ?? {}).filter(([k]) => !layouts || layouts.includes(k as Layout)).map(([, v]) => v ?? 0));

/** Filtreyi sağlayan benzersiz otel sayısı */
export const matchingHotelCount = (f: HotelFilter) => new Set(hallRows(f).map((r) => r.hotel.id)).size;

/** Bloğun yayınlanabilir (gerçek veri içeren) satırı var mı? */
export const blockHotelCount = (b: HotelBlock) => (b.mode === "hotels" || b.mode === "halls" ? matchingHotelCount(b.filter) : 0);

/** Otel sayfası için: filtre yokken tüm doğrulanmış oteller */
export const hotelsInRegion = (region?: Hotel["region"]) => hotels.filter((h) => !region || h.region === region);

export const LAYOUT_LABEL: Record<Layout, string> = {
  theatre: "Tiyatro",
  banquet: "Banket",
  cocktail: "Kokteyl",
  classroom: "Sınıf",
};
export const REGION_LABEL: Record<Hotel["region"], string> = { belek: "Belek", "antalya-lara": "Antalya · Lara" };
export const TAG_LABEL: Record<string, string> = {
  kongre: "Kongre", konferans: "Konferans", "bayi-toplantisi": "Bayi toplantısı", "satis-toplantisi": "Satış toplantısı",
  "yonetim-toplantisi": "Yönetim toplantısı", workshop: "Workshop", egitim: "Eğitim", "urun-lansmani": "Ürün lansmanı",
  gala: "Gala", "odul-toreni": "Ödül töreni", kokteyl: "Kokteyl", fuar: "Fuar / sergi", "basin-lansmani": "Basın lansmanı",
  "kick-off": "Company kick-off", "board-meeting": "Board meeting", incentive: "Incentive", "team-building": "Team building",
  "golf-etkinligi": "Golf etkinliği", retreat: "Retreat",
};
export const fmt = (n: number) => n.toLocaleString("tr-TR");
