import type { BlogPost } from "./types";

// Cluster B — Destination / city guides (getting-around + things-to-do).
export const destinationPosts: BlogPost[] = [
  {
    slug: "best-things-to-do-in-nice",
    title: "Best Things to Do in Nice",
    description:
      "The best things to do in Nice — the Promenade des Anglais, Old Town, Cours Saleya, Castle Hill and the museums, with tips for exploring by chauffeur.",
    excerpt:
      "From the Promenade des Anglais to Old Nice and Castle Hill, the best things to do in the Riviera's capital.",
    category: "Destinations",
    heroKicker: "Nice city guide",
    readTime: "8 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/best-things-to-do-in-nice.webp",
    imageAlt:
      "The Promenade des Anglais in Nice at golden hour with palm trees and the Baie des Anges",
    keywords: [
      "best things to do in Nice",
      "what to do in Nice",
      "Nice sightseeing",
      "Nice travel guide",
      "things to see in Nice France",
    ],
    intro:
      "Nice is the capital of the French Riviera and the perfect base for exploring the coast. It blends a grand seafront, a sun-baked old town, hilltop views and world-class art into a city that rewards both a flying visit and a long stay. Here are the best things to do in Nice — and how a private chauffeur helps you see more of them in the time you have.",
    sections: [
      {
        id: "promenade",
        title: "Stroll the Promenade des Anglais",
        paragraphs: [
          "The Promenade des Anglais is Nice's signature: a sweeping seafront boulevard curving along the Baie des Anges, lined with palm trees, the famous blue chairs and belle-époque grand hotels like the Negresco. It is the place to walk, cycle or simply watch the sea.",
          "At one end, the pebble beach and the port; at the other, the airport. A chauffeur can drop you at the quieter western stretch and collect you in the old town, so you enjoy the walk without doubling back.",
        ],
        bullets: [
          "The Baie des Anges and the pebble beach",
          "The iconic Hotel Negresco",
          "The blue chairs and palm-lined promenade",
          "Sunset views along the seafront",
        ],
      },
      {
        id: "old-town",
        title: "Explore Vieux Nice and the Cours Saleya",
        paragraphs: [
          "Old Nice is a warren of narrow lanes, ochre façades and baroque churches, alive with cafés and shops. At its heart, the Cours Saleya hosts a famous flower and produce market by day and restaurant tables by night.",
          "This is the place to taste local specialities — socca, salade niçoise, pissaladière — and to lose an afternoon wandering. It is pedestrian, so a chauffeur drops you at the edge and meets you afterwards.",
        ],
        bullets: [
          "The Cours Saleya flower and produce market",
          "Baroque churches and painted façades",
          "Local food: socca, salade niçoise, pissaladière",
          "Lively cafés and independent shops",
        ],
      },
      {
        id: "castle-hill",
        title: "Climb Castle Hill for the view",
        paragraphs: [
          "The Colline du Château, or Castle Hill, rises between the old town and the port. There is no castle left, but there are gardens, a waterfall and the best panorama in Nice — the whole Baie des Anges on one side and the port on the other.",
          "You can walk up, take the lift, or have a chauffeur drive you to the top of Mont Boron nearby for an even wider view over the city and coast.",
        ],
        bullets: [
          "Panoramic views over the Baie des Anges",
          "Gardens and a waterfall at the top",
          "Nearby Mont Boron for wider coastal views",
          "A lift for those who prefer not to climb",
        ],
      },
      {
        id: "museums",
        title: "See the art: Matisse and Chagall",
        paragraphs: [
          "Nice has a remarkable concentration of art. The Matisse Museum sits among the Roman ruins of Cimiez, and the Marc Chagall National Museum holds the artist's biblical cycle in a purpose-built setting. Both are a short drive from the centre.",
          "These hillside museums are exactly where a chauffeur earns its place, linking sights that are awkward to reach on foot or by public transport in a single, easy loop.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Nice best known for?",
        answer:
          "The Promenade des Anglais, its colourful Old Town and Cours Saleya market, Castle Hill's panorama, and museums dedicated to Matisse and Chagall.",
      },
      {
        question: "How many days do you need in Nice?",
        answer:
          "Two to three days lets you enjoy the city itself; use it as a base and a chauffeur to reach Monaco, Èze, Cannes and the villages beyond.",
      },
      {
        question: "Is Nice easy to explore without a car?",
        answer:
          "The centre is walkable, but the hillside museums and viewpoints — and day trips along the coast — are far easier with a private chauffeur.",
      },
      {
        question: "What local food should I try in Nice?",
        answer:
          "Socca (a chickpea pancake), salade niçoise, pissaladière and pan bagnat are the classics, best sampled around the Cours Saleya.",
      },
    ],
    relatedSlugs: [
      "monaco-in-one-day",
      "best-things-to-do-in-cannes",
      "nice-airport-to-monaco",
    ],
    ctaTitle: "Explore Nice with a private chauffeur",
    ctaDescription:
      "See more of Nice and the Riviera with a private driver — museums, viewpoints and day trips linked into one easy itinerary.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "monaco-in-one-day",
    title: "Monaco in One Day: A Perfect Itinerary",
    description:
      "How to spend one perfect day in Monaco — the Casino, Prince's Palace, Oceanographic Museum, Port Hercule and the F1 streets, made easy with a chauffeur.",
    excerpt:
      "A one-day Monaco itinerary — the Casino, Palace, Oceanographic Museum and Port Hercule, made easy with a chauffeur.",
    category: "Destinations",
    heroKicker: "Monaco day itinerary",
    readTime: "8 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/monaco-in-one-day.webp",
    imageAlt:
      "The Place du Casino in Monte-Carlo with the belle-époque casino building at golden hour",
    keywords: [
      "Monaco in one day",
      "Monaco itinerary",
      "what to do in Monaco",
      "one day in Monte-Carlo",
      "Monaco day trip",
    ],
    intro:
      "Monaco packs a great deal into two square kilometres: a fairytale palace, a legendary casino, world-class museums and a harbour full of superyachts. It is perfectly possible to see the best of it in a single day, especially with a chauffeur to bridge its steep hills and one-way streets. Here is a perfect one-day Monaco itinerary.",
    sections: [
      {
        id: "morning",
        title: "Morning: the Rock and the Palace",
        paragraphs: [
          "Start in Monaco-Ville, the old town perched on the Rock, before the crowds arrive. Wander its lanes to the Prince's Palace and time your visit for the changing of the guard, held daily at 11:55am on the palace square.",
          "Nearby, the Cathedral and the exotic gardens reward a short stroll, with sweeping views over the harbour and the coast.",
        ],
        bullets: [
          "The Prince's Palace and the changing of the guard",
          "Monaco-Ville's old-town lanes",
          "The Cathedral of Monaco",
          "Views over Port Hercule from the Rock",
        ],
      },
      {
        id: "midday",
        title: "Midday: the Oceanographic Museum and harbour",
        paragraphs: [
          "On the cliff below the old town, the Oceanographic Museum is one of Monaco's landmarks — an imposing building with aquariums and a rooftop terrace overlooking the sea. It is a highlight for families and first-time visitors alike.",
          "Afterwards, drop down to Port Hercule for lunch by the water, surrounded by some of the largest yachts on the Mediterranean.",
        ],
        bullets: [
          "The Oceanographic Museum and its rooftop",
          "Lunch by the water at Port Hercule",
          "Superyachts along the quays",
          "The Formula 1 harbour chicane",
        ],
      },
      {
        id: "afternoon",
        title: "Afternoon: Monte-Carlo and the Casino",
        paragraphs: [
          "Cross to Monte-Carlo for the Place du Casino — the belle-époque Casino de Monte-Carlo, the Hôtel de Paris and the Café de Paris, framed by manicured gardens and, usually, a line-up of exceptional cars.",
          "Even without gambling, the square is worth seeing, and the surrounding streets trace part of the Grand Prix circuit, including the famous hairpin by the Fairmont.",
        ],
        bullets: [
          "The Casino de Monte-Carlo and its square",
          "The Hôtel de Paris and Café de Paris",
          "The Fairmont hairpin on the F1 circuit",
          "Luxury shopping around the Carré d'Or",
        ],
      },
      {
        id: "chauffeur",
        title: "Why a chauffeur makes the day",
        paragraphs: [
          "Monaco is compact but vertical, built on steep terraces linked by tunnels, lifts and one-way streets. A chauffeur removes the strain of the climbs and the parking, moving you between the Rock, the museum and Monte-Carlo in minutes.",
          "It also makes it easy to arrive from Nice or a nearby village in the morning and add Èze or the corniche viewpoints on the way home.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you see Monaco in one day?",
        answer:
          "Yes. A single day covers the Palace and old town, the Oceanographic Museum, Port Hercule and the Monte-Carlo casino square comfortably, especially with a chauffeur.",
      },
      {
        question: "What time is the changing of the guard in Monaco?",
        answer:
          "It takes place daily at 11:55am on the square in front of the Prince's Palace in Monaco-Ville.",
      },
      {
        question: "Do you need a car in Monaco?",
        answer:
          "The principality is walkable but steep and vertical. A chauffeur saves time and effort moving between the Rock, the museum and Monte-Carlo.",
      },
      {
        question: "Can I combine Monaco with Èze in a day?",
        answer:
          "Yes. Èze is minutes away on the corniche, and a chauffeur can easily add it and the viewpoints to a Monaco day trip.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "nice-airport-to-monaco",
      "monaco-business-chauffeur",
    ],
    ctaTitle: "Discover Monaco with a private chauffeur",
    ctaDescription:
      "Make the most of a day in Monaco with a private driver linking the Rock, the museum and Monte-Carlo — and Èze on the way.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "best-things-to-do-in-cannes",
    title: "Best Things to Do in Cannes",
    description:
      "The best things to do in Cannes — La Croisette, the Palais des Festivals, Le Suquet old town, the Lérins Islands and shopping, with chauffeur tips.",
    excerpt:
      "La Croisette, Le Suquet, the Lérins Islands and the red carpet — the best things to do in Cannes.",
    category: "Destinations",
    heroKicker: "Cannes city guide",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/best-things-to-do-in-cannes.webp",
    imageAlt:
      "View over the old port of Cannes and Le Suquet hill with yachts at golden hour",
    keywords: [
      "best things to do in Cannes",
      "what to do in Cannes",
      "Cannes sightseeing",
      "Cannes travel guide",
      "Lérins Islands Cannes",
    ],
    intro:
      "Cannes is more than its film festival. Behind the glamour of La Croisette lies a working fishing town, a hilltop old quarter, island monasteries offshore and some of the best shopping on the coast. Here are the best things to do in Cannes, and how a chauffeur helps you enjoy them without the parking and the crowds.",
    sections: [
      {
        id: "croisette",
        title: "Walk La Croisette and the red carpet",
        paragraphs: [
          "The Boulevard de la Croisette is Cannes at its most famous: a palm-lined seafront of grand hotels — the Carlton, the Martinez — private beaches and designer boutiques. At its heart stands the Palais des Festivals, where the red-carpet steps host the film festival each May.",
          "It is a place to stroll, people-watch and photograph the handprints of the stars along the Allée des Étoiles.",
        ],
        bullets: [
          "The Palais des Festivals and red-carpet steps",
          "Grand hotels: the Carlton and the Martinez",
          "Private beaches along the seafront",
          "The Allée des Étoiles handprints",
        ],
      },
      {
        id: "le-suquet",
        title: "Climb to Le Suquet, the old town",
        paragraphs: [
          "Above the old port, Le Suquet is the original village of Cannes: steep cobbled streets climbing to the church of Notre-Dame de l'Espérance and the Musée des Explorations du Monde, with wonderful views back over the bay.",
          "The nearby Marché Forville is one of the best food markets on the Riviera, perfect for a morning before the climb.",
        ],
        bullets: [
          "Views over the bay from the church terrace",
          "The Musée des Explorations du Monde",
          "The Marché Forville food market",
          "Atmospheric restaurants in the old streets",
        ],
      },
      {
        id: "lerins",
        title: "Escape to the Lérins Islands",
        paragraphs: [
          "A short boat ride from the old port, the Lérins Islands feel a world away. Sainte-Marguerite has pine forests, quiet coves and the fort that once held the Man in the Iron Mask; Saint-Honorat is home to a working monastery whose monks make wine.",
          "A chauffeur drops you at the port for the boat and collects you on your return, so the day flows without logistics.",
        ],
        bullets: [
          "Sainte-Marguerite's forts and coves",
          "Saint-Honorat's monastery and vineyards",
          "Swimming and walking away from the crowds",
          "Easy boats from the old port",
        ],
      },
      {
        id: "chauffeur",
        title: "Getting around Cannes",
        paragraphs: [
          "Cannes is compact but busy, and parking near the Croisette is difficult, especially during festivals and congresses. A chauffeur drops you where you want to be and is a call away when you are ready to move on.",
          "It also makes Cannes a natural base for the western Riviera — Antibes, Mougins, Grasse and Saint-Tropez are all within easy reach by car.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Cannes famous for besides the film festival?",
        answer:
          "La Croisette and its grand hotels, the old town of Le Suquet, the Marché Forville, and the peaceful Lérins Islands just offshore.",
      },
      {
        question: "Can you visit the Lérins Islands from Cannes?",
        answer:
          "Yes. Regular boats from the old port reach Sainte-Marguerite and Saint-Honorat in around 15 minutes for a half or full day.",
      },
      {
        question: "Is Cannes worth visiting outside the festival?",
        answer:
          "Very much so. Without the festival crowds, the beaches, old town, market and islands are far more relaxed to enjoy.",
      },
      {
        question: "Where can a chauffeur take me from Cannes?",
        answer:
          "Cannes is a great base for Antibes, Mougins, Grasse and Saint-Tropez, all within easy reach by private car.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "nice-airport-to-cannes",
      "cannes-taxi-vs-private-driver",
    ],
    ctaTitle: "Explore Cannes with a private chauffeur",
    ctaDescription:
      "Enjoy Cannes without the parking and crowds — a private driver for the Croisette, the old town, the islands and beyond.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "best-things-to-do-in-saint-tropez",
    title: "Best Things to Do in Saint-Tropez",
    description:
      "The best things to do in Saint-Tropez — the old port, Place des Lices, the Citadelle, Pampelonne beach clubs and the old quarter, with chauffeur tips.",
    excerpt:
      "The old port, Place des Lices, the Citadelle and the Pampelonne beach clubs — the best things to do in Saint-Tropez.",
    category: "Destinations",
    heroKicker: "Saint-Tropez city guide",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/best-things-to-do-in-saint-tropez.webp",
    imageAlt:
      "A beach club at Pampelonne near Saint-Tropez with turquoise sea and parasol pines",
    keywords: [
      "best things to do in Saint-Tropez",
      "what to do in Saint-Tropez",
      "Saint-Tropez guide",
      "Pampelonne beach clubs",
      "Place des Lices Saint-Tropez",
    ],
    intro:
      "Saint-Tropez wears two faces: the timeless Provençal fishing village of pastel houses and pétanque squares, and the glamorous playground of superyachts and beach clubs. The best visits enjoy both. Here are the best things to do in Saint-Tropez, and how a chauffeur handles the one thing the village cannot fix — its summer traffic.",
    sections: [
      {
        id: "old-port",
        title: "The old port and La Ponche",
        paragraphs: [
          "The old port is the heart of Saint-Tropez, where fishing boats and superyachts share the quay and café terraces spill onto the cobbles. Just behind it, the old fishermen's quarter of La Ponche is the village at its most authentic — narrow lanes, tiny squares and a small beach.",
          "Early morning and evening are the magic hours here, before and after the day-trippers.",
        ],
        bullets: [
          "Yachts and café terraces on the quay",
          "The historic La Ponche quarter",
          "The daily catch and waterfront restaurants",
          "Golden-hour light on the pastel façades",
        ],
      },
      {
        id: "place-des-lices",
        title: "Place des Lices and the market",
        paragraphs: [
          "The Place des Lices is the village's living room: a shaded square where locals play pétanque under the plane trees and where a wonderful market takes over on Tuesday and Saturday mornings, selling everything from produce to antiques.",
          "It is the best place to feel the Provençal side of Saint-Tropez, a short walk from the glamour of the port.",
        ],
        bullets: [
          "Pétanque under the plane trees",
          "The Tuesday and Saturday markets",
          "Cafés and Provençal atmosphere",
          "Boutiques in the surrounding lanes",
        ],
      },
      {
        id: "citadelle-and-art",
        title: "The Citadelle and the art",
        paragraphs: [
          "Above the village, the 17th-century Citadelle offers the best views over the gulf and houses a maritime museum. Down by the port, the Musée de l'Annonciade holds an outstanding collection of post-impressionist and Fauvist paintings — many of Saint-Tropez itself.",
          "Together they tell the story of how a fishing village became a magnet for artists and, later, the jet set.",
        ],
        bullets: [
          "Panoramic views from the Citadelle",
          "The maritime museum in the fortress",
          "The Musée de l'Annonciade's paintings",
          "The village's artistic heritage",
        ],
      },
      {
        id: "beaches",
        title: "The Pampelonne beach clubs",
        paragraphs: [
          "A few minutes south of the village, Pampelonne is the long golden beach that made Saint-Tropez famous, home to legendary beach clubs where lunch can last all afternoon. A chauffeur is the easy way to reach them and return, avoiding the beach-road traffic and parking.",
          "For a longer stay, the same driver links Saint-Tropez with the hill villages of Ramatuelle and Gassin and the wider Gulf.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Saint-Tropez best known for?",
        answer:
          "Its old port and yachts, the Place des Lices market and pétanque, the Citadelle's views, and the Pampelonne beach clubs a few minutes south.",
      },
      {
        question: "How do you get to the Pampelonne beach clubs?",
        answer:
          "They are a short drive south of the village. A chauffeur is the easiest way to reach them and return, avoiding the beach-road traffic and parking.",
      },
      {
        question: "When is the Saint-Tropez market?",
        answer:
          "The main market fills the Place des Lices on Tuesday and Saturday mornings, selling produce, antiques and Provençal goods.",
      },
      {
        question: "Is Saint-Tropez only busy in summer?",
        answer:
          "Summer is the peak, but spring and early autumn are quieter and lovely, with the village at its most relaxed and the traffic much lighter.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-saint-tropez",
      "saint-tropez-day-trip",
      "best-things-to-do-in-cannes",
    ],
    ctaTitle: "Discover Saint-Tropez with a chauffeur",
    ctaDescription:
      "Enjoy the village and the beach clubs without the traffic — a private driver for Saint-Tropez, Pampelonne and the hill villages.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "antibes-juan-les-pins-guide",
    title: "Antibes and Juan-les-Pins Travel Guide",
    description:
      "A visitor's guide to Antibes and Juan-les-Pins — Old Antibes, the Picasso Museum, Port Vauban, the markets and the beaches, with chauffeur tips.",
    excerpt:
      "Old Antibes, the Picasso Museum, Port Vauban and the beaches of Juan-les-Pins — a visitor's guide to two Riviera favourites.",
    category: "Destinations",
    heroKicker: "Antibes & Juan-les-Pins",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/antibes-juan-les-pins-guide.webp",
    imageAlt:
      "The honey-coloured ramparts of Old Antibes above the Mediterranean with Port Vauban yachts",
    keywords: [
      "Antibes guide",
      "things to do in Antibes",
      "Juan-les-Pins guide",
      "Old Antibes Picasso Museum",
      "Port Vauban Antibes",
    ],
    intro:
      "Antibes and its neighbour Juan-les-Pins form one of the most rounded destinations on the Riviera: a fortified old town full of history, Europe's largest yachting harbour, a great Picasso collection, and a resort of pine-backed beaches and jazz. Together they reward a full day. Here is a visitor's guide to Antibes and Juan-les-Pins, and how a chauffeur ties them together.",
    sections: [
      {
        id: "old-antibes",
        title: "Old Antibes and the Marché Provençal",
        paragraphs: [
          "Old Antibes is a warm-stone maze inside 17th-century ramparts built by Vauban. At its heart, the covered Marché Provençal fills each morning with flowers, produce and Provençal goods, while the sea walls offer a breezy promenade with views to the Alps.",
          "It is one of the most authentic old towns on the coast, best explored on foot with a chauffeur waiting at the edge.",
        ],
        bullets: [
          "The Vauban ramparts and sea-wall walk",
          "The covered Marché Provençal",
          "Cobbled lanes, cafés and boutiques",
          "Views to the snow-capped Alps in winter",
        ],
      },
      {
        id: "picasso-and-port",
        title: "The Picasso Museum and Port Vauban",
        paragraphs: [
          "Set in the seafront Château Grimaldi, where Picasso worked in 1946, the Picasso Museum holds paintings, ceramics and drawings from that prolific period. Just below, Port Vauban is the largest marina in the Mediterranean, its Quai des Milliardaires lined with some of the world's biggest yachts.",
          "The contrast — medieval castle, modern art, superyachts — is Antibes in a nutshell.",
        ],
        bullets: [
          "The Picasso Museum at Château Grimaldi",
          "Port Vauban and the Quai des Milliardaires",
          "The old fishermen's quarter",
          "Cathedral Notre-Dame-de-la-Platea",
        ],
      },
      {
        id: "juan-les-pins",
        title: "Juan-les-Pins and its beaches",
        paragraphs: [
          "On the other side of the Cap, Juan-les-Pins is the livelier resort face of the commune: sandy beaches backed by pines, a buzzing evening scene, and the celebrated Jazz à Juan festival each July, one of Europe's oldest jazz gatherings.",
          "It is the place to swim, dine by the water and enjoy the nightlife, a few minutes from the calm of the old town.",
        ],
        bullets: [
          "Sandy, pine-backed beaches",
          "The Jazz à Juan festival in July",
          "Lively bars and beachfront dining",
          "An easy pairing with Old Antibes",
        ],
      },
    ],
    faq: [
      {
        question: "What is Antibes known for?",
        answer:
          "Its walled Old Town and Marché Provençal, the Picasso Museum at Château Grimaldi, and Port Vauban — the largest marina in the Mediterranean.",
      },
      {
        question: "What is the difference between Antibes and Juan-les-Pins?",
        answer:
          "They are two sides of the same commune: Antibes is the historic old town and port, while Juan-les-Pins is the beach resort known for jazz and nightlife.",
      },
      {
        question: "When is the Jazz à Juan festival?",
        answer:
          "It takes place in July in Juan-les-Pins, one of the oldest jazz festivals in Europe, set in a pine grove by the sea.",
      },
      {
        question: "Is Antibes walkable?",
        answer:
          "The old town is compact and pedestrian-friendly. A chauffeur drops you at the ramparts and links Antibes with Juan-les-Pins and Cap d'Antibes.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-antibes",
      "cap-dantibes-scenic-guide",
      "antibes-cannes-saint-paul-de-vence-private-tour",
    ],
    ctaTitle: "Explore Antibes with a private chauffeur",
    ctaDescription:
      "See Old Antibes, the Picasso Museum and Juan-les-Pins in one easy day with a private driver linking them together.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "cap-dantibes-scenic-guide",
    title: "Cap d'Antibes: A Scenic Guide",
    description:
      "A scenic guide to Cap d'Antibes — the coastal path, La Garoupe beach and lighthouse, the gardens and the legendary Eden-Roc, with chauffeur tips.",
    excerpt:
      "The coastal path, La Garoupe, the gardens and the legendary Eden-Roc — a scenic guide to the Cap d'Antibes peninsula.",
    category: "Destinations",
    heroKicker: "Cap d'Antibes",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/cap-dantibes-scenic-guide.webp",
    imageAlt:
      "A rocky coastal path around Cap d'Antibes with turquoise coves and umbrella pines",
    keywords: [
      "Cap d'Antibes guide",
      "things to do Cap d'Antibes",
      "Cap d'Antibes coastal path",
      "La Garoupe beach",
      "Hotel du Cap-Eden-Roc",
    ],
    intro:
      "Cap d'Antibes is a green peninsula of walled estates and pine woods reaching into the Mediterranean, famous for its legendary hotel and its coastal walks. It is quieter and more exclusive than the towns on either side, and its scenery is some of the finest on the Riviera. Here is a scenic guide to Cap d'Antibes.",
    sections: [
      {
        id: "coastal-path",
        title: "The Sentier du Littoral coastal path",
        paragraphs: [
          "The Sentier de Tirepoil, the coastal path around the tip of the Cap, is one of the great walks of the Riviera: a rugged trail past rocky coves, crashing sea and hidden inlets, with the villas of the wealthy screened behind the pines above.",
          "It is wilder than you expect so close to the towns, and a chauffeur can drop you at one end and collect you at the other so you walk it one way.",
        ],
        bullets: [
          "Rugged coves and clear water",
          "A one-way walk with a chauffeur pickup",
          "Sea views and pine-shaded stretches",
          "A wild contrast to the nearby resorts",
        ],
      },
      {
        id: "garoupe",
        title: "La Garoupe beach, lighthouse and chapel",
        paragraphs: [
          "Plage de la Garoupe is the Cap's beautiful sheltered beach, its clear water lapping a crescent of sand once frequented by the Riviera's early glitterati. Above it, the Chemin de la Garoupe climbs to the lighthouse and the little sailors' chapel, with a 360-degree panorama over the coast and the Alps.",
          "The view from the top is one of the best on this part of the Riviera.",
        ],
        bullets: [
          "The sheltered Plage de la Garoupe",
          "The Garoupe lighthouse and sailors' chapel",
          "A 360-degree panorama over the coast",
          "Historic beach clubs by the sand",
        ],
      },
      {
        id: "gardens-and-eden-roc",
        title: "Gardens and the legendary Eden-Roc",
        paragraphs: [
          "The Cap has botanical treasures — the Jardin Thuret, a research garden of exotic species, and the grounds of Villa Eilenroc, open on select days. At the tip stands the Hotel du Cap-Eden-Roc, a byword for Riviera glamour since the 1870s.",
          "Even a drive around the peninsula, past the gates and the sea, is a highlight, and a chauffeur knows the quiet lanes that make it possible.",
        ],
      },
    ],
    faq: [
      {
        question: "What is there to do on Cap d'Antibes?",
        answer:
          "Walk the Sentier du Littoral coastal path, relax at Plage de la Garoupe, climb to the lighthouse, and visit the Jardin Thuret and Villa Eilenroc gardens.",
      },
      {
        question: "Can you walk around Cap d'Antibes?",
        answer:
          "Yes. The Sentier de Tirepoil coastal path circles the tip; a chauffeur can drop you at one end and collect you at the other for a one-way walk.",
      },
      {
        question: "Is Cap d'Antibes worth visiting?",
        answer:
          "Very much so — for its coastal scenery, the Garoupe beach and lighthouse, the gardens and the glamour of the Eden-Roc, all quieter than the towns nearby.",
      },
      {
        question: "How do I get around Cap d'Antibes?",
        answer:
          "The peninsula's lanes are narrow and parking is scarce, so a chauffeur is the easiest way to reach the beach, the lighthouse and the gardens.",
      },
    ],
    relatedSlugs: [
      "antibes-juan-les-pins-guide",
      "nice-airport-to-cap-dantibes",
      "saint-jean-cap-ferrat-luxury-guide",
    ],
    ctaTitle: "Discover Cap d'Antibes with a chauffeur",
    ctaDescription:
      "Explore the coastal path, La Garoupe and the gardens of Cap d'Antibes with a private driver on hand throughout.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "saint-jean-cap-ferrat-luxury-guide",
    title: "Saint-Jean-Cap-Ferrat: A Luxury Guide",
    description:
      "A luxury guide to Saint-Jean-Cap-Ferrat — the Villa Ephrussi de Rothschild, coastal walks, the port and beaches on the Riviera's most exclusive peninsula.",
    excerpt:
      "The Villa Ephrussi de Rothschild, coastal walks and quiet beaches — a luxury guide to Saint-Jean-Cap-Ferrat.",
    category: "Destinations",
    heroKicker: "Saint-Jean-Cap-Ferrat",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/saint-jean-cap-ferrat-luxury-guide.webp",
    imageAlt:
      "The pink Villa Ephrussi de Rothschild and its formal French garden on Cap-Ferrat",
    keywords: [
      "Saint-Jean-Cap-Ferrat guide",
      "things to do Cap-Ferrat",
      "Villa Ephrussi de Rothschild",
      "Cap-Ferrat coastal walk",
      "Saint-Jean-Cap-Ferrat beaches",
    ],
    intro:
      "Saint-Jean-Cap-Ferrat is the Riviera's most discreet address — a peninsula of palatial villas and gardens where privacy is the ultimate luxury. Beyond the gates, though, there is plenty for visitors: a fairytale villa, some of the loveliest coastal walks on the coast, and quiet beaches. Here is a luxury guide to Saint-Jean-Cap-Ferrat.",
    sections: [
      {
        id: "villa-ephrussi",
        title: "The Villa Ephrussi de Rothschild",
        paragraphs: [
          "The rose-pink Villa Ephrussi de Rothschild is the Cap's crown jewel: a belle-époque palace built by Béatrice de Rothschild, filled with art and surrounded by nine themed gardens that step down to the sea, from a French formal garden to Spanish, Florentine and Japanese designs.",
          "The musical fountains and the panorama over the twin bays make it one of the finest villa-and-garden visits in France.",
        ],
        bullets: [
          "Nine themed gardens by the sea",
          "A belle-époque interior of art and antiques",
          "Musical fountains and sea panoramas",
          "One of the Riviera's great garden estates",
        ],
      },
      {
        id: "coastal-walks",
        title: "Coastal walks and the port",
        paragraphs: [
          "The Cap is laced with coastal paths that hug the shoreline through pine and rock. The walk around the Pointe Saint-Hospice and the Sentier du Littoral offers constant sea views, sheltered coves and glimpses of the great villas from below.",
          "The pretty port of Saint-Jean, with its cafés and small fishing boats, is the peninsula's gentle heart, and Plage de Passable offers a rare public beach with a view of Villefranche.",
        ],
        bullets: [
          "The Pointe Saint-Hospice coastal walk",
          "Sheltered coves and sea views",
          "The port of Saint-Jean and its cafés",
          "Plage de Passable facing Villefranche",
        ],
      },
      {
        id: "quiet-luxury",
        title: "Quiet luxury and how to enjoy it",
        paragraphs: [
          "Much of Cap-Ferrat's appeal is simply its calm: no crowds, no noise, just gardens, walks and the sea. The Grand-Hôtel du Cap-Ferrat crowns the peninsula for those who stay, but a day visit is rewarding too.",
          "A chauffeur is ideal here — the roads are quiet and residential, and a driver links the villa, the walks and the port without the search for parking.",
        ],
      },
    ],
    faq: [
      {
        question: "What is there to do in Saint-Jean-Cap-Ferrat?",
        answer:
          "Visit the Villa Ephrussi de Rothschild and its gardens, walk the coastal paths around Pointe Saint-Hospice, and relax at the port or Plage de Passable.",
      },
      {
        question: "Is the Villa Ephrussi de Rothschild worth visiting?",
        answer:
          "Yes — its nine themed gardens, musical fountains and belle-époque interior make it one of the finest villa-and-garden estates on the Riviera.",
      },
      {
        question: "Are there public beaches on Cap-Ferrat?",
        answer:
          "Yes. Plage de Passable is a well-known public beach with a lovely view toward Villefranche, alongside smaller coves along the coastal paths.",
      },
      {
        question: "Why use a chauffeur on Cap-Ferrat?",
        answer:
          "The peninsula is quiet and residential with limited parking, so a chauffeur is the easiest way to link the villa, the walks and the port.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-saint-jean-cap-ferrat",
      "eze-village-visitor-guide",
      "best-things-to-do-in-nice",
    ],
    ctaTitle: "Explore Cap-Ferrat with a private chauffeur",
    ctaDescription:
      "Enjoy the Villa Ephrussi, the coastal walks and the port of Saint-Jean-Cap-Ferrat with a discreet private driver.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "eze-village-visitor-guide",
    title: "Èze Village: A Visitor's Guide",
    description:
      "A visitor's guide to Èze — the perched medieval village, the Exotic Garden and its views, the Nietzsche Path and the perfume factory, with chauffeur tips.",
    excerpt:
      "The perched medieval village, the Exotic Garden, the Nietzsche Path and the perfumery — a visitor's guide to Èze.",
    category: "Destinations",
    heroKicker: "Èze village",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/eze-village-visitor-guide.webp",
    imageAlt:
      "The perched medieval village of Èze and its exotic garden high above the Mediterranean",
    keywords: [
      "Èze village guide",
      "things to do in Èze",
      "Èze exotic garden",
      "Nietzsche Path Èze",
      "Èze France travel",
    ],
    intro:
      "Èze is the most photographed of the Riviera's perched villages — a medieval eyrie of stone lanes clinging to a peak 400 metres above the sea, halfway between Nice and Monaco. Tiny and car-free at its heart, it packs galleries, gardens and jaw-dropping views into a compact climb. Here is a visitor's guide to Èze village.",
    sections: [
      {
        id: "the-village",
        title: "The perched medieval village",
        paragraphs: [
          "Èze's old village is a vertical maze of vaulted passages, flower-draped stone houses, artisan workshops and galleries, all leading upward. There are no cars — you climb on foot — and every turn frames another view or a hidden courtyard.",
          "It is small enough to see in a couple of hours but atmospheric enough to linger, especially early or late when the day-trippers thin out.",
        ],
        bullets: [
          "Car-free medieval lanes and passages",
          "Artisan workshops and art galleries",
          "Flower-draped stone houses",
          "Best enjoyed early morning or evening",
        ],
      },
      {
        id: "exotic-garden",
        title: "The Jardin Exotique and its views",
        paragraphs: [
          "At the very top, on the site of a ruined castle, the Jardin Exotique d'Èze plants cacti and succulents among the old walls — and delivers what many call the finest view on the Riviera, a dizzying panorama over the coast from Cap-Ferrat to Italy.",
          "On a clear day you can see for miles along the coast and out to sea; it is the reason most visitors make the climb.",
        ],
        bullets: [
          "Cacti and succulents among castle ruins",
          "A panoramic view along the whole coast",
          "One of the Riviera's great viewpoints",
          "Sculpture and quiet corners to rest",
        ],
      },
      {
        id: "path-and-perfume",
        title: "The Nietzsche Path and the perfumery",
        paragraphs: [
          "From the village, the Nietzsche Path drops steeply to Èze-sur-Mer on the shore, the trail where the philosopher is said to have conceived part of Thus Spoke Zarathustra. It is a strenuous walk down (and back up), rewarded by sea views.",
          "At the foot of the village, the Fragonard perfume factory offers free tours of how scent is made — an easy, level stop that a chauffeur can pair with the village above.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Èze famous for?",
        answer:
          "Its perched medieval village, the Jardin Exotique with panoramic sea views, the Nietzsche Path to the shore, and the Fragonard perfumery at its foot.",
      },
      {
        question: "Is Èze village worth visiting?",
        answer:
          "Yes. The car-free lanes and the view from the Exotic Garden make it one of the most memorable stops between Nice and Monaco.",
      },
      {
        question: "How long do you need in Èze?",
        answer:
          "A couple of hours covers the village and the garden; add more time for the Nietzsche Path or a meal with a view.",
      },
      {
        question: "Can you drive into Èze village?",
        answer:
          "No — the old village is pedestrian. A chauffeur drops you at the entrance on the Moyenne Corniche for the short walk up.",
      },
    ],
    relatedSlugs: [
      "eze-monaco-private-tour-from-nice",
      "nice-airport-to-eze",
      "monaco-in-one-day",
    ],
    ctaTitle: "Visit Èze with a private chauffeur",
    ctaDescription:
      "Reach the perched village and its exotic garden with ease — a private driver for Èze and the corniche between Nice and Monaco.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "beaulieu-sur-mer-guide",
    title: "Beaulieu-sur-Mer Travel Guide",
    description:
      "A travel guide to Beaulieu-sur-Mer — the Villa Kérylos, the marina, the belle-époque seafront and the coastal walk to Cap-Ferrat, with chauffeur tips.",
    excerpt:
      "The Villa Kérylos, the marina and the coastal walk to Cap-Ferrat — a travel guide to belle-époque Beaulieu-sur-Mer.",
    category: "Destinations",
    heroKicker: "Beaulieu-sur-Mer",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/beaulieu-sur-mer-guide.webp",
    imageAlt:
      "The Villa Kérylos, a recreated ancient Greek villa on the seafront of Beaulieu-sur-Mer",
    keywords: [
      "Beaulieu-sur-Mer guide",
      "things to do Beaulieu-sur-Mer",
      "Villa Kérylos",
      "Beaulieu-sur-Mer marina",
      "Beaulieu-sur-Mer France",
    ],
    intro:
      "Beaulieu-sur-Mer is a sheltered pocket of belle-époque calm between Villefranche and Cap-Ferrat, blessed with a warm microclimate the locals call the Petite Afrique. It is small, elegant and easy to love, with one truly remarkable sight. Here is a travel guide to Beaulieu-sur-Mer.",
    sections: [
      {
        id: "villa-kerylos",
        title: "The Villa Kérylos",
        paragraphs: [
          "Beaulieu's star attraction is the Villa Kérylos, a faithful recreation of an ancient Greek villa built on the seafront in the early 1900s by the scholar Théodore Reinach. Its columns, mosaics and painted rooms recreate the world of classical Greece, right at the water's edge.",
          "It is one of the most unusual and beautiful house-museums on the coast, and a short, level visit a chauffeur can pair with the neighbouring Cap-Ferrat.",
        ],
        bullets: [
          "A recreated ancient Greek seaside villa",
          "Mosaics, columns and painted interiors",
          "A dramatic waterfront setting",
          "Easy to combine with Cap-Ferrat",
        ],
      },
      {
        id: "seafront-and-marina",
        title: "The seafront, marina and coastal walk",
        paragraphs: [
          "Beaulieu wraps around its marina, the Port de Plaisance, lined with cafés and backed by belle-époque hotels and the landmark La Rotonde. The sheltered bay and mild climate make the promenade a pleasure year-round.",
          "The lovely Promenade Maurice Rouvier follows the shore from Beaulieu to Saint-Jean-Cap-Ferrat, a flat, scenic coastal walk with a chauffeur pickup at the far end.",
        ],
        bullets: [
          "The Port de Plaisance marina and cafés",
          "Belle-époque architecture and La Rotonde",
          "The Promenade Maurice Rouvier to Cap-Ferrat",
          "A mild microclimate, the Petite Afrique",
        ],
      },
      {
        id: "base",
        title: "A quiet base on the eastern Riviera",
        paragraphs: [
          "Beaulieu's central position makes it a calm base for the eastern Riviera: Villefranche, Cap-Ferrat, Èze and Monaco are all minutes away. It offers the elegance of the coast without the bustle of the bigger towns.",
          "A chauffeur turns that position into an easy touring hub, linking the villages and viewpoints of this beautiful stretch of coast.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Beaulieu-sur-Mer known for?",
        answer:
          "The remarkable Villa Kérylos, its sheltered marina and belle-époque seafront, and a mild microclimate known as the Petite Afrique.",
      },
      {
        question: "Is the Villa Kérylos worth visiting?",
        answer:
          "Yes. This faithful recreation of an ancient Greek villa on the waterfront is one of the most unusual and beautiful house-museums on the Riviera.",
      },
      {
        question: "Can you walk from Beaulieu to Cap-Ferrat?",
        answer:
          "Yes. The flat, scenic Promenade Maurice Rouvier follows the shore to Saint-Jean-Cap-Ferrat, with a chauffeur pickup easy to arrange at the end.",
      },
      {
        question: "Is Beaulieu a good base for the Riviera?",
        answer:
          "Yes. It is quiet and central, with Villefranche, Cap-Ferrat, Èze and Monaco all just minutes away by car.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-beaulieu-sur-mer",
      "saint-jean-cap-ferrat-luxury-guide",
      "villefranche-sur-mer-cruise-port-guide",
    ],
    ctaTitle: "Explore Beaulieu-sur-Mer with a chauffeur",
    ctaDescription:
      "Enjoy the Villa Kérylos, the marina and the coastal walk with a private driver linking Beaulieu to the eastern Riviera.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "villefranche-sur-mer-cruise-port-guide",
    title: "Villefranche-sur-Mer Cruise Port Guide",
    description:
      "A guide to Villefranche-sur-Mer for cruise visitors — the old town, Rue Obscure, the Citadelle and shore excursions by private chauffeur.",
    excerpt:
      "The old town, Rue Obscure, the Citadelle and shore excursions — a Villefranche-sur-Mer guide for cruise visitors.",
    category: "Destinations",
    heroKicker: "Villefranche cruise port",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/villefranche-sur-mer-cruise-port-guide.webp",
    imageAlt:
      "The colourful old town of Villefranche-sur-Mer with a cruise ship anchored in the deep bay",
    keywords: [
      "Villefranche-sur-Mer cruise port",
      "Villefranche cruise excursion",
      "things to do Villefranche",
      "Villefranche old town",
      "Villefranche shore excursion",
    ],
    intro:
      "Villefranche-sur-Mer has one of the deepest natural harbours on the Mediterranean, which is why cruise ships love to anchor in its bay and tender their passengers ashore. It is a beautiful port of call — a jewel-box old town — and the perfect launch point for a shore excursion along the coast. Here is a guide to Villefranche for cruise visitors and day-trippers alike.",
    sections: [
      {
        id: "the-bay",
        title: "The bay and the tender port",
        paragraphs: [
          "Villefranche's deep, sheltered bay makes it a natural cruise anchorage. Ships moor offshore and tenders bring passengers to the small port beneath the old town, steps from the heart of the village.",
          "For a shore excursion, timing matters — a chauffeur meets you at the tender quay, plans the day around the last tender back, and removes the risk of missing the ship.",
        ],
        bullets: [
          "One of the deepest natural harbours on the coast",
          "Tenders ashore to the port beneath the old town",
          "A chauffeur pickup at the tender quay",
          "Excursions planned around the ship's schedule",
        ],
      },
      {
        id: "old-town",
        title: "The old town and Rue Obscure",
        paragraphs: [
          "The old town tumbles down to the water in tiers of ochre, pink and yellow houses. Its most curious feature is the Rue Obscure, a vaulted medieval street that runs, dark and cool, beneath the buildings — one of the oldest of its kind in France.",
          "On the quay, the Chapelle Saint-Pierre, decorated by Jean Cocteau, and the citadel of Saint-Elme complete a compact, atmospheric wander.",
        ],
        bullets: [
          "Colourful tiered houses above the port",
          "The vaulted medieval Rue Obscure",
          "The Cocteau-decorated Chapelle Saint-Pierre",
          "The 16th-century Citadelle Saint-Elme",
        ],
      },
      {
        id: "shore-excursion",
        title: "Shore excursions from Villefranche",
        paragraphs: [
          "Villefranche's position makes it ideal for a private shore excursion: Monaco, Èze, Nice and Cap-Ferrat are all within easy reach for a half or full day, tailored to how long the ship is in port.",
          "A chauffeur builds the day around your interests and the tender times, so you see the most without the stress of public transport or a fixed group tour.",
        ],
      },
    ],
    faq: [
      {
        question: "Why do cruise ships stop at Villefranche-sur-Mer?",
        answer:
          "Its deep, sheltered natural harbour is ideal for anchoring, and the pretty old town and central location make it a superb port of call.",
      },
      {
        question: "What can you do on a Villefranche shore excursion?",
        answer:
          "Explore the old town, or take a private chauffeur to Monaco, Èze, Nice or Cap-Ferrat, all within easy reach for a half or full day.",
      },
      {
        question: "What is the Rue Obscure?",
        answer:
          "A vaulted medieval covered street running beneath the old town of Villefranche — dark, cool and one of the oldest of its kind in France.",
      },
      {
        question: "How do I make sure I get back to my ship?",
        answer:
          "A chauffeur plans the excursion around the tender times and returns you to the quay in good time for the last tender back.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-villefranche-sur-mer",
      "beaulieu-sur-mer-guide",
      "saint-jean-cap-ferrat-luxury-guide",
    ],
    ctaTitle: "Book a Villefranche shore excursion",
    ctaDescription:
      "Make the most of a day in port with a private chauffeur for Villefranche, Monaco, Èze and the coast, timed to your ship.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "menton-day-trip-guide",
    title: "Menton: A Day Trip Guide",
    description:
      "A day trip guide to Menton — the pastel old town, the gardens, the Cocteau museum, the market and the Italian border, with chauffeur tips.",
    excerpt:
      "The pastel old town, the gardens, the Cocteau museum and the Italian border — a day trip guide to sunny Menton.",
    category: "Destinations",
    heroKicker: "Menton day trip",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/menton-day-trip-guide.webp",
    imageAlt:
      "The pastel Italianate old town of Menton climbing to the Basilica Saint-Michel bell tower",
    keywords: [
      "Menton day trip",
      "things to do in Menton",
      "Menton gardens",
      "Menton old town",
      "Menton Cocteau museum",
    ],
    intro:
      "Menton is the last French town before Italy and the sunniest on the Riviera, a place of pastel façades, subtropical gardens and a gentle Italian accent. It makes a wonderful day trip from anywhere on the coast. Here is a day trip guide to Menton.",
    sections: [
      {
        id: "old-town",
        title: "The pastel old town",
        paragraphs: [
          "Menton's old town rises from the seafront in tiers of yellow, ochre and pink, crowned by the baroque Basilica Saint-Michel-Archange and its beautiful parvis. Steep ramps and stairways lead up through the lanes to the old cemetery, with sweeping views over the coast to Italy.",
          "Down at sea level, the covered Marché des Halles is a feast of Italian and Provençal produce, perfect for a morning stroll.",
        ],
        bullets: [
          "The baroque Basilica Saint-Michel",
          "Colourful lanes and stairways",
          "The covered Marché des Halles",
          "Views along the coast to Italy",
        ],
      },
      {
        id: "gardens",
        title: "The gardens of Menton",
        paragraphs: [
          "Menton's mild climate makes it a city of gardens. The Serre de la Madone and the Jardin du Val Rahmeh brim with rare and exotic plants, while the Jardin Fontana Rosa and others reflect the town's long love affair with horticulture.",
          "For garden lovers it is one of the richest destinations in France, and a chauffeur links the scattered gardens easily in a single visit.",
        ],
        bullets: [
          "The Serre de la Madone garden",
          "The Jardin du Val Rahmeh",
          "Rare and subtropical species",
          "Gardens linked easily by chauffeur",
        ],
      },
      {
        id: "cocteau-and-border",
        title: "The Cocteau museum and the border",
        paragraphs: [
          "By the seafront, the Jean Cocteau museum in the old Bastion holds works the artist created for Menton, which adopted him. And because Italy is minutes away, a Menton day trip pairs naturally with a hop across the border to Ventimiglia and its famous Friday market.",
          "In February the town celebrates the Fête du Citron, filling the streets with sculptures made of lemons and oranges — a spectacle worth planning around.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Menton known for?",
        answer:
          "Its pastel Italianate old town, subtropical gardens, the Cocteau museum, and the February Lemon Festival, all in the sunniest corner of the Riviera.",
      },
      {
        question: "Is Menton worth a day trip?",
        answer:
          "Yes. The old town, the gardens and the seafront make a lovely, relaxed day, easily combined with a hop across the border into Italy.",
      },
      {
        question: "Can you visit Italy from Menton?",
        answer:
          "Easily. Ventimiglia and its famous Friday market are minutes across the border, and a chauffeur can continue on to Sanremo.",
      },
      {
        question: "When is the Menton Lemon Festival?",
        answer:
          "The Fête du Citron takes place in February, filling the town with sculptures made from lemons and oranges.",
      },
    ],
    relatedSlugs: [
      "nice-airport-to-menton",
      "nice-airport-to-sanremo-italy",
      "eze-village-visitor-guide",
    ],
    ctaTitle: "Discover Menton with a private chauffeur",
    ctaDescription:
      "Enjoy the old town, the gardens and the Italian border with a private driver for a relaxed Menton day trip.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-3-day-itinerary",
    title: "French Riviera: A 3-Day Itinerary",
    description:
      "A perfect 3-day French Riviera itinerary — Nice, Èze and Monaco, then Cannes and Antibes, then the villages, all linked by private chauffeur.",
    excerpt:
      "Nice, Èze and Monaco, then Cannes and Antibes, then the villages — a perfect 3-day French Riviera itinerary by chauffeur.",
    category: "Destinations",
    heroKicker: "Riviera itinerary",
    readTime: "8 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-3-day-itinerary.webp",
    imageAlt:
      "A panoramic view of the French Riviera coastline from a corniche with a luxury car",
    keywords: [
      "French Riviera itinerary",
      "3 days French Riviera",
      "French Riviera travel plan",
      "Riviera road trip",
      "Cote d'Azur itinerary",
    ],
    intro:
      "Three days is enough to fall for the French Riviera if you plan them well. This itinerary balances the great set pieces — Monaco, Cannes, Nice — with the perched villages and quiet corners that make the coast special. With a private chauffeur handling the driving and the traffic, each day flows from one highlight to the next. Here is a perfect 3-day French Riviera itinerary.",
    sections: [
      {
        id: "day-one",
        title: "Day 1: Nice, Èze and Monaco",
        paragraphs: [
          "Start in Nice with a morning on the Promenade des Anglais and in the Old Town, then climb Castle Hill for the view. After lunch, take the corniche east, stopping at the perched village of Èze and its exotic garden.",
          "Arrive in Monaco in the late afternoon for the casino square and Port Hercule, timing the corniche drive for golden hour on the way.",
        ],
        bullets: [
          "Morning: Nice Old Town and the Promenade",
          "Midday: Èze village and the Exotic Garden",
          "Afternoon: Monaco and Monte-Carlo",
          "The scenic corniche between them",
        ],
      },
      {
        id: "day-two",
        title: "Day 2: Cannes, Antibes and Mougins",
        paragraphs: [
          "Head west to Cannes for La Croisette and the old town of Le Suquet, then on to Antibes for the ramparts, the Picasso Museum and Port Vauban. Lunch in the hilltop village of Mougins adds a touch of gastronomy.",
          "If time allows, add the perfume houses of Grasse or the sands of Juan-les-Pins before returning east.",
        ],
        bullets: [
          "Cannes: La Croisette and Le Suquet",
          "Antibes: ramparts, Picasso and Port Vauban",
          "Mougins for a gastronomic lunch",
          "Optional: Grasse or Juan-les-Pins",
        ],
      },
      {
        id: "day-three",
        title: "Day 3: villages and the coast",
        paragraphs: [
          "Spend the final day on the quieter side of the Riviera: the coastal walks and villa of Saint-Jean-Cap-Ferrat, the harbour of Villefranche, and the sunny old town of Menton on the Italian border — or strike out west for a longer run to Saint-Tropez.",
          "Whichever way you turn, the villages reward an unhurried pace, and a chauffeur lets you set it.",
        ],
      },
    ],
    faq: [
      {
        question: "Is 3 days enough for the French Riviera?",
        answer:
          "Yes. Three well-planned days cover Nice, Monaco, Cannes, Antibes and the perched villages, especially with a chauffeur handling the driving.",
      },
      {
        question: "What is the best order for a Riviera itinerary?",
        answer:
          "A natural rhythm is Nice–Èze–Monaco on day one, the western towns on day two, and the quieter villages or Saint-Tropez on day three.",
      },
      {
        question: "Do you need a car for the French Riviera?",
        answer:
          "The towns are linked by train, but a chauffeur reaches the perched villages, viewpoints and gardens far more easily, without parking or timetables.",
      },
      {
        question: "Can this itinerary be customised?",
        answer:
          "Yes. A private chauffeur tailors the pace and the stops to your interests, whether that is art, gardens, beaches or gastronomy.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "monaco-in-one-day",
      "best-things-to-do-in-cannes",
    ],
    ctaTitle: "Plan your Riviera days with a chauffeur",
    ctaDescription:
      "Turn three days on the French Riviera into a seamless itinerary with a private driver linking the coast's highlights.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "getting-around-nice",
    title: "How to Get Around Nice",
    description:
      "How to get around Nice — walking, the tram, bikes, taxis and private chauffeurs — plus the easiest ways to reach the rest of the Riviera.",
    excerpt:
      "Walking, the tram, bikes, taxis and chauffeurs — how to get around Nice and reach the rest of the Riviera.",
    category: "Destinations",
    heroKicker: "Getting around Nice",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/getting-around-nice.webp",
    imageAlt:
      "The Place Masséna in Nice with its red arcaded buildings, tram and fountain at golden hour",
    keywords: [
      "getting around Nice",
      "Nice transport",
      "Nice tram",
      "how to get around Nice",
      "Nice without a car",
    ],
    intro:
      "Nice is an easy city to explore, but the right mix of transport depends on how far you want to roam. The centre is walkable, the tram is quick and cheap, and a chauffeur unlocks the hills and the wider coast. Here is how to get around Nice — and beyond.",
    sections: [
      {
        id: "on-foot-and-tram",
        title: "On foot and by tram",
        paragraphs: [
          "Central Nice is best on foot: the Old Town, the Promenade des Anglais, the port and Place Masséna are all within walking distance of each other. For longer hops, the modern tram is fast and inexpensive — Line 1 crosses the centre, and Line 2 runs to the airport.",
          "Between them, walking and the tram cover most of what a visitor needs in the city itself.",
        ],
        bullets: [
          "The Old Town and Promenade are walkable",
          "Tram Line 1 across the centre",
          "Tram Line 2 to the airport",
          "Cheap, frequent and easy to use",
        ],
      },
      {
        id: "bikes-and-taxis",
        title: "Bikes, taxis and ride-hailing",
        paragraphs: [
          "The Vélo Bleu bike-share is handy for the flat seafront, and taxis and ride-hailing work for shorter trips, though they can be scarce at peak times and event days.",
          "For a single ride to a restaurant or the station they are fine; for a day of sightseeing across the city and coast, they add up and lack flexibility.",
        ],
        bullets: [
          "Vélo Bleu bike-share along the seafront",
          "Taxis for short, central trips",
          "Ride-hailing available but variable",
          "Less suited to a full day of touring",
        ],
      },
      {
        id: "chauffeur",
        title: "By private chauffeur for the hills and the coast",
        paragraphs: [
          "Nice's museums at Cimiez, the Mont Boron viewpoints, and above all the day trips to Èze, Monaco, Cannes and the villages are far easier with a private chauffeur. A driver links sights that are awkward by tram or bus into a single, comfortable itinerary.",
          "It is also the most relaxed way to arrive from the airport and to explore the coast without parking, timetables or navigation.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you need a car in Nice?",
        answer:
          "Not for the centre, which is walkable and served by trams. For the hillside museums and day trips along the coast, a private chauffeur is far easier.",
      },
      {
        question: "Does the Nice tram go to the airport?",
        answer:
          "Yes. Tram Line 2 connects the city with Nice Côte d'Azur Airport quickly and cheaply.",
      },
      {
        question: "What is the best way to see the Riviera from Nice?",
        answer:
          "A private chauffeur, which reaches the perched villages, viewpoints and neighbouring towns easily, without parking or timetables.",
      },
      {
        question: "Is Nice walkable?",
        answer:
          "Yes. The Old Town, the Promenade des Anglais, the port and Place Masséna are all within comfortable walking distance.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "nice-airport-to-monaco",
      "private-driver",
    ],
    ctaTitle: "See more of Nice with a chauffeur",
    ctaDescription:
      "Explore Nice's hills and the wider Riviera with a private driver linking the sights into one easy day.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-hidden-gems",
    title: "French Riviera Hidden Gems",
    description:
      "French Riviera hidden gems — Saint-Paul-de-Vence, Gourdon, Biot and the perched villages beyond the coast, best explored by private chauffeur.",
    excerpt:
      "Saint-Paul-de-Vence, Gourdon, Biot and the perched villages — French Riviera hidden gems beyond the busy coast.",
    category: "Destinations",
    heroKicker: "Riviera hidden gems",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-hidden-gems.webp",
    imageAlt:
      "The hilltop medieval village of Saint-Paul-de-Vence among cypress trees and green hills",
    keywords: [
      "French Riviera hidden gems",
      "perched villages French Riviera",
      "Saint-Paul-de-Vence",
      "Gourdon village",
      "off the beaten path Riviera",
    ],
    intro:
      "Beyond the famous coast, the hills behind the French Riviera hide a string of perched villages and quiet corners that many visitors never reach. They are where the region feels most timeless — stone lanes, art, and views for miles. Here are some of the French Riviera's hidden gems, and how a chauffeur brings them within easy reach.",
    sections: [
      {
        id: "saint-paul-and-vence",
        title: "Saint-Paul-de-Vence and Vence",
        paragraphs: [
          "Saint-Paul-de-Vence is the most celebrated of the hilltop villages, a ring of ramparts around cobbled lanes packed with galleries — a magnet for artists from Chagall to the Fondation Maeght nearby. Neighbouring Vence adds Matisse's exquisite Rosary Chapel.",
          "Both are a short drive inland from the coast and pair naturally into an afternoon of art and villages.",
        ],
        bullets: [
          "Ramparts and galleries in Saint-Paul-de-Vence",
          "The Fondation Maeght art foundation",
          "Matisse's Rosary Chapel in Vence",
          "Cobbled lanes and hilltop views",
        ],
      },
      {
        id: "gourdon-and-hills",
        title: "Gourdon and the backcountry",
        paragraphs: [
          "Perched on a cliff above the Gorges du Loup, Gourdon is one of the most dramatic villages in France, with a view that reaches to the sea. The winding drive up through the gorge is an attraction in itself.",
          "Further into the hills, villages like Tourrettes-sur-Loup, Coaraze and Sainte-Agnès reward those who venture off the coast with authenticity and calm.",
        ],
        bullets: [
          "Clifftop Gourdon above the Gorges du Loup",
          "The scenic drive through the gorge",
          "Tourrettes-sur-Loup and the violet village",
          "Sainte-Agnès, one of the highest coastal villages",
        ],
      },
      {
        id: "biot-and-la-turbie",
        title: "Biot, La Turbie and more",
        paragraphs: [
          "Biot is famous for its bubbled glassware and its medieval square, while La Turbie, high above Monaco, holds the Roman Trophy of Augustus and a stunning view over the principality.",
          "These are the kinds of places a chauffeur makes easy — scattered across the hills, awkward by public transport, but a joy to string together on a quiet day.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the best hidden gems on the French Riviera?",
        answer:
          "The perched villages inland — Saint-Paul-de-Vence, Vence, Gourdon, Tourrettes-sur-Loup, Biot and La Turbie — offer art, history and views away from the busy coast.",
      },
      {
        question: "Is Saint-Paul-de-Vence worth visiting?",
        answer:
          "Yes. Its ramparts, galleries and the nearby Fondation Maeght make it one of the most rewarding village visits on the Riviera.",
      },
      {
        question: "How do you reach the perched villages?",
        answer:
          "They are scattered across the hills and awkward by public transport, so a private chauffeur is the easiest way to visit several in a day.",
      },
      {
        question: "What is La Turbie known for?",
        answer:
          "The Roman Trophy of Augustus, a monumental ancient landmark high above Monaco, with a spectacular view over the principality.",
      },
    ],
    relatedSlugs: [
      "antibes-cannes-saint-paul-de-vence-private-tour",
      "eze-village-visitor-guide",
      "french-riviera-3-day-itinerary",
    ],
    ctaTitle: "Discover the hidden Riviera with a chauffeur",
    ctaDescription:
      "Reach the perched villages and quiet corners of the Riviera with a private driver who knows the back roads.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "best-beaches-french-riviera",
    title: "Best Beaches on the French Riviera",
    description:
      "The best beaches on the French Riviera — from Paloma and La Garoupe to Pampelonne and Mala — with tips on reaching them by private chauffeur.",
    excerpt:
      "From Paloma and La Garoupe to Pampelonne and Mala Beach — the best beaches on the French Riviera.",
    category: "Destinations",
    heroKicker: "Riviera beaches",
    readTime: "7 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/best-beaches-french-riviera.webp",
    imageAlt:
      "A secluded turquoise cove beach on the French Riviera with umbrella pines and sun loungers",
    keywords: [
      "best beaches French Riviera",
      "French Riviera beaches",
      "Paloma Beach",
      "Pampelonne beach",
      "Mala Beach Cap d'Ail",
    ],
    intro:
      "The French Riviera's beaches range from glamorous sand to hidden pebble coves, each with its own character. The best often need a little effort to reach — which is where a chauffeur helps, dropping you close and sparing you the parking. Here are some of the best beaches on the French Riviera.",
    sections: [
      {
        id: "eastern-coves",
        title: "The eastern coves: Paloma, Passable and Mala",
        paragraphs: [
          "East of Nice, the coast hides some beautiful coves. Paloma Beach on Cap-Ferrat is a chic pebble bay with a famous beach club; Plage de Passable, nearby, faces Villefranche with calm, shallow water. Further east, Mala Beach at Cap d'Ail is a stunning hidden cove reached by a cliff path.",
          "These sheltered spots have clear water and a quieter feel than the city beaches.",
        ],
        bullets: [
          "Paloma Beach on Cap-Ferrat",
          "Plage de Passable facing Villefranche",
          "Mala Beach, a hidden cove at Cap d'Ail",
          "Clear water and a calmer atmosphere",
        ],
      },
      {
        id: "antibes-and-monaco",
        title: "La Garoupe, Juan-les-Pins and Larvotto",
        paragraphs: [
          "West of Nice, Plage de la Garoupe on Cap d'Antibes is a lovely sheltered crescent of sand with historic beach clubs, while neighbouring Juan-les-Pins offers a lively pine-backed beach. In Monaco, the Larvotto beach has been redesigned into a smart urban bay.",
          "Each combines easy swimming with somewhere good to eat by the water.",
        ],
        bullets: [
          "Plage de la Garoupe on Cap d'Antibes",
          "The sandy, lively beach at Juan-les-Pins",
          "Monaco's redesigned Larvotto bay",
          "Beach clubs and waterfront dining",
        ],
      },
      {
        id: "pampelonne",
        title: "Pampelonne, the glamour of Saint-Tropez",
        paragraphs: [
          "No beach roundup is complete without Pampelonne, the long golden sweep near Saint-Tropez lined with the legendary beach clubs that made the town famous. Lunch here can last all afternoon.",
          "It is a longer drive west, and a chauffeur is the easy way to arrive and return, avoiding the notorious beach-road traffic and parking.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the best beaches on the French Riviera?",
        answer:
          "Standouts include Paloma and Passable on Cap-Ferrat, Mala at Cap d'Ail, La Garoupe on Cap d'Antibes, Juan-les-Pins, Monaco's Larvotto and Pampelonne near Saint-Tropez.",
      },
      {
        question: "Are Riviera beaches sandy or pebbly?",
        answer:
          "Both. Nice and the eastern coves are largely pebble, while Juan-les-Pins, Pampelonne and parts of the coast to the west have sand.",
      },
      {
        question: "How do you reach the hidden coves?",
        answer:
          "Many are down cliff paths with little parking, so a chauffeur that drops you close and collects you afterwards makes them far easier.",
      },
      {
        question: "What are the Pampelonne beach clubs?",
        answer:
          "Legendary beach clubs on the long sandy beach near Saint-Tropez, where sunbeds, lunch and afternoons by the sea are the whole experience.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-saint-tropez",
      "cap-dantibes-scenic-guide",
      "saint-jean-cap-ferrat-luxury-guide",
    ],
    ctaTitle: "Reach the best beaches with a chauffeur",
    ctaDescription:
      "Skip the parking and the beach-road traffic — a private driver for the Riviera's finest beaches and coves.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "most-scenic-drives-french-riviera",
    title: "Most Scenic Drives on the French Riviera",
    description:
      "The most scenic drives on the French Riviera — the three Corniches, the Gorges du Loup and the Route des Crêtes — best enjoyed with a chauffeur.",
    excerpt:
      "The three Corniches, the Gorges du Loup and the Route des Crêtes — the most scenic drives on the French Riviera.",
    category: "Destinations",
    heroKicker: "Riviera scenic drives",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/most-scenic-drives-french-riviera.webp",
    imageAlt:
      "A luxury car on the Grande Corniche high above the French Riviera coast and Monaco",
    keywords: [
      "scenic drives French Riviera",
      "the three Corniches",
      "Grande Corniche",
      "Riviera road trip",
      "best drives Cote d'Azur",
    ],
    intro:
      "Some of the French Riviera's greatest sights are seen through the windscreen. Its corniche roads and mountain passes offer views that rival any museum, and being driven — rather than driving — is the only way to truly enjoy them. Here are the most scenic drives on the French Riviera.",
    sections: [
      {
        id: "the-corniches",
        title: "The three Corniches, Nice to Monaco",
        paragraphs: [
          "Between Nice and Monaco, three roads climb at different heights. The Basse Corniche hugs the coast through Villefranche and Beaulieu; the Moyenne Corniche leads to Èze; and the Grande Corniche soars highest of all, past La Turbie, with breathtaking views over the whole coast.",
          "Driven end to end at golden hour, they are one of the great scenic experiences of Europe.",
        ],
        bullets: [
          "Basse Corniche along the coast",
          "Moyenne Corniche to Èze",
          "Grande Corniche and La Turbie",
          "Best at golden hour",
        ],
      },
      {
        id: "backcountry",
        title: "The Gorges du Loup and the backcountry",
        paragraphs: [
          "Inland, the Gorges du Loup carves a dramatic route up to the clifftop village of Gourdon, past waterfalls and sheer rock. The roads through the hills behind Grasse and Vence link perched villages and open country far from the coast's bustle.",
          "These are quieter drives, all winding curves and changing views, ideal with a driver who knows the way.",
        ],
        bullets: [
          "The Gorges du Loup up to Gourdon",
          "Waterfalls and dramatic rock",
          "The hills behind Grasse and Vence",
          "Quiet, winding backcountry roads",
        ],
      },
      {
        id: "route-des-cretes",
        title: "The Route des Crêtes and the coast to Italy",
        paragraphs: [
          "West, above the Gulf of Saint-Tropez, the Route des Crêtes runs along a ridge with sweeping views over the bay and the peninsula. East, the coast road toward Menton and the Italian border strings together village after village by the sea.",
          "A chauffeur turns any of these into a relaxed highlight of a Riviera stay, stopping wherever the view is best.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the most scenic drives on the French Riviera?",
        answer:
          "The three Corniches between Nice and Monaco, the Gorges du Loup to Gourdon, the Route des Crêtes above Saint-Tropez, and the coast road to Italy.",
      },
      {
        question: "What is the difference between the three Corniches?",
        answer:
          "They run at three heights: the Basse hugs the coast, the Moyenne leads to Èze, and the Grande soars highest with the widest views over the coast.",
      },
      {
        question: "Is it better to drive or be driven on the Corniches?",
        answer:
          "Being driven lets you enjoy the views and the hairpins without the concentration of driving unfamiliar mountain roads, and stop wherever you like.",
      },
      {
        question: "Can a chauffeur build a scenic drive into a day?",
        answer:
          "Yes. A private driver can weave the corniches and viewpoints into a day that also takes in Èze, Monaco or the villages.",
      },
    ],
    relatedSlugs: [
      "eze-village-visitor-guide",
      "monaco-in-one-day",
      "french-riviera-3-day-itinerary",
    ],
    ctaTitle: "Enjoy the Riviera's scenic drives",
    ctaDescription:
      "Take in the corniches and mountain roads from the back seat — a private chauffeur for the Riviera's finest drives.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "getting-around-monaco",
    title: "How to Get Around Monaco",
    description:
      "How to get around Monaco — on foot, by public lift and bus, taxi and private chauffeur — plus the easy way to arrive from Nice and the airport.",
    excerpt:
      "On foot, by public lift and bus, taxi or private chauffeur — how to get around Monaco with ease.",
    category: "Destinations",
    heroKicker: "Getting around Monaco",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/getting-around-monaco.webp",
    imageAlt:
      "The harbour and Monte-Carlo skyline of Monaco with superyachts and the casino district at golden hour",
    keywords: [
      "getting around Monaco",
      "Monaco transport",
      "Monaco public lifts",
      "how to get around Monaco",
      "Monaco chauffeur",
    ],
    intro:
      "Monaco is tiny — barely two square kilometres — but it is famously steep, stacked in tiers up the hillside above its harbour. That makes getting around a question of managing gradients rather than distance. Here is how to move between the Casino, the Rock and the port, and the easiest way to arrive from Nice and the airport.",
    sections: [
      {
        id: "on-foot-and-lifts",
        title: "On foot and by public lift",
        paragraphs: [
          "Everything in Monaco is close, but little of it is flat. The principality solves this with a network of free public lifts and escalators that connect the different levels — from the port up to the Casino, from Fontvieille to the Rock, and more. Follow the signs and you can cross the whole state on foot without ever climbing a long staircase.",
          "For the Casino square, the Old Town on the Rock and the harbour, walking combined with the public lifts is genuinely the quickest way around.",
        ],
        bullets: [
          "Free public lifts and escalators link the tiers",
          "The Casino, Rock and port are all walkable",
          "Signs point the way between levels",
          "No need to tackle long staircases on foot",
        ],
      },
      {
        id: "buses-and-taxis",
        title: "Buses, taxis and parking",
        paragraphs: [
          "Monaco's compact bus network covers the main districts and is inexpensive, while taxis wait at the station and the main hotels but can be scarce on event days. Driving yourself means navigating tunnels and one-way ramps and paying for the public car parks — manageable, but rarely relaxing.",
          "For a short hop between neighbourhoods a bus or taxi is fine; for a day that mixes Monaco with the wider coast, they are less flexible.",
        ],
        bullets: [
          "Local buses cover the main districts cheaply",
          "Taxis at the station and major hotels",
          "Public car parks for those who drive",
          "Both can be stretched on Grand Prix and event days",
        ],
      },
      {
        id: "chauffeur",
        title: "By private chauffeur for arrivals and the coast",
        paragraphs: [
          "Where a chauffeur earns its keep is the arrival and the day trips. Coming from Nice Airport or a hotel along the coast, a private car brings you to your Monaco door without parking, tunnels or timetables — and links Monaco with Èze, the corniches and the villages in one seamless day.",
          "It is also the natural choice for the Grand Prix, gala evenings and restaurant dinners, when a driver drops you at the entrance and collects you when you are ready.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Monaco walkable?",
        answer:
          "Yes, though it is steep. Free public lifts and escalators connect the tiers, so you can cross the whole principality on foot without long climbs.",
      },
      {
        question: "Are the public lifts in Monaco free?",
        answer:
          "Yes. Monaco's network of public lifts and escalators is free to use and links the port, the Casino, the Rock and Fontvieille.",
      },
      {
        question: "What is the easiest way to arrive in Monaco?",
        answer:
          "A private chauffeur from Nice Airport or your hotel, which brings you to the door without parking, tunnels or timetables in the tight streets.",
      },
      {
        question: "Do you need a car in Monaco?",
        answer:
          "Not within Monaco itself, which is walkable with the lifts. For arriving and combining Monaco with the coast, a private chauffeur is far easier.",
      },
    ],
    relatedSlugs: [
      "monaco-in-one-day",
      "eze-village-visitor-guide",
      "most-scenic-drives-french-riviera",
    ],
    ctaTitle: "Arrive in Monaco the easy way",
    ctaDescription:
      "Skip the tunnels and car parks — a private chauffeur brings you to your Monaco door and on around the coast.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-in-winter",
    title: "The French Riviera in Winter",
    description:
      "The French Riviera in winter — mild weather, quiet villages, the Menton lemon festival, Nice carnival and ski days in the Alps, all within reach.",
    excerpt:
      "Mild weather, quiet villages, festivals and ski days — why the French Riviera rewards a winter visit.",
    category: "Destinations",
    heroKicker: "The Riviera in winter",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-in-winter.webp",
    imageAlt:
      "The Promenade des Anglais in Nice on a clear winter day with palm trees and the blue Mediterranean",
    keywords: [
      "French Riviera in winter",
      "Riviera winter",
      "Menton lemon festival",
      "Nice carnival",
      "Riviera off season",
    ],
    intro:
      "The Riviera is a summer icon, but winter has its own quiet appeal. The weather stays mild, the famous villages empty of crowds, and two of the coast's biggest festivals light up February — with the ski slopes of the Alps close enough for a day trip. Here is what a winter visit to the French Riviera looks like.",
    sections: [
      {
        id: "weather-and-mood",
        title: "Mild weather and quiet streets",
        paragraphs: [
          "Sheltered by the Alps, the coast keeps some of the mildest winters in France — crisp, bright days that are perfect for walking the Promenade or a village lane. The great sights of Nice, Èze, Antibes and Monaco stay open, but without the summer queues and traffic.",
          "It is the season to enjoy the Riviera at its own pace: a long lunch, a quiet gallery, a village all to yourself.",
        ],
        bullets: [
          "Mild, bright days sheltered by the Alps",
          "Villages and viewpoints without the crowds",
          "Museums and restaurants open year-round",
          "Easier parking and calmer roads",
        ],
      },
      {
        id: "winter-events",
        title: "Winter festivals",
        paragraphs: [
          "February brings the coast to life. The Nice Carnival fills the city with floats and flower battles, while just along the coast Menton stages its Fête du Citron — the Lemon Festival — with vast sculptures built from citrus fruit. Between them they draw visitors from across Europe.",
          "A chauffeur makes hopping between the two, or arriving in the evening for the illuminated parades, effortless.",
        ],
        bullets: [
          "Nice Carnival — floats and flower battles",
          "Menton Fête du Citron — giant citrus sculptures",
          "Both take place in February",
          "Evening parades are best reached by car",
        ],
      },
      {
        id: "sea-and-ski",
        title: "Sea and ski in a single day",
        paragraphs: [
          "One of the Riviera's winter luxuries is skiing above a coastline. Isola 2000 and Auron are around ninety minutes from the sea, so a morning on the slopes and an afternoon by the Mediterranean is genuinely possible.",
          "A private chauffeur with a spacious vehicle carries the ski gear and handles the mountain road, turning the logistics into part of the day.",
        ],
      },
      {
        id: "getting-around",
        title: "Getting around in winter",
        paragraphs: [
          "Shorter days and the occasional mountain shower make a private chauffeur especially welcome in winter — door to door, warm and unhurried, whether for a festival evening or a village lunch.",
          "It is the most comfortable way to string the season's highlights together without watching timetables in the cold.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the French Riviera worth visiting in winter?",
        answer:
          "Yes. The weather stays mild, the villages are quiet, and February brings the Nice Carnival and Menton Lemon Festival, with skiing close by.",
      },
      {
        question: "What is the weather like on the Riviera in winter?",
        answer:
          "Sheltered by the Alps, the coast keeps mild, bright winters — cool but often sunny, ideal for walking and sightseeing without summer crowds.",
      },
      {
        question: "Can you ski and visit the coast in the same day?",
        answer:
          "Yes. Isola 2000 and Auron are around ninety minutes from the sea, so a morning skiing and an afternoon on the coast is very doable.",
      },
      {
        question: "When are the Riviera's winter festivals?",
        answer:
          "Both the Nice Carnival and Menton's Fête du Citron take place in February, drawing visitors from across Europe to the coast.",
      },
    ],
    relatedSlugs: [
      "menton-day-trip-guide",
      "french-riviera-hidden-gems",
      "french-riviera-3-day-itinerary",
    ],
    ctaTitle: "Enjoy the Riviera off-season",
    ctaDescription:
      "Festivals, quiet villages and ski days — explore the winter Riviera door to door with a private chauffeur.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "best-french-riviera-gardens",
    title: "Best Gardens on the French Riviera",
    description:
      "The best gardens on the French Riviera — the Villa Ephrussi, the Serre de la Madone, the Èze exotic garden and the gardens of Menton.",
    excerpt:
      "Exotic villa gardens, subtropical terraces and sea views — the finest gardens to visit on the French Riviera.",
    category: "Destinations",
    heroKicker: "Riviera gardens",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/best-french-riviera-gardens.webp",
    imageAlt:
      "A lush Mediterranean garden on the French Riviera with palms, cacti and stone terraces above the sea",
    keywords: [
      "French Riviera gardens",
      "Riviera gardens",
      "Villa Ephrussi gardens",
      "Serre de la Madone",
      "Èze exotic garden",
    ],
    intro:
      "The Riviera's mild microclimate has long drawn plant collectors, and their legacy is a coast studded with extraordinary gardens — French parterres and Japanese groves, cactus terraces clinging to cliffs, and subtropical plants that grow nowhere else in France. Here are the finest gardens to visit along the French Riviera.",
    sections: [
      {
        id: "cap-ferrat-and-beaulieu",
        title: "The Villa Ephrussi at Cap-Ferrat",
        paragraphs: [
          "Perched on the narrowest point of the Saint-Jean-Cap-Ferrat peninsula, the Villa Ephrussi de Rothschild surrounds a rose-pink palace with nine themed gardens — French, Spanish, Florentine, Japanese, exotic and more — laid out on a ridge with the sea on both sides. Musical fountains play across the main parterre.",
          "Nearby in Beaulieu, the Villa Kérylos adds a reconstructed Greek villa with its own seafront setting, making the two an easy pairing.",
        ],
        bullets: [
          "Nine themed gardens on a sea-flanked ridge",
          "Musical fountains on the French parterre",
          "Villa Kérylos nearby in Beaulieu",
          "Among the most famous gardens in France",
        ],
      },
      {
        id: "eze-and-monaco",
        title: "Cliff-top gardens at Èze and Monaco",
        paragraphs: [
          "At the top of the medieval village of Èze, the Jardin Exotique crowns the ruins of the old castle with succulents and cacti and one of the most vertiginous sea views on the coast. Monaco's own Jardin Exotique takes the same idea further, tumbling down a cliff face above the principality.",
          "Both reward the climb — or the chauffeur drop-off — with rare plants and panoramas in equal measure.",
        ],
        bullets: [
          "Èze's exotic garden crowns the hilltop village",
          "Succulents, cacti and sheer sea views",
          "Monaco's Jardin Exotique cascades down a cliff",
          "Spectacular panoramas at both",
        ],
      },
      {
        id: "menton-gardens",
        title: "Menton, the garden town",
        paragraphs: [
          "Warmest of all the Riviera towns, Menton is a garden capital in its own right. The Serre de la Madone, created by an English plantsman, layers terraces of rare species; the Val Rahmeh botanical garden shelters tropical plants; and the Jardin Maria Serena is billed as one of the mildest gardens in France.",
          "Together they make Menton a destination for garden lovers on any Riviera itinerary.",
        ],
      },
      {
        id: "visiting-by-chauffeur",
        title: "Visiting the gardens by chauffeur",
        paragraphs: [
          "The gardens are scattered from Cap-Ferrat to Menton, often up narrow lanes with little parking. A private chauffeur links several in a relaxed day, dropping you at each gate and waiting while you wander.",
          "It turns a logistically awkward garden tour into one of the most serene days the coast can offer.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the most famous garden on the French Riviera?",
        answer:
          "The Villa Ephrussi de Rothschild at Saint-Jean-Cap-Ferrat, with its nine themed gardens and musical fountains on a sea-flanked ridge.",
      },
      {
        question: "Which Riviera town is best for gardens?",
        answer:
          "Menton. Its exceptionally mild climate supports the Serre de la Madone, Val Rahmeh and other gardens filled with rare and tropical species.",
      },
      {
        question: "Can you visit the Èze exotic garden easily?",
        answer:
          "Yes. It crowns the hilltop village of Èze; a chauffeur can drop you near the entrance, saving the climb from the road below.",
      },
      {
        question: "Can a chauffeur combine several gardens in a day?",
        answer:
          "Yes. A private driver links the scattered gardens from Cap-Ferrat to Menton into one relaxed day, with no parking to worry about.",
      },
    ],
    relatedSlugs: [
      "saint-jean-cap-ferrat-luxury-guide",
      "eze-village-visitor-guide",
      "menton-day-trip-guide",
    ],
    ctaTitle: "Tour the Riviera's finest gardens",
    ctaDescription:
      "From the Villa Ephrussi to Menton's terraces — a private chauffeur links the coast's great gardens in one serene day.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
  {
    slug: "french-riviera-markets",
    title: "Best Markets on the French Riviera",
    description:
      "The best markets on the French Riviera — the Cours Saleya in Nice, Forville in Cannes, the Provencal markets of Antibes, Menton and beyond.",
    excerpt:
      "Flowers, produce, antiques and Provençal colour — the best open-air markets to explore on the French Riviera.",
    category: "Destinations",
    heroKicker: "Riviera markets",
    readTime: "6 min read",
    publishedAt: "2026-07-06",
    imageUrl: "/assets/images/blog/french-riviera-markets.webp",
    imageAlt:
      "The colourful open-air Cours Saleya flower and produce market in Nice with striped awnings",
    keywords: [
      "French Riviera markets",
      "Cours Saleya",
      "Marché Forville Cannes",
      "Antibes market",
      "Provencal markets Riviera",
    ],
    intro:
      "Nothing captures the Riviera's everyday pleasure quite like its markets — trestles of flowers and sun-ripened produce, wheels of cheese and Provençal spices, antiques laid out under plane trees. Every town has its own, each with a rhythm and a speciality. Here are the best open-air markets to explore on the French Riviera.",
    sections: [
      {
        id: "nice-cours-saleya",
        title: "Nice: the Cours Saleya",
        paragraphs: [
          "The Cours Saleya in the heart of Nice's Old Town is the coast's most famous market. Most mornings it brims with flowers and Provençal produce — olives, tomatoes, herbs, socca — under striped awnings, and on Mondays it turns over to a celebrated antiques and brocante market.",
          "It is the perfect first stop for a taste of Riviera life, an easy walk from the Promenade.",
        ],
        bullets: [
          "Flowers and produce most mornings",
          "Antiques and brocante on Mondays",
          "In the heart of the Nice Old Town",
          "Local specialities like socca and olives",
        ],
      },
      {
        id: "cannes-and-antibes",
        title: "Cannes and Antibes",
        paragraphs: [
          "In Cannes, the Marché Forville behind the Croisette is where the town's chefs shop — a covered hall of Provençal produce, fish and flowers. Along the coast in Antibes, the Marché Provençal on Cours Masséna spreads under a handsome iron roof, famous for its cheeses, cured meats and Provençal colour.",
          "Both are working markets first and photogenic second, which is exactly their charm.",
        ],
        bullets: [
          "Cannes — Marché Forville, a covered produce hall",
          "Antibes — the Marché Provençal on Cours Masséna",
          "Cheeses, fish, flowers and cured meats",
          "Where local chefs and residents shop",
        ],
      },
      {
        id: "villages-and-menton",
        title: "Village and Menton markets",
        paragraphs: [
          "Beyond the cities, the hill villages and Menton keep their own markets. Menton's covered Marché des Halles overflows with produce from its warm hinterland and nearby Italy, while village squares from Valbonne to Saint-Paul host weekly Provençal markets of crafts and local food.",
          "Combined with a village lunch, a morning market makes one of the most relaxed days on the coast.",
        ],
      },
      {
        id: "market-day-by-chauffeur",
        title: "A market day by chauffeur",
        paragraphs: [
          "Markets run to their own morning timetable and the best ones are in different towns, so a private chauffeur is the natural way to string several together — with room in the boot for whatever you buy.",
          "A driver drops you at the market square, waits while you browse, and carries you on to the next town or a long Provençal lunch.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the most famous market on the French Riviera?",
        answer:
          "The Cours Saleya in Nice, with flowers and Provençal produce most mornings and a celebrated antiques market on Mondays.",
      },
      {
        question: "Where is the best food market in Cannes?",
        answer:
          "The Marché Forville, a covered hall behind the Croisette where the town's chefs and residents buy produce, fish and flowers.",
      },
      {
        question: "When is the antiques market in Nice?",
        answer:
          "On Mondays, when the Cours Saleya swaps its flowers and produce for a large antiques and brocante market in the Old Town.",
      },
      {
        question: "Can a chauffeur take me between several markets?",
        answer:
          "Yes. A private driver links markets in different towns into one morning, waits while you browse and carries whatever you buy.",
      },
    ],
    relatedSlugs: [
      "best-things-to-do-in-nice",
      "best-things-to-do-in-cannes",
      "antibes-juan-les-pins-guide",
    ],
    ctaTitle: "Explore the Riviera's markets",
    ctaDescription:
      "From the Cours Saleya to the villages — a private chauffeur links the coast's best markets into one easy morning.",
    ctaHref: "/our-services/private-tours",
    ctaLabel: "See private tours",
  },
];
