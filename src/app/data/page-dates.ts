// The real date of each page's last significant change, for the sitemap's <lastmod> and the articles' dateModified,
// taken from the site's git history: every page changed with the relaunch of 2 Nov 2026, the 5 route pages with a price
// table on 3 Nov, the home and the blog on 13 Nov, plus the later changes below. Google uses <lastmod> only when it is
// consistently accurate, so keep it true.
//
// RULE: when the content of a page changes, set its date here in the same commit.

/** The relaunch of the site (2 Nov 2026): the last change of every page not listed below. */
export const SITE_RELAUNCH = "2026-11-02";

/** The day the French pages went live: the date of every /fr page not listed below. */
export const FRENCH_SITE_RELEASE = "2026-11-26";

/** Pages whose last significant change is after the relaunch, by sitemap route ("" is the home). */
export const pageUpdatedAt: Record<string, string> = {
  // 18 Nov 2026: 37 articles taken off the blog (data/removed-posts.ts), so the blog home and six categories list fewer.
  "/blog": "2026-11-18",
  "/blog/category/airport-transfers": "2026-11-18",
  "/blog/category/destinations": "2026-11-18",
  "/blog/category/yacht-transfers": "2026-11-18",
  "/blog/category/luxury-hotels": "2026-11-18",
  "/blog/category/travel-guides": "2026-11-18",
  "/blog/category/chauffeur-services": "2026-11-18",
  // 18 Nov 2026: the airport bus lines and the terminals.
  "/blog/nice-airport-to-monaco": "2026-11-18",
  "/blog/nice-airport-to-cannes": "2026-11-18",
  "/blog/nice-cote-dazur-airport-terminals-guide": "2026-11-18",
  // 18 Nov 2026: the home's title, description and FAQ; the route pages' titles, descriptions, links line and booking
  // button; the service pages' titles, descriptions and starting prices.
  "": "2026-11-18",
  ...Object.fromEntries(
    [
      "transfers/nice-airport-transfer", "transfers/long-distance-transfer", "transfers/monaco-airport-transfer",
      "transfers/cannes-airport-transfer", "transfers/saint-tropez-transfer", "transfers/antibes-transfer",
      "transfers/saint-jean-cap-ferrat-transfer", "transfers/eze-transfer", "transfers/villefranche-transfer",
      "transfers/menton-transfer",
      "hourly-chauffeur/nice", "hourly-chauffeur/saint-tropez", "hourly-chauffeur/courchevel", "hourly-chauffeur/megeve",
      "hourly-chauffeur/chamonix",
      "private-tours/nice", "private-tours/cannes", "private-tours/monaco", "private-tours/saint-tropez",
      "private-tours/courchevel", "private-tours/megeve", "private-tours/chamonix",
      "yacht-transfers", "yacht-transfers/monaco", "yacht-transfers/cannes", "yacht-transfers/antibes",
      "yacht-transfers/saint-tropez", "yacht-transfers/nice-airport", "yacht-transfers/crew-transportation",
      "events", "events/monaco-grand-prix", "events/cannes-film-festival", "events/monaco-yacht-show",
    ].map(page => [`/our-services/${page}`, "2026-11-18"]),
  ),
  // 19 Nov 2026: the Nice Airport, Saint-Tropez and long-distance transfer pages' titles and descriptions.
  "/our-services/transfers/nice-airport-transfer": "2026-11-19",
  "/our-services/transfers/saint-tropez-transfer": "2026-11-19",
  "/our-services/transfers/long-distance-transfer": "2026-11-19",
  // 19 Nov 2026: /ai-instructions rewritten as facts, each with its source page and check date.
  "/ai-instructions": "2026-11-19",
  // 25 Nov 2026: seven route pages rewritten (how the transfer works, prices from the price list, a new FAQ).
  ...Object.fromEntries(
    [
      "transfers/nice-airport-transfer", "transfers/monaco-airport-transfer", "transfers/cannes-airport-transfer",
      "transfers/saint-tropez-transfer", "transfers/eze-transfer", "transfers/saint-jean-cap-ferrat-transfer",
      "transfers/long-distance-transfer",
    ].map(page => [`/our-services/${page}`, "2026-11-25"]),
  ),
  // 26 Nov 2026: the home's H1, headings and reasons block; sentences rewritten to read naturally on the home and the
  // service pages below (the English hourly Monaco page is unchanged); the French pages take FRENCH_SITE_RELEASE.
  "": "2026-11-26",
  ...Object.fromEntries(
    [
      "", "/transfers", "/hourly-chauffeur", "/private-tours", "/yacht-transfers", "/events",
      "/transfers/nice-airport-transfer", "/transfers/long-distance-transfer", "/transfers/monaco-airport-transfer",
      "/transfers/cannes-airport-transfer", "/transfers/saint-tropez-transfer", "/transfers/antibes-transfer",
      "/transfers/saint-jean-cap-ferrat-transfer", "/transfers/eze-transfer", "/transfers/villefranche-transfer",
      "/transfers/menton-transfer",
      "/hourly-chauffeur/nice", "/hourly-chauffeur/saint-tropez", "/hourly-chauffeur/courchevel",
      "/hourly-chauffeur/megeve", "/hourly-chauffeur/chamonix",
      "/private-tours/nice", "/private-tours/cannes", "/private-tours/monaco", "/private-tours/saint-tropez",
      "/private-tours/courchevel", "/private-tours/megeve", "/private-tours/chamonix",
      "/yacht-transfers/monaco", "/yacht-transfers/cannes", "/yacht-transfers/antibes", "/yacht-transfers/saint-tropez",
      "/yacht-transfers/nice-airport", "/yacht-transfers/crew-transportation",
      "/events/monaco-grand-prix", "/events/cannes-film-festival", "/events/monaco-yacht-show",
    ].map(page => [`/our-services${page}`, "2026-11-26"]),
  ),
};

/** Articles whose text changed after publication, by slug: their Article markup's dateModified. */
export const articleUpdatedAt: Record<string, string> = {
  "nice-airport-to-monaco": "2026-11-18",
  "nice-airport-to-cannes": "2026-11-18",
  "nice-cote-dazur-airport-terminals-guide": "2026-11-18",
};

/** The later of two ISO dates (YYYY-MM-DD). */
export const laterDate = (a: string, b: string) => (a > b ? a : b);
