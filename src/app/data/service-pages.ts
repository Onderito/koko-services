import { routeStartingPrices, vehicles } from "./vehicles";

export type ServiceCardLink = {
  href: string;
  label: string;
  description: string;
};

export type ServiceAudienceCard = {
  title: string;
  text: string;
  icon: string;
  iconAlt: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};


export type ServicePanel = {
  title: string;
  text: string;
  theme: "dark" | "light";
};

export type ServiceItinerary = {
  duration: string;
  title: string;
  description: string;
  stops: string[];
};

export type ServicePracticalDetail = {
  title: string;
  text: string;
};

export type ServicePageConfig = {
  slug: string;
  path: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  serviceLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;
  introTitle: string;
  introDescription: string;
  panels: [ServicePanel, ServicePanel];
  audienceTitle: string;
  audienceAccent: string;
  audienceDescription: string;
  audienceCards: [
    ServiceAudienceCard,
    ServiceAudienceCard,
    ServiceAudienceCard,
  ];
  itinerariesTitle?: string;
  itinerariesDescription?: string;
  itineraries?: ServiceItinerary[];
  practicalTitle?: string;
  practicalDescription?: string;
  practicalDetails?: ServicePracticalDetail[];
  relatedGuidesTitle?: string;
  relatedGuides?: ServiceCardLink[];
  faq?: {
    question: string;
    answer: string;
  }[];
  localLinksTitle?: string;
  localLinksDescription?: string;
  localLinks?: ServiceCardLink[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  /**
   * Optional overrides (12 Nov 2026) for a page rendered with this template outside /our-services (the Monaco-style
   * blog post): the hero and closing button's label and target, and the closing banner's photo. Absent on every
   * service page, which therefore renders exactly as before.
   */
  heroAction?: { label: string; href: string };
  ctaPhoto?: string;
  /** The guides section's intro; without it the template keeps its fixed sentence. */
  relatedGuidesDescription?: string;
  /** A short readable text after the introduction (a few paragraphs); absent on the service pages. */
  story?: { title: string; paragraphs: string[] };
  /** Shows the "Why travellers book Kokolimo" cards (ratings, company, languages, terms); absent elsewhere. */
  bookingReasons?: boolean;
  /** The page's language when it is not English: "fr" on the French pages (data/service-pages-fr.ts). */
  locale?: "fr";
  /** A translated page's English original: its page family, price table and photos are read from that path. */
  enPath?: string;
};

export const serviceMenuLinks: ServiceCardLink[] = [
  {
    href: "/our-services/transfers",
    label: "Airport Transfers",
    description: "We chauffeur you to and from the airport and on long-distance journeys.",
  },
  {
    href: "/our-services/hourly-chauffeur",
    label: "Hourly Chauffeur Service",
    description: "Book a chauffeur by the hour in key Riviera destinations and prestigious Alpine winter resorts.",
  },
  {
    href: "/our-services/private-tours",
    label: "Private Tours",
    description: "We run private tours across the Riviera, and in the French Alps during the winter season.",
  },
  {
    href: "/our-services/yacht-transfers",
    label: "Yacht Transfers",
    description: "We run chauffeur transfers to the yacht marinas of Monaco, Cannes, Antibes and Saint-Tropez.",
  },
  {
    href: "/our-services/events",
    label: "Event Transport",
    description: "We provide chauffeur transport for the Grand Prix, the Cannes festivals and the Monaco Yacht Show.",
  },
];

export const homeServiceCards = [
  {
    title: "Airport Transfers",
    kicker: "Airport & long-distance",
    description:
      "Our point-to-point chauffeur service covers airport arrivals, hotel pickups, events, and long-distance Riviera journeys, with precise timing and premium comfort.",
    image: "/assets/images/services/transfer.webp",
    link: "/our-services/transfers",
  },
  {
    title: "Hourly Chauffeur Service",
    kicker: "Flexible by destination",
    description:
      "Your dedicated chauffeur stays on standby for meetings, shopping, lunches, beach clubs, and multi-stop days in Nice, Cannes, Monaco and Saint-Tropez. In winter, we also cover selected Alpine destinations.",
    image: "/assets/images/services/hourly.webp",
    link: "/our-services/hourly-chauffeur",
  },
  {
    title: "Private Tours",
    kicker: "Riviera & Alpine escapes",
    description:
      "Private chauffeur-led tours across the French Riviera and selected Alpine winter destinations, with flexible itineraries, local insight, and premium comfort.",
    image: "/assets/images/services/private-tour.webp",
    link: "/our-services/private-tours",
  },
];

const hourlyCityLinks: ServiceCardLink[] = [
  {
    href: "/our-services/hourly-chauffeur/nice",
    label: "Nice",
    description: "Luxury hotels, shopping, business meetings, and flexible chauffeur service across Nice.",
  },
  {
    href: "/our-services/hourly-chauffeur/cannes",
    label: "Cannes",
    description: "The Croisette, luxury hotels, events, shopping, and private chauffeur service throughout Cannes.",
  },
  {
    href: "/our-services/hourly-chauffeur/monaco",
    label: "Monaco",
    description: "Business travel, yacht transfers, luxury hotels, and dedicated chauffeur service in Monaco.",
  },
  {
    href: "/our-services/hourly-chauffeur/saint-tropez",
    label: "Saint-Tropez",
    description: "Beach clubs, private villas, fine dining, and flexible chauffeur service in Saint-Tropez.",
  },
  {
    href: "/our-services/hourly-chauffeur/megeve",
    label: "Megève",
    description: "Luxury hotels, private chalets, shopping, fine dining, and flexible chauffeur service throughout Megève.",
  },
  {
    href: "/our-services/hourly-chauffeur/courchevel",
    label: "Courchevel",
    description: "Five-star hotels, private chalets, ski resorts, and premium chauffeur service across Courchevel.",
  },
  {
    href: "/our-services/hourly-chauffeur/chamonix",
    label: "Chamonix",
    description: "Mountain adventures, luxury accommodation, ski holidays, and flexible chauffeur service in Chamonix.",
  },
];

const tourCityLinks: ServiceCardLink[] = [
  {
    href: "/our-services/private-tours/nice",
    label: "Nice",
    description: "Old town, coastal viewpoints, markets, and nearby escapes.",
  },
  {
    href: "/our-services/private-tours/cannes",
    label: "Cannes",
    description:
      "Boulevard touring, shopping stops, and elegant coastal drives.",
  },
  {
    href: "/our-services/private-tours/monaco",
    label: "Monaco",
    description:
      "Prestige landmarks, panoramic roads, and refined day itineraries.",
  },
  {
    href: "/our-services/private-tours/saint-tropez",
    label: "Saint-Tropez",
    description:
      "Village streets, beaches, scenic arrivals, and stylish day trips.",
  },
  {
    href: "/our-services/private-tours/megeve",
    label: "Megève",
    description: "Luxury hotels, Alpine villages, scenic mountain drives, gourmet restaurants, and tailor-made private tours.",
  },
  {
    href: "/our-services/private-tours/courchevel",
    label: "Courchevel",
    description: "Prestigious resorts, luxury chalets, panoramic Alpine landscapes, and personalized private touring experiences.",
  },
  {
    href: "/our-services/private-tours/chamonix",
    label: "Chamonix",
    description: "Mont Blanc scenery, mountain villages, outdoor attractions, and customized private tours in the Alps.",
  },
];

const transferLinks: ServiceCardLink[] = [
  {
    href: "/our-services/transfers/nice-airport-transfer",
    label: "Nice Airport Transfer",
    description: "Meet-and-greet arrivals and departures from Nice Airport.",
  },
  {
    href: "/our-services/transfers/monaco-airport-transfer",
    label: "Monaco Airport Transfer",
    description: "Nice Airport to Monaco and Monte-Carlo, door to door.",
  },
  {
    href: "/our-services/transfers/cannes-airport-transfer",
    label: "Cannes Airport Transfer",
    description: "Nice Airport to Cannes, the Croisette and the hotels.",
  },
  {
    href: "/our-services/transfers/saint-tropez-transfer",
    label: "Saint-Tropez Transfer",
    description: "Nice Airport to Saint-Tropez by road or boat.",
  },
  {
    href: "/our-services/transfers/antibes-transfer",
    label: "Antibes Transfer",
    description: "Nice Airport to Antibes, Juan-les-Pins and Cap d'Antibes.",
  },
  {
    href: "/our-services/transfers/saint-jean-cap-ferrat-transfer",
    label: "Saint-Jean-Cap-Ferrat Transfer",
    description: "Nice Airport to the villas of the Cap-Ferrat peninsula.",
  },
  {
    href: "/our-services/transfers/eze-transfer",
    label: "Èze Transfer",
    description: "Nice Airport to the perched village of Èze on the corniche.",
  },
  {
    href: "/our-services/transfers/villefranche-transfer",
    label: "Villefranche-sur-Mer Transfer",
    description: "Nice Airport to Villefranche and its deep sheltered bay.",
  },
  {
    href: "/our-services/transfers/menton-transfer",
    label: "Menton Transfer",
    description: "Nice Airport to Menton on the Italian border, east of Monaco.",
  },
  {
    href: "/our-services/transfers/long-distance-transfer",
    label: "Long-Distance Transfer",
    description: "Comfortable private rides beyond the core Riviera corridor.",
  },
];

export const transfersPage: ServicePageConfig = {
  slug: "transfers",
  path: "/our-services/transfers",
  metadata: {
    title: "Private Transfers on the French Riviera | kokolimo",
    description: "Private chauffeur transfers for Nice Airport arrivals, hotel pickups, Monaco rides, Cannes events, and long-distance journeys across the French Riviera.",
    keywords: [
      "private transfers French Riviera",
      "Nice airport transfer",
      "chauffeur transfer Monaco",
      "Cannes private transfer",
      "long distance chauffeur Riviera",
    ],
  },
  serviceLabel: "Airport Transfers",
  heroTitle: "Private Airport Transfers on the French Riviera",
  heroDescription: "Our luxury chauffeur transfers cover airport arrivals, hotel pickups, events, and longer journeys, with precise coordination and discreet service.",
  heroImageSrc: "/assets/images/services/across-the-french-riviera.webp",
  heroImageAlt: "Private chauffeur transfer arrival on the French Riviera",
  introTitle: "The Art of the Transfer",
  introDescription: "A transfer should feel calm, controlled, and impeccably timed from the first minute to the last.",
  panels: [
    {
      title: "Our Commitment",
      text: "We coordinate the details that matter: flight timing, luggage handling, punctual pickup, and a smooth ride in a premium vehicle with a professional chauffeur.",
      theme: "dark",
    },
    {
      title: "Your Arrival",
      text: "From Nice Airport to hotels, villas, ports, restaurants, or long-distance destinations, we keep the journey efficient, quiet, and comfortable.",
      theme: "light",
    },
  ],
  audienceTitle: "Built For",
  audienceAccent: "Precise Mobility",
  audienceDescription: "From short airport connections to intercity journeys, our transfer service adapts to the pace and expectations of premium travel.",
  audienceCards: [
    {
      title: "Airport Clients",
      text: "Meet-and-greet service, flight monitoring, and a clean arrival flow from aircraft to vehicle.",
      icon: "/assets/icons/services/plane.webp",
      iconAlt: "Airport transfer icon",
    },
    {
      title: "Hotel & Event Guests",
      text: "A polished, reliable transfer for check-ins, dinners, congresses, weddings, and special arrivals.",
      icon: "/assets/icons/services/hand.webp",
      iconAlt: "Hospitality transfer icon",
    },
    {
      title: "Longer Routes",
      text: "Door-to-door comfort for journeys beyond the immediate coast when timing, privacy, and luggage space matter.",
      icon: "/assets/icons/services/multiple-suit-case.webp",
      iconAlt: "Long-distance transfer icon",
    },
  ],
  localLinksTitle: "Explore Transfer Types",
    localLinksDescription: "Choose the transfer service that matches your route and destination.",
  localLinks: transferLinks,
  cta: {
    title: "Ready to Book Your Transfer?",
    description: "Tell us your route, timing, and passenger details and we will prepare the right chauffeur transfer for your stay.",
    buttonText: "Request a Transfer",
    buttonHref: "/contact-me",
  },
  faq: [
    {
      question: "What is included in your private transfer service?",
      answer:
        "Our private transfer service includes a professional chauffeur, meet and greet service, luggage assistance, and direct transportation to your destination.",
    },
    {
      question: "Do you provide airport transfers from Nice Airport?",
      answer:
        "Yes. We provide private transfers from Nice Côte d'Azur Airport to Monaco, Cannes, Saint-Tropez, and destinations across the French Riviera.",
    },
    {
      question: "Can I book a transfer in advance?",
      answer:
        "Absolutely. We recommend booking in advance to guarantee vehicle availability, especially during peak season and major events.",
    },
    {
      question: "How much waiting time is included for arrivals?",
      answer:
        "One hour of waiting is included for every arrival, counted from the pickup time stated in your reservation.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation is free of charge until five days before the booked date and pickup time. If a booking is cancelled less than five days before departure, the full fare is charged.",
    },
    {
      question: "Are your transfer prices fixed?",
      answer:
        "Yes. Transfer prices are agreed upon before the journey, with no hidden fees. The price depends on the route, vehicle choice, and any additional services requested.",
    },
    {
      question: "Which vehicles are available for transfers?",
      answer:
        "We offer luxury sedans and premium vans suitable for individuals, families, business travellers, and groups. The most common vehicles include the Mercedes S-Class and Mercedes V-Class, but we can recommend the best option based on your route and passenger needs.",
    },
    {
      question: "Do you provide long-distance transfers?",
      answer:
        "Yes. We regularly provide transfers between airports, resorts, hotels, and destinations throughout the French Riviera and the French Alps. Long-distance transfers are ideal for clients who prefer a private, comfortable road journey over fragmented transport chains.",
    },
  ]
};

export const hourlyChauffeurPage: ServicePageConfig = {
  slug: "hourly-chauffeur",
  path: "/our-services/hourly-chauffeur",
  metadata: {
    title: "Hourly Chauffeur Service on the French Riviera | kokolimo",
    description:
      "Private hourly chauffeur service in Nice, Cannes, Monaco, and Saint-Tropez for business days, shopping, lunches, and flexible premium travel.",
    keywords: [
      "hourly chauffeur service French Riviera",
      "private driver by the hour Nice",
      "chauffeur Monaco hourly",
      "Cannes driver standby",
      "Saint-Tropez hourly chauffeur",
    ],
  },
  serviceLabel: "Hourly Chauffeur Service",
  heroTitle: "Hourly Chauffeur Service for Flexible Riviera Days",
  heroDescription:
    "Your dedicated chauffeur stays on standby for business travel, shopping, lunches, meetings, and multi-stop days across the French Riviera.",
  heroImageSrc: "/assets/images/services/riviera-days.webp",
  heroImageAlt: "Hourly chauffeur service in Monaco and the French Riviera",
  introTitle: "How Our Hourly Chauffeur Service Works",
  introDescription:
    "Hourly service gives you structure without rigidity: one chauffeur, one vehicle, and a day built around your timing.",
  panels: [
    {
      title: "Our Commitment",
      text: "We provide discreet, punctual chauffeur service that stays aligned with your agenda, whether the day includes meetings, shopping, lunches, or last-minute changes.",
      theme: "dark",
    },
    {
      title: "Your Experience",
      text: "Your chauffeur remains available between stops so the day feels continuous, private, and efficient instead of fragmented by separate bookings.",
      theme: "light",
    },
  ],
  audienceTitle: "Designed For",
  audienceAccent: "Your Schedule",
  audienceDescription:
    "Hourly chauffeur bookings work best when the day includes multiple moments, changing timing, and no room for transport friction.",
  audienceCards: [
    {
      title: "Business Days",
      text: "Move between offices, hotels, lunches, and meetings while keeping the day punctual and composed.",
      icon: "/assets/icons/services/suit-case.webp",
      iconAlt: "Business day icon",
    },
    {
      title: "Lifestyle Plans",
      text: "Shopping, wellness appointments, seafront lunches, and hotel returns with one vehicle waiting throughout the day.",
      icon: "/assets/icons/services/clock.webp",
      iconAlt: "Lifestyle schedule icon",
    },
    {
      title: "Events & Evenings",
      text: "Use one chauffeur for arrivals, standby time, and the return journey instead of rebooking transport at every step.",
      icon: "/assets/icons/services/star.webp",
      iconAlt: "Events icon",
    },
  ],
  faq: [
  {
    question: "How does an hourly chauffeur service work?",
    answer:
      "An hourly chauffeur service gives you a dedicated driver and vehicle for a set period of time. Your chauffeur remains available throughout your booking, allowing you to make multiple stops, attend meetings, enjoy shopping, or change plans as needed without arranging separate transfers.",
  },
  {
    question: "What is the minimum booking duration?",
    answer:
      "The minimum booking duration is four hours. Each booked hour includes 20 kilometres, giving you 80 included kilometres with the minimum four-hour reservation.",
  },
  {
    question: "How many kilometres are included in an hourly booking?",
    answer:
      "Each booked hour includes 20 kilometres. For example, a four-hour booking includes 80 kilometres and an eight-hour booking includes 160 kilometres. Any additional distance is confirmed in your quote before booking.",
  },
  {
    question: "What is the cancellation policy for hourly service?",
    answer:
      "Cancellation is free of charge until five days before the booked date and pickup time. If the service is cancelled less than five days before departure, the full fare is charged.",
  },
  {
    question: "Can my chauffeur wait while I'm at meetings, restaurants, or appointments?",
    answer:
      "Yes. Your chauffeur remains on standby throughout the booking period, ensuring seamless transportation between meetings, hotels, restaurants, shopping destinations, and events across the French Riviera.",
  },
   {
    question: "Which destinations are covered by the hourly chauffeur service?",
    answer:
      "Our hourly chauffeur service is available throughout the French Riviera, including Nice, Cannes, Monaco, Saint-Tropez, Antibes, and surrounding destinations. The itinerary remains fully flexible during your booking.",
  },
   {
    question: "Which vehicles are available for hourly bookings?",
    answer:
      "Clients can choose from luxury vehicles including the Mercedes S-Class, Mercedes V-Class, Mercedes Maybach, and other premium options depending on passenger numbers and travel requirements.",
  },
   {
    question: "Is an hourly chauffeur service suitable for business travel and events?",
    answer:
      "Absolutely. Hourly chauffeur service is ideal for business meetings, roadshows, conferences, shopping days, yacht charters, weddings, and major Riviera events where flexibility and punctuality are essential.",
  },
],
  localLinksTitle: "Choose Your Destination",
  localLinksDescription:
    "Compare hourly chauffeur options in each destination.",
  localLinks: hourlyCityLinks,
  cta: {
    title: "Need a Chauffeur on Standby?",
    description:
      "Share your city, timing, and expected stops and we will recommend the right hourly chauffeur setup for the day.",
    buttonText: "Book Hourly Chauffeur",
    buttonHref: "/contact-me",
  },
};

export const chauffeurToursPage: ServicePageConfig = {
  slug: "chauffeur-tours",
  path: "/our-services/private-tours",
  metadata: {
    title: "Chauffeur Tours on the French Riviera | kokolimo",
    description: "Private chauffeur tours in Nice, Cannes, Monaco, and Saint-Tropez with luxury vehicles, flexible itineraries, and refined touring across the Riviera.",
    keywords: [
      "chauffeur tours French Riviera",
      "private tour Nice chauffeur",
      "Monaco chauffeur tour",
      "Cannes private tour driver",
      "Saint-Tropez chauffeur day trip",
    ],
  },
  serviceLabel: "Private Tours",
  heroTitle: "Private Tours on the French Riviera",
  heroDescription: "Private chauffeur-led touring for travelers who want scenic drives, elegant stops, and a flexible itinerary without handling the logistics themselves.",
  heroImageSrc: "/assets/images/services/driver.webp",
  heroImageAlt: "Private chauffeur tour on the French Riviera",
  introTitle: "The Art of the Chauffeur Tour",
  introDescription: "A chauffeur tour should feel curated and effortless, with the right rhythm, the right stops, and a premium vehicle throughout the day.",
  panels: [
    {
      title: "Our Commitment",
      text: "We shape the route around what the guest wants to see, balancing scenic roads, timing, comfort, and polished door-to-door service.",
      theme: "dark",
    },
    {
      title: "Your Experience",
      text: "From old towns and coastal roads to beach clubs, villages, viewpoints, and shopping districts, the day remains flexible without losing structure.",
      theme: "light",
    },
  ],
  audienceTitle: "Created For",
  audienceAccent: "Riviera Discovery",
  audienceDescription: "This service works best for travelers who want a destination experience, not just a point-to-point journey.",
  audienceCards: [
    {
      title: "First-Time Visitors",
      text: "See the essentials with a smooth route, elegant pacing, and local insight without managing the day yourself.",
      icon: "/assets/icons/services/plane.webp",
      iconAlt: "Visitor tour icon",
    },
    {
      title: "Culture & Scenic Lovers",
      text: "Combine viewpoints, old towns, museums, artisan villages, and coastal roads in one polished itinerary.",
      icon: "/assets/icons/services/museum.webp",
      iconAlt: "Culture tour icon",
    },
    {
      title: "Couples & Small Groups",
      text: "Spend the day in comfort with a flexible, premium vehicle experience built around shared moments and easy logistics.",
      icon: "/assets/icons/services/van.webp",
      iconAlt: "Group tour icon",
    },
  ],
  localLinksTitle: "Tour by Destination",
  localLinksDescription: "Choose a destination to explore its private tour options.",
  localLinks: tourCityLinks,
  cta: {
    title: "Plan Your Chauffeur Tour",
    description: "Tell us which destination interests you and we will shape a private touring day around your pace, preferences, and pickup point.",
    buttonText: "Start Your Tour",
    buttonHref: "/contact-me",
  },
  faq: [
    {
      question: "What is a private tour with Kokolimo?",
      answer:
        "A private tour with Kokolimo offers a fully personalized travel experience with a dedicated chauffeur and luxury vehicle. You can explore the French Riviera at your own pace, with complete flexibility in stops, timing, and itinerary."
    },
    {
      question: "Can I customize my private tour itinerary?",
      answer:
        "Yes. Every private tour is fully customizable. You can choose the destinations, the schedule and the stops, from coastal villages and luxury hotels to viewpoints, shopping areas and restaurants along the French Riviera."
    },
    {
      question: "Which destinations can be included in a private tour?",
      answer:
        "Popular destinations include Nice, Cannes, Monaco, Èze, Saint-Paul-de-Vence, Antibes, Saint-Tropez, and scenic villages along the French Riviera. Longer itineraries can also include the Italian Riviera such as Ventimiglia or San Remo."
    },
    {
      question: "What is the difference between a private tour and an hourly chauffeur service?",
      answer:
        "A private tour is designed around sightseeing and curated experiences, while an hourly chauffeur service is focused on flexible transportation for meetings, shopping, and daily schedules. Both offer a private vehicle and chauffeur available throughout the booking."
    },
    {
      question: "Is the chauffeur available for the entire duration of the tour?",
      answer:
        "Yes. Your chauffeur remains at your disposal for the full duration of your private tour, ensuring smooth transitions between destinations without waiting time or additional bookings."
    },
    {
      question: "Can private tours include restaurants, beach clubs, or wineries?",
      answer:
        "Absolutely. Private tours can include luxury restaurants, beach clubs, wine tastings, hotels, scenic stops, and curated experiences tailored to your preferences."
    },
    {
      question: "Are private tours suitable for families and VIP travelers?",
      answer:
        "Yes. Private tours are ideal for families, couples, and VIP clients seeking comfort, privacy, and a premium travel experience across the French Riviera."
    },
    {
      question: "Can the tour include airport or hotel pickup?",
      answer:
        "Yes. Your private tour can start from your hotel, villa, yacht, or directly from Nice Côte d’Azur Airport, depending on your itinerary."
    },
    {
      question: "What is the cancellation policy for a private tour?",
      answer:
        "Cancellation is free of charge until five days before the booked tour date and pickup time. If the tour is cancelled less than five days before departure, the full fare is charged."
    }
  ]
};

// Prices quoted in the page texts are read from the price list (data/vehicles.tsx), so a text and the price tables never
// disagree.
const eur = (amount: number) => `€${amount.toLocaleString("en-GB")}`;
const vehicle = (id: string) => vehicles.find(v => v.id === id)!;
const E_CLASS = vehicle("mercedes-e");
const V_CLASS = vehicle("mercedes-v");
const S_CLASS = vehicle("mercedes-s");
const MAYBACH = vehicle("mercedes-maybach");
/** One-way starting prices to a town of the price list, every car: "€150 in a Mercedes E-Class, €180 in a V-Class, …". */
const routePrices = (town: string) =>
  `${eur(E_CLASS.prices[town].transfer)} in a Mercedes E-Class, ${eur(V_CLASS.prices[town].transfer)} in a V-Class, ${eur(S_CLASS.prices[town].transfer)} in an S-Class and ${eur(MAYBACH.prices[town].transfer)} in a Maybach`;
/** The starting price of a route outside the price list, for one car or the cheapest stated. */
const startingPrice = (route: string, vehicleId?: string) =>
  routeStartingPrices[route].prices.find(p => !vehicleId || p.vehicleId === vehicleId)!.transfer;

export const transferPages: Record<string, ServicePageConfig> = {
  "nice-airport-transfer": {
    slug: "nice-airport-transfer",
    path: "/our-services/transfers/nice-airport-transfer",
    metadata: {
      title: "Nice Airport Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport transfer from €90 at a fixed price, with meet-and-greet, luggage help and a chauffeur to Nice, Monaco, Cannes and the whole Riviera.",
      keywords: [
        "Nice airport transfer",
        "private chauffeur Nice Airport",
        "NCE airport transfer Monaco",
        "airport transfer Cannes",
        "Nice airport chauffeur service",
      ],
    },
    serviceLabel: "Nice Airport Transfer",
    heroTitle: "Nice Airport Transfer With a Private Chauffeur",
    heroDescription:
      `Your private driver meets you in the arrivals hall at Nice Côte d'Azur Airport and drives you in a Mercedes to Nice, Monaco, Cannes or anywhere on the Riviera, at a fixed price from ${eur(E_CLASS.prices.nice.transfer)}.`,
    heroImageSrc: "/assets/images/services/airport-arrivals.webp",
    heroImageAlt: "Nice Airport private chauffeur transfer",
    introTitle: "From the Arrivals Hall to Your Door",
    introDescription:
      "Your chauffeur is in the arrivals hall when you land, takes your luggage and drives you straight to your hotel, villa or port, at a price agreed before the trip.",
    panels: [
      {
        title: "We Follow Your Flight",
        text: "Your driver tracks the flight, adjusts to an early or late landing and waits in the arrivals hall of Terminal 1 or 2 with a name sign.",
        theme: "dark",
      },
      {
        title: "Anywhere on the Riviera",
        text: "From the airport, we drive to Nice, Monaco, Cannes, Antibes and Saint-Tropez, and to private villas, marinas and yachts. We also take you back to the airport for your flight home.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How a Nice Airport transfer works",
      paragraphs: [
        `When your flight is booked, send us the flight number, the number of passengers and bags, and the address you are going to. We confirm the car and the **fixed price** before you travel: from ${eur(E_CLASS.prices.nice.transfer)} to Nice, ${eur(E_CLASS.prices.antibes.transfer)} to Antibes, ${eur(E_CLASS.prices.cannes.transfer)} to Cannes or Monaco and ${eur(E_CLASS.prices["st-tropez"].transfer)} to Saint-Tropez in a Mercedes E-Class.`,
        "On the day you travel, we track your flight. Your chauffeur waits in the arrivals hall with your name on a sign, helps with the luggage and walks you to the car. Your booking includes **one hour of waiting** from the pickup time, which covers a long queue at passport control or the baggage belt.",
        `The E-Class, the S-Class and the Maybach take up to ${E_CLASS.passengers} passengers. For families and groups, the V-Class takes up to ${V_CLASS.passengers} with their luggage. We drive day and night, every day of the year, so early-morning and late-night flights are no problem.`,
        "When you leave, we pick you up at your address and drop you off at your terminal. Cancellation is free until five days before the pickup date and time; after that, the full price is charged.",
      ],
    },
    practicalTitle: "Nice Airport Pickup, Pricing and Booking Conditions",
    practicalDescription:
      "Your confirmation sets out the terminal, the car and the fixed price. Every arrival includes one hour of waiting from the pickup time stated in the reservation.",
    practicalDetails: [
      {
        title: "Terminal 1 pickup",
        text: "Your chauffeur monitors the flight and meets you in the Terminal 1 arrivals hall with a name board before assisting with luggage.",
      },
      {
        title: "Terminal 2 pickup",
        text: "For Terminal 2 arrivals, the meeting point is inside the arrivals hall. The terminal and flight number are checked again before pickup.",
      },
      {
        title: "Starting prices",
        text: `In an E-Class, a transfer to Nice starts from ${eur(E_CLASS.prices.nice.transfer)}, to Cannes or Monaco from ${eur(E_CLASS.prices.cannes.transfer)} and to Saint-Tropez from ${eur(E_CLASS.prices["st-tropez"].transfer)}. V-Class, S-Class and Maybach are also available, and the final fixed price is confirmed before booking.`,
      },
      {
        title: "Waiting and cancellation",
        text: "We include one hour of waiting from the pickup time you booked. You can cancel free of charge until five days before your pickup date and time. After that, the full price is charged.",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Smooth Arrivals",
    audienceDescription:
      "For travellers landing at Nice who want to be met, helped with their bags and driven straight to the door.",
    audienceCards: [
      {
        title: "International Arrivals",
        text: "Commercial and private flights: your driver meets you in the arrivals hall or at the business aviation terminal.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Airport arrival icon",
      },
      {
        title: "Hotel & Villa Stays",
        text: "Straight to your hotel or villa, with the luggage carried to the door.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Hotel arrival icon",
      },
      {
        title: "VIP & Business Travel",
        text: "A punctual driver for business arrivals, meetings and events, waiting in arrivals when your flight lands.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "VIP airport icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Nice Airport Transfer",
      description:
        "Send us your flight, the number of passengers and the address, and we confirm the car and the fixed price before you travel.",
      buttonText: "Request Airport Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How much is a private transfer from Nice Airport?",
        answer: `A Kokolimo transfer from Nice Airport starts at ${eur(E_CLASS.prices.nice.transfer)} to Nice, ${eur(E_CLASS.prices.antibes.transfer)} to Antibes, ${eur(E_CLASS.prices.cannes.transfer)} to Cannes or Monaco and ${eur(E_CLASS.prices["st-tropez"].transfer)} to Saint-Tropez in a Mercedes E-Class. The price is fixed and confirmed before you book, with one hour of waiting included.`,
      },
      {
        question: "Where will my driver meet me at Nice Airport?",
        answer:
          "Your chauffeur waits in the arrivals hall of Terminal 1 or Terminal 2, holding a sign with your name. Your driver helps with the luggage and walks you to the car.",
      },
      {
        question: "What happens if my flight is late?",
        answer:
          "We track your flight and adjust the pickup to the real landing time. One hour of waiting is included from your booked pickup time. If you expect a major delay, let us know as soon as possible.",
      },
      {
        question: "Which cars do you use for airport transfers?",
        answer: `We drive Mercedes cars only. The E-Class, the S-Class and the Maybach take up to ${E_CLASS.passengers} passengers, and the V-Class takes up to ${V_CLASS.passengers} with their luggage.`,
      },
      {
        question: "Do you pick up early-morning and late-night flights?",
        answer:
          "Yes. Kokolimo drives 24/7, so your driver is in the arrivals hall whatever time your flight lands.",
      },
      {
        question: "Which destinations do you serve from Nice Airport?",
        answer:
          "We drive to Nice, Cannes, Antibes, Monaco, Menton, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat and Saint-Tropez. In winter, we also drive to Courchevel, Megève and Chamonix.",
      },
      {
        question: "Can you drive me back to Nice Airport for my flight?",
        answer:
          "Yes. We collect you at your hotel, villa or port and drop you at your terminal. Many clients book their arrival and their departure together.",
      },
      {
        question: "What is the cancellation policy for an airport transfer?",
        answer:
          "Cancellation is free until five days before the booked date and pickup time. If you cancel less than five days before, the full price is charged.",
      },
    ]
  },
  "long-distance-transfer": {
    slug: "long-distance-transfer",
    path: "/our-services/transfers/long-distance-transfer",
    metadata: {
      title: "Long-Distance Private Transfer | Kokolimo",
      description:
        "Long-distance private transfers from Nice, Monaco and the Riviera to cities, resorts, villas and airports, at a fixed price confirmed before you book.",
      keywords: [
        "long distance transfer Riviera",
        "private chauffeur long distance",
        "Nice to Milan chauffeur",
        "Monaco long distance transfer",
        "private transfer South of France",
      ],
    },
    serviceLabel: "Long-Distance Transfer",
    heroTitle: "Long-Distance Private Transfers From the Riviera",
    heroDescription:
      "Your private driver takes you on longer journeys from Nice, Monaco and the Riviera to the ski resorts of the Alps, to Italy and Switzerland, and to other cities and airports. The price is fixed before you travel.",
    heroImageSrc: "/assets/images/services/long-distance.webp",
    heroImageAlt: "Long-distance private chauffeur transfer",
    introTitle: "One Driver, Door to Door",
    introDescription:
      "On a long journey, the same driver takes you from your door to your destination, stops when you need to and has room for your luggage.",
    panels: [
      {
        title: "Beyond the Coast",
        text: "In winter we drive to Courchevel, Megève and Chamonix. We also cross the border into Italy and Switzerland, and drive to other cities, resorts and airports.",
        theme: "dark",
      },
      {
        title: "Stops on Your Terms",
        text: "Stops for meals, meetings or sightseeing are planned with you before the trip, and the price is fixed before you book.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How a long-distance transfer works",
      paragraphs: [
        "A long-distance transfer covers journeys of an hour or more from the French Riviera: to the ski resorts of the Alps, across the border to Italy or Switzerland, or to another city or airport. The same chauffeur takes you from door to door in a Mercedes.",
        `Here are some typical trips from Nice Airport. Sanremo, across the Italian border, takes **about an hour** and costs from ${eur(startingPrice("sanremo", "mercedes-e"))} in an E-Class. Isola 2000, the ski resort closest to the coast, is 1 hour 45 minutes to 2 hours up the Tinée valley, and the trip costs from around ${eur(startingPrice("isola-2000"))}. Milan is about four hours away, and Courchevel, Megève and Chamonix about five to six hours, depending on the route, the traffic and the snow.`,
        `On longer routes, the price depends on the distance and the car. We **fix it before you book**, and there is no meter. The V-Class takes up to ${V_CLASS.passengers} passengers with their luggage and ski equipment, and the E-Class and the S-Class take up to ${E_CLASS.passengers}. Our cars are equipped for winter mountain roads.`,
        "Tell us where you start and where you are going, the date, the number of passengers and bags, and any stops you want on the way. We then confirm the route, the car and the price before you travel.",
      ],
    },
    audienceTitle: "Suited To",
    audienceAccent: "Extended Routes",
    audienceDescription:
      "For journeys of several hours, with one driver, one car and no changes on the way.",
    audienceCards: [
      {
        title: "Intercity Travel",
        text: "Between the Riviera and other cities in France, Italy and Switzerland.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Intercity icon",
      },
      {
        title: "Leisure Stays",
        text: "To ski resorts, villas and hotels further away, with all the luggage in the car.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Leisure route icon",
      },
      {
        title: "Executive Transfers",
        text: "For business travellers who would rather spend the journey in one quiet car than change transport on the way.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Executive route icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Plan Your Long-Distance Transfer",
      description:
        "Send us the route, the date and the number of passengers, and we confirm the car and the fixed price before you travel.",
      buttonText: "Book Long-Distance Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What counts as a long-distance transfer?",
        answer:
          "Any journey of several hours from the Riviera counts. It can take you to the Alps, Italy or Switzerland, or to another city, resort or airport.",
      },
      {
        question: "Do you drive from Nice to Courchevel and the other ski resorts?",
        answer: `Yes. Courchevel, Megève and Chamonix are about five to six hours from Nice Airport by road, depending on the route, the traffic and the snow; Isola 2000, the closest resort, is 1 hour 45 minutes to 2 hours. Our cars are equipped for winter mountain roads, and the V-Class carries up to ${V_CLASS.passengers} passengers with their skis and luggage.`,
      },
      {
        question: "Can you drive across the border to Italy or Switzerland?",
        answer: `Yes. Sanremo is about an hour from Nice Airport, and the transfer costs from ${eur(startingPrice("sanremo", "mercedes-e"))} in a Mercedes E-Class. Milan is about four hours away. We also drive to Switzerland and other nearby countries, at a price fixed before you book.`,
      },
      {
        question: "Can we stop on the way?",
        answer:
          "Yes. Stops for meals, meetings or sightseeing are planned with you before the trip.",
      },
      {
        question: "Which car is best for a long-distance transfer?",
        answer: `The V-Class suits up to ${V_CLASS.passengers} passengers with plenty of luggage. For up to ${S_CLASS.passengers} passengers who want the most comfort, choose the S-Class or the Maybach.`,
      },
      {
        question: "How much is a long-distance transfer?",
        answer: `It depends on the distance and the car, and we fix the price before you book, with no meter. As a guide, a transfer to Sanremo starts from ${eur(startingPrice("sanremo", "mercedes-e"))} in an E-Class, and one to Isola 2000 from around ${eur(startingPrice("isola-2000"))}.`,
      },
      {
        question: "Can I book the return journey too?",
        answer:
          "Yes. Many clients book the outbound and return journeys together.",
      },
    ]
  },
  "monaco-airport-transfer": {
    slug: "monaco-airport-transfer",
    path: "/our-services/transfers/monaco-airport-transfer",
    metadata: {
      title: "Nice Airport to Monaco Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport to Monaco transfer from €150 at a fixed price, with meet-and-greet and a chauffeur to Monte-Carlo, Port Hercule and the hotels.",
      keywords: [
        "Monaco airport transfer",
        "Nice airport to Monaco",
        "Monaco chauffeur transfer",
        "Nice to Monte-Carlo transfer",
        "private transfer Monaco",
      ],
    },
    serviceLabel: "Monaco Airport Transfer",
    heroTitle: "Nice Airport to Monaco Transfer",
    heroDescription:
      `Your private driver meets you at Nice Airport and drives you to your hotel, Port Hercule or the Casino Square in Monaco. The journey takes about 30 to 40 minutes, and the fixed price starts from ${eur(E_CLASS.prices.monaco.transfer)}.`,
    heroImageSrc: "/assets/images/services/monaco-airport-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Monaco with a black Mercedes on the harbour",
    introTitle: "Straight to the Principality",
    introDescription:
      "Monaco's tunnels, one-way streets and scarce parking make a first arrival hard. Your chauffeur knows them and takes you from the terminal to your door.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "We track your flight, wait in the arrivals hall with a name sign, carry the luggage and drive you straight to Monaco.",
        theme: "dark",
      },
      {
        title: "Delivered to the Door",
        text: "Your chauffeur takes you to your hotel, the harbour, the Casino or a yacht in Port Hercule, avoiding Monaco's tunnels, ramps and scarce parking.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How your transfer from Nice Airport to Monaco works",
      paragraphs: [
        "Monaco has no airport of its own, so a Monaco airport transfer starts at Nice Côte d'Azur, **about 30 to 40 minutes** away by the motorway or the coast road depending on traffic. Your driver meets you in arrivals at Terminal 1 or 2 and drops you at the door of your hotel or residence in Monte-Carlo, on the quay at Port Hercule or on the Casino Square.",
        `A one-way transfer starts at ${routePrices("monaco")}. We fix the price when you book, follow your flight and include one hour of waiting from your pickup time. The V-Class seats up to ${V_CLASS.passengers} passengers with their luggage.`,
        "During the Grand Prix in May and the Yacht Show in September, roads close and the principality fills up. We plan the route and the drop-off point around the closures. If you take the helicopter from Nice Airport instead, your driver meets you at the Monaco heliport in Fontvieille. When it is time to leave, we pick you up in Monaco and take you back to your terminal.",
      ],
    },
    audienceTitle: "Ideal For",
    audienceAccent: "Monaco Arrivals",
    audienceDescription:
      "Built for arrivals into Monaco: hotels, residences, business meetings, events and yachts.",
    audienceCards: [
      {
        title: "Events & Grand Prix",
        text: "A reliable transfer for the Grand Prix, the Yacht Show and Monaco's calendar, timed around the closures and crowds.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Monaco events icon",
      },
      {
        title: "Hotels & Casino",
        text: "Direct arrivals to the Hôtel de Paris, the Hermitage and the Casino Square, with luggage handled and no waiting.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Monaco hotels icon",
      },
      {
        title: "Business & Yachts",
        text: "A discreet, punctual transfer for business travel and for guests joining a yacht in Port Hercule.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Monaco business icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Transfer From Nice Airport to Monaco",
      description:
        "Send us your flight and your Monaco address, and we confirm the car and the fixed price before you travel.",
      buttonText: "Request Monaco Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How much is a transfer from Nice Airport to Monaco?",
        answer: `A one-way transfer starts from ${routePrices("monaco")}. The price is fixed and confirmed before you book, with no meter.`,
      },
      {
        question: "How long is the drive from Nice Airport to Monaco?",
        answer:
          "About 30 to 40 minutes by road, by the motorway or the coast road depending on traffic. It takes longer during the Grand Prix and other big events.",
      },
      {
        question: "Does Monaco have an airport?",
        answer:
          "No. The nearest airport is Nice Côte d'Azur, about 30 to 40 minutes away by road. A helicopter also flies from Nice Airport to the Monaco heliport in about seven minutes; we drive you from the terminal to the helipad and from the heliport to your address.",
      },
      {
        question: "Where will my driver meet me at Nice Airport?",
        answer:
          "We wait for you in the arrivals hall of Terminal 1 or 2, with your name on a sign. Your driver takes your luggage and walks you to the car.",
      },
      {
        question: "Can you take me to a yacht in Port Hercule?",
        answer:
          "Yes. We deliver guests directly to the quay in Port Hercule, coordinating with the crew on access and timing where needed.",
      },
      {
        question: "Can I book a late-night transfer from Nice Airport to Monte-Carlo?",
        answer:
          "Yes. Kokolimo drives 24/7, so your driver meets early-morning and late-night flights and takes you to Monte-Carlo.",
      },
      {
        question: "Do you drive from Monaco back to Nice Airport?",
        answer:
          "Yes. We collect you at your hotel or residence in Monaco and drop you at your terminal. Many clients book their arrival and departure together.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellation is free until five days before the booked date and pickup time; after that, the full price is charged.",
      },
    ],
  },
  "cannes-airport-transfer": {
    slug: "cannes-airport-transfer",
    path: "/our-services/transfers/cannes-airport-transfer",
    metadata: {
      title: "Nice Airport to Cannes Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport to Cannes transfer from €150 at a fixed price, with meet-and-greet and a chauffeur to the Croisette, the hotels and the festivals.",
      keywords: [
        "Cannes airport transfer",
        "Nice airport to Cannes",
        "Cannes chauffeur transfer",
        "Nice to Cannes transfer",
        "private transfer Cannes",
      ],
    },
    serviceLabel: "Cannes Airport Transfer",
    heroTitle: "Nice Airport to Cannes Transfer",
    heroDescription:
      `Your private driver meets you at Nice Airport and drives you to Cannes in about 30 minutes, to the Croisette, your hotel or the Palais des Festivals, at a fixed price from ${eur(E_CLASS.prices.cannes.transfer)}.`,
    heroImageSrc: "/assets/images/services/cannes-airport-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Cannes with a black Mercedes on the Croisette",
    introTitle: "Arrive on the Croisette",
    introDescription:
      "A Cannes airport transfer starts at Nice Côte d'Azur, about 30 minutes east of the town. Your chauffeur meets you at your flight and takes you to the seafront, without the taxi queue or the festival crowds.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "We track your flight and meet you in arrivals with a name board. Then we carry your luggage to the car for the drive west to Cannes.",
        theme: "dark",
      },
      {
        title: "Festival-Ready",
        text: "During the Film Festival, the Yachting Festival and Cannes Lions, your chauffeur knows the road closures and plans your arrival around them.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How the Nice Airport to Cannes transfer works",
      paragraphs: [
        "Nice Côte d'Azur is the main airport for Cannes, and the drive takes **about 30 minutes** when the roads are clear. Your driver meets you in the arrivals hall, takes your luggage and drives you to any address in Cannes, such as your hotel on the Croisette, the Palais des Festivals or the Vieux Port.",
        `The trip from the airport starts at ${routePrices("cannes")}, and the price is agreed before you book. If your flight is late, your driver waits for you. Your booking includes an hour of waiting from the pickup time.`,
        "Cannes runs on events: the Film Festival in May, Cannes Lions in June and the Yachting Festival in September. Roads around the Croisette close and traffic builds, so we plan the drop-off around the closures. When you leave Cannes, we pick you up and drive you back to Nice Airport.",
      ],
    },
    audienceTitle: "Ideal For",
    audienceAccent: "Cannes Arrivals",
    audienceDescription:
      "Built for arrivals into Cannes: the Croisette hotels, the festivals and the yachts in the Vieux Port.",
    audienceCards: [
      {
        title: "Festivals & Events",
        text: "Reliable arrivals for the Film Festival, the Yachting Festival and Cannes Lions, timed around the crowds and closures.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Cannes festival icon",
      },
      {
        title: "Croisette Hotels",
        text: "Direct transfers to the Carlton, the Martinez and the Croisette hotels, with luggage handled and no waiting.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Cannes hotels icon",
      },
      {
        title: "Yachts & Islands",
        text: "A smooth transfer for guests joining a yacht in the Vieux Port or heading out to the Lérins Islands.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Cannes yacht icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Transfer From Nice Airport to Cannes",
      description:
        "Send us your flight and your Cannes address, and we confirm the car and the fixed price before you travel.",
      buttonText: "Request Cannes Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How much is a transfer from Nice Airport to Cannes?",
        answer: `A one-way transfer starts from ${routePrices("cannes")}. The price is fixed and confirmed before you book, with no meter.`,
      },
      {
        question: "How long is the drive from Nice Airport to Cannes?",
        answer:
          "Around 30 minutes by road on a clear run, a little longer during the Film Festival and other major events.",
      },
      {
        question: "Is a private driver worth it during the Cannes festivals?",
        answer:
          "Yes. With road closures and crowds around the Croisette, a driver who knows the diversions gets you to your hotel or the Palais on time.",
      },
      {
        question: "Can you drive me to a hotel on the Croisette?",
        answer:
          "Yes. We take you straight to the Carlton, the Martinez or any other hotel on the Croisette, and we handle your luggage.",
      },
      {
        question: "Can I book a late-night transfer from Nice Airport to Cannes?",
        answer:
          "Yes. Kokolimo drives 24/7, including early-morning and late-night flights.",
      },
      {
        question: "Do you drive from Cannes back to Nice Airport?",
        answer:
          "Yes. We collect you at your hotel or address in Cannes and drop you at your terminal.",
      },
      {
        question: "Can I cancel a Cannes transfer?",
        answer:
          "Yes, free of charge until five days before the booked date and pickup time. If you cancel later than that, the full price is charged.",
      },
    ],
  },
  "saint-tropez-transfer": {
    slug: "saint-tropez-transfer",
    path: "/our-services/transfers/saint-tropez-transfer",
    metadata: {
      title: "Nice Airport to Saint-Tropez Transfer | Kokolimo",
      description:
        "Private Nice Airport to Saint-Tropez transfer from €400 at a fixed price, by road or boat, with a chauffeur to the old port, the villas and Pampelonne.",
      keywords: [
        "Nice to Saint-Tropez transfer",
        "Saint-Tropez airport transfer",
        "Nice airport to Saint-Tropez",
        "Saint-Tropez chauffeur transfer",
        "private transfer Saint-Tropez",
      ],
    },
    serviceLabel: "Saint-Tropez Transfer",
    heroTitle: "Nice Airport to Saint-Tropez Transfer",
    heroDescription:
      `Your private driver meets you at Nice Airport and drives you to Saint-Tropez in about an hour and a half to two hours, or to a boat at Sainte-Maxime. The fixed price starts from ${eur(E_CLASS.prices["st-tropez"].transfer)}.`,
    heroImageSrc: "/assets/images/services/saint-tropez-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Saint-Tropez with a black Mercedes on the quay",
    introTitle: "The Longest Run on the Coast",
    introDescription:
      "Saint-Tropez sits at the end of its peninsula, about 110 kilometres from Nice Airport, and a single road serves it. Your chauffeur plans your arrival around the summer traffic.",
    panels: [
      {
        title: "By Road or by Boat",
        text: "Your transfer can go all the way by road, or to a boat landing at Sainte-Maxime, where we arrange the crossing into the port.",
        theme: "dark",
      },
      {
        title: "Timed Around the Traffic",
        text: "In peak summer the single gulf road can gridlock; a driver who knows the peninsula plans the run around the worst of it.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How the Nice Airport to Saint-Tropez transfer works",
      paragraphs: [
        "Nice Côte d'Azur is the main airport for Saint-Tropez, **about 110 kilometres** away: roughly an hour and a half to two hours by road, and longer in July and August. Your driver meets you in arrivals, takes your luggage and drives you to your hotel, your villa, the old port or the beach clubs of Pampelonne.",
        `For this longer trip, prices start at ${routePrices("st-tropez")}, one way, fixed before you book. The V-Class takes up to ${V_CLASS.passengers} passengers with their luggage, which suits families and groups heading to a villa.`,
        "In peak season, traffic on the gulf road can stand still. Instead, we can take you to a boat landing at Sainte-Maxime and arrange the crossing into the port. At the end of your stay, we pick you up in Saint-Tropez and drive you back to Nice Airport.",
      ],
    },
    audienceTitle: "Ideal For",
    audienceAccent: "Saint-Tropez Stays",
    audienceDescription:
      "Built for the longer run to Saint-Tropez: villas, hotels, beach clubs and yachts.",
    audienceCards: [
      {
        title: "Villas & Hotels",
        text: "Smooth arrivals to the Byblos, the peninsula villas and the hotels above the gulf, with luggage and timing in mind.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Saint-Tropez villa icon",
      },
      {
        title: "Beach Clubs",
        text: "Transfers and days to the Pampelonne beach clubs, dropped at the door and collected whenever you are ready.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Pampelonne beach icon",
      },
      {
        title: "Yachts & Groups",
        text: "A spacious V-Class for groups, families and luggage, or a car to a yacht moored in the old port.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Saint-Tropez group icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Transfer From Nice Airport to Saint-Tropez",
      description:
        "Send us your flight and your Saint-Tropez address, and we confirm the route, the car and the fixed price before you travel.",
      buttonText: "Request Saint-Tropez Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How much is a transfer from Nice Airport to Saint-Tropez?",
        answer: `For this trip of about 110 kilometres, a one-way transfer starts from ${routePrices("st-tropez")}. The price is fixed before you book.`,
      },
      {
        question: "How long is the transfer from Nice Airport to Saint-Tropez?",
        answer:
          "By road, roughly an hour and a half to two hours over about 110 kilometres, longer in peak-season traffic around the gulf.",
      },
      {
        question: "Which airport do I fly into for Saint-Tropez?",
        answer:
          "Nice Côte d'Azur, the main international airport of the Riviera, is about 110 kilometres from Saint-Tropez, and your driver meets you in arrivals there. If you land at another airport, send us your flight details and we will quote the transfer before you book.",
      },
      {
        question: "Can I reach Saint-Tropez by boat?",
        answer:
          "Yes. We can drive you to a boat landing at Sainte-Maxime and arrange a crossing into the port. The crossing avoids the summer traffic around the gulf.",
      },
      {
        question: "Why is Saint-Tropez harder to reach in summer?",
        answer:
          "A single road serves the peninsula, so July and August traffic can gridlock; a chauffeur plans around it or switches to the boat.",
      },
      {
        question: "Can a group book a car from Nice Airport to Saint-Tropez?",
        answer: `Yes. The Mercedes V-Class takes up to ${V_CLASS.passengers} passengers with their luggage. In a V-Class, a one-way transfer from Nice Airport starts from ${eur(V_CLASS.prices["st-tropez"].transfer)}.`,
      },
      {
        question: "Do you drive from Saint-Tropez back to Nice Airport?",
        answer:
          "Yes. We collect you at your villa or hotel in Saint-Tropez and drive you back to your terminal at Nice Airport.",
      },
    ],
  },
  "antibes-transfer": {
    slug: "antibes-transfer",
    path: "/our-services/transfers/antibes-transfer",
    metadata: {
      title: "Nice Airport to Antibes Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport to Antibes transfer from €120 at a fixed price, with meet-and-greet and a chauffeur to Juan-les-Pins, Cap d'Antibes and Port Vauban.",
      keywords: [
        "Antibes airport transfer",
        "Nice airport to Antibes",
        "Antibes chauffeur transfer",
        "Juan-les-Pins transfer",
        "private transfer Antibes",
      ],
    },
    serviceLabel: "Antibes Transfer",
    heroTitle: "Nice Airport to Antibes Transfer",
    heroDescription:
      "Our meet-and-greet chauffeur transfer takes you from Nice Airport to Antibes in around 25 minutes. We drop you at your hotel, in Juan-les-Pins, on Cap d'Antibes or at Port Vauban.",
    heroImageSrc: "/assets/images/services/antibes-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Antibes with a black Mercedes by the ramparts",
    introTitle: "Minutes Along the Coast",
    introDescription:
      "One of the closest major towns to the airport, Antibes is an easy, quick transfer. Met at the flight and delivered to the door.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "Your driver tracks the flight, waits in arrivals with a name board and carries your luggage to the car. Antibes is then a short drive away.",
        theme: "dark",
      },
      {
        title: "Antibes & the Cap",
        text: "Our transfers take you to the old town, the beaches of Juan-les-Pins, the villas of Cap d'Antibes and the yachts of Port Vauban.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Antibes Arrivals",
    audienceDescription:
      "Built for arrivals into Antibes, Juan-les-Pins and Cap d'Antibes, where a quick, polished transfer starts the stay well.",
    audienceCards: [
      {
        title: "Hotels & Villas",
        text: "Direct arrivals to the Cap d'Antibes hotels and villas and the seafront of Juan-les-Pins, with luggage handled.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Antibes hotel icon",
      },
      {
        title: "Yachts at Port Vauban",
        text: "A smooth transfer for guests and crew joining a yacht at Port Vauban, Europe's largest marina.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Port Vauban yacht icon",
      },
      {
        title: "Jazz & Events",
        text: "Reliable arrivals for the Jazz à Juan festival and events along the Antibes coast.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Antibes events icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Need an Antibes Transfer?",
      description:
        "Send us your arrival or departure details and we will organize the right vehicle and chauffeur from Nice Airport to Antibes.",
      buttonText: "Request Antibes Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Antibes?",
        answer:
          "The drive takes around 25 minutes when the roads are clear, so Antibes is one of the closest major towns to Nice Airport.",
      },
      {
        question: "How much is a Nice Airport to Antibes transfer?",
        answer:
          "A transfer starts from around €120 in a Mercedes E-Class or €150 in a V-Class. We quote a fixed price in advance, with no meter.",
      },
      {
        question: "Can you take me to Cap d'Antibes or Juan-les-Pins?",
        answer:
          "Yes. We drive you straight to the hotels and villas of Cap d'Antibes and the seafront of Juan-les-Pins, and we carry your luggage.",
      },
      {
        question: "Can you take me to a yacht at Port Vauban?",
        answer:
          "Yes. We bring guests and crew to the quay at Port Vauban, Europe's largest marina, coordinating with the crew where needed.",
      },
      {
        question: "Do you offer a return transfer to Nice Airport?",
        answer:
          "Yes. Many clients book both the arrival and the departure to ensure a seamless experience throughout their stay in Antibes.",
      },
    ],
  },
  "saint-jean-cap-ferrat-transfer": {
    slug: "saint-jean-cap-ferrat-transfer",
    path: "/our-services/transfers/saint-jean-cap-ferrat-transfer",
    metadata: {
      title: "Nice Airport to Saint-Jean-Cap-Ferrat Transfer | Kokolimo",
      description:
        "Private Nice Airport to Saint-Jean-Cap-Ferrat transfer from €110 at a fixed price, with meet-and-greet and a chauffeur to the villas, hotels and yachts.",
      keywords: [
        "Saint-Jean-Cap-Ferrat transfer",
        "Cap-Ferrat chauffeur transfer",
        "Nice airport to Cap-Ferrat",
        "Cap-Ferrat villa transfer",
        "private transfer Cap-Ferrat",
      ],
    },
    serviceLabel: "Saint-Jean-Cap-Ferrat Transfer",
    heroTitle: "Nice Airport to Cap-Ferrat Transfer",
    heroDescription:
      "Your private driver meets you at Nice Airport and drives you to your villa, hotel or yacht at Saint-Jean-Cap-Ferrat, about 25 minutes away.",
    heroImageSrc: "/assets/images/services/saint-jean-cap-ferrat-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Cap-Ferrat with a black Mercedes among the villas",
    introTitle: "The Discreet Peninsula",
    introDescription:
      "Saint-Jean-Cap-Ferrat is a quiet, residential peninsula east of Nice, with gated villas, a few hotels and yachts at anchor in its bays. Your chauffeur takes you to the gate, and can stay with you by the hour during your stay.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "We follow your flight and meet you in arrivals with a name board. Once your luggage is in the car, we drive along the coast to the peninsula.",
        theme: "dark",
      },
      {
        title: "Villas, Hotels & Yachts",
        text: "We bring you discreetly to the Grand-Hôtel du Cap-Ferrat, to private villas or to yachts at anchor in the bays.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How the Nice Airport to Cap-Ferrat transfer works",
      paragraphs: [
        "Saint-Jean-Cap-Ferrat is **about 25 minutes** east of Nice Côte d'Azur Airport, along the coast past Villefranche. Your chauffeur meets you in arrivals, takes your luggage and drives you to your villa, your hotel or the port.",
        `A transfer costs from ${eur(startingPrice("cap-ferrat", "mercedes-e"))} in a Mercedes E-Class or ${eur(startingPrice("cap-ferrat", "mercedes-v"))} in a V-Class for up to ${V_CLASS.passengers} passengers, and the price is set when you book. Your driver follows your flight and waits up to an hour from the pickup time at no extra cost.`,
        `Once on the peninsula, the roads are quiet and residential, winding between hedged estates down to the port and the beaches. When your yacht is at anchor, we meet its tender at the quay and agree the timing with the crew. During your stay, you can also keep a chauffeur by the hour, from ${eur(E_CLASS.prices.nice.hourly)} an hour in an E-Class.`,
      ],
    },
    audienceTitle: "Ideal For",
    audienceAccent: "Cap-Ferrat Stays",
    audienceDescription:
      "A chauffeur for arrivals on the Cap-Ferrat peninsula: private villas, hotels and yachts.",
    audienceCards: [
      {
        title: "Villas & Estates",
        text: "A discreet transfer to the private villas and gated estates of the peninsula, with luggage handled and no fuss.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Cap-Ferrat villa icon",
      },
      {
        title: "Palace Hotels",
        text: "Direct arrivals to the Grand-Hôtel du Cap-Ferrat and the peninsula's hotels above the sea.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Cap-Ferrat hotel icon",
      },
      {
        title: "Yachts & Tenders",
        text: "A car to meet a yacht at anchor or its tender at the quay, coordinated with the crew.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Cap-Ferrat yacht icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Transfer From Nice Airport to Cap-Ferrat",
      description:
        "Send us your flight and your address on the peninsula, and we confirm the car and the fixed price before you travel.",
      buttonText: "Request Cap-Ferrat Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Cap-Ferrat?",
        answer:
          "It takes around 25 minutes, heading east along the coast past Villefranche onto the Saint-Jean-Cap-Ferrat peninsula.",
      },
      {
        question: "How much is a Nice Airport to Cap-Ferrat transfer?",
        answer: `From ${eur(startingPrice("cap-ferrat", "mercedes-e"))} in a Mercedes E-Class or ${eur(startingPrice("cap-ferrat", "mercedes-v"))} in a V-Class, fixed before you book.`,
      },
      {
        question: "Can you deliver to a private villa on Cap-Ferrat?",
        answer:
          "Yes. We take you discreetly to the villas, gated estates and hotels of the peninsula, and we look after your luggage.",
      },
      {
        question: "Can you meet a yacht at Cap-Ferrat?",
        answer:
          "Yes. We can meet a yacht at anchor or its tender at the quay, coordinating with the crew on timing and access.",
      },
      {
        question: "Can I hire a private driver on Cap-Ferrat by the hour?",
        answer: `Yes. From ${eur(E_CLASS.prices.nice.hourly)} an hour in a Mercedes E-Class, or ${eur(E_CLASS.prices.nice.fullDay)} for a full day, your chauffeur takes you to dinner, the beaches, Monaco or Nice and waits while you are there.`,
      },
      {
        question: "Can you take me from Cap-Ferrat back to Nice Airport?",
        answer:
          "Yes. We collect you at your villa, hotel or the port and drive you to your terminal.",
      },
    ],
  },
  "eze-transfer": {
    slug: "eze-transfer",
    path: "/our-services/transfers/eze-transfer",
    metadata: {
      title: "Nice Airport to Èze Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport to Èze transfer from about €110, fixed in advance, with a chauffeur up the Moyenne Corniche to the perched village and its hotels.",
      keywords: [
        "Eze transfer",
        "Nice airport to Eze",
        "Eze chauffeur transfer",
        "Eze village transfer",
        "private transfer Eze",
      ],
    },
    serviceLabel: "Èze Transfer",
    heroTitle: "Nice Airport to Èze Transfer",
    heroDescription:
      "Your private driver meets you at Nice Airport and drives you up the Moyenne Corniche to Èze in about 25 to 30 minutes, to the entrance of the car-free village, its hotels and restaurants.",
    heroImageSrc: "/assets/images/services/eze-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Èze with a black Mercedes on the corniche",
    introTitle: "Up to the Perched Village",
    introDescription:
      "Èze sits high on the corniche between Nice and Monaco, and its medieval village is car-free. Your chauffeur drops you at the village entrance, where the hotels take your luggage into the lanes. By the hour, the same chauffeur can stay with you for dinner or a drive along the corniches.",
    panels: [
      {
        title: "Along the Corniche",
        text: "We meet you off your flight and drive up the Moyenne Corniche, one of the coast's great drives, to the entrance of the medieval village.",
        theme: "dark",
      },
      {
        title: "A Car-Free Village",
        text: "Èze is a pedestrian village, so we drop you at the entrance, and the hotels carry your luggage through the lanes.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "How your transfer from Nice Airport to Èze works",
      paragraphs: [
        "Èze is **about 25 to 30 minutes** from Nice Côte d'Azur Airport, up the Moyenne Corniche towards Monaco. Your chauffeur meets you in arrivals, takes your luggage and drives you to the entrance of the village.",
        `No cars can enter the medieval village, so every car stops at its entrance. From there, hotels such as the Château de la Chèvre d'Or take your luggage through the lanes. A transfer from the airport costs from about ${eur(startingPrice("eze"))}, fixed before you book, with one hour of waiting included from your pickup time.`,
        `Monaco is a few minutes away, so the same driver can take you on to Monte-Carlo, along the corniches or to dinner on the coast. For an evening or a whole day, our hourly chauffeur service starts at ${eur(E_CLASS.prices.nice.hourly)} an hour in a Mercedes E-Class.`,
      ],
    },
    audienceTitle: "Ideal For",
    audienceAccent: "Èze Stays",
    audienceDescription:
      "Built for arrivals to Èze, where the perched, car-free village makes a chauffeur to the entrance the easiest option.",
    audienceCards: [
      {
        title: "Clifftop Hotels",
        text: "Arrivals to the Château de la Chèvre d'Or and Èze's hotels, dropped at the village entrance with luggage arranged.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Èze hotel icon",
      },
      {
        title: "Fine Dining",
        text: "A chauffeur for the Michelin tables of Èze: enjoy the wine and the view, and leave the corniche to your driver.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Èze dining icon",
      },
      {
        title: "Corniche & Monaco",
        text: "Keep your chauffeur by the hour to link Èze with Monaco, minutes away, and the three corniches.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Èze corniche icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Book Your Transfer From Nice Airport to Èze",
      description:
        "Send us your flight and your hotel in Èze, and we confirm the car and the fixed price before you travel.",
      buttonText: "Request Èze Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Èze?",
        answer:
          "It takes around 25 to 30 minutes to drive up the Moyenne Corniche, between Nice and Monaco, to the entrance of the village.",
      },
      {
        question: "How much is a Nice Airport to Èze transfer?",
        answer: `A transfer from Nice Airport starts from about ${eur(startingPrice("eze"))}, with a price fixed before you book and no meter.`,
      },
      {
        question: "Can a car reach the village of Èze?",
        answer:
          "The medieval village is car-free, so your chauffeur drops you at the entrance and the hotels take your luggage into the lanes.",
      },
      {
        question: "Can you link Èze with Monaco?",
        answer:
          "Yes. Monaco is minutes away, and your private driver can take you from Èze along the corniches and the coast for dinners and day trips.",
      },
      {
        question: "Can I book a private driver in Èze by the hour?",
        answer: `Yes. Your driver stays with you from ${eur(E_CLASS.prices.nice.hourly)} an hour in a Mercedes E-Class, or ${eur(E_CLASS.prices.nice.fullDay)} for a full day. You can have dinner in the village, drive along the corniches or have a night out in Monaco.`,
      },
      {
        question: "What does your chauffeur service in Èze include?",
        answer: `It includes the transfer from Nice Airport to the village entrance, from about ${eur(startingPrice("eze"))} at a price fixed before you book. It also includes a chauffeur by the hour from ${eur(E_CLASS.prices.nice.hourly)}, for dinner in the village, a drive along the corniches or an evening in Monaco.`,
      },
      {
        question: "Can you take me from Èze back to Nice Airport?",
        answer:
          "Yes. We collect you at the village entrance or your hotel and drive you back to your terminal.",
      },
    ],
  },
  "villefranche-transfer": {
    slug: "villefranche-transfer",
    path: "/our-services/transfers/villefranche-transfer",
    metadata: {
      title: "Nice Airport to Villefranche-sur-Mer Transfer | Kokolimo",
      description:
        "Private Nice Airport to Villefranche-sur-Mer transfer from about €100, fixed in advance, with meet-and-greet and a chauffeur to the old town and the quay.",
      keywords: [
        "Villefranche-sur-Mer transfer",
        "Nice airport to Villefranche",
        "Villefranche chauffeur transfer",
        "Villefranche cruise transfer",
        "private transfer Villefranche",
      ],
    },
    serviceLabel: "Villefranche-sur-Mer Transfer",
    heroTitle: "Nice Airport to Villefranche Transfer",
    heroDescription:
      "A meet-and-greet chauffeur transfer from Nice Airport to Villefranche-sur-Mer takes around 20 minutes, and we drop you in the old town, at your hotel or at the cruise tender quay.",
    heroImageSrc: "/assets/images/services/villefranche-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Villefranche with a black Mercedes above the bay",
    introTitle: "A Short Drive to the Deep Bay",
    introDescription:
      "One of the closest towns to the airport, Villefranche and its deep sheltered bay are a short, scenic transfer along the coast.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "We track your flight and wait in arrivals with a name board. Once your luggage is in the car, it is a short drive east to Villefranche.",
        theme: "dark",
      },
      {
        title: "Old Town & Cruise Port",
        text: "We drive you to the pastel old town and the hotels, and we offer transfers to and from the cruise tender quay in the bay.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Villefranche Arrivals",
    audienceDescription:
      "Built for arrivals into Villefranche, from hotel stays to cruise calls and yachts at anchor in the deep bay.",
    audienceCards: [
      {
        title: "Cruise Guests",
        text: "Transfers to and from the tender quay for cruise passengers exploring Nice, Monaco and Èze for the day.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Villefranche cruise icon",
      },
      {
        title: "Hotels & Old Town",
        text: "Direct arrivals to the seafront hotels and the pastel old town, with luggage handled and no waiting.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Villefranche hotel icon",
      },
      {
        title: "Yachts at Anchor",
        text: "A car to meet a tender at the quay for yachts lying in the deep bay of Villefranche.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Villefranche yacht icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Need a Villefranche Transfer?",
      description:
        "Send us your arrival, departure or cruise details and we will organize a chauffeur from Nice Airport to Villefranche-sur-Mer.",
      buttonText: "Request Villefranche Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Villefranche?",
        answer:
          "Villefranche-sur-Mer is one of the closest towns to the airport, around 20 minutes east along the coast.",
      },
      {
        question: "How much is a transfer from Nice Airport to Villefranche?",
        answer:
          "A transfer from Nice Airport costs from around €100 as a guide. We quote it as a fixed price in advance, with no meter.",
      },
      {
        question: "Do you provide transfers for cruise passengers?",
        answer:
          "Yes. We meet cruise guests at the tender quay and run tailored day trips to Nice, Monaco and Èze, back in good time for the ship.",
      },
      {
        question: "Can you meet a yacht in the bay of Villefranche?",
        answer:
          "Yes. We can meet a tender at the quay for yachts lying at anchor in the deep bay, coordinated with the crew.",
      },
      {
        question: "Do you offer a return transfer to Nice Airport?",
        answer:
          "Yes. Many clients book both the arrival and the departure for a seamless experience throughout their stay in Villefranche.",
      },
    ],
  },
  "menton-transfer": {
    slug: "menton-transfer",
    path: "/our-services/transfers/menton-transfer",
    metadata: {
      title: "Nice Airport to Menton Transfer | Private Driver | Kokolimo",
      description:
        "Private Nice Airport to Menton transfer from about €120, fixed in advance, with meet-and-greet and a chauffeur to the old town, the gardens and the hotels.",
      keywords: [
        "Menton transfer",
        "Nice airport to Menton",
        "Menton chauffeur transfer",
        "Menton private transfer",
        "transfer Menton Italian border",
      ],
    },
    serviceLabel: "Menton Transfer",
    heroTitle: "Nice Airport to Menton Transfer",
    heroDescription:
      "Your chauffeur meets you at Nice Airport for your transfer to Menton, around 40 minutes east past Monaco. We take you to the old town, the gardens or the seafront.",
    heroImageSrc: "/assets/images/services/menton-transfer.webp",
    heroImageAlt: "Private chauffeur transfer to Menton with a black Mercedes on the seafront",
    introTitle: "To the Edge of Italy",
    introDescription:
      "Menton sits at the far eastern end of the coast by the Italian border, a scenic transfer past Monaco best handled door to door.",
    panels: [
      {
        title: "Met at Your Flight",
        text: "We track the flight, meet you in arrivals with a name board, take the luggage and drive you east along the coast past Monaco.",
        theme: "dark",
      },
      {
        title: "Old Town & Gardens",
        text: "Menton is the warmest town on the coast, and we drive you to its Italianate old town, its famous gardens and its seafront hotels.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Menton Stays",
    audienceDescription:
      "Built for arrivals into Menton and the far eastern coast, where the run past Monaco calls for a comfortable transfer.",
    audienceCards: [
      {
        title: "Hotels & Old Town",
        text: "Direct arrivals to the seafront hotels and the pastel Italianate old town, with luggage handled.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Menton hotel icon",
      },
      {
        title: "Gardens & Festival",
        text: "Transfers for the famous gardens and the Fête du Citron, the Lemon Festival, each February.",
        icon: "/assets/icons/services/museum.webp",
        iconAlt: "Menton gardens icon",
      },
      {
        title: "Italy & the Border",
        text: "A chauffeur for onward trips across the nearby Italian border to Ventimiglia and the Riviera dei Fiori.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Menton border icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Other routes from Nice Airport, each at a fixed price confirmed before you book.",
    localLinks: transferLinks,
    cta: {
      title: "Need a Menton Transfer?",
      description:
        "Send us your arrival or departure details and we will organize a chauffeur from Nice Airport east to Menton.",
      buttonText: "Request Menton Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Menton?",
        answer:
          "It takes around 40 minutes to drive east along the coast past Monaco to Menton, at the far eastern end of the French Riviera.",
      },
      {
        question: "How much is a Nice Airport to Menton transfer?",
        answer:
          "As a guide, transfers from Nice Airport start at around €120. We quote you a fixed price in advance, and there is no meter.",
      },
      {
        question: "Can you provide a transfer for the Lemon Festival?",
        answer:
          "Yes. We run transfers to Menton for the Fête du Citron each February, dropping you in the centre and collecting you after.",
      },
      {
        question: "Can you cross into Italy from Menton?",
        answer:
          "Yes. Menton is on the Italian border, and we can arrange onward trips to Ventimiglia and the nearby Riviera dei Fiori.",
      },
      {
        question: "Do you offer a return transfer to Nice Airport?",
        answer:
          "Yes. Many clients book both the arrival and the departure for a seamless experience throughout their stay in Menton.",
      },
    ],
  },
};

export const hourlyChauffeurPages: Record<string, ServicePageConfig> = {
  nice: {
    slug: "nice",
    path: "/our-services/hourly-chauffeur/nice",
    metadata: {
      title: "Nice Hourly Chauffeur Service | Private Driver | Kokolimo",
      description:
        "Private hourly chauffeur in Nice, starting from €90 an hour or €750 a full day, for business meetings, luxury hotels, shopping and airport pickups.",
      keywords: [
        "hourly chauffeur Nice",
        "private driver Nice",
        "chauffeur service Nice",
        "Nice chauffeur by the hour",
        "private chauffeur Nice",
        "business chauffeur Nice",
        "luxury chauffeur Nice",
        "Nice airport chauffeur",
        "French Riviera chauffeur service",
      ],
    },
    serviceLabel: "Nice",
    heroTitle: "Hourly Chauffeur Service in Nice",
    heroDescription:
      "Your private chauffeur stays on standby to take you between seafront hotels, shops, appointments and meetings across Nice.",
    heroImageSrc: "/assets/images/services/nice-transfer.jpeg",
    heroImageAlt: "Hourly chauffeur service in Nice",
    introTitle: "An Hourly Chauffeur for Your Day in Nice",
    introDescription:
      "Nice often mixes hotels, old town access, lunch reservations, shopping, and nearby movement in one fluid day.",
    panels: [
      {
        title: "City Rhythm",
        text: "Hourly chauffeur service works especially well in Nice when the day includes several stops and no exact return time.",
        theme: "dark",
      },
      {
        title: "Guest Comfort",
        text: "You book once, and the same premium car stays available between errands, meetings and leisure time.",
        theme: "light",
      },
    ],
    audienceTitle: "Best For",
    audienceAccent: "Nice Itineraries",
    audienceDescription:
      "This format fits city-based schedules where comfort, waiting time, and flexibility matter more than a single route.",
    audienceCards: [
      {
        title: "Hotel Guests",
        text: "Easy movement between seafront hotels, restaurants, shopping streets, and return trips throughout the day.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Hotel guest icon",
      },
      {
        title: "Business Meetings",
        text: "Quiet transfers and standby time between appointments across Nice and nearby business districts.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Business meeting icon",
      },
      {
        title: "Lifestyle Days",
        text: "Shopping, lunch, wellness, and city errands handled with one dedicated chauffeur from start to finish.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Lifestyle day icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription:
      "Compare hourly chauffeur service in other Riviera destinations.",
    localLinks: hourlyCityLinks,
    cta: {
      title: "Need an Hourly Chauffeur in Nice?",
      description:
        "We can shape the service around your hotel, meetings, and expected stops for the day.",
      buttonText: "Book Nice Chauffeur",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How does an hourly chauffeur service in Nice work?",
        answer:
          "Your chauffeur and vehicle remain at your disposal for the duration of your booking. Whether you need transportation between hotels, business meetings, restaurants, shopping districts, or multiple destinations, your driver stays available and adapts to your schedule throughout the day.",
      },
      {
        question: "Can I book an hourly chauffeur from Nice Airport?",
        answer:
          "Yes. We can meet you directly at Nice Côte d’Azur Airport and remain available for meetings, hotel transfers, sightseeing, shopping, or appointments across Nice and the French Riviera.",
      },
      {
        question: "What are the most popular destinations in Nice for hourly chauffeur bookings?",
        answer:
          "Typical stops with an hourly chauffeur are the Promenade des Anglais, Vieux-Nice, Port Lympia, Avenue Jean Médecin, luxury hotels and Nice Côte d’Azur Airport. Business appointments across the city are common too. Many bookings also include day trips to Monaco, Cannes, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat and Saint-Paul-de-Vence.",
      },
      {
        question: "Can the chauffeur wait while I attend meetings or appointments?",
        answer:
          "Absolutely. Your chauffeur remains on standby between stops, allowing you to attend meetings, lunches, shopping appointments, or events without arranging additional transportation.",
      },
      {
        question: "Which vehicle is best for an hourly chauffeur service in Nice?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and clients travelling with additional luggage. We can recommend the most suitable vehicle based on your itinerary.",
      },
      {
        question: "Is an hourly chauffeur service suitable for business travel in Nice?",
        answer:
          "Yes. Many clients use this service for conferences, corporate meetings, roadshows, hotel visits, and business appointments. A dedicated chauffeur ensures punctuality, flexibility, and a seamless travel experience throughout the day.",
      },
    ],
  },
  cannes: {
    slug: "cannes",
    path: "/our-services/hourly-chauffeur/cannes",
    metadata: {
      title: "Cannes Hourly Chauffeur Service | kokolimo",
      description:
        "Private hourly chauffeur service in Cannes for congresses, Croisette hotels, shopping, dinners, and flexible premium travel.",
      keywords: [
        "hourly chauffeur Cannes",
        "private driver Cannes by the hour",
        "Cannes congress chauffeur",
        "Croisette chauffeur service",
        "Cannes standby driver",
      ],
    },
    serviceLabel: "Cannes",
    heroTitle: "Hourly Chauffeur Service in Cannes",
    heroDescription:
      "A dedicated chauffeur for Croisette stays, congress schedules, shopping, dinners, and multi-stop days in Cannes.",
    heroImageSrc: "/assets/images/services/cannes-transfer.webp",
    heroImageAlt: "Hourly chauffeur service in Cannes",
    introTitle: "Cannes Works Best With Standby Service",
    introDescription:
      "Cannes often means shifting timing between hotels, events, and dinner plans, so one chauffeur on standby keeps the day controlled.",
    panels: [
      {
        title: "Congress & Event Use",
        text: "Hourly service is especially valuable when event schedules move, guests split, or arrival windows tighten throughout the day.",
        theme: "dark",
      },
      {
        title: "Leisure & Hospitality",
        text: "For hotel guests, shopping, beach lunches, and evening plans, one dedicated vehicle removes transport friction between each stop.",
        theme: "light",
      },
    ],
    practicalTitle: "Cannes Hourly Chauffeur Rates",
    practicalDescription:
      "Choose the vehicle that suits your party and schedule. Hourly and eight-hour guide rates are confirmed in writing with the booking conditions for your date.",
    practicalDetails: [
      {
        title: "Mercedes E-Class",
        text: "From €90 per hour or €750 for eight hours, with chauffeur standby between the agreed stops.",
      },
      {
        title: "Mercedes V-Class",
        text: "From €110 per hour or €880 for eight hours for groups and clients requiring additional luggage space.",
      },
      {
        title: "S-Class and Maybach",
        text: "S-Class from €130 per hour or €1,040 for eight hours; Maybach from €300 per hour or €2,400 for eight hours.",
      },
      {
        title: "Minimum time and distance",
        text: "Minimum booking: four hours, including 20 kilometres per booked hour (80 kilometres for four hours). Any extra distance, toll or event-access charge is confirmed in advance.",
      },
    ],
    audienceTitle: "Best For",
    audienceAccent: "Cannes Timing",
    audienceDescription:
      "Ideal for congress schedules, Croisette hotels, shopping, dinners and multi-stop days when the vehicle needs to remain available.",
    audienceCards: [
      {
        title: "Congress Guests",
        text: "Standby service between venues, hotels, dinners, and private meetings.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Congress icon",
      },
      {
        title: "Luxury Stays",
        text: "A polished chauffeur setup for Croisette hotels, shopping, and premium hospitality routines.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Luxury stay icon",
      },
      {
        title: "Evening Schedules",
        text: "Use one chauffeur for arrivals, waiting time, and the return after dinner or nightlife.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Evening icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription:
      "Compare hourly chauffeur service in other Riviera destinations.",
    localLinks: hourlyCityLinks,
    cta: {
      title: "Book a Cannes Hourly Chauffeur",
      description:
        "Tell us whether the day is business, leisure, or event-focused and we will shape the right standby service.",
      buttonText: "Book Cannes Chauffeur",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Why book an hourly chauffeur service in Cannes?",
        answer:
          "An hourly chauffeur service gives you complete flexibility throughout the day. Whether you are attending meetings, visiting luxury boutiques, enjoying restaurants along La Croisette, or moving between multiple locations, your chauffeur remains available whenever you need transportation."
      },
      {
        question: "Can I hire a chauffeur during the Cannes Film Festival?",
        answer:
          "Yes. Our hourly chauffeur service is particularly popular during the Cannes Film Festival, providing reliable transportation between hotels, events, private venues, restaurants, and the Palais des Festivals throughout the day and evening."
      },
      {
        question: "Is the service suitable for Cannes Lions and business events?",
        answer:
          "Absolutely. Many clients use our hourly chauffeur service for conferences, corporate meetings, networking events, and executive travel during Cannes Lions and other international business events held in Cannes."
      },
      {
        question: "Can the chauffeur wait while I attend meetings or events?",
        answer:
          "Yes. Your chauffeur remains on standby during the booking period, allowing you to attend meetings, lunches, shopping appointments, or events without arranging additional transportation."
      },
      {
        question: "Which destinations can I visit from Cannes with an hourly chauffeur?",
        answer:
           "Popular destinations include Monaco, Nice, Antibes, Cap d’Antibes, Saint-Paul-de-Vence, Saint-Tropez, and other locations across the French Riviera. Many clients also combine several destinations within the same day while keeping the same chauffeur available throughout the journey."
      },
      {
        question: "Which vehicle is recommended for hourly chauffeur bookings in Cannes?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is often preferred by families, small groups, and event attendees requiring additional space and comfort."
      },
      {
        question: "What are the most popular reasons to book an hourly chauffeur in Cannes?",
        answer:
          "Clients frequently book an hourly chauffeur for luxury hotel transfers, meetings, shopping on La Croisette, private villa visits, business events, fine dining, yacht access, Port Canto, and transportation throughout Cannes and the French Riviera.",
      }
    ]
  },
  monaco: {
    slug: "monaco",
    path: "/our-services/hourly-chauffeur/monaco",
    metadata: {
      title: "Monaco Hourly Chauffeur Service | kokolimo",
      description:
         "Book a private hourly chauffeur in Monaco for business meetings, yacht visits, luxury hotels, shopping, and VIP travel across Monaco and the French Riviera.",
      keywords: [
        "hourly chauffeur Monaco",
        "Monaco private driver by the hour",
        "Monaco executive chauffeur",
        "yacht chauffeur Monaco",
        "Monaco standby car service",
      ],
    },
    serviceLabel: "Monaco",
    heroTitle: "Hourly Chauffeur Service in Monaco",
    heroDescription:
      "A premium chauffeur on standby for hotels, business meetings, yacht access, hospitality, and controlled movement across Monaco.",
    heroImageSrc: "/assets/images/services/monaco.webp",
    heroImageAlt: "Hourly chauffeur service in Monaco",
    introTitle: "Standby Service Fits Monaco Best",
    introDescription:
      "Monaco schedules are often dense, prestigious, and timing-sensitive, which makes hourly chauffeur service particularly effective.",
    panels: [
      {
        title: "Executive Flow",
        text: "Move between hotels, meetings, restaurants, and hospitality venues with one chauffeur handling the transitions discreetly.",
        theme: "dark",
      },
      {
        title: "Prestige Logistics",
        text: "Yacht access, hotel arrivals, business hospitality, and VIP timing all benefit from a controlled standby format.",
        theme: "light",
      },
    ],
    practicalTitle: "Monaco Hourly Chauffeur Rates",
    practicalDescription:
      "Guide rates cover a dedicated vehicle and chauffeur on standby, with a four-hour minimum and 20 kilometres included per booked hour.",
    practicalDetails: [
      {
        title: "Mercedes E-Class",
        text: "From €90 per hour or €750 for eight hours for meetings, hotels, restaurants and appointments.",
      },
      {
        title: "Mercedes V-Class",
        text: "From €110 per hour or €880 for eight hours for groups, yacht guests and additional luggage.",
      },
      {
        title: "S-Class and Maybach",
        text: "S-Class from €130 per hour or €1,040 for eight hours; Maybach from €300 per hour or €2,400 for eight hours.",
      },
      {
        title: "Minimum time and distance",
        text: "Minimum booking: four hours, including 20 kilometres per booked hour (80 kilometres for four hours). Any extra distance, toll, road-closure or event-access charge is confirmed in advance.",
      },
    ],
    audienceTitle: "Made For",
    audienceAccent: "Monaco Standards",
    audienceDescription:
      "For business meetings, hotel stays, yacht visits and event schedules that require discreet transport to remain available.",
    audienceCards: [
      {
        title: "Executive Clients",
        text: "A quiet, efficient setup for meetings, hotels, and hospitality around a demanding agenda.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Executive client icon",
      },
      {
        title: "VIP Stays",
        text: "Reliable standby transport for hotels, luxury retail, fine dining, and guest movement throughout the day.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "VIP stay icon",
      },
      {
        title: "Yacht & Port Access",
        text: "Smooth movement between airport arrivals, hotels, marinas, and meeting points with premium execution.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Yacht access icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription:
      "Compare hourly chauffeur service in other Riviera destinations.",
    localLinks: hourlyCityLinks,
    cta: {
      title: "Need a Monaco Chauffeur on Standby?",
      description:
        "We can organize a refined hourly setup around your hotel, meeting schedule, or yacht access plan.",
      buttonText: "Book Monaco Chauffeur",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Why choose an hourly chauffeur service in Monaco?",
        answer:
          "An hourly chauffeur service offers complete flexibility throughout the day. Whether you have business meetings, luxury shopping, restaurant reservations, yacht visits, or multiple appointments, your chauffeur remains available and adapts to your schedule."
      },
      {
        question: "Can I book an hourly chauffeur during the Monaco Grand Prix?",
        answer:
          "Yes. Hourly chauffeur service is one of the most convenient transportation options during the Monaco Grand Prix, allowing flexible travel between hotels, hospitality venues, yachts, restaurants, and event locations throughout the Principality."
      },
      {
        question: "Is the service available for the Monaco Yacht Show?",
        answer:
          "Absolutely. Many clients use our hourly chauffeur service during the Monaco Yacht Show for airport arrivals, yacht visits, business meetings, hotel transfers, and evening events throughout Monaco and the French Riviera."
      },
      {
        question: "Can the chauffeur wait while I attend meetings, events, or shopping appointments?",
        answer:
          "Yes. Your chauffeur remains on standby during the booking period, ensuring seamless transportation between meetings, luxury boutiques, restaurants, hotels, and private events without the need to arrange additional transport."
      },
      {
        question: "Which locations are most popular for hourly chauffeur bookings in Monaco?",
        answer:
          "Clients frequently travel between Monte-Carlo, the Casino de Monte-Carlo, Hôtel de Paris, Port Hercule, Monaco Yacht Club, luxury residences, business venues, and nearby destinations such as Nice, Cannes, Èze, Saint-Jean-Cap-Ferrat and Saint-Tropez."
      },
      {
        question: "Which vehicle is best for an hourly chauffeur service in Monaco?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, event attendees, and clients requiring additional space and comfort throughout the day."
      }
    ]
  },
  "saint-tropez": {
    slug: "saint-tropez",
    path: "/our-services/hourly-chauffeur/saint-tropez",
    metadata: {
      title: "Saint-Tropez Hourly Chauffeur Service | Kokolimo",
      description:
        "Hire a private chauffeur in Saint-Tropez by the hour, starting from €90 an hour or €750 a full day, for villas, yachts, beach clubs and restaurants.",
      keywords: [
        "hourly chauffeur Saint-Tropez",
        "Saint-Tropez private driver by the hour",
        "beach club chauffeur Saint-Tropez",
        "villa chauffeur Saint-Tropez",
        "standby chauffeur Saint-Tropez",
      ],
    },
    serviceLabel: "Saint-Tropez",
    heroTitle: "Hourly Chauffeur Service in Saint-Tropez",
    heroDescription:
      "One chauffeur stays with you between villas, beach clubs, lunch and shopping, and adapts as summer plans change.",
    heroImageSrc: "/assets/images/services/saint-tropez.webp",
    heroImageAlt: "Hourly chauffeur service in Saint-Tropez",
    introTitle: "Saint-Tropez Rewards Flexibility",
    introDescription:
      "Summer movement in Saint-Tropez is often fluid, status-driven, and schedule-sensitive, which makes hourly chauffeur service the right format.",
    panels: [
      {
        title: "Summer Logistics",
        text: "Beach clubs, villas, lunches, and evening plans create a day that changes as it unfolds, so one chauffeur and vehicle simplify everything.",
        theme: "dark",
      },
      {
        title: "Premium Pace",
        text: "There is no waiting for a car between stops. Your discreet, premium vehicle stays available from start to finish.",
        theme: "light",
      },
    ],
    audienceTitle: "Perfect For",
    audienceAccent: "Saint-Tropez Days",
    audienceDescription:
      "Ideal for villa stays, beach clubs, shopping, dining and evening plans around Saint-Tropez.",
    audienceCards: [
      {
        title: "Villa Guests",
        text: "Private standby service for arrivals, lunches, shopping, and evening returns without repeated bookings.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Villa guest icon",
      },
      {
        title: "Beach Club Plans",
        text: "Controlled chauffeur timing for beach clubs, marinas, and high-demand summer movements.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Beach club icon",
      },
      {
        title: "Flexible Leisure",
        text: "A polished setup for clients who want freedom throughout the day without handling the transport layer themselves.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Flexible leisure icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription:
      "Compare hourly chauffeur service in other Riviera destinations.",
    localLinks: hourlyCityLinks,
    cta: {
      title: "Book a Saint-Tropez Chauffeur",
      description:
        "Share your villa, club, lunch, or evening plans and we will shape the hourly service around them.",
      buttonText: "Book Saint-Tropez Chauffeur",
      buttonHref: "/contact-me",
    },
    faq: [
    {
      question: "Why choose an hourly chauffeur service in Saint-Tropez?",
      answer:
        "An hourly chauffeur service offers complete flexibility throughout the day. Whether you are visiting beach clubs, attending private events, enjoying lunch by the sea, shopping, or moving between villas and hotels, your chauffeur remains available whenever you need transportation.",
    },
    {
      question: "Can I book a chauffeur for beach clubs and restaurants in Saint-Tropez?",
      answer:
        "Yes. Many clients use our hourly chauffeur service for transportation between beach clubs, restaurants, luxury hotels, marinas, and private residences. Your chauffeur remains on standby throughout the booking, allowing you to move freely without arranging separate transfers.",
    },
    {
      question: "Is the service suitable for yacht charters and marina transfers?",
      answer:
        "Absolutely. Our hourly chauffeur service is frequently used for yacht departures, marina transfers, port arrivals, and VIP guest transportation. Your chauffeur can remain available throughout the day to accommodate changing schedules and last-minute requests.",
    },
    {
      question: "Can the chauffeur wait while I enjoy lunch, shopping, or private events?",
      answer:
        "Yes. Your chauffeur remains available during the entire booking period, ensuring seamless transportation between restaurants, boutiques, beach clubs, hotels, villas, and event venues across Saint-Tropez and the surrounding area.",
    },
    {
      question: "What are the most popular destinations for hourly chauffeur bookings in Saint-Tropez?",
      answer:
        "Clients often head to Pampelonne Beach, Club 55, Nikki Beach and the Port of Saint-Tropez, or to villas, five-star hotels, beach restaurants and nearby destinations on the French Riviera.",
    },
    {
      question: "Which vehicle is recommended for an hourly chauffeur service in Saint-Tropez?",
      answer:
        "The Mercedes S-Class suits executive and VIP travel. The Mercedes V-Class is the better fit for families, groups, beach club transfers and guests with extra luggage or shopping bags.",
    },
  ]
  },
  "megeve": {
    slug: "megeve",
    path: "/our-services/hourly-chauffeur/megeve",
    metadata: {
      title: "Megève Chauffeur Service | Private Driver | Kokolimo",
      description:
       "Private hourly chauffeur service in Megève, starting from €90 an hour or €750 a full day, for ski holidays, luxury hotels, chalets, shopping and dining.",
      keywords: [
        "hourly chauffeur Megève",
        "private driver Megève",
        "chauffeur service Megève",
        "Megève luxury chauffeur",
        "chauffeur at disposal Megève",
      ],
    },
    serviceLabel: "Megève",
    heroTitle: "Hourly Chauffeur Service in Megève",
    heroDescription:
      "In Megève, a private chauffeur is on hand for hotel and chalet stays, shopping, restaurants, ski holidays and trips around the French Alps.",
    heroImageSrc: "/assets/images/services/megeve.webp", 
    heroImageAlt: "Luxury hourly chauffeur service in Megève",
    introTitle: "Hourly Chauffeur Service for Luxury Stays in Megève",
    introDescription:
      "Megève combines luxury hotels, private chalets, fine dining, shopping, and mountain experiences. An hourly chauffeur service allows you to move freely throughout the day while enjoying comfort, discretion, and complete flexibility.",    panels: [
      {
        title: "Flexible Alpine Travel",
        text: "Whether you're travelling between your chalet, the village centre, ski facilities, restaurants, or nearby destinations, your chauffeur remains available throughout the day.",
        theme: "dark",
      },
      {
        title: "Premium Guest Experience",
        text: "Avoid the challenges of parking, winter driving, and coordinating multiple transfers. Your vehicle and chauffeur stay ready whenever you need them.",
        theme: "light",
      },
    ],
    audienceTitle: "Designed For",
    audienceAccent: "Megève Guests",
    audienceDescription:
       "Our hourly chauffeur service is ideal for visitors seeking flexibility, comfort, and seamless transportation during their stay in Megève.",    audienceCards: [
      {
        title: "Luxury Hotel Guests",
        text: "Travel effortlessly between hotels, boutiques, restaurants, and leisure activities throughout Megève.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Luxury hotel guest icon",
      },
      {
        title: "Chalet Residents",
        text: "Enjoy convenient transportation between private chalets, ski facilities, shopping districts, and dining venues.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Chalet resident icon",
      },
      {
        title: "Flexible Leisure",
        text: "A polished setup for clients who want freedom throughout the day without handling the transport layer themselves.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Flexible leisure icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription: 
      "Explore our hourly chauffeur services across the French Riviera and premium Alpine destinations.",    
      localLinks: hourlyCityLinks,
    cta: {
    title: "Need an Hourly Chauffeur in Megève?",
      description:
        "Share your itinerary, hotel or chalet location, and planned activities, and we'll recommend the ideal chauffeur service for your stay.",
      buttonText: "Book a Chauffeur in Megève",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Why choose an hourly chauffeur service in Megève?",
        answer:
          "An hourly chauffeur service offers complete flexibility throughout your stay. Whether you're travelling between your chalet, luxury hotel, restaurants, boutiques, or ski facilities, your chauffeur remains available whenever you need transportation.",
      },
      {
        question: "Can I book a chauffeur for a full day in Megève?",
        answer:
          "Yes. Many clients reserve a chauffeur for half-day or full-day bookings, allowing seamless transportation throughout Megève and the surrounding Alpine region.",
      },
      {
        question: "Is the service suitable for ski holidays?",
        answer:
          "Absolutely. Our hourly chauffeur service is ideal for ski holidays, providing comfortable transportation between chalets, hotels, ski areas, restaurants, and après-ski venues.",
      },
      {
        question: "Can the chauffeur wait while I shop, dine, or attend appointments?",
        answer:
          "Yes. Your chauffeur remains on standby during the booking period, ensuring smooth transportation throughout the day without the need to arrange additional transfers.",
      },
      {
        question: "Which locations are commonly visited during hourly bookings in Megève?",
        answer:
          "Clients frequently travel between luxury hotels, private chalets, Mont d'Arbois, the village centre, restaurants, boutiques, and nearby Alpine destinations.",
      },
      {
        question: "Which vehicle is best for an hourly chauffeur service in Megève?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
  "courchevel": {
    slug: "courchevel",
    path: "/our-services/hourly-chauffeur/courchevel",
    metadata: {
      title: "Courchevel Chauffeur Service | Private Driver | Kokolimo",
      description:
        "Private hourly chauffeur service in Courchevel, starting from €90 an hour or €750 a full day, for luxury hotels, chalets, ski holidays, shopping and dining.",
      keywords: [
        "hourly chauffeur Courchevel",
        "private driver Courchevel",
        "chauffeur service Courchevel",
        "Courchevel luxury chauffeur",
        "chauffeur at disposal Courchevel",
      ],
    },
    serviceLabel: "Courchevel",
    heroTitle: "Hourly Chauffeur Service in Courchevel",
    heroDescription:
      "From chalet or hotel to the slopes, shops and restaurants, a private chauffeur waits on standby in Courchevel and across the French Alps.",
    heroImageSrc: "/assets/images/services/courchevel.webp",
    heroImageAlt: "Luxury hourly chauffeur service in Courchevel",
    introTitle: "Premium Chauffeur Service for Courchevel Stays",
    introDescription:
      "Courchevel is one of the world's most prestigious ski destinations, known for its luxury hotels, private chalets, fine dining, and exclusive alpine experiences. An hourly chauffeur service gives you complete flexibility while enjoying comfort, discretion, and seamless transportation throughout your stay.",    panels: [
      {
        title: "Your Chauffeur Throughout the Day",
        text: "Plans change during the day, and your chauffeur stays available between your chalet, the slopes, restaurants, boutiques and nearby resorts.",
        theme: "dark",
      },
      {
        title: "A Seamless Guest Experience",
        text: "Forget parking, winter driving and juggling several transfers. Your chauffeur and vehicle remain at your disposal throughout the booking.",
        theme: "light",
      },
    ],
    audienceTitle: "Perfect For",
    audienceAccent: "Courchevel Guests",
    audienceDescription:
      "Our hourly chauffeur service is designed for travellers seeking flexibility, comfort, and premium transportation throughout their stay in Courchevel.",    audienceCards: [
      {
        title: "Luxury Hotel Guests",
         text: "Move effortlessly between five-star hotels, restaurants, boutiques, and leisure activities while enjoying a dedicated chauffeur service.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Luxury Hotel icon",
      },
      {
        title: "Private Chalet Residents",
        text: "Travel comfortably between chalets, ski areas, shopping districts, restaurants, and nearby Alpine destinations.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Chalet icon",
      },
      {
        title: "Ski & Leisure Travel",
        text: "Perfect for flexible schedules, multiple stops, family travel, and full-day chauffeur service throughout Courchevel.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Flexible leisure icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription: 
      "Explore our hourly chauffeur services across the French Riviera and premium Alpine destinations.",    
    localLinks: hourlyCityLinks,
    cta: {
      title: "Need an Hourly Chauffeur in Courchevel?",
      description:
       "Share your chalet, hotel, or travel plans and we'll recommend the ideal chauffeur service for your stay.",
      buttonText: "Book a Chauffeur in Courchevel",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Why choose an hourly chauffeur service in Courchevel?",
        answer:
          "An hourly chauffeur service offers complete flexibility throughout your stay. Your chauffeur stays on call for every trip between chalets, luxury hotels, restaurants, boutiques and the ski lifts.",
      },
      {
        question: "Can I keep the same chauffeur for an entire day in Courchevel?",
        answer:
          "Absolutely. Many clients reserve a chauffeur for half-day or full-day bookings, allowing continuous transportation between hotels, chalets, restaurants, shopping areas, ski resorts, and business appointments throughout Courchevel.",
      },
      {
        question: "Is an hourly chauffeur service suitable for ski holidays in Courchevel?",
        answer:
          "Yes. An hourly chauffeur is particularly popular during ski holidays, providing seamless transportation between Courchevel 1850, Courchevel 1650, private chalets, ski facilities, hotels, and après-ski venues. Your chauffeur remains available throughout the day, allowing maximum flexibility without the need to arrange separate transfers.",
      },
      {
        question: "Can the chauffeur wait while I shop, dine, or attend activities?",
        answer:
          "Yes. Your chauffeur remains available throughout the booking period, ensuring smooth transportation between destinations without arranging additional transfers.",
      },
      {
        question: "Which locations are commonly served during hourly chauffeur bookings in Courchevel?",
        answer:
          "Our chauffeurs regularly serve luxury hotels and residences throughout Courchevel, including Cheval Blanc Courchevel, Airelles Courchevel, Six Senses Residences Courchevel, private chalets, fine dining venues, ski resorts, and nearby Alpine destinations.",
      },
      {
        question: "Is an hourly chauffeur service suitable for luxury chalet stays in Courchevel?",
        answer:
          "Yes. Many guests staying in private chalets use an hourly chauffeur for transportation between ski resorts, restaurants, luxury hotels, shopping areas, and private events while enjoying complete flexibility throughout the day.",
      },
      {
        question: "Which vehicle is recommended for an hourly chauffeur service in Courchevel?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
  "chamonix": {
    slug: "chamonix",
    path: "/our-services/hourly-chauffeur/chamonix",
    metadata: {
      title: "Chamonix Chauffeur Service | Private Driver | Kokolimo",
      description:
       "Private hourly chauffeur service in Chamonix, starting from €90 an hour or €750 a full day, for ski holidays, luxury hotels and mountain excursions.",
      keywords: [
        "hourly chauffeur Chamonix",
        "private driver Chamonix",
        "chauffeur service Chamonix",
        "Chamonix luxury chauffeur",
        "chauffeur at disposal Chamonix",
      ],
    },
    serviceLabel: "Chamonix",
    heroTitle: "Hourly Chauffeur Service in Chamonix",
    heroDescription:
       "Keep a private chauffeur on call in Chamonix for hotels, ski holidays, mountain outings, restaurants and shopping, and for trips across the Alps.",
    heroImageSrc: "/assets/images/services/chamonix.webp",
    heroImageAlt: "Luxury hourly chauffeur service in Chamonix",
    introTitle: "Flexible Chauffeur Service for Chamonix Stays",
    introDescription: "Chamonix attracts visitors from around the world for skiing, mountain adventures, luxury accommodation, and year-round alpine experiences. An hourly chauffeur service allows you to travel comfortably between destinations while keeping complete flexibility throughout the day.",    panels: [
      {
        title: "Explore Chamonix Freely",
        text: "From luxury hotels and ski areas to restaurants and mountain attractions, your chauffeur remains available whenever your plans evolve throughout the day.",
        theme: "dark",
      },
      {
        title: "Comfort in Every Season",
        text: "Whether visiting during winter ski season or summer mountain escapes, enjoy seamless transportation without worrying about parking, traffic, or changing schedules.",
        theme: "light",
      },
    ],
    audienceTitle: "Perfect For",
    audienceAccent: "Chamonix Visitors",
    audienceDescription: "Our hourly chauffeur service is ideal for travellers seeking flexibility, comfort, and premium transportation throughout their stay in Chamonix.",
    audienceCards: [
      {
        title: "Luxury Hotel Guests",
        text: "Move easily between hotels, restaurants, boutiques, and attractions while enjoying a dedicated chauffeur throughout the day.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Luxury hotel icon",
      },
      {
        title: "Ski Holidays",
        text: "Travel comfortably between hotels, chalets, ski lifts, and après-ski venues with a chauffeur available whenever needed.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Ski lodge icon",
      },
      {
        title: "Mountain Experiences",
        text: "Ideal for visitors exploring Chamonix's alpine attractions, scenic viewpoints, and nearby destinations throughout the region.",
        icon: "/assets/icons/services/mountain.webp",
        iconAlt: "Mountain experience icon",
      },
    ],
    localLinksTitle: "Choose Another Destination",
    localLinksDescription:
        "Explore our hourly chauffeur services across the French Riviera and premium Alpine destinations.",    
    localLinks: hourlyCityLinks,
    cta: {
      title: "Need an Hourly Chauffeur in Chamonix?",
      description:
    "Share your itinerary, accommodation, and travel plans, and we'll recommend the ideal chauffeur service for your stay.",
      buttonText: "Book a Chauffeur in Chamonix",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Why choose an hourly chauffeur service in Chamonix?",
        answer:
          "An hourly chauffeur service gives you complete flexibility throughout your stay. Your chauffeur stays available whenever you need a car between hotels, ski areas, restaurants, shops and mountain attractions.",
      },
      {
        question: "Can I book a chauffeur for a full day in Chamonix?",
        answer:
          "Yes. Many clients choose half-day or full-day chauffeur bookings to enjoy maximum flexibility while exploring Chamonix and the surrounding Alpine region.",
      },
      {
        question: "Is the service suitable for ski holidays?",
        answer:
          "Absolutely. Our hourly chauffeur service is ideal for ski holidays, providing comfortable transportation between hotels, chalets, ski lifts, restaurants, and après-ski venues.",
      },
      {
        question: "Can the chauffeur wait while I dine, shop, or attend activities?",
        answer:
          "Yes. Your chauffeur remains available throughout the booking period, ensuring smooth transportation between destinations without the need to arrange separate transfers.",
      },
      {
        question: "Where do clients usually go with an hourly chauffeur in Chamonix?",
        answer:
          "Trips often link luxury hotels, the town centre and ski areas with restaurants, mountain attractions and nearby spots in the Chamonix Valley.",
      },
      {
        question: "Which vehicle is recommended for an hourly chauffeur service in Chamonix?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
};

export const chauffeurTourPages: Record<string, ServicePageConfig> = {
  nice: {
    slug: "nice",
    path: "/our-services/private-tours/nice",
    metadata: {
      title: "Nice Private Chauffeur Tour | Private Driver | Kokolimo",
      description:
        "Private chauffeur tour in Nice, starting from €90 an hour or €750 a full day, with city touring, coastal viewpoints and old town stops.",
      keywords: [
        "chauffeur tour Nice",
        "private tour Nice driver",
        "Nice private sightseeing chauffeur",
        "Nice old town private tour",
        "luxury tour Nice",
      ],
    },
    serviceLabel: "Nice Tour",
    heroTitle: "Private Tour in Nice",
    heroDescription:
      "Your private chauffeur takes you on a relaxed tour of Nice and its coastline through the day.",
    heroImageSrc: "/assets/images/services/nice-transfer.jpeg",
    heroImageAlt: "Private chauffeur tour in Nice",
    introTitle: "Nice at Your Own Pace",
    introDescription:
      "Nice works best when the day blends old town charm, seafront movement, and selected stops without the guest managing transport details.",
    panels: [
      {
        title: "City + Coast",
        text: "We can combine the old town, seafront viewpoints and nearby scenic drives in one day, with hotel pickup.",
        theme: "dark",
      },
      {
        title: "Private Touring Comfort",
        text: "The guest experiences Nice with one premium vehicle, one chauffeur, and a pace that feels elegant rather than rushed.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Nice Discovery",
    audienceDescription:
      "This route suits travelers who want to experience Nice comfortably without navigating logistics between viewpoints and city stops.",
    audienceCards: [
      {
        title: "First-Time Visitors",
        text: "A polished introduction to Nice with smooth movement and well-paced stops.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "First-time visitor icon",
      },
      {
        title: "Couples",
        text: "A comfortable way to experience scenic roads, lunch stops, and city highlights together.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Couples icon",
      },
      {
        title: "Leisure Travelers",
        text: "A relaxed day for hotels, viewpoints, old town walking access, and coastal touring.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Leisure traveler icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Compare private chauffeur tours in other Riviera destinations.",
    localLinks: tourCityLinks,
    cta: {
      title: "Plan Your Chauffeur Tour of Nice",
      description:
        "We can shape the day around hotel pickup, sightseeing preferences, lunch timing, and desired pacing.",
      buttonText: "Book Nice Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How do I book a Nice Chauffeur Tour?",
        answer: "You can book a Nice Chauffeur Tour by contacting us directly through our website or phone number."
      },
      {
        question: "What are the operating hours for the Nice Chauffeur Tour?",
        answer: "Our Nice Chauffeur Tour operates 24/7, ensuring you have reliable transportation whenever you need it."
      },
      {
        question: "What are the most popular private tours from Nice?",
        answer:
          "Popular private tours from Nice include Monaco, Èze, Saint-Paul-de-Vence, Cannes, Antibes, Cap d’Antibes, and scenic drives along the French Riviera. Each itinerary can be tailored to your interests and schedule."
      },
      {
        question: "Can I customize my private tour from Nice?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, duration, sightseeing stops, restaurants, shopping areas, and viewpoints that best match your preferences."
      },
      {
        question: "Can the tour start from my hotel or Nice Airport?",
        answer:
          "Absolutely. We can arrange pickup from your hotel, villa, yacht, cruise terminal, or directly from Nice Côte d’Azur Airport, providing a seamless start to your private tour."
      },
      {
        question: "Is a private tour from Nice suitable for a day trip to Monaco?",
        answer:
          "Yes. Monaco is one of the most requested destinations from Nice. A private tour allows you to visit Monte-Carlo, Port Hercule, the Prince's Palace area, luxury boutiques, and panoramic viewpoints at your own pace."
      },
      {
        question: "Can I visit several destinations in one day?",
        answer:
          "Yes. Many guests combine destinations such as Nice, Èze, Monaco, Antibes, and Cannes within the same day. Your itinerary remains flexible throughout the tour."
      },
      {
        question: "Are private tours suitable for families and small groups?",
        answer:
          "Yes. Private tours are ideal for couples, families, and small groups seeking comfort, privacy, and a personalized way to discover the French Riviera."
      },
      {
        question: "Can the tour include restaurants, shopping, or wine tastings?",
        answer:
          "Absolutely. Private tours can include seaside restaurants, luxury shopping, local markets, wineries, and other experiences based on your interests."
      },
      {
        question: "Which vehicle is recommended for a private tour from Nice?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is well suited to families, small groups, and guests requiring additional space and comfort."
      }
    ]
  },
  cannes: {
    slug: "cannes",
    path: "/our-services/private-tours/cannes",
    metadata: {
      title: "Cannes Private Chauffeur Tour | Private Driver | Kokolimo",
      description:
        "Private chauffeur tour in Cannes, starting from €90 an hour or €750 a full day, with the Croisette, shopping streets and seafront touring.",
      keywords: [
        "chauffeur tour Cannes",
        "private tour Cannes driver",
        "Croisette private chauffeur",
        "luxury sightseeing Cannes",
        "Cannes chauffeur day tour",
      ],
    },
    serviceLabel: "Cannes Tour",
    heroTitle: "Private Tour in Cannes",
    heroDescription:
      "Spend a day on the Riviera touring Cannes with a private chauffeur, from the seafront to the shops and the stops in between.",
    heroImageSrc: "/assets/images/services/cannes-transfer.webp",
    heroImageAlt: "Private chauffeur tour in Cannes",
    introTitle: "Cannes as a Curated Day",
    introDescription:
      "Cannes feels best when shopping, boulevard movement, scenic drives, and hospitality stops are woven into one refined route.",
    panels: [
      {
        title: "Croisette Energy",
        text: "We plan your day in Cannes around the seafront, the shops and your lunch or hotel times.",
        theme: "dark",
      },
      {
        title: "Elegant Stops",
        text: "On a chauffeur tour, you move easily between walks, hotel pickups and scenic stops in Cannes.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Cannes Exploration",
    audienceDescription:
      "For guests who want to explore Cannes at an easy pace, with convenient stops for landmarks, shopping and dining.",
    audienceCards: [
      {
        title: "Luxury Visitors",
        text: "A comfortable route for hotels, shopping, lunches, and landmark boulevard movement.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Luxury visitor icon",
      },
      {
        title: "Event Guests",
        text: "An elegant sightseeing format around a Cannes stay before or after business commitments.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Event guest icon",
      },
      {
        title: "Couples & Friends",
        text: "A scenic, comfortable way to enjoy Cannes with stops adjusted to the mood of the day.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Couples and friends icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Compare private chauffeur tours in other Riviera destinations.",
    localLinks: tourCityLinks,
    cta: {
      title: "Book Your Cannes Chauffeur Tour",
      description:
        "Tell us whether you want a lifestyle-led, scenic, or shopping-focused day and we will shape the route accordingly.",
      buttonText: "Book Cannes Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular private tours from Cannes?",
        answer:
          "Popular private tours from Cannes include Monaco, Nice, Antibes, Saint-Paul-de-Vence, Èze, Cap d’Antibes, and Saint-Tropez. Each itinerary can be customized to match your interests and schedule."
      },
      {
        question: "Can I customize my private tour from Cannes?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, timing, sightseeing stops, restaurants, shopping areas, and experiences you would like to include."
      },
      {
        question: "Can the tour start from my hotel, villa, or yacht in Cannes?",
        answer:
          "Absolutely. We can arrange pickup from hotels along La Croisette, private villas, Cannes Vieux Port, Port Canto, or other locations throughout Cannes and the French Riviera."
      },
      {
        question: "Which landmarks are commonly included in a Cannes private tour?",
        answer:
          "Guests often visit La Croisette, the Palais des Festivals, Le Suquet, luxury boutiques, Port Canto, Cap d’Antibes, and scenic viewpoints overlooking the Mediterranean coastline."
      },
      {
        question: "Can I combine Cannes with other French Riviera destinations in one day?",
        answer:
          "Yes. Many guests combine Cannes with Antibes, Nice, Monaco, Saint-Paul-de-Vence, Èze, or Saint-Tropez within a single private tour. The itinerary remains flexible throughout the day."
      },
      {
        question: "Are private tours from Cannes suitable during major events?",
        answer:
          "Yes. Private tours are particularly popular during the Cannes Film Festival, Cannes Lions, and other international events, offering a comfortable and flexible way to explore the French Riviera between engagements."
      },
      {
        question: "Can the tour include fine dining, shopping, or wine experiences?",
        answer:
          "Absolutely. Your itinerary can include Michelin-starred restaurants, luxury shopping, local markets, wine tastings, seaside dining, and other curated experiences tailored to your preferences."
      },
      {
        question: "Which vehicle is recommended for a private tour from Cannes?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, small groups, and guests requiring additional space and comfort."
      }
    ]
  },
  monaco: {
    slug: "monaco",
    path: "/our-services/private-tours/monaco",
    metadata: {
      title: "Monaco Private Chauffeur Tour | Private Driver | Kokolimo",
      description:
        "Private Monaco tour with a chauffeur, starting from €90 an hour or €750 a full day: a 4-hour Monaco itinerary or an 8-hour Monaco and Èze tour.",
      keywords: [
        "chauffeur tour Monaco",
        "private tour Monaco driver",
        "Monaco private sightseeing chauffeur",
        "luxury Monaco day tour",
        "Monaco chauffeur experience",
      ],
    },
    serviceLabel: "Monaco Tour",
    heroTitle: "Private Monaco Tour With a Chauffeur",
    heroDescription:
      "Explore Monte-Carlo, Monaco-Ville, Port Hercule and the coastal viewpoints at your own pace, with door-to-door pickup and a dedicated chauffeur for the full itinerary.",
    heroImageSrc: "/assets/images/services/monaco.webp",
    heroImageAlt: "Private chauffeur tour in Monaco",
    introTitle: "A Monaco Itinerary Built Around Your Time",
    introDescription:
      "Monaco is compact, steep and busy. A private chauffeur connects the Rock, Casino Square, the harbour and Larvotto without repeated parking, taxi queues or rigid group-tour timings.",
    panels: [
      {
        title: "Door-to-Door Sightseeing",
        text: "Start at your hotel, yacht, villa or Nice Airport. Your chauffeur handles the one-way streets and drop-off points while you spend your time at the places you came to see.",
        theme: "dark",
      },
      {
        title: "Flexible Stops and Timing",
        text: "You can linger in Monaco-Ville, lunch near Port Hercule, shop in the Carré d'Or or add Èze. The route adjusts to your interests and reservation times.",
        theme: "light",
      },
    ],
    itinerariesTitle: "Choose a Half-Day or Full-Day Monaco Tour",
    itinerariesDescription:
      "These sample routes give the day a clear structure while leaving room for restaurant bookings, museum visits, shopping and extra photo stops.",
    itineraries: [
      {
        duration: "Approximately 4 hours",
        title: "Monaco Highlights Private Tour",
        description:
          "This tour introduces the principality to first-time visitors, cruise guests and anyone with a free morning or afternoon.",
        stops: [
          "Pickup in Monaco, Cap-d'Ail, Beausoleil or at your yacht in Port Hercule",
          "Monaco-Ville, the Prince's Palace square and Saint Nicholas Cathedral",
          "Port Hercule viewpoint and a drive along part of the Grand Prix circuit",
          "Casino Square, Hôtel de Paris and the Carré d'Or",
          "Return to your hotel, yacht or preferred Monaco address",
        ],
      },
      {
        duration: "Approximately 8 hours",
        title: "Monaco and Èze Full-Day Tour",
        description:
          "This full Riviera day combines Monaco's landmarks with the medieval village of Èze and the panoramic Middle Corniche.",
        stops: [
          "Pickup from Nice, Cannes, Monaco, a private residence or Nice Airport",
          "Èze village, with time for the old streets and optional Exotic Garden",
          "Panoramic drive on the Moyenne Corniche toward Monaco",
          "Monaco-Ville, Port Hercule, Casino Square and Monte-Carlo",
          "Flexible lunch, shopping or museum time before the return journey",
        ],
      },
    ],
    practicalTitle: "What to Know Before Booking",
    practicalDescription:
      "Share your pickup point, preferred duration and must-see stops. We then confirm the vehicle, realistic timing and any event-day access constraints.",
    practicalDetails: [
      {
        title: "Pickup points",
        text: "Hotels, villas, Port Hercule, Fontvieille, Nice Airport and addresses across Nice, Cannes and the eastern Riviera.",
      },
      {
        title: "Vehicles",
        text: "The Mercedes S-Class seats up to three guests. The V-Class gives families and groups more room for passengers or luggage.",
      },
      {
        title: "Included",
        text: "Private vehicle, professional chauffeur, door-to-door pickup, waiting between stops and bottled water on board.",
      },
      {
        title: "Not included",
        text: "Museum and garden tickets, meals, licensed walking guides and special access fees, unless added to your quote.",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Monaco Discovery",
    audienceDescription:
      "For guests who want to explore Monaco at a comfortable pace with door-to-door transport between its main sights.",
    audienceCards: [
      {
        title: "Prestige Travelers",
        text: "A polished day for guests who expect Monaco touring to feel premium from pickup to return.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Prestige traveler icon",
      },
      {
        title: "First-Time Visitors",
        text: "A comfortable way to understand Monaco's layout, highlights, and scenic road structure in one day.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "First-time visitor icon",
      },
      {
        title: "Couples & VIP Guests",
        text: "A refined format for landmark stops, elegant arrivals, and private comfort throughout the experience.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Couples and VIP icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Compare private chauffeur tours in other Riviera destinations.",
    localLinks: tourCityLinks,
    relatedGuidesTitle: "Fitting Monaco Into Your Riviera Stay",
    relatedGuides: [
      {
        href: "/blog/eze-monaco-private-tour-from-nice",
        label: "Èze and Monaco Tour From Nice",
        description:
          "Compare half-day and full-day routes from Nice through Èze, Cap-Ferrat and Monaco.",
      },
      {
        href: "/blog/getting-around-monaco",
        label: "Getting Around Monaco",
        description:
          "Understand Monaco's districts, slopes, transport options and the situations where a chauffeur saves time.",
      },
      {
        href: "/our-services/hourly-chauffeur/monaco",
        label: "Hourly Chauffeur in Monaco",
        description:
          "Choose an on-call chauffeur when meetings, shopping, dining or yacht visits matter more than a sightseeing itinerary.",
      },
    ],
    cta: {
      title: "Plan a Monaco Chauffeur Tour",
      description:
        "We can shape the day around Monaco landmarks, scenic routes, lunch timing, and your preferred pickup location.",
      buttonText: "Book Monaco Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular private tours to Monaco?",
        answer:
          "Popular private tours to Monaco often include Monte-Carlo, Casino Square, Port Hercule, Monaco-Ville, the Prince's Palace area, luxury shopping districts, and panoramic viewpoints overlooking the Mediterranean."
      },
      {
        question: "Can I customize my private tour to Monaco?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the sightseeing stops, restaurants, shopping experiences, coastal routes, and viewpoints that best suit your plans."
      },
      {
        question: "Can the tour include pickup from my hotel, residence, or yacht?",
        answer:
          "Absolutely. We can arrange pickup from hotels, private residences, villas, Port Hercule, Fontvieille Marina, yachts, or other locations across the French Riviera."
      },
      {
        question: "Which landmarks are commonly included in a Monaco private tour?",
        answer:
          "Tours usually take in Monte-Carlo, Casino Square, Port Hercule, Monaco-Ville and the Prince's Palace area, plus luxury shopping districts and Mediterranean viewpoints."
      },
      {
        question: "Can Monaco be combined with other Riviera destinations in one day?",
        answer:
          "Yes. Many guests combine Monaco with Èze, Nice, Saint-Jean-Cap-Ferrat, Antibes, Cannes, or Saint-Paul-de-Vence within a single private tour. The itinerary remains flexible throughout the day."
      },
      {
        question: "Are Monaco private tours suitable for cruise passengers and yacht guests?",
        answer:
          "Yes. Private tours to Monaco are particularly popular with yacht guests, cruise passengers, families, and VIP travelers seeking a comfortable and personalized way to discover the French Riviera."
      },
      {
        question: "Can the tour include fine dining, luxury shopping, or coastal experiences?",
        answer:
          "Absolutely. Your itinerary can include Michelin-starred restaurants, luxury boutiques in Monte-Carlo, waterfront dining, beach clubs, scenic coastal drives, and other curated experiences."
      },
      {
        question: "Which vehicle is recommended for a private tour to Monaco?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, small groups, and guests requiring additional space and comfort."
      }
    ]
  },
  "saint-tropez": {
    slug: "saint-tropez",
    path: "/our-services/private-tours/saint-tropez",
    metadata: {
      title: "Saint-Tropez Private Tour | Private Driver | Kokolimo",
      description:
        "Private chauffeur tour in Saint-Tropez, starting from €90 an hour or €750 a full day, with village access, coastal roads and beach-side stops.",
      keywords: [
        "chauffeur tour Saint-Tropez",
        "private tour Saint-Tropez driver",
        "Saint-Tropez luxury day trip chauffeur",
        "private sightseeing Saint-Tropez",
        "Saint-Tropez chauffeur tour",
      ],
    },
    serviceLabel: "Saint-Tropez Tour",
    heroTitle: "Private Tour in Saint-Tropez",
    heroDescription:
      "A private chauffeur-led Saint-Tropez day shaped around scenic arrivals, village atmosphere, beach-side stops, and premium flexibility.",
    heroImageSrc: "/assets/images/services/saint-tropez.webp",
    heroImageAlt: "Private chauffeur tour in Saint-Tropez",
    introTitle: "Saint-Tropez as an Experience",
    introDescription:
      "Saint-Tropez is less about rushing between landmarks and more about creating the right pace between roads, village, sea, and lifestyle stops.",
    panels: [
      {
        title: "Scenic Access",
        text: "The route itself is part of the experience, so a chauffeur tour helps the day feel elegant from the first road to the last stop.",
        theme: "dark",
      },
      {
        title: "Lifestyle Touring",
        text: "A chauffeur tour leaves time for the village, lunch, the beach and a comfortable ride back.",
        theme: "light",
      },
    ],
    audienceTitle: "Perfect For",
    audienceAccent: "Saint-Tropez Escapes",
    audienceDescription:
      "This route is ideal for guests who want Saint-Tropez to feel cinematic, smooth, and effortlessly organized.",
    audienceCards: [
      {
        title: "Day-Trip Clients",
        text: "A refined format for travelers reaching Saint-Tropez as part of a larger Riviera stay.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Day-trip icon",
      },
      {
        title: "Lifestyle Travelers",
        text: "A premium setup for beach clubs, village moments, scenic roads, and relaxed timing.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Lifestyle traveler icon",
      },
      {
        title: "Couples & Small Groups",
        text: "Private comfort and flexible pacing for guests who want the day to unfold naturally.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Small group icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Compare private chauffeur tours in other Riviera destinations.",
    localLinks: tourCityLinks,
    cta: {
      title: "Book a Saint-Tropez Chauffeur Tour",
      description:
        "Share your pickup point and preferred vibe for the day and we will shape a Saint-Tropez route around it.",
      buttonText: "Book Saint-Tropez Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular private tours from Saint-Tropez?",
        answer:
          "Popular private tours from Saint-Tropez include Port Grimaud, Ramatuelle, Gassin, Cannes, Antibes, Nice, Monaco, and scenic drives through the French Riviera and Provence. Each itinerary can be tailored to your preferences and schedule."
      },
      {
        question: "Can I customize my private tour from Saint-Tropez?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, timing, sightseeing stops, restaurants, beach clubs, shopping areas, and experiences you would like to include."
      },
      {
        question: "Can the tour start from my hotel, villa, or yacht in Saint-Tropez?",
        answer:
          "Absolutely. We can arrange pickup from luxury hotels, private villas, beach clubs, Port de Saint-Tropez, or other locations throughout Saint-Tropez and the surrounding area."
      },
      {
        question: "Which landmarks are commonly included in a Saint-Tropez private tour?",
        answer:
          "Guests often visit the Port de Saint-Tropez, Citadel of Saint-Tropez, Place des Lices, Pampelonne Beach, Ramatuelle, Gassin, and panoramic viewpoints overlooking the Mediterranean coastline."
      },
      {
        question: "Can I combine Saint-Tropez with other destinations in one day?",
        answer:
          "Yes. Many guests combine Saint-Tropez with Port Grimaud, Ramatuelle, Gassin, Cannes, Antibes, or other Riviera destinations. Your itinerary remains flexible throughout the day."
      },
      {
        question: "Are private tours suitable for beach clubs and luxury experiences?",
        answer:
          "Absolutely. Private tours are ideal for visiting beach clubs, luxury hotels, fine dining venues, vineyards, shopping areas, and exclusive destinations across Saint-Tropez and the French Riviera."
      },
      {
        question: "Can the tour include wineries and Provençal villages?",
        answer:
          "Yes. Many guests choose to combine Saint-Tropez with vineyard visits, wine tastings, and picturesque villages throughout the Var region and Provence."
      },
      {
        question: "Which vehicle is recommended for a private tour from Saint-Tropez?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, small groups, and guests requiring additional space and comfort."
      }
    ]
  },
  megeve: {
    slug: "megeve",
    path: "/our-services/private-tours/megeve",
    metadata: {
      title: "Megève Private Tour | Private Driver | Kokolimo",
      description: "Private chauffeur tours of Megève in the French Alps, starting from €90 an hour or €750 a full day: luxury chalets, ski resorts and gourmet dining.",
      keywords: [
        "private tours Megève",
        "Megève chauffeur tour",
        "winter tour Megève",
        "French Alps private tour",
        "Megève ski resort tour",
        "luxury chalet Megève",
        "winter chauffeur Megève",
      ],
    },
    serviceLabel: "Megève",
    heroTitle: "Private Tour in Megève",
    heroDescription:
      "Explore Megève during the winter season with a private chauffeur and luxury vehicle. Discover luxury chalets, ski resorts, mountain villages, gourmet restaurants, and tailor-made Alpine experiences throughout the French Alps.",      heroImageSrc: "/assets/images/services/megeve.webp",
    heroImageAlt: "Private chauffeur tour in Megève",
    introTitle: "Megève in Winter",
    introDescription:
      "From luxury chalets and prestigious ski resorts to panoramic mountain scenery and authentic Alpine villages, a private tour in Megève offers comfort, flexibility, and a personalized way to experience the French Alps during winter.",      panels: [
      {
        title: "Winter Alpine Discovery",
        text: "Explore Megève, nearby mountain villages, scenic Alpine roads, luxury ski resorts, and breathtaking winter landscapes with a private chauffeur.",
        theme: "dark",
      },
      {
        title: "Private Touring Comfort",
        text: "Travel throughout the day with one dedicated chauffeur and premium vehicle, enjoying complete flexibility between chalets, resorts, restaurants, and Alpine destinations.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Winter Stays in Megève",
    audienceDescription:
      "Ideal for guests enjoying a winter stay in Megève who wish to discover nearby Alpine destinations, luxury resorts, and mountain scenery with complete comfort and flexibility.",    audienceCards: [
      {
        title: "Winter Holiday Guests",
        text: "Enjoy seamless transportation between luxury hotels, ski resorts, and winter attractions throughout Megève.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Winter holiday guest icon",
      },
      {
        title: "Couples & Ski Groups",
        text: "Travel comfortably between chalets, restaurants, ski facilities, and Alpine destinations during your winter stay.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Families and ski groups icon",
      },
      {
        title: "Luxury Chalet Stays",
        text: "Explore Megève and the French Alps from prestigious chalets and mountain resorts with a dedicated chauffeur.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Luxury chalet icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Explore other private chauffeur tour destinations across the French Alps and the French Riviera.",   
       localLinks: tourCityLinks,
    cta: {
      title: "Plan Your Private Tour of Megève in Winter",
      description:
        "Tell us where you are staying, your preferred destinations, and your travel dates, and we will create a personalized Alpine winter experience.",
      buttonText: "Book Megève Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular winter tours from Megève?",
        answer:
          "On winter tours from Megève, guests often visit Chamonix, Annecy and Courchevel, or take scenic drives to ski resorts and mountain villages in the French Alps.",
      },
      {
        question: "Can I customize my private tour from Megève?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, timing, restaurants, viewpoints, shopping areas, and Alpine experiences you would like to include.",
      },
      {
        question: "Can the tour start from my chalet or hotel in Megève?",
        answer:
          "Absolutely. We can arrange pickup from luxury hotels, private chalets, ski resorts, and residences throughout Megève and the surrounding Alpine region.",
      },
      {
        question: "Can I visit Chamonix, Annecy, or Courchevel during the same day?",
        answer:
          "Yes. Many guests combine Megève with Chamonix, Annecy, Courchevel, or other Alpine destinations as part of a full-day private chauffeur tour.",
      },
      {
        question: "Are private tours suitable during the ski season?",
        answer:
          "Absolutely. Private tours are particularly popular during the winter season, offering comfortable transportation between ski resorts, restaurants, luxury hotels, and Alpine attractions.",
      },
      {
        question: "Can a private tour be combined with a ski holiday in Megève?",
        answer:
          "Yes. Many guests book private tours during their ski holiday to explore nearby Alpine villages, scenic viewpoints, gourmet restaurants, and luxury resorts beyond the slopes.",
      },
      {
        question: "Can the tour include shopping and fine dining experiences?",
        answer:
          "Yes. Your itinerary can include luxury boutiques, gourmet restaurants, mountain hotels, wellness facilities, and other premium experiences in and around Megève.",
      },
      {
        question: "Which luxury hotels are commonly included during a private tour in Megève?",
        answer:
          "Many tours stop at the Four Seasons Hotel Megève and Les Fermes de Marie, along with luxury chalets, gourmet restaurants and winter destinations across the region.",
      },
      {
        question: "Which vehicle is recommended for a private tour in Megève?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
  courchevel: {
    slug: "courchevel",
    path: "/our-services/private-tours/courchevel",
    metadata: {
      title: "Courchevel Private Tour | Private Driver | Kokolimo",
      description: "Private chauffeur tours of Courchevel in the French Alps, starting from €90 an hour or €750 a full day: five-star resorts, chalets and ski slopes.",
      keywords: [
        "private tours Courchevel",
        "Courchevel chauffeur tour",
        "winter tour Courchevel",
        "Courchevel ski resort tour",
        "luxury chalet Courchevel",
        "French Alps private tour",
        "winter chauffeur Courchevel",
      ],
    },
    serviceLabel: "Courchevel",
    heroTitle: "Private Tour in Courchevel",
    heroDescription:
      "Explore Courchevel during the winter season with a private chauffeur and luxury vehicle. Discover prestigious ski resorts, luxury chalets, gourmet restaurants, Alpine villages, and tailor-made experiences throughout the French Alps.",
    heroImageSrc: "/assets/images/services/courchevel.webp",
    heroImageAlt: "Private chauffeur tour in Courchevel",
    introTitle: "Touring Courchevel in Winter",
    introDescription:
    "From luxury chalets and world-renowned hotels to exceptional ski resorts and breathtaking Alpine scenery, a private tour in Courchevel offers comfort, flexibility, and a personalized way to experience the French Alps during winter.",   panels: [
      {
        title: "Winter Alpine Discovery",
        text: "A private chauffeur takes you through Courchevel and Les 3 Vallées, with their resorts, villages and winter landscapes.",
        theme: "dark",
      },
      {
        title: "Private Touring Comfort",
        text: "Travel at your own pace with one dedicated chauffeur and premium vehicle, enjoying complete flexibility between chalets, hotels, restaurants, and winter destinations.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "a Winter Stay in Courchevel",
    audienceDescription:
    "Ideal for guests enjoying a winter stay in Courchevel who wish to discover luxury resorts, Alpine scenery, and nearby mountain destinations with complete comfort and flexibility.",  audienceCards: [ 
      {
        title: "Winter Holiday Guests",
        text: "Enjoy seamless transportation between luxury hotels, ski resorts, and winter attractions throughout Courchevel.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Winter holiday guest icon",
      },
      {
        title: "Families & Ski Groups",
        text: "Travel comfortably between chalets, ski facilities, restaurants, and Alpine destinations during your stay.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Families and ski groups icon",
      },
      {
        title: "Luxury Chalet Stays",
        text: "Discover Courchevel and the French Alps from prestigious chalets and world-class ski resorts with a dedicated chauffeur.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Luxury chalet icon",
      },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
      "Explore other private chauffeur tour destinations across the French Alps and the French Riviera.",   
       localLinks: tourCityLinks,
    cta: {
      title: "Plan Your Courchevel Winter Tour",
      description:
         "Tell us where you are staying, your preferred destinations, and your travel dates, and we will create a personalized Alpine winter experience.",
      buttonText: "Book Courchevel Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular winter tours from Courchevel?",
        answer:
          "Winter tours from Courchevel often go to Méribel, Megève, Annecy and Chamonix. Others explore scenic roads, ski resorts and villages of the French Alps.",
      },
      {
        question: "Can I customize my private tour from Courchevel?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, restaurants, viewpoints, shopping areas, and Alpine experiences you would like to include.",
      },
      {
        question: "Can the tour start from my chalet or hotel in Courchevel?",
        answer:
          "Absolutely. We can arrange pickup from luxury hotels, private chalets, ski resorts, and residences throughout Courchevel and the surrounding Alpine region.",
      },
      {
        question: "Can I visit Megève, Annecy, or Chamonix during the same day?",
        answer:
          "Yes. Many guests combine Courchevel with Megève, Annecy, Chamonix, or other Alpine destinations as part of a full-day private chauffeur tour.",
      },
      {
        question: "Are private tours suitable during the ski season?",
        answer:
          "Absolutely. Private tours are particularly popular during the winter season, offering comfortable transportation between ski resorts, restaurants, luxury hotels, and Alpine attractions.",
      },
      {
        question: "Can a private tour be combined with a ski holiday in Courchevel?",
        answer:
          "Yes. Many guests book private tours during their ski holiday to explore nearby Alpine villages, panoramic viewpoints, gourmet restaurants, and luxury resorts beyond the slopes.",
      },
      {
        question: "Can the tour include shopping and fine dining experiences?",
        answer:
          "Yes. Your itinerary can include luxury boutiques, Michelin-starred restaurants, wellness facilities, and premium experiences throughout Courchevel and the surrounding Alpine region.",
      },
      {
        question: "Which luxury hotels are commonly included during a private tour in Courchevel?",
        answer:
          "Cheval Blanc Courchevel, Airelles Courchevel and Six Senses Residences Courchevel are frequent stops. Guests also visit luxury chalets, gourmet restaurants and other winter spots in the resort.",
      },
      {
        question: "Which vehicle is recommended for a private tour in Courchevel?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
  chamonix: {
    slug: "chamonix",
    path: "/our-services/private-tours/chamonix",
    metadata: {
      title: "Chamonix Private Tour | Private Driver | Kokolimo",
      description: "Private chauffeur tours of Chamonix in the French Alps, starting from €90 an hour or €750 a full day: Mont Blanc viewpoints and Alpine villages.",
      keywords: [
         "private tours Chamonix",
          "Chamonix chauffeur tour",
          "winter tour Chamonix",
          "Mont Blanc tour",
          "French Alps private tour",
          "Aiguille du Midi tour",
          "winter chauffeur Chamonix",
      ],
    },
    serviceLabel: "Chamonix",
    heroTitle: "Private Tour in Chamonix",
    heroDescription:
      "Explore Chamonix during the winter season with a private chauffeur and luxury vehicle. Stops can include Mont Blanc viewpoints, Alpine villages, ski resorts and gourmet restaurants across the French Alps.",    heroImageSrc: "/assets/images/services/chamonix.webp",
    heroImageAlt: "Private chauffeur tour in Chamonix",
    introTitle: "Seeing Chamonix in Winter",
    introDescription:
      "From iconic mountain landscapes and world-famous viewpoints to luxury hotels and charming Alpine villages, a private tour in Chamonix offers comfort, flexibility, and a personalized way to experience the French Alps during winter.",      
      panels: [{
        title: "Winter Alpine Discovery",
        text: "Around Chamonix, scenic mountain roads lead to Mont Blanc viewpoints, Alpine villages and the winter landscapes of the French Alps.",
        theme: "dark",
      },
      {
        title: "Private Touring Comfort",
        text: "Travel at your own pace with one dedicated chauffeur and premium vehicle, enjoying complete flexibility throughout your stay in Chamonix and the surrounding Alpine region.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Winter in Chamonix",
    audienceDescription:
      "Ideal for guests enjoying a winter stay in Chamonix who wish to discover Mont Blanc, Alpine scenery, luxury resorts, and nearby mountain destinations with complete comfort and flexibility.",  audienceCards: [ 
       {
          title: "Winter Holiday Guests",
          text: "Enjoy seamless transportation between luxury hotels, ski resorts, and winter attractions throughout Chamonix.",
          icon: "/assets/icons/services/plane.webp",
          iconAlt: "Winter holiday icon",
        },
        {
          title: "Couples & Families",
          text: "Experience panoramic viewpoints, mountain villages, restaurants, and Alpine scenery at a relaxed pace.",
          icon: "/assets/icons/services/star.webp",
          iconAlt: "Couples and families icon",
        },
        {
          title: "Mont Blanc Explorers",
          text: "Discover iconic Alpine landmarks, scenic roads, and breathtaking mountain landscapes throughout the Chamonix Valley.",
          icon: "/assets/icons/services/hand.webp",
          iconAlt: "Mont Blanc explorer icon",
        },
    ],
    localLinksTitle: "Tour by Destination",
    localLinksDescription:
    "Explore other private chauffeur tour destinations across the French Alps and the French Riviera.",
         localLinks: tourCityLinks,
    cta: {
      title: "Plan Your Chamonix Winter Tour",
      description:
        "Tell us where you are staying, your preferred destinations, and your travel dates, and we will create a personalized Alpine winter experience.",
      buttonText: "Book Chamonix Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular winter tours from Chamonix?",
        answer:
          "Popular winter tours from Chamonix include Megève, Annecy, Courchevel, Mont Blanc viewpoints, scenic Alpine drives, and charming mountain villages throughout the French Alps.",
      },
      {
        question: "Can I customize my private tour from Chamonix?",
        answer:
          "Yes. Every private tour is fully customizable. You can choose the destinations, timing, restaurants, viewpoints, shopping areas, and Alpine experiences you would like to include.",
      },
      {
        question: "Can the tour start from my hotel or chalet in Chamonix?",
        answer:
          "Absolutely. We can arrange pickup from luxury hotels, chalets, ski resorts, and residences throughout Chamonix and the surrounding Alpine region.",
      },
      {
        question: "Can I visit Megève, Annecy, or Courchevel during the same day?",
        answer:
          "Yes. Many guests combine Chamonix with Megève, Annecy, Courchevel, or other Alpine destinations as part of a full-day private chauffeur tour.",
      },
      {
        question: "Are private tours suitable during the ski season?",
        answer:
          "Absolutely. Private tours are particularly popular during the winter season, offering comfortable transportation between ski resorts, restaurants, luxury hotels, and Alpine attractions.",
      },
      {
        question: "Can a private tour be combined with a ski holiday in Chamonix?",
        answer:
          "Yes. Many guests book private tours during their ski holiday to explore nearby Alpine villages, panoramic viewpoints, gourmet restaurants, and mountain attractions beyond the slopes.",
      },
      {
        question: "Which landmarks are commonly included during a private tour in Chamonix?",
        answer:
          "Guests often visit the Aiguille du Midi, the Mer de Glace, Mont Blanc viewpoints and the historic centre of Chamonix, along scenic Alpine roads.",
      },
      {
        question: "Can the tour include sightseeing, shopping, and fine dining experiences?",
        answer:
          "Yes. Your itinerary can include panoramic viewpoints, luxury shopping, gourmet restaurants, mountain villages, and other curated experiences throughout the Chamonix Valley.",
      },
      {
        question: "Which vehicle is recommended for a private tour in Chamonix?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, and guests travelling with ski equipment or additional luggage.",
      },
    ]
  },
};

const yachtTransferLinks: ServiceCardLink[] = [
  {
    href: "/our-services/yacht-transfers/monaco",
    label: "Monaco Yacht Transfer",
    description: "Transfers to Port Hercule and the Monaco superyacht harbour.",
  },
  {
    href: "/our-services/yacht-transfers/cannes",
    label: "Cannes Yacht Transfer",
    description: "Transfers to the Vieux Port and Port Pierre Canto in Cannes.",
  },
  {
    href: "/our-services/yacht-transfers/saint-tropez",
    label: "Saint-Tropez Yacht Transfer",
    description: "Transfers to the old port of Saint-Tropez by road or boat.",
  },
  {
    href: "/our-services/yacht-transfers/antibes",
    label: "Port Vauban Yacht Transfer",
    description: "Transfers to Port Vauban, the largest marina in Europe.",
  },
  {
    href: "/our-services/yacht-transfers/nice-airport",
    label: "Nice Airport to Yacht",
    description: "Meet-and-greet from Nice Airport straight to your yacht.",
  },
  {
    href: "/our-services/yacht-transfers/crew-transportation",
    label: "Crew Transportation",
    description: "Crew changes, provisioning and guest runs for superyachts.",
  },
];

export const yachtTransfersPage: ServicePageConfig = {
  slug: "yacht-transfers",
  path: "/our-services/yacht-transfers",
  metadata: {
    title: "Yacht Transfers French Riviera | Chauffeur | Kokolimo",
    description:
      "Private chauffeur yacht transfers from Nice Airport to the marinas of Monaco, Cannes, Antibes and Saint-Tropez, starting from €120 one way.",
    keywords: [
      "yacht transfers French Riviera",
      "superyacht chauffeur transfer",
      "Nice airport to yacht",
      "marina transfer Riviera",
      "yacht crew transport",
    ],
  },
  serviceLabel: "Yacht Transfers",
  heroTitle: "Yacht Transfers on the French Riviera",
  heroDescription:
    "We run private chauffeur transfers between Nice Airport and the marinas of Antibes, Cannes, Monaco and Saint-Tropez. We meet your flight and take you to the quay.",
  heroImageSrc: "/assets/images/services/yacht-transfers.webp",
  heroImageAlt: "Private chauffeur yacht transfer with a black Mercedes beside a superyacht",
  introTitle: "From the Terminal to the Gangway",
  introDescription:
    "The Riviera holds the densest run of superyacht marinas anywhere, and a chauffeur is the smoothest link between the airport and the quay.",
  panels: [
    {
      title: "Met on Arrival, Driven to the Quay",
      text: "We meet you at the flight, handle the luggage and provisions, and deliver you straight to the marina quay or your waiting tender.",
      theme: "dark",
    },
    {
      title: "Every Marina Covered",
      text: "From the airport, you can easily reach Port Vauban in Antibes, the ports of Cannes, Port Hercule in Monaco and the old port of Saint-Tropez.",
      theme: "light",
    },
  ],
  audienceTitle: "Ideal For",
  audienceAccent: "Yacht Arrivals",
  audienceDescription:
    "Built for owners, guests and crew joining a yacht on the Riviera, where a discreet, reliable transfer matters from the first minute.",
  audienceCards: [
    {
      title: "Owners & Guests",
      text: "A discreet, seamless arrival from the airport or private jet to the quay and your waiting yacht.",
      icon: "/assets/icons/services/star.webp",
      iconAlt: "Yacht owner icon",
    },
    {
      title: "Crew & Provisioning",
      text: "Crew changes, provisioning runs and guest movements handled on the yacht's schedule.",
      icon: "/assets/icons/services/van.webp",
      iconAlt: "Yacht crew icon",
    },
    {
      title: "Groups & Luggage",
      text: "A spacious V-Class for guests, crew and heavy luggage arriving together for a charter.",
      icon: "/assets/icons/services/multiple-suit-case.webp",
      iconAlt: "Yacht luggage icon",
    },
  ],
  localLinksTitle: "Yacht Transfers by Marina",
  localLinksDescription:
    "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
  localLinks: yachtTransferLinks,
  cta: {
    title: "Need a Yacht Transfer?",
    description:
      "Send us your marina, arrival details and party size and we will organize the right vehicle and chauffeur to the quay.",
    buttonText: "Request Yacht Transfer",
    buttonHref: "/contact-me",
  },
  faq: [
    {
      question: "Which marinas do you cover on the French Riviera?",
      answer:
        "We cover all of them, including Port Vauban in Antibes, the ports of Cannes, Port Hercule in Monaco and the old port of Saint-Tropez.",
    },
    {
      question: "Can you meet a private jet for a yacht transfer?",
      answer:
        "Yes. We meet guests at the business aviation terminal at Nice and drive them directly to the marina and their waiting yacht.",
    },
    {
      question: "Do you handle crew and provisioning?",
      answer:
        "Yes. We manage crew changes, provisioning runs and guest movements on the yacht's schedule, discreetly and reliably.",
    },
    {
      question: "Which vehicle is best for a yacht arrival?",
      answer:
        "A Mercedes V-Class suits guests, crew and heavy luggage together; an E-Class or S-Class is ideal for a couple travelling light.",
    },
  ],
};

export const yachtTransferPages: Record<string, ServicePageConfig> = {
  monaco: {
    slug: "monaco",
    path: "/our-services/yacht-transfers/monaco",
    metadata: {
      title: "Monaco Yacht Transfer | Port Hercule | Kokolimo",
      description:
        "Private chauffeur yacht transfer to Port Hercule in Monaco, starting from €150 one way from Nice Airport, to the superyacht harbour in about 30 minutes.",
      keywords: [
        "Monaco yacht transfer",
        "Port Hercule transfer",
        "Monaco superyacht harbour",
        "Nice airport to Monaco yacht",
        "Monaco marina chauffeur",
      ],
    },
    serviceLabel: "Monaco Yacht Transfer",
    heroTitle: "Yacht Transfer to Port Hercule in Monaco",
    heroDescription:
      "A private chauffeur transfer takes you from Nice Airport to your yacht's quay at Port Hercule in around 30 to 40 minutes, so you never deal with Monaco's tunnels or parking.",
    heroImageSrc: "/assets/images/services/yacht-monaco.webp",
    heroImageAlt: "Yacht transfer to Port Hercule Monaco with a black Mercedes on the harbour",
    introTitle: "To Monaco's Superyacht Harbour",
    introDescription:
      "Port Hercule is Monaco's grand stage, and arriving there should be as seamless as the harbour is glamorous.",
    panels: [
      {
        title: "Delivered to the Quay",
        text: "We meet your flight, handle the luggage and bring you to the quay in Port Hercule, coordinating with the crew on access.",
        theme: "dark",
      },
      {
        title: "Show & Grand Prix Ready",
        text: "For the Monaco Yacht Show and the Grand Prix, a chauffeur who knows the closures keeps arrivals smooth through the crowds.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Monaco Yachts",
    audienceDescription:
      "Built for owners, guests and crew joining a yacht in Port Hercule, from quiet arrivals to show-week logistics.",
    audienceCards: [
      {
        title: "Owners & Guests",
        text: "A discreet arrival from the airport or heliport straight to the quay and your yacht.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Monaco yacht owner icon",
      },
      {
        title: "Yacht Show & Events",
        text: "Reliable transfers for the Monaco Yacht Show and Grand Prix, timed around the road closures.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Monaco yacht event icon",
      },
      {
        title: "Crew & Provisioning",
        text: "Crew changes and provisioning runs for yachts berthed in Port Hercule, on the yacht's schedule.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Monaco yacht crew icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need a Yacht Transfer in Monaco?",
      description:
        "Send us your arrival details and the yacht's berth and we will organize a chauffeur from Nice Airport to Port Hercule.",
      buttonText: "Request Monaco Yacht Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Port Hercule?",
        answer:
          "Around 30 to 40 minutes by road, or a short helicopter hop to the Monaco heliport with a chauffeur waiting for the last stretch.",
      },
      {
        question: "How much is a Monaco yacht transfer?",
        answer:
          "Prices from Nice Airport start at around €150 in a Mercedes E-Class or €180 in a V-Class. We quote a fixed price in advance.",
      },
      {
        question: "Can you drop me at the quay in Port Hercule?",
        answer:
          "Yes. We take you directly to the quay and your yacht, coordinating with the crew on access and timing where needed.",
      },
      {
        question: "Can you handle Monaco Yacht Show arrivals?",
        answer:
          "Yes. With road closures and crowds during the show, a driver who knows the diversions keeps arrivals smooth and on time.",
      },
      {
        question: "Do you handle crew and provisioning in Monaco?",
        answer:
          "Yes. We manage crew changes and provisioning runs for yachts in Port Hercule, discreetly and on the yacht's schedule.",
      },
    ],
  },
  cannes: {
    slug: "cannes",
    path: "/our-services/yacht-transfers/cannes",
    metadata: {
      title: "Cannes Yacht Transfer | Vieux Port | Kokolimo",
      description:
        "Private chauffeur yacht transfer to the Vieux Port and Port Canto in Cannes, starting from €150 one way from Nice Airport, in about 30 minutes.",
      keywords: [
        "Cannes yacht transfer",
        "Vieux Port Cannes transfer",
        "Port Pierre Canto transfer",
        "Nice airport to Cannes yacht",
        "Cannes marina chauffeur",
      ],
    },
    serviceLabel: "Cannes Yacht Transfer",
    heroTitle: "Yacht Transfer to the Vieux Port in Cannes",
    heroDescription:
      "A private chauffeur transfer takes you from Nice Airport to the quay and your yacht in Cannes, at the Vieux Port or Port Pierre Canto, in around 30 minutes.",
    heroImageSrc: "/assets/images/services/yacht-cannes.webp",
    heroImageAlt: "Yacht transfer to the Vieux Port of Cannes with a black Mercedes on the quay",
    introTitle: "To the Heart of Cannes",
    introDescription:
      "Cannes puts yachts at the centre of the glamour, moments from the Croisette, and a chauffeur keeps the arrival effortless.",
    panels: [
      {
        title: "Delivered to the Quay",
        text: "We meet your flight and drive you to the Vieux Port or Port Pierre Canto, all the way to the quay and your yacht.",
        theme: "dark",
      },
      {
        title: "Festival Ready",
        text: "During the Cannes Yachting Festival and the Film Festival, a chauffeur who knows the road closures keeps your arrival smooth.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Cannes Yachts",
    audienceDescription:
      "Built for owners, guests and crew joining a yacht in Cannes, from the Vieux Port to Port Pierre Canto.",
    audienceCards: [
      {
        title: "Owners & Guests",
        text: "A discreet arrival from the airport straight to the quay and your yacht in Cannes.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Cannes yacht owner icon",
      },
      {
        title: "Yachting Festival",
        text: "Reliable transfers for the Cannes Yachting Festival and the Film Festival, around the crowds.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Cannes yacht festival icon",
      },
      {
        title: "Crew & Provisioning",
        text: "Crew changes and provisioning runs for yachts in the Vieux Port and Port Canto.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Cannes yacht crew icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need a Yacht Transfer in Cannes?",
      description:
        "Send us your arrival details and the yacht's berth and we will organize a chauffeur from Nice Airport to Cannes.",
      buttonText: "Request Cannes Yacht Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Cannes?",
        answer:
          "The drive to the Vieux Port or Port Pierre Canto takes around 30 minutes in clear traffic, and a little longer during the festivals.",
      },
      {
        question: "How much is a Cannes yacht transfer?",
        answer:
          "Prices from Nice Airport start at around €150 in a Mercedes E-Class or €180 in a V-Class. We quote a fixed price in advance.",
      },
      {
        question: "Where do larger yachts berth in Cannes?",
        answer:
          "Larger yachts often berth at Port Pierre Canto, just east of the Vieux Port, with easy access to the Croisette.",
      },
      {
        question: "Can you handle Yachting Festival transfers?",
        answer:
          "Yes. During the Cannes Yachting Festival, a driver who knows the road closures gets you to the ports smoothly and on time.",
      },
      {
        question: "Do you handle crew and provisioning in Cannes?",
        answer:
          "Yes. We manage crew changes and provisioning runs for yachts in the Vieux Port and Port Canto, to suit each yacht's schedule.",
      },
    ],
  },
  "saint-tropez": {
    slug: "saint-tropez",
    path: "/our-services/yacht-transfers/saint-tropez",
    metadata: {
      title: "Saint-Tropez Yacht Transfer | Kokolimo",
      description:
        "Private chauffeur yacht transfer to the old port of Saint-Tropez, starting from €400 one way by road from Nice Airport, timed around the summer traffic.",
      keywords: [
        "Saint-Tropez yacht transfer",
        "Saint-Tropez port transfer",
        "Nice airport to Saint-Tropez yacht",
        "Saint-Tropez marina chauffeur",
        "yacht transfer Saint-Tropez",
      ],
    },
    serviceLabel: "Saint-Tropez Yacht Transfer",
    heroTitle: "Saint-Tropez Yacht Transfer",
    heroDescription:
      "A private chauffeur transfer from Nice Airport to your yacht in the old port of Saint-Tropez. We take you by road or by boat across the gulf, timing the trip around the traffic.",
    heroImageSrc: "/assets/images/services/yacht-saint-tropez.webp",
    heroImageAlt: "Yacht transfer to the old port of Saint-Tropez with a black Mercedes on the quay",
    introTitle: "To Yachting's Most Famous Quay",
    introDescription:
      "The old port of Saint-Tropez is yachting's most famous quay, and also the hardest to reach. Best handled by a chauffeur who knows the peninsula.",
    panels: [
      {
        title: "By Road or by Boat",
        text: "We do the whole transfer by road, or drive you to a boat landing at Sainte-Maxime, where a crossing is arranged to meet the yacht.",
        theme: "dark",
      },
      {
        title: "Timed Around the Traffic",
        text: "In peak summer the single gulf road can gridlock; a driver who knows the peninsula plans the run around the worst of it.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Saint-Tropez Yachts",
    audienceDescription:
      "Built for owners, guests and crew joining a yacht in Saint-Tropez, where the run to the peninsula is a journey in itself.",
    audienceCards: [
      {
        title: "Owners & Guests",
        text: "A discreet arrival to the old port, by road or by a boat crossing to meet the yacht.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Saint-Tropez yacht owner icon",
      },
      {
        title: "Beach Clubs",
        text: "Runs to the Pampelonne beach clubs from a yacht in the port, dropped at the door and collected after.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Saint-Tropez beach icon",
      },
      {
        title: "Crew & Groups",
        text: "A spacious V-Class for crew, provisions and guests on the longer run to the peninsula.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Saint-Tropez crew icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need a Yacht Transfer in Saint-Tropez?",
      description:
        "Send us your arrival details and the yacht's berth and we will organize a chauffeur from Nice Airport to Saint-Tropez.",
      buttonText: "Request Saint-Tropez Yacht Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Saint-Tropez?",
        answer:
          "By road, roughly an hour and a half to two hours over about 110 kilometres, longer in peak-season traffic around the gulf.",
      },
      {
        question: "How much is a Saint-Tropez yacht transfer?",
        answer:
          "Prices from Nice Airport start at around €400 in a Mercedes E-Class or €500 in a V-Class. We quote a fixed price in advance.",
      },
      {
        question: "Can I reach the yacht by boat?",
        answer:
          "Yes. We can drive you to a boat landing at Sainte-Maxime, where a crossing into the port is arranged, so you avoid the summer gulf traffic.",
      },
      {
        question: "Can you drive me to the Pampelonne beach clubs?",
        answer:
          "Yes. We handle runs from the port to the Pampelonne beach clubs, dropping you at the door and collecting you when ready.",
      },
      {
        question: "Do you handle crew and provisioning in Saint-Tropez?",
        answer:
          "Yes. We manage crew changes and provisioning runs for yachts in the old port, to suit each yacht's schedule.",
      },
    ],
  },
  antibes: {
    slug: "antibes",
    path: "/our-services/yacht-transfers/antibes",
    metadata: {
      title: "Port Vauban Yacht Transfer | Antibes | Kokolimo",
      description:
        "Private chauffeur yacht transfer to Port Vauban in Antibes, Europe's largest marina, starting from €120 one way from Nice Airport, in about 25 minutes.",
      keywords: [
        "Antibes yacht transfer",
        "Port Vauban transfer",
        "Quai des Milliardaires",
        "Nice airport to Antibes yacht",
        "Antibes marina chauffeur",
      ],
    },
    serviceLabel: "Port Vauban Yacht Transfer",
    heroTitle: "Yacht Transfer to Port Vauban in Antibes",
    heroDescription:
      "A private chauffeur transfer takes you from Nice Airport to the quay and your yacht at Port Vauban in Antibes, Europe's largest marina, in around 25 minutes.",
    heroImageSrc: "/assets/images/services/yacht-antibes.webp",
    heroImageAlt: "Yacht transfer to Port Vauban Antibes with a black Mercedes and superyachts",
    introTitle: "To Europe's Largest Marina",
    introDescription:
      "Port Vauban is the beating heart of Riviera yachting and one of the closest marinas to the airport. A short, easy transfer.",
    panels: [
      {
        title: "Delivered to the Quay",
        text: "We meet your flight and take the short route to Port Vauban, all the way to the quay and your yacht, even on the Quai des Milliardaires.",
        theme: "dark",
      },
      {
        title: "Crew & Provisioning",
        text: "Port Vauban generates constant movement ashore: crew changes, provisioning and guest runs, all handled on the yacht's schedule.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Antibes Yachts",
    audienceDescription:
      "Built for owners, guests and crew joining a yacht at Port Vauban, from superyachts to the wider Antibes marina.",
    audienceCards: [
      {
        title: "Owners & Guests",
        text: "A discreet, quick arrival from the airport to the quay at Port Vauban and your yacht.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Antibes yacht owner icon",
      },
      {
        title: "Crew & Provisioning",
        text: "Crew changes, provisioning runs and guest movements for the busiest marina on the coast.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Antibes yacht crew icon",
      },
      {
        title: "Groups & Luggage",
        text: "A spacious V-Class for guests, crew and heavy luggage arriving together for a charter.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Antibes yacht luggage icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need a Yacht Transfer at Port Vauban?",
      description:
        "Send us your arrival details and the yacht's berth and we will organize a chauffeur from Nice Airport to Port Vauban.",
      buttonText: "Request Antibes Yacht Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to Port Vauban?",
        answer:
          "The drive takes around 25 minutes, making Port Vauban in Antibes one of the closest major marinas to Nice Airport.",
      },
      {
        question: "How much is an Antibes yacht transfer?",
        answer:
          "Prices from Nice Airport start at around €120 in a Mercedes E-Class or €150 in a V-Class. We quote a fixed price in advance.",
      },
      {
        question: "What is the Quai des Milliardaires?",
        answer:
          "The Billionaires' Quay at Port Vauban: a section reserved for the largest superyachts, thanks to its deep water and prime position.",
      },
      {
        question: "Do you handle crew changes at Port Vauban?",
        answer:
          "Yes. We manage crew changes, provisioning runs and guest movements for yachts at Port Vauban, to suit each yacht's schedule.",
      },
      {
        question: "Which vehicle is best for a yacht arrival?",
        answer:
          "A Mercedes V-Class suits guests, crew and heavy luggage together; an E-Class or S-Class is ideal for a couple travelling light.",
      },
    ],
  },
  "nice-airport": {
    slug: "nice-airport",
    path: "/our-services/yacht-transfers/nice-airport",
    metadata: {
      title: "Nice Airport to Yacht Transfer | Kokolimo",
      description:
        "Private chauffeur transfer from Nice Airport, or its private jet terminal, to your yacht at any Riviera marina, starting from €120 one way, met on arrival.",
      keywords: [
        "Nice airport yacht transfer",
        "airport to yacht Riviera",
        "private jet to yacht",
        "Nice airport to marina",
        "superyacht airport transfer",
      ],
    },
    serviceLabel: "Nice Airport to Yacht",
    heroTitle: "From Nice Airport to Your Yacht",
    heroDescription:
      "A private chauffeur meets you at Nice Airport, at the commercial or business aviation terminal, for a transfer straight to your yacht at any Riviera marina.",
    heroImageSrc: "/assets/images/services/yacht-nice-airport.webp",
    heroImageAlt: "Private jet to yacht transfer at Nice with a black Mercedes and chauffeur",
    introTitle: "The Riviera's Yachting Gateway",
    introDescription:
      "Nice Airport sits in the middle of the coast, so most marinas are a short drive away — the smoothest link from the aircraft to the gangway.",
    panels: [
      {
        title: "Met on Arrival",
        text: "We meet you off your flight, in commercial arrivals or at the business aviation terminal. We handle the luggage and bring you to the car.",
        theme: "dark",
      },
      {
        title: "Straight to the Marina",
        text: "From the terminal, we drive you directly to Antibes, Cannes, Monaco or Saint-Tropez, all the way to the quay and your yacht.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Airport-to-Yacht Transfers",
    audienceDescription:
      "Built for owners, guests and crew flying into Nice to join a yacht, by commercial flight or private jet.",
    audienceCards: [
      {
        title: "Private Jet Arrivals",
        text: "Met at the business aviation terminal and driven straight to the marina and your yacht.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Private jet icon",
      },
      {
        title: "Owners & Guests",
        text: "A discreet, seamless handover from the aircraft door to the quay at any Riviera marina.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Airport yacht owner icon",
      },
      {
        title: "Crew & Luggage",
        text: "A spacious V-Class for crew, provisions and guests arriving together for a charter.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Airport yacht crew icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need a Yacht Transfer From the Airport?",
      description:
        "Send us your flight details, marina and party size and we will organize a chauffeur from Nice Airport to your yacht.",
      buttonText: "Request Airport to Yacht",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "How long is the transfer from Nice Airport to a yacht?",
        answer:
          "Antibes is about 25 minutes, Cannes and Monaco around 30, and Saint-Tropez roughly an hour and a half by road, depending on traffic.",
      },
      {
        question: "Can you meet a private jet at Nice?",
        answer:
          "Yes. We meet guests at the business aviation terminal, set apart from the main halls, and drive them straight to the marina.",
      },
      {
        question: "Can the chauffeur bring me to the yacht itself?",
        answer:
          "Yes. We deliver you to the marina quay and coordinate with the crew on access and timing, rather than a distant car park.",
      },
      {
        question: "How much is an airport to yacht transfer?",
        answer:
          "Prices start at around €120 to Antibes, €150 to Cannes or Monaco and €400 to Saint-Tropez. Larger vehicles cost a little more.",
      },
      {
        question: "What vehicle is best for a yacht arrival?",
        answer:
          "A Mercedes V-Class suits guests, crew and heavy luggage together; an E-Class or S-Class is ideal for a couple travelling light.",
      },
    ],
  },
  "crew-transportation": {
    slug: "crew-transportation",
    path: "/our-services/yacht-transfers/crew-transportation",
    metadata: {
      title: "Yacht Crew Transportation | Riviera | Kokolimo",
      description:
        "Private chauffeur transport for superyacht crew on the Riviera, starting from €90 an hour: airport runs, crew changes and provisioning, day and night.",
      keywords: [
        "yacht crew transportation",
        "superyacht crew transfers",
        "crew change chauffeur Riviera",
        "yacht provisioning transport",
        "Antibes crew transfers",
      ],
    },
    serviceLabel: "Crew Transportation",
    heroTitle: "Yacht Crew Transportation",
    heroDescription:
      "Our private chauffeurs drive superyacht crew across the Riviera for airport and station runs, crew changes and provisioning. We are on call day and night.",
    heroImageSrc: "/assets/images/services/yacht-crew.webp",
    heroImageAlt: "Yacht crew transportation with a black Mercedes V-Class van on a marina quay",
    introTitle: "Ground Support for Your Yacht",
    introDescription:
      "A superyacht in port generates constant movement ashore, and a dedicated chauffeur partner handles all of it on the yacht's schedule.",
    panels: [
      {
        title: "Crew Changes, Any Hour",
        text: "We track flights and handle airport and station pickups at any hour. A driver waits with a name board. One reliable contact for every rotation.",
        theme: "dark",
      },
      {
        title: "Provisioning & Errands",
        text: "A spacious V-Class carries provisions and equipment discreetly between the town, the suppliers and the quay.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Superyacht Crew",
    audienceDescription:
      "Built for captains and management companies who need reliable, discreet ground transport for crew, provisions and guests.",
    audienceCards: [
      {
        title: "Crew Changes",
        text: "Airport and station runs at any hour, with flight tracking and name-board pickups for every rotation.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Crew change icon",
      },
      {
        title: "Provisioning",
        text: "A V-Class for provisions and equipment, run between suppliers and the quay to save the crew hours.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Provisioning icon",
      },
      {
        title: "Guest Movements",
        text: "Discreet transport for owners and charter guests to the airport, heliport, dinners and days ashore.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Guest movement icon",
      },
    ],
    localLinksTitle: "Yacht Transfers by Marina",
    localLinksDescription:
      "Choose the marina your yacht is berthed at for a transfer tailored to the port and the route.",
    localLinks: yachtTransferLinks,
    cta: {
      title: "Need Crew Transportation?",
      description:
        "Tell us the yacht's marina and needs and we will set up reliable chauffeur support for crew, provisioning and guests.",
      buttonText: "Request Crew Transport",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Can you handle crew changes at night?",
        answer:
          "Yes. We track flights and run airport and station pickups at any hour, including early mornings, late nights and last-minute changes.",
      },
      {
        question: "Which vehicle is used for provisioning runs?",
        answer:
          "We use a spacious Mercedes V-Class. It carries bulky provisions and equipment discreetly between the town, the suppliers and the quay.",
      },
      {
        question: "Can one service cover the whole Riviera?",
        answer:
          "Yes. We cover Antibes, Cannes, Monaco and beyond, with accounts and a single point of contact for the yacht.",
      },
      {
        question: "Is the service discreet enough for owners and guests?",
        answer:
          "Yes. Familiar drivers, immaculate cars and absolute reliability meet the discretion expected at the top of the market.",
      },
      {
        question: "Do you offer accounts for management companies?",
        answer:
          "Yes. We work on accounts with a single point of contact, keeping booking and billing simple for captains and management companies.",
      },
    ],
  },
};

const eventLinks: ServiceCardLink[] = [
  {
    href: "/our-services/events/monaco-grand-prix",
    label: "Monaco Grand Prix",
    description: "Chauffeur transport for the Formula 1 Grand Prix each May.",
  },
  {
    href: "/our-services/events/cannes-film-festival",
    label: "Cannes Film Festival",
    description: "Red-carpet arrivals and chauffeur service through the festival.",
  },
  {
    href: "/our-services/events/monaco-yacht-show",
    label: "Monaco Yacht Show",
    description: "Transfers and on-call chauffeurs for the September show.",
  },
];

export const eventsPage: ServicePageConfig = {
  slug: "events",
  path: "/our-services/events",
  metadata: {
    title: "Luxury Event Transport French Riviera | Chauffeur | Kokolimo",
    description:
      "Private chauffeur for French Riviera events, starting from €90 an hour or €750 a full day: the Monaco Grand Prix, Cannes Film Festival and Monaco Yacht Show.",
    keywords: [
      "Riviera event transport",
      "Monaco Grand Prix chauffeur",
      "Cannes Film Festival transport",
      "Monaco Yacht Show transfer",
      "luxury event chauffeur Riviera",
    ],
  },
  serviceLabel: "Luxury Event Transport",
  heroTitle: "Luxury Event Transport on the Riviera",
  heroDescription:
    "Our private chauffeurs drive you to the French Riviera's great events: the Grand Prix, the Cannes festivals and the Monaco Yacht Show. You arrive calm, despite the crowds and closures.",
  heroImageSrc: "/assets/images/services/events.webp",
  heroImageAlt: "Luxury event chauffeur with a black Mercedes arriving at a Riviera event",
  introTitle: "Arrive Through the Crowds",
  introDescription:
    "The Riviera's events fill the coast to capacity and close its roads — exactly when a chauffeur who knows the diversions is worth its place.",
  panels: [
    {
      title: "On Call Through the Event",
      text: "We meet your flight, handle the arrival and stay on call between sessions, dinners and parties, dropping you as close to each entrance as access allows.",
      theme: "dark",
    },
    {
      title: "Around the Closures",
      text: "During the Grand Prix, the festivals and the Yacht Show, a driver who knows the road closures keeps your packed schedule on track.",
      theme: "light",
    },
  ],
  audienceTitle: "Ideal For",
  audienceAccent: "Riviera Events",
  audienceDescription:
    "Built for the coast's marquee events, where road closures, crowds and tight schedules make a private chauffeur essential.",
  audienceCards: [
    {
      title: "Grand Prix & Racing",
      text: "On-call transport for the Formula 1 Grand Prix and the Historic Grand Prix, timed around the circuit closures.",
      icon: "/assets/icons/services/star.webp",
      iconAlt: "Grand Prix icon",
    },
    {
      title: "Festivals & Galas",
      text: "Black-tie arrivals for the Cannes Film Festival and Cannes Lions, and evenings that run late.",
      icon: "/assets/icons/services/hand.webp",
      iconAlt: "Festival icon",
    },
    {
      title: "Yacht Show & Shows",
      text: "Reliable transfers for the Monaco Yacht Show and the Cannes Yachting Festival, through the busiest weeks.",
      icon: "/assets/icons/services/van.webp",
      iconAlt: "Yacht show icon",
    },
  ],
  localLinksTitle: "Event Transport",
  localLinksDescription:
    "Choose the event you are attending for chauffeur transport tailored to its schedule and closures.",
  localLinks: eventLinks,
  cta: {
    title: "Attending a Riviera Event?",
    description:
      "Send us the event, your dates and your party and we will organize chauffeur transport around the schedule and the closures.",
    buttonText: "Plan Event Transport",
    buttonHref: "/contact-me",
  },
  faq: [
    {
      question: "Which Riviera events do you cover?",
      answer:
        "We cover the Monaco Grand Prix, the Cannes Film Festival and Cannes Lions, the Monaco Yacht Show and the Cannes Yachting Festival, among others.",
    },
    {
      question: "Why use a chauffeur for a Riviera event?",
      answer:
        "Events bring road closures, crowds and tight schedules; a driver who knows the diversions keeps arrivals smooth and on time.",
    },
    {
      question: "Should I book event transport early?",
      answer:
        "Yes. Event weeks run the coast at capacity, so booking chauffeurs and helicopters well ahead is essential to secure them.",
    },
    {
      question: "Can a chauffeur stay on call during the event?",
      answer:
        "Yes. We stay on call between sessions, dinners and parties, dropping you close to each entrance and collecting you after.",
    },
  ],
};

export const eventPages: Record<string, ServicePageConfig> = {
  "monaco-grand-prix": {
    slug: "monaco-grand-prix",
    path: "/our-services/events/monaco-grand-prix",
    metadata: {
      title: "Monaco Grand Prix Chauffeur | Private Driver | Kokolimo",
      description:
        "Private chauffeur transport for the Monaco Grand Prix each May, starting from €90 an hour or €750 a full day, around the circuit closures.",
      keywords: [
        "Monaco Grand Prix transport",
        "Monaco Grand Prix chauffeur",
        "Grand Prix transfers Monaco",
        "Nice airport to Monaco Grand Prix",
        "Monaco F1 chauffeur",
      ],
    },
    serviceLabel: "Monaco Grand Prix Transport",
    heroTitle: "Monaco Grand Prix Transport",
    heroDescription:
      "We provide private chauffeur transport for the Monaco Grand Prix each May. We handle arrivals from Nice Airport and on-call transfers around the circuit closures and race-week crowds.",
    heroImageSrc: "/assets/images/services/event-monaco-grand-prix.webp",
    heroImageAlt: "Monaco Grand Prix transport with a racing car on the harbour circuit",
    introTitle: "Race Week, Handled",
    introDescription:
      "For race week Monaco is at bursting point and its roads all but close, so a chauffeur is the only relaxed way to move.",
    panels: [
      {
        title: "Arriving for the Grand Prix",
        text: "We meet your flight at Nice, around 30 to 40 minutes away, and drive you toward Monaco, or meet your helicopter at the heliport.",
        theme: "dark",
      },
      {
        title: "Around the Circuit",
        text: "Once the circuit is set, central Monaco closes; a driver who knows the diversions drops you as close to your grandstand or terrace as access allows.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Grand Prix Week",
    audienceDescription:
      "Built for the jewel of the Formula 1 calendar, where road closures and crowds make a private chauffeur essential.",
    audienceCards: [
      {
        title: "Grandstands & Terraces",
        text: "Transport to the grandstands and the terraces overlooking the circuit, timed around the sessions.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Grand Prix grandstand icon",
      },
      {
        title: "Yacht Viewing",
        text: "Transfers to the yachts moored in Port Hercule with the finest views of the race.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Grand Prix yacht icon",
      },
      {
        title: "Hospitality & Dinners",
        text: "On-call transport between hospitality, hotels and dinners through the packed race weekend.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Grand Prix hospitality icon",
      },
    ],
    localLinksTitle: "Event Transport",
    localLinksDescription:
      "Choose the event you are attending for chauffeur transport tailored to its schedule and closures.",
    localLinks: eventLinks,
    cta: {
      title: "Attending the Monaco Grand Prix?",
      description:
        "Send us your dates and party and we will organize chauffeur transport for the Grand Prix, around the closures and crowds.",
      buttonText: "Plan Grand Prix Transport",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "When is the Monaco Grand Prix?",
        answer:
          "It runs each year in late May on the streets of Monte-Carlo, with practice on Thursday, qualifying on Saturday and the race on Sunday.",
      },
      {
        question: "How do I get to the Monaco Grand Prix?",
        answer:
          "Go by private chauffeur from Nice Airport, around 30 to 40 minutes by road, or by helicopter to the Monaco heliport, where a car waits.",
      },
      {
        question: "Can you move me around during race week?",
        answer:
          "Yes. A driver who knows the closures drops you close to your grandstand or terrace and stays on call between sessions and dinners.",
      },
      {
        question: "Should I book Grand Prix transport early?",
        answer:
          "Yes. Race week runs the whole coast at capacity, so booking chauffeurs, helicopters and hotels far in advance is essential.",
      },
      {
        question: "Can you transfer me to a yacht for the race?",
        answer:
          "Yes. We deliver guests to the yachts moored in Port Hercule, which offer some of the finest views of the circuit.",
      },
    ],
  },
  "cannes-film-festival": {
    slug: "cannes-film-festival",
    path: "/our-services/events/cannes-film-festival",
    metadata: {
      title: "Cannes Film Festival Chauffeur | Private Driver | Kokolimo",
      description:
        "Private chauffeur transport for the Cannes Film Festival each May, starting from €90 an hour or €750 a full day: red-carpet arrivals and black-tie evenings.",
      keywords: [
        "Cannes Film Festival transport",
        "Cannes Film Festival chauffeur",
        "Cannes red carpet transfer",
        "Nice airport to Cannes festival",
        "Cannes festival car service",
      ],
    },
    serviceLabel: "Cannes Film Festival Transport",
    heroTitle: "Cannes Film Festival Transport",
    heroDescription:
      "We provide private chauffeur transport for the Cannes Film Festival each May: red-carpet arrivals at the Palais, black-tie evenings and on-call transfers around the crowds.",
    heroImageSrc: "/assets/images/services/event-cannes-film-festival.webp",
    heroImageAlt: "Cannes Film Festival transport with a black Mercedes at the red carpet",
    introTitle: "Arrive in Style",
    introDescription:
      "For the fortnight of the festival the Croisette is the centre of the film world, and the arrival is part of the occasion.",
    panels: [
      {
        title: "To the Red Carpet",
        text: "We drop you at the Palais entrances and the hotel doors in black-tie style, on the evening's schedule, and wait until the end.",
        theme: "dark",
      },
      {
        title: "Around the Croisette",
        text: "Festival fortnight brings heavy closures and crowds; a chauffeur who knows the diversions keeps you moving day and night.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Festival Fortnight",
    audienceDescription:
      "Built for the Cannes Film Festival, from red-carpet premieres to villa parties and yacht events in the bay.",
    audienceCards: [
      {
        title: "Red Carpet & Galas",
        text: "Composed, black-tie arrivals at the Palais and the galas, delivered to the entrance and collected after.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Cannes red carpet icon",
      },
      {
        title: "Croisette Hotels",
        text: "Transfers between the Carlton, the Martinez and the meetings, lunches and dinners of festival week.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Cannes festival hotel icon",
      },
      {
        title: "Villas & Yachts",
        text: "Transport to the villa parties in the hills and the yacht events in the bay, through the night.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Cannes festival villa icon",
      },
    ],
    localLinksTitle: "Event Transport",
    localLinksDescription:
      "Choose the event you are attending for chauffeur transport tailored to its schedule and closures.",
    localLinks: eventLinks,
    cta: {
      title: "Attending the Cannes Film Festival?",
      description:
        "Send us your dates and party and we will organize chauffeur transport for the festival, from the red carpet to the parties.",
      buttonText: "Plan Festival Transport",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "When is the Cannes Film Festival?",
        answer:
          "It runs over two weeks each May, centred on the Palais des Festivals and its red-carpeted Montée des Marches along the Croisette.",
      },
      {
        question: "How do I arrive at the Cannes red carpet?",
        answer:
          "A private chauffeur delivers you to the Palais entrances in black-tie style, timed to the evening, and waits until the screening or gala ends.",
      },
      {
        question: "Is a chauffeur useful during the festival?",
        answer:
          "Very. With heavy road closures and crowds, a driver keeps you moving between screenings, meetings and parties, day and night.",
      },
      {
        question: "Can you arrange a transfer from Nice Airport for the festival?",
        answer:
          "Yes. Cannes is around 30 minutes from Nice Airport, and we meet your flight and handle the week from there.",
      },
      {
        question: "Can you handle villa and yacht events?",
        answer:
          "Yes. We drive guests to villa parties in the hills and yacht events in the bay, all through the night.",
      },
    ],
  },
  "monaco-yacht-show": {
    slug: "monaco-yacht-show",
    path: "/our-services/events/monaco-yacht-show",
    metadata: {
      title: "Monaco Yacht Show Chauffeur | Private Driver | Kokolimo",
      description:
        "Private chauffeur transport for the Monaco Yacht Show each September, starting from €90 an hour or €750 a full day, from Nice Airport to Port Hercule.",
      keywords: [
        "Monaco Yacht Show transport",
        "Monaco Yacht Show chauffeur",
        "Port Hercule yacht show",
        "Nice airport to Monaco Yacht Show",
        "MYS transfer",
      ],
    },
    serviceLabel: "Monaco Yacht Show Transport",
    heroTitle: "Monaco Yacht Show Transport",
    heroDescription:
      "We provide private chauffeur transport for the Monaco Yacht Show each September: arrivals from Nice Airport to Port Hercule, and on-call transfers around the crowds.",
    heroImageSrc: "/assets/images/services/event-monaco-yacht-show.webp",
    heroImageAlt: "Monaco Yacht Show transport with superyachts in Port Hercule and a black Mercedes",
    introTitle: "The Superyacht Week",
    introDescription:
      "Each September the Monaco Yacht Show fills Port Hercule with the world's largest superyachts and the principality with buyers and brokers.",
    panels: [
      {
        title: "Arriving for the Show",
        text: "We meet your flight at Nice, around 30 to 40 minutes away, and drive you toward Port Hercule, or meet your helicopter at the heliport.",
        theme: "dark",
      },
      {
        title: "Through the Crowds",
        text: "Monaco is at capacity during show week, with road closures and dense crowds. A chauffeur who knows the diversions keeps your arrivals smooth.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Yacht Show Week",
    audienceDescription:
      "Built for the world's premier superyacht show, where brokers, owners and media fill the principality for a demanding week.",
    audienceCards: [
      {
        title: "Brokers & Owners",
        text: "Reliable transport between the quays, meetings and dinners through the busiest week of Monaco's year.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Yacht show broker icon",
      },
      {
        title: "Airport & Heliport",
        text: "Arrivals from Nice Airport by road, or the helicopter to the Monaco heliport with a car waiting.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Yacht show airport icon",
      },
      {
        title: "On-Call Transfers",
        text: "A driver on call between the show, hotels and evening events, dropped close to each entrance.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Yacht show transfer icon",
      },
    ],
    localLinksTitle: "Event Transport",
    localLinksDescription:
      "Choose the event you are attending for chauffeur transport tailored to its schedule and closures.",
    localLinks: eventLinks,
    cta: {
      title: "Attending the Monaco Yacht Show?",
      description:
        "Send us your dates and party and we will organize chauffeur transport for the show, around the closures and crowds.",
      buttonText: "Plan Yacht Show Transport",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "When is the Monaco Yacht Show?",
        answer:
          "It takes place each September, when Port Hercule fills with the world's largest superyachts and Monaco becomes the centre of the yachting calendar.",
      },
      {
        question: "How do I get to the Monaco Yacht Show?",
        answer:
          "Go by private chauffeur from Nice Airport in around 30 to 40 minutes, or by helicopter to the Monaco heliport, where a car waits.",
      },
      {
        question: "Should I book transport early for the show?",
        answer:
          "Yes. The coast is at full capacity during show week, so it is essential to book chauffeurs and helicopters well ahead.",
      },
      {
        question: "Can a chauffeur move me around during show week?",
        answer:
          "Yes. A driver familiar with the closures drops you close to entrances and events and stays on call between meetings and dinners.",
      },
      {
        question: "Can you combine the show with the Cannes Yachting Festival?",
        answer:
          "Yes. The two September shows can be combined, with the same chauffeur carrying you between Monaco, Cannes and the airport.",
      },
    ],
  },
};
