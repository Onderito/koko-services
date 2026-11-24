// Starting prices of the service pages that sell hourly hire (hourly chauffeur, tours, events, yacht crew) or a
// transfer to a marina: one line under the hero description, and the same prices as Offers in the page's own
// structured data, so the markup matches what the page shows. Prices: data/vehicles.tsx. Hourly hire is charged at
// the same rates in every area served, the Alps included; a yacht transfer costs the one-way transfer from Nice
// Airport to the marina's town. Pages not listed here (the route pages, which have RoutePrices) show no line.

import { routeStartingPrices, vehicles } from "../data/vehicles";
import { siteUrl } from "../data/site-config";

type Page =
  | { kind: "hourly"; service: string; area: string }
  | { kind: "transfer"; service: string; area: string; to: string[] }
  | { kind: "route"; service: string; area: string; route: string };

const TOWN: Record<string, string> = { antibes: "Antibes", cannes: "Cannes", monaco: "Monaco", "st-tropez": "Saint-Tropez" };
const MARINAS = ["antibes", "cannes", "monaco", "st-tropez"];
const hourly = (service: string, area: string): Page => ({ kind: "hourly", service, area });

const PAGES: Record<string, Page> = {
  "/our-services/hourly-chauffeur/nice": hourly("Hourly chauffeur", "Nice"),
  "/our-services/hourly-chauffeur/saint-tropez": hourly("Hourly chauffeur", "Saint-Tropez"),
  "/our-services/hourly-chauffeur/courchevel": hourly("Hourly chauffeur", "Courchevel"),
  "/our-services/hourly-chauffeur/megeve": hourly("Hourly chauffeur", "Megève"),
  "/our-services/hourly-chauffeur/chamonix": hourly("Hourly chauffeur", "Chamonix"),
  "/our-services/private-tours/nice": hourly("Private tour with a chauffeur", "Nice"),
  "/our-services/private-tours/cannes": hourly("Private tour with a chauffeur", "Cannes"),
  "/our-services/private-tours/monaco": hourly("Private tour with a chauffeur", "Monaco"),
  "/our-services/private-tours/saint-tropez": hourly("Private tour with a chauffeur", "Saint-Tropez"),
  "/our-services/private-tours/courchevel": hourly("Private tour with a chauffeur", "Courchevel"),
  "/our-services/private-tours/megeve": hourly("Private tour with a chauffeur", "Megève"),
  "/our-services/private-tours/chamonix": hourly("Private tour with a chauffeur", "Chamonix"),
  "/our-services/events": hourly("Event chauffeur", "French Riviera"),
  "/our-services/events/monaco-grand-prix": hourly("Monaco Grand Prix chauffeur", "Monaco"),
  "/our-services/events/cannes-film-festival": hourly("Cannes Film Festival chauffeur", "Cannes"),
  "/our-services/events/monaco-yacht-show": hourly("Monaco Yacht Show chauffeur", "Monaco"),
  "/our-services/yacht-transfers/crew-transportation": hourly("Yacht crew transportation", "French Riviera"),
  "/our-services/yacht-transfers": { kind: "transfer", service: "Yacht transfer", area: "French Riviera", to: MARINAS },
  "/our-services/yacht-transfers/nice-airport": { kind: "transfer", service: "Nice Airport to yacht transfer", area: "French Riviera", to: MARINAS },
  "/our-services/yacht-transfers/monaco": { kind: "transfer", service: "Yacht transfer to Port Hercule", area: "Monaco", to: ["monaco"] },
  "/our-services/yacht-transfers/cannes": { kind: "transfer", service: "Yacht transfer to the Vieux Port", area: "Cannes", to: ["cannes"] },
  "/our-services/yacht-transfers/antibes": { kind: "transfer", service: "Yacht transfer to Port Vauban", area: "Antibes", to: ["antibes"] },
  "/our-services/yacht-transfers/saint-tropez": { kind: "transfer", service: "Yacht transfer to the old port", area: "Saint-Tropez", to: ["st-tropez"] },
  "/our-services/transfers/eze-transfer": { kind: "route", service: "Nice Airport to Èze transfer", area: "Èze", route: "eze" },
  "/our-services/transfers/saint-jean-cap-ferrat-transfer": { kind: "route", service: "Nice Airport to Saint-Jean-Cap-Ferrat transfer", area: "Saint-Jean-Cap-Ferrat", route: "cap-ferrat" },
};

