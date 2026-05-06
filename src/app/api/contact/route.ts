import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  service?: unknown;
  pickupDate?: unknown;
  pickupTime?: unknown;
  pickupLocation?: unknown;
  dropoffLocation?: unknown;
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  passengers?: unknown;
  baggage?: unknown;
  flightNumber?: unknown;
  notes?: unknown;
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

function sanitizeText(value: unknown, maxLength: number) {
  const normalized =
    typeof value === "string"
      ? value
          .replace(/\0/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, maxLength)
      : "";

  return escapeHtml(normalized);
}

function sanitizeMultiline(value: unknown, maxLength: number) {
  const normalized =
    typeof value === "string"
      ? value
          .replace(/\0/g, "")
          .split("\n")
          .map((line) => line.replace(/\s+/g, " ").trim())
          .filter(Boolean)
          .join("\n")
          .slice(0, maxLength)
      : "";

  return escapeHtml(normalized);
}

function sanitizeInteger(value: unknown, min: number, max: number) {
  const parsed =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number.parseInt(value, 10)
        : Number.NaN;

  if (!Number.isFinite(parsed)) return null;
  if (parsed < min || parsed > max) return null;

  return parsed;
}

function buildHtmlEmail(data: {
  service: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  fullName: string;
  email: string;
  phone: string;
  passengers: number;
  baggage: number;
  flightNumber: string;
  notes: string;
}) {
  const serviceLabels: Record<string, string> = {
    transfers: "Airport / Point-to-Point Transfer",
    "hourly-chauffeur": "Hourly Chauffeur Service",
    "chauffeur-tours": "Chauffeur Tour",
  };
  const serviceLabel = serviceLabels[data.service] ?? data.service;

  const row = (label: string, value: string, highlight = false) =>
    value
      ? `
      <tr>
        <td style="padding:10px 16px;width:160px;font-size:13px;color:#8A7560;font-weight:600;vertical-align:top;white-space:nowrap;">${label}</td>
        <td style="padding:10px 16px;font-size:14px;color:${highlight ? "#111111" : "#333333"};font-weight:${highlight ? "700" : "400"};border-left:1px solid #EFE6D6;">${value}</td>
      </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Booking Request — viplimonice</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F0E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0E8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(160deg,#FBF3E5 0%,#EAD6B4 100%);border-radius:20px 20px 0 0;padding:28px 32px;border:1px solid #E8DCCB;border-bottom:none;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8A6B3B;">viplimonice</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#111111;letter-spacing:-0.4px;">New Booking Request</h1>
              <p style="margin:6px 0 0 0;font-size:14px;color:#6D5830;">A client has submitted a ride request via the website.</p>
            </td>
          </tr>

          <!-- Service badge -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:16px 32px 0;">
              <span style="display:inline-block;background:#FBF3E5;border:1px solid #E8DCCB;border-radius:20px;padding:5px 14px;font-size:12px;font-weight:700;color:#6D5830;letter-spacing:0.04em;">${serviceLabel}</span>
            </td>
          </tr>

          <!-- Client info -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Client</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #EFE6D6;">
                ${row("Full Name", data.fullName, true)}
                ${row("Email", data.email)}
                ${row("Phone", data.phone)}
              </table>
            </td>
          </tr>

          <!-- Trip details -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Trip Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #EFE6D6;">
                ${row("Date", data.pickupDate)}
                ${row("Time", data.pickupTime)}
                ${row("Pick-up", data.pickupLocation)}
                ${row("Drop-off", data.dropoffLocation)}
                ${row("Passengers", String(data.passengers))}
                ${row("Baggage", String(data.baggage))}
                ${data.flightNumber ? row("Flight #", data.flightNumber) : ""}
              </table>
            </td>
          </tr>

          ${
            data.notes
              ? `<!-- Notes -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Special Requests</p>
              <div style="background:#FAFAF8;border:1px solid #EFE6D6;border-radius:12px;padding:14px 16px;font-size:14px;color:#333333;line-height:1.6;white-space:pre-wrap;">${data.notes}</div>
            </td>
          </tr>`
              : ""
          }

          <!-- CTA -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:24px 32px;">
              <a href="mailto:${data.email}?subject=Re: Your booking request — viplimonice"
                 style="display:inline-block;background:linear-gradient(180deg,#F8F3EC 0%,#E8D9C5 100%);border:1px solid #E4D4BF;border-radius:14px;padding:12px 22px;font-size:14px;font-weight:700;color:#6D5830;text-decoration:none;letter-spacing:-0.01em;">
                Reply to ${data.fullName} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5EDD8;border:1px solid #E8DCCB;border-top:1px solid #E8DCCB;border-radius:0 0 20px 20px;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8A7560;">This message was sent from the contact form on <strong>viplimonice.com</strong></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildPlainTextEmail(data: {
  service: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  fullName: string;
  email: string;
  phone: string;
  passengers: number;
  baggage: number;
  flightNumber: string;
  notes: string;
}) {
  const serviceLabels: Record<string, string> = {
    transfers: "Airport / Point-to-Point Transfer",
    "hourly-chauffeur": "Hourly Chauffeur Service",
    "chauffeur-tours": "Chauffeur Tour",
  };
  const serviceLabel = serviceLabels[data.service] ?? data.service;

  return `NEW BOOKING REQUEST — viplimonice
=====================================
Service: ${serviceLabel}

CLIENT
------
Name:   ${data.fullName}
Email:  ${data.email}
Phone:  ${data.phone}

TRIP DETAILS
------------
Date:        ${data.pickupDate}
Time:        ${data.pickupTime}
Pick-up:     ${data.pickupLocation}
Drop-off:    ${data.dropoffLocation}
Passengers:  ${data.passengers}
Baggage:     ${data.baggage}
${data.flightNumber ? `Flight #:    ${data.flightNumber}\n` : ""}
${data.notes ? `SPECIAL REQUESTS\n----------------\n${data.notes}\n` : ""}
-------------------------------------
Sent from viplimonice.com contact form`;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host !== request.nextUrl.host) {
        return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
    }
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot — silent discard
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const sanitized = {
    service: sanitizeText(body.service, 80),
    pickupDate: sanitizeText(body.pickupDate, 32),
    pickupTime: sanitizeText(body.pickupTime, 32),
    pickupLocation: sanitizeText(body.pickupLocation, 200),
    dropoffLocation: sanitizeText(body.dropoffLocation, 200),
    fullName: sanitizeText(body.fullName, 120),
    email: sanitizeText(body.email, 160).toLowerCase(),
    phone: sanitizeText(body.phone, 40),
    flightNumber: sanitizeText(body.flightNumber, 80),
    notes: sanitizeMultiline(body.notes, 3000),
  };

  const passengers = sanitizeInteger(body.passengers, 1, 20);
  const baggage = sanitizeInteger(body.baggage, 0, 20);

  if (
    !sanitized.service ||
    !sanitized.pickupDate ||
    !sanitized.pickupTime ||
    !sanitized.pickupLocation ||
    !sanitized.dropoffLocation ||
    !sanitized.fullName ||
    !sanitized.email ||
    !sanitized.phone ||
    passengers === null ||
    baggage === null
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(sanitized.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("[contact] Resend not configured — missing RESEND_API_KEY or CONTACT_FORM_TO_EMAIL");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  const emailData = {
    ...sanitized,
    passengers: passengers!,
    baggage: baggage!,
  };

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "viplimonice <contact@viplimonice.com>",
      to: toEmail,
      replyTo: `${sanitized.fullName} <${sanitized.email}>`,
      subject: `New booking request — ${sanitized.fullName} (${sanitized.service})`,
      text: buildPlainTextEmail(emailData),
      html: buildHtmlEmail(emailData),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 502 },
    );
  }
}
