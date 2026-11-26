// The French versions of the seven private tour pages (Nice, Cannes, Monaco, Saint-Tropez, Megève, Courchevel,
// Chamonix), served at /fr/<slug> with the service page template. Each page names its English original (enPath) and
// uses its photos. The starting prices (each car by the hour, the Classe E for a full day) are read from the price list
// (data/vehicles.tsx) through fr-helpers.ts, from the area the English tour pages read them from (Nice: the rates are
// the same in every area); each page states them in its hero and where it names the cars.

import { chauffeurTourPages, type ServicePageConfig, type ServiceCardLink } from "../service-pages";
import { eur, E_CLASS, V_CLASS, S_CLASS, MAYBACH, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

/** Starting prices of a tour in a Mercedes Classe E: by the hour and for a full day. */
const HOURLY = eur(E_CLASS.prices.nice.hourly);
const FULL_DAY = eur(E_CLASS.prices.nice.fullDay);

/** The sentence that ends each hero: the Classe E starting prices. */
const PRICE_LINE = `L'excursion en Mercedes Classe E coûte à partir de ${HOURLY} de l'heure, ou ${FULL_DAY} la journée.`;

/** The answer on vehicles: each car's seats and hourly starting price; `vClass` says what the van suits. */
const vehiclesAnswer = (vClass: string) =>
  `La Mercedes Classe E accueille jusqu'à ${E_CLASS.passengers} passagers et coûte à partir de ${HOURLY} de l'heure. La Classe S, dès ${eur(S_CLASS.prices.nice.hourly)} de l'heure, convient aux voyages d'affaires et aux clients VIP ; le van Classe V, dès ${eur(V_CLASS.prices.nice.hourly)} de l'heure, accueille jusqu'à ${V_CLASS.passengers} passagers ${vClass}. La Maybach est proposée dès ${eur(MAYBACH.prices.nice.hourly)} de l'heure.`;
const VEHICLES_RIVIERA = vehiclesAnswer("et convient aux familles et aux petits groupes");
const VEHICLES_ALPS = vehiclesAnswer("avec leurs skis et leurs bagages");

/** The tour pages of the other destinations (the French version of tourCityLinks). */
const tourCityLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/private-tours/nice"),
    label: "Nice",
    description: "Vieux-Nice, points de vue sur la côte, marchés et escapades aux alentours.",
  },
  {
    href: frLink("/our-services/private-tours/cannes"),
    label: "Cannes",
    description: "Balade sur les boulevards, arrêts shopping et routes du bord de mer.",
  },
  {
    href: frLink("/our-services/private-tours/monaco"),
    label: "Monaco",
    description: "Le Rocher et le palais princier, Monte-Carlo et son casino, la Moyenne Corniche.",
  },
  {
    href: frLink("/our-services/private-tours/saint-tropez"),
    label: "Saint-Tropez",
    description: "Le vieux port, la citadelle, la plage de Pampelonne et les villages perchés de Ramatuelle et Gassin.",
  },
  {
    href: frLink("/our-services/private-tours/megeve"),
    label: "Megève",
    description: "Le village et ses calèches, Combloux, Saint-Gervais, et Chamonix ou Annecy dans la journée.",
  },
  {
    href: frLink("/our-services/private-tours/courchevel"),
    label: "Courchevel",
    description: "Les quatre villages de la station, Méribel et Val Thorens par la route, Annecy pour une longue journée.",
  },
  {
    href: frLink("/our-services/private-tours/chamonix"),
    label: "Chamonix",
    description: "L'Aiguille du Midi, la Mer de Glace, les villages de la vallée et Courmayeur par le tunnel du Mont-Blanc.",
  },
];

