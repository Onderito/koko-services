// /llms.txt: the brand, a one-paragraph summary, a facts paragraph, the fixed prices, then short sections of links. Facts
// and descriptions come from the site's own pages. Each page also has a Markdown twin at the same address + ".md"
// (src/middleware.ts).

import { factsCheckedOn } from "../data/site-config";
import { cities, vehicles } from "../data/vehicles";
import { frenchServicePages } from "../data/service-pages-fr";

export const dynamic = "force-static";

const BODY = `# Kokolimo

> Private chauffeur and airport transfer service on the French Riviera, based in Nice. Transfers from Nice Côte d'Azur Airport (NCE) to Monaco, Cannes, Antibes and Saint-Tropez, hourly chauffeur hire, private tours, yacht and event transport. Mercedes E-Class, S-Class, V-Class and Maybach. Fixed fare confirmed before booking, flight tracking, meet and greet, one hour of waiting included.

Kokolimo (My Riviera Tours & Transfers) is run by MY NICE TOURS, 33 rue de Châteauneuf, 06000 Nice (SIRET 838 777 787 00014). Chauffeurs speak English, French, Turkish and Russian. Winter service in Megève, Courchevel and Chamonix. Indicative fares from €90 (Nice Airport to Nice, E-Class); quotes are confirmed before the ride. Contact: +33 7 71 69 81 42 (phone, WhatsApp), kokolimo@myriviera.fr. Every page has a Markdown version at its address + .md. Sitemap: https://kokolimo.com/sitemap.xml

Languages: the site is in English (https://kokolimo.com/) and in French (https://kokolimo.com/fr). Each page names its other-language version (hreflang), and the French pages are listed below under "En français".

## Core pages

- [Home](https://kokolimo.com/): Private driver in Nice, Cannes and Monaco.
- [Our services](https://kokolimo.com/our-services): All chauffeur services.
- [Contact & booking](https://kokolimo.com/contact-me): Book a private driver.
- [Fleet](https://kokolimo.com/cars): E-Class, S-Class, V-Class and Maybach.
- [Mercedes E-Class](https://kokolimo.com/cars/class-e): Business saloon for up to 3 passengers.
- [Mercedes V-Class](https://kokolimo.com/cars/class-v): Van for up to 7 passengers.
- [Mercedes S-Class](https://kokolimo.com/cars/class-s): Executive sedan.
- [Mercedes-Maybach](https://kokolimo.com/cars/maybach): VIPs, weddings, executives.
- [Kokolimo facts](https://kokolimo.com/ai-instructions): each fact with the page that states it (checked ${factsCheckedOn}).

## Airport & city transfers

- [Private transfers](https://kokolimo.com/our-services/transfers): Airport, hotel, long-distance.
- [Nice Airport transfer](https://kokolimo.com/our-services/transfers/nice-airport-transfer): Meet and greet at NCE.
- [Nice Airport to Monaco](https://kokolimo.com/our-services/transfers/monaco-airport-transfer): About 30 minutes.
- [Nice Airport to Cannes](https://kokolimo.com/our-services/transfers/cannes-airport-transfer): About 30 minutes.
- [Nice Airport to Antibes](https://kokolimo.com/our-services/transfers/antibes-transfer): About 25 minutes.
- [Nice to Saint-Tropez](https://kokolimo.com/our-services/transfers/saint-tropez-transfer): By road or boat.
- Riviera villages: [Èze](https://kokolimo.com/our-services/transfers/eze-transfer), [Villefranche](https://kokolimo.com/our-services/transfers/villefranche-transfer), [Saint-Jean-Cap-Ferrat](https://kokolimo.com/our-services/transfers/saint-jean-cap-ferrat-transfer), [Menton](https://kokolimo.com/our-services/transfers/menton-transfer).
- [Long-distance transfers](https://kokolimo.com/our-services/transfers/long-distance-transfer): Beyond the Riviera.

## Hourly chauffeur

- [Hourly chauffeur](https://kokolimo.com/our-services/hourly-chauffeur): Nice, Cannes, Monaco, Saint-Tropez.
- [Monaco hourly chauffeur](https://kokolimo.com/our-services/hourly-chauffeur/monaco): Meetings, yachts, hotels.
- [Nice hourly chauffeur](https://kokolimo.com/our-services/hourly-chauffeur/nice): Meetings, shopping, airport.
- [Cannes hourly chauffeur](https://kokolimo.com/our-services/hourly-chauffeur/cannes): Congresses, Croisette hotels.
- [Saint-Tropez hourly chauffeur](https://kokolimo.com/our-services/hourly-chauffeur/saint-tropez): Beach clubs, villas, the port.
- Alps in winter, by the hour: [Megève](https://kokolimo.com/our-services/hourly-chauffeur/megeve), [Courchevel](https://kokolimo.com/our-services/hourly-chauffeur/courchevel), [Chamonix](https://kokolimo.com/our-services/hourly-chauffeur/chamonix).

## Tours, yachts & events

- [Private tours](https://kokolimo.com/our-services/private-tours): Nice, Cannes, Monaco, Saint-Tropez.
- [Monaco & Èze tour](https://kokolimo.com/our-services/private-tours/monaco): 4 or 8 hours.
- [Nice private tour](https://kokolimo.com/our-services/private-tours/nice): Old town and viewpoints.
- [Cannes private tour](https://kokolimo.com/our-services/private-tours/cannes): Croisette and seafront.
- [Saint-Tropez private tour](https://kokolimo.com/our-services/private-tours/saint-tropez): Village, beaches, Ramatuelle and Gassin.
- Alps tours in winter: [Megève](https://kokolimo.com/our-services/private-tours/megeve), [Courchevel](https://kokolimo.com/our-services/private-tours/courchevel), [Chamonix](https://kokolimo.com/our-services/private-tours/chamonix).
- [Yacht transfers](https://kokolimo.com/our-services/yacht-transfers): Riviera marinas.
- Yacht transfers by port: [Monaco, Port Hercule](https://kokolimo.com/our-services/yacht-transfers/monaco), [Cannes](https://kokolimo.com/our-services/yacht-transfers/cannes), [Antibes, Port Vauban](https://kokolimo.com/our-services/yacht-transfers/antibes), [Saint-Tropez](https://kokolimo.com/our-services/yacht-transfers/saint-tropez), [Nice Airport to your yacht](https://kokolimo.com/our-services/yacht-transfers/nice-airport), [Yacht crew transport](https://kokolimo.com/our-services/yacht-transfers/crew-transportation).
- [Event transport](https://kokolimo.com/our-services/events): Grand Prix, Film Festival, Yacht Show.
- Events: [Monaco Grand Prix](https://kokolimo.com/our-services/events/monaco-grand-prix), [Cannes Film Festival](https://kokolimo.com/our-services/events/cannes-film-festival), [Monaco Yacht Show](https://kokolimo.com/our-services/events/monaco-yacht-show).

## Editorial

- [Blog](https://kokolimo.com/blog): Private driver guides.
- [Nice Airport terminals guide](https://kokolimo.com/blog/nice-cote-dazur-airport-terminals-guide): Where the chauffeur meets you.
- [Chauffeur prices](https://kokolimo.com/blog/french-riviera-chauffeur-prices): Transfer, hourly, full-day.
`;

