// The price guide as text in the page (user, 3 Nov 2026: "render the Monaco, Cannes and other destination prices as
// static texts with the same animations ... and give each destination its own page"). The home's rate cards show one
// destination at a time, so the other prices only existed after a click: crawlers and AI assistants never saw them.
// Here every price is in the HTML, each figure rolls like the cards' (RollingNumber: plain figure from the server,
// counter once on screen), and each destination links to its existing transfer page, which shows its own table and
// declares the same prices as Offers. Prices: data/vehicles.tsx, unchanged.

import Link from "next/link";
import { cities, vehicles } from "../data/vehicles";
import { siteUrl } from "../data/site-config";
import { frLink } from "../data/i18n/addresses";
import RollingNumber from "./rolling-number";

/** Each destination of the price guide and its transfer page (the pages already exist and are indexed). */
export const CITY_PAGE: Record<string, string> = {
  nice: "/our-services/transfers/nice-airport-transfer",
  antibes: "/our-services/transfers/antibes-transfer",
  cannes: "/our-services/transfers/cannes-airport-transfer",
  monaco: "/our-services/transfers/monaco-airport-transfer",
  "st-tropez": "/our-services/transfers/saint-tropez-transfer",
};

export const cityForPage = (path: string) => cities.find(c => CITY_PAGE[c.id] === path);

const short = (name: string) => name.replace("Mercedes ", "");
// On phones each row restacks: the name across, then each price as a labelled line (no sideways scrolling).
const cell = "px-4 py-3.5 text-right tabular-nums max-sm:flex max-sm:items-baseline max-sm:justify-between max-sm:px-0 max-sm:py-1 max-sm:before:text-[13px] max-sm:before:font-normal max-sm:before:text-[#667085] max-sm:before:content-[attr(data-label)]";
const row = "border-b border-[#f2f4f7] last:border-0 max-sm:grid max-sm:gap-x-6 max-sm:px-5 max-sm:py-3";

// The overview table's words in each language; English pages keep the words they always had.
const OVERVIEW = {
  en: {
    title: "All destinations at a glance",
    subtitle: "From Nice Airport, one way, starting prices",
    caption: "Starting prices of a one-way private transfer from Nice Côte d'Azur Airport, by destination and vehicle",
    destination: "Destination",
    car: (name: string) => short(name),
    price: (n: number) => `${n}€`,
  },
  fr: {
    title: "Toutes les destinations en un coup d'œil",
    subtitle: "Depuis l'aéroport de Nice, aller simple, prix de départ",
    caption: "Prix de départ d'un transfert privé aller simple depuis l'aéroport Nice Côte d'Azur, par destination et par véhicule",
    destination: "Destination",
    car: (name: string) => short(name.replace(/ ([A-Z])-Class$/, " Classe $1")),
    price: (n: number) => `${n.toLocaleString("fr-FR")} €`,
  },
};

/** Home: every destination's one-way transfer price from Nice Airport, by car (the French home: French names, the
 *  French route pages). */