export const tourPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "excursion-privee-nice": {
    slug: "excursion-privee-nice",
    path: "/fr/excursion-privee-nice",
    enPath: chauffeurTourPages.nice.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Nice | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Nice avec chauffeur dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : la ville, les points de vue sur la côte et des arrêts dans le Vieux-Nice.`,
      keywords: [
        "excursion privée Nice",
        "excursion avec chauffeur Nice",
        "visite privée de Nice avec chauffeur",
        "excursion Vieux-Nice",
        "excursion de luxe Nice",
      ],
    },
    serviceLabel: "Excursion à Nice",
    heroTitle: "Excursion privée à Nice",
    heroDescription:
      `Lors d'une excursion privée à Nice, votre chauffeur vous fait découvrir la ville, son bord de mer et ses points de vue, ou vous emmène pour la journée à Monaco, à Èze ou à Saint-Paul-de-Vence. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.nice.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Nice",
    introTitle: "Découvrir Nice à votre rythme",
    introDescription:
      "Nice se découvre le mieux en mêlant le charme du Vieux-Nice, le bord de mer et quelques arrêts choisis, sans avoir à vous occuper des trajets.",
    panels: [
      {
        title: "La ville et la côte",
        text: "Votre chauffeur vient vous chercher à l'hôtel. En une journée, vous découvrez l'ambiance du Vieux-Nice, les points de vue du bord de mer et les routes panoramiques des environs.",
        theme: "dark",
      },
      {
        title: "Le confort d'une excursion privée",
        text: "Une seule voiture haut de gamme, un seul chauffeur et un rythme posé plutôt que pressé pour découvrir Nice.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "découvrir Nice",
    audienceDescription:
      "Cet itinéraire convient aux voyageurs qui veulent découvrir Nice confortablement, sans s'occuper des trajets entre les points de vue et les arrêts en ville.",
    audienceCards: [
      {
        title: "Première visite",
        text: "Une première découverte de Nice, avec des trajets fluides et des arrêts bien répartis.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de première visite",
      },
      {
        title: "En couple",
        text: "Une façon confortable de parcourir à deux les routes panoramiques, de s'arrêter déjeuner et de voir les incontournables de la ville.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône couple",
      },
      {
        title: "Voyageurs en vacances",
        text: "Une journée détendue entre l'hôtel, les points de vue, la vieille ville à pied et la route du bord de mer.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône de voyageur en vacances",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Comparez nos excursions privées avec chauffeur dans les autres destinations de la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Organisez votre excursion à Nice avec chauffeur",
      description:
        "Nous construisons la journée autour de la prise en charge à votre hôtel, des visites qui vous intéressent, de l'heure du déjeuner et du rythme souhaité.",
      buttonText: "Réserver l'excursion à Nice",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Comment réserver une excursion privée à Nice ?",
        answer:
          "Vous réservez votre excursion privée à Nice en nous contactant directement, par le site ou par téléphone : indiquez la date, l'adresse de prise en charge, le nombre de passagers et les étapes souhaitées. Nous confirmons la voiture et le prix fixe avant la réservation, et l'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      },
      {
        question: "Quels sont les horaires de l'excursion privée à Nice ?",
        answer:
          "Nos excursions privées à Nice sont possibles 24 h/24, 7 j/7 : votre chauffeur est disponible à l'heure qui vous convient.",
      },
      {
        question: "Quelles sont les excursions privées les plus demandées au départ de Nice ?",
        answer:
          "Au départ de Nice, les excursions privées les plus demandées vont à Monaco, Èze, Saint-Paul-de-Vence, Cannes, Antibes et au cap d'Antibes, ou suivent les routes panoramiques de la Côte d'Azur. La journée Monaco et Èze, d'environ 8 heures, commence par exemple à votre hôtel à Nice, et votre chauffeur reste à votre disposition jusqu'au retour. Chaque itinéraire s'adapte à vos envies et à votre emploi du temps.",
      },
      {
        question: "Puis-je personnaliser mon excursion privée au départ de Nice ?",
        answer:
          "Oui. Chaque excursion privée est entièrement personnalisable : vous choisissez les destinations, la durée, les visites, les restaurants, les quartiers commerçants et les points de vue qui vous conviennent.",
      },
      {
        question: "L'excursion peut-elle partir de mon hôtel ou de l'aéroport de Nice ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel, à votre villa, à votre yacht, au terminal de croisière ou directement à l'aéroport Nice Côte d'Azur : votre excursion commence là où vous êtes.",
      },
      {
        question: "Une excursion privée depuis Nice convient-elle pour une journée à Monaco ?",
        answer:
          "Oui. Monaco est l'une des destinations les plus demandées au départ de Nice. Une excursion privée vous permet de voir Monte-Carlo, Port Hercule, les abords du Palais princier, les boutiques de luxe et les points de vue panoramiques à votre rythme.",
      },
      {
        question: "Puis-je visiter plusieurs destinations dans la même journée ?",
        answer:
          "Oui. Beaucoup de clients associent Nice, Èze, Monaco, Antibes et Cannes dans la même journée. L'itinéraire reste modifiable pendant toute l'excursion.",
      },
      {
        question: "Les excursions privées conviennent-elles aux familles et aux petits groupes ?",
        answer:
          "Oui. Les excursions privées conviennent aux couples, aux familles et aux petits groupes qui cherchent le confort, l'intimité et une façon personnelle de découvrir la Côte d'Azur.",
      },
      {
        question: "L'excursion peut-elle inclure des restaurants, du shopping ou une dégustation de vins ?",
        answer:
          "Oui. Une excursion privée peut inclure des restaurants en bord de mer, des boutiques de luxe, les marchés locaux, des domaines viticoles et d'autres expériences selon vos envies.",
      },
      {
        question: "Quel véhicule choisir pour une excursion privée depuis Nice ?",
        answer: VEHICLES_RIVIERA,
      },
    ],
  },

  "excursion-privee-cannes": {
    slug: "excursion-privee-cannes",
    path: "/fr/excursion-privee-cannes",
    enPath: chauffeurTourPages.cannes.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Cannes | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Cannes avec chauffeur dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : la Croisette, les rues commerçantes et une balade en bord de mer.`,
      keywords: [
        "excursion privée Cannes",
        "excursion avec chauffeur Cannes",
        "chauffeur privé Croisette",
        "visite privée de Cannes",
        "journée à Cannes avec chauffeur",
      ],
    },
    serviceLabel: "Excursion à Cannes",
    heroTitle: "Excursion privée à Cannes",
    heroDescription:
      `Une journée à Cannes avec votre chauffeur privé : la Croisette, le front de mer et les boutiques, ou une excursion au départ de Cannes vers Antibes, Nice, Monaco, Saint-Paul-de-Vence ou Saint-Tropez. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.cannes.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Cannes",
    introTitle: "Cannes, une journée sur mesure",
    introDescription:
      "Cannes se savoure quand le shopping, la balade sur les boulevards, les routes panoramiques et les pauses à l'hôtel ou au restaurant tiennent dans un seul itinéraire.",
    panels: [
      {
        title: "L'esprit de la Croisette",
        text: "Nous organisons la journée dans les plus beaux quartiers de Cannes, entre le bord de mer et les boutiques, en tenant compte de l'heure du déjeuner et du retour à l'hôtel.",
        theme: "dark",
      },
      {
        title: "Des arrêts choisis",
        text: "Votre chauffeur vient vous chercher à l'hôtel et vous dépose sur les plus beaux sites de Cannes. Entre deux promenades à pied, vous profitez de la ville sans contrainte.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "profiter de Cannes",
    audienceDescription:
      "Pour les voyageurs qui veulent découvrir Cannes sans se presser, avec des arrêts pratiques pour les sites connus, le shopping et les restaurants.",
    audienceCards: [
      {
        title: "Séjours haut de gamme",
        text: "Un itinéraire confortable entre les hôtels, les boutiques, le déjeuner et la balade sur le boulevard le plus célèbre de Cannes.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône de séjour haut de gamme",
      },
      {
        title: "Invités d'un événement",
        text: "Une journée de visite pendant un séjour à Cannes, avant ou après vos rendez-vous professionnels.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône d'invité d'un événement",
      },
      {
        title: "En couple ou entre amis",
        text: "Une façon confortable de profiter de Cannes et de ses paysages, avec des arrêts selon vos envies du jour.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône couple et amis",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Comparez nos excursions privées avec chauffeur dans les autres destinations de la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Réservez votre excursion à Cannes avec chauffeur",
      description:
        "Indiquez-nous la date, le lieu de prise en charge, le nombre de passagers et si vous préférez une journée art de vivre, paysages ou shopping : nous construisons l'itinéraire et confirmons le prix fixe avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      buttonText: "Réserver l'excursion à Cannes",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quelles sont les excursions privées les plus demandées au départ de Cannes ?",
        answer:
          "Au départ de Cannes, les excursions privées les plus demandées vont à Monaco, Nice, Antibes, Saint-Paul-de-Vence, Èze, au cap d'Antibes et à Saint-Tropez. La journée Monaco et Èze, d'environ 8 heures, peut ainsi commencer à votre hôtel ou à votre villa à Cannes, et votre chauffeur reste à votre disposition jusqu'au retour. Chaque itinéraire s'adapte à vos envies et à votre emploi du temps.",
      },
      {
        question: "Puis-je personnaliser mon excursion privée au départ de Cannes ?",
        answer:
          "Oui. Chaque excursion privée est entièrement personnalisable : vous choisissez les destinations, les horaires, les visites, les restaurants, les quartiers commerçants et les expériences à inclure.",
      },
      {
        question: "L'excursion peut-elle partir de mon hôtel, de ma villa ou de mon yacht à Cannes ?",
        answer:
          "Oui. Nous venons vous chercher dans les hôtels de la Croisette, les villas privées, au Vieux-Port de Cannes, à Port Canto ou à toute autre adresse à Cannes et sur la Côte d'Azur.",
      },
      {
        question: "Quels sites voit-on souvent lors d'une excursion privée à Cannes ?",
        answer:
          "Les clients visitent souvent la Croisette, le Palais des Festivals, le Suquet, les boutiques de luxe, Port Canto, le cap d'Antibes et les points de vue panoramiques sur la Méditerranée.",
      },
      {
        question: "Puis-je associer Cannes à d'autres destinations de la Côte d'Azur dans la même journée ?",
        answer:
          "Oui. Beaucoup de clients associent Cannes à Antibes, Nice, Monaco, Saint-Paul-de-Vence, Èze ou Saint-Tropez dans une même excursion privée. L'itinéraire reste modifiable toute la journée.",
      },
      {
        question: "Les excursions privées depuis Cannes sont-elles possibles pendant les grands événements ?",
        answer:
          "Oui. Les excursions privées sont particulièrement demandées pendant le Festival de Cannes, les Cannes Lions et les autres événements internationaux : une façon confortable et souple de découvrir la Côte d'Azur entre deux rendez-vous.",
      },
      {
        question: "L'excursion peut-elle inclure de la gastronomie, du shopping ou du vin ?",
        answer:
          "Oui. L'itinéraire peut inclure des restaurants étoilés au guide Michelin, des boutiques de luxe, des marchés locaux, des dégustations de vins, des restaurants en bord de mer et d'autres expériences choisies selon vos goûts.",
      },
      {
        question: "Quel véhicule choisir pour une excursion privée depuis Cannes ?",
        answer: VEHICLES_RIVIERA,
      },
    ],
  },

  "excursion-privee-monaco": {
    slug: "excursion-privee-monaco",
    path: "/fr/excursion-privee-monaco",
    enPath: chauffeurTourPages.monaco.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Monaco | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Monaco avec chauffeur dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : un circuit de 4 heures à Monaco ou une journée de 8 heures avec Èze.`,
      keywords: [
        "excursion privée Monaco",
        "excursion Monaco avec chauffeur",
        "visite privée de Monaco",
        "excursion Monaco et Èze",
        "journée à Monaco avec chauffeur",
      ],
    },
    serviceLabel: "Excursion à Monaco",
    heroTitle: "Excursion privée avec chauffeur à Monaco",
    heroDescription:
      `Avec un chauffeur rien que pour vous, vous découvrez à votre rythme Monte-Carlo, Monaco-Ville, Port Hercule et les points de vue sur la côte. Il vous prend en charge de porte à porte à Monaco, à Nice, à Cannes ou à l'aéroport de Nice. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.monaco.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Monaco",
    introTitle: "Un itinéraire à Monaco selon votre emploi du temps",
    introDescription:
      "Monaco est petit, en pente et très animé. Un chauffeur privé relie le Rocher, la place du Casino, le port et le Larvotto, sans chercher à vous garer à chaque arrêt, sans file d'attente aux taxis et sans les horaires figés d'une visite en groupe.",
    panels: [
      {
        title: "Des visites de porte à porte",
        text: "L'excursion part de votre hôtel, de votre yacht, de votre villa ou de l'aéroport de Nice. Votre chauffeur s'occupe des sens uniques et des points de dépose ; vous passez votre temps sur les lieux que vous êtes venu voir.",
        theme: "dark",
      },
      {
        title: "Arrêts et horaires à la carte",
        text: "Restez plus longtemps à Monaco-Ville, ajoutez un déjeuner près de Port Hercule, faites du shopping autour du Carré d'Or ou passez par Èze. L'itinéraire s'adapte à vos envies et à vos horaires de réservation.",
        theme: "light",
      },
    ],
    itinerariesTitle: "Excursion à Monaco : une demi-journée ou une journée",
    itinerariesDescription:
      "Ces exemples d'itinéraires donnent un cadre clair à la journée tout en laissant de la place pour une table réservée, un musée, du shopping ou des arrêts photo en plus.",
    itineraries: [
      {
        duration: "Environ 4 heures",
        title: "L'essentiel de Monaco en excursion privée",
        description:
          "Ce circuit convient à une première visite de la Principauté, à une escale de croisière ou à une matinée ou un après-midi libre.",
        stops: [
          "Prise en charge à Monaco, Cap-d'Ail, Beausoleil ou à votre yacht à Port Hercule",
          "Monaco-Ville, la place du Palais princier et la cathédrale Saint-Nicolas",
          "Le point de vue sur Port Hercule et une partie du circuit du Grand Prix en voiture",
          "La place du Casino, l'Hôtel de Paris et le Carré d'Or",
          "Retour à votre hôtel, à votre yacht ou à l'adresse de votre choix à Monaco",
        ],
      },
      {
        duration: "Environ 8 heures",
        title: "Monaco et Èze à la journée",
        description:
          "Une journée complète au départ de Nice, de Cannes ou de Monaco : les grands sites de Monaco, le village médiéval d'Èze et les panoramas de la Moyenne Corniche.",
        stops: [
          "Prise en charge à Nice, Cannes, Monaco, dans une résidence privée ou à l'aéroport de Nice",
          "Le village d'Èze, avec du temps pour ses ruelles et, si vous le souhaitez, le Jardin exotique",
          "La route panoramique de la Moyenne Corniche vers Monaco",
          "Monaco-Ville, Port Hercule, la place du Casino et Monte-Carlo",
          "Du temps libre pour déjeuner, faire du shopping ou visiter un musée avant le retour",
        ],
      },
    ],
    practicalTitle: "Bon à savoir avant de réserver",
    practicalDescription:
      "Indiquez-nous le lieu de prise en charge, la durée souhaitée et les arrêts à ne pas manquer. Nous confirmons ensuite le véhicule, le prix fixe, un horaire réaliste et les éventuelles restrictions d'accès les jours d'événement. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
    practicalDetails: [
      {
        title: "Lieux de prise en charge",
        text: "Nous venons vous chercher à l'hôtel, à la villa, à Port Hercule, à Fontvieille, à Nice, à Cannes ou dans l'est de la Côte d'Azur. Depuis l'aéroport de Nice, comptez 30 à 40 minutes environ jusqu'à Monaco.",
      },
      {
        title: "Véhicules",
        text: `La Mercedes Classe E (dès ${HOURLY} de l'heure) et la Classe S (dès ${eur(S_CLASS.prices.nice.hourly)} de l'heure) accueillent jusqu'à ${E_CLASS.passengers} passagers. La Classe V (dès ${eur(V_CLASS.prices.nice.hourly)} de l'heure) transporte jusqu'à ${V_CLASS.passengers} passagers. Elle convient aux familles et aux groupes qui ont besoin de plus de places ou d'espace pour les bagages.`,
      },
      {
        title: "Inclus",
        text: "Le prix comprend le véhicule privé, un chauffeur professionnel, la prise en charge de porte à porte, l'attente entre les arrêts et des bouteilles d'eau à bord.",
      },
      {
        title: "Non inclus",
        text: "Le prix ne comprend pas les billets des musées et des jardins, les repas, les guides conférenciers ni les frais d'accès particuliers, sauf s'ils figurent sur le devis.",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "découvrir Monaco",
    audienceDescription:
      "Pour les voyageurs qui veulent découvrir Monaco à un rythme confortable, avec un transport de porte à porte entre ses principaux sites.",
    audienceCards: [
      {
        title: "Voyageurs exigeants",
        text: "Une journée soignée pour ceux qui attendent un service haut de gamme à Monaco, de la prise en charge au retour.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône de voyageur exigeant",
      },
      {
        title: "Première visite",
        text: "Une façon confortable de comprendre en une journée la géographie de Monaco, ses incontournables et ses routes panoramiques.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de première visite",
      },
      {
        title: "Couples et clients VIP",
        text: "Des arrêts sur les grands sites, des arrivées soignées et le confort d'une voiture privée du début à la fin.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône couple et VIP",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Comparez nos excursions privées avec chauffeur dans les autres destinations de la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    relatedGuidesTitle: "Préparez l'étape monégasque de votre séjour sur la Côte d'Azur",
    relatedGuidesDescription:
      "Ces guides pratiques vous aident à comparer les itinéraires, les durées et les façons de découvrir Monaco avant de confirmer votre excursion.",
    relatedGuides: [
      {
        href: frLink("/blog/eze-monaco-private-tour-from-nice"),
        label: "Excursion à Èze et Monaco depuis Nice",
        description:
          "Comparez les itinéraires d'une demi-journée et d'une journée depuis Nice, par Èze, le Cap-Ferrat et Monaco.",
      },
      {
        href: frLink("/blog/getting-around-monaco"),
        label: "Se déplacer à Monaco",
        description:
          "Les quartiers de Monaco, ses pentes, les moyens de transport et les situations où un chauffeur vous fait gagner du temps.",
      },
      {
        href: frLink("/our-services/hourly-chauffeur/monaco"),
        label: "Chauffeur privé à l'heure à Monaco",
        description:
          "Un chauffeur à disposition quand les rendez-vous, le shopping, les restaurants ou les visites de yacht comptent plus qu'un itinéraire de visite.",
      },
    ],
    cta: {
      title: "Organisez votre excursion à Monaco avec chauffeur",
      description:
        "Nous construisons la journée autour des sites de Monaco, des routes panoramiques, de l'heure du déjeuner et du lieu de prise en charge de votre choix.",
      buttonText: "Réserver l'excursion à Monaco",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quelles sont les excursions privées les plus demandées à Monaco ?",
        answer:
          "Nos excursions privées à Monaco passent souvent par Monte-Carlo, la place du Casino, Port Hercule, Monaco-Ville et les abords du Palais princier. Elles font aussi halte dans les quartiers des boutiques de luxe et aux points de vue panoramiques sur la Méditerranée.",
      },
      {
        question: "Puis-je personnaliser mon excursion privée à Monaco ?",
        answer:
          "Oui. Chaque excursion privée est entièrement personnalisable : vous choisissez les visites, les restaurants, le shopping, les routes côtières et les points de vue qui conviennent à votre programme.",
      },
      {
        question: "L'excursion peut-elle partir de mon hôtel, de ma résidence ou de mon yacht ?",
        answer:
          "Oui. Nous venons vous chercher dans les hôtels, les résidences privées et les villas, à Port Hercule, au port de Fontvieille, à votre yacht ou à toute autre adresse sur la Côte d'Azur.",
      },
      {
        question: "Quels sites voit-on souvent lors d'une excursion privée à Monaco ?",
        answer:
          "Nos clients voient souvent Monaco-Ville et les abords du Palais princier, Port Hercule, Monte-Carlo et la place du Casino. Les quartiers des boutiques de luxe et les points de vue panoramiques sur la Méditerranée font aussi partie de la visite.",
      },
      {
        question: "Peut-on associer Monaco à d'autres destinations de la Côte d'Azur dans la même journée ?",
        answer:
          "Oui. Beaucoup de clients associent Monaco à Èze, Nice, Saint-Jean-Cap-Ferrat, Antibes, Cannes ou Saint-Paul-de-Vence dans une même excursion privée. L'itinéraire reste modifiable toute la journée.",
      },
      {
        question: "Les excursions privées à Monaco conviennent-elles aux croisiéristes et aux invités d'un yacht ?",
        answer:
          "Oui. Les excursions privées à Monaco sont très demandées par les invités des yachts, les croisiéristes, les familles et les clients VIP qui veulent découvrir la Côte d'Azur confortablement et à leur façon.",
      },
      {
        question: "L'excursion peut-elle passer par un restaurant gastronomique, les boutiques de luxe ou le bord de mer ?",
        answer:
          "Oui. L'itinéraire peut inclure des restaurants étoilés au guide Michelin, les boutiques de luxe de Monte-Carlo, des restaurants au bord de l'eau, des plages privées, des routes côtières panoramiques et d'autres expériences choisies.",
      },
      {
        question: "Quel véhicule choisir pour une excursion privée à Monaco ?",
        answer:
          "La Mercedes Classe S convient aux voyages d'affaires et aux clients VIP ; la Mercedes Classe V est idéale pour les familles, les petits groupes et les voyageurs qui ont besoin de plus d'espace et de confort.",
      },
    ],
  },

  "excursion-privee-saint-tropez": {
    slug: "excursion-privee-saint-tropez",
    path: "/fr/excursion-privee-saint-tropez",
    enPath: chauffeurTourPages["saint-tropez"].path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Saint-Tropez | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Saint-Tropez avec chauffeur dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : le village, les routes côtières et des arrêts en bord de plage.`,
      keywords: [
        "excursion privée Saint-Tropez",
        "excursion Saint-Tropez avec chauffeur",
        "journée à Saint-Tropez avec chauffeur",
        "visite privée de Saint-Tropez",
        "chauffeur privé excursion Saint-Tropez",
      ],
    },
    serviceLabel: "Excursion à Saint-Tropez",
    heroTitle: "Excursion privée à Saint-Tropez",
    heroDescription:
      `Une journée à Saint-Tropez avec votre chauffeur privé, ou une excursion au départ de Saint-Tropez vers Ramatuelle, Gassin, Port-Grimaud, Cannes ou Monaco, au fil des routes panoramiques et des arrêts en bord de plage. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages["saint-tropez"].heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Saint-Tropez",
    introTitle: "Vivre Saint-Tropez",
    introDescription:
      "À Saint-Tropez, il ne s'agit pas de courir d'un monument à l'autre, mais de trouver le bon rythme entre la route, le village, la mer et les adresses où l'on s'arrête.",
    panels: [
      {
        title: "Une arrivée panoramique",
        text: "La route fait partie du voyage : avec un chauffeur, la journée reste agréable de la première route au dernier arrêt.",
        theme: "dark",
      },
      {
        title: "Au rythme de Saint-Tropez",
        text: "La flânerie dans le village, l'heure du déjeuner, les arrêts en bord de plage et un retour confortable trouvent naturellement leur place dans une excursion avec chauffeur.",
        theme: "light",
      },
    ],
    audienceTitle: "Parfait pour",
    audienceAccent: "une escapade à Saint-Tropez",
    audienceDescription:
      "Cet itinéraire s'adresse aux voyageurs qui veulent vivre Saint-Tropez comme dans un film, sans accroc et sans rien avoir à organiser.",
    audienceCards: [
      {
        title: "Excursion à la journée",
        text: "Une formule soignée pour les voyageurs qui passent une journée à Saint-Tropez pendant un séjour plus long sur la Côte d'Azur.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône d'excursion à la journée",
      },
      {
        title: "Amateurs d'art de vivre",
        text: "Une organisation haut de gamme pour les plages privées, les moments au village, les routes panoramiques et un horaire détendu.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône d'amateur d'art de vivre",
      },
      {
        title: "Couples et petits groupes",
        text: "Le confort d'une voiture privée et un rythme souple pour laisser la journée se dérouler naturellement.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône de petit groupe",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Comparez nos excursions privées avec chauffeur dans les autres destinations de la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Réservez une excursion à Saint-Tropez avec chauffeur",
      description:
        "Indiquez-nous la date, le lieu de prise en charge, le nombre de passagers et l'ambiance souhaitée pour la journée : nous construisons votre itinéraire à Saint-Tropez et confirmons le prix fixe avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      buttonText: "Réserver l'excursion à Saint-Tropez",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quelles sont les excursions privées les plus demandées au départ de Saint-Tropez ?",
        answer:
          "Au départ de Saint-Tropez, les excursions privées les plus demandées vont à Port-Grimaud, Ramatuelle, Gassin, Cannes, Antibes, Nice et Monaco, ou suivent les routes panoramiques de la Côte d'Azur et de la Provence. Votre chauffeur vous prend en charge à votre hôtel, à votre villa ou au port de Saint-Tropez et reste à votre disposition jusqu'au retour. Chaque itinéraire s'adapte à vos envies et à votre emploi du temps.",
      },
      {
        question: "Puis-je personnaliser mon excursion privée au départ de Saint-Tropez ?",
        answer:
          "Oui. Chaque excursion privée est entièrement personnalisable : vous choisissez les destinations, les horaires, les visites, les restaurants, les plages privées, les quartiers commerçants et les expériences à inclure.",
      },
      {
        question: "L'excursion peut-elle partir de mon hôtel, de ma villa ou de mon yacht à Saint-Tropez ?",
        answer:
          "Oui. Nous venons vous chercher à votre hôtel, à votre villa, sur une plage privée, au port de Saint-Tropez ou à toute autre adresse à Saint-Tropez et aux alentours.",
      },
      {
        question: "Quels sites voit-on souvent lors d'une excursion privée à Saint-Tropez ?",
        answer:
          "La visite passe souvent par le port et la Citadelle de Saint-Tropez, ainsi que par la place des Lices. Nos clients vont aussi à la plage de Pampelonne, à Ramatuelle, à Gassin et aux points de vue panoramiques sur la Méditerranée.",
      },
      {
        question: "Puis-je associer Saint-Tropez à d'autres destinations dans la même journée ?",
        answer:
          "Oui. Beaucoup de clients associent Saint-Tropez à Port-Grimaud, Ramatuelle, Gassin, Cannes, Antibes ou d'autres destinations de la Côte d'Azur. L'itinéraire reste modifiable toute la journée.",
      },
      {
        question: "Les excursions privées conviennent-elles aux plages privées et aux adresses de luxe ?",
        answer:
          "Oui. Une excursion privée permet de rejoindre les plages privées, les hôtels de luxe, les grandes tables, les vignobles, les boutiques et les adresses les plus exclusives de Saint-Tropez et de la Côte d'Azur.",
      },
      {
        question: "L'excursion peut-elle inclure des domaines viticoles et des villages provençaux ?",
        answer:
          "Oui. Beaucoup de clients associent Saint-Tropez à des visites de vignobles, des dégustations de vins et des villages pittoresques du Var et de la Provence.",
      },
      {
        question: "Quel véhicule choisir pour une excursion privée depuis Saint-Tropez ?",
        answer: VEHICLES_RIVIERA,
      },
    ],
  },

  "excursion-privee-megeve": {
    slug: "excursion-privee-megeve",
    path: "/fr/excursion-privee-megeve",
    enPath: chauffeurTourPages.megeve.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Megève | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Megève avec chauffeur dans les Alpes, dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : chalets de luxe, stations de ski et bonnes tables.`,
      keywords: [
        "excursion privée Megève",
        "excursion avec chauffeur Megève",
        "excursion d'hiver Megève",
        "excursion privée Alpes françaises",
        "visite station de ski Megève",
        "chalet de luxe Megève",
        "chauffeur privé Megève hiver",
      ],
    },
    serviceLabel: "Megève",
    heroTitle: "Excursion privée à Megève",
    heroDescription:
      `Une excursion d'hiver avec chauffeur autour de Megève : le village et ses calèches, Combloux et Saint-Gervais, puis Chamonix ou Annecy dans la même journée. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.megeve.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Megève",
    introTitle: "Megève en hiver, de village en village",
    introDescription:
      "Megève est à environ 1 100 mètres d'altitude, entre la chaîne des Aravis et le massif du Mont-Blanc. Votre chauffeur vous conduit du centre piéton aux pistes du Mont d'Arbois ou de Rochebrune, puis vers les villages voisins, sans que vous ayez à conduire sur la neige ni à chercher où vous garer.",
    panels: [
      {
        title: "Autour du village",
        text: "Le centre médiéval a ses rues piétonnes et, l'hiver, ses calèches. Combloux et sa vue sur le mont Blanc sont à une dizaine de minutes, et Saint-Gervais-les-Bains à une vingtaine.",
        theme: "dark",
      },
      {
        title: "Chamonix et Annecy dans la même journée",
        text: "Chamonix est à environ 45 minutes de route et Annecy à un peu plus d'une heure : en partant le matin, une journée complète permet de voir l'essentiel des deux et de rentrer à Megève le soir.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "un séjour à Megève",
    audienceDescription:
      "Pour les clients d'un hôtel ou d'un chalet de Megève qui veulent quitter les pistes une journée sans prendre le volant sur les routes enneigées.",
    audienceCards: [
      {
        title: "Une journée sans ski",
        text: "Une pause entre deux jours de pistes : Combloux, Saint-Gervais ou Cordon, un déjeuner, puis le retour au chalet en fin d'après-midi.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône d'une journée sans ski",
      },
      {
        title: "Familles et skieurs",
        text: `Le van Classe V emporte jusqu'à ${V_CLASS.passengers} passagers avec leurs skis, du chalet au pied des pistes du Mont d'Arbois ou du Jaillet.`,
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des familles et des skieurs",
      },
      {
        title: "Séjours en chalet",
        text: "Votre chauffeur vient au chalet ou à l'hôtel, attend pendant les visites et vous ramène, sans place à trouver dans le village.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône d'un séjour en chalet",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Les autres destinations où nous proposons des excursions avec chauffeur, dans les Alpes et sur la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Préparez votre journée autour de Megève",
      description:
        "Dites-nous où vous logez, à quelle date, combien vous serez et ce que vous voulez voir (le village, Chamonix, Annecy ou les trois) : nous vous répondons avec l'itinéraire et le prix fixe avant toute réservation. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      buttonText: "Réserver l'excursion à Megève",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Que voir autour de Megève pendant une excursion d'hiver ?",
        answer:
          "Au village, vous découvrez le centre médiéval et ses calèches. Combloux et sa vue sur le mont Blanc, Saint-Gervais-les-Bains et le balcon de Cordon sont à moins d'une demi-heure. Plus loin, Chamonix et Annecy se visitent dans la journée.",
      },
      {
        question: "Peut-on voir Megève, Chamonix et Annecy dans la même journée ?",
        answer:
          `Oui, en partant tôt. Comptez environ 45 minutes de Megève à Chamonix, puis un peu plus d'une heure jusqu'à Annecy et à peu près autant pour revenir. Votre chauffeur reste avec vous toute la journée. L'excursion coûte à partir de ${FULL_DAY} en Mercedes Classe E.`,
      },
      {
        question: "Le chauffeur vient-il nous chercher au chalet ?",
        answer:
          "Oui, à votre chalet ou à votre hôtel, au village comme au Mont d'Arbois ou à Demi-Quartier, et il vous y ramène en fin de journée.",
      },
      {
        question: "Et si la route est enneigée ?",
        answer:
          "Nos voitures sont équipées pour les routes de montagne en hiver. Votre chauffeur choisit l'itinéraire selon la météo du jour, par la vallée plutôt que par un col si la neige l'impose.",
      },
      {
        question: "Peut-on prévoir un déjeuner ou des achats pendant l'excursion ?",
        answer:
          "Oui. Le chauffeur vous dépose et vous attend, que ce soit pour un déjeuner dans un restaurant d'altitude, une table du village ou les boutiques du centre piéton.",
      },
      {
        question: "Pouvez-vous nous prendre en charge au Four Seasons ou aux Fermes de Marie ?",
        answer:
          "Oui. Les clients se rendent souvent au Four Seasons Hotel Megève et aux Fermes de Marie, et nous venons aussi dans les chalets privés du Mont d'Arbois.",
      },
      {
        question: "Quelle voiture choisir pour une excursion à Megève ?",
        answer: VEHICLES_ALPS,
      },
    ],
  },

  "excursion-privee-courchevel": {
    slug: "excursion-privee-courchevel",
    path: "/fr/excursion-privee-courchevel",
    enPath: chauffeurTourPages.courchevel.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Courchevel | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Courchevel avec chauffeur dans les Alpes, dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : hôtels cinq étoiles, chalets et pistes de ski.`,
      keywords: [
        "excursion privée Courchevel",
        "excursion avec chauffeur Courchevel",
        "excursion d'hiver Courchevel",
        "visite station de ski Courchevel",
        "chalet de luxe Courchevel",
        "excursion privée Alpes françaises",
        "chauffeur privé Courchevel hiver",
      ],
    },
    serviceLabel: "Courchevel",
    heroTitle: "Excursion privée à Courchevel",
    heroDescription:
      `Une excursion privée au départ de Courchevel, pour une journée hors des pistes : les villages de la station, Méribel et Val Thorens par la route, ou Annecy et Megève pour une journée plus longue. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.courchevel.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Courchevel",
    introTitle: "Courchevel et les 3 Vallées en hiver",
    introDescription:
      "Courchevel s'étage du Praz, vers 1 300 mètres, jusqu'à Courchevel 1850, au cœur des 3 Vallées. Votre chauffeur vous fait quitter la station pour une journée, vers Méribel, la vallée de la Tarentaise ou le lac d'Annecy, dans une voiture équipée pour la montagne.",
    panels: [
      {
        title: "Les quatre villages de la station",
        text: "Courchevel 1850, Courchevel Moriond (1650), Courchevel Village (1550) et Le Praz (1300) : votre chauffeur vous emmène d'un niveau à l'autre, de l'altiport aux pistes de Moriond.",
        theme: "dark",
      },
      {
        title: "Au-delà des 3 Vallées",
        text: "Vous rejoignez Méribel et Val Thorens par la vallée. Pour une journée plus longue, Annecy et Megève sont à environ deux heures de route.",
        theme: "light",
      },
    ],
    audienceTitle: "Pour les clients",
    audienceAccent: "des 3 Vallées",
    audienceDescription:
      "Pour les séjours à Courchevel 1850, Moriond, Courchevel Village ou Le Praz : une excursion avec chauffeur vous fait quitter le domaine skiable pour une journée, sans voiture à conduire ni à garer.",
    audienceCards: [
      {
        title: "Hors des pistes",
        text: "Une journée loin des remontées : Méribel par la route, la vallée de la Tarentaise ou un déjeuner en dehors de la station.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône d'une journée hors des pistes",
      },
      {
        title: "Groupes et familles",
        text: `Jusqu'à ${V_CLASS.passengers} skieurs et leurs bagages dans le van Classe V, d'un niveau de la station à l'autre.`,
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des groupes et des familles",
      },
      {
        title: "Palaces et chalets de 1850",
        text: "Une prise en charge au Cheval Blanc, aux Airelles ou dans un chalet du Jardin Alpin, et un retour à l'heure que vous fixez.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des palaces et des chalets",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Nos excursions avec chauffeur dans les autres stations des Alpes et sur la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Votre excursion au départ de Courchevel",
      description:
        "Indiquez le niveau de la station où vous logez (1850, Moriond, Village ou Le Praz), vos dates et vos envies : nous vous envoyons l'itinéraire et le prix fixe avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      buttonText: "Réserver l'excursion à Courchevel",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quelles excursions d'hiver faire au départ de Courchevel ?",
        answer:
          "Les plus demandées vont à Méribel, à Val Thorens et dans la vallée de la Tarentaise, ou plus loin à Annecy et à Megève. Pour quitter la station, la route descend jusqu'à Moûtiers, dans la vallée, à environ 25 kilomètres de Courchevel 1850.",
      },
      {
        question: "Combien de temps faut-il pour rejoindre Méribel ou Val Thorens en voiture ?",
        answer:
          "Les stations des 3 Vallées sont reliées à ski, mais pas directement par la route : il faut redescendre dans la vallée puis remonter. Comptez environ une heure pour Méribel et davantage pour Val Thorens, selon la circulation et la neige.",
      },
      {
        question: "L'excursion peut-elle partir de Courchevel Moriond, de Courchevel Village ou du Praz ?",
        answer:
          "Oui. Nous venons vous chercher à tous les niveaux de la station, de Courchevel 1850 et du Jardin Alpin jusqu'au Praz, à votre hôtel ou à votre chalet.",
      },
      {
        question: "Peut-on aller jusqu'à Annecy ou Megève dans la journée ?",
        answer:
          `Oui, mais ce sont de longues journées : Annecy et Megève sont à environ deux heures de route de Courchevel. Votre chauffeur reste à votre disposition jusqu'au retour. Comptez à partir de ${FULL_DAY} la journée en Mercedes Classe E.`,
      },
      {
        question: "Quel jour éviter pour une excursion depuis Courchevel ?",
        answer:
          "Le samedi, jour des arrivées et des départs dans les stations de la Tarentaise, la route de la vallée est très chargée. Nos voitures sont équipées pour les routes de montagne en hiver, et votre chauffeur ajuste l'heure de départ aux conditions du jour.",
      },
      {
        question: "Peut-on déjeuner dans un restaurant étoilé pendant l'excursion ?",
        answer:
          "Courchevel compte plusieurs restaurants étoilés au guide Michelin. Vous réservez votre table, votre chauffeur vous y dépose et vous attend ou revient vous chercher à l'heure convenue.",
      },
      {
        question: "Pouvez-vous nous prendre en charge au Cheval Blanc ou aux Airelles ?",
        answer:
          "Oui. Nos clients vont souvent au Cheval Blanc Courchevel, aux Airelles Courchevel ou aux Six Senses Residences Courchevel. Nous venons aussi les chercher dans les chalets privés de Courchevel 1850.",
      },
      {
        question: "Quelle voiture choisir pour une excursion au départ de Courchevel ?",
        answer: VEHICLES_ALPS,
      },
    ],
  },

  "excursion-privee-chamonix": {
    slug: "excursion-privee-chamonix",
    path: "/fr/excursion-privee-chamonix",
    enPath: chauffeurTourPages.chamonix.path,
    locale: "fr",
    metadata: {
      title: "Excursion privée à Chamonix | Chauffeur privé | Kokolimo",
      description: `Excursion privée à Chamonix avec chauffeur dans les Alpes, dès ${HOURLY} de l'heure ou ${FULL_DAY} la journée : points de vue sur le mont Blanc et villages alpins.`,
      keywords: [
        "excursion privée Chamonix",
        "excursion avec chauffeur Chamonix",
        "excursion d'hiver Chamonix",
        "excursion mont Blanc",
        "excursion privée Alpes françaises",
        "excursion Aiguille du Midi",
        "chauffeur privé Chamonix hiver",
      ],
    },
    serviceLabel: "Chamonix",
    heroTitle: "Excursion privée à Chamonix",
    heroDescription:
      `Une excursion d'hiver avec chauffeur dans la vallée de Chamonix : l'Aiguille du Midi, la Mer de Glace et les villages de la vallée, puis Megève, Annecy ou Courmayeur si vous voulez aller plus loin. ${PRICE_LINE}`,
    heroImageSrc: chauffeurTourPages.chamonix.heroImageSrc,
    heroImageAlt: "Excursion privée avec chauffeur à Chamonix",
    introTitle: "La vallée de Chamonix en hiver",
    introDescription:
      "Chamonix s'étire au pied du mont Blanc, des Houches à Argentière et au Tour. Avec un chauffeur pour la journée, vous passez des téléphériques aux villages de la vallée sans chercher de place ni attendre les navettes, et une excursion privée au départ de Chamonix peut aller jusqu'à Megève, Annecy ou Courmayeur.",
    panels: [
      {
        title: "Du téléphérique au glacier",
        text: "Votre chauffeur vous dépose au pied de l'Aiguille du Midi, au départ du train du Montenvers vers la Mer de Glace et dans le centre de Chamonix.",
        theme: "dark",
      },
      {
        title: "Au-delà de la vallée",
        text: "Megève est à environ 45 minutes et Annecy à un peu plus d'une heure. Par le tunnel du Mont-Blanc, Courmayeur, en Italie, est à une demi-heure.",
        theme: "light",
      },
    ],
    audienceTitle: "Pour découvrir",
    audienceAccent: "la vallée de Chamonix",
    audienceDescription:
      "Pour ceux qui logent à Chamonix, aux Houches ou à Argentière et veulent voir la vallée et ses environs sans conduire sur la neige.",
    audienceCards: [
      {
        title: "Premier séjour à Chamonix",
        text: "L'Aiguille du Midi, le Montenvers et le centre-ville en une journée, avec un chauffeur qui vous dépose au départ de chaque site.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône d'un premier séjour à Chamonix",
      },
      {
        title: "Skieurs de la vallée",
        text: "Le Brévent, la Flégère, les Grands Montets et Balme sont éparpillés le long de la vallée : votre chauffeur relie les départs et vous évite les navettes.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des skieurs de la vallée",
      },
      {
        title: "Un déjeuner en Italie",
        text: "Courmayeur est à environ une demi-heure par le tunnel du Mont-Blanc, pour une journée des deux côtés de la frontière.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône d'une journée en Italie",
      },
    ],
    localLinksTitle: "Excursions par destination",
    localLinksDescription:
      "Les mêmes excursions avec chauffeur au départ des autres stations alpines et de la Côte d'Azur.",
    localLinks: tourCityLinksFr,
    cta: {
      title: "Organisez votre journée dans la vallée de Chamonix",
      description:
        "Envoyez-nous votre adresse dans la vallée, vos dates et les sites qui vous intéressent (l'Aiguille du Midi, la Mer de Glace, Courmayeur) : nous confirmons l'itinéraire et le prix fixe avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge.",
      buttonText: "Réserver l'excursion à Chamonix",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Que voir pendant une excursion d'hiver à Chamonix ?",
        answer:
          "Le téléphérique de l'Aiguille du Midi part du centre-ville et monte à 3 842 mètres. Vous pouvez aussi prendre le train du Montenvers vers la Mer de Glace et visiter le centre de Chamonix. Votre chauffeur vous dépose au départ de chaque site et vous attend.",
      },
      {
        question: "Où commence une excursion privée au départ de Chamonix ?",
        answer:
          "À votre hôtel ou à votre chalet, partout dans la vallée : Chamonix, Les Houches, Argentière ou Le Tour. Votre chauffeur vous y ramène en fin de journée.",
      },
      {
        question: "Le chauffeur peut-il nous emmener d'un domaine skiable à l'autre ?",
        answer:
          "Oui. Les domaines sont éloignés les uns des autres, des Houches au Tour en passant par le Brévent, la Flégère et les Grands Montets : votre chauffeur vous dépose au pied des remontées et revient vous chercher en fin de journée.",
      },
      {
        question: "Peut-on passer en Italie pendant l'excursion ?",
        answer:
          "Oui. Courmayeur, côté italien, est à environ une demi-heure par le tunnel du Mont-Blanc : un déjeuner en Italie tient dans une journée au départ de Chamonix. Prenez vos papiers d'identité.",
      },
      {
        question: "Peut-on aller à Megève ou à Annecy dans la même journée ?",
        answer:
          `Oui. Megève est à environ 45 minutes de Chamonix et Annecy à un peu plus d'une heure. Votre chauffeur reste avec vous jusqu'au retour. La journée en Mercedes Classe E coûte à partir de ${FULL_DAY}.`,
      },
      {
        question: "Que se passe-t-il si le téléphérique ne fonctionne pas ce jour-là ?",
        answer:
          "Le téléphérique de l'Aiguille du Midi ferme parfois à cause du vent ou de la neige. Vous changez alors de programme avec votre chauffeur, vers un autre site de la vallée, un village voisin ou Megève. Nos voitures sont équipées pour les routes de montagne en hiver.",
      },
      {
        question: "Quelle voiture choisir pour une excursion à Chamonix ?",
        answer: VEHICLES_ALPS,
      },
    ],
  },
});
