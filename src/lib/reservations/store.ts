// Temporary reservations (quote requests in progress). Each one has an unguessable id and expires after 7 days.
// Demo: kept in memory on the running server. Production: replace with a shared store (e.g. Upstash Redis with TTL).

import "server-only";
import { randomBytes } from "node:crypto";
import type { PlaceDetails } from "@/lib/places/types";

export type Reservation = {
  id: string;
  createdAt: string;
  expiresAt: string;
  mode: "transfer" | "hourly";
  from: PlaceDetails;
  to: PlaceDetails | null;
  date: string; // YYYY-MM-DD (Europe/Paris)
  time: string; // HH:MM
  passengers: number;
  hours: number | null;
  status: "draft" | "requested";
};

const TTL_MS = 7 * 24 * 3600 * 1000;
const ALPHABET = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** 22 characters from a 56-symbol alphabet ≈ 128 bits: not guessable, not enumerable. */
export function newReservationId(): string {
  const bytes = randomBytes(22);
  let id = "";
  for (const b of bytes) id += ALPHABET[b % ALPHABET.length];
  return id;
}

const globalStore = globalThis as unknown as { __kokoReservations?: Map<string, Reservation> };
const store = (globalStore.__kokoReservations ??= new Map<string, Reservation>());

export async function saveReservation(r: Omit<Reservation, "id" | "createdAt" | "expiresAt" | "status">): Promise<Reservation> {
  const now = Date.now();
  for (const [k, v] of store) if (Date.parse(v.expiresAt) <= now) store.delete(k);
  const full: Reservation = { ...r, id: newReservationId(), createdAt: new Date(now).toISOString(), expiresAt: new Date(now + TTL_MS).toISOString(), status: "draft" };
  store.set(full.id, full);
  return full;
}

export async function getReservation(id: string): Promise<Reservation | null> {
  const r = store.get(id);
  if (!r) return null;
  if (Date.parse(r.expiresAt) <= Date.now()) {
    store.delete(id);
    return null;
  }
  return r;
}
