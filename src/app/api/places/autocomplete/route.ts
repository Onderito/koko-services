import { NextRequest, NextResponse } from "next/server";
import { suggest } from "@/lib/places/provider";
import { demoSuggestions } from "@/lib/places/demo-places";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const SESSION_RE = /^[A-Za-z0-9_-]{8,64}$/;
const LANGS = new Set(["en", "fr", "it", "ru", "tr", "de", "es"]);

export async function GET(req: NextRequest) {
  // ?own=1 (29 Oct 2026): our own places only (airports, ports, the Riviera communes), answered at once while the full
  // search runs, which can take a second or two. Nothing external is called, so it has its own, wider allowance.
  const own = req.nextUrl.searchParams.get("own") === "1";
  const limited = rateLimit(`${own ? "ac-own" : "ac"}:${clientIp(req.headers)}`, own ? 120 : 60, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "too_many_requests" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  const q = (req.nextUrl.searchParams.get("q") ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
  if (own) return NextResponse.json({ provider: "demo", suggestions: q.length < 2 ? [] : demoSuggestions(q) }, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
  const session = req.nextUrl.searchParams.get("s") ?? "";
  const lang = req.nextUrl.searchParams.get("lang") ?? "en";
  if (q.length > 0 && q.length < 2) return NextResponse.json({ provider: "demo", suggestions: [] });
  if (!SESSION_RE.test(session)) return NextResponse.json({ error: "bad_session" }, { status: 400 });

  const result = await suggest(q, session, LANGS.has(lang) ? lang : "en");
  return NextResponse.json(result, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
