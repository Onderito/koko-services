// Shared blog content types. Kept free of runtime code so cluster data files
// can import these without any circular-dependency risk.

import type { ServicePageConfig } from "../service-pages";

// Content clusters (hub-and-spoke). Each id maps to a data/blog/<file>.ts and a
// /blog/category/<slug> hub page (see clusters.ts).
export type ClusterId =
  | "routes"
  | "destinations"
  | "yacht"
  | "events"
  | "hotels"
  | "guides"
  | "services-explained";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  cluster?: ClusterId;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  heroKicker: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  heroImages?: { src: string; alt: string }[];
  keywords: string[];
  featuredOnHome?: boolean;
  intro: string;
  sections: BlogSection[];
  faq: BlogFaq[];
  relatedSlugs: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaHref: string;
  ctaLabel: string;
  /**
   * Booking calls to action (user, 12 Nov 2026): a "Get a quote" button in the hero and a quote card after this
   * section, both to the home booking bar (/#book), which glides there with its veil (ui/booking/book-focus.tsx).
   * Opt-in per post, so the protected terminals guide and the other posts stay as they are.
   */
  bookingCta?: { afterSection: string; schema?: BookingSchema };
  /**
   * Render the post with the service-page layout instead of the article layout (user, 12 Nov 2026: apply the
   * /our-services/hourly-chauffeur/monaco strategy to a post): short hero with a button, two panels, rate cards,
   * three cards, linked destinations, FAQ and a closing banner. The post keeps its URL, metadata and schema.
   */
  landing?: ServicePageConfig;
};

/**
 * The service a post sells, declared in its structured data with the site's own prices (data/vehicles.tsx): hourly
 * rates in one city, or one-way transfer fares from Nice Airport. The place carries its coordinates.
 */
export type BookingSchema = {
  kind: "hourly" | "transfer";
  serviceName: string;
  /** For "hourly": the city whose hourly rates are declared (a data/vehicles.tsx city id). */
  cityId?: string;
  place: { name: string; latitude: number; longitude: number };
};
