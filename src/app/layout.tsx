import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import "@/styles/fonts.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/sections.css";
import "@/styles/forms.css";
import "@/styles/home.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCta } from "@/components/StickyCta";
import { TrackingListener } from "@/components/TrackingListener";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Antalya & Belek Kurumsal Etkinlik Ajansı", template: "%s" },
  description:
    "Antalya ve Belek'te kurumsal etkinlik, team building, incentive, toplantı, gala ve outdoor organizasyonları.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  formatDetection: { telephone: false, email: false, address: false },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f1",
};

const FONTS = ["fraunces-latin", "manrope-latin", "fraunces-tr", "manrope-tr"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Kritik yoldaki fontlar CSS'ten keşfedilmeden önce preload edilir (LCP metin öğesi için).
  for (const f of FONTS) preload(`/fonts/${f}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang={SITE.language}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <TrackingListener />
        <Analytics />
      </body>
    </html>
  );
}
