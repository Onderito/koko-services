// Google Places API (New), called only from our server routes, so the key never reaches the browser.
// Suggestions are biased to the French Riviera and limited to France, Monaco and Italy.
// Docs: https://developers.google.com/maps/documentation/places/web-service/place-autocomplete
//       https://developers.google.com/maps/documentation/places/web-service/place-details

import "server-only";
import type { PlaceDetails, PlaceKind, PlaceSuggestion } from "./types";

const BASE = "https://places.googleapis.com/v1";
// Centre between Cannes and Monaco; 50 km is the largest radius a circle bias accepts.
const RIVIERA_BIAS = { circle: { center: { latitude: 43.66, longitude: 7.2 }, radius: 50000 } };

function kindFromTypes(types: string[] = []): PlaceKind {
  if (types.includes("airport") || types.includes("heliport")) return "airport";
  if (types.some(t => t === "train_station" || t === "transit_station" || t === "subway_station" || t === "bus_station")) return "station";
  if (types.some(t => t === "marina" || t === "ferry_terminal")) return "port";
  if (types.some(t => t === "lodging" || t === "hotel" || t === "resort_hotel")) return "hotel";
  if (types.some(t => t === "locality" || t.startsWith("administrative_area") || t === "sublocality")) return "city";
  return "address";
}

type AutocompleteResponse = {
  suggestions?: {
    placePrediction?: {
      placeId: string;
      structuredFormat?: { mainText?: { text: string }; secondaryText?: { text: string } };
      text?: { text: string };
      types?: string[];
    };
  }[];
};

export async function googleSuggestions(key: string, input: string, sessionToken: string, language: string): Promise<PlaceSuggestion[]> {
  const res = await fetch(`${BASE}/places:autocomplete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "suggestions.placePrediction.placeId,suggestions.placePrediction.structuredFormat,suggestions.placePrediction.text,suggestions.placePrediction.types",
    },
    body: JSON.stringify({
      input,
      sessionToken,
      languageCode: language,
      includedRegionCodes: ["fr", "mc", "it"],
      locationBias: RIVIERA_BIAS,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`places autocomplete ${res.status}`);
  const data = (await res.json()) as AutocompleteResponse;
  return (data.suggestions ?? [])
    .map(s => s.placePrediction)
    .filter((p): p is NonNullable<typeof p> => !!p)
    .slice(0, 6)
    .map(p => ({
      id: p.placeId,
      title: p.structuredFormat?.mainText?.text ?? p.text?.text ?? "",
      subtitle: p.structuredFormat?.secondaryText?.text ?? "",
      kind: kindFromTypes(p.types),
    }));
}

type DetailsResponse = { id: string; formattedAddress?: string; location?: { latitude: number; longitude: number }; types?: string[] };

/** Ends the autocomplete session. Only basic fields are requested, to stay in the cheapest tier. */
export async function googleDetails(key: string, placeId: string, sessionToken: string, language: string, name: string): Promise<PlaceDetails | null> {
  const url = `${BASE}/places/${encodeURIComponent(placeId)}?sessionToken=${encodeURIComponent(sessionToken)}&languageCode=${encodeURIComponent(language)}`;
  const res = await fetch(url, {
    headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "id,formattedAddress,location,types" },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`place details ${res.status}`);
  const d = (await res.json()) as DetailsResponse;
  if (!d.location) return null;
  return {
    id: d.id,
    name: name || d.formattedAddress || "",
    address: d.formattedAddress ?? "",
    lat: d.location.latitude,
    lng: d.location.longitude,
    kind: kindFromTypes(d.types),
  };
}
