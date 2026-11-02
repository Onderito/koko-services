// Free address search for the booking bar (user, 28 Oct 2026: keep the free services rather than Google): Photon, the
// OpenStreetMap search by komoot, made for search-as-you-type. Results are kept to the Riviera and Monaco and nearby
// Italy; each suggestion carries its own position in its id ("ph-" + base64url JSON), so choosing it needs no second
// call. Light use with a clear User-Agent, as the public service asks; on any error the caller keeps our own list.

import "server-only";
import type { PlaceDetails, PlaceKind, PlaceSuggestion } from "./types";

type Feature = {
  geometry: { coordinates: [number, number] };
  properties: {
    name?: string;
    street?: string;
    housenumber?: string;
    postcode?: string;
    city?: string;
    locality?: string;
    district?: string;
    country?: string;
    countrycode?: string;
    osm_key?: string;
    osm_value?: string;
  };
};

function kindOf(p: Feature["properties"]): PlaceKind {
  if (p.osm_key === "aeroway" || p.osm_value === "aerodrome") return "airport";
  if (p.osm_key === "railway" || p.osm_value === "station") return "station";
  if (p.osm_value === "marina" || p.osm_value === "harbour" || p.osm_value === "ferry_terminal") return "port";
  if (p.osm_key === "tourism" && ["hotel", "guest_house", "apartment", "resort"].includes(p.osm_value ?? "")) return "hotel";
  if (p.osm_key === "place") return "city";
  return "address";
}

const encode = (d: Omit<PlaceDetails, "id">) => `ph-${Buffer.from(JSON.stringify([d.name, d.address, d.lat, d.lng, d.kind])).toString("base64url")}`;

/** Our own place behind a "ph-" id, or null. */
export function photonDetails(id: string): PlaceDetails | null {
  if (!id.startsWith("ph-")) return null;
  try {
    const [name, address, lat, lng, kind] = JSON.parse(Buffer.from(id.slice(3), "base64url").toString("utf8")) as [string, string, number, number, PlaceKind];
    if (typeof name !== "string" || !Number.isFinite(lat) || !Number.isFinite(lng)) return null;
    return { id, name: name.slice(0, 160), address: String(address).slice(0, 200), lat, lng, kind };
  } catch {
    return null;
  }
}

export async function photonSuggestions(query: string, language: string, limit = 6): Promise<PlaceSuggestion[]> {
  const lang = language === "fr" || language === "de" ? language : "en";
  // Centred on Nice; the box runs from the Var coast to Liguria and up to the Alps.
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&lat=43.70&lon=7.25&limit=${limit}&lang=${lang}&bbox=5.9,42.95,8.3,44.6`;
  const res = await fetch(url, { headers: { "User-Agent": "kokolimo.com booking bar (kokolimo@myriviera.fr)" }, signal: AbortSignal.timeout(3500), next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`photon ${res.status}`);
  const data = (await res.json()) as { features?: Feature[] };
  const seen = new Set<string>();
  const out: PlaceSuggestion[] = [];
  for (const f of data.features ?? []) {
    const p = f.properties;
    const [lng, lat] = f.geometry.coordinates;
    const street = [p.housenumber, p.street].filter(Boolean).join(" ");
    const name = p.name || street;
    if (!name) continue;
    const town = p.city || p.locality || p.district || "";
    const address = [p.name && street ? street : "", [p.postcode, town].filter(Boolean).join(" "), p.country].filter(Boolean).join(", ");
    const key = `${name}|${address}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const kind = kindOf(p);
    out.push({ id: encode({ name, address, lat, lng, kind }), title: name, subtitle: address, kind });
  }
  return out;
}
