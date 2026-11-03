// The price guide as text in the page (user, 3 Nov 2026: "render the Monaco, Cannes and other destination prices as
// static texts with the same animations ... and give each destination its own page"). The home's rate cards show one
// destination at a time, so the other prices only existed after a click: crawlers and AI assistants never saw them.
// Here every price is in the HTML, each figure rolls like the cards' (RollingNumber: plain figure from the server,
// counter once on screen), and each destination links to its existing transfer page, which shows its own table and
// declares the same prices as Offers. Prices: data/vehicles.tsx, unchanged.

import Link from "next/link";
import { cities, vehicles } from "../data/vehicles";
import { siteUrl } from "../data/site-config";
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

/** Home: every destination's one-way transfer price from Nice Airport, by car. */
export function AllDestinationPrices() {
  return (
    <div className="mt-10 overflow-hidden rounded-[14px] ring-1 ring-[#eaecf0]">
      <div className="flex flex-wrap items-end justify-between gap-2 bg-[#f8f9fb] px-5 py-4">
        <h3 className="text-[18px] font-bold text-[#101828]">All destinations at a glance</h3>
        <p className="text-[13px] text-[#667085]">From Nice Airport, one way, starting prices</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[15px] max-sm:block sm:min-w-[560px]">
          <caption className="sr-only">Starting prices of a one-way private transfer from Nice Côte d&apos;Azur Airport, by destination and vehicle</caption>
          <thead>
            <tr className="border-b border-[#eaecf0] text-[13px] text-[#667085] max-sm:hidden">
              <th scope="col" className="px-5 py-3 text-left font-semibold">Destination</th>
              {vehicles.map(v => (
                <th key={v.id} scope="col" className="px-4 py-3 text-right font-semibold">
                  {short(v.name)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-sm:block">
            {cities.map(city => (
              <tr key={city.id} className={`${row} max-sm:grid-cols-2`}>
                <th scope="row" className="px-5 py-3.5 text-left font-semibold text-[#101828] max-sm:col-span-2 max-sm:px-0 max-sm:pb-1 max-sm:pt-0">
                  <Link href={CITY_PAGE[city.id]} className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#a97c25]">
                    {city.displayName}
                    <span aria-hidden="true" className="text-[#d4b471] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                </th>
                {vehicles.map(v => (
                  <td key={v.id} data-label={short(v.name)} className={`${cell} font-semibold text-[#101828]`}>
                    <RollingNumber value={`${v.prices[city.id].transfer}€`} />
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

/** A destination page: its one-way transfer, hourly and full-day starting prices by car, and the same as Offers. */
export function RoutePrices({ cityId, path }: { cityId: string; path: string }) {
  const city = cities.find(c => c.id === cityId);
  if (!city) return null;
  const route = `Nice Airport to ${city.displayName}`;
  const offers = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${route} private transfer`,
    serviceType: "Airport transfer",
    url: `${siteUrl}${path}`,
    provider: { "@id": `${siteUrl}#localbusiness` },
    areaServed: city.displayName,
    offers: vehicles.map(v => ({
      "@type": "Offer",
      name: `${route}, ${v.name}, one way`,
      price: v.prices[cityId].transfer,
      priceCurrency: "EUR",
      description: `Starting price for up to ${v.passengers} passengers; the fixed fare is confirmed before the ride.`,
    })),
  };
  return (
    <div className="overflow-hidden rounded-[14px] bg-white ring-1 ring-[#eaecf0]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[15px] max-sm:block sm:min-w-[520px]">
          <caption className="sr-only">{route}: starting prices by vehicle</caption>
          <thead>
            <tr className="border-b border-[#eaecf0] bg-[#f8f9fb] text-[13px] text-[#667085] max-sm:hidden">
              <th scope="col" className="px-5 py-3 text-left font-semibold">Vehicle</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">Transfer, one way</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">Per hour</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">Full day</th>
            </tr>
          </thead>
          <tbody className="max-sm:block">
            {vehicles.map(v => {
              const p = v.prices[cityId];
              return (
                <tr key={v.id} className={row}>
                  <th scope="row" className="px-5 py-3.5 text-left font-semibold text-[#101828] max-sm:px-0 max-sm:pb-1 max-sm:pt-0">
                    {v.name}
                    <span className="block text-[12px] font-normal text-[#667085]">Up to {v.passengers} passengers</span>
                  </th>
                  <td data-label="Transfer, one way" className={`${cell} text-[17px] font-bold text-[#101828]`}>
                    <RollingNumber value={`${p.transfer}€`} />
                  </td>
                  <td data-label="Per hour" className={`${cell} text-[#344054]`}>
                    <RollingNumber value={`${p.hourly}€`} />
                  </td>
                  <td data-label="Full day" className={`${cell} text-[#344054]`}>
                    <RollingNumber value={`${p.fullDay}€`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="border-t border-[#f2f4f7] px-5 py-3 text-[13px] text-[#667085]">
        Starting prices from our guide. Your fixed fare is confirmed before the ride; it can adapt to timing, luggage and the exact address.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
    </div>
  );
}
