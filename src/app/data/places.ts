// The place each city page is about, for the geo meta tags pageMetadata adds (geo.region, geo.placename, geo.position,
// ICBM), as the homes carry for the office: the town or the airport, its ISO 3166-2 code and its coordinates. Keys are
// English paths; a French page uses its English twin's place (data/i18n/addresses.ts). Pages about the whole coast
// (long-distance transfers, crew transport) and the hub pages name no single place and get no geo tags.

export type Place = { name: string; nameFr?: string; region: string; latitude: number; longitude: number };

const NICE: Place = { name: "Nice", region: "FR-06", latitude: 43.7034, longitude: 7.2663 };
const NICE_AIRPORT: Place = { name: "Nice Côte d'Azur Airport", nameFr: "Aéroport Nice Côte d'Azur", region: "FR-06", latitude: 43.6653, longitude: 7.2153 };
const CANNES: Place = { name: "Cannes", region: "FR-06", latitude: 43.5513, longitude: 7.0128 };
const MONACO: Place = { name: "Monaco", region: "MC", latitude: 43.7384, longitude: 7.4246 };
const ANTIBES: Place = { name: "Antibes", region: "FR-06", latitude: 43.5808, longitude: 7.1244 };
const SAINT_TROPEZ: Place = { name: "Saint-Tropez", region: "FR-83", latitude: 43.2719, longitude: 6.6403 };
const EZE: Place = { name: "Èze", region: "FR-06", latitude: 43.7278, longitude: 7.3617 };
const VILLEFRANCHE: Place = { name: "Villefranche-sur-Mer", region: "FR-06", latitude: 43.7042, longitude: 7.3131 };
const CAP_FERRAT: Place = { name: "Saint-Jean-Cap-Ferrat", region: "FR-06", latitude: 43.6883, longitude: 7.3311 };
const MENTON: Place = { name: "Menton", region: "FR-06", latitude: 43.7753, longitude: 7.5006 };
const MEGEVE: Place = { name: "Megève", region: "FR-74", latitude: 45.8567, longitude: 6.6178 };
const COURCHEVEL: Place = { name: "Courchevel", region: "FR-73", latitude: 45.4153, longitude: 6.6347 };
const CHAMONIX: Place = { name: "Chamonix-Mont-Blanc", region: "FR-74", latitude: 45.9236, longitude: 6.8697 };

export const PAGE_PLACE: Record<string, Place> = {
  "/our-services/transfers/nice-airport-transfer": NICE_AIRPORT,
  "/our-services/transfers/monaco-airport-transfer": MONACO,
  "/our-services/transfers/cannes-airport-transfer": CANNES,
  "/our-services/transfers/antibes-transfer": ANTIBES,
  "/our-services/transfers/saint-tropez-transfer": SAINT_TROPEZ,
  "/our-services/transfers/saint-jean-cap-ferrat-transfer": CAP_FERRAT,
  "/our-services/transfers/eze-transfer": EZE,
  "/our-services/transfers/villefranche-transfer": VILLEFRANCHE,
  "/our-services/transfers/menton-transfer": MENTON,
  "/our-services/hourly-chauffeur/nice": NICE,
  "/our-services/hourly-chauffeur/cannes": CANNES,
  "/our-services/hourly-chauffeur/monaco": MONACO,
  "/our-services/hourly-chauffeur/saint-tropez": SAINT_TROPEZ,
  "/our-services/hourly-chauffeur/megeve": MEGEVE,
  "/our-services/hourly-chauffeur/courchevel": COURCHEVEL,
  "/our-services/hourly-chauffeur/chamonix": CHAMONIX,
  "/our-services/private-tours/nice": NICE,
  "/our-services/private-tours/cannes": CANNES,
  "/our-services/private-tours/monaco": MONACO,
  "/our-services/private-tours/saint-tropez": SAINT_TROPEZ,
  "/our-services/private-tours/megeve": MEGEVE,
  "/our-services/private-tours/courchevel": COURCHEVEL,
  "/our-services/private-tours/chamonix": CHAMONIX,
  "/our-services/yacht-transfers/monaco": MONACO,
  "/our-services/yacht-transfers/cannes": CANNES,
  "/our-services/yacht-transfers/saint-tropez": SAINT_TROPEZ,
  "/our-services/yacht-transfers/antibes": ANTIBES,
  "/our-services/yacht-transfers/nice-airport": NICE_AIRPORT,
  "/our-services/events/monaco-grand-prix": MONACO,
  "/our-services/events/cannes-film-festival": CANNES,
  "/our-services/events/monaco-yacht-show": MONACO,
};

/** English pages left exactly as they are (head tags and structured data); their French twins still get both. */
export const ENGLISH_LEFT_AS_IS = new Set(["/our-services/hourly-chauffeur/monaco"]);

/** The geo meta tags of a place, with the place's name in the page's language. */
export function geoTags(place: Place, language: "en" | "fr") {
  return {
    "geo.region": place.region,
    "geo.placename": language === "fr" ? (place.nameFr ?? place.name) : place.name,
    "geo.position": `${place.latitude};${place.longitude}`,
    ICBM: `${place.latitude}, ${place.longitude}`,
  };
}
