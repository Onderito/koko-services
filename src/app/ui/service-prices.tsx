// Starting prices of the service pages that sell hourly hire (hourly chauffeur, tours, events, yacht crew) or a
// transfer to a marina: one line under the hero description, and the same prices as Offers in the page's own
// structured data, so the markup matches what the page shows. Prices: data/vehicles.tsx. Hourly hire is charged at
// the same rates in every area served, the Alps included; a yacht transfer costs the one-way transfer from Nice
// Airport to the marina's town. Pages not listed here (the route pages, which have RoutePrices) show no line. A French
// page passes its own address: the same prices, with the line and the offer names in French. The pages of PLACE_ONLY
// show no line either, and name their service and place in a Service block without offers (placeService).

import { routeStartingPrices, vehicles } from "../data/vehicles";
import { siteUrl } from "../data/site-config";
import { carFr } from "../data/i18n/fr-helpers";
import { ENGLISH_LEFT_AS_IS } from "../data/places";

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

// The French words: each page's service, the areas, the cars and the euro amounts written the French way.
const SERVICE_FR: Record<string, string> = {
  "/our-services/hourly-chauffeur/nice": "Chauffeur privé à l'heure",
  "/our-services/hourly-chauffeur/saint-tropez": "Chauffeur privé à l'heure",
  "/our-services/hourly-chauffeur/courchevel": "Chauffeur privé à l'heure",
  "/our-services/hourly-chauffeur/megeve": "Chauffeur privé à l'heure",
  "/our-services/hourly-chauffeur/chamonix": "Chauffeur privé à l'heure",
  "/our-services/private-tours/nice": "Excursion privée avec chauffeur",
  "/our-services/private-tours/cannes": "Excursion privée avec chauffeur",
  "/our-services/private-tours/monaco": "Excursion privée avec chauffeur",
  "/our-services/private-tours/saint-tropez": "Excursion privée avec chauffeur",
  "/our-services/private-tours/courchevel": "Excursion privée avec chauffeur",
  "/our-services/private-tours/megeve": "Excursion privée avec chauffeur",
  "/our-services/private-tours/chamonix": "Excursion privée avec chauffeur",
  "/our-services/events": "Chauffeur pour les événements",
  "/our-services/events/monaco-grand-prix": "Chauffeur pour le Grand Prix de Monaco",
  "/our-services/events/cannes-film-festival": "Chauffeur pour le Festival de Cannes",
  "/our-services/events/monaco-yacht-show": "Chauffeur pour le Monaco Yacht Show",
  "/our-services/yacht-transfers/crew-transportation": "Transport d'équipage de yacht",
  "/our-services/yacht-transfers": "Transfert yacht",
  "/our-services/yacht-transfers/nice-airport": "Transfert de l'aéroport de Nice au yacht",
  "/our-services/yacht-transfers/monaco": "Transfert yacht vers le port Hercule",
  "/our-services/yacht-transfers/cannes": "Transfert yacht vers le Vieux-Port",
  "/our-services/yacht-transfers/antibes": "Transfert yacht vers Port Vauban",
  "/our-services/yacht-transfers/saint-tropez": "Transfert yacht vers le vieux port",
  "/our-services/transfers/eze-transfer": "Transfert de l'aéroport de Nice à Èze",
  "/our-services/transfers/saint-jean-cap-ferrat-transfer": "Transfert de l'aéroport de Nice à Saint-Jean-Cap-Ferrat",
};
const areaFr = (area: string) => (area === "French Riviera" ? "Côte d'Azur" : area);
const eurFr = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const shortFr = (name: string) => short(carFr(name));
const listFr = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}` : items[0]);

function hourlyPricesFr(service: string) {
  const r = (v: (typeof vehicles)[number]) => v.prices[RATES_AREA];
  const line = `À partir de ${eurFr(r(E_CLASS).hourly)} de l'heure en ${carFr(E_CLASS.name)} (${OTHERS.map(v => `${shortFr(v.name)} ${eurFr(r(v).hourly)}`).join(", ")}), ou ${eurFr(r(E_CLASS).fullDay)} la journée.`;
  const offers = [
    ...vehicles.map(v => ({
      "@type": "Offer",
      name: `${service}, ${carFr(v.name)}, à l'heure`,
      price: r(v).hourly,
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", minPrice: r(v).hourly, price: r(v).hourly, priceCurrency: "EUR", unitCode: "HUR", unitText: "heure" },
    })),
    { "@type": "Offer", name: `${service}, ${carFr(E_CLASS.name)}, journée (8 heures)`, price: r(E_CLASS).fullDay, priceCurrency: "EUR", priceSpecification: from(r(E_CLASS).fullDay) },
  ];
  return { line, offers };
}

