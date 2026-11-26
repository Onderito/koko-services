// The French versions of seven transfer pages (Saint-Tropez, Antibes, Saint-Jean-Cap-Ferrat, Èze, Villefranche-sur-Mer,
// Menton and long-distance), served at /fr/<slug> with the service page template. Each page names its English original
// (enPath) and uses its photo; prices are read from the price list through the French helpers ("150 €"); links point to
// the French twin of a page when it is live, else to the English page.

import { transferPages, type ServicePageConfig, type ServiceCardLink } from "../service-pages";
import { eur, E_CLASS, V_CLASS, S_CLASS, routePrices, startingPrice, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

/** The transfer routes, in French: the same list as the English pages' transfer links. */
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
    description: "De l'aéroport de Nice à Antibes, Juan-les-Pins et au Cap d'Antibes.",
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
    description: "De l'aéroport de Nice à Villefranche et sa rade profonde et abritée.",
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

const localLinks = {
  localLinksTitle: "Autres transferts depuis l'aéroport de Nice",
  localLinksDescription: "D'autres trajets depuis l'aéroport de Nice, chacun à prix fixe confirmé avant la réservation.",
  localLinks: transferLinksFr,
};

export const transferPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "transfert-saint-tropez": {
    slug: "transfert-saint-tropez",
    path: "/fr/transfert-saint-tropez",
    enPath: transferPages["saint-tropez-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Saint-Tropez | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Saint-Tropez dès ${eur(E_CLASS.prices["st-tropez"].transfer)} à prix fixe, par la route ou en bateau, jusqu'au Vieux-Port, aux villas et à Pampelonne.`,
      keywords: [
        "transfert aéroport Nice Saint-Tropez",
        "chauffeur privé Nice Saint-Tropez",
        "transfert Saint-Tropez",
        "aéroport de Nice à Saint-Tropez",
        "transfert privé Saint-Tropez",
      ],
    },
    serviceLabel: "Transfert Saint-Tropez",
    heroTitle: "Transfert de l'aéroport de Nice à Saint-Tropez",
    heroDescription: `Votre chauffeur privé vous accueille à l'aéroport de Nice et vous conduit à Saint-Tropez en une heure et demie à deux heures environ, ou jusqu'à un bateau à Sainte-Maxime, à prix fixe dès ${eur(E_CLASS.prices["st-tropez"].transfer)}.`,
    heroImageSrc: transferPages["saint-tropez-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Saint-Tropez, une Mercedes noire sur le quai",
    introTitle: "Le plus long trajet de la côte",
    introDescription:
      "Saint-Tropez se trouve au bout de sa presqu'île, à environ 110 kilomètres de l'aéroport de Nice, et une seule route y mène. Votre chauffeur organise votre arrivée en fonction de la circulation estivale.",
    panels: [
      {
        title: "Par la route ou en bateau",
        text: "Nous assurons tout le transfert par la route, ou nous vous déposons à un embarcadère de Sainte-Maxime, d'où une traversée organisée vous mène au port.",
        theme: "dark",
      },
      {
        title: "En fonction de la circulation",
        text: "En plein été, l'unique route du golfe peut être complètement bloquée ; un chauffeur qui connaît la presqu'île organise le trajet pour éviter le pire des bouchons.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe le transfert de l'aéroport de Nice à Saint-Tropez",
      paragraphs: [
        "Nice Côte d'Azur est l'aéroport principal de Saint-Tropez, à **environ 110 kilomètres** : comptez une heure et demie à deux heures par la route, et davantage en juillet et en août. Votre chauffeur vous accueille aux arrivées, prend vos bagages et vous conduit à votre hôtel, à votre villa, au Vieux-Port ou aux clubs de plage de Pampelonne.",
        `Pour ce trajet plus long, les prix commencent à ${routePrices("st-tropez")}, en aller simple, et sont fixés avant la réservation. Le van Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages, ce qui convient aux familles et aux groupes qui rejoignent une villa.`,
        "En haute saison, la circulation sur la route du golfe peut être à l'arrêt. Nous pouvons alors vous déposer à un embarcadère de Sainte-Maxime, d\'où une traversée organisée vous mène au port. Pour votre départ, nous venons vous chercher à Saint-Tropez et vous ramenons à l'aéroport de Nice.",
      ],
    },
    audienceTitle: "Idéal pour",
    audienceAccent: "les séjours à Saint-Tropez",
    audienceDescription:
      "Pensé pour le long trajet jusqu'à Saint-Tropez : villas, hôtels, clubs de plage et yachts.",
    audienceCards: [
      {
        title: "Villas et hôtels",
        text: "Des arrivées en douceur au Byblos, dans les villas de la presqu'île et les hôtels qui dominent le golfe, en pensant aux bagages et aux horaires.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des villas de Saint-Tropez",
      },
      {
        title: "Clubs de plage",
        text: "Transferts et journées vers les clubs de plage de Pampelonne : dépose à l'entrée, et nous revenons vous chercher dès que vous êtes prêt.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des plages de Pampelonne",
      },
      {
        title: "Yachts et groupes",
        text: "Un van Classe V spacieux pour les groupes, les familles et les bagages, ou une voiture jusqu'à un yacht amarré au Vieux-Port.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des groupes à Saint-Tropez",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert de l'aéroport de Nice à Saint-Tropez",
      description:
        "Envoyez-nous votre vol et votre adresse à Saint-Tropez : nous confirmons l'itinéraire, la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Saint-Tropez ?",
        answer: `Pour ce trajet d'environ 110 kilomètres, l'aller simple coûte à partir de ${routePrices("st-tropez")}. Le prix est fixé avant la réservation.`,
      },
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Saint-Tropez ?",
        answer:
          "Par la route, une heure et demie à deux heures environ pour quelque 110 kilomètres, et davantage en haute saison avec la circulation autour du golfe.",
      },
      {
        question: "Sur quel aéroport atterrir pour aller à Saint-Tropez ?",
        answer:
          "Nice Côte d'Azur, le principal aéroport international de la Côte d'Azur, se trouve à environ 110 kilomètres de Saint-Tropez, et votre chauffeur vous y attend aux arrivées. Si vous atterrissez dans un autre aéroport, envoyez-nous votre vol : nous vous donnons le prix du transfert avant la réservation.",
      },
      {
        question: "Peut-on rejoindre Saint-Tropez en bateau ?",
        answer:
          "Oui. Nous pouvons vous déposer à un embarcadère de Sainte-Maxime, d'où une traversée organisée vous mène au port en évitant les bouchons de l'été autour du golfe.",
      },
      {
        question: "Pourquoi Saint-Tropez est-il plus difficile d'accès en été ?",
        answer:
          "Une seule route dessert la presqu'île : en juillet et en août, la circulation peut s'y bloquer complètement. Votre chauffeur organise le trajet en conséquence, ou vous fait prendre le bateau.",
      },
      {
        question: "Un groupe peut-il réserver une voiture de l'aéroport de Nice à Saint-Tropez ?",
        answer: `Oui. La Mercedes Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages, dès ${eur(V_CLASS.prices["st-tropez"].transfer)} l'aller simple depuis l'aéroport de Nice.`,
      },
      {
        question: "Faites-vous le trajet retour de Saint-Tropez à l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre villa ou à votre hôtel à Saint-Tropez et vous déposons à votre terminal de l'aéroport de Nice.",
      },
    ],
  },

  "transfert-antibes": {
    slug: "transfert-antibes",
    path: "/fr/transfert-antibes",
    enPath: transferPages["antibes-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Antibes | Chauffeur privé | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Antibes dès ${eur(E_CLASS.prices.antibes.transfer)} à prix fixe, avec accueil aux arrivées, vers Juan-les-Pins, Cap d'Antibes ou Port Vauban.`,
      keywords: [
        "transfert aéroport Nice Antibes",
        "aéroport de Nice à Antibes",
        "chauffeur privé Antibes",
        "transfert Juan-les-Pins",
        "transfert privé Antibes",
      ],
    },
    serviceLabel: "Transfert Antibes",
    heroTitle: "Transfert de l'aéroport de Nice à Antibes",
    heroDescription:
      "Votre chauffeur privé vous accueille à l'aéroport de Nice et assure votre transfert jusqu'à Antibes en 25 minutes environ. Il vous dépose à votre hôtel, à Juan-les-Pins, au Cap d'Antibes ou à Port Vauban.",
    heroImageSrc: transferPages["antibes-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Antibes, une Mercedes noire près des remparts",
    introTitle: "À quelques minutes de l'aéroport, par la côte",
    introDescription:
      "Antibes, l'une des grandes villes les plus proches de l'aéroport, se rejoint en un transfert court et simple. Accueil à votre vol et dépose à votre porte.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons le vol, vous accueillons aux arrivées avec une pancarte à votre nom, prenons les bagages et vous conduisons à la voiture pour le court trajet jusqu'à Antibes.",
        theme: "dark",
      },
      {
        title: "Antibes et le Cap",
        text: "Nous assurons vos transferts vers la vieille ville, les plages de Juan-les-Pins, les villas du Cap d'Antibes et les yachts de Port Vauban.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les arrivées à Antibes",
    audienceDescription:
      "Pensé pour les arrivées à Antibes, Juan-les-Pins et au Cap d'Antibes, où un transfert rapide et soigné lance bien le séjour.",
    audienceCards: [
      {
        title: "Hôtels et villas",
        text: "Arrivée directe aux hôtels et villas du Cap d'Antibes et sur le front de mer de Juan-les-Pins, bagages pris en charge.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels d'Antibes",
      },
      {
        title: "Yachts à Port Vauban",
        text: "Un transfert simple pour les invités et les équipages qui rejoignent un yacht à Port Vauban, le plus grand port de plaisance d'Europe.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des yachts de Port Vauban",
      },
      {
        title: "Jazz et événements",
        text: "Des arrivées fiables pour le festival Jazz à Juan et les événements de la côte d'Antibes.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des événements d'Antibes",
      },
    ],
    ...localLinks,
    cta: {
      title: "Besoin d'un transfert pour Antibes ?",
      description:
        "Envoyez-nous les détails de votre arrivée ou de votre départ : nous organisons la voiture et le chauffeur qui conviennent, de l'aéroport de Nice à Antibes.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Antibes ?",
        answer:
          "Le trajet dure environ 25 minutes quand la route est dégagée. Antibes est l'une des grandes villes les plus proches de l'aéroport de Nice.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Antibes ?",
        answer: `Comptez à partir de ${eur(E_CLASS.prices.antibes.transfer)} environ en Mercedes Classe E, ou ${eur(V_CLASS.prices.antibes.transfer)} en Classe V. C'est un prix fixe, annoncé à l'avance, sans compteur.`,
      },
      {
        question: "Pouvez-vous me conduire au Cap d'Antibes ou à Juan-les-Pins ?",
        answer:
          "Oui. Nous vous déposons directement aux hôtels et villas du Cap d'Antibes et sur le front de mer de Juan-les-Pins, bagages pris en charge.",
      },
      {
        question: "Pouvez-vous me conduire jusqu'à un yacht à Port Vauban ?",
        answer:
          "Oui. Nous conduisons les invités et les équipages jusqu'au quai de Port Vauban, le plus grand port de plaisance d'Europe, en nous coordonnant avec l'équipage si besoin.",
      },
      {
        question: "Proposez-vous le transfert retour vers l'aéroport de Nice ?",
        answer:
          "Oui. Beaucoup de clients réservent l'arrivée et le départ en même temps, pour être tranquilles du début à la fin de leur séjour à Antibes.",
      },
    ],
  },

  "transfert-saint-jean-cap-ferrat": {
    slug: "transfert-saint-jean-cap-ferrat",
    path: "/fr/transfert-saint-jean-cap-ferrat",
    enPath: transferPages["saint-jean-cap-ferrat-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Saint-Jean-Cap-Ferrat | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Saint-Jean-Cap-Ferrat dès ${eur(startingPrice("cap-ferrat", "mercedes-e"))} à prix fixe, avec accueil aux arrivées, jusqu'aux villas, hôtels et yachts.`,
      keywords: [
        "transfert Saint-Jean-Cap-Ferrat",
        "chauffeur privé Cap-Ferrat",
        "aéroport de Nice à Cap-Ferrat",
        "transfert villa Cap-Ferrat",
        "transfert privé Cap-Ferrat",
      ],
    },
    serviceLabel: "Transfert Saint-Jean-Cap-Ferrat",
    heroTitle: "Transfert de l'aéroport de Nice au Cap-Ferrat",
    heroDescription:
      "Votre chauffeur privé vous accueille à l'aéroport de Nice et vous conduit à Saint-Jean-Cap-Ferrat en 25 minutes environ, jusqu'aux villas, aux hôtels et aux yachts de la presqu'île.",
    heroImageSrc: transferPages["saint-jean-cap-ferrat-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers le Cap-Ferrat, une Mercedes noire parmi les villas",
    introTitle: "La presqu'île discrète",
    introDescription:
      "Saint-Jean-Cap-Ferrat est une presqu'île calme et résidentielle à l'est de Nice, avec ses villas protégées par des portails, quelques hôtels et des yachts au mouillage dans ses baies. Votre chauffeur vous dépose jusqu'au portail, et peut rester à votre disposition à l'heure pendant votre séjour.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons le vol, vous accueillons aux arrivées avec une pancarte à votre nom, prenons les bagages et vous conduisons par la côte jusqu'à la presqu'île.",
        theme: "dark",
      },
      {
        title: "Villas, hôtels et yachts",
        text: "Nous vous conduisons discrètement au Grand-Hôtel du Cap-Ferrat, dans les villas privées et jusqu'aux yachts au mouillage dans les baies.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe le transfert de l'aéroport de Nice au Cap-Ferrat",
      paragraphs: [
        "Saint-Jean-Cap-Ferrat se trouve à **25 minutes environ** à l'est de l'aéroport Nice Côte d'Azur, par la côte en passant par Villefranche. Votre chauffeur vous accueille aux arrivées, prend vos bagages et vous conduit à votre villa, à votre hôtel ou au port.",
        `Un transfert coûte à partir de ${eur(startingPrice("cap-ferrat", "mercedes-e"))} en Mercedes Classe E ou ${eur(startingPrice("cap-ferrat", "mercedes-v"))} en Classe V, qui accueille jusqu'à ${V_CLASS.passengers} passagers, et le prix est fixé à la réservation. Votre chauffeur suit votre vol et attend jusqu'à une heure après l'heure de prise en charge, sans supplément.`,
        `Sur la presqu'île, les routes sont calmes et résidentielles, et serpentent entre les propriétés bordées de haies jusqu'au port et aux plages. Pour un yacht au mouillage, nous retrouvons son annexe au quai et convenons de l'horaire avec l'équipage. Pendant votre séjour, vous pouvez aussi réserver un chauffeur à l'heure, à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Classe E.`,
      ],
    },
    audienceTitle: "Idéal pour",
    audienceAccent: "les séjours au Cap-Ferrat",
    audienceDescription:
      "Un chauffeur pour les arrivées sur la presqu'île du Cap-Ferrat : villas privées, hôtels et yachts.",
    audienceCards: [
      {
        title: "Villas et domaines",
        text: "Un transfert discret jusqu'aux villas privées et aux domaines fermés de la presqu'île, bagages pris en charge, en toute simplicité.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des villas du Cap-Ferrat",
      },
      {
        title: "Palaces",
        text: "Arrivée directe au Grand-Hôtel du Cap-Ferrat et dans les hôtels de la presqu'île qui surplombent la mer.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des hôtels du Cap-Ferrat",
      },
      {
        title: "Yachts et annexes",
        text: "Une voiture pour rejoindre un yacht au mouillage ou son annexe au quai, en coordination avec l'équipage.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des yachts du Cap-Ferrat",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert de l'aéroport de Nice au Cap-Ferrat",
      description:
        "Envoyez-nous votre vol et votre adresse sur la presqu'île : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice au Cap-Ferrat ?",
        answer:
          "Environ 25 minutes vers l'est par la côte, en passant par Villefranche, jusqu'à la presqu'île de Saint-Jean-Cap-Ferrat.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport de Nice au Cap-Ferrat ?",
        answer: `À partir de ${eur(startingPrice("cap-ferrat", "mercedes-e"))} en Mercedes Classe E ou ${eur(startingPrice("cap-ferrat", "mercedes-v"))} en Classe V, à prix fixe avant la réservation.`,
      },
      {
        question: "Pouvez-vous me déposer dans une villa privée du Cap-Ferrat ?",
        answer:
          "Oui. Nous vous conduisons en toute discrétion jusqu'aux villas, aux domaines fermés et aux hôtels de la presqu'île, bagages pris en charge.",
      },
      {
        question: "Pouvez-vous rejoindre un yacht au Cap-Ferrat ?",
        answer:
          "Oui. Nous pouvons rejoindre un yacht au mouillage ou son annexe au quai, en nous coordonnant avec l'équipage pour l'horaire et l'accès.",
      },
      {
        question: "Puis-je réserver un chauffeur privé à l'heure au Cap-Ferrat ?",
        answer: `Oui. À partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E, ou ${eur(E_CLASS.prices.nice.fullDay)} la journée complète, votre chauffeur vous emmène dîner, à la plage, à Monaco ou à Nice, et vous attend sur place.`,
      },
      {
        question: "Pouvez-vous me ramener du Cap-Ferrat à l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre villa, à votre hôtel ou au port et vous déposons à votre terminal.",
      },
    ],
  },

  "transfert-eze": {
    slug: "transfert-eze",
    path: "/fr/transfert-eze",
    enPath: transferPages["eze-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Èze | Chauffeur privé | Kokolimo",
      description: `Transfert privé de l'aéroport de Nice à Èze dès ${eur(startingPrice("eze"))} environ, à prix fixe : chauffeur par la Moyenne Corniche jusqu'au village perché et ses hôtels.`,
      keywords: [
        "transfert Èze",
        "aéroport de Nice à Èze",
        "chauffeur privé Èze",
        "transfert Èze village",
        "transfert privé Èze",
      ],
    },
    serviceLabel: "Transfert Èze",
    heroTitle: "Transfert de l'aéroport de Nice à Èze",
    heroDescription:
      "Votre chauffeur privé vous accueille à l'aéroport de Nice et vous conduit par la Moyenne Corniche jusqu'à Èze en 25 à 30 minutes environ, à l'entrée du village piéton, de ses hôtels et de ses restaurants.",
    heroImageSrc: transferPages["eze-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Èze, une Mercedes noire sur la corniche",
    introTitle: "Jusqu'au village perché",
    introDescription:
      "Èze domine la corniche entre Nice et Monaco, et son village médiéval est fermé aux voitures. Votre chauffeur vous dépose à l'entrée du village, où les hôtels prennent en charge vos bagages dans les ruelles. À l'heure, le même chauffeur peut rester avec vous pour un dîner ou une balade le long des corniches.",
    panels: [
      {
        title: "Par la corniche",
        text: "Nous vous accueillons à votre vol et montons par la Moyenne Corniche, l'une des plus belles routes de la côte, jusqu'à l'entrée du village médiéval.",
        theme: "dark",
      },
      {
        title: "Un village sans voitures",
        text: "Le village d'Èze est piéton : nous vous déposons donc à son entrée, où les hôtels prennent en charge les bagages dans les ruelles.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe le transfert de l'aéroport de Nice à Èze",
      paragraphs: [
        "Èze se trouve à **25 à 30 minutes environ** de l'aéroport Nice Côte d'Azur, par la Moyenne Corniche en direction de Monaco. Votre chauffeur vous accueille aux arrivées, prend vos bagages et vous conduit jusqu'à l'entrée du village.",
        `Le village médiéval est fermé aux voitures : toutes s'arrêtent à son entrée, et les hôtels, comme le Château de la Chèvre d'Or, prennent en charge vos bagages dans les ruelles. Un transfert depuis l'aéroport coûte à partir de ${eur(startingPrice("eze"))} environ, à prix fixe annoncé avant la réservation. Une heure d'attente est incluse à partir de l'heure de prise en charge.`,
        `Monaco est à quelques minutes d'Èze. Le même chauffeur peut ensuite vous emmener à Monte-Carlo, le long des corniches ou dîner sur la côte. Pour une soirée ou une journée entière, vous pouvez réserver un chauffeur privé à l'heure, à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E.`,
      ],
    },
    audienceTitle: "Idéal pour",
    audienceAccent: "les séjours à Èze",
    audienceDescription:
      "Pensé pour les arrivées à Èze, où le village perché et fermé aux voitures rend le chauffeur jusqu'à l'entrée le plus simple.",
    audienceCards: [
      {
        title: "Hôtels sur la falaise",
        text: "Arrivées au Château de la Chèvre d'Or et dans les hôtels d'Èze, dépose à l'entrée du village, bagages organisés.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des hôtels d'Èze",
      },
      {
        title: "Gastronomie",
        text: "Un chauffeur pour les tables étoilées Michelin d'Èze : profitez du vin et de la vue, et laissez la corniche à votre chauffeur.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des restaurants d'Èze",
      },
      {
        title: "Corniches et Monaco",
        text: "Gardez votre chauffeur à l'heure pour relier Èze à Monaco, à quelques minutes, et aux trois corniches.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des corniches d'Èze",
      },
    ],
    ...localLinks,
    cta: {
      title: "Réservez votre transfert de l'aéroport de Nice à Èze",
      description:
        "Envoyez-nous votre vol et votre hôtel à Èze : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Èze ?",
        answer:
          "Le trajet dure 25 à 30 minutes environ par la Moyenne Corniche, entre Nice et Monaco, jusqu'à l'entrée du village.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Èze ?",
        answer: `Le transfert depuis l'aéroport de Nice coûte à partir de ${eur(startingPrice("eze"))} environ. C'est un prix fixe, annoncé avant la réservation, sans compteur.`,
      },
      {
        question: "Peut-on accéder au village d'Èze en voiture ?",
        answer:
          "Le village médiéval est fermé aux voitures : votre chauffeur vous dépose à l'entrée du village, où les hôtels prennent en charge les bagages dans les ruelles.",
      },
      {
        question: "Pouvez-vous relier Èze à Monaco ?",
        answer:
          "Oui. Monaco est à quelques minutes, et un chauffeur privé relie Èze aux corniches et à la côte pour vos dîners et vos excursions à la journée.",
      },
      {
        question: "Puis-je réserver un chauffeur privé à l'heure à Èze ?",
        answer: `Oui. Votre chauffeur reste avec vous pour un dîner au village, une balade le long des corniches ou une soirée à Monaco. Comptez à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E, ou ${eur(E_CLASS.prices.nice.fullDay)} la journée complète.`,
      },
      {
        question: "Que comprend votre service de chauffeur à Èze ?",
        answer: `Il comprend le transfert de l'aéroport de Nice jusqu'à l'entrée du village, à partir de ${eur(startingPrice("eze"))} environ, à un prix fixé avant la réservation. Un chauffeur à l'heure, dès ${eur(E_CLASS.prices.nice.hourly)}, peut aussi vous emmener dîner au village, sur les corniches ou à Monaco pour la soirée.`,
      },
      {
        question: "Pouvez-vous me ramener d'Èze à l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à l'entrée du village ou à votre hôtel et vous ramenons à votre terminal.",
      },
    ],
  },

  "transfert-villefranche-sur-mer": {
    slug: "transfert-villefranche-sur-mer",
    path: "/fr/transfert-villefranche-sur-mer",
    enPath: transferPages["villefranche-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Villefranche-sur-Mer | Kokolimo",
      description:
        "Transfert privé de l'aéroport de Nice à Villefranche-sur-Mer en 20 minutes environ, à prix fixe, avec accueil aux arrivées et une heure d'attente incluse.",
      keywords: [
        "transfert Villefranche-sur-Mer",
        "aéroport de Nice à Villefranche-sur-Mer",
        "chauffeur privé Villefranche-sur-Mer",
        "transfert croisière Villefranche-sur-Mer",
        "transfert privé Villefranche",
      ],
    },
    serviceLabel: "Transfert Villefranche-sur-Mer",
    heroTitle: "Transfert de l'aéroport de Nice à Villefranche",
    heroDescription:
      "Votre chauffeur privé vous accueille à l'aéroport de Nice et assure votre transfert jusqu'à Villefranche-sur-Mer en 20 minutes environ. Il vous dépose dans la vieille ville, à votre hôtel ou au quai des navettes de croisière, à prix fixe confirmé avant la réservation.",
    heroImageSrc: transferPages["villefranche-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Villefranche, une Mercedes noire au-dessus de la rade",
    introTitle: "À quelques minutes de la rade",
    introDescription:
      "Villefranche, l'une des villes les plus proches de l'aéroport, et sa rade profonde et abritée se rejoignent en un court transfert panoramique le long de la côte. Pendant votre séjour, le même chauffeur peut aussi rester à votre disposition à l'heure.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons votre vol et vous accueillons aux arrivées avec une pancarte à votre nom. Nous prenons vos bagages et partons vers l'est pour le court trajet jusqu'à Villefranche. Une heure d'attente est incluse à partir de l'heure de prise en charge.",
        theme: "dark",
      },
      {
        title: "Vieille ville et port de croisière",
        text: "Nous vous déposons dans la vieille ville aux façades pastel ou à votre hôtel et assurons vos transferts vers et depuis le quai des navettes de croisière, dans la rade.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les arrivées à Villefranche",
    audienceDescription:
      "Pensé pour les arrivées à Villefranche, des séjours à l'hôtel aux escales de croisière et aux yachts au mouillage dans la rade.",
    audienceCards: [
      {
        title: "Passagers de croisière",
        text: "Transferts entre le quai des navettes, votre hôtel et l'aéroport de Nice, et excursions à la journée à Nice, Monaco et Èze pour les passagers de croisière.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des croisières à Villefranche",
      },
      {
        title: "Hôtels et vieille ville",
        text: "Arrivée directe aux hôtels du bord de mer et dans la vieille ville aux façades pastel, bagages pris en charge, sans attente.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels de Villefranche",
      },
      {
        title: "Yachts au mouillage",
        text: "Une voiture pour retrouver l'annexe au quai, pour les yachts au mouillage dans la rade de Villefranche.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des yachts de Villefranche",
      },
    ],
    ...localLinks,
    cta: {
      title: "Besoin d'un transfert pour Villefranche ?",
      description:
        "Envoyez-nous votre vol ou les détails de votre croisière, le nombre de passagers et votre adresse à Villefranche-sur-Mer : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Villefranche ?",
        answer:
          "Le trajet dure environ 20 minutes vers l'est par la côte. Villefranche-sur-Mer est l'une des villes les plus proches de l'aéroport.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Villefranche ?",
        answer: `Le prix depuis l'aéroport de Nice est fixe et confirmé avant la réservation, sans compteur, avec une heure d'attente incluse. Il dépend de la voiture : la Classe E, la Classe S et la Maybach accueillent jusqu'à ${E_CLASS.passengers} passagers, le van Classe V jusqu'à ${V_CLASS.passengers} avec leurs bagages. Envoyez-nous votre vol et votre adresse à Villefranche-sur-Mer pour recevoir votre devis.`,
      },
      {
        question: "Proposez-vous des transferts depuis le port de croisière de Villefranche-sur-Mer ?",
        answer: `Oui. Votre chauffeur vous attend au quai des navettes du port de croisière. Il vous conduit à l'aéroport de Nice, à votre hôtel ou en excursion sur mesure à Nice, Monaco et Èze. Pour une excursion, comptez à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée en Mercedes Classe E, avec un retour à temps pour remonter à bord. Envoyez-nous la date de l'escale et vos horaires : nous confirmons la voiture et le prix fixe avant la réservation.`,
      },
      {
        question: "Pouvez-vous rejoindre un yacht dans la rade de Villefranche ?",
        answer:
          "Oui. Nous pouvons retrouver l'annexe au quai pour les yachts au mouillage dans la rade, en coordination avec l'équipage.",
      },
      {
        question: "Puis-je réserver un chauffeur privé à l'heure à Villefranche-sur-Mer ?",
        answer: `Oui. Votre chauffeur reste avec vous pour un dîner dans la vieille ville ou une journée à Nice, à Monaco ou à Èze. Comptez à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E, ou ${eur(E_CLASS.prices.nice.fullDay)} la journée complète. La réservation est de quatre heures minimum.`,
      },
      {
        question: "Que comprend votre service de chauffeur privé à Villefranche-sur-Mer ?",
        answer: `Il comprend le transfert de l'aéroport de Nice en 20 minutes environ, à prix fixe confirmé avant la réservation, avec accueil aux arrivées, suivi du vol et une heure d'attente incluse. Il comprend aussi les trajets vers et depuis le port de croisière, et un chauffeur à l'heure dès ${eur(E_CLASS.prices.nice.hourly)} pour la vieille ville, Nice, Monaco ou Èze.`,
      },
      {
        question: "Proposez-vous le transfert retour vers l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel, dans la vieille ville ou au quai et vous déposons à votre terminal, 24 h/24, 7 j/7. Beaucoup de clients réservent l'arrivée et le départ en même temps. L'annulation est gratuite jusqu'à cinq jours avant la prise en charge.",
      },
    ],
  },

  "transfert-menton": {
    slug: "transfert-menton",
    path: "/fr/transfert-menton",
    enPath: transferPages["menton-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert aéroport Nice Menton | Chauffeur privé | Kokolimo",
      description:
        "Transfert privé de l'aéroport de Nice à Menton en 40 minutes environ, à prix fixe, avec accueil aux arrivées, suivi du vol et une heure d'attente incluse.",
      keywords: [
        "transfert Menton",
        "aéroport de Nice à Menton",
        "chauffeur privé Menton",
        "transfert privé Menton",
        "transfert Menton frontière italienne",
      ],
    },
    serviceLabel: "Transfert Menton",
    heroTitle: "Transfert de l'aéroport de Nice à Menton",
    heroDescription:
      "Votre chauffeur privé vous accueille à l'aéroport de Nice et assure votre transfert jusqu'à Menton en 40 minutes environ, vers l'est en passant par Monaco. Il vous dépose dans la vieille ville, aux jardins ou sur le front de mer, à prix fixe confirmé avant la réservation.",
    heroImageSrc: transferPages["menton-transfer"].heroImageSrc,
    heroImageAlt: "Transfert avec chauffeur privé vers Menton, une Mercedes noire sur le front de mer",
    introTitle: "Aux portes de l'Italie",
    introDescription:
      "Menton se trouve à l'extrémité est de la côte, à la frontière italienne : un trajet panoramique au-delà de Monaco, plus simple de porte à porte. Pendant votre séjour, le même chauffeur peut aussi rester à votre disposition à l'heure.",
    panels: [
      {
        title: "Accueil à votre vol",
        text: "Nous suivons le vol, vous accueillons aux arrivées avec une pancarte à votre nom, prenons les bagages et vous conduisons vers l'est le long de la côte, en passant par Monaco. Une heure d'attente est incluse à partir de l'heure de prise en charge.",
        theme: "dark",
      },
      {
        title: "Vieille ville et jardins",
        text: "Menton est la ville la plus chaude de la côte. Nous vous conduisons dans sa vieille ville à l'italienne, jusqu'à ses célèbres jardins ou dans les hôtels de son front de mer.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les séjours à Menton",
    audienceDescription:
      "Pensé pour les arrivées à Menton et à l'extrémité est de la côte, où le trajet au-delà de Monaco mérite un transfert confortable.",
    audienceCards: [
      {
        title: "Hôtels et vieille ville",
        text: "Arrivée directe aux hôtels du front de mer et dans la vieille ville à l'italienne aux façades pastel, bagages pris en charge.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels de Menton",
      },
      {
        title: "Jardins et Fête du Citron",
        text: "Transferts vers les célèbres jardins et pour la Fête du Citron, chaque année en février.",
        icon: "/assets/icons/services/museum.webp",
        iconAlt: "Icône des jardins de Menton",
      },
      {
        title: "L'Italie et la frontière",
        text: "Un chauffeur pour poursuivre votre route de l'autre côté de la frontière italienne toute proche, jusqu'à Vintimille et la Riviera dei Fiori.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de la frontière à Menton",
      },
    ],
    ...localLinks,
    cta: {
      title: "Besoin d'un transfert pour Menton ?",
      description:
        "Envoyez-nous votre vol, le nombre de passagers et votre adresse à Menton : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Combien de temps dure le trajet de l'aéroport de Nice à Menton ?",
        answer:
          "Le trajet dure environ 40 minutes vers l'est le long de la côte, en passant par Monaco. Menton se trouve à l'extrémité est de la Côte d'Azur.",
      },
      {
        question: "Combien coûte un transfert de l'aéroport de Nice à Menton ?",
        answer: `Le prix depuis l'aéroport de Nice est fixe et confirmé avant la réservation, sans compteur, avec une heure d'attente incluse. Il dépend de la voiture : la Classe E, la Classe S et la Maybach accueillent jusqu'à ${E_CLASS.passengers} passagers, le van Classe V jusqu'à ${V_CLASS.passengers} avec leurs bagages. Envoyez-nous votre vol et votre adresse à Menton pour recevoir votre devis.`,
      },
      {
        question: "Proposez-vous des transferts pour la Fête du Citron ?",
        answer:
          "Oui. Nous assurons des transferts vers Menton pour la Fête du Citron, chaque année en février : nous vous déposons dans le centre et revenons vous chercher ensuite.",
      },
      {
        question: "Peut-on passer en Italie depuis Menton ?",
        answer: `Oui. Menton est à la frontière italienne, et nous pouvons organiser la suite de votre trajet jusqu'à Vintimille et la Riviera dei Fiori toute proche. Sanremo est à une heure environ de l'aéroport de Nice, et le trajet coûte à partir de ${eur(startingPrice("sanremo", "mercedes-e"))} en Mercedes Classe E.`,
      },
      {
        question: "Puis-je réserver un chauffeur privé à l'heure à Menton ?",
        answer: `Oui. Votre chauffeur reste avec vous pour la Fête du Citron, une soirée à Monaco ou une journée jusqu'à Vintimille et la Riviera dei Fiori. Comptez à partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E, ou ${eur(E_CLASS.prices.nice.fullDay)} la journée complète. La réservation est de quatre heures minimum.`,
      },
      {
        question: "Que comprend votre service de chauffeur privé à Menton ?",
        answer: `Il comprend le transfert de l'aéroport de Nice en 40 minutes environ en passant par Monaco, à prix fixe confirmé avant la réservation, avec accueil aux arrivées, suivi du vol et une heure d'attente incluse. Il comprend aussi un chauffeur à l'heure dès ${eur(E_CLASS.prices.nice.hourly)} pour Menton, Monaco ou la Riviera italienne.`,
      },
      {
        question: "Proposez-vous le transfert retour vers l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel ou à votre adresse à Menton et vous déposons à votre terminal, 24 h/24, 7 j/7. Beaucoup de clients réservent l'arrivée et le départ en même temps. L'annulation est gratuite jusqu'à cinq jours avant la prise en charge.",
      },
    ],
  },

  "transfert-longue-distance": {
    slug: "transfert-longue-distance",
    path: "/fr/transfert-longue-distance",
    enPath: transferPages["long-distance-transfer"].path,
    locale: "fr",
    metadata: {
      title: "Transfert longue distance | Chauffeur privé | Kokolimo",
      description:
        "Transferts privés longue distance depuis Nice, Monaco et la Côte d'Azur vers les villes, stations, villas et aéroports, à prix fixe confirmé à l'avance.",
      keywords: [
        "transfert longue distance Côte d'Azur",
        "chauffeur privé longue distance",
        "chauffeur privé Nice Milan",
        "transfert longue distance Monaco",
        "transfert privé sud de la France",
      ],
    },
    serviceLabel: "Transfert longue distance",
    heroTitle: "Transferts privés longue distance depuis la Côte d'Azur",
    heroDescription:
      "Pour vos longs trajets depuis Nice, Monaco et la Côte d'Azur, votre chauffeur privé vous conduit à Courchevel, Megève et Chamonix en hiver, à Milan et dans le reste de l'Italie, en Suisse ou vers d'autres villes et aéroports. Le prix est fixé avant le voyage.",
    heroImageSrc: transferPages["long-distance-transfer"].heroImageSrc,
    heroImageAlt: "Transfert longue distance avec chauffeur privé",
    introTitle: "Un seul chauffeur, de porte à porte",
    introDescription:
      "Sur un long trajet, le même chauffeur vous conduit de votre porte à votre destination, s'arrête quand vous en avez besoin et a de la place pour vos bagages.",
    panels: [
      {
        title: "Au-delà de la côte",
        text: "En hiver, nous vous conduisons à Courchevel, Megève et Chamonix. Nous passons aussi la frontière vers l'Italie et la Suisse, et desservons d'autres villes, stations et aéroports.",
        theme: "dark",
      },
      {
        title: "Des arrêts à votre rythme",
        text: "Les arrêts pour un repas, un rendez-vous ou une visite sont prévus avec vous avant le trajet, et le prix est fixé avant la réservation.",
        theme: "light",
      },
    ],
    bookingReasons: true,
    story: {
      title: "Comment se passe un transfert longue distance",
      paragraphs: [
        "Un transfert longue distance couvre les trajets d'une heure ou plus depuis la Côte d'Azur : vers les stations de ski des Alpes, de l'autre côté de la frontière en Italie ou en Suisse, ou vers une autre ville ou un autre aéroport. Le même chauffeur vous conduit de porte à porte en Mercedes.",
        `Voici quelques trajets courants depuis l'aéroport de Nice. Sanremo, de l'autre côté de la frontière italienne, est à **une heure environ**, à partir de ${eur(startingPrice("sanremo", "mercedes-e"))} en Classe E. Isola 2000, la station de ski la plus proche de la côte, est à 1 h 45 à 2 heures par la vallée de la Tinée, à partir de ${eur(startingPrice("isola-2000"))} environ. Milan est à environ quatre heures, et Courchevel, Megève et Chamonix à cinq à six heures environ, selon l'itinéraire, la circulation et la neige.`,
        `Pour les trajets plus longs, le prix dépend de la distance et de la voiture, et il est **fixé avant la réservation**, sans compteur. Le van Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec leurs bagages et leur équipement de ski, et nos voitures sont équipées pour les routes de montagne en hiver ; la Classe E et la Classe S accueillent jusqu'à ${E_CLASS.passengers} passagers.`,
        "Indiquez-nous votre point de départ et votre destination, la date, le nombre de passagers et de bagages, et les arrêts souhaités en route. Nous confirmons l'itinéraire, la voiture et le prix avant le trajet.",
      ],
    },
    audienceTitle: "Pensé pour",
    audienceAccent: "les longs trajets",
    audienceDescription:
      "Pour les trajets de plusieurs heures, avec un seul chauffeur, une seule voiture et aucun changement en route.",
    audienceCards: [
      {
        title: "D'une ville à l'autre",
        text: "Entre la Côte d'Azur et d'autres villes de France, d'Italie et de Suisse.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des trajets entre villes",
      },
      {
        title: "Séjours de loisirs",
        text: "Vers les stations de ski, les villas et les hôtels plus éloignés, avec tous les bagages dans la voiture.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des trajets de loisirs",
      },
      {
        title: "Voyages d'affaires",
        text: "Pour les voyageurs d'affaires qui préfèrent passer le trajet dans une voiture calme plutôt que de changer de transport en route.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des trajets d'affaires",
      },
    ],
    ...localLinks,
    cta: {
      title: "Organisez votre transfert longue distance",
      description:
        "Envoyez-nous l'itinéraire (de Nice à Milan ou à Courchevel, par exemple), la date et le nombre de passagers : nous confirmons la voiture et le prix fixe avant votre voyage.",
      buttonText: "Obtenir mon devis",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Qu'appelle-t-on un transfert longue distance ?",
        answer:
          "Il s'agit de tout trajet de plusieurs heures depuis la Côte d'Azur, vers les Alpes, l'Italie ou la Suisse, ou vers une autre ville, une station ou un aéroport.",
      },
      {
        question: "Faites-vous le trajet de Nice à Courchevel et aux autres stations de ski ?",
        answer: `Oui. Courchevel, Megève et Chamonix sont à cinq à six heures environ de l'aéroport de Nice par la route, selon l'itinéraire, la circulation et la neige ; Isola 2000, la station la plus proche, est à 1 h 45 à 2 heures. Nos voitures sont équipées pour les routes de montagne en hiver, et le van Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec leurs skis et leurs bagages.`,
      },
      {
        question: "Pouvez-vous passer la frontière vers l'Italie ou la Suisse ?",
        answer: `Oui. Sanremo est à une heure environ de l'aéroport de Nice, et le trajet coûte à partir de ${eur(startingPrice("sanremo", "mercedes-e"))} en Mercedes Classe E. Milan est à environ quatre heures. Nous allons aussi en Suisse et dans d'autres pays proches, à un prix fixé avant la réservation.`,
      },
      {
        question: "Pouvons-nous nous arrêter en route ?",
        answer:
          "Oui. Les arrêts pour un repas, un rendez-vous ou une visite sont prévus avec vous avant le trajet.",
      },
      {
        question: "Quelle voiture choisir pour un transfert longue distance ?",
        answer: `Le van Classe V accueille jusqu'à ${V_CLASS.passengers} passagers avec beaucoup de bagages. La Classe S et la Maybach accueillent jusqu'à ${S_CLASS.passengers} passagers dans le plus grand confort.`,
      },
      {
        question: "Combien coûte un transfert longue distance ?",
        answer: `Cela dépend de la distance et de la voiture, et nous fixons le prix avant la réservation, sans compteur. À titre indicatif, Sanremo est à partir de ${eur(startingPrice("sanremo", "mercedes-e"))} en Classe E et Isola 2000 à partir de ${eur(startingPrice("isola-2000"))} environ.`,
      },
      {
        question: "Puis-je aussi réserver le trajet retour ?",
        answer:
          "Oui. Beaucoup de clients réservent l'aller et le retour en même temps.",
      },
    ],
  },
});
