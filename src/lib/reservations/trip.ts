// A quote request in progress ("trip"), carried in the /reservation link itself as a signed token, so the quote page
// works on Vercel without a database (the in-memory store of the first demo did not survive between serverless
// instances). The token holds only the trip (places, dates, passengers), never a name or a phone number; it is signed
// (HMAC-SHA256, RESERVATION_SECRET) so it cannot be altered, and it expires after 7 days.

import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { PlaceDetails } from "@/lib/places/types";

export type Trip = {
  mode: "transfer" | "hourly";
  from: PlaceDetails;
  to: PlaceDetails | null;
  date: string; // YYYY-MM-DD (Europe/Paris)
  time: string; // HH:MM
  trip: "oneway" | "return";
  returnDate: string | null;
  returnTime: string | null;
  passengers: number;
  hours: number | null;
  exp: number; // expiry, ms since epoch
};

const TTL_MS = 7 * 24 * 3600 * 1000;
let warned = false;

function secret() {
  const s = process.env.RESERVATION_SECRET?.trim();
  if (s) return s;
  if (!warned) {
    console.warn("[reservations] RESERVATION_SECRET is not set: using the built-in demo secret");
    warned = true;
  }
  return "kokolimo-demo-reservation-secret";
}

const sign = (body: string) => createHmac("sha256", secret()).update(body).digest();

export function signTrip(t: Omit<Trip, "exp">): string {
  const body = Buffer.from(JSON.stringify({ ...t, exp: Date.now() + TTL_MS })).toString("base64url");
  return `${body}.${sign(body).toString("base64url")}`;
}

export function readTrip(token: string): Trip | null {
  if (!token || token.length > 4000) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  const given = Buffer.from(sig, "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
  try {
    const t = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as Trip;
    return typeof t.exp === "number" && t.exp > Date.now() ? t : null;
  } catch {
    return null;
  }
}
