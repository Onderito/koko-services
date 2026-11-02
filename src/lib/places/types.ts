// Shared types for the place search used by the booking bar.

export type PlaceKind = "airport" | "station" | "port" | "hotel" | "city" | "address";

/** One line in the suggestion list shown while the visitor types. */
export type PlaceSuggestion = {
  id: string;
  title: string;
  subtitle: string;
  kind: PlaceKind;
};

/** A chosen place, with the coordinates needed later for the route. */
export type PlaceDetails = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  kind: PlaceKind;
};

/** Which source answered: Google Places, our own list with OpenStreetMap search (Photon), or our own list alone. */
export type PlaceProviderName = "google" | "osm" | "demo";
