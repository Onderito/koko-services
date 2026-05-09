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
    sameAs: [],
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
