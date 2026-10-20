import { NextRequest, NextResponse } from "next/server";
import { suggest } from "@/lib/places/provider";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const SESSION_RE = /^[A-Za-z0-9_-]{8,64}$/;
const LANGS = new Set(["en", "fr", "it", "ru", "tr", "de", "es"]);

export async function GET(req: NextRequest) {
  const limited = rateLimit(`ac:${clientIp(req.headers)}`, 60, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "too_many_requests" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  const q = (req.nextUrl.searchParams.get("q") ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
  const session = req.nextUrl.searchParams.get("s") ?? "";
  const lang = req.nextUrl.searchParams.get("lang") ?? "en";
  if (q.length > 0 && q.length < 2) return NextResponse.json({ provider: "demo", suggestions: [] });
  if (!SESSION_RE.test(session)) return NextResponse.json({ error: "bad_session" }, { status: 400 });

  const result = await suggest(q, session, LANGS.has(lang) ? lang : "en");
  return NextResponse.json(result, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
