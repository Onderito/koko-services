import {
  businessGeo,
  businessName,
  contactEmail,
  contactPhone,
  serviceAreaText,
  siteUrl,
  socialPreviewImage,
} from "../data/site-config";
import { cities, vehicles } from "../data/vehicles";

// Site-wide route offers: one offer per destination from Nice Airport, priced from the E-Class fare, with every car's
// fare in its description. The fares come from data/vehicles.tsx; the route pages carry their own per-car offers.
const E_CLASS = vehicles.find(v => v.id === "mercedes-e")!;
const ROUTE_OFFERS = cities.map(c => ({
  "@type": "Offer",
  name: `Nice Airport to ${c.displayName} transfer`,
  price: E_CLASS.prices[c.id].transfer,
  priceCurrency: "EUR",
  priceSpecification: { "@type": "PriceSpecification", minPrice: E_CLASS.prices[c.id].transfer, priceCurrency: "EUR" },
  description: `Fixed price, one way from Nice Côte d'Azur Airport to ${c.displayName}: ${vehicles
    .map(v => `${v.name} €${v.prices[c.id].transfer}`)
    .join(", ")}.`,
  itemOffered: { "@type": "Service", name: `Private transfer from Nice Airport to ${c.displayName}` },
}));

// The Google Business Profile's Maps link (CID 0x308935d595819774); the map pin is businessGeo in data/site-config.ts.
const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=3497385777082505076";
const GEO = businessGeo;

// The areas served, in the order of the Google listing's service areas (read 14 Nov 2026), plus the airport and the
// winter resorts the site serves, so the site and the listing name the same places.
const AREAS_SERVED = [
  { "@type": "City", name: "Nice" },
  { "@type": "Airport", name: "Nice Côte d'Azur Airport", iataCode: "NCE" },
  { "@type": "City", name: "Cannes" },
  { "@type": "City", name: "Antibes" },
  { "@type": "City", name: "Monaco" },
  { "@type": "City", name: "Menton" },
  { "@type": "City", name: "Saint-Tropez" },
  { "@type": "City", name: "Èze" },
  { "@type": "City", name: "Mougins" },
  { "@type": "City", name: "Cap-d'Ail" },
  { "@type": "City", name: "Ramatuelle" },
  { "@type": "City", name: "Beaulieu-sur-Mer" },
  { "@type": "City", name: "Saint-Paul-de-Vence" },
  { "@type": "City", name: "Villefranche-sur-Mer" },
  { "@type": "City", name: "Saint-Jean-Cap-Ferrat" },
  { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
  { "@type": "AdministrativeArea", name: "French Riviera" },
  { "@type": "City", name: "Courchevel" },
  { "@type": "City", name: "Megève" },
  { "@type": "City", name: "Chamonix" },
];

/**
 * Site-wide structured data: LocalBusiness + TransportService + WebSite.
 * Rendered once in the root layout. Supplements per-page schema
 * (Article, FAQPage, etc.) defined inline in route handlers.
 * The business carries its map position (geo) and its Google Maps listing; the description, languages and payments
 * repeat the facts of /ai-instructions and llms.txt. One name, "Kokolimo". No rating markup: Google shows no review
 * stars for a business's own ratings. The price range and the offers carry the starting fares of data/vehicles.tsx.
 */
export default function SeoSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    // One name. The registered names (legalName, alternateName) keep the company register and older listings matched;
    // they are not shown.
    name: businessName,
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
      "Luxury private driver on the French Riviera, based in Nice and available 24/7. Areas served: Nice and Nice Côte d'Azur Airport (NCE), Cannes, Antibes, Monaco, Menton and Saint-Tropez, with Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat, Beaulieu-sur-Mer, Cap-d'Ail, Mougins, Saint-Paul-de-Vence and Ramatuelle, and Courchevel, Megève and Chamonix in winter. Airport transfers, hourly chauffeur hire, yacht and event transport and private tours by car. Mercedes E-Class, S-Class, V-Class and Maybach; fixed price confirmed before the ride, flight tracking, meet and greet and one hour of waiting included.",
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
    areaServed: AREAS_SERVED,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: contactPhone,
      email: contactEmail,
      availableLanguage: ["English", "French", "Turkish", "Russian"],
    },
    currenciesAccepted: "EUR",
    paymentAccepted: "Credit card, debit card, contactless payment",
    // From the cheapest transfer (Nice Airport to Nice, E-Class) to a full day in a Maybach (data/vehicles.tsx).
    priceRange: "€90–€2,400",
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
    sameAs: [
      "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html",
      GOOGLE_MAPS_URL,
    ],
  };

  // The site itself, named as the brand.
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
          // Our own starting fare (data/vehicles.tsx): Nice Airport to Nice in a Mercedes E-Class, fixed in advance.
          price: 90,
          priceCurrency: "EUR",
          priceSpecification: { "@type": "PriceSpecification", minPrice: 90, priceCurrency: "EUR" },
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfers",
            description:
              "Private transfers from Nice Côte d'Azur Airport to Riviera destinations, from €90 at a fixed price.",
          },
        },
        {
          "@type": "Offer",
          // Our own starting hourly rate (data/vehicles.tsx): a Mercedes E-Class with its chauffeur.
          price: 90,
          priceCurrency: "EUR",
          priceSpecification: { "@type": "UnitPriceSpecification", price: 90, priceCurrency: "EUR", unitCode: "HUR", unitText: "hour" },
          itemOffered: {
            "@type": "Service",
            name: "Hourly Chauffeur",
            description:
              "Flexible hourly chauffeur service for business or leisure travel, from €90 per hour.",
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
        ...ROUTE_OFFERS,
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
