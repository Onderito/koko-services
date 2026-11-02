// Step 03 of the quote page: the client's request goes to the owner's inbox (the same Resend setup and recipient as the
// contact form: RESEND_API_KEY, CONTACT_FORM_TO_EMAIL), with the trip from the signed link, the chosen car, the
// "starting from" shown to the client, and one-tap call, WhatsApp and email links. Nothing is stored. Without the
// email settings it answers 503, and the page offers the same request through WhatsApp instead.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readTrip } from "@/lib/reservations/trip";
import { carOffers } from "@/lib/reservations/pricing";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{5,24}$/;

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\0/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fmtDate = (d: string) => {
  const [y, m, day] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, day)));
};

export async function POST(req: NextRequest) {
  const limited = rateLimit(`rq:${clientIp(req.headers)}`, 5, 10 * 60_000);
  if (!limited.ok) return NextResponse.json({ error: "too_many_requests" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }
  if (clean(body.website, 100)) return NextResponse.json({ ok: true }); // honeypot

  const trip = readTrip(typeof body.token === "string" ? body.token : "");
  if (!trip) return NextResponse.json({ error: "expired" }, { status: 400 });
  const offer = carOffers(trip).find(o => o.id === body.vehicle);
  const name = clean(body.name, 80);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const flight = clean(body.flight, 12).toUpperCase();
  const notes = typeof body.notes === "string" ? body.notes.replace(/\0/g, "").trim().slice(0, 800) : "";
  const luggage = Number.isInteger(body.luggage) && (body.luggage as number) >= 0 && (body.luggage as number) <= 20 ? (body.luggage as number) : null;
  if (!offer || offer.passengers < trip.passengers) return NextResponse.json({ error: "vehicle" }, { status: 400 });
  if (name.length < 2 || !PHONE_RE.test(phone) || !EMAIL_RE.test(email)) return NextResponse.json({ error: "details" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[quote request] Resend not configured: missing RESEND_API_KEY or CONTACT_FORM_TO_EMAIL");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const route = trip.to ? `${trip.from.name} → ${trip.to.name}` : `${trip.from.name} (by the hour, ${trip.hours} hours)`;
  const when = `${fmtDate(trip.date)} at ${trip.time}${trip.trip === "return" && trip.returnDate ? `, return ${fmtDate(trip.returnDate)} at ${trip.returnTime}` : ""}`;
  const price = offer.from !== null ? `Starting from €${offer.from} (${offer.basis}), as shown to the client` : "Fixed fare on request (route not in the price guide)";
  const digits = phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const rows: [string, string][] = [
    ["Trip", route],
    ["Pick-up address", `${trip.from.name}, ${trip.from.address}`],
    ...(trip.to ? ([["Drop-off address", `${trip.to.name}, ${trip.to.address}`]] as [string, string][]) : []),
    ["When", when],
    ["Passengers", `${trip.passengers}${luggage !== null ? ` · ${luggage} suitcase${luggage === 1 ? "" : "s"}` : ""}`],
    ["Vehicle", offer.name],
    ["Price shown", price],
    ["Client", name],
    ["Phone", phone],
    ["Email", email],
    ...(flight ? ([["Flight", flight]] as [string, string][]) : []),
    ...(notes ? ([["Notes", notes]] as [string, string][]) : []),
  ];
  const html = `<!doctype html><html><body style="margin:0;background:#f5f6f8;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#101828">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px"><tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #eaecf0">
<tr><td style="background:#0d1922;padding:24px 28px;color:#ffffff"><p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#d4b471">Kokolimo · quote request</p>
<h1 style="margin:6px 0 0;font-size:22px">${esc(route)}</h1><p style="margin:6px 0 0;font-size:14px;color:#cfd4da">${esc(when)}</p></td></tr>
<tr><td style="padding:8px 28px 4px"><table width="100%" cellpadding="0" cellspacing="0">${rows
    .map(([k, v]) => `<tr><td style="padding:10px 0;width:140px;font-size:13px;color:#667085;vertical-align:top">${esc(k)}</td><td style="padding:10px 0;font-size:14px;border-top:1px solid #f2f4f7">${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table></td></tr>
<tr><td style="padding:16px 28px 28px">
<a href="tel:${esc(phone.replace(/\s/g, ""))}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:999px;background:#0d1922;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px">Call ${esc(name.split(" ")[0])}</a>
<a href="https://wa.me/${esc(digits)}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:999px;background:#25d366;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px">WhatsApp</a>
<a href="mailto:${esc(email)}?subject=${encodeURIComponent(`Your Kokolimo quote: ${route}`)}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:999px;background:#e8ba64;color:#0d1922;text-decoration:none;font-weight:600;font-size:14px">Reply by email</a>
<p style="margin:14px 0 0;font-size:12px;color:#98a2b3">Sent from the quote page of kokolimo.com. The client was told: "Your fixed fare is confirmed by your chauffeur before the ride. No payment online."</p>
</td></tr></table></td></tr></table></body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "kokolimo <contact@kokolimo.com>",
      to,
      replyTo: `${name} <${email}>`,
      subject: `Quote request — ${name} — ${route}`,
      html,
    });
    if (error) throw new Error(error.message);
  } catch (e) {
    console.error("[quote request] email failed", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
