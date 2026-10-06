import Script from "next/script";
import { SITE } from "@/lib/site";

/**
 * GTM tercih edilir (tüm olaylar dataLayer'a düşer). GTM yoksa ve GA4 ID varsa gtag doğrudan yüklenir.
 * İkisi de tanımlı değilse hiçbir üçüncü taraf script yüklenmez (Lighthouse temiz kalır).
 * NOT: KVKK/GDPR gereği çerez onayı için bir CMP (ör. GTM içinde Consent Mode v2) kurulmalıdır — docs/ANALYTICS.md.
 */
export function Analytics() {
  const { gtmId, gaId } = SITE;
  if (gtmId) {
    return (
      <>
        <Script id="gtm" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
(function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </>
    );
  }
  if (gaId) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
        </Script>
      </>
    );
  }
  return null;
}
