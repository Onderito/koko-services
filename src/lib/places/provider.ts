// Chooses the place source: Google Places when GOOGLE_MAPS_SERVER_KEY is set, the built-in demo list otherwise.
// Google errors fall back to the demo list for suggestions only (never invent coordinates for a Google place id).

import "server-only";
import { demoDetails, demoSuggestions } from "./demo-places";
import { googleDetails, googleSuggestions } from "./google";
import type { PlaceDetails, PlaceProviderName, PlaceSuggestion } from "./types";

const key = () => process.env.GOOGLE_MAPS_SERVER_KEY?.trim() || "";

export function providerName(): PlaceProviderName {
  return key() ? "google" : "demo";
}

export async function suggest(query: string, sessionToken: string, language: string): Promise<{ provider: PlaceProviderName; suggestions: PlaceSuggestion[] }> {
  const k = key();
  // Quick picks (empty query) always come from our own list: they cost nothing and are the same for everyone.
  if (!k || query.trim().length === 0) return { provider: k ? "google" : "demo", suggestions: demoSuggestions(query) };
  try {
    return { provider: "google", suggestions: await googleSuggestions(k, query, sessionToken, language) };
  } catch (error) {
    console.error("[places] suggestions failed, using the demo list", error);
    return { provider: "demo", suggestions: demoSuggestions(query) };
  }
}

export async function details(id: string, sessionToken: string, language: string, name: string): Promise<PlaceDetails | null> {
  if (id.startsWith("demo-")) return demoDetails(id);
  const k = key();
  if (!k) return null;
  return googleDetails(k, id, sessionToken, language, name);
}
