// Built-in list of Riviera places, used only when no Google key is configured (demo and local development).
// Coordinates are approximate public positions, good enough to draw a demonstration route.

import type { PlaceDetails, PlaceSuggestion } from "./types";

export const DEMO_PLACES: PlaceDetails[] = [
  { id: "demo-nce-t1", name: "Nice Côte d'Azur Airport, Terminal 1", address: "Nice, France", lat: 43.6653, lng: 7.215, kind: "airport" },
  { id: "demo-nce-t2", name: "Nice Côte d'Azur Airport, Terminal 2", address: "Nice, France", lat: 43.6589, lng: 7.2058, kind: "airport" },
  { id: "demo-nice", name: "Nice city centre", address: "Place Masséna, Nice, France", lat: 43.697, lng: 7.2706, kind: "city" },
  { id: "demo-nice-ville", name: "Nice-Ville train station", address: "Avenue Thiers, Nice, France", lat: 43.7046, lng: 7.2618, kind: "station" },
  { id: "demo-nice-port", name: "Port of Nice", address: "Quai Lunel, Nice, France", lat: 43.6956, lng: 7.2858, kind: "port" },
  { id: "demo-negresco", name: "Hôtel Negresco", address: "Promenade des Anglais, Nice, France", lat: 43.6948, lng: 7.258, kind: "hotel" },
  { id: "demo-monaco", name: "Monaco, Monte-Carlo", address: "Place du Casino, Monaco", lat: 43.7396, lng: 7.4282, kind: "city" },
  { id: "demo-port-hercule", name: "Port Hercule", address: "Monaco", lat: 43.735, lng: 7.423, kind: "port" },
  { id: "demo-monaco-heliport", name: "Monaco Heliport", address: "Fontvieille, Monaco", lat: 43.7255, lng: 7.4197, kind: "airport" },
  { id: "demo-hotel-de-paris", name: "Hôtel de Paris Monte-Carlo", address: "Place du Casino, Monaco", lat: 43.7392, lng: 7.4273, kind: "hotel" },
  { id: "demo-cannes", name: "Cannes, Palais des Festivals", address: "Boulevard de la Croisette, Cannes, France", lat: 43.551, lng: 7.0174, kind: "city" },
  { id: "demo-cannes-port", name: "Cannes Vieux Port", address: "Cannes, France", lat: 43.5508, lng: 7.012, kind: "port" },
  { id: "demo-martinez", name: "Hôtel Martinez", address: "Boulevard de la Croisette, Cannes, France", lat: 43.5487, lng: 7.0315, kind: "hotel" },
  { id: "demo-antibes", name: "Antibes, Port Vauban", address: "Antibes, France", lat: 43.5846, lng: 7.127, kind: "port" },
  { id: "demo-juan", name: "Juan-les-Pins", address: "Antibes, France", lat: 43.568, lng: 7.111, kind: "city" },
  { id: "demo-eden-roc", name: "Hôtel du Cap-Eden-Roc", address: "Cap d'Antibes, France", lat: 43.5442, lng: 7.115, kind: "hotel" },
  { id: "demo-saint-tropez", name: "Saint-Tropez, Old Port", address: "Saint-Tropez, France", lat: 43.2715, lng: 6.64, kind: "port" },
  { id: "demo-ramatuelle", name: "Ramatuelle", address: "Ramatuelle, France", lat: 43.216, lng: 6.611, kind: "city" },
  { id: "demo-eze", name: "Èze village", address: "Èze, France", lat: 43.7277, lng: 7.3613, kind: "city" },
  { id: "demo-menton", name: "Menton", address: "Menton, France", lat: 43.7745, lng: 7.4975, kind: "city" },
  { id: "demo-villefranche", name: "Villefranche-sur-Mer", address: "Villefranche-sur-Mer, France", lat: 43.704, lng: 7.311, kind: "city" },
  { id: "demo-cap-ferrat", name: "Saint-Jean-Cap-Ferrat", address: "Saint-Jean-Cap-Ferrat, France", lat: 43.688, lng: 7.332, kind: "city" },
  { id: "demo-beaulieu", name: "Beaulieu-sur-Mer", address: "Beaulieu-sur-Mer, France", lat: 43.707, lng: 7.333, kind: "city" },
  { id: "demo-cap-dail", name: "Cap-d'Ail", address: "Cap-d'Ail, France", lat: 43.721, lng: 7.405, kind: "city" },
  { id: "demo-mougins", name: "Mougins", address: "Mougins, France", lat: 43.6, lng: 6.995, kind: "city" },
  { id: "demo-saint-paul", name: "Saint-Paul-de-Vence", address: "Saint-Paul-de-Vence, France", lat: 43.697, lng: 7.122, kind: "city" },
  { id: "demo-vence", name: "Vence", address: "Vence, France", lat: 43.723, lng: 7.112, kind: "city" },
  { id: "demo-grasse", name: "Grasse", address: "Grasse, France", lat: 43.658, lng: 6.923, kind: "city" },
  { id: "demo-sanremo", name: "Sanremo", address: "Sanremo, Italy", lat: 43.8159, lng: 7.776, kind: "city" },
  { id: "demo-courchevel", name: "Courchevel 1850", address: "Courchevel, France", lat: 45.415, lng: 6.634, kind: "city" },
  { id: "demo-megeve", name: "Megève", address: "Megève, France", lat: 45.857, lng: 6.617, kind: "city" },
  { id: "demo-chamonix", name: "Chamonix-Mont-Blanc", address: "Chamonix, France", lat: 45.9237, lng: 6.8694, kind: "city" },
];

/** Shown before the visitor types: the places most clients start from or go to. */
export const QUICK_PICK_IDS = ["demo-nce-t1", "demo-nce-t2", "demo-nice", "demo-monaco", "demo-cannes", "demo-antibes"];

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/['’-]/g, " ");

// Words people type in French or Italian, so the demo list answers "aéroport", "gare", "porto"… like Google would.
const ALIASES: Record<string, string> = {
  airport: "aeroport aeroporto nce",
  station: "gare stazione",
  port: "porto marina yacht",
  hotel: "hotel albergo",
  city: "ville citta centre",
  address: "",
};

const toSuggestion = (p: PlaceDetails): PlaceSuggestion => ({ id: p.id, title: p.name, subtitle: p.address, kind: p.kind });

export function demoSuggestions(query: string, limit = 6): PlaceSuggestion[] {
  const q = fold(query).trim();
  if (!q) return QUICK_PICK_IDS.map(id => DEMO_PLACES.find(p => p.id === id)!).map(toSuggestion);
  const words = q.split(/\s+/);
  const scored = DEMO_PLACES.map(p => {
    const hayWords = fold(`${p.name} ${p.address} ${ALIASES[p.kind] ?? ""}`).split(/[\s,.]+/);
    if (!words.every(w => hayWords.some(h => h.startsWith(w)))) return null;
    const starts = fold(p.name).startsWith(words[0]) ? 0 : 1;
    return { p, score: starts };
  }).filter((x): x is { p: PlaceDetails; score: number } => x !== null);
  return scored.sort((a, b) => a.score - b.score).slice(0, limit).map(x => toSuggestion(x.p));
}

export function demoDetails(id: string): PlaceDetails | null {
  return DEMO_PLACES.find(p => p.id === id) ?? null;
}
