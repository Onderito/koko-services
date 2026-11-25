// The French versions of three route pages (Nice Airport, Nice Airport to Monaco, Nice Airport to Cannes), served at
// /fr/<slug> (app/fr/[slug]/page.tsx) with the service page template. Each page names its English original (enPath):
// the two link to each other with hreflang tags, and the French page uses its original's photos and price table.
// Prices are read from the price list (data/vehicles.tsx), written the French way ("150 €").

import { vehicles } from "./vehicles";
import { transferPages, type ServiceCardLink, type ServicePageConfig } from "./service-pages";

const eur = (amount: number) => `${amount.toLocaleString("fr-FR")} €`;
const vehicle = (id: string) => vehicles.find(v => v.id === id)!;
const E_CLASS = vehicle("mercedes-e");
const V_CLASS = vehicle("mercedes-v");
const S_CLASS = vehicle("mercedes-s");
const MAYBACH = vehicle("mercedes-maybach");
/** One-way starting prices to a town of the price list, every car: "150 € en Mercedes Classe E, 180 € en Classe V, …". */
const routePrices = (town: string) =>
  `${eur(E_CLASS.prices[town].transfer)} en Mercedes Classe E, ${eur(V_CLASS.prices[town].transfer)} en Classe V, ${eur(S_CLASS.prices[town].transfer)} en Classe S et ${eur(MAYBACH.prices[town].transfer)} en Maybach`;

/** French spacing: a no-break space before ":", ";", "?" and "!", so that they never start a line. */
function frenchSpacing<T>(value: T): T {
  if (typeof value === "string") return value.replace(/ ([:;?!])/g, " $1") as T;
  if (Array.isArray(value)) return value.map(item => frenchSpacing(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, frenchSpacing(item)])) as T;
  }
  return value;
}

const frenchLinks: ServiceCardLink[] = [
  {
    href: "/fr/transfert-aeroport-nice",
    label: "Transfert aéroport de Nice",
    description: "Accueil aux arrivées à l'aéroport de Nice, et retour à l'aéroport pour votre vol.",
  },
  {
    href: "/fr/transfert-aeroport-nice-monaco",
    label: "Transfert aéroport Nice Monaco",
    description: "De l'aéroport de Nice à Monaco et Monte-Carlo, de porte à porte.",
  },
  {
    href: "/fr/transfert-aeroport-nice-cannes",
    label: "Transfert aéroport Nice Cannes",
    description: "De l'aéroport de Nice à Cannes, la Croisette et les hôtels.",
  },
];

const localLinks = {
  localLinksTitle: "Autres transferts depuis l'aéroport de Nice",
  localLinksDescription: "D'autres trajets depuis l'aéroport de Nice, chacun à prix fixe confirmé avant la réservation.",
  localLinks: frenchLinks,
};

