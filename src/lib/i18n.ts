/**
 * İngilizce sürüm için hazırlık.
 *
 * Şu an yalnızca `tr` aktif ve URL'lerde önek yok. `/en/` eklenirken:
 *  1. `locales` listesine "en" eklenir, `prefixFor("en")` => "/en" döner.
 *  2. `src/content/en/*` altında aynı tipli içerik dosyaları üretilir (types.ts ortak).
 *  3. `app/en/...` rotaları aynı `PageTemplate` bileşenlerini farklı içerik kaynağıyla çağırır.
 *  4. `seo.ts` içindeki `alternates.languages` otomatik olarak hreflang üretir (aşağıya bakın).
 * Detay: docs/ARCHITECTURE.md → "Çok dilli mimari".
 */
export const locales = ["tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const prefixFor = (locale: Locale): string => (locale === defaultLocale ? "" : `/${locale}`);

export const localizePath = (path: string, locale: Locale = defaultLocale): string => {
  const p = path.startsWith("/") ? path : `/${path}`;
  const prefix = prefixFor(locale);
  return p === "/" ? prefix || "/" : `${prefix}${p}`;
};

/** Yayında olan diller için hreflang haritası. Tek dil varken boş döner (self-referencing eklenmez). */
export const hreflangFor = (path: string): Record<string, string> | undefined => {
  if (locales.length < 2) return undefined;
  return Object.fromEntries(locales.map((l) => [l, localizePath(path, l)]));
};
