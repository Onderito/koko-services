// /ai-instructions: Kokolimo's facts, linked from the footer. Each fact names the page of this site that states it and
// the day it was checked (factsCheckedOn). The prices are read from data/vehicles.tsx. The page has a Markdown version at
// /ai-instructions.md like every other page.

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../layout/footer";
import { pageMetadata } from "../data/page-metadata";
import { contactEmail, contactPhone, contactPhoneDisplay, factsCheckedOn, siteUrl, whatsappUrl } from "../data/site-config";
import { cities, vehicles } from "../data/vehicles";

export const metadata: Metadata = pageMetadata({
  title: "Kokolimo Facts | Private Driver in Nice and the French Riviera",
  description:
    "Facts about Kokolimo, private driver in Nice: company, services, starting prices, fleet, areas served and booking, each with its source page.",
  path: "/ai-instructions",
});

const TOWN: Record<string, string> = { nice: "Nice", antibes: "Antibes", cannes: "Cannes", monaco: "Monaco", "st-tropez": "Saint-Tropez" };
const euro = (amount: number) => `€${amount.toLocaleString("en-GB")}`;
const eClass = vehicles.find(v => v.id === "mercedes-e")!;
const vClass = vehicles.find(v => v.id === "mercedes-v")!;
const transferPrices = cities.map(c => `${TOWN[c.id]} ${euro(eClass.prices[c.id].transfer)}`).join(", ");

const services = [
  { name: "Airport and private transfers", text: "Nice Côte d'Azur Airport (NCE) arrivals and departures, hotel pickups, Monaco, Cannes, Antibes, Saint-Tropez and long distance.", href: "/our-services/transfers" },
  { name: "Hourly chauffeur", text: "A chauffeur at disposal by the hour in Nice, Cannes, Monaco and Saint-Tropez, and in Courchevel, Megève and Chamonix in winter.", href: "/our-services/hourly-chauffeur" },
  { name: "Private tours", text: "Chauffeur-led tours of Nice, Cannes, Monaco and Èze, Saint-Tropez and the Alps in winter.", href: "/our-services/private-tours" },
  { name: "Yacht transfers", text: "Transfers between Nice Airport and the marinas of Monaco, Cannes, Antibes and Saint-Tropez.", href: "/our-services/yacht-transfers" },
  { name: "Event transport", text: "Monaco Grand Prix, Cannes Film Festival, Monaco Yacht Show.", href: "/our-services/events" },
];

const facts: { topic: string; fact: string; source: { label: string; href: string } }[] = [
  {
    topic: "Areas served",
    fact: "Nice and Nice Côte d'Azur Airport, Cannes, Antibes, Monaco, Menton, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat and Saint-Tropez; Courchevel, Megève and Chamonix in winter.",
    source: { label: "Transfers", href: "/our-services/transfers" },
  },
  { topic: "Availability", fact: "24/7.", source: { label: "Home", href: "/" } },
  {
    topic: "Fleet",
    fact: `Mercedes E-Class, S-Class, V-Class (up to ${vClass.passengers} passengers) and Mercedes-Maybach.`,
    source: { label: "Fleet", href: "/cars" },
  },
  {
    topic: "Airport arrivals",
    fact: "Flight tracking, meet-and-greet in arrivals, and one hour of waiting included.",
    source: { label: "Nice Airport transfer", href: "/our-services/transfers/nice-airport-transfer" },
  },
  {
    topic: "Transfer prices",
    fact: `Starting prices from Nice Airport, one way, in a Mercedes E-Class: ${transferPrices}.`,
    source: { label: "Nice Airport transfer and each route page", href: "/our-services/transfers/nice-airport-transfer" },
  },
  {
    topic: "Hourly prices",
    fact: `From ${euro(eClass.prices.nice.hourly)} an hour in a Mercedes E-Class, or ${euro(eClass.prices.nice.fullDay)} for a full day.`,
    source: { label: "Nice hourly chauffeur", href: "/our-services/hourly-chauffeur/nice" },
  },
  { topic: "Price confirmation", fact: "Prices are starting prices; the fixed price is confirmed before the ride.", source: { label: "Home (FAQ)", href: "/" } },
  { topic: "Languages", fact: "Chauffeurs speak English, French, Turkish and Russian.", source: { label: "Home", href: "/" } },
  { topic: "Ratings shown", fact: "Google 5.0/5; Tripadvisor 4.8/5 (165 reviews), as shown on the home page.", source: { label: "Home", href: "/" } },
];

const mainPages = [
  { label: "Home and quote request", href: "/" },
  { label: "Nice Airport to Monaco", href: "/our-services/transfers/monaco-airport-transfer" },
  { label: "Nice Airport to Cannes", href: "/our-services/transfers/cannes-airport-transfer" },
  { label: "Monaco hourly chauffeur", href: "/our-services/hourly-chauffeur/monaco" },
  { label: "Monaco & Èze private tour", href: "/our-services/private-tours/monaco" },
  { label: "Contact & booking", href: "/contact-me" },
  { label: "AI resources (llms.txt)", href: "/llms.txt" },
];