export const frenchServicePages = frenchSpacing<Record<string, ServicePageConfig>>({
  "transfert-aeroport-nice": {
    slug: "transfert-aeroport-nice",
    path: "/fr/transfert-aeroport-nice",
    enPath: transferPages["nice-airport-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport de Nice | Chauffeur privé | Kokolimo",
      description: `Transfert privé depuis l'aéroport de Nice dès ${eur(E_CLASS.prices.nice.transfer)} à prix fixe : accueil en salle d'arrivée, aide aux bagages et chauffeur privé vers Nice, Monaco et Cannes.`,
      keywords: [
        "transfert aéroport Nice",
        "chauffeur privé aéroport Nice",
        "transfert privé aéroport Nice Côte d'Azur",
        "chauffeur aéroport Nice prix",
      ],
    },
    serviceLabel: "Transfert aéroport de Nice",
    heroTitle: "Transfert aéroport de Nice avec chauffeur privé",
    heroDescription: `Votre chauffeur privé vous attend dans le hall des arrivées de l'aéroport Nice Côte d'Azur et vous conduit en Mercedes à Nice, Monaco, Cannes ou partout sur la Côte d'Azur, à prix fixe dès ${eur(E_CLASS.prices.nice.transfer)}.`,
    heroImageSrc: transferPages["nice-airport-transfer"].heroImageSrc,
    heroImageAlt: "Chauffeur privé pour un transfert depuis l'aéroport de Nice",
    introTitle: "Du hall des arrivées jusqu'à votre porte",
    introDescription:
      "Votre chauffeur est dans le hall des arrivées quand vous atterrissez, prend vos bagages et vous conduit directement à votre hôtel, à votre villa ou au port, à un prix convenu avant le trajet.",
    panels: [
      {
        title: "Nous suivons votre vol",
        text: "Votre chauffeur suit le vol, s'adapte à une arrivée en avance ou en retard et vous attend dans le hall des arrivées du Terminal 1 ou 2 avec une pancarte à votre nom.",
        theme: "dark",
      },
      {
        title: "Partout sur la Côte d'Azur",
        text: "Depuis l'aéroport, nous allons à Nice, Monaco, Cannes, Antibes, Saint-Tropez, dans les villas privées, les ports et jusqu'aux yachts, et nous vous ramenons à l'aéroport pour votre vol retour.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe un transfert depuis l'aéroport de Nice",
      paragraphs: [
        `Dès que votre vol est réservé, envoyez-nous le numéro de vol, le nombre de passagers et de bagages, et l'adresse où vous allez. Nous confirmons la voiture et le **prix fixe** avant votre voyage : à partir de ${eur(E_CLASS.prices.nice.transfer)} pour Nice, ${eur(E_CLASS.prices.antibes.transfer)} pour Antibes, ${eur(E_CLASS.prices.cannes.transfer)} pour Cannes ou Monaco et ${eur(E_CLASS.prices["st-tropez"].transfer)} pour Saint-Tropez en Mercedes Classe E.`,
        "Le jour de votre arrivée, nous suivons votre vol. Votre chauffeur vous attend dans le hall des arrivées avec une pancarte à votre nom, vous aide avec les bagages et vous accompagne jusqu'à la voiture. **Une heure d'attente** est incluse à partir de l'heure de prise en charge prévue : une longue file au contrôle des passeports ou au tapis à bagages ne pose donc aucun problème.",
        `La Classe E, la Classe S et la Maybach accueillent jusqu'à ${E_CLASS.passengers} passagers ; le van Classe V en prend jusqu'à ${V_CLASS.passengers} avec leurs bagages, ce qui convient aux familles et aux groupes. Nous roulons jour et nuit, tous les jours de l'année : un vol tôt le matin ou tard le soir ne pose aucun problème.`,
        "Pour votre départ, nous venons vous chercher à votre adresse et vous déposons à votre terminal. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge ; au-delà, le prix total est dû.",
      ],
    },
    practicalTitle: "Prise en charge à l'aéroport de Nice, prix et conditions",
    practicalDescription:
      "Votre confirmation précise le terminal, la voiture et le prix fixe. Chaque arrivée comprend une heure d'attente à partir de l'heure de prise en charge indiquée dans la réservation.",
    practicalDetails: [
      {
        title: "Arrivée au Terminal 1",
        text: "Votre chauffeur suit le vol et vous accueille dans le hall des arrivées du Terminal 1 avec une pancarte à votre nom, puis s'occupe des bagages.",
      },
      {
        title: "Arrivée au Terminal 2",
        text: "Au Terminal 2, le rendez-vous est aussi dans le hall des arrivées. Le terminal et le numéro de vol sont vérifiés une dernière fois avant la prise en charge.",
      },
      {
        title: "Prix de départ",
        text: `Nice dès ${eur(E_CLASS.prices.nice.transfer)} en Classe E ; Cannes ou Monaco dès ${eur(E_CLASS.prices.cannes.transfer)} ; Saint-Tropez dès ${eur(E_CLASS.prices["st-tropez"].transfer)}. Classe V, Classe S et Maybach sont aussi disponibles, et le prix fixe final est confirmé avant la réservation.`,
      },
      {
        title: "Attente et annulation",
        text: "Une heure d'attente est incluse à partir de l'heure de prise en charge réservée. L'annulation est gratuite jusqu'à cinq jours avant cette date et cette heure ; à moins de cinq jours du départ, le prix total est dû.",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les arrivées à Nice",
    audienceDescription:
      "Pour les voyageurs qui atterrissent à Nice et veulent être accueillis, aidés avec leurs bagages et conduits jusqu'à leur porte.",
    audienceCards: [
      {
        title: "Vols internationaux",
        text: "Vols commerciaux et vols privés : votre chauffeur vous attend dans le hall des arrivées ou au terminal de l'aviation d'affaires.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône d'arrivée à l'aéroport",
      },
      {
        title: "Hôtels et villas",
        text: "Directement à votre hôtel ou à votre villa, bagages portés jusqu'à la porte.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône d'arrivée à l'hôtel",
      },
      {
        title: "Voyages d'affaires",
        text: "Un chauffeur ponctuel pour les arrivées d'affaires, les rendez-vous et les événements, qui vous attend aux arrivées dès l'atterrissage.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône de voyage d'affaires",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert depuis l'aéroport de Nice",
      description:
        "Envoyez-nous votre vol, le nombre de passagers et l'adresse : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Combien coûte un transfert privé depuis l'aéroport de Nice ?",
        answer: `Un transfert Kokolimo depuis l'aéroport de Nice coûte à partir de ${eur(E_CLASS.prices.nice.transfer)} pour Nice, ${eur(E_CLASS.prices.antibes.transfer)} pour Antibes, ${eur(E_CLASS.prices.cannes.transfer)} pour Cannes ou Monaco et ${eur(E_CLASS.prices["st-tropez"].transfer)} pour Saint-Tropez en Mercedes Classe E. Le prix est fixe et confirmé avant la réservation, avec une heure d'attente incluse.`,
      },
      {
        question: "Où mon chauffeur m'attend-il à l'aéroport de Nice ?",
        answer:
          "Dans le hall des arrivées de votre terminal, Terminal 1 ou Terminal 2, avec une pancarte à votre nom. Votre chauffeur vous aide avec les bagages et vous accompagne jusqu'à la voiture.",
      },
      {
        question: "Que se passe-t-il si mon vol a du retard ?",
        answer:
          "Nous suivons votre vol et adaptons la prise en charge à l'heure réelle d'atterrissage. Une heure d'attente est incluse à partir de l'heure de prise en charge de votre réservation ; prévenez-nous dès que possible en cas de gros retard.",
      },
      {
        question: "Quelles voitures utilisez-vous pour les transferts aéroport ?",
        answer: `Uniquement des Mercedes : la Classe E et la Classe S jusqu'à ${E_CLASS.passengers} passagers, le van Classe V jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages, et la Maybach jusqu'à ${MAYBACH.passengers} passagers.`,
      },
      {
        question: "Assurez-vous les vols tôt le matin ou tard le soir ?",
        answer:
          "Oui. Kokolimo roule 24 h/24, 7 j/7 : votre chauffeur est dans le hall des arrivées quelle que soit l'heure d'atterrissage.",
      },
      {
        question: "Quelles destinations desservez-vous depuis l'aéroport de Nice ?",
        answer:
          "Nice, Cannes, Antibes, Monaco, Menton, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat et Saint-Tropez, ainsi que Courchevel, Megève et Chamonix en hiver.",
      },
      {
        question: "Pouvez-vous me ramener à l'aéroport de Nice pour mon vol ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel, à votre villa ou au port et vous déposons à votre terminal. Beaucoup de clients réservent l'arrivée et le départ en même temps.",
      },
      {
        question: "Quelles sont les conditions d'annulation d'un transfert aéroport ?",
        answer:
          "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge réservées. En cas d'annulation moins de cinq jours avant, le prix total est dû.",
      },
    ],
  },

  "transfert-aeroport-nice-monaco": {
    slug: "transfert-aeroport-nice-monaco",
    path: "/fr/transfert-aeroport-nice-monaco",
    enPath: transferPages["monaco-airport-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Monaco | Chauffeur privé | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Monaco dès ${eur(E_CLASS.prices.monaco.transfer)} à prix fixe : accueil en salle d'arrivée et chauffeur privé jusqu'à Monte-Carlo ou Port Hercule.`,
      keywords: [
        "transfert aéroport Nice Monaco",
        "chauffeur privé Nice Monaco",
        "transfert aéroport Monaco",
        "aéroport de Nice à Monaco",
      ],
    },
    serviceLabel: "Transfert aéroport Nice Monaco",
    heroTitle: "Transfert de l'aéroport de Nice à Monaco",
    heroDescription: `Votre chauffeur privé vous accueille à l'aéroport de Nice et vous conduit à Monaco en 30 à 40 minutes environ, jusqu'à votre hôtel, Port Hercule ou la place du Casino, à prix fixe dès ${eur(E_CLASS.prices.monaco.transfer)}.`,
    heroImageSrc: transferPages["monaco-airport-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Monaco, une Mercedes noire sur le port",
    introTitle: "Direction la Principauté",
    introDescription:
      "Les tunnels, les sens uniques et le stationnement rare de Monaco compliquent une première arrivée. Votre chauffeur les connaît et vous conduit du terminal jusqu'à votre porte.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons votre vol, vous attendons dans le hall des arrivées avec une pancarte à votre nom, portons les bagages et vous conduisons directement à Monaco.",
        theme: "dark",
      },
      {
        title: "Dépose à votre porte",
        text: "Votre chauffeur vous dépose à votre hôtel, sur le port, au Casino ou à votre yacht à Port Hercule, sans que vous ayez à chercher votre chemin dans les tunnels ni une place pour vous garer.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe le transfert de l'aéroport de Nice à Monaco",
      paragraphs: [
        "Monaco n'a pas d'aéroport : un transfert aéroport pour Monaco part donc de Nice Côte d'Azur, à **30 à 40 minutes environ** par l'autoroute ou par la route du bord de mer, selon la circulation. Votre chauffeur vous accueille aux arrivées, au Terminal 1 ou 2, et vous dépose à la porte de votre hôtel ou de votre résidence à Monte-Carlo, sur le quai de Port Hercule ou sur la place du Casino.",
        `Un aller simple coûte à partir de ${routePrices("monaco")}. Le prix est fixé à la réservation, nous suivons votre vol et une heure d'attente est incluse à partir de l'heure de prise en charge. Le van Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages.`,
        "Pendant le Grand Prix en mai et le Monaco Yacht Show en septembre, des routes ferment et la Principauté se remplit. Nous prévoyons l'itinéraire et le point de dépose en fonction des fermetures. Si vous prenez l'hélicoptère depuis l'aéroport de Nice, votre chauffeur vous attend à l'héliport de Monaco, à Fontvieille. Pour votre départ, nous venons vous chercher à Monaco et vous ramenons à votre terminal.",
      ],
    },
    audienceTitle: "Idéal pour",
    audienceAccent: "les arrivées à Monaco",
    audienceDescription:
      "Pensé pour les arrivées à Monaco : hôtels, résidences, rendez-vous d'affaires, événements et yachts.",
    audienceCards: [
      {
        title: "Grand Prix et événements",
        text: "Un transfert fiable pour le Grand Prix, le Yacht Show et le calendrier monégasque, organisé en fonction des fermetures et de la foule.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des événements à Monaco",
      },
      {
        title: "Hôtels et Casino",
        text: "Arrivée directe à l'Hôtel de Paris, à l'Hermitage et sur la place du Casino, bagages pris en charge, sans attente.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels de Monaco",
      },
      {
        title: "Affaires et yachts",
        text: "Un transfert discret et ponctuel pour les voyages d'affaires et pour les invités qui rejoignent un yacht à Port Hercule.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des voyages d'affaires à Monaco",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert de l'aéroport de Nice à Monaco",
      description:
        "Envoyez-nous votre vol et votre adresse à Monaco : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Monaco ?",
        answer: `À partir de ${routePrices("monaco")}, en aller simple. Le prix est fixe et confirmé avant la réservation, sans compteur.`,
      },
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Monaco ?",
        answer:
          "Environ 30 à 40 minutes par la route, par l'autoroute ou par le bord de mer selon la circulation. Comptez plus pendant le Grand Prix et les autres grands événements.",
      },
      {
        question: "Monaco a-t-il un aéroport ?",
        answer:
          "Non. L'aéroport le plus proche est Nice Côte d'Azur, à 30 à 40 minutes environ par la route. Un hélicoptère relie aussi l'aéroport de Nice à l'héliport de Monaco en sept minutes environ ; nous vous conduisons du terminal à l'hélicoptère, puis de l'héliport à votre adresse.",
      },
      {
        question: "Où mon chauffeur m'attend-il à l'aéroport de Nice ?",
        answer:
          "Dans le hall des arrivées de votre terminal, Terminal 1 ou 2, avec une pancarte à votre nom. Votre chauffeur prend vos bagages et vous accompagne jusqu'à la voiture.",
      },
      {
        question: "Pouvez-vous me conduire jusqu'à un yacht à Port Hercule ?",
        answer:
          "Oui. Nous déposons les invités directement sur le quai de Port Hercule, en nous coordonnant avec l'équipage pour l'accès et l'horaire si besoin.",
      },
      {
        question: "Puis-je réserver un transfert de nuit de l'aéroport de Nice à Monte-Carlo ?",
        answer:
          "Oui. Kokolimo roule 24 h/24, 7 j/7 : nous accueillons les vols tôt le matin ou tard le soir et vous conduisons à Monte-Carlo.",
      },
      {
        question: "Faites-vous le trajet retour de Monaco à l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel ou à votre résidence à Monaco et vous déposons à votre terminal. Beaucoup de clients réservent l'arrivée et le départ en même temps.",
      },
      {
        question: "Quelles sont les conditions d'annulation ?",
        answer:
          "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge réservées ; au-delà, le prix total est dû.",
      },
    ],
  },

  "transfert-aeroport-nice-cannes": {
    slug: "transfert-aeroport-nice-cannes",
    path: "/fr/transfert-aeroport-nice-cannes",
    enPath: transferPages["cannes-airport-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Cannes | Chauffeur privé | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Cannes dès ${eur(E_CLASS.prices.cannes.transfer)} à prix fixe : accueil en salle d'arrivée et chauffeur privé jusqu'à la Croisette ou votre hôtel.`,
      keywords: [
        "transfert aéroport Nice Cannes",
        "chauffeur privé Nice Cannes",
        "transfert aéroport Cannes",
        "aéroport de Nice à Cannes",
      ],
    },
    serviceLabel: "Transfert aéroport Nice Cannes",
    heroTitle: "Transfert de l'aéroport de Nice à Cannes",
    heroDescription: `Votre chauffeur privé vous accueille à l'aéroport de Nice et vous conduit à Cannes en 30 minutes environ, jusqu'à la Croisette, votre hôtel ou le Palais des Festivals, à prix fixe dès ${eur(E_CLASS.prices.cannes.transfer)}.`,
    heroImageSrc: transferPages["cannes-airport-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Cannes, une Mercedes noire sur la Croisette",
    introTitle: "Arrivée sur la Croisette",
    introDescription:
      "Un transfert aéroport pour Cannes part de Nice Côte d'Azur, à une trentaine de minutes à l'est de la ville. Votre chauffeur vous accueille à votre vol et vous dépose en bord de mer, sans file d'attente aux taxis ni foule des festivals.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons le vol, vous accueillons aux arrivées avec une pancarte à votre nom, prenons les bagages et partons vers l'ouest, direction Cannes.",
        theme: "dark",
      },
      {
        title: "Prêt pour les festivals",
        text: "Pendant le Festival de Cannes, le Cannes Yachting Festival et les Cannes Lions, un chauffeur qui connaît les fermetures de routes vous évite les détours.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe le transfert de l'aéroport de Nice à Cannes",
      paragraphs: [
        "Nice Côte d'Azur est l'aéroport principal de Cannes, à **une trentaine de minutes** quand la route est dégagée. Votre chauffeur vous accueille dans le hall des arrivées, prend vos bagages et vous conduit à votre hôtel sur la Croisette, au Palais des Festivals, au Vieux-Port ou à n'importe quelle adresse en ville.",
        `Le trajet depuis l'aéroport coûte à partir de ${routePrices("cannes")}, et le prix est convenu avant la réservation. Si votre vol atterrit en retard, votre chauffeur attend : une heure est incluse à partir de l'heure de prise en charge prévue.`,
        "Cannes vit au rythme de ses événements : le Festival de Cannes en mai, les Cannes Lions en juin et le Cannes Yachting Festival en septembre. Les routes autour de la Croisette ferment et la circulation se densifie, alors nous prévoyons la dépose en fonction des fermetures. Pour votre départ, nous venons vous chercher à Cannes et vous ramenons à l'aéroport de Nice.",
      ],
    },
    audienceTitle: "Idéal pour",
    audienceAccent: "les arrivées à Cannes",
    audienceDescription:
      "Pensé pour les arrivées à Cannes : les hôtels de la Croisette, les festivals et les yachts du Vieux-Port.",
    audienceCards: [
      {
        title: "Festivals et événements",
        text: "Des arrivées fiables pour le Festival de Cannes, le Yachting Festival et les Cannes Lions, organisées en fonction de la foule et des fermetures.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des festivals de Cannes",
      },
      {
        title: "Hôtels de la Croisette",
        text: "Transfert direct au Carlton, au Martinez et dans les hôtels de la Croisette, bagages pris en charge, sans attente.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels de Cannes",
      },
      {
        title: "Yachts et îles",
        text: "Un transfert simple pour les invités qui rejoignent un yacht au Vieux-Port ou partent vers les îles de Lérins.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des yachts de Cannes",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert de l'aéroport de Nice à Cannes",
      description:
        "Envoyez-nous votre vol et votre adresse à Cannes : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: "/contact-me",
    },
    faq: [
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Cannes ?",
        answer: `À partir de ${routePrices("cannes")}, en aller simple. Le prix est fixe et confirmé avant la réservation, sans compteur.`,
      },
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Cannes ?",
        answer:
          "Une trentaine de minutes par la route quand elle est dégagée, un peu plus pendant le Festival de Cannes et les autres grands événements.",
      },
      {
        question: "Un chauffeur privé vaut-il la peine pendant les festivals de Cannes ?",
        answer:
          "Oui. Avec les fermetures de routes et la foule autour de la Croisette, un chauffeur qui connaît les déviations vous amène à l'heure à votre hôtel ou au Palais.",
      },
      {
        question: "Pouvez-vous me conduire à un hôtel de la Croisette ?",
        answer:
          "Oui. Nous vous conduisons directement au Carlton, au Martinez et aux autres hôtels de la Croisette, bagages pris en charge.",
      },
      {
        question: "Puis-je réserver un transfert de nuit de l'aéroport de Nice à Cannes ?",
        answer: "Oui. Kokolimo roule 24 h/24, 7 j/7, y compris pour les vols tôt le matin ou tard le soir.",
      },
      {
        question: "Faites-vous le trajet retour de Cannes à l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel ou à votre adresse à Cannes et vous déposons à votre terminal.",
      },
      {
        question: "Puis-je annuler un transfert pour Cannes ?",
        answer:
          "Oui, gratuitement jusqu'à cinq jours avant la date et l'heure de prise en charge réservées. Si vous annulez plus tard, le prix total est dû.",
      },
    ],
  },
});

const frenchPathByEnglishPath = new Map(Object.values(frenchServicePages).map(page => [page.enPath!, page.path]));

/** The French version of an English page, if it has one. */
export const frenchPathFor = (englishPath: string) => frenchPathByEnglishPath.get(englishPath);
