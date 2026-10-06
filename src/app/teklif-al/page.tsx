import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, phoneHref, whatsappHref } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kurumsal Etkinlik Teklifi Alın | Antalya & Belek",
  description: "Antalya ve Belek'teki kurumsal etkinliğiniz için iki adımda teklif talebi oluşturun: tür, katılımcı sayısı, tarih ve bütçe çerçevesi yeterli.",
  path: "/teklif-al",
  noindex: true,
});

export default function Page() {
  const wa = whatsappHref();
  const tel = phoneHref();
  const { email } = SITE.contact;
  return (
    <section className="section section--sand qpage">
      <div className="container qpage__grid">
        <div>
          <Breadcrumbs crumbs={[{ label: "Teklif Al", href: "/teklif-al" }]} />
          <p className="eyebrow">Teklif</p>
          <h1 className="h1 h1--guide">Etkinliğiniz için teklif alın</h1>
          <p className="lead lead--hero">
            İki kısa adım: önce etkinliğin türü ve ölçeği, sonra iletişim bilgileriniz. Brief'inizi inceleyip konsept ve bütçe çerçevesiyle size dönüş yapacağız.
          </p>
          <ul className="quote-section__points qpage__points">
            <li>Taahhüt veya ödeme gerekmez.</li>
            <li>Tam bilgi yoksa sorun değil; yaklaşık değerler yeterli.</li>
            <li>Konsept, mekân ve operasyon tek ekipten gelir.</li>
          </ul>
          {(wa || tel || email) && (
            <p className="qpage__alt">
              Formu doldurmak istemezseniz:{" "}
              {wa && <a href={wa} target="_blank" rel="noopener" className="textlink">WhatsApp</a>}
              {wa && (tel || email) && " · "}
              {tel && <a href={tel} className="textlink">Telefon</a>}
              {tel && email && " · "}
              {email && <a href={`mailto:${email}`} className="textlink">E-posta</a>}
            </p>
          )}
          <p className="qpage__alt">
            Önce fikir mi arıyorsunuz? <Link href="/rehberler" className="textlink">Rehberlere göz atın</Link>.
          </p>
        </div>
        <QuoteForm formId="quote_page" />
      </div>
    </section>
  );
}
