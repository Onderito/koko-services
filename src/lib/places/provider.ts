// Chooses the place source: Google Places when GOOGLE_MAPS_SERVER_KEY is set; otherwise (the user's choice, 28 Oct
// 2026: free services) our own Riviera list first, completed by Photon's OpenStreetMap search for any hotel, villa or
// street. Errors fall back to our own list (never invent coordinates for a place id).

import "server-only";
import { demoDetails, demoSuggestions } from "./demo-places";
import { googleDetails, googleSuggestions } from "./google";
import { photonDetails, photonSuggestions } from "./photon";
import { allowGoogle } from "@/lib/google-budget";
import type { PlaceDetails, PlaceProviderName, PlaceSuggestion } from "./types";

const key = () => process.env.GOOGLE_MAPS_SERVER_KEY?.trim() || "";

export function providerName(): PlaceProviderName {
  return key() ? "google" : "demo";
}

export async function suggest(query: string, sessionToken: string, language: string): Promise<{ provider: PlaceProviderName; suggestions: PlaceSuggestion[] }> {
  const k = key();
  // Quick picks (empty query) always come from our own list: they cost nothing and are the same for everyone.
  if (query.trim().length === 0) return { provider: k ? "google" : "demo", suggestions: demoSuggestions(query) };
  if (!k) {
    // Our places first (airport terminals, ports, the 188 communes), then OpenStreetMap's, without repeats.
    const own = demoSuggestions(query, 5);
    if (query.trim().length < 3) return { provider: "demo", suggestions: own };
    try {
      const osm = await photonSuggestions(query, language);
      const titles = new Set(own.map(s => s.title.toLowerCase()));
      return { provider: "osm", suggestions: [...own, ...osm.filter(s => !titles.has(s.title.toLowerCase()))].slice(0, 8) };
    } catch (error) {
      console.error("[places] OpenStreetMap search failed, using our own list", error);
      return { provider: "demo", suggestions: demoSuggestions(query) };
    }
  }
  // Past today's ceiling (lib/google-budget.ts), our own list answers: nothing is billed.
  if (!allowGoogle("places-autocomplete")) return { provider: "demo", suggestions: demoSuggestions(query) };
  try {
    return { provider: "google", suggestions: await googleSuggestions(k, query, sessionToken, language) };
  } catch (error) {
    console.error("[places] suggestions failed, using the demo list", error);
    return { provider: "demo", suggestions: demoSuggestions(query) };
  }
}

export async function details(id: string, sessionToken: string, language: string, name: string): Promise<PlaceDetails | null> {
  // Our own places first (quick picks, hand-picked points, communes: ids "demo-", "fr-", "area-"); Google ids never
  // collide with them.
  const local = demoDetails(id) ?? photonDetails(id);
  if (local) return local;
  const k = key();
  if (!k || !allowGoogle("places-details")) return null;
  return googleDetails(k, id, sessionToken, language, name);
}
