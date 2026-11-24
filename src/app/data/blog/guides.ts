import type { BlogPost } from "./types";

// Cluster F — "Best of" / informational travel guides.
export const guidePosts: BlogPost[] = [
  {
    slug: "french-riviera-chauffeur-prices",
    title: "French Riviera Chauffeur Prices",
    description:
      "What a private chauffeur costs on the French Riviera: airport transfer, hourly and full-day prices by vehicle, from Nice to Saint-Tropez.",
    excerpt:
      "Airport transfer, hourly and full-day prices by vehicle. What a private chauffeur costs on the French Riviera.",
    category: "Travel Guides",
    heroKicker: "Chauffeur prices",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-chauffeur-prices.webp",
    imageAlt:
      "A black luxury chauffeur car on a scenic French Riviera coastal road above the sea",
    keywords: [
      "French Riviera chauffeur prices",
      "Riviera chauffeur cost",
      "private driver prices Riviera",
      "Nice chauffeur rates",
      "chauffeur price French Riviera",
    ],
    intro:
      "A private chauffeur on the French Riviera is priced in three simple ways: fixed-price transfers by route, an hourly rate for as-directed use, and a full-day rate. What you pay depends mostly on the vehicle and the distance. Here is a clear guide to French Riviera chauffeur prices.",
    sections: [
      {
        id: "how-chauffeur-pricing-works",
        title: "How chauffeur pricing works",
        paragraphs: [
          "Most journeys fall into one of three types. A transfer is a fixed price for a set route, such as the airport to your hotel. Hourly, or as-directed, hire is charged by the hour with the car at your disposal. A full day is a fixed rate for a day of touring or events.",
          "Across all three, the price rises with the vehicle class — from the Mercedes E-Class through the V-Class and S-Class to the Maybach.",
        ],
        bullets: [
          "Fixed-price transfers by route",
          "Hourly, as-directed hire",
          "Full-day rates for tours and events",
          "Price scales with the vehicle class",
        ],
      },
      {
        id: "airport-transfer-prices",
        title: "Airport transfer prices",
        paragraphs: [
          "Transfers from Nice Airport are fixed by destination. As a guide, an E-Class transfer runs from around €90 to Nice, €120 to Antibes, €150 to Cannes or Monaco, and €400 to Saint-Tropez, the furthest. A larger V-Class adds roughly €30 to €100 depending on the route, with the S-Class and Maybach higher again.",
          "Because the price is fixed in advance, there are no surprises from traffic or a running meter.",
        ],
        bullets: [
          "Nice: from €90 (E-Class)",
          "Antibes: from €120",
          "Cannes and Monaco: from €150",
          "Saint-Tropez: from €400",
        ],
      },
      {
        id: "hourly-and-full-day-rates",
        title: "Hourly and full-day rates",
        paragraphs: [
          "For touring, events or a day of meetings, hourly and full-day hire keep the car with you. Indicative hourly rates run from around €90 in an E-Class, €110 in a V-Class and €130 in an S-Class, up to €300 in a Maybach. A full day runs from around €750, €880 and €1,040 respectively, and €2,400 for the Maybach.",
          "As-directed hire is the natural choice for day trips, weddings, festivals and multi-stop days.",
        ],
        bullets: [
          "E-Class: from €90/hour, €750/day",
          "V-Class: from €110/hour, €880/day",
          "S-Class: from €130/hour, €1,040/day",
          "Maybach: from €300/hour, €2,400/day",
        ],
      },
      {
        id: "what-affects-the-price",
        title: "What affects the price",
        paragraphs: [
          "Beyond vehicle and distance, a few factors move the price: the size of the party and luggage, which decides the vehicle; the season and major events, when demand peaks; and any waiting or extra stops. A one-way transfer is priced differently from a day with the car retained.",
          "For a clear quote, the route or hours and the vehicle are all that is needed.",
        ],
      },
    ],
    faq: [
      {
        question: "How much is a chauffeur from Nice Airport to Monaco?",
        answer:
          "From around €150 in an E-Class or €180 in a V-Class, as a fixed transfer price with no meter or traffic surcharges.",
      },
      {
        question: "What is the hourly rate for a Riviera chauffeur?",
        answer:
          "Indicatively from around €90 an hour in an E-Class, €110 in a V-Class and €130 in an S-Class, with the Maybach higher.",
      },
      {
        question: "How much is a full day with a chauffeur?",
        answer:
          "From around €750 in an E-Class, €880 in a V-Class and €1,040 in an S-Class, ideal for tours, weddings and events.",
      },
      {
        question: "Are chauffeur transfer prices fixed?",
        answer:
          "Yes. Transfers are quoted as a fixed price for the route in advance, so there are no surprises from traffic or a running meter.",
      },
    ],
    relatedSlugs: [
      "chauffeur-vs-taxi-vs-rental-car-riviera",
      "nice-airport-to-monaco",
    ],
    ctaTitle: "Get a chauffeur quote",
    ctaDescription:
      "Fixed-price transfers, hourly and full-day hire. A private chauffeur across the French Riviera, quoted in advance.",
    ctaHref: "/our-services/transfers",
    ctaLabel: "See transfer options",
  },
  {
    // Rewritten 13 Nov 2026. The first version quoted the airport's taxi fares and showed the taxi cheaper than us;
    // the user: "that direction is wrong". Now written like Crown Limousines' Nice Airport pages (Google #3 for "nice
    // airport transfer", 7 Oct) and our best post, getting-around-monaco: our own service, routes and prices only; the
    // taxi appears only as the search people make ("Nice to Monaco taxi"), never with a fare. Facts:
    // /our-services/transfers/nice-airport-transfer (arrivals hall, name board, flight monitoring, one hour of waiting,
    // cancellation), data/vehicles.tsx (prices, passengers), data/blog/routes.ts and the route pages (distances, times),
    // the child-seats post (seats on request). Keywords: Jev's keyword judge (Google searches), 13 Nov 2026, fit above
    // 0.95 (koko tools/jev-seo/runs/keyword-gap/2026-11-13/nice-article-keywords-judged.json); the user's requested
    // keywords lead. The first URL, /blog/nice-airport-taxi-vs-private-driver, redirects here (next.config.ts).
    slug: "nice-airport-private-driver",
    title: "Nice Airport Transfer: Private Driver to Monaco and Cannes",
    description:
      "Nice Airport transfer with a private driver: meet and greet in arrivals, flight tracking, one hour of waiting and fixed prices to Nice, Cannes and Monaco.",
    excerpt:
      "Your private driver at Nice Airport: how the transfer works, fixed prices to Nice, Cannes, Monaco and Saint-Tropez, and how to book.",
    category: "Travel Guides",
    heroKicker: "Nice Airport private driver",
    readTime: "6 min read",
    publishedAt: "2026-11-12",
    imageUrl: "/assets/images/blog/nice-airport-private-driver.webp",
    imageAlt:
      "A private driver holding a name board welcomes two travellers and their suitcases beside a black Mercedes E-Class outside Nice Côte d'Azur Airport",
    keywords: [
      "private driver Nice",
      "Nice airport transfer",
      "Nice airport to Monaco transfer",
      "Nice to Monaco taxi",
      "private driver Nice airport",
      "Nice airport private transfer",
      "VIP transfer Nice airport",
      "transfert aéroport Nice",
      "chauffeur privé aéroport",
      "private driver Nice to Monaco",
      "Nice airport transfer to Monaco",
      "Nice airport chauffeur",
      "Nice airport limousine",
      "Nice airport transfer prices",
      "chauffeur privé aéroport Nice",
      "transfert aéroport Nice Monaco",
    ],
    intro:
      "Landing at Nice Côte d'Azur Airport, the simplest way to reach your hotel, villa or yacht on the French Riviera is a private driver who is already waiting for you. With a Kokolimo **Nice airport transfer**, your chauffeur follows your flight, meets you in the arrivals hall with your name on a board, takes your luggage and drives you door to door at a **fixed price confirmed before you fly**. Here is how a Nice Airport private transfer works, the prices to Nice, Antibes, Cannes, Monaco and Saint-Tropez, and how to book your driver.",
    sections: [
      {
        id: "how-it-works",
        title: "How your Nice Airport private transfer works",
        paragraphs: [
          "You book before you travel, with your flight number, terminal, number of passengers and destination. Your confirmation sets out the terminal, the vehicle and the fixed fare, so the price of your Nice airport transfer is **known before you leave home**.",
          "On the day, your private driver at Nice Airport **monitors your flight in real time** and adapts to an early or late landing. Your chauffeur waits for you inside the arrivals hall of Terminal 1 or Terminal 2 with a name board, helps with your luggage and walks with you to the car. **One hour of waiting is included** from the pickup time stated in your reservation, so a long wait at passport control or baggage claim costs nothing extra.",
        ],
        bullets: [
          "A fixed fare, confirmed before you fly",
          "Real-time flight monitoring",
          "Meet and greet with a name board in arrivals, at Terminal 1 and Terminal 2",
          "One hour of waiting included",
          "Help with your luggage, and child seats on request",
          "Free cancellation until five days before your transfer",
        ],
      },
      {
        id: "prices",
        title: "Nice Airport transfer prices",
        paragraphs: [
          "These are Kokolimo's starting fares from Nice Côte d'Azur Airport in a Mercedes E-Class for up to 3 passengers. The **final fixed fare is confirmed before booking** and does not change with traffic or a late landing within your waiting time.",
        ],
        bullets: [
          "Nice city centre: from €90",
          "Antibes and Juan-les-Pins: from €120",
          "Cannes: from €150",
          "Monaco and Cap d'Ail: from €150",
          "Saint-Tropez: from €400",
        ],
      },
      {
        id: "monaco",
        title: "Nice Airport to Monaco transfer",
        paragraphs: [
          "Monaco is about 30 km east of the airport. Your **private driver from Nice to Monaco** takes the A8 motorway, **about 30 minutes off-peak** and 45 to 50 minutes in traffic or on event days, and drops you at your hotel in Monte-Carlo, at Port Hercule or at the Casino, with no tunnels or parking to deal with.",
          "Many travellers search for a Nice to Monaco taxi. A **Nice Airport transfer to Monaco** with Kokolimo is booked in advance instead: a **fixed fare from €150** in a Mercedes E-Class, or €180 in a V-Class for up to 7, your chauffeur waiting in arrivals and one hour of waiting included. During the Monaco Grand Prix, when streets close, and the Monaco Yacht Show, booking ahead matters most.",
        ],
        bullets: [
          "About 30 km, 30 minutes off-peak on the A8",
          "Drop-off at your hotel in Monte-Carlo, at Port Hercule or at the Casino",
          "From €150 in an E-Class, €180 in a V-Class, €220 in an S-Class",
        ],
      },
      {
        id: "cannes-and-antibes",
        title: "Nice Airport to Cannes and Antibes",
        paragraphs: [
          "Cannes is about 26 km west of the airport: **around 30 minutes off-peak**, and up to an hour during the Film Festival, the congresses or the summer peak. Your driver takes you to the Croisette, your hotel or the Palais des Festivals, **from €150** in an E-Class.",
          "Antibes is closer, around 25 minutes, for Juan-les-Pins, Cap d'Antibes or Port Vauban, **from €120**. For the Film Festival and the big congress weeks in Cannes, **book your car as early as you can**.",
        ],
      },
      {
        id: "whole-riviera",
        title: "A private driver from Nice Airport to the whole Riviera",
        paragraphs: [
          "A private driver in Nice covers the rest of the coast too. Saint-Tropez is about 110 km away, around 1 hour 30 minutes outside the summer season, **from €400**. Villefranche-sur-Mer is about 20 minutes away, Saint-Jean-Cap-Ferrat about 25 and Menton about 40, past Monaco. Your driver takes you to a hotel, a private villa or **straight to your yacht** in the port.",
          "The same service works **for your departure**: your chauffeur collects you from your hotel or villa and brings you to the right terminal at Nice Airport in good time for your flight.",
        ],
      },
      {
        id: "vehicles",
        title: "VIP transfer from Nice Airport: choose your car",
        paragraphs: [
          "Every Kokolimo Nice airport transfer is made in a Mercedes, chosen for your group and your luggage. Families and groups travel together in a **V-Class for up to 7 passengers**, from €110 to Nice, €150 to Antibes, €180 to Cannes or Monaco and €500 to Saint-Tropez.",
          "For a **VIP transfer from Nice Airport** or a **limousine service**, the S-Class and the Mercedes-Maybach add more space and comfort, with the same meet and greet in arrivals. A Nice Airport limousine suits business arrivals, weddings and special occasions.",
        ],
        bullets: [
          "Mercedes E-Class: up to 3 passengers, from €90",
          "Mercedes V-Class: up to 7 passengers, from €110",
          "Mercedes S-Class: up to 3 passengers, from €150",
          "Mercedes-Maybach: up to 3 passengers, from €300",
        ],
      },
      {
        id: "how-to-book",
        title: "How to book your Nice Airport chauffeur",
        paragraphs: [
          "Book online or send us your request with your flight number, terminal, number of passengers, luggage and destination. You receive a confirmation with the vehicle, the meeting point and the fixed fare. **Cancellation is free until five days before** the date and time of your transfer; less than five days before, the full fare is charged.",
          "French-speaking travellers book the same service as a **transfert aéroport Nice** avec chauffeur privé: a **chauffeur privé aéroport Nice** meets you in arrivals at a fixed price, including for a transfert aéroport Nice Monaco from €150.",
        ],
      },
    ],
    faq: [
      {
        question: "How much is a Nice Airport transfer?",
        answer:
          "From €90 to Nice city centre, €120 to Antibes and €150 to Cannes or Monaco in a Mercedes E-Class for up to 3 passengers. The fixed fare is confirmed before booking, with one hour of waiting included.",
      },
      {
        question: "Where does my private driver meet me at Nice Airport?",
        answer:
          "Inside the arrivals hall of Terminal 1 or Terminal 2, with a name board. Your chauffeur helps with your luggage and walks with you to the car.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "Your chauffeur monitors your flight in real time. One hour of waiting is included from the pickup time stated in your reservation; contact us as soon as possible if a major delay affects that time.",
      },
      {
        question: "How long is the transfer from Nice Airport to Monaco?",
        answer:
          "About 30 minutes off-peak on the A8 motorway, and 45 to 50 minutes in traffic or on event days. A Nice Airport to Monaco transfer starts from €150 in a Mercedes E-Class.",
      },
      {
        question: "Is a private transfer an alternative to a Nice to Monaco taxi?",
        answer:
          "Yes. Kokolimo is a private chauffeur service, not a taxi: your transfer from Nice to Monaco is booked in advance at a fixed fare, from €150, with your driver waiting in arrivals with your name.",
      },
      {
        question: "Can I book a VIP transfer or a limousine from Nice Airport?",
        answer:
          "Yes. A VIP transfer in a Mercedes S-Class starts from €150 to Nice, and in a Mercedes-Maybach from €300, with the same meet and greet in arrivals.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellation is free until five days before the booked date and pickup time. If the transfer is cancelled less than five days before, the full fare is charged.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-monaco",
      "airport-meet-and-greet-explained",
      "nice-cote-dazur-airport-terminals-guide",
    ],
    ctaTitle: "Book your Nice Airport transfer",
    ctaDescription:
      "A fixed fare, a driver waiting in arrivals with your name and one hour of waiting included. From €90 to central Nice.",
    ctaHref: "/our-services/transfers/nice-airport-transfer",
    ctaLabel: "See Nice Airport transfers",
    bookingCta: {
      afterSection: "prices",
      schema: {
        kind: "transfer",
        serviceName: "Nice Airport private transfer",
        place: { name: "Nice Côte d'Azur Airport", latitude: 43.6653, longitude: 7.2153 },
      },
    },
  },
  {
    slug: "chauffeur-vs-taxi-vs-rental-car-riviera",
    title: "Chauffeur vs Taxi vs Rental Car",
    description:
      "Chauffeur, taxi or rental car on the French Riviera: the costs, the trade-offs and which to choose for getting around the coast.",
    excerpt:
      "The costs and trade-offs of a chauffeur, a taxi or a rental car — and which to choose on the French Riviera.",
    category: "Travel Guides",
    heroKicker: "How to get around",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/chauffeur-vs-taxi-vs-rental-car-riviera.webp",
    imageAlt:
      "A black luxury chauffeur car on a Riviera seafront promenade with a chauffeur opening the door",
    keywords: [
      "chauffeur vs taxi Riviera",
      "rental car French Riviera",
      "taxi French Riviera",
      "getting around French Riviera",
      "private driver vs taxi Nice",
    ],
    intro:
      "There are three main ways to get around the French Riviera: a private chauffeur, taxis and ride-hailing, or a rental car. Each has its place, and the right choice depends on your trip. Here is how they compare.",
    sections: [
      {
        id: "private-chauffeur",
        title: "A private chauffeur",
        paragraphs: [
          "A chauffeur gives you a car and driver at fixed, agreed prices — met at the airport, delivered to the door, with no parking, navigation or timetables to worry about, and local knowledge of the roads and the diversions on busy days. It is the most comfortable and reliable option, and the natural choice for arrivals, day trips, events and groups.",
          "It costs more per journey than a taxi, but removes every friction and the price is known in advance.",
        ],
        bullets: [
          "Fixed prices, door to door",
          "No parking, navigation or timetables",
          "Local knowledge for busy days",
          "Best for arrivals, tours, events and groups",
        ],
      },
      {
        id: "taxis-and-ride-hailing",
        title: "Taxis and ride-hailing",
        paragraphs: [
          "Taxis and ride-hailing work well for a short, central hop: a restaurant, the station, a quick trip in town. But they can be scarce and expensive at peak times, on event days and late at night, and metered fares carry the uncertainty of traffic.",
          "They suit the occasional single ride rather than a full day of touring across the coast.",
        ],
        bullets: [
          "Fine for short, central trips",
          "Scarce and pricey at peak times",
          "Metered fares vary with traffic",
          "Less suited to a full day of touring",
        ],
      },
      {
        id: "rental-cars",
        title: "Rental cars",
        paragraphs: [
          "A rental car offers independence for exploring the hinterland and villages at your own pace. The trade-offs are real, though: parking is scarce and expensive in Nice, Cannes, Monaco and Saint-Tropez, the corniches and city traffic are demanding to unfamiliar drivers, and a car is a liability on evenings out.",
          "It suits independent, rural touring more than city-based or event-heavy trips.",
        ],
        bullets: [
          "Independence for rural touring",
          "Parking scarce and costly in the towns",
          "Demanding roads for unfamiliar drivers",
          "A liability for evenings out",
        ],
      },
      {
        id: "which-to-choose",
        title: "Which to choose",
        paragraphs: [
          "For airport arrivals, day trips, weddings, events and any group, a chauffeur is the easiest and most comfortable option. For a quick central hop, a taxi does the job. For an independent trip built around the countryside and villages, a rental car has its place, often alongside a chauffeur for the airport and the big days.",
          "Many visitors mix them: a chauffeur for the arrival and the highlights, and other options in between.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a chauffeur better than a taxi on the Riviera?",
        answer:
          "For arrivals, day trips, events and groups, yes — fixed prices, door to door and no parking or timetables, where taxis suit short hops.",
      },
      {
        question: "Should I rent a car on the French Riviera?",
        answer:
          "Only for independent, rural touring. Parking is scarce and costly in the towns, and the roads are demanding, so many pair it with a chauffeur.",
      },
      {
        question: "Are taxis easy to find on the Riviera?",
        answer:
          "For short central trips, usually — but they can be scarce and expensive at peak times, on event days and late at night.",
      },
      {
        question: "What is the most comfortable way to get around?",
        answer:
          "A private chauffeur, met at the airport and on call throughout, with no parking, navigation or timetables and fixed prices.",
      },
    ],
    relatedSlugs: [
      "french-riviera-chauffeur-prices",
      "getting-around-nice",
      "nice-airport-to-cannes",
    ],
    ctaTitle: "Travel the easy way",
    ctaDescription:
      "Met at the airport, door to door, no parking. A private chauffeur is the simplest way around the French Riviera.",
    ctaHref: "/our-services/transfers",
    ctaLabel: "See transfer options",
  },
  {
    slug: "french-riviera-honeymoon-guide",
    title: "French Riviera Honeymoon Guide",
    description:
      "A French Riviera honeymoon guide: the most romantic towns, hotels and experiences, and private transport to make it seamless.",
    excerpt:
      "The most romantic towns, hotels and experiences: a guide to a French Riviera honeymoon.",
    category: "Travel Guides",
    heroKicker: "Honeymoon",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-honeymoon-guide.webp",
    imageAlt:
      "A romantic French Riviera coastal view at sunset with a couple on a terrace above the sea",
    keywords: [
      "French Riviera honeymoon",
      "romantic French Riviera",
      "Riviera honeymoon guide",
      "honeymoon Cote d'Azur",
      "romantic Riviera getaway",
    ],
    intro:
      "Few places are made for romance like the French Riviera: perched villages, sea-view terraces, grand hotels and golden sunsets over the Mediterranean. It is a honeymoon classic for good reason. Here is a guide to a romantic French Riviera honeymoon.",
    sections: [
      {
        id: "the-most-romantic-places",
        title: "The most romantic places",
        paragraphs: [
          "For romance, the coast has no shortage of settings: the medieval village of Èze on its cliff, the artists' village of Saint-Paul-de-Vence, the discreet peninsula of Cap-Ferrat and the pastel harbour of Villefranche. Sunset from a corniche viewpoint or a hilltop terrace is hard to beat.",
          "These are the places to build a honeymoon around.",
        ],
        bullets: [
          "Èze, perched on its cliff",
          "Saint-Paul-de-Vence, the artists' village",
          "Cap-Ferrat and Villefranche",
          "Sunsets from the corniche viewpoints",
        ],
      },
      {
        id: "romantic-hotels-and-dining",
        title: "Romantic hotels and dining",
        paragraphs: [
          "The Riviera's grand hotels are honeymoons in themselves: palaces above the sea at Cap-Ferrat and Beaulieu, clifftop rooms in Èze, and legendary addresses in Monaco and Cannes. Add a Michelin dinner with a sea view and the evenings take care of themselves.",
          "A stay can be as grand or as intimate as you wish.",
        ],
        bullets: [
          "Palace hotels above the sea",
          "Clifftop rooms in Èze",
          "Legendary addresses in Monaco and Cannes",
          "Michelin dining with sea views",
        ],
      },
      {
        id: "seamless-by-private-chauffeur",
        title: "Seamless by private chauffeur",
        paragraphs: [
          "A honeymoon should be effortless, and a private chauffeur makes it so: met at the airport, driven between villages and dinners, and free of parking, maps and timetables. Sunset drives along the corniches and private tours of the coast become part of the romance.",
          "The couple simply enjoy the days; the driving is handled.",
        ],
        bullets: [
          "Met at the airport, driven throughout",
          "Sunset drives along the corniches",
          "Private tours of the coast and villages",
          "No parking, maps or timetables",
        ],
      },
    ],
    faq: [
      {
        question: "Is the French Riviera good for a honeymoon?",
        answer:
          "Ideally so. Perched villages, sea-view terraces, grand hotels and golden sunsets make it one of the great romantic destinations.",
      },
      {
        question: "Where are the most romantic places on the Riviera?",
        answer:
          "Èze on its cliff, Saint-Paul-de-Vence, the Cap-Ferrat peninsula and Villefranche, with sunsets from the corniche viewpoints.",
      },
      {
        question: "What are the best honeymoon hotels on the Riviera?",
        answer:
          "Palace hotels above the sea at Cap-Ferrat and Beaulieu, clifftop rooms in Èze and legendary addresses in Monaco and Cannes.",
      },
      {
        question: "How do you get around on a Riviera honeymoon?",
        answer:
          "A private chauffeur makes it seamless: met at the airport and driven between villages, dinners and sunset viewpoints, with no parking.",
      },
    ],
    relatedSlugs: [
      "most-scenic-drives-french-riviera",
    ],
    ctaTitle: "A seamless Riviera honeymoon",
    ctaDescription:
      "Sunset drives, villages and dinners, effortlessly linked: a private chauffeur for a French Riviera honeymoon.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "nice-cannes-monaco-where-to-stay",
    title: "Nice, Cannes or Monaco: Where to Stay",
    description:
      "Nice, Cannes or Monaco: how to choose where to stay on the French Riviera, and what each base offers for your trip.",
    excerpt:
      "How to choose where to stay on the French Riviera: what Nice, Cannes and Monaco each offer as a base.",
    category: "Travel Guides",
    heroKicker: "Where to stay",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/nice-cannes-monaco-where-to-stay.webp",
    imageAlt:
      "A panoramic view of the French Riviera coast with a town and the turquoise Mediterranean",
    keywords: [
      "where to stay French Riviera",
      "Nice vs Cannes vs Monaco",
      "best base French Riviera",
      "where to stay Cote d'Azur",
      "Riviera where to base",
    ],
    intro:
      "Deciding where to base yourself is the first big choice of a Riviera trip. Nice, Cannes and Monaco each make a fine base, but they suit different travellers. Here is how they compare and how to choose where to stay on the French Riviera.",
    sections: [
      {
        id: "nice",
        title: "Nice — central and connected",
        paragraphs: [
          "Nice is the natural all-round base: central on the coast, with its own airport, a lively old town, museums and the Promenade, plus the best public transport and the easiest reach of the whole Riviera. It also offers the widest range of prices, from grand hotels to simple ones.",
          "For most first-time visitors, Nice is the sensible, flexible choice.",
        ],
        bullets: [
          "Central and best connected",
          "Airport, old town and the Promenade",
          "The easiest reach of the whole coast",
          "The widest range of prices",
        ],
      },
      {
        id: "cannes",
        title: "Cannes — glamour and the west",
        paragraphs: [
          "Cannes suits those drawn to glamour, beaches and the western Riviera: the Croisette, its palace hotels, the Lérins Islands and easy trips to Antibes, Grasse and the Esterel. It comes alive around its festivals and is a stylish, beach-focused base.",
          "Choose Cannes for the west of the coast and a more glamorous, seaside stay.",
        ],
        bullets: [
          "Glamour, beaches and the Croisette",
          "Palace hotels and the Lérins Islands",
          "Easy trips west to Antibes and Grasse",
          "Lively around its festivals",
        ],
      },
      {
        id: "monaco",
        title: "Monaco — luxury and the east",
        paragraphs: [
          "Monaco is the choice for luxury and the eastern Riviera: its palace hotels, the Casino, the harbour and easy reach of Èze, the corniches and the Italian border. Compact and glamorous, it is a small but dazzling base, best paired with a chauffeur for the steep, tight streets.",
          "Choose Monaco for luxury, events and the eastern coast.",
        ],
        bullets: [
          "Luxury, the Casino and the harbour",
          "Easy reach of Èze and the corniches",
          "Compact but dazzling",
          "Best paired with a chauffeur",
        ],
      },
      {
        id: "how-to-choose",
        title: "How to choose",
        paragraphs: [
          "For flexibility and value, base in Nice; for glamour and the west, Cannes; for luxury and the east, Monaco. Whichever you choose, a private chauffeur closes the distance, so a single base easily reaches the whole coast for day trips.",
          "Many visitors stay in Nice and let a chauffeur bring the rest of the Riviera to them.",
        ],
      },
    ],
    faq: [
      {
        question: "Where is the best place to stay on the French Riviera?",
        answer:
          "Nice is the best all-round base: central, well connected and good value. Cannes suits glamour and the west, Monaco luxury and the east.",
      },
      {
        question: "Is Nice or Cannes better as a base?",
        answer:
          "Nice is more central and better connected with a wider price range; Cannes is more glamorous and beach-focused, suiting the western coast.",
      },
      {
        question: "Should I stay in Monaco?",
        answer:
          "Choose Monaco for luxury, events and the eastern Riviera. It is compact and glamorous, best paired with a chauffeur for its steep streets.",
      },
      {
        question: "Can I reach the whole Riviera from one base?",
        answer:
          "Yes. The coast is compact, and a private chauffeur links the towns and villages into easy day trips from a single base.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "best-things-to-do-in-cannes",
    ],
    ctaTitle: "Reach the whole coast from your base",
    ctaDescription:
      "Wherever you stay, a private chauffeur brings the rest of the French Riviera to you in easy day trips.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-wedding-transport",
    title: "French Riviera Wedding Transport",
    description:
      "A guide to wedding transport on the French Riviera: chauffeured cars for the couple, guests and the whole day, seamlessly arranged.",
    excerpt:
      "Chauffeured cars for the couple, the guests and the whole day: wedding transport on the French Riviera.",
    category: "Travel Guides",
    heroKicker: "Weddings",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-wedding-transport.webp",
    imageAlt:
      "An elegant black chauffeur car decorated for a wedding outside a Riviera venue with flowers",
    keywords: [
      "French Riviera wedding transport",
      "Riviera wedding cars",
      "wedding chauffeur French Riviera",
      "wedding car hire Cote d'Azur",
      "Riviera wedding transfers",
    ],
    intro:
      "A Riviera wedding is a logistical event as much as a romantic one, and transport sits at its heart: the couple's grand arrival, the guests moving between venues, and a day that must run to time. A chauffeur service ties it all together. Here is a guide to wedding transport on the French Riviera.",
    sections: [
      {
        id: "the-couples-car",
        title: "The couple's car",
        paragraphs: [
          "The arrival and departure are the images everyone remembers, and an immaculate S-Class or Maybach makes them effortless and elegant. A dedicated chauffeur looks after the couple all day, from the preparations to the send-off, with the car available whenever it is needed.",
          "It is the calm, unhurried thread through the busiest day.",
        ],
        bullets: [
          "An immaculate S-Class or Maybach",
          "A dedicated chauffeur for the couple",
          "On call from preparations to send-off",
          "Elegant arrivals and departures",
        ],
      },
      {
        id: "guest-transport",
        title: "Guest transport",
        paragraphs: [
          "Guests scattered across hotels need moving to the ceremony and reception and safely back at the end of the night, often between venues in different towns. Spacious V-Class vehicles and coordinated timings keep everyone together and on time, without the worry of driving or parking after a celebration.",
          "It is the detail that makes a wedding feel effortless for everyone.",
        ],
        bullets: [
          "V-Class shuttles between venues and hotels",
          "Coordinated arrivals and late returns",
          "No driving or parking for guests",
          "Everyone together and on time",
        ],
      },
      {
        id: "the-whole-day-coordinated",
        title: "The whole day, coordinated",
        paragraphs: [
          "The value of a chauffeur service is the coordination behind it: one point of contact planning the fleet, the routes and the timings around the ceremony, the photographs and the reception. On the day, everything simply arrives when it should.",
          "For a wedding on an unfamiliar coast, that reliability is priceless.",
        ],
      },
    ],
    faq: [
      {
        question: "How does wedding transport work on the French Riviera?",
        answer:
          "A chauffeur service provides a car for the couple and shuttles for guests, coordinated around the ceremony, photographs and reception timings.",
      },
      {
        question: "What car is best for the couple?",
        answer:
          "An immaculate Mercedes S-Class or Maybach makes for an elegant arrival and departure, with a dedicated chauffeur on call all day.",
      },
      {
        question: "Can guests be shuttled between venues?",
        answer:
          "Yes. Spacious V-Class vehicles move guests between hotels and venues on coordinated timings, with safe late returns after the celebration.",
      },
      {
        question: "Why use a chauffeur service for a wedding?",
        answer:
          "For the coordination — one point of contact plans the fleet, routes and timings, so everything arrives when it should on the day.",
      },
    ],
    relatedSlugs: [
      "french-riviera-honeymoon-guide",
      "most-scenic-drives-french-riviera",
      "french-riviera-chauffeur-prices",
    ],
    ctaTitle: "Chauffeurs for your Riviera wedding",
    ctaDescription:
      "The couple's car and guest shuttles, coordinated to the minute: private chauffeurs for a French Riviera wedding.",
    ctaHref: "/our-services/hourly-chauffeur",
    ctaLabel: "See hourly chauffeur",
  },
  {
    slug: "nice-airport-layover-guide",
    title: "Nice Airport Layover Guide",
    description:
      "What to do on a layover at Nice Airport: quick trips into Nice, the Promenade or Old Town, with a private chauffeur there and back.",
    excerpt:
      "Quick trips into Nice, the Promenade or the Old Town: what to do on a layover at Nice Airport.",
    category: "Travel Guides",
    heroKicker: "Airport layover",
    readTime: "5 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/nice-airport-layover-guide.webp",
    imageAlt:
      "The Promenade des Anglais in Nice a short drive from the airport for a layover",
    keywords: [
      "Nice airport layover",
      "things to do Nice airport layover",
      "Nice layover guide",
      "Nice airport stopover",
      "layover Nice Cote d'Azur",
    ],
    intro:
      "A layover at Nice Airport need not be spent in the terminal. The city is barely ten minutes away, so even a few spare hours are enough to see the sea, the Old Town and a good lunch — and be back in time. Here is how to make the most of a Nice Airport layover.",
    sections: [
      {
        id: "how-long-you-need",
        title: "How long you need",
        paragraphs: [
          "Because the airport sits at the western end of the Promenade, central Nice is only around ten to fifteen minutes away by car. A layover of three to four hours is comfortably enough to head into the city, see the highlights and return with time to spare before your next flight.",
          "Even a shorter stop allows a quick drive along the seafront.",
        ],
        bullets: [
          "Central Nice is 10–15 minutes away",
          "Three to four hours is comfortable",
          "Time for the sights and a meal",
          "A quick seafront drive on shorter stops",
        ],
      },
      {
        id: "what-to-see",
        title: "What to see",
        paragraphs: [
          "With a few hours, walk the Promenade des Anglais, wander the ochre lanes and market of the Old Town, and stop for lunch or an ice cream by the sea. Those short on time can simply take in the Baie des Anges and Castle Hill view before turning back.",
          "It is a genuine taste of the Riviera between flights.",
        ],
        bullets: [
          "The Promenade des Anglais",
          "The Old Town and Cours Saleya market",
          "Lunch or an ice cream by the sea",
          "The Baie des Anges and Castle Hill view",
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        paragraphs: [
          "A private chauffeur is the simplest way to do it: met at arrivals, driven into the city, and returned to the terminal with time to check in, with luggage looked after in the car. There is no queuing for taxis or working out the tram with bags in tow.",
          "It turns dead time in the terminal into a small Riviera outing.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a layover at Nice Airport long enough to see the city?",
        answer:
          "Yes. Central Nice is only 10–15 minutes away, so a layover of three to four hours is enough to see the highlights and return in time.",
      },
      {
        question: "What can you do on a Nice Airport layover?",
        answer:
          "Walk the Promenade des Anglais, explore the Old Town and market, and stop for lunch by the sea, all a short drive from the terminal.",
      },
      {
        question: "How do you get into Nice from the airport quickly?",
        answer:
          "A private chauffeur is simplest: met at arrivals, driven into the city and back with luggage looked after, avoiding taxi queues.",
      },
      {
        question: "How much time do you need before a flight?",
        answer:
          "Allow enough to return and check in comfortably; with the city so close, three to four hours between flights works well.",
      },
    ],
    relatedSlugs: [
      "getting-around-nice",
      "best-things-to-do-in-nice",
      "nice-cote-dazur-airport-terminals-guide",
    ],
    ctaTitle: "Make the most of your layover",
    ctaDescription:
      "Into the city and back with time to spare: a private chauffeur for a Nice Airport layover.",
    ctaHref: "/our-services/hourly-chauffeur",
    ctaLabel: "See hourly chauffeur",
  },
  {
    slug: "most-beautiful-villages-french-riviera",
    title: "Most Beautiful Riviera Villages",
    description:
      "The most beautiful villages of the French Riviera — Èze, Saint-Paul-de-Vence, Gourdon and more, best explored by private chauffeur.",
    excerpt:
      "Èze, Saint-Paul-de-Vence, Gourdon and more: the most beautiful villages of the French Riviera.",
    category: "Travel Guides",
    heroKicker: "Perched villages",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/most-beautiful-villages-french-riviera.webp",
    imageAlt:
      "A perched medieval stone village on a hilltop above the French Riviera coast",
    keywords: [
      "most beautiful French Riviera villages",
      "perched villages French Riviera",
      "Eze Saint-Paul de Vence",
      "Riviera hilltop villages",
      "best villages Cote d'Azur",
    ],
    intro:
      "Behind the glamorous coast, the French Riviera hides a string of perched medieval villages, with stone lanes, hilltop views and a slower rhythm that feels a world away from the seafront. Here are the most beautiful villages of the French Riviera and how to explore them.",
    sections: [
      {
        id: "eze",
        title: "Èze",
        paragraphs: [
          "The most famous of all, Èze clings to a peak high above the sea between Nice and Monaco, its car-free lanes winding up to an exotic garden with dizzying views. It is the postcard Riviera village, and an easy stop on the corniche.",
          "Come early or late to enjoy it beyond the day-trip crowds.",
        ],
        bullets: [
          "Perched high above the sea",
          "Car-free medieval lanes",
          "An exotic garden with vast views",
          "Easy to reach on the corniche",
        ],
      },
      {
        id: "saint-paul-de-vence",
        title: "Saint-Paul-de-Vence",
        paragraphs: [
          "In the hills behind the coast, Saint-Paul-de-Vence is the artists' village — ramparts, galleries and the celebrated Fondation Maeght nearby, long a haunt of painters and writers. Its lanes are made for wandering.",
          "It pairs beautifully with the hilltop hotels and gardens around Vence.",
        ],
        bullets: [
          "A walled artists' village in the hills",
          "Galleries and the Fondation Maeght nearby",
          "Ramparts and lanes to wander",
          "Long a haunt of artists and writers",
        ],
      },
      {
        id: "gourdon-and-beyond",
        title: "Gourdon and beyond",
        paragraphs: [
          "Higher still, Gourdon sits like an eagle's nest above the Gorges du Loup, with one of the widest views on the coast. Beyond it, Mougins, Biot and Valbonne add their own charm — gastronomy, glass-making and Provençal squares.",
          "Together they make the hinterland as rewarding as the coast.",
        ],
        bullets: [
          "Gourdon high above the Gorges du Loup",
          "Mougins for gastronomy",
          "Biot for its glass-making",
          "Valbonne's Provençal squares",
        ],
      },
      {
        id: "touring-the-villages",
        title: "Touring the villages by chauffeur",
        paragraphs: [
          "The villages are scattered through the hills on winding roads with little parking, so a private chauffeur is by far the easiest way to string several into a day. A driver drops you at each village gate and waits while you explore.",
          "It turns a logistically tricky day into one of the most rewarding on the Riviera.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the most beautiful village on the French Riviera?",
        answer:
          "Èze is the most famous, perched high above the sea with car-free lanes and an exotic garden, though Saint-Paul-de-Vence rivals it.",
      },
      {
        question: "Which Riviera villages are worth visiting?",
        answer:
          "Èze, Saint-Paul-de-Vence and Gourdon above all, with Mougins, Biot and Valbonne adding gastronomy, glass-making and Provençal charm.",
      },
      {
        question: "How do you visit the perched villages?",
        answer:
          "By private chauffeur most easily, as they are scattered through the hills on winding roads with little parking, linked into one relaxed day.",
      },
      {
        question: "Are the villages far from the coast?",
        answer:
          "No. Most sit in the hills just behind the coast, a short scenic drive from Nice, Cannes or the seafront towns.",
      },
    ],
    relatedSlugs: [
      "most-scenic-drives-french-riviera",
    ],
    ctaTitle: "Tour the Riviera's villages",
    ctaDescription:
      "Èze, Saint-Paul and Gourdon in one relaxed day: a private chauffeur for the perched villages of the Riviera.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-wine-vineyards",
    title: "French Riviera Wine and Vineyards",
    description:
      "A guide to the wine and vineyards of the French Riviera: Provence rosé, the Bellet hills above Nice, and vineyard days by chauffeur.",
    excerpt:
      "Provence rosé and the Bellet hills above Nice: a guide to the wine and vineyards of the French Riviera.",
    category: "Travel Guides",
    heroKicker: "Wine and vineyards",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-wine-vineyards.webp",
    imageAlt:
      "Rows of green vineyards on rolling hills near the French Riviera coast with the sea beyond",
    keywords: [
      "French Riviera wine",
      "Provence rosé",
      "Bellet wine Nice",
      "French Riviera vineyards",
      "wine tour French Riviera",
    ],
    intro:
      "The Riviera is wine country as well as coast. Provence rosé is made just behind it, Nice has its own tiny hillside appellation, and vineyards make a lovely half-day inland from the sea. Here is a guide to the wine and vineyards of the French Riviera.",
    sections: [
      {
        id: "provence-rose",
        title: "Provence rosé",
        paragraphs: [
          "The hills behind the coast, especially inland from Saint-Tropez, are the heart of Côtes de Provence — the pale, dry rosé that defines a Riviera summer. Estates here welcome visitors for tastings among the vines, an easy and scenic trip from the coast.",
          "A glass of local rosé is the taste of the Riviera in a bottle.",
        ],
        bullets: [
          "Côtes de Provence, the classic rosé",
          "Estates inland from Saint-Tropez",
          "Tastings among the vines",
          "The taste of a Riviera summer",
        ],
      },
      {
        id: "bellet-above-nice",
        title: "Bellet, above Nice",
        paragraphs: [
          "Few realise Nice has its own vineyards: the small Bellet appellation, in the hills just above the city, is one of France's tiniest and oldest, making distinctive reds, whites and rosés on terraces overlooking the sea.",
          "It is a surprising, characterful stop barely fifteen minutes from the Promenade.",
        ],
        bullets: [
          "A tiny appellation in the Nice hills",
          "One of France's oldest and smallest",
          "Distinctive reds, whites and rosés",
          "Minutes above the city",
        ],
      },
      {
        id: "vineyard-days-by-chauffeur",
        title: "Vineyard days by chauffeur",
        paragraphs: [
          "Wine tasting and driving do not mix, which is exactly why a private chauffeur suits a vineyard day. A driver takes you between estates on the winding country roads, so you can taste freely and enjoy the scenery, with your purchases carried in the car.",
          "It is the relaxed, safe way to explore the Riviera's wine country.",
        ],
      },
    ],
    faq: [
      {
        question: "Does the French Riviera have vineyards?",
        answer:
          "Yes. Provence rosé is made in the hills behind the coast, and Nice has its own tiny Bellet appellation in the hills above the city.",
      },
      {
        question: "What wine is the French Riviera known for?",
        answer:
          "Provence rosé above all — the pale, dry Côtes de Provence — plus the distinctive reds, whites and rosés of Nice's small Bellet appellation.",
      },
      {
        question: "Where is Bellet wine from?",
        answer:
          "From a tiny appellation in the hills just above Nice, one of France's oldest and smallest, on terraces overlooking the sea.",
      },
      {
        question: "How do you visit the Riviera's vineyards?",
        answer:
          "By private chauffeur ideally, so you can taste freely without driving the winding country roads, with your purchases carried in the car.",
      },
    ],
    relatedSlugs: [
      "most-scenic-drives-french-riviera",
      "best-things-to-do-in-nice",
    ],
    ctaTitle: "Explore the Riviera's wine country",
    ctaDescription:
      "Taste freely, leave the driving to us: a private chauffeur for vineyard days on the French Riviera.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-luxury-shopping",
    title: "French Riviera Luxury Shopping",
    description:
      "A guide to luxury shopping on the French Riviera: the designer boutiques of Monaco, Cannes and Nice, reached by private chauffeur.",
    excerpt:
      "The designer boutiques of Monaco, Cannes and Nice: a guide to luxury shopping on the French Riviera.",
    category: "Travel Guides",
    heroKicker: "Luxury shopping",
    readTime: "5 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-luxury-shopping.webp",
    imageAlt:
      "An elegant luxury shopping street in Monte-Carlo with designer boutiques and palm trees",
    keywords: [
      "French Riviera luxury shopping",
      "Monaco shopping",
      "Cannes shopping",
      "designer shopping Cote d'Azur",
      "Riviera boutiques",
    ],
    intro:
      "The French Riviera shops as grandly as it lives. From the golden square of Monte-Carlo to the Croisette in Cannes, the coast lines up the great fashion houses in some of Europe's most glamorous settings. Here is a guide to luxury shopping on the French Riviera.",
    sections: [
      {
        id: "monaco",
        title: "Monaco: the Carré d'Or",
        paragraphs: [
          "Monaco's Carré d'Or, the golden square around the Casino, is one of the densest concentrations of luxury boutiques anywhere: the great fashion and jewellery houses, side by side, in a compact and glamorous quarter.",
          "It is shopping as spectacle, in the heart of the principality.",
        ],
        bullets: [
          "The Carré d'Or around the Casino",
          "The great fashion and jewellery houses",
          "Compact and glamorous",
          "Steps from the grand hotels",
        ],
      },
      {
        id: "cannes",
        title: "Cannes: the Croisette and rue d'Antibes",
        paragraphs: [
          "In Cannes, the designer flagships line the Croisette, while the rue d'Antibes just behind offers a longer run of fashion, from luxury names to more accessible boutiques. It is the Riviera's other great shopping address.",
          "A morning here pairs naturally with the beach clubs and cafés.",
        ],
        bullets: [
          "Designer flagships on the Croisette",
          "The rue d'Antibes behind",
          "Luxury and more accessible names",
          "Paired with the beach clubs",
        ],
      },
      {
        id: "nice-and-shopping-by-chauffeur",
        title: "Nice, and shopping by chauffeur",
        paragraphs: [
          "Nice adds its own smart streets around the avenue de Verdun and Jean-Médecin, from designer names to department stores. Across all three cities, a private chauffeur makes a shopping day easy — no parking, and purchases carried in the car between boutiques and towns.",
          "It turns a day of shopping across the coast into an effortless one.",
        ],
      },
    ],
    faq: [
      {
        question: "Where is the best luxury shopping on the French Riviera?",
        answer:
          "Monaco's Carré d'Or around the Casino and the Croisette and rue d'Antibes in Cannes are the coast's great luxury shopping addresses.",
      },
      {
        question: "Where do you shop for designer brands in Monaco?",
        answer:
          "In the Carré d'Or, the golden square around the Casino, one of the densest concentrations of luxury boutiques anywhere.",
      },
      {
        question: "Is Cannes good for shopping?",
        answer:
          "Yes. Designer flagships line the Croisette, with a longer run of fashion on the rue d'Antibes just behind, from luxury to accessible names.",
      },
      {
        question: "How do you shop across the Riviera easily?",
        answer:
          "A private chauffeur makes it effortless — no parking, and purchases carried in the car between boutiques and towns across the coast.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-cannes",
      "monaco-in-one-day",
      "best-things-to-do-in-nice",
    ],
    ctaTitle: "Shop the Riviera in comfort",
    ctaDescription:
      "A private chauffeur for luxury shopping on the Riviera: no parking, purchases carried, boutique to boutique.",
    ctaHref: "/our-services/hourly-chauffeur",
    ctaLabel: "See hourly chauffeur",
  },
  {
    slug: "riviera-cruise-port-day-guide",
    title: "Riviera Cruise Port Day Guide",
    description:
      "How to make the most of a day in port on the French Riviera: a private chauffeur shore excursion from Villefranche, Cannes or Monaco.",
    excerpt:
      "A private chauffeur shore excursion from Villefranche, Cannes or Monaco: making the most of a day in port.",
    category: "Travel Guides",
    heroKicker: "Cruise port day",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/riviera-cruise-port-day-guide.webp",
    imageAlt:
      "A large cruise ship anchored in the deep blue bay of Villefranche-sur-Mer with the old town behind",
    keywords: [
      "French Riviera cruise excursion",
      "Villefranche cruise port",
      "cruise shore excursion Riviera",
      "Cannes cruise port",
      "private tour cruise Riviera",
    ],
    intro:
      "A day in port on the French Riviera is short, and the sights are spread along the coast. So how you spend it matters. A private chauffeur turns a single day into a tailored tour of the highlights, back at the ship in good time. Here is how to make the most of a Riviera cruise port day.",
    sections: [
      {
        id: "the-riviera-cruise-ports",
        title: "The Riviera cruise ports",
        paragraphs: [
          "Most ships call at Villefranche-sur-Mer, anchoring in its deep bay and tendering guests ashore. A perfect gateway to Nice, Monaco and Èze. Others dock or tender at Cannes and Monaco, each within easy reach of the coast's headline sights.",
          "Wherever you land, the best of the Riviera is a short drive away.",
        ],
        bullets: [
          "Villefranche: tender port, central gateway",
          "Cannes: the Croisette and the west",
          "Monaco: the principality and the east",
          "The highlights within an easy drive",
        ],
      },
      {
        id: "what-to-see-in-a-day",
        title: "What to see in a day",
        paragraphs: [
          "From Villefranche, a classic day takes in Èze, Monaco and a taste of Nice; from Cannes, Antibes and Grasse; from Monaco, Èze and the corniches. A private chauffeur tailors the route to your interests and the time ashore, rather than a fixed coach tour.",
          "It is the difference between seeing the coast and glimpsing it from a bus.",
        ],
        bullets: [
          "Èze, Monaco and Nice from Villefranche",
          "Antibes and Grasse from Cannes",
          "The corniches from Monaco",
          "A route tailored to your time ashore",
        ],
      },
      {
        id: "back-in-good-time",
        title: "Back at the ship in good time",
        paragraphs: [
          "The one rule of a shore excursion is not to miss the ship, and a private chauffeur who knows the roads and the tender times builds the day around your all-aboard, with a comfortable margin. No coach queues, no waiting on stragglers.",
          "You see more, at your own pace, and return with time to spare.",
        ],
      },
    ],
    faq: [
      {
        question: "Which Riviera port do cruise ships use?",
        answer:
          "Most anchor at Villefranche-sur-Mer and tender ashore, a central gateway to Nice, Monaco and Èze; others use Cannes and Monaco.",
      },
      {
        question: "What can you see on a Riviera cruise day?",
        answer:
          "From Villefranche, Èze, Monaco and Nice in a day; from Cannes, Antibes and Grasse; from Monaco, Èze and the corniches, tailored to your time.",
      },
      {
        question: "Is a private chauffeur better than a coach excursion?",
        answer:
          "Yes. A tailored route at your own pace, no coach queues or waiting, with the day built around your all-aboard time.",
      },
      {
        question: "Will a chauffeur get me back to the ship in time?",
        answer:
          "Yes. A driver who knows the roads and tender times builds the day around your all-aboard with a comfortable margin to spare.",
      },
    ],
    relatedSlugs: [
      "villefranche-sur-mer-cruise-port-guide",
      "monaco-in-one-day",
    ],
    ctaTitle: "Make the most of your day in port",
    ctaDescription:
      "A tailored shore excursion, back in good time. A private chauffeur for your Riviera cruise port day.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "what-to-pack-french-riviera",
    title: "What to Pack for the Riviera",
    description:
      "What to pack for the French Riviera: from beach days to casino evenings, a season-by-season guide to what to wear.",
    excerpt:
      "From beach days to casino evenings: a season-by-season guide to what to pack for the French Riviera.",
    category: "Travel Guides",
    heroKicker: "What to pack",
    readTime: "5 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/what-to-pack-french-riviera.webp",
    imageAlt:
      "Elegant summer travel essentials arranged on a stone surface in Mediterranean light",
    keywords: [
      "what to pack French Riviera",
      "what to wear French Riviera",
      "French Riviera packing list",
      "Riviera dress code",
      "French Riviera clothes",
    ],
    intro:
      "The French Riviera mixes beach days with smart evenings, hilltop walks with casino nights, so packing is about versatility. Here is a season-by-season guide to what to pack and wear on the French Riviera.",
    sections: [
      {
        id: "the-essentials",
        title: "The essentials",
        paragraphs: [
          "Whatever the season, pack for both sun and style: swimwear and a cover-up, sunglasses, sun cream and a hat for the beach, and comfortable shoes for the cobbled village lanes. Light layers handle the swing between warm days and cooler evenings by the sea.",
          "Think smart-casual as your baseline, dressed up or down as the day requires.",
        ],
        bullets: [
          "Swimwear, sunglasses, hat and sun cream",
          "Comfortable shoes for village lanes",
          "Light layers for cooler evenings",
          "Smart-casual as the baseline",
        ],
      },
      {
        id: "for-the-evenings",
        title: "For the evenings",
        paragraphs: [
          "Riviera evenings can be glamorous. Smart restaurants, beach clubs and above all the Monte-Carlo Casino expect elegant dress — a jacket for men, something smart for women — so pack at least one dressier outfit. The casino has a dress code, and the best tables reward the effort.",
          "One smart evening look covers most occasions.",
        ],
        bullets: [
          "Smart dress for restaurants and clubs",
          "A jacket for the Monte-Carlo Casino",
          "At least one dressier outfit",
          "The casino enforces a dress code",
        ],
      },
      {
        id: "by-season",
        title: "By season",
        paragraphs: [
          "In summer, light and breathable clothing and plenty of sun protection are key. Spring and autumn call for layers and a light jacket for the evenings. Winter stays mild but wants a warm coat for the evenings and any parade or festival, plus an umbrella for the occasional shower.",
          "Match the packing to the season and the rest falls into place.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I pack for the French Riviera?",
        answer:
          "Swimwear, sun protection and comfortable shoes for villages, light layers for the evenings, and at least one smart outfit for dining out.",
      },
      {
        question: "Is there a dress code on the French Riviera?",
        answer:
          "Smart restaurants, beach clubs and especially the Monte-Carlo Casino expect elegant dress, so pack a jacket or a dressier outfit.",
      },
      {
        question: "What do you wear on the Riviera in summer?",
        answer:
          "Light, breathable clothing with plenty of sun protection by day, and smart-casual for the warm evenings out.",
      },
      {
        question: "What should I pack for the Riviera in winter?",
        answer:
          "It stays mild, but bring a warm coat for the evenings and festivals, layers for the day, and an umbrella for the occasional shower.",
      },
    ],
    relatedSlugs: [
    ],
    ctaTitle: "Arrive ready for the Riviera",
    ctaDescription:
      "From the airport to your hotel with the luggage handled. A private chauffeur to start your Riviera trip right.",
    ctaHref: "/our-services/transfers",
    ctaLabel: "See transfer options",
  },
];
