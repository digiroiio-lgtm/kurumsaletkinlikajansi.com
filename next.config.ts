import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Kritik CSS HTML içine gömülür: render-blocking stylesheet isteği ortadan kalkar (LCP).
  experimental: { inlineCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    // /antalya ve /belek kök adresleri ayrı sayfa değil; birincil destinasyon sayfasına yönlenir (duplicate/thin hub üretmemek için).
    return [
      { source: "/antalya", destination: "/antalya/kurumsal-etkinlik", permanent: true },
      { source: "/belek", destination: "/belek/kurumsal-etkinlik", permanent: true },
      // Birleşen "mekân seçimi" rehberleri → yeni hub rehberler (301)
      { source: "/rehberler/antalya-kurumsal-etkinlik-mekani-secimi", destination: "/rehberler/antalya-kurumsal-etkinlik-mekanlari", permanent: true },
      { source: "/rehberler/belek-kurumsal-etkinlik-mekani-secimi", destination: "/rehberler/belek-kurumsal-etkinlik-mekanlari", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default config;
