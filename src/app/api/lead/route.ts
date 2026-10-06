import { NextResponse } from "next/server";
import { BUDGETS, LOCATIONS, eventTypeLabel, validateLead, type LeadInput } from "@/lib/lead";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Serverless'ta instance başına çalışan best-effort hız sınırı; asıl koruma honeypot + süre kontrolüdür. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, arr] of hits) if (!arr.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_HITS;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function sanitize(raw: Record<string, unknown>): LeadInput {
  const source: Record<string, string> = {};
  if (raw.source && typeof raw.source === "object") {
    for (const [k, v] of Object.entries(raw.source as Record<string, unknown>).slice(0, 12)) source[k.slice(0, 40)] = str(v, 300);
  }
  return {
    name: str(raw.name, 100),
    company: str(raw.company, 120),
    phone: str(raw.phone, 25),
    email: str(raw.email, 160),
    eventType: str(raw.eventType, 40) as LeadInput["eventType"],
    location: str(raw.location, 80),
    date: str(raw.date, 10),
    dateFlexible: raw.dateFlexible === true,
    participants: str(raw.participants, 6),
    budget: str(raw.budget, 40),
    notes: str(raw.notes, 2000),
    consent: raw.consent === true,
    website: str(raw.website, 100),
    elapsed: typeof raw.elapsed === "number" ? raw.elapsed : 0,
    source,
  };
}

async function deliver(lead: LeadInput): Promise<boolean> {
  const rows: [string, string][] = [
    ["Ad Soyad", lead.name],
    ["Şirket", lead.company],
    ["Telefon", lead.phone],
    ["E-posta", lead.email],
    ["Etkinlik türü", eventTypeLabel(lead.eventType)],
    ["Lokasyon", lead.location || "—"],
    ["Tarih", lead.date ? `${lead.date}${lead.dateFlexible ? " (esnek)" : ""}` : lead.dateFlexible ? "Esnek" : "—"],
    ["Katılımcı", lead.participants || "—"],
    ["Bütçe", lead.budget || "—"],
    ["Notlar", lead.notes || "—"],
    ...Object.entries(lead.source).map(([k, v]): [string, string] => [`Kaynak: ${k}`, v]),
  ];

  const payload = {
    receivedAt: new Date().toISOString(),
    site: SITE.url,
    lead: { ...lead, website: undefined, elapsed: undefined },
  };

  const tasks: Promise<boolean>[] = [];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (apiKey && to && from) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()).filter(Boolean),
          reply_to: lead.email,
          subject: `Yeni teklif talebi — ${eventTypeLabel(lead.eventType)} · ${lead.company}`,
          html:
            `<h2>Yeni teklif talebi</h2><table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">` +
            rows.map(([k, v]) => `<tr><td style="border-bottom:1px solid #eee"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #eee">${esc(v)}</td></tr>`).join("") +
            `</table>`,
          text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
        }),
      }).then((r) => r.ok, () => false),
    );
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    tasks.push(
      fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).then(
        (r) => r.ok,
        () => false,
      ),
    );
  }

  if (tasks.length === 0) {
    if (process.env.NODE_ENV === "production") return false; // sessizce lead kaybetme
    console.info("[lead:dev]", JSON.stringify(payload, null, 2));
    return true;
  }
  // En az bir kanal başarılıysa lead kaybolmamış demektir.
  return (await Promise.all(tasks)).some(Boolean);
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Çok fazla deneme yapıldı. Lütfen biraz sonra tekrar deneyin." }, { status: 429 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const lead = sanitize(raw);

  // Bot sinyalleri: dolu honeypot veya insan için imkânsız hızda gönderim → sessizce "başarılı" dön.
  if (lead.website || lead.elapsed < 2500) return NextResponse.json({ ok: true });

  const errors = validateLead(lead);
  if (lead.location && !(LOCATIONS as readonly string[]).includes(lead.location)) errors.location = "Geçersiz seçim.";
  if (lead.budget && !(BUDGETS as readonly string[]).includes(lead.budget)) errors.budget = "Geçersiz seçim.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Lütfen işaretli alanları kontrol edin.", fields: errors }, { status: 422 });
  }

  const ok = await deliver(lead);
  if (!ok) {
    return NextResponse.json(
      { ok: false, error: "Talebiniz şu an iletilemedi. Lütfen birkaç dakika sonra tekrar deneyin veya bize doğrudan yazın." },
      { status: 503 },
    );
  }
  return NextResponse.json({ ok: true });
}
