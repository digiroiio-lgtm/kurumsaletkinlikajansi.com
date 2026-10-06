/**
 * Analytics-ready olay katmanı.
 * GTM varsa dataLayer'a, yoksa (GA4 doğrudan yüklüyse) gtag'e yazar; ikisi de yoksa sessizce geçer.
 *
 * Olay sözlüğü (GA4 ile uyumlu snake_case):
 *  - cta_click               { cta_id, cta_text, destination }
 *  - quick_pick_click        { event_type }
 *  - quote_form_start        { form_id, location }
 *  - quote_form_step_complete{ form_id, step, event_type, participants }
 *  - quote_form_error        { form_id, reason }
 *  - quote_form_submit       { form_id }                       (gönderim denemesi)
 *  - generate_lead           { form_id, event_type, event_location, participants_bucket, budget_range, page_path }
 *  - phone_click | whatsapp_click | email_click   { link_url, location }
 *  - guide_to_service_click  { guide, destination }
 *  - faq_toggle              { question }
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload: Record<string, unknown> = { event, page_path: window.location.pathname, ...params };
  try {
    if (window.dataLayer) {
      window.dataLayer.push(payload);
    } else if (typeof window.gtag === "function") {
      const { event: _e, ...rest } = payload;
      void _e;
      window.gtag("event", event, rest);
    }
  } catch {
    /* analytics asla UX'i bozmamalı */
  }
}

export const participantsBucket = (n: number | undefined): string => {
  if (!n || Number.isNaN(n)) return "belirsiz";
  if (n <= 20) return "1-20";
  if (n <= 50) return "21-50";
  if (n <= 100) return "51-100";
  if (n <= 250) return "101-250";
  if (n <= 500) return "251-500";
  return "500+";
};
