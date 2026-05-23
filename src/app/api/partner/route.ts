import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type PartnerPayload = {
  fullName?: unknown;
  companyName?: unknown;
  companyType?: unknown;
  country?: unknown;
  email?: unknown;
  phone?: unknown;
  monthlyBookings?: unknown;
  clientSummary?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return char;
    }
  });
}

function sanitizeText(value: unknown, maxLength: number) {
  const normalized =
    typeof value === "string"
      ? value.replace(/\0/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength)
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

function buildHtmlEmail(data: {
  fullName: string;
  companyName: string;
  companyType: string;
  country: string;
  email: string;
  phone: string;
  monthlyBookings: string;
  clientSummary: string;
}) {
  const row = (label: string, value: string, highlight = false) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;width:160px;font-size:13px;color:#8A7560;font-weight:600;vertical-align:top;white-space:nowrap;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:${highlight ? "#111111" : "#333333"};font-weight:${highlight ? "700" : "400"};border-left:1px solid #EFE6D6;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Partner Application — kokolimo</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F0E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0E8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(160deg,#FBF3E5 0%,#EAD6B4 100%);border-radius:20px 20px 0 0;padding:28px 32px;border:1px solid #E8DCCB;border-bottom:none;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8A6B3B;">kokolimo</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#111111;letter-spacing:-0.4px;">New Partner Application</h1>
              <p style="margin:6px 0 0 0;font-size:14px;color:#6D5830;">A travel professional has submitted a partner application.</p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:16px 32px 0;">
              <span style="display:inline-block;background:#FBF3E5;border:1px solid #E8DCCB;border-radius:20px;padding:5px 14px;font-size:12px;font-weight:700;color:#6D5830;letter-spacing:0.04em;">Partner Program</span>
            </td>
          </tr>

          <!-- Applicant -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Applicant</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #EFE6D6;">
                ${row("Full Name", data.fullName, true)}
                ${row("Email", data.email)}
                ${row("Phone", data.phone)}
              </table>
            </td>
          </tr>

          <!-- Company -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Company</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #EFE6D6;">
                ${row("Company Name", data.companyName)}
                ${row("Type", data.companyType)}
                ${row("Country", data.country)}
                ${row("Monthly Bookings", data.monthlyBookings)}
              </table>
            </td>
          </tr>

          ${data.clientSummary ? `
          <!-- Client Profile -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:20px 32px 0;">
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#B0956A;">Client Profile</p>
              <div style="background:#FAFAF8;border:1px solid #EFE6D6;border-radius:12px;padding:14px 16px;font-size:14px;color:#333333;line-height:1.6;white-space:pre-wrap;">${data.clientSummary}</div>
            </td>
          </tr>` : ""}

          <!-- CTA -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E8DCCB;border-top:none;border-bottom:none;padding:24px 32px;">
              <a href="mailto:${data.email}?subject=Re: Partner Application — kokolimo"
                 style="display:inline-block;background:linear-gradient(180deg,#F8F3EC 0%,#E8D9C5 100%);border:1px solid #E4D4BF;border-radius:14px;padding:12px 22px;font-size:14px;font-weight:700;color:#6D5830;text-decoration:none;">
                Reply to ${data.fullName} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5EDD8;border:1px solid #E8DCCB;border-top:1px solid #E8DCCB;border-radius:0 0 20px 20px;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8A7560;">This message was sent from the partner form on <strong>kokolimo.com</strong></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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

  let body: PartnerPayload;

  try {
    body = (await request.json()) as PartnerPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const sanitized = {
    fullName: sanitizeText(body.fullName, 120),
    companyName: sanitizeText(body.companyName, 200),
    companyType: sanitizeText(body.companyType, 80),
    country: sanitizeText(body.country, 80),
    email: sanitizeText(body.email, 160).toLowerCase(),
    phone: sanitizeText(body.phone, 40),
    monthlyBookings: sanitizeText(body.monthlyBookings, 20),
    clientSummary: sanitizeMultiline(body.clientSummary, 3000),
  };

  if (
    !sanitized.fullName ||
    !sanitized.companyName ||
    !sanitized.companyType ||
    !sanitized.country ||
    !sanitized.email ||
    !sanitized.phone ||
    !sanitized.monthlyBookings
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(sanitized.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("[partner] Resend not configured");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "kokolimo <contact@kokolimo.com>",
      to: toEmail,
      replyTo: `${sanitized.fullName} <${sanitized.email}>`,
      subject: `New partner application — ${sanitized.fullName} · ${sanitized.companyName}`,
      html: buildHtmlEmail(sanitized),
    });

    if (error) {
      console.error("[partner] Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[partner] Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
