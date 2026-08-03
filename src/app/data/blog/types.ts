// Shared blog content types. Kept free of runtime code so cluster data files
// can import these without any circular-dependency risk.

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
};
