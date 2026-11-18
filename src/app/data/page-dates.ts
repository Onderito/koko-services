// The real date of each page's last significant change, for the sitemap's <lastmod> and the articles' dateModified.
//
// 18 Nov 2026 (the client's check): every static and service page carried the same fixed date, 18 September, and every
// article its publish date even after an edit. These dates come from the site's git history, recomputed and checked a
// second time (koko project: tools/jev-seo/runs/audit/2026-11-18/lastmod.json): every page changed with the relaunch of
// 2 Nov 2026, the 5 route pages with a price table on 3 Nov, the home and the blog on 13 Nov, plus the corrections below.
// Google uses <lastmod> only when it is consistently accurate, so keep it true.
//
// RULE: when the content of a page changes, set its date here in the same commit.

/** The relaunch of the site (2 Nov 2026): the last change of every page not listed below. */
export const SITE_RELAUNCH = "2026-11-02";

/** Pages whose last significant change is after the relaunch, by sitemap route ("" is the home). */
export const pageUpdatedAt: Record<string, string> = {
  // 3 Nov 2026: a price table on each destination page.
  "/our-services/transfers/nice-airport-transfer": "2026-11-03",
  "/our-services/transfers/monaco-airport-transfer": "2026-11-03",
  "/our-services/transfers/cannes-airport-transfer": "2026-11-03",
  "/our-services/transfers/saint-tropez-transfer": "2026-11-03",
  "/our-services/transfers/antibes-transfer": "2026-11-03",
  // 13 Nov 2026: the home's articles block, the blog home and two categories.
  "": "2026-11-13",
  "/blog": "2026-11-13",
  "/blog/category/destinations": "2026-11-13",
  "/blog/category/travel-guides": "2026-11-13",
  // 18 Nov 2026: the client's corrections (the airport bus lines; the terminals).
  "/blog/nice-airport-to-monaco": "2026-11-18",
  "/blog/nice-airport-to-cannes": "2026-11-18",
  "/blog/nice-cote-dazur-airport-terminals-guide": "2026-11-18",
};

/** Articles whose text changed after publication, by slug: their Article markup's dateModified. */
export const articleUpdatedAt: Record<string, string> = {
  "nice-airport-to-monaco": "2026-11-18",
  "nice-airport-to-cannes": "2026-11-18",
  "nice-cote-dazur-airport-terminals-guide": "2026-11-18",
};

/** The later of two ISO dates (YYYY-MM-DD). */
export const laterDate = (a: string, b: string) => (a > b ? a : b);
