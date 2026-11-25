// Shared helpers of the French pages: prices from the price list (data/vehicles.tsx) written the French way, with a
// no-break space before the euro sign ("150 €"); the price list's cars; one-way starting prices to a town; and French
// spacing (a no-break space before ":", ";", "?" and "!", so that they never start a line).

import { routeStartingPrices, vehicles } from "../vehicles";

export const eur = (amount: number) => `${amount.toLocaleString("fr-FR")} €`;
/** A car of the price list named the French way: "Mercedes E-Class" becomes "Mercedes Classe E". */
export const carFr = (name: string) => name.replace(/ ([A-Z])-Class$/, " Classe $1");
export const vehicle = (id: string) => vehicles.find(v => v.id === id)!;
export const E_CLASS = vehicle("mercedes-e");
export const V_CLASS = vehicle("mercedes-v");
export const S_CLASS = vehicle("mercedes-s");
export const MAYBACH = vehicle("mercedes-maybach");

/** One-way starting prices to a town of the price list, every car: "150 € en Mercedes Classe E, 180 € en Classe V, …". */
export const routePrices = (town: string) =>
  `${eur(E_CLASS.prices[town].transfer)} en Mercedes Classe E, ${eur(V_CLASS.prices[town].transfer)} en Classe V, ${eur(S_CLASS.prices[town].transfer)} en Classe S et ${eur(MAYBACH.prices[town].transfer)} en Maybach`;

/** The starting price of a route outside the price list, for one car or the cheapest stated (a number, for eur()). */
export const startingPrice = (route: string, vehicleId?: string) =>
  routeStartingPrices[route].prices.find(p => !vehicleId || p.vehicleId === vehicleId)!.transfer;

/** French spacing on every string of a value (strings, arrays and plain objects, deeply). */
export function frenchSpacing<T>(value: T): T {
  if (typeof value === "string") return value.replace(/ ([:;?!])/g, " $1") as T;
  if (Array.isArray(value)) return value.map(item => frenchSpacing(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, frenchSpacing(item)])) as T;
  }
  return value;
}
