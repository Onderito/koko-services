// "Starting from" prices on the quote page (user decision, 20 Oct 2026: "Starting from €X", so we never promise a final
// price; "we don't lie to our customers"). The only prices with a source are the site's own guide (data/vehicles.tsx):
// Nice Airport to Nice, Antibes/Juan, Cannes, Monaco/Cap d'Ail and Saint-Tropez, and the hourly rates. A transfer that
// is one of those routes (either direction) gets that guide price; any other route gets "fixed fare on request".

import { vehicles } from "@/app/data/vehicles";
import type { Trip } from "./trip";

type Area = { lat: number; lng: number; km: number };

const AIRPORT: Area = { lat: 43.6616, lng: 7.2109, km: 3 };
const GRID: Record<string, Area> = {
  nice: { lat: 43.7009, lng: 7.2683, km: 6 },
  antibes: { lat: 43.5745, lng: 7.1112, km: 6 },
  cannes: { lat: 43.5528, lng: 7.0174, km: 5 },
  monaco: { lat: 43.734, lng: 7.414, km: 4 },
  "st-tropez": { lat: 43.2692, lng: 6.6402, km: 7 },
};

function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371, toRad = (d: number) => (d * Math.PI) / 180;
  const h = Math.sin(toRad(b.lat - a.lat) / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(toRad(b.lng - a.lng) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const inside = (p: { lat: number; lng: number }, a: Area) => km(p, a) <= a.km;

/** The guide city of a Nice Airport transfer, or null when the route is not in the guide. */
function gridCity(trip: Trip): string | null {
  if (trip.mode !== "transfer" || !trip.to) return null;
  const [a, b] = [trip.from, trip.to];
  const other = inside(a, AIRPORT) ? b : inside(b, AIRPORT) ? a : null;
  if (!other || inside(other, AIRPORT)) return null;
  return Object.entries(GRID).find(([, area]) => inside(other, area))?.[0] ?? null;
}

export type CarOffer = {
  id: string;
  name: string;
  cls: string;
  image: string;
  /** The car as a cut-out "icon" (transparent background), when there is one. */
  icon?: string;
  passengers: number;
  /** Suitcases, from the site's fleet cards (none is stated for the E-Class). */
  bags: number | null;
  /** Starting price in euros, or null for "fixed fare on request". */
  from: number | null;
  /** What the price covers, e.g. "one way", "return", "4 hours". */
  basis: string;
};

// Cut-outs (28 Oct 2026, the user: "cars like icon type of car avatars", as on Transfeero): the same three-quarter view of
// each car on a transparent background, generated in our art direction.
const CARDS: Record<string, { cls: string; image: string; icon?: string; bags: number | null }> = {
  "mercedes-e": { cls: "Business", image: "/assets/images/cards/card-e-class.jpg", icon: "/assets/images/cutouts/cut-e-class.webp", bags: null },
  "mercedes-v": { cls: "Van", image: "/assets/images/cards/card-v-class.jpg", icon: "/assets/images/cutouts/cut-v-class.webp", bags: 7 },
  "mercedes-s": { cls: "First Class", image: "/assets/images/cards/card-s-class.jpg", icon: "/assets/images/cutouts/cut-s-class.webp", bags: 2 },
  "mercedes-maybach": { cls: "VIP", image: "/assets/images/cards/card-maybach.jpg", icon: "/assets/images/cutouts/cut-maybach.webp", bags: 3 },
};

export function carOffers(trip: Trip): CarOffer[] {
  const city = gridCity(trip);
  return vehicles.map(v => {
    const card = CARDS[v.id] ?? { cls: "", image: v.image, bags: null };
    if (trip.mode === "hourly") {
      const hours = trip.hours ?? 4;
      const hourly = Math.min(...Object.values(v.prices).map(p => p.hourly));
      return { id: v.id, name: v.name, cls: card.cls, image: card.image, icon: card.icon, passengers: v.passengers, bags: card.bags, from: hourly * hours, basis: `${hours} hours` };
    }
    const oneWay = city ? v.prices[city]?.transfer ?? null : null;
    const isReturn = trip.trip === "return";
    return {
      id: v.id,
      name: v.name,
      cls: card.cls,
      image: card.image,
      icon: card.icon,
      passengers: v.passengers,
      bags: card.bags,
      from: oneWay === null ? null : isReturn ? oneWay * 2 : oneWay,
      basis: isReturn ? "return" : "one way",
    };
  });
}
