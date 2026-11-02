import {
  businessName,
  contactEmail,
  contactPhone,
  serviceAreaText,
  siteUrl,
  socialPreviewImage,
} from "../data/site-config";

// The Google Business Profile ("MY Riviera Tours & Transfers - Kokolimo"): its map pin and its Maps address, from the
// listing read on 3 Oct 2026 (koko project, tools/jev-seo/runs/listing/2026-10-03); CID 0x308935d595819774.
const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=3497385777082505076";
const GEO = { latitude: 43.7000332, longitude: 7.2521727 };

/**
 * Site-wide structured data: LocalBusiness + TransportService + WebSite.
 * Rendered once in the root layout. Supplements per-page schema
 * (Article, FAQPage, etc.) defined inline in route handlers.
 * 28 Oct 2026 (user: "improve our LocalBusiness structured data ... like our competitors and do the geo
 * localisation"): as on TranspOnyx and Mira Azur, the business carries its map position (geo) and its Google Maps
 * listing; the description, languages and payments repeat the facts of /ai-instructions and llms.txt. Name, address,
 * hours, ratings and reviews are unchanged.
 */
export default function SeoSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: `${businessName} - Private Driver in French Riviera`,
    legalName: "MY NICE TOURS",
    alternateName: ["My Riviera Tours", "MY Riviera Tours & Transfers"],
    taxID: "838777787",
    vatID: "FR16838777787",
    image: socialPreviewImage,
    logo: `${siteUrl}/favicon.ico`,
    url: siteUrl,
    telephone: contactPhone,
    email: contactEmail,
    description:
      "Private chauffeur and airport transfer service on the French Riviera, based in Nice: transfers from Nice Côte d'Azur Airport (NCE) to Monaco, Cannes, Antibes and Saint-Tropez, hourly chauffeur hire, private tours, yacht and event transport, with winter service in Courchevel, Megève and Chamonix. Mercedes E-Class, S-Class, V-Class and Maybach; fixed fare confirmed before the ride, flight tracking, meet and greet and one hour of waiting included.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Le Wagram, 33 rue de Châteauneuf",
      addressLocality: "Nice",
      postalCode: "06000",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: GOOGLE_MAPS_URL,
    areaServed: [
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Cannes" },
      { "@type": "City", name: "Monaco" },
      { "@type": "City", name: "Saint-Tropez" },
      { "@type": "City", name: "Antibes" },
      { "@type": "City", name: "Menton" },
      { "@type": "AdministrativeArea", name: "French Riviera" },
      { "@type": "City", name: "Courchevel" },
      { "@type": "City", name: "Chamonix" },
      { "@type": "City", name: "Megève" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: contactPhone,
      email: contactEmail,
      availableLanguage: ["English", "French", "Turkish", "Russian"],
    },
    currenciesAccepted: "EUR",
    paymentAccepted: "Credit card, debit card, contactless payment",
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
      GOOGLE_MAPS_URL,
    ],
  };

  // The site itself, named as the brand (both competitors publish one).
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: businessName,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}#localbusiness` },
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
      <script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        id="schema-transportservice"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transportService) }}
      />
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
