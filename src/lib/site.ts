/**
 * Tek doğruluk kaynağı: marka, iletişim ve sabit URL bilgileri.
 * İletişim alanları ortam değişkeninden gelir; boşsa ilgili buton/alan hiç render edilmez
 * (uydurma telefon / adres göstermiyoruz).
 */
const clean = (v: string | undefined) => (v && v.trim() !== "" ? v.trim() : undefined);

export const SITE = {
  name: "Kurumsal Etkinlik Ajansı",
  shortName: "Kurumsal Etkinlik Ajansı",
  tagline: "Antalya & Belek",
  url: (clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://kurumsaletkinlikajansi.com").replace(/\/$/, ""),
  locale: "tr-TR",
  language: "tr",
  contact: {
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: clean(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  },
  gtmId: clean(process.env.NEXT_PUBLIC_GTM_ID),
  gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
  /** İçerik son güncelleme tarihi (sitemap lastmod ve schema dateModified için). */
  updated: "2026-10-06",
} as const;

export const absoluteUrl = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;

export const whatsappHref = (text = "Merhaba, kurumsal etkinlik için teklif almak istiyorum.") =>
  SITE.contact.whatsapp
    ? `https://wa.me/${SITE.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`
    : undefined;

export const phoneHref = () => (SITE.contact.phone ? `tel:${SITE.contact.phone.replace(/\s/g, "")}` : undefined);
