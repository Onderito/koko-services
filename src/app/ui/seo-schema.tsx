import {
  businessGeo,
  businessName,
  contactEmail,
  contactPhone,
  serviceAreaText,
  serviceAreaTextFr,
  siteUrl,
  socialPreviewImage,
} from "../data/site-config";
import { cities, vehicles } from "../data/vehicles";
import { carFr, eur, frenchSpacing } from "../data/i18n/fr-helpers";

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

// The same offers in French: each destination with its preposition, the cars and the prices written the French way.
const TO_FR: Record<string, string> = {
  nice: "au centre de Nice",
  antibes: "à Antibes et Juan-les-Pins",
  cannes: "à Cannes",
  monaco: "à Monaco et Cap-d'Ail",
  "st-tropez": "à Saint-Tropez",
};
const ROUTE_OFFERS_FR = cities.map(c => {
  const to = TO_FR[c.id] ?? `à ${c.displayName}`;
  return {
    "@type": "Offer",
    name: `Transfert de l'aéroport de Nice ${to}`,
    price: E_CLASS.prices[c.id].transfer,
    priceCurrency: "EUR",
    priceSpecification: { "@type": "PriceSpecification", minPrice: E_CLASS.prices[c.id].transfer, priceCurrency: "EUR" },
    description: `Prix fixe, aller simple de l'aéroport Nice Côte d'Azur ${to} : ${vehicles
      .map(v => `${carFr(v.name)} ${eur(v.prices[c.id].transfer)}`)
      .join(", ")}.`,
    itemOffered: { "@type": "Service", name: `Transfert privé de l'aéroport de Nice ${to}` },
  };
});

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
const AREA_NAMES_FR: Record<string, string> = { "Nice Côte d'Azur Airport": "Aéroport Nice Côte d'Azur", "French Riviera": "Côte d'Azur" };
const AREAS_SERVED_FR = AREAS_SERVED.map(area => ({ ...area, name: AREA_NAMES_FR[area.name] ?? area.name }));

// The words of the markup in each language. The facts, prices, addresses and identifiers are the same in both.
const WORDS = {
  en: {
    description:
      "Luxury private driver on the French Riviera, based in Nice and available 24/7. Areas served: Nice and Nice Côte d'Azur Airport (NCE), Cannes, Antibes, Monaco, Menton and Saint-Tropez, with Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat, Beaulieu-sur-Mer, Cap-d'Ail, Mougins, Saint-Paul-de-Vence and Ramatuelle, and Courchevel, Megève and Chamonix in winter. Airport transfers, hourly chauffeur hire, yacht and event transport and private tours by car. Mercedes E-Class, S-Class, V-Class and Maybach; fixed price confirmed before the ride, flight tracking, meet and greet and one hour of waiting included.",
    areaServed: AREAS_SERVED,
    contactType: "reservations",
    paymentAccepted: "Credit card, debit card, contactless payment",
    priceRange: "€90–€2,400",
    inLanguage: "en",
    serviceName: `${businessName} Private Chauffeur Service`,
    serviceType: "Private chauffeur and luxury transfer service",
    serviceArea: serviceAreaText,
    contactPath: "/contact-me",
    catalog: "Chauffeur services",
    airportName: "Airport Transfers",
    airportText: "Private transfers from Nice Côte d'Azur Airport to Riviera destinations, from €90 at a fixed price.",
    hourlyName: "Hourly Chauffeur",
    hourlyText: "Flexible hourly chauffeur service for business or leisure travel, from €90 per hour.",
    hourUnit: "hour",
    toursName: "Private Tours",
    toursText: "Private guided tours across Nice, Èze, Monaco, Cannes and Saint-Tropez.",
    routeOffers: ROUTE_OFFERS,
  },
  // French spacing (a no-break space before ":" and ";") on every string.
  fr: frenchSpacing({
    description:
      "Chauffeur privé haut de gamme sur la Côte d'Azur, basé à Nice et disponible 24 h/24 et 7 j/7. Zones desservies : Nice et l'aéroport Nice Côte d'Azur (NCE), Cannes, Antibes, Monaco, Menton et Saint-Tropez, ainsi qu'Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat, Beaulieu-sur-Mer, Cap-d'Ail, Mougins, Saint-Paul-de-Vence et Ramatuelle, et l'hiver Courchevel, Megève et Chamonix. Transferts aéroport, chauffeur à l'heure, transport pour les yachts et les événements, excursions privées en voiture. Mercedes Classe E, Classe S, Classe V et Maybach ; prix fixe confirmé avant la course, suivi du vol, accueil aux arrivées avec une pancarte et une heure d'attente incluse.",
    areaServed: AREAS_SERVED_FR,
    contactType: "réservations",
    paymentAccepted: "Carte de crédit, carte de débit, paiement sans contact",
    priceRange: `${eur(90)}–${eur(2400)}`,
    inLanguage: "fr",
    serviceName: `Service de chauffeur privé ${businessName}`,
    serviceType: "Chauffeur privé et transferts haut de gamme",
    serviceArea: serviceAreaTextFr,
    // The French home's booking bar, until a French contact page exists.
    contactPath: "/fr#book",
    catalog: "Services de chauffeur",
    airportName: "Transferts aéroport",
    airportText: `Transferts privés de l'aéroport Nice Côte d'Azur vers toute la Côte d'Azur, à prix fixe, à partir de ${eur(90)}.`,
    hourlyName: "Chauffeur à l'heure",
    hourlyText: `Chauffeur privé à l'heure pour un rendez-vous d'affaires ou une journée de loisirs, à partir de ${eur(90)} de l'heure.`,
    hourUnit: "heure",
    toursName: "Excursions privées",
    toursText: "Excursions privées avec chauffeur à Nice, Èze, Monaco, Cannes et Saint-Tropez.",
    routeOffers: ROUTE_OFFERS_FR,
  }),
};

