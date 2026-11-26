// The French versions of the six yacht transfer pages (Monaco, Cannes, Saint-Tropez, Port Vauban in Antibes, Nice
// Airport to yacht, crew transportation), served at /fr/<slug> with the service page template. Each page names its
// English original (enPath) and takes its photo from it. Prices are read from the price list through the French
// helpers ("150 €"), and links go through frLink, so they reach the French page once it is live.

import { yachtTransferPages, type ServicePageConfig, type ServiceCardLink } from "../service-pages";
import { eur, E_CLASS, V_CLASS, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

/** The yacht pages' shared links, in French. */
const yachtTransferLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/yacht-transfers/monaco"),
    label: "Transfert yacht Monaco",
    description: "Transferts jusqu'à Port Hercule, le port des superyachts de Monaco.",
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
    description: "Transferts vers Port Vauban, le plus grand port de plaisance d'Europe.",
  },
  {
    href: frLink("/our-services/yacht-transfers/nice-airport"),
    label: "Aéroport de Nice au yacht",
    description: "Accueil à l'aéroport de Nice et trajet direct jusqu'à votre yacht.",
  },
  {
    href: frLink("/our-services/yacht-transfers/crew-transportation"),
    label: "Transport d'équipage",
    description: "Relèves d'équipage de jour comme de nuit et courses d'avitaillement, de l'aéroport de Nice aux ports de la Côte d'Azur.",
  },
];

/** The links section shared by the six pages. */
const yachtLocalLinksFr = {
  localLinksTitle: "Nos transferts yacht, port par port",
  localLinksDescription:
    "Choisissez le port où votre yacht est amarré pour un transfert adapté au port et au trajet.",
  localLinks: yachtTransferLinksFr,
};