function transferPricesFr(service: string, to: string[]) {
  if (to.length === 1) {
    const id = to[0];
    const line = `À partir de ${eurFr(E_CLASS.prices[id].transfer)} l'aller simple depuis l'aéroport de Nice en ${carFr(E_CLASS.name)} (${OTHERS.map(v => `${shortFr(v.name)} ${eurFr(v.prices[id].transfer)}`).join(", ")}).`;
    const offers = vehicles.map(v => ({
      "@type": "Offer",
      name: `${service}, ${carFr(v.name)}, aller simple depuis l'aéroport de Nice`,
      price: v.prices[id].transfer,
      priceCurrency: "EUR",
      priceSpecification: from(v.prices[id].transfer),
    }));
    return { line, offers };
  }
  const lowest = Math.min(...to.map(id => E_CLASS.prices[id].transfer));
  const line = `À partir de ${eurFr(lowest)} l'aller simple depuis l'aéroport de Nice en ${carFr(E_CLASS.name)} : ${listFr(to.map(id => `${TOWN[id]} ${eurFr(E_CLASS.prices[id].transfer)}`))}.`;
  const offers = to.map(id => ({
    "@type": "Offer",
    name: `Aéroport de Nice à ${TOWN[id]}, ${carFr(E_CLASS.name)}, aller simple`,
    price: E_CLASS.prices[id].transfer,
    priceCurrency: "EUR",
    priceSpecification: from(E_CLASS.prices[id].transfer),
  }));
  return { line, offers };
}

function routeFromPricesFr(service: string, route: string) {
  const prices = routeStartingPrices[route].prices;
  const name = (id?: string) => vehicles.find(v => v.id === id)?.name;
  const [first, ...rest] = prices;
  const others = rest.map(p => `${shortFr(name(p.vehicleId) ?? "")} ${eurFr(p.transfer)}`).join(", ");
  const firstCar = name(first.vehicleId);
  const line = `À partir de ${eurFr(first.transfer)} l'aller simple depuis l'aéroport de Nice${firstCar ? ` en ${carFr(firstCar)}` : ""}${others ? ` (${others})` : ""}.`;
  const offers = prices.map(p => ({
    "@type": "Offer",
    name: `${service}${p.vehicleId ? `, ${carFr(name(p.vehicleId) ?? "")}` : ""}, aller simple`,
    price: p.transfer,
    priceCurrency: "EUR",
    priceSpecification: from(p.transfer),
  }));
  return { line, offers };
}

/** The page's starting-price line and its Service markup, or null for a page without one. A French page passes its
 *  English original's path and, in `french`, its own address. */
export function servicePrices(path: string, french?: { url: string }): { line: string; schema: Record<string, unknown> } | null {
  const page = PAGES[path];
  if (!page) return null;
  if (french) {
    const service = SERVICE_FR[path];
    const area = areaFr(page.area);
    const { line, offers } =
      page.kind === "hourly" ? hourlyPricesFr(service) : page.kind === "route" ? routeFromPricesFr(service, page.route) : transferPricesFr(service, page.to);
    const where = page.area === "French Riviera" ? " sur la Côte d'Azur" : service.includes(area) ? "" : ` à ${area}`;
    return {
      line,
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service}${where}`,
        serviceType: service,
        url: `${siteUrl}${french.url}`,
        provider: { "@id": `${siteUrl}#localbusiness` },
        areaServed: area,
        offers,
      },
    };
  }
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

// Pages with no starting-price line (no confirmed price for the route, or prices the page presents its own way): their
// service and place, in English and in French.
const PLACE_ONLY: Record<string, { service: string; serviceFr: string; area: string }> = {
  "/our-services/hourly-chauffeur/cannes": { service: "Hourly chauffeur", serviceFr: "Chauffeur privé à l'heure", area: "Cannes" },
  "/our-services/hourly-chauffeur/monaco": { service: "Hourly chauffeur", serviceFr: "Chauffeur privé à l'heure", area: "Monaco" },
  "/our-services/transfers/menton-transfer": { service: "Nice Airport to Menton transfer", serviceFr: "Transfert de l'aéroport de Nice à Menton", area: "Menton" },
  "/our-services/transfers/villefranche-transfer": {
    service: "Nice Airport to Villefranche-sur-Mer transfer",
    serviceFr: "Transfert de l'aéroport de Nice à Villefranche-sur-Mer",
    area: "Villefranche-sur-Mer",
  },
};

/** The Service block, without offers, of a page in PLACE_ONLY (null otherwise, and for the English pages of
 *  ENGLISH_LEFT_AS_IS). A French page passes its English original's path and, in `french`, its own address. */
export function placeService(path: string, french?: { url: string }): Record<string, unknown> | null {
  const page = PLACE_ONLY[path];
  if (!page || (!french && ENGLISH_LEFT_AS_IS.has(path))) return null;
  const service = french ? page.serviceFr : page.service;
  const where = service.includes(page.area) ? "" : french ? ` à ${page.area}` : ` in ${page.area}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service}${where}`,
    serviceType: service,
    url: `${siteUrl}${french ? french.url : path}`,
    provider: { "@id": `${siteUrl}#localbusiness` },
    areaServed: page.area,
  };
}
