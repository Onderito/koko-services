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

/** Which source answered: Google Places, or the built-in demo list when no key is configured. */
export type PlaceProviderName = "google" | "demo";
