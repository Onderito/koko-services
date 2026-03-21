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
  audienceCards: [ServiceAudienceCard, ServiceAudienceCard, ServiceAudienceCard];
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
    label: "Transfers",
    description: "Airport and long-distance chauffeur rides",
  },
  {
    href: "/our-services/hourly-chauffeur",
    label: "Hourly Chauffeur",
    description: "Flexible chauffeur service in key Riviera destinations",
  },
  {
    href: "/our-services/chauffeur-tours",
    label: "Chauffeur Tours",
    description: "Private destination tours across the Riviera",
  },
];

export const homeServiceCards = [
  {
    title: "Transfers",
    kicker: "Airport & long-distance",
    description:
      "Point-to-point chauffeur service for airport arrivals, hotel pickups, events, and long-distance Riviera journeys with precise timing and premium comfort.",
    image: "/assets/images/services/transfer.webp",
    link: "/our-services/transfers",
  },
  {
    title: "Hourly Chauffeur",
    kicker: "Flexible by destination",
    description:
      "A dedicated chauffeur on standby for meetings, shopping, lunches, beach clubs, and multi-stop days in Nice, Cannes, Monaco, and Saint-Tropez.",
    image: "/assets/images/services/hourly.webp",
    link: "/our-services/hourly-chauffeur",
  },
  {
    title: "Chauffeur Tours",
    kicker: "Curated Riviera days",
    description:
      "Private chauffeur-led tours with flexible itineraries, local guidance, and elegant door-to-door travel for discovering Riviera destinations at your pace.",
    image: "/assets/images/services/private-tour.webp",
    link: "/our-services/chauffeur-tours",
  },
];

const hourlyCityLinks: ServiceCardLink[] = [
  {
    href: "/our-services/hourly-chauffeur/nice",
    label: "Nice",
    description: "Hotels, shopping, seafront appointments, and city mobility.",
  },
  {
    href: "/our-services/hourly-chauffeur/cannes",
    label: "Cannes",
    description: "Croisette stays, congresses, shopping, and dinner service.",
  },
  {
    href: "/our-services/hourly-chauffeur/monaco",
    label: "Monaco",
    description: "Business days, hotel arrivals, yacht access, and meetings.",
  },
  {
    href: "/our-services/hourly-chauffeur/saint-tropez",
    label: "Saint-Tropez",
    description: "Beach clubs, villas, seasonal events, and flexible day hire.",
  },
];

const tourCityLinks: ServiceCardLink[] = [
  {
    href: "/our-services/chauffeur-tours/nice",
    label: "Nice",
    description: "Old town, coastal viewpoints, markets, and nearby escapes.",
  },
  {
    href: "/our-services/chauffeur-tours/cannes",
    label: "Cannes",
    description: "Boulevard touring, shopping stops, and elegant coastal drives.",
  },
  {
    href: "/our-services/chauffeur-tours/monaco",
    label: "Monaco",
    description: "Prestige landmarks, panoramic roads, and refined day itineraries.",
  },
  {
    href: "/our-services/chauffeur-tours/saint-tropez",
    label: "Saint-Tropez",
    description: "Village streets, beaches, scenic arrivals, and stylish day trips.",
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
    title: "Private Transfers on the French Riviera | My Riviera",
    description:
      "Private chauffeur transfers for Nice Airport arrivals, hotel pickups, Monaco rides, Cannes events, and long-distance journeys across the French Riviera.",
    keywords: [
      "private transfers French Riviera",
      "Nice airport transfer",
      "chauffeur transfer Monaco",
      "Cannes private transfer",
      "long distance chauffeur Riviera",
    ],
  },
  serviceLabel: "Transfers",
  heroTitle: "Private Transfers Across the French Riviera",
  heroDescription:
    "Luxury chauffeur transfers for airport arrivals, hotel pickups, events, and longer journeys with precise coordination and discreet service.",
  heroImageSrc: "/assets/images/services/airport-arrivals.webp",
  heroImageAlt: "Private chauffeur transfer arrival on the French Riviera",
  introTitle: "The Art of the Transfer",
  introDescription:
    "A transfer should feel calm, controlled, and impeccably timed from the first minute to the last.",
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
  audienceDescription:
    "From short airport connections to intercity journeys, our transfer service adapts to the pace and expectations of premium travel.",
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
  localLinksDescription:
    "Choose the transfer page that matches the route style your clients are most likely to book.",
  localLinks: transferLinks,
  cta: {
    title: "Ready to Book Your Transfer?",
    description:
      "Tell us your route, timing, and passenger details and we will prepare the right chauffeur transfer for your stay.",
    buttonText: "Request a Transfer",
    buttonHref: "/contact-me",
  },
};

