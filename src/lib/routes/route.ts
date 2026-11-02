// The road route of a quote, computed on our server: Google Routes API when GOOGLE_MAPS_SERVER_KEY is set; otherwise the
// public OSRM router (OpenStreetMap data, demonstration service: fine for the demo, to be replaced by Google or another
// keyed service for heavy use); and if both fail, a straight line with an estimated road distance and time, marked so.

import "server-only";
import type { PlaceDetails } from "@/lib/places/types";
import { allowGoogle } from "@/lib/google-budget";

export type RoutePoint = [lat: number, lng: number];
export type Route = { points: RoutePoint[]; distanceM: number; durationS: number; source: "google" | "osrm" | "estimate" };

/** Decodes an encoded polyline (precision 5 for Google, 6 for OSRM's polyline6). */
function decode(encoded: string, precision: number): RoutePoint[] {
  const factor = 10 ** precision;
  const points: RoutePoint[] = [];
  let index = 0, lat = 0, lng = 0;
  while (index < encoded.length) {
    for (const axis of [0, 1]) {
      let result = 0, shift = 0, b: number;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const delta = result & 1 ? ~(result >> 1) : result >> 1;
      if (axis === 0) lat += delta;
      else lng += delta;
    }
    points.push([lat / factor, lng / factor]);
  }
  return points;
}

function haversineM(a: RoutePoint, b: RoutePoint) {
  const R = 6371000, toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]), dLng = toRad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

async function google(key: string, from: PlaceDetails, to: PlaceDetails): Promise<Route> {
  const res = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline" },
    body: JSON.stringify({
      origin: { location: { latLng: { latitude: from.lat, longitude: from.lng } } },
      destination: { location: { latLng: { latitude: to.lat, longitude: to.lng } } },
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_UNAWARE",
    }),
    signal: AbortSignal.timeout(5000),
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`google routes ${res.status}`);
  const r = ((await res.json()) as { routes?: { distanceMeters: number; duration: string; polyline: { encodedPolyline: string } }[] }).routes?.[0];
  if (!r) throw new Error("google routes: no route");
  return { points: decode(r.polyline.encodedPolyline, 5), distanceM: r.distanceMeters, durationS: parseInt(r.duration, 10), source: "google" };
}

async function osrm(from: PlaceDetails, to: PlaceDetails): Promise<Route> {
  const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=polyline6`;
  const res = await fetch(url, { headers: { "User-Agent": "kokolimo.com quote page (Info@myriviera.fr)" }, signal: AbortSignal.timeout(5000), next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`osrm ${res.status}`);
  const d = (await res.json()) as { code: string; routes?: { geometry: string; distance: number; duration: number }[] };
  const r = d.routes?.[0];
  if (d.code !== "Ok" || !r) throw new Error(`osrm ${d.code}`);
  return { points: decode(r.geometry, 6), distanceM: r.distance, durationS: r.duration, source: "osrm" };
}

function estimate(from: PlaceDetails, to: PlaceDetails): Route {
  const a: RoutePoint = [from.lat, from.lng], b: RoutePoint = [to.lat, to.lng];
  const distanceM = haversineM(a, b) * 1.3; // roads are longer than the straight line
  return { points: [a, b], distanceM, durationS: (distanceM / 1000 / 55) * 3600, source: "estimate" };
}

export async function getRoute(from: PlaceDetails, to: PlaceDetails): Promise<Route> {
  const key = process.env.GOOGLE_MAPS_SERVER_KEY?.trim();
  // Google only within today's ceiling (lib/google-budget.ts); otherwise the free router.
  if (key && allowGoogle("routes")) {
    try {
      return await google(key, from, to);
    } catch (e) {
      console.error("[route] Google Routes failed, trying OSRM", e);
    }
  }
  try {
    return await osrm(from, to);
  } catch (e) {
    console.error("[route] OSRM failed, using an estimate", e);
    return estimate(from, to);
  }
}