export const yachtPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "transfert-yacht-monaco": {
    slug: "transfert-yacht-monaco",
    path: "/fr/transfert-yacht-monaco",
    enPath: yachtTransferPages.monaco.path,
    locale: "fr",
    metadata: {
      title: "Transfert yacht Monaco | Port Hercule | Kokolimo",
      description: `Transfert yacht à Monaco avec chauffeur privé, de l'aéroport de Nice au quai de Port Hercule en 30 minutes environ, dès ${eur(E_CLASS.prices.monaco.transfer)} l'aller simple à prix fixe.`,
      keywords: [
        "transfert yacht Monaco",
        "transfert Port Hercule",
        "port des superyachts Monaco",
        "transfert aéroport Nice yacht Monaco",
        "chauffeur privé port de Monaco",
      ],
    },
    serviceLabel: "Transfert yacht Monaco",
    heroTitle: "Transfert yacht à Monaco, jusqu'à Port Hercule",
    heroDescription:
      "Un transfert avec chauffeur privé de l'aéroport Nice Côte d'Azur jusqu'à votre yacht à Port Hercule : 30 à 40 minutes environ, et une dépose sur le quai sans vous soucier des tunnels ni du stationnement de Monaco.",
    heroImageSrc: yachtTransferPages.monaco.heroImageSrc,
    heroImageAlt: "Transfert yacht à Port Hercule, Monaco, avec une Mercedes noire sur le port",
    introTitle: "Vers le port des superyachts de Monaco",
    introDescription:
      "Port Hercule est la grande vitrine de Monaco : y arriver doit être aussi fluide que le port est prestigieux.",
    panels: [
      {
        title: "Dépose sur le quai",
        text: "Nous vous accueillons à l'arrivée de votre vol, prenons en charge vos bagages et vous conduisons jusqu'au quai de Port Hercule, en nous coordonnant avec l'équipage pour l'accès.",
        theme: "dark",
      },
      {
        title: "Prêt pour le Yacht Show et le Grand Prix",
        text: "Pendant le Monaco Yacht Show et le Grand Prix, un chauffeur qui connaît les fermetures de routes vous fait arriver sans encombre malgré la foule.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les yachts à Monaco",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui rejoignent un yacht à Port Hercule, des arrivées en toute tranquillité à la logistique de la semaine du Yacht Show.",
    audienceCards: [
      {
        title: "Propriétaires et invités",
        text: "Une arrivée discrète depuis l'aéroport ou l'héliport, directement jusqu'au quai et à votre yacht.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht à Monaco",
      },
      {
        title: "Yacht Show et événements",
        text: "Des transferts fiables pour le Monaco Yacht Show et le Grand Prix, organisés en fonction des fermetures de routes.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des événements nautiques à Monaco",
      },
      {
        title: "Équipage et avitaillement",
        text: "Relèves d'équipage et courses d'avitaillement pour les yachts amarrés à Port Hercule, selon le planning du yacht.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de l'équipage de yacht à Monaco",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transfert yacht à Monaco ?",
      description:
        "Envoyez-nous votre vol et le poste d'amarrage du yacht à Port Hercule : nous organisons l'accueil à l'aéroport de Nice et la dépose sur le quai, en lien avec l'équipage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Port Hercule ?",
        answer:
          "Comptez environ 30 à 40 minutes par la route entre l'aéroport de Nice et Port Hercule. Vous pouvez aussi prendre un court vol en hélicoptère jusqu'à l'héliport de Monaco, où un chauffeur vous attend pour la fin du trajet.",
      },
      {
        question: "Combien coûte un transfert yacht à Monaco ?",
        answer: `Depuis l'aéroport de Nice, la dépose à Port Hercule coûte à partir de ${eur(E_CLASS.prices.monaco.transfer)} en Mercedes Classe E et de ${eur(V_CLASS.prices.monaco.transfer)} en van Classe V. C'est un prix fixe, annoncé avant la réservation.`,
      },
      {
        question: "Pouvez-vous me déposer sur le quai de Port Hercule ?",
        answer:
          "Oui. Nous vous conduisons directement jusqu'au quai et à votre yacht à Port Hercule, en nous coordonnant avec l'équipage pour l'accès et l'horaire si besoin.",
      },
      {
        question: "Proposez-vous des transferts pendant le Monaco Yacht Show ?",
        answer:
          "Oui. Pendant le Monaco Yacht Show, avec les fermetures de routes et la foule, un chauffeur qui connaît les déviations vous fait arriver sans encombre et à l'heure.",
      },
      {
        question: "Vous occupez-vous de l'équipage et de l'avitaillement à Monaco ?",
        answer:
          "Oui. Nous assurons les relèves d'équipage et les courses d'avitaillement des yachts amarrés à Port Hercule, en toute discrétion et selon le planning du yacht.",
      },
    ],
  },

  "transfert-yacht-cannes": {
    slug: "transfert-yacht-cannes",
    path: "/fr/transfert-yacht-cannes",
    enPath: yachtTransferPages.cannes.path,
    locale: "fr",
    metadata: {
      title: "Transfert yacht Cannes | Vieux-Port | Kokolimo",
      description: `Transfert yacht à Cannes avec chauffeur privé, de l'aéroport de Nice au Vieux-Port ou à Port Canto en 30 minutes environ, dès ${eur(E_CLASS.prices.cannes.transfer)} l'aller simple.`,
      keywords: [
        "transfert yacht Cannes",
        "transfert Vieux-Port Cannes",
        "transfert Port Pierre Canto",
        "transfert aéroport Nice yacht Cannes",
        "chauffeur privé port de Cannes",
      ],
    },
    serviceLabel: "Transfert yacht Cannes",
    heroTitle: "Transfert yacht à Cannes, jusqu'au Vieux-Port",
    heroDescription:
      "Un transfert avec chauffeur privé de l'aéroport Nice Côte d'Azur jusqu'à votre yacht à Cannes, au Vieux-Port ou à Port Pierre Canto : 30 minutes environ, avec une dépose sur le quai.",
    heroImageSrc: yachtTransferPages.cannes.heroImageSrc,
    heroImageAlt: "Transfert yacht au Vieux-Port de Cannes, avec une Mercedes noire sur le quai",
    introTitle: "Au cœur de Cannes",
    introDescription:
      "À Cannes, les yachts sont au centre du glamour, à deux pas de la Croisette : avec un chauffeur, votre arrivée se fait sans effort.",
    panels: [
      {
        title: "Dépose sur le quai",
        text: "Nous vous accueillons à l'arrivée de votre vol et vous conduisons au Vieux-Port ou à Port Pierre Canto, jusqu'au quai et à votre yacht.",
        theme: "dark",
      },
      {
        title: "Prêt pour les festivals",
        text: "Pendant le Cannes Yachting Festival et le Festival de Cannes, un chauffeur qui connaît les fermetures de routes vous fait arriver sans encombre.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les yachts à Cannes",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui rejoignent un yacht à Cannes, du Vieux-Port à Port Pierre Canto.",
    audienceCards: [
      {
        title: "Propriétaires et invités",
        text: "Une arrivée discrète depuis l'aéroport, directement jusqu'au quai et à votre yacht à Cannes.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht à Cannes",
      },
      {
        title: "Yachting Festival",
        text: "Des transferts fiables pour le Cannes Yachting Festival et le Festival de Cannes, organisés en fonction de la foule.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône du Cannes Yachting Festival",
      },
      {
        title: "Équipage et avitaillement",
        text: "Relèves d'équipage et courses d'avitaillement pour les yachts du Vieux-Port et de Port Canto.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de l'équipage de yacht à Cannes",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transfert yacht à Cannes ?",
      description:
        "Dites-nous dans quel port le yacht vous attend (Vieux-Port ou Port Pierre Canto) et à quelle heure vous atterrissez : nous organisons le trajet de l'aéroport de Nice jusqu'au quai.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Cannes ?",
        answer:
          "Environ 30 minutes par la route quand elle est dégagée, de l'aéroport de Nice au Vieux-Port ou à Port Pierre Canto, et un peu plus pendant les festivals.",
      },
      {
        question: "Combien coûte un transfert yacht à Cannes ?",
        answer: `Pour le Vieux-Port ou Port Pierre Canto, comptez à partir de ${eur(E_CLASS.prices.cannes.transfer)} en Mercedes Classe E. Si vous arrivez à plusieurs avec des bagages, le trajet en van Classe V coûte à partir de ${eur(V_CLASS.prices.cannes.transfer)}. Le prix est fixe et confirmé avant la réservation.`,
      },
      {
        question: "Où s'amarrent les grands yachts à Cannes ?",
        answer:
          "Les grands yachts s'amarrent souvent à Port Pierre Canto, juste à l'est du Vieux-Port. Ce port accueille des yachts plus grands tout en gardant un accès facile à la Croisette.",
      },
      {
        question: "Proposez-vous des transferts pendant le Cannes Yachting Festival ?",
        answer:
          "Oui. Pendant le Cannes Yachting Festival, un chauffeur qui connaît les fermetures de routes vous fait arriver aux ports sans encombre et à l'heure.",
      },
      {
        question: "Vous occupez-vous de l'équipage et de l'avitaillement à Cannes ?",
        answer:
          "Oui. Nous assurons les relèves d'équipage et les courses d'avitaillement des yachts du Vieux-Port et de Port Canto, selon le planning du yacht.",
      },
    ],
  },

  "transfert-yacht-saint-tropez": {
    slug: "transfert-yacht-saint-tropez",
    path: "/fr/transfert-yacht-saint-tropez",
    enPath: yachtTransferPages["saint-tropez"].path,
    locale: "fr",
    metadata: {
      title: "Transfert yacht Saint-Tropez | Chauffeur privé | Kokolimo",
      description: `Transfert yacht à Saint-Tropez : chauffeur privé de l'aéroport de Nice au vieux port, dès ${eur(E_CLASS.prices["st-tropez"].transfer)} l'aller simple par la route, calé sur le trafic estival.`,
      keywords: [
        "transfert yacht Saint-Tropez",
        "transfert port de Saint-Tropez",
        "transfert aéroport Nice yacht Saint-Tropez",
        "chauffeur privé port de Saint-Tropez",
        "chauffeur privé yacht Saint-Tropez",
      ],
    },
    serviceLabel: "Transfert yacht Saint-Tropez",
    heroTitle: "Transfert yacht à Saint-Tropez",
    heroDescription: `Votre chauffeur privé vous accueille à l'aéroport Nice Côte d'Azur et vous conduit jusqu'à votre yacht, sur le quai du port de Saint-Tropez. Le transfert est à prix fixe, dès ${eur(E_CLASS.prices["st-tropez"].transfer)} en Mercedes Classe E. Par la route ou en bateau à travers le golfe, en fonction de la circulation.`,
    heroImageSrc: yachtTransferPages["saint-tropez"].heroImageSrc,
    heroImageAlt: "Transfert yacht au vieux port de Saint-Tropez, avec une Mercedes noire sur le quai",
    introTitle: "Vers le quai le plus célèbre",
    introDescription:
      "Le port de Saint-Tropez est le quai le plus célèbre du yachting, et aussi le plus difficile d'accès. Votre chauffeur privé connaît la presqu'île : il vous dépose sur le quai, revient vous y chercher pour le retour à l'aéroport de Nice et peut rester à votre disposition sur place.",
    panels: [
      {
        title: "Par la route ou en bateau",
        text: "Nous assurons tout le trajet par la route, ou nous vous conduisons à un embarcadère à Sainte-Maxime, avec une traversée organisée pour rejoindre le yacht.",
        theme: "dark",
      },
      {
        title: "Calé sur la circulation",
        text: "En plein été, l'unique route du golfe peut être saturée ; un chauffeur qui connaît la presqu'île prévoit le trajet pour éviter le plus gros des bouchons.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les yachts à Saint-Tropez",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui rejoignent un yacht à Saint-Tropez, où le trajet jusqu'à la presqu'île est un voyage en soi.",
    audienceCards: [
      {
        title: "Propriétaires et invités",
        text: "Une arrivée discrète sur le quai du port de Saint-Tropez, par la route ou en bateau, puis le retour du port à l'aéroport de Nice pour votre vol.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht à Saint-Tropez",
      },
      {
        title: "Beach clubs",
        text: "Du yacht au port jusqu'aux beach clubs de Pampelonne : nous vous déposons à l'entrée et revenons vous chercher ensuite.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des plages de Saint-Tropez",
      },
      {
        title: "Équipages et groupes",
        text: "Un van Classe V spacieux pour l'équipage, les provisions et les invités, sur ce trajet plus long jusqu'à la presqu'île.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône de l'équipage à Saint-Tropez",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transfert yacht à Saint-Tropez ?",
      description:
        "Envoyez-nous votre vol, le poste d'amarrage du yacht ou vos trajets depuis le port : nous confirmons l'itinéraire, la voiture et le prix fixe avant la réservation.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Saint-Tropez ?",
        answer:
          "Par la route, l'aéroport de Nice est à environ 110 kilomètres de Saint-Tropez : comptez une heure et demie à deux heures, davantage en haute saison avec la circulation autour du golfe.",
      },
      {
        question: "Combien coûte un transfert yacht à Saint-Tropez ?",
        answer: `Un transfert de l'aéroport de Nice jusqu'à votre yacht à Saint-Tropez coûte à partir de ${eur(E_CLASS.prices["st-tropez"].transfer)} en Mercedes Classe E ou ${eur(V_CLASS.prices["st-tropez"].transfer)} en Classe V. Le prix est fixe et confirmé avant la réservation, et l'annulation est gratuite jusqu'à cinq jours avant la prise en charge (au-delà, le prix total est dû).`,
      },
      {
        question: "Puis-je rejoindre le yacht en bateau ?",
        answer:
          "Oui. Nous pouvons vous conduire à un embarcadère à Sainte-Maxime, avec une traversée organisée jusqu'au port de Saint-Tropez, ce qui évite la circulation estivale autour du golfe.",
      },
      {
        question: "Pouvez-vous me conduire aux beach clubs de Pampelonne ?",
        answer: `Oui. Votre chauffeur privé vous attend sur le quai du port de Saint-Tropez, vous dépose à l'entrée des beach clubs de Pampelonne et revient vous chercher quand vous le souhaitez. Il peut aussi rester à votre disposition : comptez à partir de ${eur(E_CLASS.prices["st-tropez"].hourly)} de l'heure ou ${eur(E_CLASS.prices["st-tropez"].fullDay)} la journée en Mercedes Classe E.`,
      },
      {
        question: "Vous occupez-vous de l'équipage et de l'avitaillement à Saint-Tropez ?",
        answer:
          "Oui. Nous assurons les relèves d'équipage et les courses d'avitaillement des yachts du vieux port de Saint-Tropez, selon le planning du yacht.",
      },
    ],
  },

  "transfert-yacht-antibes": {
    slug: "transfert-yacht-antibes",
    path: "/fr/transfert-yacht-antibes",
    enPath: yachtTransferPages.antibes.path,
    locale: "fr",
    metadata: {
      title: "Transfert yacht Port Vauban | Antibes | Kokolimo",
      description: `Transfert yacht à Port Vauban, Antibes, le plus grand port de plaisance d'Europe : chauffeur privé depuis l'aéroport de Nice dès ${eur(E_CLASS.prices.antibes.transfer)} l'aller simple.`,
      keywords: [
        "transfert yacht Antibes",
        "transfert Port Vauban",
        "Quai des Milliardaires",
        "transfert aéroport Nice yacht Antibes",
        "chauffeur privé port d'Antibes",
      ],
    },
    serviceLabel: "Transfert yacht Port Vauban",
    heroTitle: "Transfert yacht à Port Vauban, Antibes",
    heroDescription:
      "Votre chauffeur privé assure votre transfert en 25 minutes environ de l'aéroport Nice Côte d'Azur jusqu'à votre yacht, sur le quai de Port Vauban, à Antibes. C'est le plus grand port de plaisance d'Europe.",
    heroImageSrc: yachtTransferPages.antibes.heroImageSrc,
    heroImageAlt: "Transfert yacht à Port Vauban, Antibes, avec une Mercedes noire et des superyachts",
    introTitle: "Vers le plus grand port de plaisance d'Europe",
    introDescription:
      "Port Vauban est le cœur battant du yachting sur la Côte d'Azur et l'un des ports les plus proches de l'aéroport : un transfert court et facile.",
    panels: [
      {
        title: "Dépose sur le quai",
        text: "Nous vous accueillons à l'arrivée de votre vol et prenons le chemin le plus court jusqu'à Port Vauban. Nous vous déposons sur le quai, jusqu'à votre yacht, y compris au Quai des Milliardaires.",
        theme: "dark",
      },
      {
        title: "Équipage et avitaillement",
        text: "À Port Vauban, le va-et-vient à terre est constant : relèves d'équipage, avitaillement et trajets des invités, le tout selon le planning du yacht.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les yachts à Antibes",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui rejoignent un yacht à Port Vauban, des superyachts à l'ensemble du port d'Antibes.",
    audienceCards: [
      {
        title: "Propriétaires et invités",
        text: "Une arrivée rapide et discrète de l'aéroport jusqu'au quai de Port Vauban et à votre yacht.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht à Antibes",
      },
      {
        title: "Équipage et avitaillement",
        text: "Relèves d'équipage, courses d'avitaillement et trajets des invités pour le port le plus animé de la côte.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de l'équipage de yacht à Antibes",
      },
      {
        title: "Groupes et bagages",
        text: "Un van Classe V spacieux pour les invités, l'équipage et les bagages volumineux qui arrivent ensemble pour un charter.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des bagages pour un yacht à Antibes",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transfert yacht à Port Vauban ?",
      description:
        "Indiquez-nous votre arrivée et le quai où le yacht est amarré à Port Vauban : votre chauffeur vous attend à l'aéroport de Nice et vous dépose au plus près de la passerelle.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Port Vauban ?",
        answer:
          "Comptez environ 25 minutes par la route. Port Vauban, à Antibes, est l'un des grands ports de plaisance les plus proches de l'aéroport de Nice.",
      },
      {
        question: "Combien coûte un transfert yacht à Antibes ?",
        answer: `Depuis l'aéroport de Nice, le transfert jusqu'à Port Vauban coûte à partir de ${eur(E_CLASS.prices.antibes.transfer)} en Mercedes Classe E et de ${eur(V_CLASS.prices.antibes.transfer)} en van Classe V. Le prix est fixe et vous est communiqué avant la réservation.`,
      },
      {
        question: "Qu'est-ce que le Quai des Milliardaires ?",
        answer:
          "Le Quai des Milliardaires est une partie de Port Vauban, à Antibes, réservée aux plus grands superyachts grâce à ses eaux profondes et à son emplacement de choix.",
      },
      {
        question: "Assurez-vous les relèves d'équipage à Port Vauban ?",
        answer:
          "Oui. Nous assurons les relèves d'équipage, les courses d'avitaillement et les trajets des invités pour les yachts de Port Vauban, selon le planning du yacht.",
      },
      {
        question: "Quel véhicule choisir pour rejoindre un yacht ?",
        answer:
          "Le van Mercedes Classe V accueille ensemble invités, équipage et bagages volumineux ; une Classe E ou une Classe S est idéale pour un couple qui voyage léger.",
      },
    ],
  },

  "transfert-yacht-aeroport-nice": {
    slug: "transfert-yacht-aeroport-nice",
    path: "/fr/transfert-yacht-aeroport-nice",
    enPath: yachtTransferPages["nice-airport"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport de Nice au yacht | Kokolimo",
      description: `Transfert de l'aéroport de Nice à votre yacht avec chauffeur privé : vol régulier ou jet privé, dans tout port de la Côte d'Azur, dès ${eur(E_CLASS.prices.antibes.transfer)} l'aller.`,
      keywords: [
        "transfert aéroport Nice yacht",
        "transfert aéroport yacht Côte d'Azur",
        "transfert jet privé yacht",
        "aéroport de Nice au port",
        "transfert aéroport superyacht",
      ],
    },
    serviceLabel: "Aéroport de Nice au yacht",
    heroTitle: "Transfert de l'aéroport de Nice à votre yacht",
    heroDescription:
      "Votre chauffeur privé assure votre transfert de l'aéroport Nice Côte d'Azur directement jusqu'à votre yacht, dans n'importe quel port de la côte. Il vous accueille à votre arrivée, que vous voyagiez sur un vol commercial ou en aviation d'affaires.",
    heroImageSrc: yachtTransferPages["nice-airport"].heroImageSrc,
    heroImageAlt: "Transfert d'un jet privé à un yacht à Nice, avec une Mercedes noire et son chauffeur",
    introTitle: "La porte d'entrée du yachting sur la Côte d'Azur",
    introDescription:
      "L'aéroport de Nice se trouve au milieu de la côte : la plupart des ports sont à un court trajet en voiture, le lien le plus fluide entre l'avion et la passerelle.",
    panels: [
      {
        title: "Accueil à l'arrivée",
        text: "Nous vous accueillons aux arrivées des vols commerciaux ou au terminal de l'aviation d'affaires. Nous prenons vos bagages et vous accompagnons jusqu'à la voiture.",
        theme: "dark",
      },
      {
        title: "Direction le port",
        text: "Depuis le terminal, nous roulons directement vers Antibes, Cannes, Monaco ou Saint-Tropez, jusqu'au quai et à votre yacht.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "rejoindre votre yacht",
    audienceDescription:
      "Pensé pour les propriétaires, les invités et les équipages qui arrivent à Nice, sur un vol commercial ou en jet privé, pour rejoindre un yacht.",
    audienceCards: [
      {
        title: "Arrivées en jet privé",
        text: "Accueil au terminal de l'aviation d'affaires et trajet direct jusqu'au port et à votre yacht.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de jet privé",
      },
      {
        title: "Propriétaires et invités",
        text: "Une prise en charge discrète et sans accroc, de la porte de l'avion jusqu'au quai, dans n'importe quel port de la Côte d'Azur.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des propriétaires de yacht à l'aéroport",
      },
      {
        title: "Équipage et bagages",
        text: "Un van Classe V spacieux pour l'équipage, les provisions et les invités qui arrivent ensemble pour un charter.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône de l'équipage de yacht à l'aéroport",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transfert de l'aéroport au yacht ?",
      description:
        "Envoyez-nous votre vol, le port et le nombre de passagers : nous organisons votre chauffeur de l'aéroport de Nice jusqu'à votre yacht.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice jusqu'à un yacht ?",
        answer:
          "Depuis l'aéroport de Nice, comptez environ 25 minutes pour Antibes, une trentaine de minutes pour Cannes et Monaco, et une heure et demie environ pour Saint-Tropez par la route, selon la circulation.",
      },
      {
        question: "Pouvez-vous accueillir un jet privé à Nice ?",
        answer:
          "Oui. Nous accueillons les passagers au terminal de l'aviation d'affaires de l'aéroport de Nice, à l'écart des halls principaux, et les conduisons directement au port.",
      },
      {
        question: "Le chauffeur peut-il me conduire jusqu'au yacht ?",
        answer:
          "Oui. Nous vous déposons sur le quai du port, et non sur un parking éloigné, en nous coordonnant avec l'équipage pour l'accès et l'horaire.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport au yacht ?",
        answer: `Un transfert de l'aéroport de Nice jusqu'à un yacht coûte à partir de ${eur(E_CLASS.prices.antibes.transfer)} pour Antibes, ${eur(E_CLASS.prices.cannes.transfer)} pour Cannes ou Monaco et ${eur(E_CLASS.prices["st-tropez"].transfer)} pour Saint-Tropez ; les véhicules plus grands coûtent un peu plus cher.`,
      },
      {
        question: "Quel véhicule choisir pour rejoindre un yacht ?",
        answer:
          "Le van Mercedes Classe V accueille ensemble invités, équipage et bagages volumineux ; une Classe E ou une Classe S est idéale pour un couple qui voyage léger.",
      },
    ],
  },

  "transport-equipage-yacht": {
    slug: "transport-equipage-yacht",
    path: "/fr/transport-equipage-yacht",
    enPath: yachtTransferPages["crew-transportation"].path,
    locale: "fr",
    metadata: {
      title: "Transport d'équipage de yacht | Côte d'Azur | Kokolimo",
      description: `Transport d'équipage de yacht avec chauffeur privé sur la Côte d'Azur, dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure : trajets aéroport, relèves et avitaillement, jour et nuit.`,
      keywords: [
        "transport équipage yacht",
        "transfert équipage superyacht",
        "chauffeur relève d'équipage Côte d'Azur",
        "transport avitaillement yacht",
        "transfert équipage Antibes",
      ],
    },
    serviceLabel: "Transport d'équipage",
    heroTitle: "Transport d'équipage de yacht",
    heroDescription: `Nous proposons un transport avec chauffeur privé aux équipages de superyachts sur toute la Côte d'Azur, du Port Vauban d'Antibes jusqu'à Cannes et Monaco. Il couvre les trajets vers l'aéroport et la gare, les relèves d'équipage et l'avitaillement, jour et nuit, dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure.`,
    heroImageSrc: yachtTransferPages["crew-transportation"].heroImageSrc,
    heroImageAlt: "Transport d'équipage de yacht avec un van Mercedes Classe V noir sur le quai d'un port",
    introTitle: "Un soutien à terre pour votre yacht",
    introDescription:
      "Un superyacht au port génère un va-et-vient constant à terre ; un chauffeur partenaire dédié s'occupe de tout, selon le planning du yacht.",
    panels: [
      {
        title: "Relèves d'équipage à toute heure",
        text: "Nous suivons les vols et assurons les prises en charge à l'aéroport et à la gare à toute heure, avec une pancarte nominative. Un seul interlocuteur fiable pour chaque rotation.",
        theme: "dark",
      },
      {
        title: "Avitaillement et courses",
        text: "Un van Classe V spacieux transporte provisions et équipement en toute discrétion entre la ville, les fournisseurs et le quai.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les équipages de superyachts",
    audienceDescription:
      "Pensé pour les capitaines et les sociétés de gestion qui ont besoin d'un transport à terre fiable et discret pour l'équipage, les provisions et les invités.",
    audienceCards: [
      {
        title: "Relèves d'équipage",
        text: "Trajets aéroport et gare à toute heure, avec suivi des vols et accueil avec pancarte nominative à chaque rotation.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de relève d'équipage",
      },
      {
        title: "Avitaillement",
        text: "Un van Classe V pour les provisions et l'équipement, entre les fournisseurs et le quai, qui fait gagner des heures à l'équipage.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône d'avitaillement",
      },
      {
        title: "Déplacements des invités",
        text: "Un transport discret pour les propriétaires et les invités du charter vers l'aéroport, l'héliport, les dîners et les journées à terre.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des déplacements des invités",
      },
    ],
    ...yachtLocalLinksFr,
    cta: {
      title: "Besoin d'un transport d'équipage ?",
      description:
        "Indiquez-nous le port du yacht et ses besoins : nous mettons en place un service de chauffeur fiable pour l'équipage, l'avitaillement et les invités.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Vous occupez-vous des relèves d'équipage de nuit ?",
        answer:
          "Oui. Nous suivons les vols et assurons les prises en charge à l'aéroport et à la gare à toute heure, y compris tôt le matin, tard le soir et pour les changements de dernière minute.",
      },
      {
        question: "Quel véhicule utilisez-vous pour les courses d'avitaillement ?",
        answer:
          "Nous utilisons un van Mercedes Classe V spacieux, qui transporte en toute discrétion les provisions et l'équipement volumineux entre la ville, les fournisseurs et le quai.",
      },
      {
        question: "Un seul prestataire peut-il couvrir toute la Côte d'Azur ?",
        answer: `Oui. Nous couvrons Antibes et Port Vauban, Cannes, Monaco et au-delà, avec un compte client et un interlocuteur unique pour le yacht. Pour une relève d'équipage à Port Vauban, le trajet depuis l'aéroport de Nice dure environ 25 minutes et coûte à partir de ${eur(E_CLASS.prices.antibes.transfer)} en Mercedes Classe E ou ${eur(V_CLASS.prices.antibes.transfer)} en van Classe V, qui accueille jusqu'à ${V_CLASS.passengers} personnes.`,
      },
      {
        question: "Le service est-il assez discret pour les propriétaires et les invités ?",
        answer:
          "Oui. Des chauffeurs habituels, des voitures impeccables et une fiabilité absolue assurent la discrétion attendue au plus haut niveau du marché.",
      },
      {
        question: "Proposez-vous un compte aux sociétés de gestion de yachts ?",
        answer:
          "Oui. Nous travaillons sur compte, avec un interlocuteur unique, pour que la réservation et la facturation restent simples pour les capitaines et les sociétés de gestion de yachts.",
      },
    ],
  },
});