// The fixed prices, read from data/vehicles.tsx so they never drift, placed before the links so they are read first.
const eur = (n: number) => `€${n.toLocaleString("en-GB")}`;
const short = (name: string) => name.replace("Mercedes ", "");
const FARES = [
  "## Fixed prices",
  "",
  "One way from Nice Côte d'Azur Airport (NCE), per car, fixed and confirmed before booking:",
  "",
  ...cities.map(c => `- ${c.displayName}: ${vehicles.map(v => `${short(v.name)} ${eur(v.prices[c.id].transfer)}`).join(", ")}`),
  `- By the hour: ${vehicles.map(v => `${short(v.name)} ${eur(v.prices.nice.hourly)}`).join(", ")} per hour`,
  `- Full day (8 hours): ${vehicles.map(v => `${short(v.name)} ${eur(v.prices.nice.fullDay)}`).join(", ")}`,
  `- Passengers: ${vehicles.map(v => `${short(v.name)} up to ${v.passengers}`).join(", ")}`,
  "- Included in every airport transfer: meet and greet in arrivals with a name sign, flight tracking and one hour of waiting.",
  "- Available 24/7. Free cancellation until five days before; after that, the full price is charged.",
].join("\n");
// The French pages, read from data/service-pages-fr.ts: the French home, then each page's heading and address, after the
// transfers.
const FRENCH = [
  "## En français",
  "",
  "Kokolimo est un service de chauffeur privé basé à Nice : transferts depuis l'aéroport Nice Côte d'Azur vers Monaco, Cannes, Antibes et Saint-Tropez, chauffeur à l'heure, excursions privées, transferts yacht et transport pour les événements, en Mercedes Classe E, Classe S, Classe V et Maybach. Prix fixe confirmé avant la réservation, suivi du vol, accueil aux arrivées avec une pancarte et une heure d'attente incluse.",
  "",
  "- [Chauffeur privé de luxe à Nice, Cannes et Monaco (accueil)](https://kokolimo.com/fr)",
  ...Object.values(frenchServicePages).map(page => `- [${page.heroTitle}](https://kokolimo.com${page.path})`),
].join("\n");
const FULL = BODY.replace("## Core pages", `${FARES}\n\n## Core pages`).replace("## Hourly chauffeur", `${FRENCH}\n\n## Hourly chauffeur`);

export function GET() {
  return new Response(FULL, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
