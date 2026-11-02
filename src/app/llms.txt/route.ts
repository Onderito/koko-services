// /llms.txt — modelled on the two Riviera operators AI answers cite most (Mira Azur's structure, TranspOnyx's size,
// about 3.8 KB): brand, one-paragraph summary, a facts paragraph, then short sections of links. Facts and descriptions
// come from the site's own pages. Each page also has a Markdown twin at the same address + ".md" (src/middleware.ts).

export const dynamic = "force-static";

const BODY = `# Kokolimo

> Private chauffeur and airport transfer service on the French Riviera, based in Nice. Transfers from Nice Côte d'Azur Airport (NCE) to Monaco, Cannes, Antibes and Saint-Tropez, hourly chauffeur hire, private tours, yacht and event transport. Mercedes E-Class, S-Class, V-Class and Maybach. Fixed fare confirmed before booking, flight tracking, meet and greet, one hour of waiting included.

Kokolimo (My Riviera Tours & Transfers) is run by MY NICE TOURS, 33 rue de Châteauneuf, 06000 Nice (SIRET 838 777 787 00014). Chauffeurs speak English, French, Turkish and Russian. Winter service in Megève, Courchevel and Chamonix. Indicative fares from €90 (Nice Airport to Nice, E-Class); quotes are confirmed before the ride. Contact: +33 7 71 69 81 42 (phone, WhatsApp), Info@myriviera.fr. Every page has a Markdown version at its address + .md. Sitemap: https://kokolimo.com/sitemap.xml

## Core pages

- [Home](https://kokolimo.com/): Private driver in Nice, Cannes and Monaco.
- [Our services](https://kokolimo.com/our-services): All chauffeur services.
- [Contact & booking](https://kokolimo.com/contact-me): Book a private driver.
- [Fleet](https://kokolimo.com/cars): E-Class, S-Class, V-Class and Maybach.
- [Mercedes E-Class](https://kokolimo.com/cars/class-e): Business saloon for up to 3 passengers.
- [Mercedes V-Class](https://kokolimo.com/cars/class-v): Van for up to 7 passengers.
- [Mercedes S-Class](https://kokolimo.com/cars/class-s): Executive sedan.
- [Mercedes-Maybach](https://kokolimo.com/cars/maybach): VIPs, weddings, executives.
- [AI instructions](https://kokolimo.com/ai-instructions): Official facts for AI assistants.

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

## Tours, yachts & events

- [Private tours](https://kokolimo.com/our-services/private-tours): Nice, Cannes, Monaco, Saint-Tropez.
- [Monaco & Èze tour](https://kokolimo.com/our-services/private-tours/monaco): 4 or 8 hours.
- [Nice private tour](https://kokolimo.com/our-services/private-tours/nice): Old town and viewpoints.
- [Cannes private tour](https://kokolimo.com/our-services/private-tours/cannes): Croisette and seafront.
- [Yacht transfers](https://kokolimo.com/our-services/yacht-transfers): Riviera marinas.
- [Event transport](https://kokolimo.com/our-services/events): Grand Prix, Film Festival, Yacht Show.

## Editorial

- [Blog](https://kokolimo.com/blog): Private driver guides.
- [Nice Airport terminals guide](https://kokolimo.com/blog/nice-cote-dazur-airport-terminals-guide): Where the chauffeur meets you.
- [Chauffeur prices](https://kokolimo.com/blog/french-riviera-chauffeur-prices): Transfer, hourly, full-day.
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
