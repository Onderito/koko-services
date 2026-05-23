import Script from "next/script";

import {
  businessName,
  contactEmail,
  contactPhone,
  serviceAreaText,
  siteUrl,
  socialPreviewImage,
} from "../data/site-config";

/**
 * Site-wide structured data: LocalBusiness + TransportService.
 * Rendered once in the root layout. Supplements per-page schema
 * (Article, FAQPage, etc.) defined inline in route handlers.
 */
export default function SeoSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: `${businessName} - Private Driver in French Riviera`,
    image: socialPreviewImage,
    logo: socialPreviewImage,
    url: siteUrl,
    telephone: contactPhone,
    email: contactEmail,
    description:
      "Luxury private driver and chauffeur service across Nice, Cannes, Monaco and Saint-Tropez.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nice Côte d'Azur Airport",
      addressLocality: "Nice",
      postalCode: "06000",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6584,
      longitude: 7.2159,
    },
    areaServed: [
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Cannes" },
      { "@type": "City", name: "Monaco" },
      { "@type": "City", name: "Saint-Tropez" },
      { "@type": "AdministrativeArea", name: "French Riviera" },
    ],
    priceRange: "€€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "165",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lisa W" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        datePublished: "2025-07-01",
        reviewBody:
          "Amazing organic wineries so close to Nice. After a short ride we toured two unique locations and ended with tastings. Picture perfect.",
        publisher: { "@type": "Organization", name: "Tripadvisor" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Henrik" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        datePublished: "2024-08-01",
        reviewBody:
          "Perfect, well distinguish between the different procedures of the vineyards in Nice. Super guide Marie. Knowledgeful and entertaining.",
        publisher: { "@type": "Organization", name: "Tripadvisor" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cyndi K" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        datePublished: "2024-06-01",
        reviewBody:
          "My family group of four scheduled with Marie on the day we arrived in Nice. It was the perfect way to acclimate while doing something fun and interesting.",
        publisher: { "@type": "Organization", name: "Tripadvisor" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Tripadvisor guest" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        datePublished: "2024-07-01",
        reviewBody:
          "kokolimo took good care of us, was welcoming and nice. Beautiful views and exciting info about Nice, good wine and specialties from Cannes.",
        publisher: { "@type": "Organization", name: "Tripadvisor" },
      },
    ],
    sameAs: [
      "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html",
    ],
  };

  const transportService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${siteUrl}#transportservice`,
    name: `${businessName} Private Chauffeur Service`,
    serviceType: "Private chauffeur and luxury transfer service",
    provider: { "@id": `${siteUrl}#localbusiness` },
    areaServed: serviceAreaText,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/contact-me`,
      servicePhone: contactPhone,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chauffeur services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfers",
            description:
              "Private transfers from Nice Côte d'Azur Airport to Riviera destinations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hourly Chauffeur",
            description:
              "Flexible hourly chauffeur service for business or leisure travel.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Tours",
            description:
              "Private guided tours across Nice, Èze, Monaco, Cannes and Saint-Tropez.",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-transportservice"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transportService) }}
      />
    </>
  );
}