export const hourlyChauffeurPage: ServicePageConfig = {
  slug: "hourly-chauffeur",
  path: "/our-services/hourly-chauffeur",
  metadata: {
    title: "Hourly Chauffeur Service on the French Riviera | My Riviera",
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
  serviceLabel: "Hourly Chauffeur",
  heroTitle: "Hourly Chauffeur Service for Flexible Riviera Days",
  heroDescription:
    "A dedicated chauffeur on standby for business travel, shopping, lunches, meetings, and multi-stop days across the French Riviera.",
  heroImageSrc: "/assets/images/services/monaco.webp",
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
  path: "/our-services/chauffeur-tours",
  metadata: {
    title: "Chauffeur Tours on the French Riviera | My Riviera",
    description:
      "Private chauffeur tours in Nice, Cannes, Monaco, and Saint-Tropez with luxury vehicles, flexible itineraries, and refined touring across the Riviera.",
    keywords: [
      "chauffeur tours French Riviera",
      "private tour Nice chauffeur",
      "Monaco chauffeur tour",
      "Cannes private tour driver",
      "Saint-Tropez chauffeur day trip",
    ],
  },
  serviceLabel: "Chauffeur Tours",
  heroTitle: "Chauffeur Tours for Refined Riviera Discovery",
  heroDescription:
    "Private chauffeur-led touring for travelers who want scenic drives, elegant stops, and a flexible itinerary without handling the logistics themselves.",
  heroImageSrc: "/assets/images/services/driver.webp",
  heroImageAlt: "Private chauffeur tour on the French Riviera",
  introTitle: "The Art of the Chauffeur Tour",
  introDescription:
    "A chauffeur tour should feel curated and effortless, with the right rhythm, the right stops, and a premium vehicle throughout the day.",
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
  audienceDescription:
    "This service works best for travelers who want a destination experience, not just a point-to-point journey.",
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
  localLinksDescription:
    "Each destination page gives the tour concept a stronger local angle for both clients and search visibility.",
  localLinks: tourCityLinks,
  cta: {
    title: "Plan Your Chauffeur Tour",
    description:
      "Tell us which destination interests you and we will shape a private touring day around your pace, preferences, and pickup point.",
    buttonText: "Start Your Tour",
    buttonHref: "/contact-me",
  },
};

export const transferPages: Record<string, ServicePageConfig> = {
  "nice-airport-transfer": {
    slug: "nice-airport-transfer",
    path: "/our-services/transfers/nice-airport-transfer",
    metadata: {
      title: "Nice Airport Transfer | Private Chauffeur Arrival | My Riviera",
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
  },
  "long-distance-transfer": {
    slug: "long-distance-transfer",
    path: "/our-services/transfers/long-distance-transfer",
    metadata: {
      title: "Long-Distance Private Transfer | Chauffeur Service | My Riviera",
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
    heroImageSrc: "/assets/images/services/transfer.webp",
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
  },
};

export const hourlyChauffeurPages: Record<string, ServicePageConfig> = {
  nice: {
    slug: "nice",
    path: "/our-services/hourly-chauffeur/nice",
    metadata: {
      title: "Hourly Chauffeur Service in Nice | My Riviera",
      description:
        "Private hourly chauffeur service in Nice for hotels, shopping, lunches, meetings, appointments, and flexible premium city travel.",
      keywords: [
        "hourly chauffeur Nice",
        "private driver Nice by the hour",
        "Nice chauffeur standby",
        "Nice hourly car service",
        "chauffeur service Nice hotels",
      ],
    },
    serviceLabel: "Nice",
    heroTitle: "Hourly Chauffeur Service in Nice",
    heroDescription:
      "A private chauffeur on standby for seafront hotels, shopping, appointments, meetings, and flexible movement across Nice.",
    heroImageSrc: "/assets/images/services/luxury-hotel.webp",
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
  },
  cannes: {
    slug: "cannes",
    path: "/our-services/hourly-chauffeur/cannes",
    metadata: {
      title: "Hourly Chauffeur Service in Cannes | My Riviera",
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
    heroImageSrc: "/assets/images/services/monaco.webp",
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
  },
  monaco: {
    slug: "monaco",
    path: "/our-services/hourly-chauffeur/monaco",
    metadata: {
      title: "Hourly Chauffeur Service in Monaco | My Riviera",
      description:
        "Private hourly chauffeur service in Monaco for meetings, hotels, yacht access, executive travel, and refined standby transportation.",
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
  },
  "saint-tropez": {
    slug: "saint-tropez",
    path: "/our-services/hourly-chauffeur/saint-tropez",
    metadata: {
      title: "Hourly Chauffeur Service in Saint-Tropez | My Riviera",
      description:
        "Private hourly chauffeur service in Saint-Tropez for villas, beach clubs, shopping, lunch reservations, and flexible summer travel.",
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
  },
};

export const chauffeurTourPages: Record<string, ServicePageConfig> = {
  nice: {
    slug: "nice",
    path: "/our-services/chauffeur-tours/nice",
    metadata: {
      title: "Chauffeur Tour in Nice | Private Riviera Touring | My Riviera",
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
    heroTitle: "Chauffeur Tour in Nice",
    heroDescription:
      "A private chauffeur-led tour of Nice with elegant city movement, scenic coastline, and refined pacing throughout the day.",
    heroImageSrc: "/assets/images/services/luxury-hotel.webp",
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
  },
  cannes: {
    slug: "cannes",
    path: "/our-services/chauffeur-tours/cannes",
    metadata: {
      title: "Chauffeur Tour in Cannes | Private Riviera Touring | My Riviera",
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
    heroTitle: "Chauffeur Tour in Cannes",
    heroDescription:
      "A private chauffeur-guided day in Cannes with seafront movement, elegant stops, shopping access, and a polished Riviera touring experience.",
    heroImageSrc: "/assets/images/services/private-tour.webp",
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
  },
  monaco: {
    slug: "monaco",
    path: "/our-services/chauffeur-tours/monaco",
    metadata: {
      title: "Chauffeur Tour in Monaco | Private Riviera Touring | My Riviera",
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
    heroTitle: "Chauffeur Tour in Monaco",
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
  },
  "saint-tropez": {
    slug: "saint-tropez",
    path: "/our-services/chauffeur-tours/saint-tropez",
    metadata: {
      title: "Chauffeur Tour in Saint-Tropez | Private Riviera Touring | My Riviera",
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
    heroTitle: "Chauffeur Tour in Saint-Tropez",
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
  },
};
