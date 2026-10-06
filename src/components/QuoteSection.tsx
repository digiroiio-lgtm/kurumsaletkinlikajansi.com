import type { EventTypeValue } from "@/content/types";
import { SITE, phoneHref, whatsappHref } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

type Props = {
  heading?: string;
  text?: string;
  defaultType?: EventTypeValue;
  defaultLocation?: string;
  defaultParticipants?: number;
  formId: string;
  /** Sayfanın ana teklif bölümü id="teklif" taşır (sticky CTA ve #teklif bağlantıları için). */
  asAnchor?: boolean;
};

export function QuoteSection({
  heading = "Etkinliğiniz için teklif alın",
  text = "Etkinliğin türünü ve yaklaşık ölçeğini yazın; konsept, lokasyon ve bütçe çerçevesiyle size dönelim.",
  defaultType,
  defaultLocation,
  defaultParticipants,
  formId,
  asAnchor = true,
}: Props) {
  const wa = whatsappHref();
  const tel = phoneHref();
  const { email } = SITE.contact;
  return (
    <section className="section section--ink quote-section" id={asAnchor ? "teklif" : undefined} aria-labelledby={`${formId}-h`}>
      <div className="container quote-section__grid">
        <div className="quote-section__copy">
          <p className="eyebrow eyebrow--light">Teklif</p>
          <h2 id={`${formId}-h`} className="h2 h2--light">
            {heading}
          </h2>
          <p className="lead lead--light">{text}</p>
          <ul className="quote-section__points">
            <li>Brief'inizden başlayıp konsept, mekân ve operasyonu tek ekipten alırsınız.</li>
            <li>Bütçe kalemleri baştan şeffaf; kapsam netleşince teklif güncellenir.</li>
            <li>Hava, kapasite ve zaman riskleri için yedek senaryo planlanır.</li>
          </ul>
          {(wa || tel || email) && (
            <p className="quote-section__alt">
              Formu doldurmadan da ulaşabilirsiniz:{" "}
              {wa && (
                <a href={wa} target="_blank" rel="noopener" className="textlink textlink--light">
                  WhatsApp
                </a>
              )}
              {wa && (tel || email) && " · "}
              {tel && (
                <a href={tel} className="textlink textlink--light">
                  Telefon
                </a>
              )}
              {tel && email && " · "}
              {email && (
                <a href={`mailto:${email}`} className="textlink textlink--light">
                  E-posta
                </a>
              )}
            </p>
          )}
        </div>
        <div className="quote-section__form">
          <QuoteForm formId={formId} defaultType={defaultType} defaultLocation={defaultLocation} defaultParticipants={defaultParticipants} tone="paper" />
        </div>
      </div>
    </section>
  );
}