export function AllDestinationPrices({ locale }: { locale?: "fr" }) {
  const t = OVERVIEW[locale ?? "en"];
  return (
    <div className="mt-10 overflow-hidden rounded-[14px] ring-1 ring-[#eaecf0]">
      <div className="flex flex-wrap items-end justify-between gap-2 bg-[#f8f9fb] px-5 py-4">
        <h3 className="text-[18px] font-bold text-[#101828]">{t.title}</h3>
        <p className="text-[13px] text-[#667085]">{t.subtitle}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[15px] max-sm:block sm:min-w-[560px]">
          <caption className="sr-only">{t.caption}</caption>
          <thead>
            <tr className="border-b border-[#eaecf0] text-[13px] text-[#667085] max-sm:hidden">
              <th scope="col" className="px-5 py-3 text-left font-semibold">{t.destination}</th>
              {vehicles.map(v => (
                <th key={v.id} scope="col" className="px-4 py-3 text-right font-semibold">
                  {t.car(v.name)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-sm:block">
            {cities.map(city => (
              <tr key={city.id} className={`${row} max-sm:grid-cols-2`}>
                <th scope="row" className="px-5 py-3.5 text-left font-semibold text-[#101828] max-sm:col-span-2 max-sm:px-0 max-sm:pb-1 max-sm:pt-0">
                  <Link href={locale === "fr" ? frLink(CITY_PAGE[city.id]) : CITY_PAGE[city.id]} className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#a97c25]">
                    {cityName(city, locale)}
                    <span aria-hidden="true" className="text-[#d4b471] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                </th>
                {vehicles.map(v => (
                  <td key={v.id} data-label={t.car(v.name)} className={`${cell} font-semibold text-[#101828]`}>
                    <RollingNumber value={t.price(v.prices[city.id].transfer)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** French names of the price guide's destinations and cars, for the French pages. */
const FRENCH_CITY: Record<string, string> = {
  nice: "Nice ville",
  antibes: "Antibes/Juan-les-Pins",
  cannes: "Cannes",
  monaco: "Monaco/Cap-d'Ail",
  "st-tropez": "Saint-Tropez",
};
const frenchCar = (name: string) => name.replace(/ ([A-Z])-Class$/, " Classe $1");
const frenchEur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

// The places each destination of the price guide covers, as the structured data names them; the table and the chips
// keep the guide's own names ("Nice City", "Monaco/Cap d'Ail").
const DESTINATION_PLACES: Record<string, string | string[]> = {
  nice: "Nice",
  antibes: ["Antibes", "Juan-les-Pins"],
  cannes: "Cannes",
  monaco: ["Monaco", "Cap-d'Ail"],
  "st-tropez": "Saint-Tropez",
};

/** The destination's name in the page's language. */
export const cityName = (city: { id: string; displayName: string }, locale?: "fr") =>
  locale === "fr" ? (FRENCH_CITY[city.id] ?? city.displayName) : city.displayName;

// The table's words in each language; English pages keep the words they always had.
const TABLE = {
  en: {
    route: (city: string) => `Nice Airport to ${city}`,
    service: (route: string) => `${route} private transfer`,
    serviceType: "Airport transfer",
    offer: (route: string, car: string) => `${route}, ${car}, one way`,
    offerNote: (passengers: number) => `Starting price for up to ${passengers} passengers; the fixed fare is confirmed before the ride.`,
    caption: (route: string) => `${route}: starting prices by vehicle`,
    vehicle: "Vehicle",
    transfer: "Transfer, one way",
    hourly: "Per hour",
    fullDay: "Full day",
    upTo: (passengers: number) => `Up to ${passengers} passengers`,
    note: "Starting prices from our guide. Your fixed fare is confirmed before the ride; it can adapt to timing, luggage and the exact address.",
    car: (name: string) => name,
    price: (n: number) => `${n}€`,
  },
  fr: {
    route: (city: string) => `De l'aéroport de Nice à ${city}`,
    service: (route: string) => `Transfert privé ${route.replace(/^De/, "de")}`,
    serviceType: "Transfert aéroport",
    offer: (route: string, car: string) => `${route}, ${car}, aller simple`,
    offerNote: (passengers: number) => `Prix de départ jusqu'à ${passengers} passagers ; le prix fixe est confirmé avant le trajet.`,
    caption: (route: string) => `${route} : prix de départ par véhicule`,
    vehicle: "Véhicule",
    transfer: "Transfert, aller simple",
    hourly: "À l'heure",
    fullDay: "Journée",
    upTo: (passengers: number) => `Jusqu'à ${passengers} passagers`,
    note: "Prix de départ de notre grille. Votre prix fixe est confirmé avant le trajet ; il peut varier selon l'horaire, les bagages et l'adresse exacte.",
    car: frenchCar,
    price: frenchEur,
  },
};

/** A destination page: its one-way transfer, hourly and full-day starting prices by car, and the same as Offers. */
export function RoutePrices({ cityId, path, locale }: { cityId: string; path: string; locale?: "fr" }) {
  const city = cities.find(c => c.id === cityId);
  if (!city) return null;
  const t = TABLE[locale ?? "en"];
  const route = t.route(cityName(city, locale));
  const offers = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.service(route),
    serviceType: t.serviceType,
    url: `${siteUrl}${path}`,
    provider: { "@id": `${siteUrl}#localbusiness` },
    areaServed: DESTINATION_PLACES[city.id] ?? cityName(city, locale),
    offers: vehicles.map(v => ({
      "@type": "Offer",
      name: t.offer(route, t.car(v.name)),
      price: v.prices[cityId].transfer,
      priceCurrency: "EUR",
      description: t.offerNote(v.passengers),
    })),
  };
  return (
    <div className="overflow-hidden rounded-[14px] bg-white ring-1 ring-[#eaecf0]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[15px] max-sm:block sm:min-w-[520px]">
          <caption className="sr-only">{t.caption(route)}</caption>
          <thead>
            <tr className="border-b border-[#eaecf0] bg-[#f8f9fb] text-[13px] text-[#667085] max-sm:hidden">
              <th scope="col" className="px-5 py-3 text-left font-semibold">{t.vehicle}</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">{t.transfer}</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">{t.hourly}</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">{t.fullDay}</th>
            </tr>
          </thead>
          <tbody className="max-sm:block">
            {vehicles.map(v => {
              const p = v.prices[cityId];
              return (
                <tr key={v.id} className={row}>
                  <th scope="row" className="px-5 py-3.5 text-left font-semibold text-[#101828] max-sm:px-0 max-sm:pb-1 max-sm:pt-0">
                    {t.car(v.name)}
                    <span className="block text-[12px] font-normal text-[#667085]">{t.upTo(v.passengers)}</span>
                  </th>
                  <td data-label={t.transfer} className={`${cell} text-[17px] font-bold text-[#101828]`}>
                    <RollingNumber value={t.price(p.transfer)} />
                  </td>
                  <td data-label={t.hourly} className={`${cell} text-[#344054]`}>
                    <RollingNumber value={t.price(p.hourly)} />
                  </td>
                  <td data-label={t.fullDay} className={`${cell} text-[#344054]`}>
                    <RollingNumber value={t.price(p.fullDay)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="border-t border-[#f2f4f7] px-5 py-3 text-[13px] text-[#667085]">
        {t.note}
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
    </div>
  );
}
