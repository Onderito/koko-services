// A daily ceiling on our own Google Maps Platform calls (user, 28 Oct 2026: "make a rate limit to prevent the
// payment"). The real guarantee is the per-day quota set in the Google Cloud console (Google refuses any call beyond
// it, so nothing is billed); this counter is a second, local guard: past the ceiling, callers use their free fallback
// (our own place list, the OSRM route, the free map) for the rest of the UTC day. Counts are per server instance.

import "server-only";

type Api = "places-autocomplete" | "places-details" | "routes";

// 300 a day is about 9,300 a month, under Google's 10,000 free monthly calls per product.
const DAILY_MAX: Record<Api, number> = {
  "places-autocomplete": 300,
  "places-details": 300,
  routes: 300,
};

const counts = new Map<Api, { day: string; n: number }>();

/** True (and counted) when a Google call is still within today's ceiling. */
export function allowGoogle(api: Api): boolean {
  const day = new Date().toISOString().slice(0, 10);
  const c = counts.get(api);
  const n = c && c.day === day ? c.n : 0;
  if (n >= DAILY_MAX[api]) return false;
  counts.set(api, { day, n: n + 1 });
  return true;
}
