import { NextRequest, NextResponse } from "next/server";
import { details } from "@/lib/places/provider";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const SESSION_RE = /^[A-Za-z0-9_-]{8,64}$/;
const ID_RE = /^[A-Za-z0-9_-]{3,600}$/; // OpenStreetMap ids carry their place ("ph-…")
const LANGS = new Set(["en", "fr", "it", "ru", "tr", "de", "es"]);

export async function GET(req: NextRequest) {
  const limited = rateLimit(`pd:${clientIp(req.headers)}`, 30, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "too_many_requests" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  const id = req.nextUrl.searchParams.get("id") ?? "";
  const session = req.nextUrl.searchParams.get("s") ?? "";
  const lang = req.nextUrl.searchParams.get("lang") ?? "en";
  const name = (req.nextUrl.searchParams.get("name") ?? "").replace(/\s+/g, " ").trim().slice(0, 120);
  if (!ID_RE.test(id) || !SESSION_RE.test(session)) return NextResponse.json({ error: "bad_request" }, { status: 400 });

  try {
    const place = await details(id, session, LANGS.has(lang) ? lang : "en", name);
    if (!place) return NextResponse.json({ error: "not_found" }, { status: 404 });
    return NextResponse.json({ place }, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
  } catch (error) {
    console.error("[places] details failed", error);
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
