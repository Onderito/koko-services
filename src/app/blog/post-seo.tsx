// A blog post's metadata and structured data, shared by the article route (blog/[slug]) and by the posts that have their
// own route because they use the service-page layout (blog/private-chauffeur-cannes, 12 Nov 2026). Moved here unchanged
// from blog/[slug]/page.tsx so every post keeps exactly the same tags whichever route serves it.

import type { Metadata } from "next";

import { siteUrl, type BlogPost } from "../data/blog-posts";
import { cities, vehicles } from "../data/vehicles";

export function postMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | kokolimo`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "kokolimo",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.imageUrl,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

/**
 * For posts with booking calls to action (12 Nov 2026): the breadcrumb, and the service the post sells with its prices
 * from data/vehicles.tsx, its place and coordinates, the Kokolimo brand and the booking bar as the reservation entry
 * point. Other posts, including the protected terminals guide, keep their structured data unchanged.
 */
function bookingStructuredData(post: BlogPost) {
  if (!post.bookingCta) return null;
  const s = post.bookingCta.schema;
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const car = vehicles[0];
  const offers = !s
    ? []
    : s.kind === "hourly" && s.cityId
      ? vehicles.map((v) => ({
          "@type": "Offer",
          name: `${v.name} with chauffeur, per hour`,
          price: v.prices[s.cityId as string].hourly,
          priceCurrency: "EUR",
          description: `Starting price per hour, four-hour minimum, 20 km included per booked hour, up to ${v.passengers} passengers.`,
        }))
      : cities.map((c) => ({
          "@type": "Offer",
          name: `Nice Airport to ${c.displayName}, ${car.name}, one way`,
          price: car.prices[c.id].transfer,
          priceCurrency: "EUR",
          description: `Starting fixed fare for up to ${car.passengers} passengers, one hour of waiting included.`,
        }));
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];
  if (s) {
    graph.push({
      "@type": "Service",
      name: s.serviceName,
      serviceType: s.kind === "hourly" ? "Hourly chauffeur service" : "Airport transfer",
      url: `${siteUrl}${post.ctaHref}`,
      provider: { "@id": `${siteUrl}#localbusiness` },
      brand: { "@type": "Brand", name: "Kokolimo" },
      areaServed: {
        "@type": "Place",
        name: s.place.name,
        geo: { "@type": "GeoCoordinates", latitude: s.place.latitude, longitude: s.place.longitude },
      },
      offers,
      potentialAction: {
        "@type": "ReserveAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/#book`, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
      },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/** The post's JSON-LD: Article, FAQPage and, for posts with booking calls to action, the breadcrumb and the service. */
export function PostSchemas({ post }: { post: BlogPost }) {
  const rich = post.bookingCta !== undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    // Posts with booking calls to action declare their image as an ImageObject and their language (12 Nov 2026).
    image: rich ? { "@type": "ImageObject", url: `${siteUrl}${post.imageUrl}`, caption: post.imageAlt } : `${siteUrl}${post.imageUrl}`,
    ...(rich ? { inLanguage: "en", keywords: post.keywords.join(", ") } : {}),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "kokolimo",
    },
    publisher: {
      "@type": "Organization",
      name: "kokolimo",
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const booking = bookingStructuredData(post);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {booking ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booking) }} />
      ) : null}
    </>
  );
}
