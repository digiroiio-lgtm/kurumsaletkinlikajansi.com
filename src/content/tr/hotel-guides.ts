import type { Guide, Hotel, Layout } from "../types";
import { hotels } from "./hotels";
import { TAG_LABEL, fmt, maxCap, publishableHalls, REGION_LABEL } from "../../lib/hotels";

const PUB = "2026-10-06";

/** Başlık uzunluğu için kısa adlar */
const SHORT: Record<string, string> = {
  "cornelia-diamond-golf-resort": "Cornelia Diamond",
  "kempinski-the-dome-belek": "Kempinski The Dome Belek",
  "maxx-royal-belek-golf-resort": "Maxx Royal Belek",
  "titanic-deluxe-golf-belek": "Titanic Deluxe Golf Belek",
};

const LAYOUT_ORDER: Layout[] = ["theatre", "banquet", "cocktail", "classroom"];

/**
 * Otel profili rehberi. Sabit iskelet + otele özgü editoryal metin (hotels.ts → editorial).
 * Sayılar yalnızca doğrulanmış (kaynaklı) satırlardan türetilir.
 */
export function buildHotelGuide(h: Hotel): Guide {
  const short = SHORT[h.id] ?? h.name;
  const halls = publishableHalls(h);
  const layouts = LAYOUT_ORDER.filter((l) => halls.some((x) => x.capacity?.[l]));
  const isBelek = h.region === "belek";
  const bestTheatre = Math.max(0, ...halls.map((x) => x.capacity?.theatre ?? 0));
  const bestAny = Math.max(0, ...halls.map((x) => maxCap(x)));

  const biggest = [...halls].sort((a, b) => maxCap(b) - maxCap(a))[0];
  const capacityNote = (size: number) => {
    if (!bestAny || !biggest) return "Bu otel için düzen bazında doğrulanmış kapasite yok; ölçek kararı otelin yazılı teyidine bağlı.";
    const ref = bestTheatre || bestAny;
    const unit = bestTheatre ? "tiyatro" : "en yüksek düzen";
    return ref >= size
      ? `${biggest.name}: ${fmt(ref)} kişi (${unit}) — bu ölçeği tek salonda karşılıyor.`
      : `${biggest.name}: ${fmt(ref)} kişi (${unit}) — bu ölçek için ek salon ya da başka otel gerekir.`;
  };

  const tagBullets = h.eventTags.map((t) => `**${TAG_LABEL[t]}**`);

  return {
    slug: h.slug,
    category: "Oteller",
    kind: "hotel",
    hotelId: h.id,
    intent: "commercial-investigation",
    metaTitle: `${short}: Kurumsal Etkinlik ve MICE Rehberi`,
    metaDescription: `${short}: kaynaklı salon alanları ve kapasiteler, uygun etkinlik türleri, outdoor imkânları ve 100/300/1.000 kişilik senaryolar. ${h.segment}.`.slice(0, 175),
    h1: `${short}: Kurumsal Etkinlik ve MICE Organizasyonu Rehberi`,
    lead: `${h.positioning[0]}. ${h.positioning[1]}.`,
    heroMedia: isBelek ? "guide-hotel-belek" : "guide-hotel-lara",
    published: PUB,
    showDisclaimer: true,
    defaultEventType: "toplanti",
    quoteDefaults: { location: isBelek ? "Belek" : "Antalya (şehir merkezi)" },
    ctaHeading: `${short} için etkinlik planı ve teklif alın`,
    ctaText: "Otel ve salon seçimini, teknik prodüksiyonu, transferi ve etkinlik operasyonunu tek noktadan planlayalım; teklif sürecinde otelin güncel kapasite ve koşulları teyit edilir.",
    sections: [
      {
        h2: `${short} kime uygun?`,
        paras: [...h.editorial.intro, `Konum ve segment: **${REGION_LABEL[h.region]}** · ${h.segment}.`],
      },
      {
        h2: "Toplantı ve etkinlik alanları",
        paras: [
          ...h.editorial.indoor,
          halls.length > 1
            ? `${short} için kaynağı doğrulanmış ${halls.length} salon/oda grubu aşağıda; tabloda yer almayan bir rakam doğrulanamadığı için yayınlanmamıştır.`
            : `${short} için şu an kaynağı doğrulanmış tek salon verisi aşağıda; tabloda yer almayan rakamlar doğrulanamadığı için yayınlanmamıştır.`,
        ],
        hotelBlock: { mode: "halls", filter: { ids: [h.id] }, layouts },
        bullets: h.facts.map((f) => `**${f.label}:** ${f.value} ([kaynak](${f.source.url}))`),
      },
      {
        h2: "Hangi etkinlik türleri için uygun?",
        paras: [
          `${h.positioning[1]}. Aşağıdaki başlıklar bu konumlandırmaya dayanan planlama değerlendirmesidir; belirli bir tarih ve düzen için uygunluk otelle ayrıca netleşir.`,
        ],
        bullets: tagBullets,
      },
      {
        h2: "Indoor ve outdoor imkânları",
        paras: h.editorial.outdoor,
        bullets: h.outdoor,
      },
      {
        h2: "Team building ve aktiviteler",
        paras: [
          ...h.editorial.teamBuilding,
          isBelek
            ? "Genel format seçenekleri için [Belek team building](/belek/team-building) sayfasına bakabilirsiniz."
            : "Genel format seçenekleri için [Antalya team building](/antalya/team-building) sayfasına bakabilirsiniz.",
        ],
      },
      {
        h2: "Gala ve akşam programı",
        paras: [...h.editorial.gala, "Gece programlarının prodüksiyon ve servis ayrıntıları için [gala organizasyonu](/gala-organizasyonu) sayfası var."],
      },
      { h2: "Ulaşım ve konum", paras: [h.editorial.access] },
      {
        h2: "100, 300 ve 1.000 kişilik örnek senaryolar",
        paras: ["Üç farklı ölçek için kurgulanabilecek örnek yaklaşımlar. Bunlar planlama örnekleridir; gerçek müşteri referansı değildir."],
        table: {
          head: ["Kişi sayısı", "Örnek kurgu", "Kapasite notu"],
          rows: h.editorial.scenarios.map((s) => [`${fmt(s.size)} kişi`, s.text, capacityNote(s.size)]),
        },
      },
    ],
    faq: [
      {
        q: `${short} kaç kişilik etkinliğe uygun?`,
        a: bestAny && biggest
          ? `Doğrulanmış en büyük tek salon verisi: ${biggest.name}${biggest.areaM2 ? ` (${fmt(biggest.areaM2)} m²)` : ""}, düzene göre ${fmt(bestAny)} kişiye kadar. Kesin kapasite oturma düzenine göre değişir; yazılı teyitle netleşir.`
          : `Düzen bazında doğrulanmış kapasite verisi henüz yok; ${biggest ? `${biggest.name} gibi alanların` : "salonların"} kullanım düzeni ve kapasitesi otelden yazılı olarak teyit edilir.`,
      },
      {
        q: `${short} hangi etkinlik türleri için öne çıkıyor?`,
        a: `Planlama açısından öne çıkan türler: ${h.eventTags.slice(0, 5).map((t) => TAG_LABEL[t].toLowerCase()).join(", ")}. ${h.positioning[0]}.`,
      },
      {
        q: `${short} çevresinde hangi aktiviteler programa eklenebilir?`,
        a: `${h.outdoor.join("; ")}. Hangi aktivitenin hangi sezon ve grup büyüklüğüyle sunulabildiği otelle teyit edilir.`,
      },
    ],
    primaryService: {
      href: isBelek ? "/belek/kurumsal-etkinlik-mekanlari" : "/antalya/kurumsal-etkinlik-mekanlari",
      label: isBelek ? "Belek etkinlik mekânları ve operasyon" : "Antalya etkinlik mekânları ve operasyon",
      pitch: `${short} dahil birden fazla otelden teklif almak, salon ve kapasite karşılaştırması yapmak ve etkinlik operasyonunu tek noktadan yürütmek için brief'inizi paylaşın.`,
    },
    related: isBelek
      ? ["/belek/kurumsal-etkinlik-mekanlari", "/belek/incentive", "/belek/gala-organizasyonu", "/kurumsal-etkinlik-organizasyonu"]
      : ["/antalya/kurumsal-etkinlik-mekanlari", "/bayi-toplantisi-organizasyonu", "/gala-organizasyonu", "/kurumsal-etkinlik-organizasyonu"],
    relatedGuides: isBelek
      ? ["belek-kurumsal-etkinlik-mekanlari", "belek-kongre-otelleri", "antalya-mi-belek-mi"]
      : ["antalya-kurumsal-etkinlik-mekanlari", "antalya-bayi-toplantisi-otelleri", "antalya-mi-belek-mi"],
  };
}

export const hotelGuides: Guide[] = hotels.map(buildHotelGuide);