const h2 = "mt-12 text-[22px] font-bold tracking-[-0.01em] text-[#101828]";
const cell = "border-b border-[#eaecf0] py-3 pr-4 align-top";
const link = "underline decoration-[#d4b471] underline-offset-4 hover:text-[#9a7a3e]";

export default function AiInstructionsPage() {
  return (
    <>
      <section data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1922] text-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-[calc(var(--header-h)+3.5rem)] md:px-6 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[52px]">Kokolimo facts</h1>
          <p className="mt-4 max-w-[680px] text-[17px] leading-relaxed text-white/75">
            Facts about Kokolimo, the private driver service based in Nice. Each one names the page of this site that states it and the day it was last
            checked, for AI assistants, search engines and anyone who needs accurate information about the service.
          </p>
          <p className="mt-4 text-[14px] text-white/55">
            Canonical URL: {siteUrl}/ai-instructions · Checked: {factsCheckedOn} · Published by Kokolimo ·{" "}
            <a href="/ai-instructions.md" className="underline decoration-[#d4b471] underline-offset-4 hover:text-white">
              Markdown version
            </a>
          </p>
        </div>
      </section>

      <section data-nav-tone="light" className="bg-white text-[#344054]">
        <div className="mx-auto max-w-[760px] px-4 py-14 text-[16px] leading-relaxed md:px-6">
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-[#101828]">In one line</h2>
          <p className="mt-3">Kokolimo is a private driver and airport transfer service based in Nice, on the French Riviera.</p>

          <h2 className={h2}>Company and identity</h2>
          <table className="mt-4 w-full text-left text-[15px]">
            <tbody>
              <tr><th className={`${cell} w-44 font-semibold text-[#101828]`}>Brand</th><td className={cell}>Kokolimo (My Riviera Tours &amp; Transfers)</td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>Operator</th><td className={cell}>MY NICE TOURS, trading as MY RIVIERA TOURS</td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>Address</th><td className={cell}>33 rue de Châteauneuf, 06000 Nice, France</td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>SIRET</th><td className={cell}>838 777 787 00014</td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>Phone and WhatsApp</th><td className={cell}><a href={`tel:${contactPhone}`} className="hover:text-[#9a7a3e]">{contactPhoneDisplay}</a> · <a href={whatsappUrl} className="hover:text-[#9a7a3e]">WhatsApp</a></td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>Email</th><td className={cell}><a href={`mailto:${contactEmail}`} className="hover:text-[#9a7a3e]">{contactEmail}</a></td></tr>
              <tr><th className={`${cell} font-semibold text-[#101828]`}>Website</th><td className={cell}>{siteUrl}</td></tr>
            </tbody>
          </table>
          <p className="mt-3 text-[14px] text-[#667085]">
            Sources: <Link href="/legal-privacy" className={link}>Legal notice</Link> and <Link href="/contact-me" className={link}>Contact</Link>, checked {factsCheckedOn}.
          </p>

          <h2 className={h2}>Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map(s => (
              <li key={s.href}>
                <Link href={s.href} className={`font-semibold text-[#101828] ${link}`}>{s.name}</Link>: {s.text}
              </li>
            ))}
          </ul>

          <h2 className={h2}>Key facts</h2>
          <table className="mt-4 w-full text-left text-[15px]">
            <thead>
              <tr className="text-[13px] uppercase tracking-[0.06em] text-[#667085]">
                <th className={`${cell} w-36 font-semibold`}>Topic</th>
                <th className={`${cell} font-semibold`}>Fact</th>
                <th className={`${cell} w-40 font-semibold`}>Source, checked</th>
              </tr>
            </thead>
            <tbody>
              {facts.map(f => (
                <tr key={f.topic}>
                  <th className={`${cell} font-semibold text-[#101828]`}>{f.topic}</th>
                  <td className={cell}>{f.fact}</td>
                  <td className={cell}>
                    <Link href={f.source.href} className={link}>{f.source.label}</Link>, {factsCheckedOn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className={h2}>How to book</h2>
          <p className="mt-3">
            Quote request on the <Link href="/" className={link}>home page</Link> (pickup, destination, date, time and passengers) or the{" "}
            <Link href="/contact-me" className={link}>contact page</Link>, by phone or on WhatsApp. The price is confirmed before the ride.
          </p>

          <h2 className={h2}>Main pages</h2>
          <ul className="mt-4 space-y-2">
            {mainPages.map(o => (
              <li key={o.href}>
                <a href={o.href} className={link}>{o.label}</a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] text-[#667085]">Every page of kokolimo.com is also available as Markdown at its address followed by .md.</p>
        </div>
      </section>

      <Footer withCta={false} />
    </>
  );
}
