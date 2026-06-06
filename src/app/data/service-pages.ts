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
};

export const serviceMenuLinks: ServiceCardLink[] = [
  {
    href: "/our-services/transfers",
    label: "Airport Transfers",
    description: "Airport and long-distance chauffeur rides",
  },
  {
    href: "/our-services/hourly-chauffeur",
    label: "Hourly Chauffeur Service",
    description: "Flexible chauffeur service in key Riviera destinations and prestigious Alpine winter resorts",
  },
  {
    href: "/our-services/private-tours",
    label: "Private Tours",
    description: "Private destination tours across the Riviera and the French Alps during the winter season.",
  },
];

export const homeServiceCards = [
  {
    title: "Airport Transfers",
    kicker: "Airport & long-distance",
    description:
      "Point-to-point chauffeur service for airport arrivals, hotel pickups, events, and long-distance Riviera journeys with precise timing and premium comfort.",
    image: "/assets/images/services/transfer.webp",
    link: "/our-services/transfers",
  },
  {
    title: "Hourly Chauffeur Service",
    kicker: "Flexible by destination",
    description:
      "A dedicated chauffeur on standby for meetings, shopping, lunches, beach clubs, and multi-stop days in Nice, Cannes, Monaco, Saint-Tropez and selected Alpine destinations during the winter season.",
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
  heroDescription: "Luxury chauffeur transfers for airport arrivals, hotel pickups, events, and longer journeys with precise coordination and discreet service.",
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
  localLinksDescription: "Choose the transfer page that matches the route style your clients are most likely to book.",
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
    "A dedicated chauffeur on standby for business travel, shopping, lunches, meetings, and multi-stop days across the French Riviera.",
  heroImageSrc: "/assets/images/services/riviera-days.webp",
  heroImageAlt: "Hourly chauffeur service in Monaco and the French Riviera",
  introTitle: "The Art of Hourly Chauffeur Service",
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
      "Booking requirements vary depending on the itinerary, vehicle, and season. Whether you need a chauffeur for a few hours, a half-day, or a full day, we can tailor the service to your schedule and travel needs.",
  },
  {
    question: "Can the chauffeur wait between meetings, restaurants, or appointments?",
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
    "Each destination page is tuned to the type of hourly chauffeur demand most common in that city.",
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
  heroTitle: "Private Tours for Refined Riviera Discovery",
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
  localLinksDescription: "Each destination page gives the tour concept a stronger local angle for both clients and search visibility.",
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
        "Yes. Every private tour is fully customizable. You can choose your destinations, schedule, and stops, whether it includes coastal villages, luxury hotels, viewpoints, shopping areas, or restaurants along the French Riviera."
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
    }
  ]
};

