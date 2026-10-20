import { NextRequest, NextResponse } from "next/server";
import { saveReservation } from "@/lib/reservations/store";
import type { PlaceDetails, PlaceKind } from "@/lib/places/types";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const KINDS = new Set<PlaceKind>(["airport", "station", "port", "hotel", "city", "address"]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function place(v: unknown): PlaceDetails | null {
  if (!v || typeof v !== "object") return null;
  const p = v as Record<string, unknown>;
  const str = (x: unknown, max: number) => (typeof x === "string" ? x.replace(/\s+/g, " ").trim().slice(0, max) : "");
  const lat = Number(p.lat), lng = Number(p.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  const id = str(p.id, 300), name = str(p.name, 160);
  if (!id || !name) return null;
  return { id, name, address: str(p.address, 200), lat, lng, kind: KINDS.has(p.kind as PlaceKind) ? (p.kind as PlaceKind) : "address" };
}

// Today in Europe/Paris, as YYYY-MM-DD.
const parisToday = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date());

export async function POST(req: NextRequest) {
  const limited = rateLimit(`res:${clientIp(req.headers)}`, 10, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "too_many_requests" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }
  const mode = body.mode === "hourly" ? "hourly" : body.mode === "transfer" ? "transfer" : null;
  const from = place(body.from);
  const to = mode === "transfer" ? place(body.to) : null;
  const date = typeof body.date === "string" && DATE_RE.test(body.date) ? body.date : "";
  const time = typeof body.time === "string" && TIME_RE.test(body.time) ? body.time : "";
  const passengers = Math.round(Number(body.passengers));
  const hours = mode === "hourly" ? Math.round(Number(body.hours)) : null;

  if (!mode) return NextResponse.json({ error: "mode" }, { status: 400 });
  if (!from) return NextResponse.json({ error: "from" }, { status: 400 });
  if (mode === "transfer" && (!to || to.id === from.id)) return NextResponse.json({ error: "to" }, { status: 400 });
  if (!date || date < parisToday()) return NextResponse.json({ error: "date" }, { status: 400 });
  if (!time) return NextResponse.json({ error: "time" }, { status: 400 });
  if (!(passengers >= 1 && passengers <= 16)) return NextResponse.json({ error: "passengers" }, { status: 400 });
  if (mode === "hourly" && !(hours !== null && hours >= 4 && hours <= 24)) return NextResponse.json({ error: "hours" }, { status: 400 });

  const r = await saveReservation({ mode, from, to, date, time, passengers, hours });
  return NextResponse.json({ id: r.id }, { status: 201, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
