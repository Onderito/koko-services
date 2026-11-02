import "server-only";

// Live ratings for the review widgets: Google (Places API, Kokolimo's Business Profile) and Tripadvisor (Content API,
// "MY Riviera Tours & Transfers"). Read on the server and cached, refreshed every 6 hours; keys never reach the browser.
// Without a key (or if a call fails) the widget falls back to the figures the site already publishes, marked live: false.

export type RatingSource = "google" | "tripadvisor";
export type Rating = { source: RatingSource; rating: number; count: number | null; url: string; live: boolean };

const REFRESH_SECONDS = 6 * 60 * 60;

// Place ID derived from the profile's review link (g.page/r/CXSXgZXVNYkwEAE = CID 0x308935d595819774).
const GOOGLE_PLACE_ID = "ChIJZzW8hBHQzRIRdJeBldU1iTA";
const GOOGLE_URL = "https://g.page/r/CXSXgZXVNYkwEAE/review";
const TRIPADVISOR_LOCATION_ID = "7971865";
const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html";

// Figures already published on the site (home reviews section) or on the profile, used only when live data is missing.
const FALLBACK: Record<RatingSource, Omit<Rating, "source" | "url" | "live">> = {
  google: { rating: 5.0, count: null },
  tripadvisor: { rating: 4.8, count: 165 },
};

async function google(): Promise<Rating | null> {
  const key = process.env.GOOGLE_MAPS_SERVER_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri" },
      next: { revalidate: REFRESH_SECONDS },
    });
    if (!res.ok) return null;
    const d = (await res.json()) as { rating?: number; userRatingCount?: number; googleMapsUri?: string };
    if (typeof d.rating !== "number") return null;
    return { source: "google", rating: d.rating, count: d.userRatingCount ?? null, url: d.googleMapsUri || GOOGLE_URL, live: true };
  } catch {
    return null;
  }
}

async function tripadvisor(): Promise<Rating | null> {
  const key = process.env.TRIPADVISOR_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`https://api.content.tripadvisor.com/api/v1/location/${TRIPADVISOR_LOCATION_ID}/details?key=${encodeURIComponent(key)}&language=en`, {
      headers: { accept: "application/json" },
      next: { revalidate: REFRESH_SECONDS },
    });
    if (!res.ok) return null;
    const d = (await res.json()) as { rating?: string; num_reviews?: string; web_url?: string };
    const rating = Number(d.rating);
    if (!Number.isFinite(rating)) return null;
    return { source: "tripadvisor", rating, count: d.num_reviews ? Number(d.num_reviews) : null, url: d.web_url || TRIPADVISOR_URL, live: true };
  } catch {
    return null;
  }
}

export async function getRatings(): Promise<Rating[]> {
  const [g, t] = await Promise.all([google(), tripadvisor()]);
  return [
    g ?? { source: "google", url: GOOGLE_URL, live: false, ...FALLBACK.google },
    t ?? { source: "tripadvisor", url: TRIPADVISOR_URL, live: false, ...FALLBACK.tripadvisor },
  ];
}
