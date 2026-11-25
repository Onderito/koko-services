// The French versions of the five service hubs (private transfers, hourly chauffeur, private tours, yacht transfers,
// event transport), served at /fr/<slug> with the service page template. Each page names its English original (enPath)
// and uses its photos. Prices in the texts are read from the price list through the French helpers, and every link goes
// through frLink, so it points to the French twin of a page once that page is live.

import {
  chauffeurToursPage,
  eventsPage,
  hourlyChauffeurPage,
  transfersPage,
  yachtTransfersPage,
  type ServiceCardLink,
  type ServicePageConfig,
} from "../service-pages";
import { eur, E_CLASS, V_CLASS, S_CLASS, MAYBACH, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

// Starting prices quoted in the texts: a one-way transfer from Nice Airport to a town of the price list in a Mercedes
// Classe E, and a car's hourly and full-day (eight hours) rates. Hourly hire costs the same in every area, so those
// rates are read from the Nice column, as on the hourly and tour pages.
const fromAirport = (town: string) => eur(E_CLASS.prices[town].transfer);
const hourly = (car: typeof E_CLASS) => eur(car.prices.nice.hourly);
const fullDay = (car: typeof E_CLASS) => eur(car.prices.nice.fullDay);

const transferLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/transfers/nice-airport-transfer"),
    label: "Transfert aéroport de Nice",
    description: "Accueil aux arrivées à l'aéroport de Nice, et retour à l'aéroport pour votre vol.",
  },
  {
    href: frLink("/our-services/transfers/monaco-airport-transfer"),
    label: "Transfert aéroport Nice Monaco",
    description: "De l'aéroport de Nice à Monaco et Monte-Carlo, de porte à porte.",
  },
  {
    href: frLink("/our-services/transfers/cannes-airport-transfer"),
    label: "Transfert aéroport Nice Cannes",
    description: "De l'aéroport de Nice à Cannes, la Croisette et les hôtels.",
  },
  {
    href: frLink("/our-services/transfers/saint-tropez-transfer"),
    label: "Transfert Saint-Tropez",
    description: "De l'aéroport de Nice à Saint-Tropez, par la route ou en bateau.",
  },
  {
    href: frLink("/our-services/transfers/antibes-transfer"),
    label: "Transfert Antibes",
    description: "De l'aéroport de Nice à Antibes, à Juan-les-Pins et au Cap d'Antibes.",
  },
  {
    href: frLink("/our-services/transfers/saint-jean-cap-ferrat-transfer"),
    label: "Transfert Saint-Jean-Cap-Ferrat",
    description: "De l'aéroport de Nice aux villas de la presqu'île du Cap-Ferrat.",
  },
  {
    href: frLink("/our-services/transfers/eze-transfer"),
    label: "Transfert Èze",
    description: "De l'aéroport de Nice au village perché d'Èze, sur la corniche.",
  },
  {
    href: frLink("/our-services/transfers/villefranche-transfer"),
    label: "Transfert Villefranche-sur-Mer",
    description: "De l'aéroport de Nice à Villefranche-sur-Mer et à sa baie profonde et abritée.",
  },
  {
    href: frLink("/our-services/transfers/menton-transfer"),
    label: "Transfert Menton",
    description: "De l'aéroport de Nice à Menton, à la frontière italienne, à l'est de Monaco.",
  },
  {
    href: frLink("/our-services/transfers/long-distance-transfer"),
    label: "Transfert longue distance",
    description: "Des trajets privés confortables au-delà du cœur de la Côte d'Azur.",
  },
];

const hourlyCityLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/hourly-chauffeur/nice"),
    label: "Nice",
    description: "Hôtels de luxe, shopping, rendez-vous d'affaires et chauffeur à disposition dans tout Nice.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/cannes"),
    label: "Cannes",
    description: "La Croisette, les hôtels de luxe, les événements, le shopping et un chauffeur privé dans tout Cannes.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/monaco"),
    label: "Monaco",
    description: "Voyages d'affaires, transferts vers les yachts, hôtels de luxe et chauffeur dédié à Monaco.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/saint-tropez"),
    label: "Saint-Tropez",
    description: "Beach clubs, villas privées, restaurants gastronomiques et chauffeur à disposition à Saint-Tropez.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/megeve"),
    label: "Megève",
    description:
      "Hôtels de luxe, chalets privés, shopping, restaurants gastronomiques et chauffeur à disposition dans tout Megève.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/courchevel"),
    label: "Courchevel",
    description: "Hôtels cinq étoiles, chalets privés, stations de ski et chauffeur haut de gamme dans tout Courchevel.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/chamonix"),
    label: "Chamonix",
    description: "Aventures en montagne, hébergements de luxe, vacances au ski et chauffeur à disposition à Chamonix.",
  },
];

const tourCityLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/private-tours/nice"),
    label: "Nice",
    description: "Vieille ville, points de vue sur la côte, marchés et escapades aux alentours.",
  },
  {
    href: frLink("/our-services/private-tours/cannes"),
    label: "Cannes",
    description: "Balades sur les boulevards, haltes shopping et élégantes routes côtières.",
  },
  {
    href: frLink("/our-services/private-tours/monaco"),
    label: "Monaco",
    description: "Sites prestigieux, routes panoramiques et itinéraires raffinés à la journée.",
  },
  {
    href: frLink("/our-services/private-tours/saint-tropez"),
    label: "Saint-Tropez",
    description: "Ruelles du village, plages, arrivées panoramiques et escapades chic à la journée.",
  },
  {
    href: frLink("/our-services/private-tours/megeve"),
    label: "Megève",
    description:
      "Hôtels de luxe, villages alpins, routes de montagne panoramiques, restaurants gastronomiques et excursions privées sur mesure.",
  },
  {
    href: frLink("/our-services/private-tours/courchevel"),
    label: "Courchevel",
    description: "Stations prestigieuses, chalets de luxe, panoramas alpins et excursions privées personnalisées.",
  },
  {
    href: frLink("/our-services/private-tours/chamonix"),
    label: "Chamonix",
    description:
      "Paysages du Mont-Blanc, villages de montagne, activités de plein air et excursions privées sur mesure dans les Alpes.",
  },
];

const yachtTransferLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/yacht-transfers/monaco"),
    label: "Transfert yacht Monaco",
    description: "Transferts vers Port Hercule et le port des superyachts de Monaco.",
  },
  {
    href: frLink("/our-services/yacht-transfers/cannes"),
    label: "Transfert yacht Cannes",
    description: "Transferts vers le Vieux-Port et Port Pierre Canto, à Cannes.",
  },
  {
    href: frLink("/our-services/yacht-transfers/saint-tropez"),
    label: "Transfert yacht Saint-Tropez",
    description: "Transferts vers le vieux port de Saint-Tropez, par la route ou en bateau.",
  },
  {
    href: frLink("/our-services/yacht-transfers/antibes"),
    label: "Transfert yacht Port Vauban",
    description: "Transferts vers Port Vauban, la plus grande marina d'Europe.",
  },
  {
    href: frLink("/our-services/yacht-transfers/nice-airport"),
    label: "De l'aéroport de Nice au yacht",
    description: "Accueil à l'aéroport de Nice et trajet direct jusqu'à votre yacht.",
  },
  {
    href: frLink("/our-services/yacht-transfers/crew-transportation"),
    label: "Transport d'équipage",
    description: "Relèves d'équipage, avitaillement et déplacements des invités pour les superyachts.",
  },
];

const eventLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/events/monaco-grand-prix"),
    label: "Grand Prix de Monaco",
    description: "Transport avec chauffeur pour le Grand Prix de Formule 1, chaque année en mai.",
  },
  {
    href: frLink("/our-services/events/cannes-film-festival"),
    label: "Festival de Cannes",
    description: "Arrivées sur le tapis rouge et chauffeur privé pendant tout le festival.",
  },
  {
    href: frLink("/our-services/events/monaco-yacht-show"),
    label: "Monaco Yacht Show",
    description: "Transferts et chauffeurs disponibles pour le salon de septembre.",
  },
];