export const transferPages: Record<string, ServicePageConfig> = {
  "nice-airport-transfer": {
    slug: "nice-airport-transfer",
    path: "/our-services/transfers/nice-airport-transfer",
    metadata: {
      title: "Nice Airport Transfer | Private Chauffeur Arrival | kokolimo",
      description:
        "Premium Nice Airport transfer service with meet-and-greet, luggage assistance, and private chauffeur rides to Monaco, Cannes, Nice, and beyond.",
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
      "Meet-and-greet airport transfers from Nice Airport to hotels, villas, ports, and major Riviera destinations with calm, precise execution.",
    heroImageSrc: "/assets/images/services/airport-arrivals.webp",
    heroImageAlt: "Nice Airport private chauffeur transfer",
    introTitle: "Arrival, Handled Properly",
    introDescription:
      "Airport transport should remove friction, not add it, especially after a flight or before a departure window.",
    panels: [
      {
        title: "Pickup Coordination",
        text: "We follow the flight, align the pickup timing, assist with luggage, and deliver a polished arrival from terminal to vehicle.",
        theme: "dark",
      },
      {
        title: "Riviera Coverage",
        text: "Nice Airport transfers often continue to Monaco, Cannes, Antibes, Saint-Tropez, private villas, or yacht departure points.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Smooth Arrivals",
    audienceDescription:
      "This page is built for airport-led journeys where timing, comfort, and a premium first impression matter immediately.",
    audienceCards: [
      {
        title: "International Arrivals",
        text: "A professional arrival experience for guests landing in Nice after commercial or private flights.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Airport arrival icon",
      },
      {
        title: "Hotel & Villa Stays",
        text: "Direct transfers to accommodation with luggage handled and no unnecessary waiting.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Hotel arrival icon",
      },
      {
        title: "VIP & Business Travel",
        text: "A discreet, efficient airport transfer when presentation and timing matter from the first minute.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "VIP airport icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Browse the other transfer pages to help visitors land on the route format that matches their travel need.",
    localLinks: transferLinks,
    cta: {
      title: "Need a Nice Airport Transfer?",
      description:
        "Send us your arrival or departure details and we will organize the right vehicle and chauffeur for the route.",
      buttonText: "Request Airport Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Do you provide private transfers from Nice Airport?",
        answer:
          "Yes. We provide private airport transfers from Nice Côte d’Azur Airport to Monaco, Cannes, Saint-Tropez, Antibes, and destinations throughout the French Riviera.",
      },
      {
        question: "Where will my chauffeur meet me at Nice Airport?",
        answer:
          "Your chauffeur will meet you in the arrivals area with a personalized name sign and assist you with your luggage before escorting you to the vehicle.",
      },
      {
        question: "Do you monitor flight delays?",
        answer:
          "Yes. We monitor flight arrivals in real time and adjust pickup times accordingly to ensure a smooth airport transfer experience.",
      },
      {
        question: "Can I book a transfer from Nice Airport to Monaco?",
        answer:
          "Absolutely. Transfers between Nice Airport and Monaco are among our most requested services, offering a comfortable and reliable alternative to taxis and public transport.",
      },
      {
        question: "Which vehicles are available for airport transfers?",
        answer:
          "We offer luxury vehicles including the Mercedes S-Class, Mercedes V-Class, and Mercedes Maybach, depending on your group size and travel preferences.",
      },
      {
        question: "Can I book a return transfer to Nice Airport?",
        answer:
          "Yes. Many clients reserve both arrival and departure transfers to ensure a seamless travel experience throughout their stay on the French Riviera.",
      },
      {
      question: "Which destinations do you serve from Nice Airport?",
      answer:
        "We regularly provide transfers to Monaco, Cannes, Antibes, Saint-Tropez, Èze, Cap d’Ail, Villefranche-sur-Mer, and other destinations across the French Riviera.",
      }
    ]
  },
  "long-distance-transfer": {
    slug: "long-distance-transfer",
    path: "/our-services/transfers/long-distance-transfer",
    metadata: {
      title: "Long-Distance Private Transfer | Chauffeur Service | kokolimo",
      description:
        "Long-distance chauffeur transfers from the French Riviera to cities, resorts, villas, and airports with private comfort and premium execution.",
      keywords: [
        "long distance transfer Riviera",
        "private chauffeur long distance",
        "Nice to Milan chauffeur",
        "Monaco long distance transfer",
        "private transfer South of France",
      ],
    },
    serviceLabel: "Long-Distance Transfer",
    heroTitle: "Long-Distance Transfers in Private Comfort",
    heroDescription:
      "Private chauffeur transfers for routes beyond the core Riviera corridor, with premium comfort, privacy, and controlled pacing over longer distances.",
    heroImageSrc: "/assets/images/services/long-distance.webp",
    heroImageAlt: "Long-distance private chauffeur transfer",
    introTitle: "Distance Without Friction",
    introDescription:
      "Longer routes demand more than a standard transfer: comfort, discretion, luggage space, and a calm pace become part of the service quality.",
    panels: [
      {
        title: "Beyond the Coast",
        text: "We arrange long-distance rides to resorts, airports, cities, villas, and event destinations when a private vehicle makes the route smoother and more controlled.",
        theme: "dark",
      },
      {
        title: "Premium Travel Rhythm",
        text: "A long-distance chauffeur transfer gives clients privacy, flexible stops, and a far more composed travel experience than fragmented alternatives.",
        theme: "light",
      },
    ],
    audienceTitle: "Suited To",
    audienceAccent: "Extended Routes",
    audienceDescription:
      "This service is ideal when the route is part of the day, not just a short transfer between nearby points.",
    audienceCards: [
      {
        title: "Intercity Travel",
        text: "Comfortable private rides between the Riviera and major nearby cities or seasonal destinations.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Intercity icon",
      },
      {
        title: "Leisure Stays",
        text: "Smooth travel for villa check-ins, resort transfers, and itinerary moves with luggage and timing in mind.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Leisure route icon",
      },
      {
        title: "Executive Transfers",
        text: "A discreet, productive environment for clients who prefer private road travel over broken transport chains.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Executive route icon",
      },
    ],
    localLinksTitle: "Explore Transfer Types",
    localLinksDescription:
      "Browse the other transfer pages to help visitors land on the route format that matches their travel need.",
    localLinks: transferLinks,
    cta: {
      title: "Planning a Longer Private Transfer?",
      description:
        "Share the route and passenger details and we will recommend the right vehicle and chauffeur format for the journey.",
      buttonText: "Book Long-Distance Transfer",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What is considered a long-distance transfer?",
        answer:
          "A long-distance transfer typically covers journeys between cities, regions, airports, ski resorts, and destinations that require several hours of travel.",
      },
      {
        question: "Can I book a transfer between the French Riviera and the Alps?",
        answer:
          "Yes. We regularly provide long-distance transfers between destinations such as Nice, Monaco, Cannes, Saint-Tropez, Courchevel, Megève, and Chamonix.",
      },
      {
        question: "Do you provide international long-distance transfers?",
        answer:
          "Yes. Depending on your itinerary, we can arrange private transfers between France, Monaco, Switzerland, and other nearby European destinations.",
      },
      {
        question: "Can I request stops during a long-distance journey?",
        answer:
          "Absolutely. Stops can be arranged in advance for meals, meetings, sightseeing, or personal convenience throughout the journey.",
      },
      {
        question: "Which vehicle is best for a long-distance transfer?",
        answer:
          "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class offers additional space and comfort for families, groups, and extra luggage.",
      },
      {
        question: "Are long-distance transfer prices fixed in advance?",
        answer:
          "Yes. Your quote is agreed upon before the journey, providing complete transparency with no unexpected charges.",
      },
      {
        question: "Can I book a return long-distance transfer?",
        answer:
          "Yes. Many clients book both outbound and return journeys to ensure seamless transportation throughout their trip.",
      },
    ]
  },
};

export const hourlyChauffeurPages: Record<string, ServicePageConfig> = {
  nice: {
    slug: "nice",
    path: "/our-services/hourly-chauffeur/nice",
    metadata: {
      title: "Hourly Chauffeur Service in Nice | Private Driver in Nice | Kokolimo",
      description:
        "Book a private hourly chauffeur in Nice for business meetings, luxury hotels, shopping, airport pickups, and flexible travel across the French Riviera.",
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
      "A private chauffeur on standby for seafront hotels, shopping, appointments, meetings, and flexible movement across Nice.",
    heroImageSrc: "/assets/images/services/nice-transfer.jpeg",
    heroImageAlt: "Hourly chauffeur service in Nice",
    introTitle: "Hourly Service for Nice Days",
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
        text: "Clients avoid repeated bookings and keep one premium vehicle available between errands, meetings, and leisure moments.",
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
      "Keep the hourly chauffeur section available across all city pages so users can switch destination without going back.",
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
          "Clients frequently use our hourly chauffeur service for the Promenade des Anglais, Vieux-Nice, Port Lympia, luxury hotels, Avenue Jean Médecin, Nice Côte d’Azur Airport, and business appointments throughout the city. Many bookings also include day trips to Monaco, Cannes, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat and Saint-Paul-de-Vence.",
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
      title:   "Hourly Chauffeur Service in Cannes | Private Driver in Cannes | Kokolimo",
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
    audienceTitle: "Best For",
    audienceAccent: "Cannes Timing",
    audienceDescription:
      "This page targets the kind of chauffeur demand Cannes creates most often: event-led, hotel-led, and lifestyle-led movement.",
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
      "Keep the hourly chauffeur section available across all city pages so users can switch destination without going back.",
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
      title: "Hourly Chauffeur Service in Monaco | Private Driver in Monaco | Kokolimo",
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
    audienceTitle: "Made For",
    audienceAccent: "Monaco Standards",
    audienceDescription:
      "This page addresses the type of transport clients expect in Monaco: discreet, composed, and consistently available.",
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
      "Keep the hourly chauffeur section available across all city pages so users can switch destination without going back.",
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
      title: "Hourly Chauffeur Service in Saint-Tropez | Private Driver in Saint-Tropez | Kokolimo",
      description:
        "Hire a private chauffeur in Saint-Tropez by the hour for villa stays, yacht access, beach clubs, restaurants, and luxury travel.",
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
      "A dedicated chauffeur for villas, beach clubs, lunches, shopping, and seasonal schedules that need flexibility throughout the day.",
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
        text: "Clients avoid waiting for cars between stops and keep a premium, discreet transport base available from start to finish.",
        theme: "light",
      },
    ],
    audienceTitle: "Perfect For",
    audienceAccent: "Saint-Tropez Days",
    audienceDescription:
      "This page suits the kind of luxury travel rhythm Saint-Tropez is known for: villas, beach clubs, shopping, and evening transitions.",
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
      "Keep the hourly chauffeur section available across all city pages so users can switch destination without going back.",
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
        "Clients frequently visit Pampelonne Beach, Club 55, Nikki Beach, the Port of Saint-Tropez, luxury villas, five-star hotels, beach restaurants, and nearby destinations throughout the French Riviera.",
    },
    {
      question: "Which vehicle is recommended for an hourly chauffeur service in Saint-Tropez?",
      answer:
        "The Mercedes S-Class is ideal for executive and VIP travel, while the Mercedes V-Class is perfect for families, groups, beach club transfers, and guests travelling with additional luggage or shopping purchases.",
    },
  ]
  },
  "megeve": {
    slug: "megeve",
    path: "/our-services/hourly-chauffeur/megeve",
    metadata: {
      title: "Hourly Chauffeur Service in Megève | Private Driver in Megève | Kokolimo",
      description:
       "Private hourly chauffeur service in Megève for ski holidays, luxury hotels, chalet transfers, shopping, dining and flexible alpine travel.",
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
      "A private chauffeur on standby for luxury hotels, chalet stays, shopping, restaurants, ski holidays, and flexible travel throughout Megève and the French Alps.",
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
      title: "Hourly Chauffeur Service in Courchevel | Private Driver in Courchevel | Kokolimo",
      description:
        "Private hourly chauffeur service in Courchevel for luxury hotels, chalets, ski holidays, shopping, dining and flexible alpine travel.",
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
      "A private chauffeur on standby for luxury hotels, private chalets, ski holidays, shopping, dining, and flexible travel throughout Courchevel and the French Alps.",
    heroImageSrc: "/assets/images/services/courchevel.webp",
    heroImageAlt: "Luxury hourly chauffeur service in Courchevel",
    introTitle: "Premium Chauffeur Service for Courchevel Stays",
    introDescription:
      "Courchevel is one of the world's most prestigious ski destinations, known for its luxury hotels, private chalets, fine dining, and exclusive alpine experiences. An hourly chauffeur service gives you complete flexibility while enjoying comfort, discretion, and seamless transportation throughout your stay.",    panels: [
      {
        title: "Luxury Mobility Throughout the Day",
        text: "Whether travelling between your chalet, ski facilities, restaurants, boutiques, or nearby resorts, your chauffeur remains available whenever your schedule changes.",
        theme: "dark",
      },
      {
        title: "A Seamless Guest Experience",
        text: "Avoid parking challenges, winter driving, and multiple transport arrangements. Your chauffeur and vehicle remain at your disposal throughout the booking.",
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
          "An hourly chauffeur service offers complete flexibility throughout your stay. Whether travelling between chalets, luxury hotels, restaurants, boutiques, or ski facilities, your chauffeur remains available whenever you need transportation.",
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
      title: "Hourly Chauffeur Service in Chamonix | Private Driver in Chamonix | Kokolimo",
      description:
       "Private hourly chauffeur service in Chamonix for ski holidays, luxury hotels, mountain excursions, shopping, dining and flexible alpine travel.",
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
       "A private chauffeur on standby for luxury hotels, ski holidays, mountain experiences, restaurants, shopping, and flexible travel throughout Chamonix and the Alps.",
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
          "An hourly chauffeur service gives you complete flexibility throughout your stay. Whether you're travelling between hotels, ski areas, restaurants, shopping locations, or mountain attractions, your chauffeur remains available whenever you need transportation.",
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
        question: "What are the most popular destinations during hourly bookings in Chamonix?",
        answer:
          "Clients frequently travel between luxury hotels, the town centre, ski areas, restaurants, mountain attractions, and nearby Alpine destinations throughout the Chamonix Valley.",
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
      title: "Chauffeur Tour in Nice | Private Riviera Touring | kokolimo",
      description:
        "Private chauffeur tour in Nice with elegant city touring, coastal viewpoints, old town stops, and premium transportation throughout the day.",
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
      "A private chauffeur-led tour of Nice with elegant city movement, scenic coastline, and refined pacing throughout the day.",
    heroImageSrc: "/assets/images/services/nice-transfer.jpeg",
    heroImageAlt: "Private chauffeur tour in Nice",
    introTitle: "Discover Nice With Better Rhythm",
    introDescription:
      "Nice works best when the day blends old town charm, seafront movement, and selected stops without the guest managing transport details.",
    panels: [
      {
        title: "City + Coast",
        text: "We can combine old town atmosphere, seafront viewpoints, hotel pickups, and nearby scenic movements into one coherent touring day.",
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
      "Keep the chauffeur tour destinations visible on each city page so visitors can switch directly to another Riviera tour.",
    localLinks: tourCityLinks,
    cta: {
      title: "Plan Your Nice Chauffeur Tour",
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
      title: "Chauffeur Tour in Cannes | Private Riviera Touring | kokolimo",
      description:
        "Private chauffeur tour in Cannes with Croisette highlights, shopping areas, seafront touring, and premium day travel.",
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
      "A private chauffeur-guided day in Cannes with seafront movement, elegant stops, shopping access, and a polished Riviera touring experience.",
    heroImageSrc: "/assets/images/services/cannes-transfer.webp",
    heroImageAlt: "Private chauffeur tour in Cannes",
    introTitle: "Cannes as a Curated Day",
    introDescription:
      "Cannes feels best when shopping, boulevard movement, scenic drives, and hospitality stops are woven into one refined route.",
    panels: [
      {
        title: "Croisette Energy",
        text: "We shape the day around Cannes' most elegant areas, balancing seaside movement, shopping, and lunch or hotel timing.",
        theme: "dark",
      },
      {
        title: "Elegant Stops",
        text: "A chauffeur tour lets the guest enjoy Cannes with less friction between walking moments, hotel pickups, and scenic arrivals.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Cannes Exploration",
    audienceDescription:
      "This page is tailored for guests who want Cannes to feel polished, easy, and visually rewarding throughout the day.",
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
      "Keep the chauffeur tour destinations visible on each city page so visitors can switch directly to another Riviera tour.",
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
      title: "Chauffeur Tour in Monaco | Private Riviera Touring | kokolimo",
      description:
        "Private chauffeur tour in Monaco with prestige landmarks, panoramic roads, elegant arrivals, and premium touring throughout the principality.",
      keywords: [
        "chauffeur tour Monaco",
        "private tour Monaco driver",
        "Monaco private sightseeing chauffeur",
        "luxury Monaco day tour",
        "Monaco chauffeur experience",
      ],
    },
    serviceLabel: "Monaco Tour",
    heroTitle: "Private Tour in Monaco",
    heroDescription:
      "A private chauffeur-led Monaco experience shaped around prestige landmarks, panoramic movement, and refined touring comfort.",
    heroImageSrc: "/assets/images/services/monaco.webp",
    heroImageAlt: "Private chauffeur tour in Monaco",
    introTitle: "Monaco Needs Precision and Elegance",
    introDescription:
      "Monaco is compact but layered, and a chauffeur tour helps the guest experience it with style, timing control, and premium ease.",
    panels: [
      {
        title: "Prestige Touring",
        text: "We shape the route around Monaco's emblematic landmarks, scenic approaches, and refined stops without breaking the pace of the day.",
        theme: "dark",
      },
      {
        title: "Controlled Movement",
        text: "A chauffeur tour works especially well here because movement between viewpoints, hotels, and local highlights stays smooth and polished.",
        theme: "light",
      },
    ],
    audienceTitle: "Ideal For",
    audienceAccent: "Monaco Discovery",
    audienceDescription:
      "This page suits guests who want the Monaco experience to feel elevated, composed, and properly paced.",
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
      "Keep the chauffeur tour destinations visible on each city page so visitors can switch directly to another Riviera tour.",
    localLinks: tourCityLinks,
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
          "Guests often visit Monte-Carlo, Casino Square, Port Hercule, the Prince's Palace area, Monaco-Ville, luxury shopping districts, and panoramic viewpoints overlooking the Mediterranean."
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
      title:
        "Chauffeur Tour in Saint-Tropez | Private Riviera Touring | kokolimo",
      description:
        "Private chauffeur tour in Saint-Tropez with village access, coastal roads, elegant beach-side stops, and premium touring comfort.",
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
        text: "Village movement, lunch timing, beach-side stops, and return comfort all fit naturally inside a premium chauffeur tour.",
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
      "Keep the chauffeur tour destinations visible on each city page so visitors can switch directly to another Riviera tour.",
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
      title: "Private Tour in Megève | Winter Chauffeur Tours in the French Alps | Kokolimo",
      description:
        "Discover Megève during the winter season with a private chauffeur tour. Luxury chalets, ski resorts, gourmet restaurants, scenic Alpine drives, and tailor-made experiences in the French Alps.",
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
    serviceLabel: "Mégeve",
    heroTitle: "Private Tour in Mégeve",
    heroDescription:
      "Explore Megève during the winter season with a private chauffeur and luxury vehicle. Discover luxury chalets, ski resorts, mountain villages, gourmet restaurants, and tailor-made Alpine experiences throughout the French Alps.",      heroImageSrc: "/assets/images/services/megeve.webp",
    heroImageAlt: "Private chauffeur tour in Megève",
    introTitle: "Discover Megève During the Winter Season",
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
    audienceAccent: "Winter in Megève",
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
      title: "Plan Your Megève Winter private Tour",
      description:
        "Tell us where you are staying, your preferred destinations, and your travel dates, and we will create a personalized Alpine winter experience.",
      buttonText: "Book Megève Tour",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "What are the most popular winter tours from Megève?",
        answer:
          "Popular winter tours from Megève include Chamonix, Annecy, Courchevel, scenic Alpine drives, luxury ski resorts, and charming mountain villages throughout the French Alps.",
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
          "Guests frequently visit renowned properties such as Four Seasons Hotel Megève, Les Fermes de Marie, luxury chalets, gourmet restaurants, and exclusive winter destinations throughout the region.",
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
      title: "Private Tour in Courchevel | Winter Chauffeur Tours in the French Alps | Kokolimo",
      description:
        "Discover Courchevel during the winter season with a private chauffeur tour. Luxury chalets, ski resorts, gourmet restaurants, scenic Alpine drives, and tailor-made experiences in the French Alps.",
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
    introTitle: "Discover Courchevel During the Winter Season",
    introDescription:
    "From luxury chalets and world-renowned hotels to exceptional ski resorts and breathtaking Alpine scenery, a private tour in Courchevel offers comfort, flexibility, and a personalized way to experience the French Alps during winter.",   panels: [
      {
        title: "Winter Alpine Discovery",
        text: "Explore Courchevel, Les 3 Vallées, luxury ski resorts, Alpine villages, and spectacular winter landscapes with a private chauffeur.",
        theme: "dark",
      },
      {
        title: "Private Touring Comfort",
        text: "Travel at your own pace with one dedicated chauffeur and premium vehicle, enjoying complete flexibility between chalets, hotels, restaurants, and winter destinations.",
        theme: "light",
      },
    ],
    audienceTitle: "Great For",
    audienceAccent: "Winter in Courchevel",
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
          "Popular winter tours from Courchevel include Méribel, Megève, Annecy, Chamonix, scenic Alpine drives, luxury ski resorts, and charming mountain villages throughout the French Alps.",
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
          "Guests frequently visit renowned properties such as Cheval Blanc Courchevel, Airelles Courchevel, Six Senses Residences Courchevel, luxury chalets, gourmet restaurants, and exclusive winter destinations throughout the resort.",
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
      title:     "Private Tour in Chamonix | Winter Chauffeur Tours in the French Alps | Kokolimo",
      description:
       "Discover Chamonix during the winter season with a private chauffeur tour. Mont Blanc viewpoints, luxury hotels, Alpine villages, scenic drives, and tailor-made experiences in the French Alps.",
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
      "Explore Chamonix during the winter season with a private chauffeur and luxury vehicle. Discover Mont Blanc viewpoints, Alpine villages, ski resorts, gourmet restaurants, and tailor-made experiences throughout the French Alps.",    heroImageSrc: "/assets/images/services/chamonix.webp",
    heroImageAlt: "Private chauffeur tour in Chamonix",
    introTitle: "Discover Chamonix During the Winter Season",
    introDescription:
      "From iconic mountain landscapes and world-famous viewpoints to luxury hotels and charming Alpine villages, a private tour in Chamonix offers comfort, flexibility, and a personalized way to experience the French Alps during winter.",      
      panels: [{
        title: "Winter Alpine Discovery",
        text: "Explore Chamonix, Mont Blanc viewpoints, Alpine villages, scenic mountain roads, and some of the most spectacular winter landscapes in the French Alps.",
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
          "Guests frequently visit the Aiguille du Midi, Mer de Glace, Mont Blanc viewpoints, the historic centre of Chamonix, and scenic Alpine roads offering spectacular mountain scenery.",
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