// The hourly and full-day rates are the same in every area, so they are read from one area of the price list.
const RATES_AREA = "nice";
const [E_CLASS, ...OTHERS] = vehicles;
const eur = (n: number) => `€${n.toLocaleString("en-GB")}`;
const short = (name: string) => name.replace("Mercedes ", "");
const list = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : items[0]);
const from = (price: number) => ({ "@type": "PriceSpecification", minPrice: price, priceCurrency: "EUR" });

function hourlyPrices(service: string) {
  const r = (v: (typeof vehicles)[number]) => v.prices[RATES_AREA];
  const line = `Starting from ${eur(r(E_CLASS).hourly)} an hour in a ${E_CLASS.name} (${OTHERS.map(v => `${short(v.name)} ${eur(r(v).hourly)}`).join(", ")}), or ${eur(r(E_CLASS).fullDay)} for a full day.`;
  const offers = [
    ...vehicles.map(v => ({
      "@type": "Offer",
      name: `${service}, ${v.name}, per hour`,
      price: r(v).hourly,
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", minPrice: r(v).hourly, price: r(v).hourly, priceCurrency: "EUR", unitCode: "HUR", unitText: "hour" },
    })),
    { "@type": "Offer", name: `${service}, ${E_CLASS.name}, full day (8 hours)`, price: r(E_CLASS).fullDay, priceCurrency: "EUR", priceSpecification: from(r(E_CLASS).fullDay) },
  ];
  return { line, offers };
}

function transferPrices(service: string, to: string[]) {
  if (to.length === 1) {
    const id = to[0];
    const line = `Starting from ${eur(E_CLASS.prices[id].transfer)} one way from Nice Airport in a ${E_CLASS.name} (${OTHERS.map(v => `${short(v.name)} ${eur(v.prices[id].transfer)}`).join(", ")}).`;
    const offers = vehicles.map(v => ({
      "@type": "Offer",
      name: `${service}, ${v.name}, one way from Nice Airport`,
      price: v.prices[id].transfer,
      priceCurrency: "EUR",
      priceSpecification: from(v.prices[id].transfer),
    }));
    return { line, offers };
  }
  const lowest = Math.min(...to.map(id => E_CLASS.prices[id].transfer));
  const line = `Starting from ${eur(lowest)} one way from Nice Airport in a ${E_CLASS.name}: ${list(to.map(id => `${TOWN[id]} ${eur(E_CLASS.prices[id].transfer)}`))}.`;
  const offers = to.map(id => ({
    "@type": "Offer",
    name: `Nice Airport to ${TOWN[id]}, ${E_CLASS.name}, one way`,
    price: E_CLASS.prices[id].transfer,
    priceCurrency: "EUR",
    priceSpecification: from(E_CLASS.prices[id].transfer),
  }));
  return { line, offers };
}

/** A route outside the price table: the starting prices its page states (data/vehicles.tsx, routeStartingPrices). */
function routeFromPrices(service: string, route: string) {
  const prices = routeStartingPrices[route].prices;
  const name = (id?: string) => vehicles.find(v => v.id === id)?.name;
  const [first, ...rest] = prices;
  const others = rest.map(p => `${short(name(p.vehicleId) ?? "")} ${eur(p.transfer)}`).join(", ");
  const line = `Starting from ${eur(first.transfer)} one way from Nice Airport${first.vehicleId ? ` in a ${name(first.vehicleId)}` : ""}${others ? ` (${others})` : ""}.`;
  const offers = prices.map(p => ({
    "@type": "Offer",
    name: `${service}${p.vehicleId ? `, ${name(p.vehicleId)}` : ""}, one way`,
    price: p.transfer,
    priceCurrency: "EUR",
    priceSpecification: from(p.transfer),
  }));
  return { line, offers };
}

/** The page's starting-price line and its Service markup, or null for a page without one. */
export function servicePrices(path: string): { line: string; schema: Record<string, unknown> } | null {
  const page = PAGES[path];
  if (!page) return null;
  const { line, offers } =
    page.kind === "hourly" ? hourlyPrices(page.service) : page.kind === "route" ? routeFromPrices(page.service, page.route) : transferPrices(page.service, page.to);
  const where = page.area === "French Riviera" ? " on the French Riviera" : page.service.includes(page.area) ? "" : ` in ${page.area}`;
  return {
    line,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${page.service}${where}`,
      serviceType: page.service,
      url: `${siteUrl}${path}`,
      provider: { "@id": `${siteUrl}#localbusiness` },
      areaServed: page.area,
      offers,
    },
  };
}