export const hubPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "transferts-prives": {
    slug: "transferts-prives",
    path: "/fr/transferts-prives",
    enPath: transfersPage.path,
    locale: "fr",
    metadata: {
      title: "Transfert privé Côte d'Azur | Chauffeur privé | Kokolimo",
      description: `Transfert privé avec chauffeur sur la Côte d'Azur : accueil à l'aéroport de Nice et prix fixe dès ${fromAirport("nice")} pour Nice, ${fromAirport("cannes")} pour Cannes ou Monaco.`,
      keywords: [
        "transfert privé Côte d'Azur",
        "transfert aéroport Nice",
        "transfert avec chauffeur Monaco",
        "transfert privé Cannes",
        "chauffeur privé longue distance Côte d'Azur",
      ],
    },
    serviceLabel: "Transferts aéroport",
    heroTitle: "Transferts aéroport privés sur la Côte d'Azur",
    heroDescription: `Des transferts privés avec chauffeur sur toute la Côte d'Azur, pour vos arrivées à l'aéroport de Nice, vos prises en charge à l'hôtel, vos événements et vos longs trajets, en Mercedes et à prix fixe : dès ${fromAirport("nice")} pour Nice, ${fromAirport("cannes")} pour Cannes ou Monaco.`,
    heroImageSrc: transfersPage.heroImageSrc,
    heroImageAlt: "Arrivée d'un transfert avec chauffeur privé sur la Côte d'Azur",
    introTitle: "L'art du transfert",
    introDescription:
      "Un transfert doit être calme, maîtrisé et parfaitement minuté, de la première à la dernière minute. Votre chauffeur suit votre vol, vous attend dans le hall des arrivées avec une pancarte à votre nom et vous conduit directement à destination.",
    panels: [
      {
        title: "Notre engagement",
        text: "Nous coordonnons les détails qui comptent : l'horaire du vol, les bagages, une prise en charge ponctuelle et un trajet confortable dans un véhicule haut de gamme, avec un chauffeur professionnel. Une heure d'attente est incluse à l'aéroport.",
        theme: "dark",
      },
      {
        title: "Votre arrivée",
        text: `De l'aéroport de Nice jusqu'à votre hôtel, votre villa ou le port, à prix fixe en Mercedes Classe E : Nice dès ${fromAirport("nice")}, Antibes dès ${fromAirport("antibes")}, Cannes ou Monaco dès ${fromAirport("cannes")}, Saint-Tropez dès ${fromAirport("st-tropez")}. Les trajets plus lointains ont aussi un prix fixé avant la réservation.`,
        theme: "light",
      },
    ],
    audienceTitle: "Pensé pour",
    audienceAccent: "des déplacements précis",
    audienceDescription:
      "Des courtes liaisons avec l'aéroport aux trajets d'une ville à l'autre, nos transferts s'adaptent au rythme et aux attentes d'un voyage haut de gamme.",
    audienceCards: [
      {
        title: "Clients aéroport",
        text: "Accueil dans le hall des arrivées avec une pancarte à votre nom, suivi du vol et une heure d'attente incluse, de l'avion jusqu'à la voiture.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de transfert aéroport",
      },
      {
        title: "Hôtels et événements",
        text: "Un transfert soigné et fiable pour l'arrivée à l'hôtel, un dîner, un congrès, un mariage ou une occasion particulière.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône de transfert hôtelier",
      },
      {
        title: "Longs trajets",
        text: "Le confort du porte-à-porte pour aller au-delà de la côte, quand l'horaire, la discrétion et la place pour les bagages comptent.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône de transfert longue distance",
      },
    ],
    localLinksTitle: "Découvrez nos transferts",
    localLinksDescription: "Choisissez le transfert qui correspond à votre trajet et à votre destination.",
    localLinks: transferLinksFr,
    cta: {
      title: "Prêt à réserver votre transfert ?",
      description:
        "Indiquez-nous votre trajet, vos horaires et le nombre de passagers : nous confirmons la voiture et le prix de votre transfert avant la réservation.",
      buttonText: "Demander un transfert",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Que comprend votre service de transfert privé ?",
        answer:
          "Un transfert privé Kokolimo comprend un chauffeur professionnel qui suit votre vol, l'accueil dans le hall des arrivées avec une pancarte à votre nom, une heure d'attente, l'aide avec les bagages et un trajet direct jusqu'à votre destination, à un prix fixe confirmé avant la réservation.",
      },
      {
        question: "Assurez-vous les transferts depuis l'aéroport de Nice ?",
        answer:
          "Oui. Nous assurons des transferts privés depuis l'aéroport Nice Côte d'Azur vers Nice, Antibes (25 minutes environ), Cannes (une trentaine de minutes), Monaco (30 à 40 minutes), Saint-Tropez (une heure et demie à deux heures) et toute la Côte d'Azur, 24 h/24 et 7 j/7. Votre chauffeur vous attend dans le hall des arrivées du Terminal 1 ou 2.",
      },
      {
        question: "Puis-je réserver un transfert à l'avance ?",
        answer:
          "Oui, et nous vous le conseillons : réserver à l'avance garantit la disponibilité du véhicule, surtout en haute saison et pendant les grands événements. Envoyez-nous votre vol, le nombre de passagers et l'adresse par le site ou par téléphone : nous confirmons la voiture et le prix avant votre voyage.",
      },
      {
        question: "Quel temps d'attente est inclus à l'arrivée ?",
        answer:
          "Une heure d'attente est incluse pour chaque arrivée, à compter de l'heure de prise en charge indiquée dans votre réservation.",
      },
      {
        question: "Quelles sont vos conditions d'annulation ?",
        answer:
          "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge réservées. En cas d'annulation moins de cinq jours avant le départ, le prix total est dû.",
      },
      {
        question: "Vos prix de transfert sont-ils fixes ?",
        answer: `Oui. Le prix du transfert est convenu avant le trajet, sans frais cachés ; il dépend du trajet, du véhicule choisi et des services demandés. Depuis l'aéroport de Nice, un transfert privé coûte à partir de ${fromAirport("nice")} pour Nice, ${fromAirport("antibes")} pour Antibes, ${fromAirport("cannes")} pour Cannes ou Monaco et ${fromAirport("st-tropez")} pour Saint-Tropez en Mercedes Classe E.`,
      },
      {
        question: "Quels véhicules proposez-vous pour les transferts ?",
        answer: `Nous proposons des berlines de luxe et des vans haut de gamme, tous des Mercedes : la Classe E, la Classe S et la Maybach jusqu'à ${E_CLASS.passengers} passagers, et le van Classe V jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages. Les plus demandés sont la Classe S et la Classe V, et nous vous conseillons le meilleur choix selon votre trajet et vos passagers.`,
      },
      {
        question: "Proposez-vous des transferts longue distance ?",
        answer:
          "Oui. Nous assurons régulièrement des transferts entre aéroports, stations, hôtels et destinations de toute la Côte d'Azur et des Alpes françaises. Le transfert longue distance convient aux clients qui préfèrent un trajet privé et confortable par la route plutôt qu'une suite de correspondances.",
      },
    ],
  },

  "chauffeur-prive-a-l-heure": {
    slug: "chauffeur-prive-a-l-heure",
    path: "/fr/chauffeur-prive-a-l-heure",
    enPath: hourlyChauffeurPage.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure sur la Côte d'Azur | Kokolimo",
      description: `Chauffeur privé à l'heure sur la Côte d'Azur, dès ${hourly(E_CLASS)} de l'heure ou ${fullDay(E_CLASS)} la journée : une Mercedes à votre disposition à Nice, Cannes ou Monaco.`,
      keywords: [
        "chauffeur privé à l'heure Côte d'Azur",
        "chauffeur privé à l'heure Nice",
        "chauffeur à disposition Monaco",
        "chauffeur à disposition Cannes",
        "chauffeur privé à l'heure Saint-Tropez",
      ],
    },
    serviceLabel: "Chauffeur privé à l'heure",
    heroTitle: "Chauffeur privé à l'heure pour des journées à la carte sur la Côte d'Azur",
    heroDescription: `Un chauffeur privé et une Mercedes à votre disposition, à l'heure ou à la journée, pour vos rendez-vous d'affaires, votre shopping, vos déjeuners et vos programmes à plusieurs étapes sur la Côte d'Azur : dès ${hourly(E_CLASS)} de l'heure ou ${fullDay(E_CLASS)} la journée en Classe E.`,
    heroImageSrc: hourlyChauffeurPage.heroImageSrc,
    heroImageAlt: "Chauffeur privé à l'heure à Monaco et sur la Côte d'Azur",
    introTitle: "L'art du chauffeur privé à l'heure",
    introDescription:
      "La mise à disposition d'un chauffeur vous donne un cadre sans rigidité : une voiture et une journée organisée selon vos horaires, dès quatre heures de réservation, avec 20 kilomètres inclus par heure.",
    panels: [
      {
        title: "Notre engagement",
        text: "Nous assurons un service discret et ponctuel, toujours calé sur votre agenda, que la journée comprenne des rendez-vous, du shopping, des déjeuners ou des changements de dernière minute.",
        theme: "dark",
      },
      {
        title: "Votre expérience",
        text: `Votre chauffeur reste disponible entre deux arrêts : la journée s'enchaîne, en privé et sans perte de temps, au lieu d'être morcelée en réservations séparées. À la journée, huit heures et 160 kilomètres sont inclus, dès ${fullDay(E_CLASS)} en Classe E.`,
        theme: "light",
      },
    ],
    audienceTitle: "Conçu pour",
    audienceAccent: "votre emploi du temps",
    audienceDescription:
      "Réserver un chauffeur à l'heure, ou louer une voiture avec chauffeur à la journée, est la meilleure formule quand votre programme compte plusieurs moments, des horaires qui bougent et aucune place pour les tracas de transport.",
    audienceCards: [
      {
        title: "Journées d'affaires",
        text: "Passez des bureaux aux hôtels, aux déjeuners et aux rendez-vous en gardant une journée ponctuelle et sereine.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône de journée d'affaires",
      },
      {
        title: "Loisirs et shopping",
        text: "Shopping, rendez-vous bien-être, déjeuners en bord de mer et retours à l'hôtel, avec un seul véhicule qui vous attend toute la journée.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône de programme loisirs",
      },
      {
        title: "Événements et soirées",
        text: "Un seul chauffeur pour l'arrivée, l'attente et le retour, au lieu de réserver un transport à chaque étape.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des événements",
      },
    ],
    faq: [
      {
        question: "Comment fonctionne un chauffeur privé à l'heure ?",
        answer:
          "C'est une location de voiture avec chauffeur, à l'heure ou à la journée : un chauffeur et un véhicule vous sont réservés pour une durée définie et restent à votre disposition pendant toute la réservation. Vous pouvez faire plusieurs arrêts, aller à vos rendez-vous, faire du shopping ou changer de programme sans réserver de transferts séparés. Vous nous indiquez la ville, les horaires et les arrêts prévus, par le site ou par téléphone, et nous confirmons le prix avant la réservation.",
      },
      {
        question: "Quelle est la durée minimale de réservation ?",
        answer:
          "La durée minimale de réservation est de quatre heures. Chaque heure réservée comprend 20 kilomètres, soit 80 kilomètres inclus avec la réservation minimale de quatre heures.",
      },
      {
        question: "Combien de kilomètres sont inclus dans une réservation à l'heure ?",
        answer:
          "Chaque heure réservée comprend 20 kilomètres. Par exemple, une réservation de quatre heures comprend 80 kilomètres et une réservation de huit heures 160 kilomètres. Toute distance supplémentaire est confirmée dans votre devis avant la réservation.",
      },
      {
        question: "Quelles sont les conditions d'annulation d'un chauffeur à l'heure ?",
        answer:
          "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge réservées. En cas d'annulation moins de cinq jours avant le départ, le prix total est dû.",
      },
      {
        question: "Le chauffeur peut-il attendre entre les réunions, au restaurant ou pendant vos rendez-vous ?",
        answer:
          "Oui. Votre chauffeur reste à votre disposition pendant toute la réservation et assure vos trajets sans accroc entre réunions, hôtels, restaurants, boutiques et événements, partout sur la Côte d'Azur.",
      },
      {
        question: "Quelles destinations couvre le service de chauffeur à l'heure ?",
        answer: `Notre service de chauffeur privé à l'heure couvre toute la Côte d'Azur, dont Nice, Cannes, Monaco, Saint-Tropez, Antibes et leurs environs, et en hiver Megève, Courchevel et Chamonix, au même prix horaire. L'itinéraire reste entièrement libre pendant la réservation, et votre chauffeur peut aussi vous accueillir à l'aéroport de Nice. Pour un simple trajet de l'aéroport à votre adresse, un transfert privé commence à ${fromAirport("nice")} pour Nice en Classe E.`,
      },
      {
        question: "Quels véhicules peut-on réserver à l'heure ?",
        answer: `Quatre Mercedes, selon le nombre de passagers : la Classe E dès ${hourly(E_CLASS)} de l'heure, la Classe S dès ${hourly(S_CLASS)} et la Maybach dès ${hourly(MAYBACH)}, jusqu'à ${E_CLASS.passengers} passagers, et le van Classe V dès ${hourly(V_CLASS)} de l'heure, jusqu'à ${V_CLASS.passengers} passagers. À la journée (huit heures), comptez à partir de ${fullDay(E_CLASS)} en Classe E, ${fullDay(V_CLASS)} en Classe V, ${fullDay(S_CLASS)} en Classe S et ${fullDay(MAYBACH)} en Maybach.`,
      },
      {
        question: "Un chauffeur à l'heure convient-il aux voyages d'affaires et aux événements ?",
        answer:
          "Oui, tout à fait. Le chauffeur à l'heure est idéal pour les rendez-vous d'affaires, les roadshows, les congrès, les journées shopping, les locations de yacht, les mariages et les grands événements de la Côte d'Azur, quand la souplesse et la ponctualité sont essentielles.",
      },
    ],
    localLinksTitle: "Choisissez votre destination",
    localLinksDescription: "Comparez les formules de chauffeur à l'heure dans chaque destination.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur à disposition ?",
      description:
        "Indiquez-nous la ville, les horaires et les arrêts prévus : nous vous conseillons la formule de chauffeur à l'heure adaptée à votre journée et confirmons le prix avant la réservation.",
      buttonText: "Réserver un chauffeur à l'heure",
      buttonHref: frLink("/contact-me"),
    },
  },

  "excursions-privees": {
    slug: "excursions-privees",
    path: "/fr/excursions-privees",
    enPath: chauffeurToursPage.path,
    locale: "fr",
    metadata: {
      title: "Excursions privées Côte d'Azur | Chauffeur privé | Kokolimo",
      description: `Excursion privée avec chauffeur sur la Côte d'Azur, dès ${hourly(E_CLASS)} de l'heure ou ${fullDay(E_CLASS)} la journée : Monaco, Èze, Nice, Cannes ou Saint-Tropez, à votre rythme.`,
      keywords: [
        "excursion avec chauffeur Côte d'Azur",
        "excursion privée Nice avec chauffeur",
        "excursion avec chauffeur Monaco",
        "excursion privée Cannes chauffeur",
        "journée à Saint-Tropez avec chauffeur",
      ],
    },
    serviceLabel: "Excursions privées",
    heroTitle: "Excursions privées pour une découverte raffinée de la Côte d'Azur",
    heroDescription: `Des excursions privées avec chauffeur sur la Côte d'Azur, pour les voyageurs qui veulent de belles routes, des haltes élégantes et un itinéraire souple sans s'occuper de l'organisation : dès ${hourly(E_CLASS)} de l'heure ou ${fullDay(E_CLASS)} la journée en Mercedes Classe E.`,
    heroImageSrc: chauffeurToursPage.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur sur la Côte d'Azur",
    introTitle: "L'art de l'excursion avec chauffeur",
    introDescription:
      "Une excursion avec chauffeur doit être soignée et sans effort, avec le bon rythme, les bons arrêts et un véhicule haut de gamme toute la journée. Vous choisissez les étapes, les horaires et la durée ; votre chauffeur vous prend à votre hôtel, à votre villa, à votre yacht ou à l'aéroport de Nice et reste avec vous jusqu'au retour.",
    panels: [
      {
        title: "Notre engagement",
        text: "Nous construisons l'itinéraire autour de ce que vous voulez voir, en conciliant belles routes, horaires, confort et service soigné de porte à porte.",
        theme: "dark",
      },
      {
        title: "Votre expérience",
        text: "Monaco, Èze, Nice, Saint-Paul-de-Vence, Antibes, Cannes ou Saint-Tropez : des vieilles villes et des routes côtières aux beach clubs, aux villages et aux points de vue, la journée reste souple sans perdre son fil.",
        theme: "light",
      },
    ],
    audienceTitle: "Imaginé pour",
    audienceAccent: "découvrir la Côte d'Azur",
    audienceDescription:
      "Ce service convient surtout aux voyageurs qui veulent vivre une destination, pas seulement faire un trajet d'un point à un autre.",
    audienceCards: [
      {
        title: "Première visite",
        text: "Découvrez l'essentiel avec un itinéraire fluide, un rythme élégant et un regard local, sans avoir à organiser la journée vous-même.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône d'excursion pour les visiteurs",
      },
      {
        title: "Culture et paysages",
        text: "Points de vue, vieilles villes, musées, villages d'artisans et routes côtières réunis dans un seul itinéraire soigné.",
        icon: "/assets/icons/services/museum.webp",
        iconAlt: "Icône d'excursion culturelle",
      },
      {
        title: "Couples et petits groupes",
        text: "Une journée confortable dans un véhicule haut de gamme, avec un programme souple pensé pour les moments partagés et une logistique simple.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône d'excursion en groupe",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription: "Choisissez une destination pour découvrir ses excursions privées.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Organisez votre excursion avec chauffeur",
      description:
        "Dites-nous, par le site ou par téléphone, quelle destination vous intéresse : nous préparons votre excursion privée selon votre rythme, vos envies et votre lieu de prise en charge, et confirmons le prix avant la réservation.",
      buttonText: "Organiser mon excursion",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Qu'est-ce qu'une excursion privée avec Kokolimo ?",
        answer:
          `Une excursion privée avec Kokolimo est une visite de la Côte d'Azur entièrement personnalisée, avec un chauffeur dédié et un véhicule de luxe. Vous découvrez la région à votre rythme, en toute liberté pour les arrêts, les horaires et l'itinéraire. Elle se réserve à l'heure, dès ${hourly(E_CLASS)} en Mercedes Classe E, ou à la journée, dès ${fullDay(E_CLASS)}, à un prix confirmé avant la réservation.`,
      },
      {
        question: "Puis-je personnaliser l'itinéraire de mon excursion privée ?",
        answer:
          "Oui. Chaque excursion privée est entièrement personnalisable : vous choisissez les destinations, les horaires et les arrêts, qu'il s'agisse de villages côtiers, d'hôtels de luxe, de points de vue, de quartiers commerçants ou de restaurants de la Côte d'Azur.",
      },
      {
        question: "Quelles destinations peut-on inclure dans une excursion privée ?",
        answer:
          "Les destinations les plus demandées sont Nice, Cannes, Monaco, Èze, Saint-Paul-de-Vence, Antibes, Saint-Tropez et les villages pittoresques de la Côte d'Azur. Les itinéraires plus longs peuvent aussi inclure la Riviera italienne, comme Vintimille ou San Remo. En hiver, nous proposons aussi des excursions privées à Megève, Courchevel et Chamonix.",
      },
      {
        question: "Quelle différence entre une excursion privée et un chauffeur privé à l'heure ?",
        answer:
          "L'excursion privée est pensée pour la découverte et les visites, tandis que le chauffeur à l'heure sert à vous déplacer librement pour vos rendez-vous, votre shopping et votre emploi du temps. Dans les deux cas, un véhicule privé et un chauffeur restent à votre disposition pendant toute la réservation.",
      },
      {
        question: "Le chauffeur reste-t-il disponible pendant toute l'excursion ?",
        answer:
          "Oui. Votre chauffeur reste à votre disposition pendant toute la durée de l'excursion privée, pour passer d'une destination à l'autre sans attente ni réservation supplémentaire.",
      },
      {
        question: "Une excursion privée peut-elle inclure des restaurants, des beach clubs ou des domaines viticoles ?",
        answer:
          "Oui, tout à fait. Une excursion privée peut inclure des restaurants de luxe, des beach clubs, des dégustations de vin, des hôtels, des arrêts panoramiques et des expériences choisies selon vos envies.",
      },
      {
        question: "Les excursions privées conviennent-elles aux familles et aux clients VIP ?",
        answer:
          `Oui. Les excursions privées sont idéales pour les familles, les couples et les clients VIP qui recherchent le confort, la discrétion et un voyage haut de gamme sur la Côte d'Azur. Le van Mercedes Classe V accueille jusqu'à ${V_CLASS.passengers} passagers ; la Classe E, la Classe S et la Maybach jusqu'à ${E_CLASS.passengers}.`,
      },
      {
        question: "L'excursion peut-elle commencer à l'aéroport ou à l'hôtel ?",
        answer:
          "Oui. Votre excursion privée peut commencer à votre hôtel, à votre villa, à votre yacht ou directement à l'aéroport Nice Côte d'Azur, selon votre itinéraire.",
      },
      {
        question: "Quelles sont les conditions d'annulation d'une excursion privée ?",
        answer:
          "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge de l'excursion réservée. En cas d'annulation moins de cinq jours avant le départ, le prix total est dû.",
      },
    ],
  },

  "transferts-yacht": {
    slug: "transferts-yacht",
    path: "/fr/transferts-yacht",
    enPath: yachtTransfersPage.path,
    locale: "fr",
    metadata: {
      title: "Transfert yacht Côte d'Azur | Chauffeur privé | Kokolimo",
      description: `Transfert yacht avec chauffeur privé, de l'aéroport de Nice aux ports de plaisance de Monaco, Cannes, Antibes et Saint-Tropez, dès ${fromAirport("antibes")} l'aller simple.`,
      keywords: [
        "transfert yacht Côte d'Azur",
        "transfert superyacht avec chauffeur",
        "transfert aéroport Nice yacht",
        "transfert port de plaisance Côte d'Azur",
        "transport équipage yacht",
      ],
    },
    serviceLabel: "Transferts yacht",
    heroTitle: "Transferts yacht sur la Côte d'Azur",
    heroDescription: `Des transferts avec chauffeur privé entre l'aéroport de Nice et les ports de plaisance de la Côte d'Azur (Antibes, Cannes, Monaco et Saint-Tropez), avec accueil à votre vol et dépose sur le quai, à prix fixe dès ${fromAirport("antibes")} l'aller simple.`,
    heroImageSrc: yachtTransfersPage.heroImageSrc,
    heroImageAlt: "Transfert yacht avec chauffeur privé, une Mercedes noire à côté d'un superyacht",
    introTitle: "Du terminal à la passerelle",
    introDescription:
      "La Côte d'Azur réunit la plus forte concentration de ports de plaisance pour superyachts au monde, et un chauffeur reste le lien le plus simple entre l'aéroport et le quai.",
    panels: [
      {
        title: "Accueil au vol, dépose sur le quai",
        text: "Nous suivons votre vol, vous accueillons aux arrivées avec une pancarte à votre nom, prenons en charge les bagages et les provisions, et vous déposons directement sur le quai du port ou à l'annexe qui vous attend. Une heure d'attente est incluse.",
        theme: "dark",
      },
      {
        title: "Tous les ports desservis",
        text: `Depuis l'aéroport de Nice, en Mercedes Classe E : Port Vauban à Antibes en 25 minutes environ, dès ${fromAirport("antibes")} ; les ports de Cannes en une trentaine de minutes, dès ${fromAirport("cannes")} ; Port Hercule à Monaco en 30 à 40 minutes, dès ${fromAirport("monaco")} ; le vieux port de Saint-Tropez en une heure et demie à deux heures, dès ${fromAirport("st-tropez")}.`,
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "rejoindre un yacht",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui rejoignent un yacht sur la Côte d'Azur, là où un transfert discret et fiable compte dès la première minute.",
    audienceCards: [
      {
        title: "Propriétaires et invités",
        text: "Une arrivée discrète et fluide, de l'aéroport ou du jet privé jusqu'au quai et au yacht qui vous attend.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht",
      },
      {
        title: "Équipage et avitaillement",
        text: "Relèves d'équipage, courses d'avitaillement et déplacements des invités, au rythme du planning du yacht.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de l'équipage du yacht",
      },
      {
        title: "Groupes et bagages",
        text: "Un van Classe V spacieux pour les invités, l'équipage et les bagages volumineux qui arrivent ensemble pour un charter.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des bagages pour un yacht",
      },
    ],
    localLinksTitle: "Transferts yacht par port",
    localLinksDescription:
      "Choisissez le port où votre yacht est amarré pour un transfert adapté au port et au trajet.",
    localLinks: yachtTransferLinksFr,
    cta: {
      title: "Besoin d'un transfert yacht ?",
      description:
        "Envoyez-nous le port, les détails de votre arrivée et le nombre de personnes, par le site ou par téléphone : nous confirmons le véhicule et le prix avant la réservation, puis votre chauffeur vous conduit jusqu'au quai.",
      buttonText: "Demander un transfert yacht",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quels ports desservez-vous sur la Côte d'Azur ?",
        answer:
          `Tous les ports de plaisance de la Côte d'Azur : Port Vauban à Antibes, les ports de Cannes, Port Hercule à Monaco et le vieux port de Saint-Tropez, entre autres. Depuis l'aéroport de Nice, le transfert coûte à partir de ${fromAirport("antibes")} pour Antibes, ${fromAirport("cannes")} pour Cannes ou Monaco et ${fromAirport("st-tropez")} pour Saint-Tropez en Mercedes Classe E, à prix fixe annoncé à l'avance.`,
      },
      {
        question: "Pouvez-vous accueillir un jet privé pour un transfert vers un yacht ?",
        answer:
          "Oui. Nous accueillons vos invités au terminal de l'aviation d'affaires de Nice et les conduisons directement au port et au yacht qui les attend.",
      },
      {
        question: "Gérez-vous l'équipage et l'avitaillement ?",
        answer:
          "Oui. Nous assurons les relèves d'équipage, les courses d'avitaillement et les déplacements des invités selon le planning du yacht, avec discrétion et fiabilité.",
      },
      {
        question: "Quel véhicule choisir pour rejoindre un yacht ?",
        answer:
          `Une Mercedes Classe V, jusqu'à ${V_CLASS.passengers} passagers, convient aux invités, à l'équipage et aux bagages volumineux réunis ; une Classe E ou une Classe S, jusqu'à ${E_CLASS.passengers} passagers, est idéale pour un couple qui voyage léger.`,
      },
    ],
  },

  "chauffeur-evenements": {
    slug: "chauffeur-evenements",
    path: "/fr/chauffeur-evenements",
    enPath: eventsPage.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé pour événements | Côte d'Azur | Kokolimo",
      description: `Chauffeur privé pour les événements de la Côte d'Azur dès ${eur(E_CLASS.prices.monaco.hourly)} l'heure ou ${eur(E_CLASS.prices.monaco.fullDay)} la journée : Grand Prix de Monaco, Festival de Cannes, Monaco Yacht Show.`,
      keywords: [
        "transport événementiel Côte d'Azur",
        "chauffeur Grand Prix de Monaco",
        "transport Festival de Cannes",
        "transfert Monaco Yacht Show",
        "chauffeur de luxe événements Côte d'Azur",
      ],
    },
    serviceLabel: "Transport événementiel de luxe",
    heroTitle: "Chauffeur privé pour les événements de la Côte d'Azur",
    heroDescription: `Un chauffeur privé pour les grands événements de la Côte d'Azur (le Grand Prix, les festivals de Cannes et le Monaco Yacht Show), pour arriver serein malgré la foule et les fermetures de routes, dès ${hourly(E_CLASS)} de l'heure ou ${fullDay(E_CLASS)} la journée en Mercedes Classe E.`,
    heroImageSrc: eventsPage.heroImageSrc,
    heroImageAlt: "Chauffeur événementiel de luxe, une Mercedes noire arrivant à un événement sur la Côte d'Azur",
    introTitle: "Arriver malgré la foule",
    introDescription:
      "Les événements de la Côte d'Azur remplissent la côte et ferment ses routes : c'est justement là qu'un chauffeur qui connaît les déviations prend tout son sens.",
    panels: [
      {
        title: "Disponible pendant tout l'événement",
        text: "Nous suivons votre vol, vous accueillons à l'aéroport de Nice et restons disponibles entre les sessions, les dîners et les soirées, en vous déposant au plus près de chaque entrée, selon les accès autorisés. Monaco est à 30 à 40 minutes environ de l'aéroport, Cannes à une trentaine de minutes.",
        theme: "dark",
      },
      {
        title: "Malgré les fermetures de routes",
        text: "Pendant le Grand Prix, les festivals et le Yacht Show, un chauffeur qui connaît les fermetures de routes vous permet de tenir un programme chargé sans accroc.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les événements de la Côte d'Azur",
    audienceDescription:
      "Un transport événementiel pensé pour les grands événements de la côte, où les fermetures de routes, la foule et les horaires serrés rendent un chauffeur privé indispensable.",
    audienceCards: [
      {
        title: "Grand Prix et courses",
        text: "Un chauffeur disponible pour le Grand Prix de Formule 1 et le Grand Prix Historique, avec des horaires calés sur les fermetures du circuit.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône du Grand Prix",
      },
      {
        title: "Festivals et galas",
        text: "Des arrivées en tenue de soirée pour le Festival de Cannes et les Cannes Lions, et des soirées qui se terminent tard.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des festivals",
      },
      {
        title: "Yacht Show et salons",
        text: "Des transferts fiables pour le Monaco Yacht Show et le Cannes Yachting Festival, pendant les semaines les plus chargées.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des salons nautiques",
      },
    ],
    localLinksTitle: "Chauffeur par événement",
    localLinksDescription:
      "Choisissez l'événement auquel vous assistez pour un transport avec chauffeur adapté à son programme et à ses fermetures de routes.",
    localLinks: eventLinksFr,
    cta: {
      title: "Vous assistez à un événement sur la Côte d'Azur ?",
      description:
        "Envoyez-nous l'événement, vos dates et le nombre de personnes : nous organisons votre transport avec chauffeur en fonction du programme et des fermetures de routes.",
      buttonText: "Organiser mon transport",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quels événements de la Côte d'Azur couvrez-vous ?",
        answer:
          "Nous couvrons le Grand Prix de Monaco et le Festival de Cannes en mai, les Cannes Lions, le Monaco Yacht Show en septembre, le Cannes Yachting Festival et d'autres encore.",
      },
      {
        question: "Pourquoi prendre un chauffeur pour un événement sur la Côte d'Azur ?",
        answer:
          "Les événements entraînent des fermetures de routes, de la foule et des horaires serrés ; un chauffeur qui connaît les déviations vous fait arriver sans accroc et à l'heure.",
      },
      {
        question: "Faut-il réserver son transport à l'avance pour un événement ?",
        answer:
          "Oui. Pendant les semaines d'événements, la côte affiche complet : il est indispensable de réserver chauffeurs et hélicoptères bien à l'avance pour en obtenir. Envoyez-nous l'événement, vos dates et le nombre de personnes, par le site ou par téléphone : nous confirmons la voiture et le prix avant la réservation.",
      },
      {
        question: "Un chauffeur peut-il rester disponible pendant l'événement ?",
        answer:
          `Oui. Nous restons disponibles entre les sessions, les dîners et les soirées, nous vous déposons près de chaque entrée et venons vous chercher ensuite. Le chauffeur se réserve à l'heure, dès ${hourly(E_CLASS)} en Mercedes Classe E ou ${hourly(V_CLASS)} en van Classe V jusqu'à ${V_CLASS.passengers} passagers, ou à la journée, dès ${fullDay(E_CLASS)}.`,
      },
    ],
  },
});
