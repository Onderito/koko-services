// Blog articles taken off the site on 18 Nov 2026. Each moved article now redirects (301) to the service page that
// sells the same ride; each gone article answers 410. The article pages' 301s are in next.config.ts (handled before
// any code runs); the middleware uses this file for the 410s and for the articles' Markdown twins (.md).

/** Moved articles, by slug: the page each one redirects to. */
export const MOVED_POSTS: Record<string, string> = {
  "monaco-port-hercule-yacht-transfer": "/our-services/yacht-transfers/monaco",
  "cap-dail-yacht-transfer": "/our-services/yacht-transfers/monaco",
  "antibes-port-vauban-yacht-transfer": "/our-services/yacht-transfers/antibes",
  "golfe-juan-yacht-transfer": "/our-services/yacht-transfers/antibes",
  "mandelieu-la-napoule-yacht-transfer": "/our-services/yacht-transfers/cannes",
  "saint-tropez-yacht-transfer": "/our-services/yacht-transfers/saint-tropez",
  "pampelonne-beach-club-transfers": "/our-services/yacht-transfers/saint-tropez",
  "yacht-charter-guest-transfers": "/our-services/yacht-transfers",
  "cap-ferrat-yacht-villa-transfer": "/our-services/yacht-transfers",
  "grand-hotel-cap-ferrat-transfer": "/our-services/transfers/saint-jean-cap-ferrat-transfer",
  "hotel-belles-rives-transfer": "/our-services/transfers/antibes-transfer",
  "la-reserve-beaulieu-transfer": "/our-services/transfers/villefranche-transfer",
  "nice-airport-to-antibes": "/our-services/transfers/antibes-transfer",
  "nice-airport-to-menton": "/our-services/transfers/menton-transfer",
  "nice-airport-to-beaulieu-sur-mer": "/our-services/transfers/nice-airport-transfer",
  "nice-to-monaco-transfer": "/our-services/transfers/monaco-airport-transfer",
  "nice-to-cannes-transfer": "/our-services/transfers/cannes-airport-transfer",
  "antibes-cannes-saint-paul-de-vence-private-tour": "/our-services/private-tours/cannes",
  "saint-tropez-day-trip": "/our-services/private-tours/saint-tropez",
  "eze-village-visitor-guide": "/our-services/transfers/eze-transfer",
  "cap-dantibes-scenic-guide": "/our-services/transfers/antibes-transfer",
  "saint-jean-cap-ferrat-luxury-guide": "/our-services/transfers/saint-jean-cap-ferrat-transfer",
  "menton-day-trip-guide": "/our-services/transfers/menton-transfer",
  "corporate-chauffeur-service": "/our-services/hourly-chauffeur",
  "multi-day-chauffeur-hire": "/our-services/hourly-chauffeur",
};

/** Gone articles, by slug: they answer 410. The same list is in the middleware's matcher, which must be static. */
export const GONE_POSTS = new Set([
  "french-riviera-hidden-gems",
  "best-beaches-french-riviera",
  "best-french-riviera-gardens",
  "french-riviera-with-kids-family",
  "french-riviera-5-day-itinerary",
  "how-to-plan-a-french-riviera-trip",
  "best-time-to-visit-french-riviera",
  "french-riviera-luxury-vs-budget",
  "french-riviera-michelin-dining",
  "chauffeur-vs-limousine-vs-taxi",
  "cannes-taxi-vs-private-driver",
  "monaco-business-chauffeur",
]);