/**
 * Site-wide structured data: LocalBusiness + TransportService + WebSite.
 * Rendered once in each root layout, in the page's language (the French layout passes locale="fr"). Supplements
 * per-page schema (Article, FAQPage, etc.) defined inline in route handlers.
 * The business carries its map position (geo) and its Google Maps listing; the description, languages and payments
 * repeat the facts of /ai-instructions and llms.txt. One name, "Kokolimo". No rating here: the two homes add the Google
 * rating (ui/schema/home-page-json-ld.tsx). The price range and the offers carry the starting fares of data/vehicles.tsx.
 */
export default function SeoSchema({ locale }: { locale?: "fr" }) {
  const w = WORDS[locale ?? "en"];
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
    description: w.description,
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
    areaServed: w.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: w.contactType,
      telephone: contactPhone,
      email: contactEmail,
      availableLanguage: ["English", "French", "Turkish", "Russian"],
    },
    currenciesAccepted: "EUR",
    paymentAccepted: w.paymentAccepted,
    // From the cheapest transfer (Nice Airport to Nice, E-Class) to a full day in a Maybach (data/vehicles.tsx).
    priceRange: w.priceRange,
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
    inLanguage: w.inLanguage,
    publisher: { "@id": `${siteUrl}#localbusiness` },
  };

  const transportService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${siteUrl}#transportservice`,
    name: w.serviceName,
    serviceType: w.serviceType,
    provider: { "@id": `${siteUrl}#localbusiness` },
    areaServed: w.serviceArea,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}${w.contactPath}`,
      servicePhone: contactPhone,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: w.catalog,
      itemListElement: [
        {
          "@type": "Offer",
          // Our own starting fare (data/vehicles.tsx): Nice Airport to Nice in a Mercedes E-Class, fixed in advance.
          price: 90,
          priceCurrency: "EUR",
          priceSpecification: { "@type": "PriceSpecification", minPrice: 90, priceCurrency: "EUR" },
          itemOffered: {
            "@type": "Service",
            name: w.airportName,
            description: w.airportText,
          },
        },
        {
          "@type": "Offer",
          // Our own starting hourly rate (data/vehicles.tsx): a Mercedes E-Class with its chauffeur.
          price: 90,
          priceCurrency: "EUR",
          priceSpecification: { "@type": "UnitPriceSpecification", price: 90, priceCurrency: "EUR", unitCode: "HUR", unitText: w.hourUnit },
          itemOffered: {
            "@type": "Service",
            name: w.hourlyName,
            description: w.hourlyText,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: w.toursName,
            description: w.toursText,
          },
        },
        ...w.routeOffers,
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
