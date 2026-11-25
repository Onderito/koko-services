// The French address of each English page of the French site, and the way back. `live` marks the French pages that
// exist: links between French pages, the language menu, hreflang tags, the sitemap and the browser-language redirect
// use live pairs only, so nothing points to a French page before it exists.

export type Twin = { en: string; fr: string; live: boolean };

const city = (en: string, fr: string, towns: [string, string][], live: boolean): Twin[] =>
  towns.map(([enTown, frTown]) => ({ en: `${en}/${enTown}`, fr: `${fr}-${frTown}`, live }));

const TOWNS: [string, string][] = [
  ["nice", "nice"],
  ["cannes", "cannes"],
  ["monaco", "monaco"],
  ["saint-tropez", "saint-tropez"],
  ["megeve", "megeve"],
  ["courchevel", "courchevel"],
  ["chamonix", "chamonix"],
];

export const TWINS: Twin[] = [
  { en: "/", fr: "/fr", live: true },
  { en: "/our-services", fr: "/fr/services", live: false },

  { en: "/our-services/transfers", fr: "/fr/transferts-prives", live: true },
  { en: "/our-services/transfers/nice-airport-transfer", fr: "/fr/transfert-aeroport-nice", live: true },
  { en: "/our-services/transfers/monaco-airport-transfer", fr: "/fr/transfert-aeroport-nice-monaco", live: true },
  { en: "/our-services/transfers/cannes-airport-transfer", fr: "/fr/transfert-aeroport-nice-cannes", live: true },
  { en: "/our-services/transfers/saint-tropez-transfer", fr: "/fr/transfert-saint-tropez", live: true },
  { en: "/our-services/transfers/antibes-transfer", fr: "/fr/transfert-antibes", live: true },
  { en: "/our-services/transfers/saint-jean-cap-ferrat-transfer", fr: "/fr/transfert-saint-jean-cap-ferrat", live: true },
  { en: "/our-services/transfers/eze-transfer", fr: "/fr/transfert-eze", live: true },
  { en: "/our-services/transfers/villefranche-transfer", fr: "/fr/transfert-villefranche-sur-mer", live: true },
  { en: "/our-services/transfers/menton-transfer", fr: "/fr/transfert-menton", live: true },
  { en: "/our-services/transfers/long-distance-transfer", fr: "/fr/transfert-longue-distance", live: true },

  { en: "/our-services/hourly-chauffeur", fr: "/fr/chauffeur-prive-a-l-heure", live: true },
  ...city("/our-services/hourly-chauffeur", "/fr/chauffeur-prive", TOWNS, true),

  { en: "/our-services/private-tours", fr: "/fr/excursions-privees", live: true },
  ...city("/our-services/private-tours", "/fr/excursion-privee", TOWNS, true),

  { en: "/our-services/yacht-transfers", fr: "/fr/transferts-yacht", live: true },
  ...city(
    "/our-services/yacht-transfers",
    "/fr/transfert-yacht",
    [
      ["monaco", "monaco"],
      ["cannes", "cannes"],
      ["saint-tropez", "saint-tropez"],
      ["antibes", "antibes"],
      ["nice-airport", "aeroport-nice"],
    ],
    true,
  ),
  { en: "/our-services/yacht-transfers/crew-transportation", fr: "/fr/transport-equipage-yacht", live: true },

  { en: "/our-services/events", fr: "/fr/chauffeur-evenements", live: true },
  { en: "/our-services/events/monaco-grand-prix", fr: "/fr/chauffeur-grand-prix-monaco", live: true },
  { en: "/our-services/events/cannes-film-festival", fr: "/fr/chauffeur-festival-de-cannes", live: true },
  { en: "/our-services/events/monaco-yacht-show", fr: "/fr/chauffeur-monaco-yacht-show", live: true },

  { en: "/cars", fr: "/fr/flotte", live: false },
  { en: "/cars/class-e", fr: "/fr/flotte/mercedes-classe-e", live: false },
  { en: "/cars/class-s", fr: "/fr/flotte/mercedes-classe-s", live: false },
  { en: "/cars/class-v", fr: "/fr/flotte/mercedes-classe-v", live: false },
  { en: "/cars/maybach", fr: "/fr/flotte/mercedes-maybach", live: false },
  { en: "/contact-me", fr: "/fr/contact", live: false },
  { en: "/legal-privacy", fr: "/fr/mentions-legales", live: false },
  { en: "/partners", fr: "/fr/partenaires", live: false },
  { en: "/ai-instructions", fr: "/fr/informations-kokolimo", live: false },
  { en: "/reservation", fr: "/fr/reservation", live: false },
];

const live = TWINS.filter(t => t.live);
const byEnglish = new Map(live.map(t => [t.en, t.fr]));
const byFrench = new Map(live.map(t => [t.fr, t.en]));

/** The French twin of an English path, when it is live. */
export const frenchTwin = (englishPath: string) => byEnglish.get(englishPath);
/** The English twin of a French path, when it is live. */
export const englishTwin = (frenchPath: string) => byFrench.get(frenchPath);
/** The address a French page links to: the French twin when it is live, else the English page. */
export const frLink = (englishPath: string) => byEnglish.get(englishPath) ?? englishPath;
/** Every live French path. */
export const liveFrenchPaths = () => live.map(t => t.fr);
