import { EVENT_TYPES, type EventTypeValue } from "@/content/types";

export const LOCATIONS = [
  "Antalya (şehir merkezi)",
  "Belek",
  "Kemer",
  "Side / Manavgat",
  "Alanya",
  "Henüz belli değil",
  "Diğer",
] as const;

export const BUDGETS = [
  "Henüz belirlenmedi",
  "5.000 € altı",
  "5.000 – 15.000 €",
  "15.000 – 50.000 €",
  "50.000 – 150.000 €",
  "150.000 € üzeri",
] as const;

export type LeadInput = {
  name: string;
  company: string;
  phone: string;
  email: string;
  eventType: EventTypeValue | "";
  location: string;
  date: string;
  dateFlexible: boolean;
  participants: string;
  budget: string;
  notes: string;
  consent: boolean;
  /** Honeypot: gerçek kullanıcı doldurmaz */
  website: string;
  /** Formun açılışından gönderime geçen süre (ms) */
  elapsed: number;
  source: Record<string, string>;
};

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]{7,25}$/;

export function validateStep1(v: Pick<LeadInput, "eventType" | "participants" | "date">): LeadErrors {
  const e: LeadErrors = {};
  if (!EVENT_TYPES.some((t) => t.value === v.eventType)) e.eventType = "Lütfen bir etkinlik türü seçin.";
  if (v.participants && !/^\d{1,6}$/.test(v.participants.trim())) e.participants = "Yaklaşık kişi sayısını rakamla yazın.";
  if (v.date && Number.isNaN(Date.parse(v.date))) e.date = "Geçerli bir tarih seçin.";
  return e;
}

export function validateStep2(v: Pick<LeadInput, "name" | "company" | "phone" | "email" | "notes" | "consent">): LeadErrors {
  const e: LeadErrors = {};
  if (v.name.trim().length < 2) e.name = "Adınızı ve soyadınızı yazın.";
  if (v.company.trim().length < 2) e.company = "Şirket adını yazın.";
  if (!PHONE.test(v.phone.trim()) || v.phone.replace(/\D/g, "").length < 7) e.phone = "Geçerli bir telefon numarası yazın.";
  if (!EMAIL.test(v.email.trim())) e.email = "Geçerli bir e-posta adresi yazın.";
  if (v.notes.length > 2000) e.notes = "Notlar en fazla 2000 karakter olabilir.";
  if (!v.consent) e.consent = "Devam etmek için aydınlatma metnini onaylayın.";
  return e;
}

export function validateLead(v: LeadInput): LeadErrors {
  return { ...validateStep1(v), ...validateStep2(v) };
}

export const eventTypeLabel = (value: string) => EVENT_TYPES.find((t) => t.value === value)?.label ?? value;
