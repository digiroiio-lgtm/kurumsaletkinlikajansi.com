"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { EVENT_TYPES, type EventTypeValue } from "@/content/types";
import { BUDGETS, LOCATIONS, eventTypeLabel, validateStep1, validateStep2, type LeadErrors } from "@/lib/lead";
import { participantsBucket, track } from "@/lib/analytics";
import { phoneHref, whatsappHref } from "@/lib/site";

type Props = {
  defaultType?: EventTypeValue;
  defaultLocation?: string;
  formId: string;
  /** Koyu zemin üzerinde mi? */
  tone?: "paper" | "ink";
};

type State = {
  eventType: EventTypeValue | "";
  location: string;
  date: string;
  dateFlexible: boolean;
  participants: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  budget: string;
  notes: string;
  consent: boolean;
  website: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

function collectSource(): Record<string, string> {
  const out: Record<string, string> = { page: window.location.pathname };
  try {
    if (document.referrer) out.referrer = document.referrer;
    const stored = JSON.parse(sessionStorage.getItem("kea_utm") ?? "{}") as Record<string, string>;
    Object.assign(out, stored);
  } catch {
    /* storage kapalı olabilir */
  }
  return out;
}

export function QuoteForm({ defaultType, defaultLocation, formId, tone = "paper" }: Props) {
  const uid = useId();
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [v, setV] = useState<State>({
    eventType: defaultType ?? "",
    location: defaultLocation ?? "",
    date: "",
    dateFlexible: false,
    participants: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    budget: "",
    notes: "",
    consent: false,
    website: "",
  });
  const started = useRef(false);
  const mountedAt = useRef(0);
  const root = useRef<HTMLFormElement>(null);
  const wa = whatsappHref();
  const tel = phoneHref();

  useEffect(() => {
    mountedAt.current = Date.now();
    try {
      const sp = new URLSearchParams(window.location.search);
      const stored = JSON.parse(sessionStorage.getItem("kea_utm") ?? "{}") as Record<string, string>;
      let changed = false;
      for (const k of UTM_KEYS) {
        const val = sp.get(k);
        if (val) {
          stored[k] = val.slice(0, 200);
          changed = true;
        }
      }
      if (changed) sessionStorage.setItem("kea_utm", JSON.stringify(stored));
      const tur = sp.get("tur");
      if (tur && EVENT_TYPES.some((t) => t.value === tur)) setV((s) => ({ ...s, eventType: tur as EventTypeValue }));
    } catch {
      /* yok say */
    }
  }, []);

  const set = <K extends keyof State>(k: K, val: State[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k as keyof LeadErrors]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("quote_form_start", { form_id: formId });
  };

  const focusFirstError = (errs: LeadErrors) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => {
      const el = root.current?.querySelector<HTMLElement>(`[name="${first}"]`) ?? root.current?.querySelector<HTMLElement>(`[data-field="${first}"]`);
      el?.focus();
    });
  };

  const next = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateStep1(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      track("quote_form_error", { form_id: formId, reason: "step1_validation" });
      focusFirstError(errs);
      return;
    }
    track("quote_form_step_complete", {
      form_id: formId,
      step: 1,
      event_type: v.eventType,
      participants_bucket: participantsBucket(Number(v.participants)),
    });
    setStep(2);
    requestAnimationFrame(() => root.current?.querySelector<HTMLElement>('[name="name"]')?.focus());
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateStep2(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      track("quote_form_error", { form_id: formId, reason: "step2_validation" });
      focusFirstError(errs);
      return;
    }
    setStatus("sending");
    setServerError("");
    track("quote_form_submit", { form_id: formId });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, elapsed: Date.now() - mountedAt.current, source: collectSource() }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: LeadErrors };
      if (res.ok && data.ok) {
        setStatus("done");
        track("generate_lead", {
          form_id: formId,
          event_type: v.eventType,
          event_location: v.location || "belirtilmedi",
          participants_bucket: participantsBucket(Number(v.participants)),
          budget_range: v.budget || "belirtilmedi",
        });
        return;
      }
      if (data.fields) {
        setErrors(data.fields);
        focusFirstError(data.fields);
      }
      setServerError(data.error ?? "Talebiniz gönderilemedi. Lütfen tekrar deneyin.");
      setStatus("error");
      track("quote_form_error", { form_id: formId, reason: `server_${res.status}` });
    } catch {
      setServerError("Bağlantı sorunu oluştu. Lütfen tekrar deneyin.");
      setStatus("error");
      track("quote_form_error", { form_id: formId, reason: "network" });
    }
  };

  const id = (n: string) => `${uid}-${n}`;
  const err = (k: keyof LeadErrors) => errors[k];
  const describe = (k: keyof LeadErrors, hint?: string) =>
    [err(k) ? id(`${k}-err`) : "", hint ? id(`${k}-hint`) : ""].filter(Boolean).join(" ") || undefined;

  if (status === "done") {
    return (
      <div className={`quote quote--${tone} quote--done`} role="status">
        <p className="eyebrow">Talebiniz alındı</p>
        <h3 className="quote__done-title">Teşekkürler, {v.name.split(" ")[0]}.</h3>
        <p>
          <strong>{eventTypeLabel(v.eventType)}</strong> talebinizi aldık. Brief'inizi inceleyip uygun format, lokasyon ve
          bütçe çerçevesiyle size dönüş yapacağız.
        </p>
        <ul className="quote__next">
          <li>Brief'iniz bir etkinlik uzmanı tarafından okunur.</li>
          <li>Gerekirse kısa bir netleştirme görüşmesi için sizi ararız.</li>
          <li>Konsept ve bütçe çerçevesini içeren ilk öneri iletilir.</li>
        </ul>
        {(wa || tel) && (
          <p className="quote__alt">
            Acil bir tarih mi var?{" "}
            {wa && (
              <a href={wa} target="_blank" rel="noopener" className="textlink">
                WhatsApp'tan yazın
              </a>
            )}
            {wa && tel && " veya "}
            {tel && (
              <a href={tel} className="textlink">
                bizi arayın
              </a>
            )}
            .
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      ref={root}
      className={`quote quote--${tone}`}
      onSubmit={step === 1 ? next : submit}
      onFocusCapture={onStart}
      noValidate
      aria-labelledby={id("title")}
      data-form-id={formId}
    >
      <div className="quote__head">
        <p id={id("title")} className="quote__title">
          {step === 1 ? "Etkinliğinizi anlatın" : "Size nasıl ulaşalım?"}
        </p>
        <p className="quote__step" aria-live="polite">
          Adım {step} / 2
        </p>
      </div>
      <div className="quote__bar" aria-hidden="true">
        <span style={{ width: step === 1 ? "50%" : "100%" }} />
      </div>

      {step === 1 && (
        <div className="quote__body">
          <fieldset className="field">
            <legend id={id("type-l")}>Etkinlik türü *</legend>
            <div className="chips" role="radiogroup" aria-labelledby={id("type-l")} aria-describedby={describe("eventType")} data-field="eventType" tabIndex={-1}>
              {EVENT_TYPES.map((t) => (
                <label key={t.value} className={`chip${v.eventType === t.value ? " is-on" : ""}`}>
                  <input
                    type="radio"
                    name="eventType"
                    value={t.value}
                    checked={v.eventType === t.value}
                    onChange={() => set("eventType", t.value)}
                  />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
            {err("eventType") && (
              <p id={id("eventType-err")} className="field__error">
                {err("eventType")}
              </p>
            )}
          </fieldset>

          <div className="field-row">
            <div className="field">
              <label htmlFor={id("loc")}>Etkinlik lokasyonu</label>
              <select id={id("loc")} name="location" value={v.location} onChange={(e) => set("location", e.target.value)}>
                <option value="">Seçin</option>
                {LOCATIONS.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor={id("pax")}>Tahmini katılımcı sayısı</label>
              <input
                id={id("pax")}
                name="participants"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Örn. 60"
                value={v.participants}
                onChange={(e) => set("participants", e.target.value.replace(/[^\d]/g, "").slice(0, 6))}
                aria-invalid={Boolean(err("participants"))}
                aria-describedby={describe("participants")}
              />
              {err("participants") && (
                <p id={id("participants-err")} className="field__error">
                  {err("participants")}
                </p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor={id("date")}>Etkinlik tarihi</label>
            <input id={id("date")} name="date" type="date" value={v.date} onChange={(e) => set("date", e.target.value)} />
            <label className="check check--inline">
              <input type="checkbox" checked={v.dateFlexible} onChange={(e) => set("dateFlexible", e.target.checked)} />
              <span>Tarihim esnek</span>
            </label>
          </div>

          <button type="submit" className="btn btn--primary btn--lg quote__submit">
            Devam
            <span aria-hidden="true">→</span>
          </button>
          <p className="quote__fine">Yalnızca 2 kısa adım. Ödeme veya taahhüt gerekmez.</p>
        </div>
      )}

      {step === 2 && (
        <div className="quote__body">
          <div className="field-row">
            <div className="field">
              <label htmlFor={id("name")}>Ad Soyad *</label>
              <input id={id("name")} name="name" autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} aria-invalid={Boolean(err("name"))} aria-describedby={describe("name")} />
              {err("name") && <p id={id("name-err")} className="field__error">{err("name")}</p>}
            </div>
            <div className="field">
              <label htmlFor={id("company")}>Şirket *</label>
              <input id={id("company")} name="company" autoComplete="organization" value={v.company} onChange={(e) => set("company", e.target.value)} aria-invalid={Boolean(err("company"))} aria-describedby={describe("company")} />
              {err("company") && <p id={id("company-err")} className="field__error">{err("company")}</p>}
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor={id("phone")}>Telefon *</label>
              <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={v.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={Boolean(err("phone"))} aria-describedby={describe("phone")} />
              {err("phone") && <p id={id("phone-err")} className="field__error">{err("phone")}</p>}
            </div>
            <div className="field">
              <label htmlFor={id("email")}>E-posta *</label>
              <input id={id("email")} name="email" type="email" autoComplete="email" inputMode="email" value={v.email} onChange={(e) => set("email", e.target.value)} aria-invalid={Boolean(err("email"))} aria-describedby={describe("email")} />
              {err("email") && <p id={id("email-err")} className="field__error">{err("email")}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor={id("budget")}>Tahmini bütçe</label>
            <select id={id("budget")} name="budget" value={v.budget} onChange={(e) => set("budget", e.target.value)} aria-describedby={id("budget-hint")}>
              <option value="">Seçin</option>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <p id={id("budget-hint")} className="field__hint">Toplam etkinlik bütçesi için yaklaşık aralık yeterlidir.</p>
          </div>
          <div className="field">
            <label htmlFor={id("notes")}>Ek notlar</label>
            <textarea id={id("notes")} name="notes" rows={3} value={v.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Hedef, konaklama/transfer ihtiyacı, özel istekler…" aria-invalid={Boolean(err("notes"))} />
            {err("notes") && <p id={id("notes-err")} className="field__error">{err("notes")}</p>}
          </div>

          {/* Honeypot: ekran okuyuculardan ve klavye akışından gizli */}
          <div className="hp" aria-hidden="true">
            <label>
              Web siteniz
              <input name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set("website", e.target.value)} />
            </label>
          </div>

          <div className="field">
            <label className="check">
              <input type="checkbox" name="consent" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={Boolean(err("consent"))} aria-describedby={describe("consent")} />
              <span>
                <Link href="/gizlilik-kvkk" className="textlink" target="_blank">
                  Aydınlatma metnini
                </Link>{" "}
                okudum; verilerimin teklif hazırlığı amacıyla işlenmesini kabul ediyorum. *
              </span>
            </label>
            {err("consent") && <p id={id("consent-err")} className="field__error">{err("consent")}</p>}
          </div>

          {serverError && (
            <p className="field__error field__error--block" role="alert">
              {serverError}
            </p>
          )}

          <div className="quote__actions">
            <button type="button" className="btn btn--line btn--md" onClick={() => setStep(1)}>
              ← Geri
            </button>
            <button type="submit" className="btn btn--primary btn--lg quote__submit" disabled={status === "sending"}>
              {status === "sending" ? "Gönderiliyor…" : "Teklif Talebimi Gönder"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
