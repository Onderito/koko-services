// The French versions of the seven hourly chauffeur pages (Nice, Cannes, Monaco, Saint-Tropez, Megève, Courchevel and
// Chamonix), served at /fr/chauffeur-prive-<town> with the service page template. Each page names its English original
// (enPath) and uses its photo; prices are read from the price list (data/vehicles.tsx), written the French way.

import { hourlyChauffeurPages, type ServicePageConfig, type ServiceCardLink } from "../service-pages";
import { eur, E_CLASS, V_CLASS, S_CLASS, MAYBACH, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

// The price list has no Alpine area. Hourly hire costs the same in every area, the Alps included, so the Alpine pages
// read their hourly and full-day prices from the Nice column (as ui/service-prices.tsx does).
const ALPINE_RATES = "nice";

// The hourly destinations: each card links to the French page once it is live, else to the English page.
const hourlyCityLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/hourly-chauffeur/nice"),
    label: "Nice",
    description: "Hôtels de luxe, shopping, rendez-vous d'affaires et chauffeur à disposition partout dans Nice.",
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
    description: "Beach clubs, villas privées, grandes tables et chauffeur à disposition à Saint-Tropez.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/megeve"),
    label: "Megève",
    description: "Hôtels de luxe, chalets privés, shopping, grandes tables et chauffeur à disposition dans tout Megève.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/courchevel"),
    label: "Courchevel",
    description: "Hôtels cinq étoiles, chalets privés, stations de ski et service de chauffeur haut de gamme dans tout Courchevel.",
  },
  {
    href: frLink("/our-services/hourly-chauffeur/chamonix"),
    label: "Chamonix",
    description: "Aventures en montagne, hébergements de luxe, vacances au ski et chauffeur à disposition à Chamonix.",
  },
];

export const hourlyPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "chauffeur-prive-nice": {
    slug: "chauffeur-prive-nice",
    path: "/fr/chauffeur-prive-nice",
    enPath: hourlyChauffeurPages.nice.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Nice | Kokolimo",
      description: `Chauffeur privé à Nice dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée, pour vos rendez-vous d'affaires, hôtels de luxe, shopping et accueil à l'aéroport.`,
      keywords: [
        "chauffeur privé Nice",
        "chauffeur privé à l'heure Nice",
        "mise à disposition chauffeur Nice",
        "chauffeur à la journée Nice",
        "chauffeur d'affaires Nice",
      ],
    },
    serviceLabel: "Nice",
    heroTitle: "Chauffeur privé à l'heure à Nice",
    heroDescription: `Avec un chauffeur privé à votre disposition, vous vous déplacez librement dans Nice, entre les hôtels du bord de mer, les boutiques, vos rendez-vous et vos réunions. À partir de ${eur(E_CLASS.prices.nice.hourly)} de l'heure en Mercedes Classe E (Classe V ${eur(V_CLASS.prices.nice.hourly)}, Classe S ${eur(S_CLASS.prices.nice.hourly)}, Maybach ${eur(MAYBACH.prices.nice.hourly)}), ou ${eur(E_CLASS.prices.nice.fullDay)} pour une journée de huit heures.`,
    heroImageSrc: hourlyChauffeurPages.nice.heroImageSrc,
    heroImageAlt: "Service de chauffeur privé à l'heure à Nice",
    introTitle: "Un chauffeur à l'heure pour vos journées à Nice",
    introDescription:
      "À Nice, une même journée enchaîne souvent l'hôtel, le Vieux-Nice, une table réservée pour le déjeuner, le shopping et quelques trajets aux alentours.",
    panels: [
      {
        title: "Au rythme de la ville",
        text: "La mise à disposition d'un chauffeur est particulièrement adaptée à Nice quand la journée compte plusieurs arrêts et que l'heure du retour n'est pas fixée.",
        theme: "dark",
      },
      {
        title: "Votre confort",
        text: "Plus besoin de réserver à chaque trajet : la même voiture haut de gamme reste disponible entre vos courses, vos réunions et vos moments de détente.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "vos journées à Nice",
    audienceDescription:
      "Une formule faite pour les programmes en ville, quand le confort, l'attente et la souplesse comptent plus qu'un simple trajet.",
    audienceCards: [
      {
        title: "Clients des hôtels",
        text: "Des trajets simples entre les hôtels du bord de mer, les restaurants et les rues commerçantes, allers et retours compris, tout au long de la journée.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des clients d'hôtel",
      },
      {
        title: "Rendez-vous d'affaires",
        text: "Des trajets au calme et un chauffeur qui vous attend entre vos rendez-vous, dans Nice et dans les quartiers d'affaires voisins.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des rendez-vous d'affaires",
      },
      {
        title: "Journées en ville",
        text: "Shopping, déjeuner, bien-être et courses en ville, avec le même chauffeur du début à la fin.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône des journées en ville",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription: "Comparez notre service de chauffeur à l'heure dans les autres destinations de la Côte d'Azur.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur privé à l'heure à Nice ?",
      description: "Nous organisons le service autour de votre hôtel, de vos réunions et des arrêts prévus dans la journée.",
      buttonText: "Réserver un chauffeur à Nice",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Comment fonctionne un chauffeur privé à l'heure à Nice ?",
        answer: `Vous réservez la voiture et son chauffeur à l'heure, pour quatre heures au minimum. Une journée de huit heures coûte ${eur(E_CLASS.prices.nice.fullDay)} en Mercedes Classe E. Chaque heure réservée comprend 20 kilomètres (160 kilomètres sur la journée). Votre chauffeur reste disponible et s\'adapte à votre programme. Il vous conduit à l\'hôtel, à vos rendez-vous d\'affaires, au restaurant ou dans les quartiers commerçants, d\'une adresse à l\'autre dans Nice. Envoyez-nous la date, l'heure et l'adresse de prise en charge, et nous confirmons la voiture et le prix par écrit avant la réservation.`,
      },
      {
        question: "Puis-je réserver un chauffeur à l'heure dès l'aéroport de Nice ?",
        answer:
          "Oui. Votre chauffeur peut vous accueillir directement à l'aéroport Nice Côte d'Azur, puis rester à votre disposition pour vos réunions, vos trajets vers l'hôtel, vos visites, le shopping ou vos rendez-vous à Nice et sur la Côte d'Azur.",
      },
      {
        question: "Quels sont les lieux les plus demandés à Nice avec un chauffeur à l'heure ?",
        answer:
          "Nos clients réservent souvent un chauffeur à l'heure pour aller sur la Promenade des Anglais, dans le Vieux-Nice, au port Lympia et sur l'avenue Jean-Médecin. Leur chauffeur les conduit également à l'aéroport Nice Côte d'Azur, dans les hôtels de luxe et à leurs rendez-vous d'affaires en ville. Beaucoup de réservations comprennent aussi une excursion d'une journée à Monaco, Cannes, Èze, Villefranche-sur-Mer, Saint-Jean-Cap-Ferrat ou Saint-Paul-de-Vence.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant mes réunions ou mes rendez-vous ?",
        answer:
          "Oui, bien sûr. Votre chauffeur vous attend entre deux arrêts dans Nice. Vous allez à vos réunions, à un déjeuner, dans les boutiques ou à un événement sans prévoir d'autre transport.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur privé à l'heure à Nice ?",
        answer:
          "Pour un déplacement d'affaires ou VIP, la Mercedes Classe S est idéale. Le van Mercedes Classe V convient parfaitement aux familles, aux groupes et aux clients qui voyagent avec plus de bagages. Nous vous conseillons la voiture la plus adaptée à votre programme.",
      },
      {
        question: "Un chauffeur à l'heure convient-il à un voyage d'affaires à Nice ?",
        answer:
          "Oui. Beaucoup de clients y font appel pour des conférences, des réunions d'entreprise, des roadshows, des visites d'hôtels et des rendez-vous d'affaires à Nice. Avec un chauffeur dédié, vous êtes à l'heure, vous gardez de la souplesse et vos trajets s'enchaînent sans accroc toute la journée.",
      },
    ],
  },

  "chauffeur-prive-cannes": {
    slug: "chauffeur-prive-cannes",
    path: "/fr/chauffeur-prive-cannes",
    enPath: hourlyChauffeurPages.cannes.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Cannes | Kokolimo",
      description:
        "Chauffeur privé à l'heure à Cannes : congrès, hôtels de la Croisette, shopping et dîners, avec une voiture haut de gamme qui reste à votre disposition.",
      keywords: [
        "chauffeur privé Cannes",
        "chauffeur privé à l'heure Cannes",
        "chauffeur congrès Cannes",
        "chauffeur Croisette",
        "mise à disposition chauffeur Cannes",
      ],
    },
    serviceLabel: "Cannes",
    heroTitle: "Chauffeur privé à l'heure à Cannes",
    heroDescription:
      "Votre chauffeur privé reste à votre disposition pour un séjour sur la Croisette, un congrès, des achats, un dîner ou une journée à plusieurs arrêts dans Cannes.",
    heroImageSrc: hourlyChauffeurPages.cannes.heroImageSrc,
    heroImageAlt: "Service de chauffeur privé à l'heure à Cannes",
    introTitle: "À Cannes, mieux vaut un chauffeur à disposition",
    introDescription:
      "Entre l'hôtel, les événements et les dîners, les horaires bougent souvent à Cannes : un seul chauffeur à disposition vous permet de garder la main sur la journée.",
    panels: [
      {
        title: "Congrès et événements",
        text: "La mise à disposition prend tout son sens quand le programme d'un événement change, que les invités se séparent ou que les créneaux d'arrivée se resserrent au fil de la journée.",
        theme: "dark",
      },
      {
        title: "Loisirs et hôtellerie",
        text: "Votre voiture avec chauffeur vous conduit de l'hôtel aux boutiques, au déjeuner à la plage et aux sorties du soir, sans autre transport à prévoir.",
        theme: "light",
      },
    ],
    practicalTitle: "Combien coûte un chauffeur privé à l'heure à Cannes ?",
    practicalDescription:
      "Choisissez la voiture adaptée à votre groupe et à votre programme. Les prix indicatifs, à l'heure et pour huit heures, sont confirmés par écrit avec les conditions de réservation de votre date.",
    practicalDetails: [
      {
        title: "Mercedes Classe E",
        text: `À partir de ${eur(E_CLASS.prices.cannes.hourly)} de l'heure ou ${eur(E_CLASS.prices.cannes.fullDay)} pour huit heures, avec un chauffeur qui vous attend entre les arrêts convenus.`,
      },
      {
        title: "Mercedes Classe V",
        text: `Pour un groupe ou des clients chargés de bagages, comptez à partir de ${eur(V_CLASS.prices.cannes.hourly)} de l'heure ou ${eur(V_CLASS.prices.cannes.fullDay)} pour huit heures.`,
      },
      {
        title: "Classe S et Maybach",
        text: `Classe S à partir de ${eur(S_CLASS.prices.cannes.hourly)} de l'heure ou ${eur(S_CLASS.prices.cannes.fullDay)} pour huit heures ; Maybach à partir de ${eur(MAYBACH.prices.cannes.hourly)} de l'heure ou ${eur(MAYBACH.prices.cannes.fullDay)} pour huit heures.`,
      },
      {
        title: "Durée et distance minimales",
        text: "Réservation minimale : quatre heures, avec 20 kilomètres inclus par heure réservée (80 kilomètres pour quatre heures). Tout supplément lié à la distance, aux péages ou à l'accès à un événement est confirmé à l'avance.",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "le rythme de Cannes",
    audienceDescription:
      "Pour les programmes de congrès, les hôtels de la Croisette, le shopping, les dîners et les journées à plusieurs arrêts, quand la voiture doit rester disponible.",
    audienceCards: [
      {
        title: "Participants aux congrès",
        text: "Un chauffeur à disposition entre les lieux de l'événement, les hôtels, les dîners et les rendez-vous privés.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des congrès",
      },
      {
        title: "Séjours de luxe",
        text: "Un service de chauffeur soigné pour les hôtels de la Croisette, le shopping et le quotidien d'un séjour haut de gamme.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des séjours de luxe",
      },
      {
        title: "Soirées",
        text: "Un seul chauffeur pour l'arrivée, l'attente et le retour après le dîner ou la soirée.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône des soirées",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription: "Comparez notre service de chauffeur à l'heure dans les autres destinations de la Côte d'Azur.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Réservez votre chauffeur privé à l'heure à Cannes",
      description:
        "Dites-nous si la journée est consacrée aux affaires, aux loisirs ou à un événement : nous organisons la mise à disposition qui lui convient.",
      buttonText: "Réserver un chauffeur à Cannes",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi réserver un chauffeur privé à l'heure à Cannes ?",
        answer:
          "Avec un chauffeur privé à l'heure, vous restez libre toute la journée à Cannes. Réunions, boutiques de luxe, restaurants de la Croisette ou trajets entre plusieurs adresses : votre chauffeur reste disponible dès que vous avez besoin de vous déplacer.",
      },
      {
        question: "Puis-je réserver un chauffeur pendant le Festival de Cannes ?",
        answer:
          "Oui. Notre service de chauffeur à l'heure est très demandé pendant le Festival de Cannes : des trajets fiables entre les hôtels, les événements, les lieux privés, les restaurants et le Palais des Festivals, de jour comme de soir.",
      },
      {
        question: "Le service convient-il aux Cannes Lions et aux événements professionnels ?",
        answer:
          "Oui, tout à fait. Pendant les Cannes Lions et les autres événements professionnels internationaux de Cannes, beaucoup de clients réservent un chauffeur à l'heure. Il les conduit aux conférences, aux réunions d'entreprise et aux rencontres professionnelles, et assure les déplacements de leurs dirigeants.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant mes réunions ou mes événements ?",
        answer:
          "Oui. Pendant toute la réservation, votre chauffeur reste à disposition à Cannes : réunions, déjeuners, rendez-vous shopping ou événements, vous n'avez aucun autre transport à prévoir.",
      },
      {
        question: "Quelles destinations visiter depuis Cannes avec un chauffeur à l'heure ?",
        answer:
          "Depuis Cannes, les plus demandées sont Monaco, Nice, Antibes, le Cap d'Antibes, Saint-Paul-de-Vence, Saint-Tropez et d'autres lieux de la Côte d'Azur. Beaucoup de clients combinent aussi plusieurs destinations dans la même journée, avec le même chauffeur disponible du début à la fin.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Cannes ?",
        answer:
          "La Mercedes Classe S est idéale pour les déplacements d'affaires et VIP ; les familles, les petits groupes et les participants aux événements qui veulent plus d'espace et de confort préfèrent souvent le van Mercedes Classe V.",
      },
      {
        question: "Pour quelles occasions réserve-t-on le plus souvent un chauffeur à l'heure à Cannes ?",
        answer:
          "Nos clients réservent souvent un chauffeur à l'heure pour leurs réunions, les événements professionnels, les hôtels de luxe et les grandes tables. Il les emmène aussi faire les boutiques de la Croisette, visiter des villas privées ou rejoindre les yachts et Port Canto, dans Cannes comme sur la Côte d'Azur.",
      },
    ],
  },

  "chauffeur-prive-monaco": {
    slug: "chauffeur-prive-monaco",
    path: "/fr/chauffeur-prive-monaco",
    enPath: hourlyChauffeurPages.monaco.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Monaco | Kokolimo",
      description:
        "Réservez un chauffeur privé à l'heure à Monaco : rendez-vous d'affaires, visites de yachts, hôtels de luxe, shopping et trajets VIP sur la Côte d'Azur.",
      keywords: [
        "chauffeur privé Monaco",
        "chauffeur privé à l'heure Monaco",
        "chauffeur d'affaires Monaco",
        "chauffeur yacht Monaco",
        "mise à disposition chauffeur Monaco",
      ],
    },
    serviceLabel: "Monaco",
    heroTitle: "Chauffeur privé à l'heure à Monaco",
    heroDescription: `Dans tout Monaco, votre chauffeur privé vous attend et vous conduit à l'hôtel, à vos rendez-vous d'affaires, jusqu'aux yachts ou à une réception. Monaco n'a pas d'aéroport : votre chauffeur peut aussi vous accueillir à l'aéroport Nice Côte d'Azur et vous conduire à Monaco en 30 à 40 minutes environ, à prix fixe dès ${eur(E_CLASS.prices.monaco.transfer)} en Mercedes Classe E.`,
    heroImageSrc: hourlyChauffeurPages.monaco.heroImageSrc,
    heroImageAlt: "Service de chauffeur privé à l'heure à Monaco",
    introTitle: "À Monaco, la mise à disposition s'impose",
    introDescription:
      "Les programmes monégasques sont souvent chargés, prestigieux et minutés, ce qui rend un chauffeur à l'heure particulièrement efficace.",
    panels: [
      {
        title: "Agenda d'affaires",
        text: "Passez des hôtels aux réunions, aux restaurants et aux lieux de réception avec un seul chauffeur, qui gère chaque transition en toute discrétion.",
        theme: "dark",
      },
      {
        title: "Logistique de prestige",
        text: "L'accès aux yachts, les arrivées à l'hôtel, les réceptions d'affaires et les horaires VIP sont plus simples avec un chauffeur à disposition, organisé avec précision.",
        theme: "light",
      },
    ],
    practicalTitle: "Combien coûte un chauffeur privé à l'heure à Monaco ?",
    practicalDescription:
      "Les prix indicatifs comprennent une voiture et un chauffeur dédiés, à votre disposition, avec un minimum de quatre heures et 20 kilomètres inclus par heure réservée.",
    practicalDetails: [
      {
        title: "Mercedes Classe E",
        text: `Pour vos réunions, l'hôtel, le restaurant ou vos rendez-vous, comptez à partir de ${eur(E_CLASS.prices.monaco.hourly)} de l'heure ou ${eur(E_CLASS.prices.monaco.fullDay)} pour huit heures.`,
      },
      {
        title: "Mercedes Classe V",
        text: `Pour un groupe, les invités d'un yacht ou des bagages en plus, comptez à partir de ${eur(V_CLASS.prices.monaco.hourly)} de l'heure ou ${eur(V_CLASS.prices.monaco.fullDay)} pour huit heures.`,
      },
      {
        title: "Classe S et Maybach",
        text: `Classe S à partir de ${eur(S_CLASS.prices.monaco.hourly)} de l'heure ou ${eur(S_CLASS.prices.monaco.fullDay)} pour huit heures ; Maybach à partir de ${eur(MAYBACH.prices.monaco.hourly)} de l'heure ou ${eur(MAYBACH.prices.monaco.fullDay)} pour huit heures.`,
      },
      {
        title: "Durée et distance minimales",
        text: "Réservation minimale : quatre heures, avec 20 kilomètres inclus par heure réservée (80 kilomètres pour quatre heures). Tout supplément lié à la distance, aux péages, aux fermetures de route ou à l'accès à un événement est confirmé à l'avance.",
      },
    ],
    audienceTitle: "Un service adapté aux",
    audienceAccent: "exigences de Monaco",
    audienceDescription:
      "Pour les rendez-vous d'affaires, les séjours à l'hôtel, les visites de yachts et les programmes d'événements qui demandent un transport discret, toujours disponible.",
    audienceCards: [
      {
        title: "Clients d'affaires",
        text: "Un service calme et efficace pour les réunions, les hôtels et les réceptions, au rythme d'un agenda exigeant.",
        icon: "/assets/icons/services/suit-case.webp",
        iconAlt: "Icône des clients d'affaires",
      },
      {
        title: "Séjours VIP",
        text: "Un chauffeur fiable à disposition pour les hôtels, les boutiques de luxe, les grandes tables et les trajets de vos invités tout au long de la journée.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des séjours VIP",
      },
      {
        title: "Yachts et port",
        text: "Des trajets fluides entre les arrivées à l'aéroport, les hôtels, les ports de plaisance et les points de rendez-vous, avec un service haut de gamme.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de l'accès aux yachts",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription: "Comparez notre service de chauffeur à l'heure dans les autres destinations de la Côte d'Azur.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur à disposition à Monaco ?",
      description:
        "Envoyez-nous la date, l'heure et le lieu de prise en charge et le nombre d'heures souhaité : nous confirmons la voiture et le prix par écrit avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la prise en charge.",
      buttonText: "Réserver un chauffeur à Monaco",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi choisir un chauffeur privé à l'heure à Monaco ?",
        answer:
          "Avec un chauffeur à l'heure, vous gardez toute votre liberté à Monaco. Votre chauffeur reste disponible et suit votre programme, même chargé. Il vous conduit à vos rendez-vous d\'affaires, dans les boutiques de luxe, à votre table réservée ou jusqu\'à un yacht.",
      },
      {
        question: "Puis-je réserver un chauffeur à l'heure pendant le Grand Prix de Monaco ?",
        answer:
          "Oui. Pendant le Grand Prix de Monaco, un chauffeur à l'heure est l'une des façons les plus pratiques de se déplacer. Il vous conduit à votre rythme entre les hôtels, les espaces de réception, les yachts, les restaurants et les lieux de l'événement, dans toute la Principauté.",
      },
      {
        question: "Le service est-il disponible pendant le Monaco Yacht Show ?",
        answer:
          "Oui, tout à fait. Pendant le Monaco Yacht Show, beaucoup de clients réservent un chauffeur à l'heure. Il les accueille à l'aéroport et les conduit aux visites de yachts, à leurs rendez-vous d'affaires, à l'hôtel et à leurs soirées, à Monaco et sur la Côte d'Azur.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant mes réunions, mes événements ou mon shopping ?",
        answer:
          "Oui. Votre chauffeur reste à disposition pendant toute la réservation et vous conduit des réunions aux boutiques de luxe, aux restaurants, aux hôtels et aux événements privés de Monaco, sans autre transport à organiser.",
      },
      {
        question: "Quels sont les lieux les plus demandés avec un chauffeur à l'heure à Monaco ?",
        answer:
          "Nos clients circulent souvent entre Monte-Carlo, le Casino de Monte-Carlo, l'Hôtel de Paris, Port Hercule et le Yacht Club de Monaco, ainsi que vers les résidences de luxe et les lieux d'affaires. Ils partent aussi vers les destinations voisines, comme Nice, Cannes, Èze, Saint-Jean-Cap-Ferrat ou encore Saint-Tropez.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Monaco ?",
        answer:
          "Nous recommandons la Mercedes Classe S pour les déplacements d'affaires et VIP, et le van Mercedes Classe V pour les familles, les groupes, les participants aux événements et les clients qui veulent plus d'espace et de confort toute la journée.",
      },
    ],
  },

  "chauffeur-prive-saint-tropez": {
    slug: "chauffeur-prive-saint-tropez",
    path: "/fr/chauffeur-prive-saint-tropez",
    enPath: hourlyChauffeurPages["saint-tropez"].path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Saint-Tropez | Kokolimo",
      description: `Réservez un chauffeur privé à Saint-Tropez dès ${eur(E_CLASS.prices["st-tropez"].hourly)} de l'heure ou ${eur(E_CLASS.prices["st-tropez"].fullDay)} la journée, pour les villas, les yachts, les beach clubs et les restaurants.`,
      keywords: [
        "chauffeur privé Saint-Tropez",
        "chauffeur privé à l'heure Saint-Tropez",
        "chauffeur beach club Saint-Tropez",
        "chauffeur villa Saint-Tropez",
        "chauffeur à disposition Saint-Tropez",
      ],
    },
    serviceLabel: "Saint-Tropez",
    heroTitle: "Chauffeur privé à l'heure à Saint-Tropez",
    heroDescription: `Réservez votre chauffeur privé à l'heure ou à la journée. Il vous conduit de la villa aux plages privées, au déjeuner ou dans les boutiques, et s'adapte à votre programme en pleine saison. À partir de ${eur(E_CLASS.prices["st-tropez"].hourly)} de l'heure en Mercedes Classe E (Classe V ${eur(V_CLASS.prices["st-tropez"].hourly)}, Classe S ${eur(S_CLASS.prices["st-tropez"].hourly)}, Maybach ${eur(MAYBACH.prices["st-tropez"].hourly)}), ou ${eur(E_CLASS.prices["st-tropez"].fullDay)} pour une journée de huit heures.`,
    heroImageSrc: hourlyChauffeurPages["saint-tropez"].heroImageSrc,
    heroImageAlt: "Service de chauffeur privé à l'heure à Saint-Tropez",
    introTitle: "À Saint-Tropez, la souplesse avant tout",
    introDescription:
      "L'été à Saint-Tropez, les déplacements changent au fil de la journée, l'image compte et les horaires sont serrés : un chauffeur à l'heure est la formule adaptée.",
    panels: [
      {
        title: "La logistique de l'été",
        text: `La journée évolue au fil des heures, entre la villa, les plages privées, le déjeuner et les sorties du soir. Avec un chauffeur à la journée (huit heures, ${eur(E_CLASS.prices["st-tropez"].fullDay)} en Mercedes Classe E, 160 kilomètres inclus), la même voiture vous accompagne de la villa à la plage de Pampelonne, puis au port et au dîner.`,
        theme: "dark",
      },
      {
        title: "Un rythme haut de gamme",
        text: "Vous n'attendez plus de voiture entre deux arrêts : un transport haut de gamme et discret reste à votre disposition du début à la fin.",
        theme: "light",
      },
    ],
    audienceTitle: "Parfait pour",
    audienceAccent: "vos journées à Saint-Tropez",
    audienceDescription:
      "Pour les séjours en villa, les beach clubs, le shopping, les restaurants et les soirées autour de Saint-Tropez.",
    audienceCards: [
      {
        title: "Séjours en villa",
        text: "Un chauffeur privé à disposition pour les arrivées, les déjeuners, le shopping et les retours du soir, sans réserver à chaque trajet.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des séjours en villa",
      },
      {
        title: "Beach clubs",
        text: "Des horaires maîtrisés pour les beach clubs, les ports et les trajets d'été les plus demandés.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des beach clubs",
      },
      {
        title: "Loisirs en toute liberté",
        text: "Un service soigné pour profiter de votre journée en toute liberté, sans vous occuper des transports.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône des loisirs en toute liberté",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription: "Comparez notre service de chauffeur à l'heure dans les autres destinations de la Côte d'Azur.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Réservez votre chauffeur à Saint-Tropez",
      description:
        "Indiquez-nous la date, le lieu de prise en charge et votre programme (villa, beach clubs, déjeuners, soirées) : nous confirmons la voiture et le prix par écrit avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la prise en charge.",
      buttonText: "Réserver un chauffeur à Saint-Tropez",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi choisir un chauffeur privé à l'heure à Saint-Tropez ?",
        answer:
          "À Saint-Tropez, un chauffeur à l'heure vous donne une totale liberté de mouvement. Dès que vous en avez besoin, votre chauffeur vous conduit aux plages privées, à un événement privé, à un déjeuner au bord de la mer, dans les boutiques ou d\'une villa à un hôtel.",
      },
      {
        question: "Puis-je réserver un chauffeur pour les beach clubs et les restaurants de Saint-Tropez ?",
        answer:
          "Oui. Beaucoup de clients réservent un chauffeur à l'heure pour se déplacer entre les plages privées, les restaurants, les hôtels de luxe, les ports et les résidences privées. Le chauffeur reste à disposition pendant toute la réservation : vous circulez librement, sans organiser de transferts séparés.",
      },
      {
        question: "Le service convient-il aux locations de yacht et aux transferts vers le port ?",
        answer:
          "Oui, tout à fait. À Saint-Tropez, nos clients réservent souvent un chauffeur à l'heure pour les départs en yacht, les transferts vers le port, les arrivées au port et le transport d'invités VIP. Il peut rester disponible toute la journée pour suivre les changements d'horaire et les demandes de dernière minute.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant un déjeuner, du shopping ou un événement privé ?",
        answer:
          "Oui. Votre chauffeur reste disponible pendant toute la réservation. Il vous conduit au restaurant, dans les boutiques, aux plages privées, à l'hôtel, à la villa ou à un événement, à Saint-Tropez comme dans les environs.",
      },
      {
        question: "Quelles sont les destinations les plus demandées avec un chauffeur à l'heure à Saint-Tropez ?",
        answer:
          "Nos clients se rendent souvent sur la plage de Pampelonne, au Club 55, au Nikki Beach et au port de Saint-Tropez. Ils vont aussi dans les villas de luxe, les hôtels cinq étoiles et les restaurants de plage, ainsi que vers les destinations voisines de la Côte d'Azur.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Saint-Tropez ?",
        answer:
          "La Mercedes Classe S convient aux déplacements d'affaires et VIP. La Mercedes Classe V est parfaite pour une famille, un groupe ou les trajets vers les plages privées, et pour les voyageurs chargés de bagages ou d\'achats.",
      },
    ],
  },

  "chauffeur-prive-megeve": {
    slug: "chauffeur-prive-megeve",
    path: "/fr/chauffeur-prive-megeve",
    enPath: hourlyChauffeurPages.megeve.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Megève | Kokolimo",
      description: `Chauffeur privé à Megève dès ${eur(E_CLASS.prices[ALPINE_RATES].hourly)} de l'heure ou ${eur(E_CLASS.prices[ALPINE_RATES].fullDay)} la journée, pour vos vacances au ski : hôtels de luxe, chalets, shopping et restaurants.`,
      keywords: [
        "chauffeur privé Megève",
        "chauffeur privé à l'heure Megève",
        "service de chauffeur Megève",
        "chauffeur de luxe Megève",
        "chauffeur à disposition Megève",
      ],
    },
    serviceLabel: "Megève",
    heroTitle: "Chauffeur privé à l'heure à Megève",
    heroDescription:
      "Pendant vos vacances au ski, réservez un chauffeur privé à l'heure pour vos trajets dans Megève et les Alpes françaises, de votre hôtel de luxe ou de votre chalet aux boutiques et aux restaurants.",
    heroImageSrc: hourlyChauffeurPages.megeve.heroImageSrc,
    heroImageAlt: "Chauffeur privé de luxe à l'heure à Megève",
    introTitle: "Un chauffeur à l'heure pour vos séjours de luxe à Megève",
    introDescription:
      "Megève réunit hôtels de luxe, chalets privés, grandes tables, boutiques et activités en montagne. Avec un chauffeur à l'heure, vous vous déplacez librement toute la journée, dans le confort et la discrétion, avec une souplesse totale.",
    panels: [
      {
        title: "Des trajets alpins en toute souplesse",
        text: "Votre chauffeur reste disponible toute la journée, pour aller du chalet au centre du village, sur le domaine skiable, au restaurant ou vers les destinations voisines.",
        theme: "dark",
      },
      {
        title: "Une expérience haut de gamme",
        text: "Pas de place à chercher, pas de conduite hivernale, pas de transferts à coordonner : votre voiture et votre chauffeur sont prêts dès que vous en avez besoin.",
        theme: "light",
      },
    ],
    audienceTitle: "Pensé pour",
    audienceAccent: "les visiteurs de Megève",
    audienceDescription:
      "Notre service de chauffeur à l'heure convient aux visiteurs qui recherchent souplesse, confort et trajets sans accroc pendant leur séjour à Megève.",
    audienceCards: [
      {
        title: "Clients des hôtels de luxe",
        text: "Passez sans effort de l'hôtel aux boutiques, aux restaurants et aux activités de loisirs, partout dans Megève.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des clients des hôtels de luxe",
      },
      {
        title: "Séjours en chalet",
        text: "Des trajets pratiques entre les chalets privés, le domaine skiable, les quartiers commerçants et les restaurants.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des séjours en chalet",
      },
      {
        title: "Loisirs en toute liberté",
        text: "Un service soigné pour les clients qui veulent rester libres toute la journée sans se charger des transports.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône des loisirs en toute liberté",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription:
      "Découvrez notre service de chauffeur à l'heure sur la Côte d'Azur et dans les grandes stations des Alpes.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur privé à l'heure à Megève ?",
      description:
        "Indiquez-nous votre programme, l'adresse de votre hôtel ou de votre chalet et vos activités prévues : nous vous conseillerons la formule de chauffeur la mieux adaptée à votre séjour.",
      buttonText: "Réserver un chauffeur à Megève",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi choisir un chauffeur privé à l'heure à Megève ?",
        answer:
          "Pendant votre séjour à Megève, un chauffeur à l'heure vous laisse une liberté complète. Votre chauffeur vous conduit chaque fois que vous en avez besoin, de votre chalet ou de votre hôtel de luxe aux restaurants, aux boutiques et au domaine skiable.",
      },
      {
        question: "Puis-je réserver un chauffeur pour une journée entière à Megève ?",
        answer:
          "Oui. Beaucoup de clients réservent un chauffeur à la demi-journée ou à la journée, pour se déplacer facilement dans Megève et dans les Alpes alentour.",
      },
      {
        question: "Le service convient-il aux vacances au ski ?",
        answer:
          "Oui, tout à fait. À Megève, un chauffeur privé à l'heure est idéal pour les vacances au ski. Il vous conduit confortablement entre les chalets, les hôtels, les pistes, les restaurants et les adresses d'après-ski.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant mon shopping, un dîner ou un rendez-vous ?",
        answer:
          "Oui. Le chauffeur reste à votre disposition tant que dure la réservation et assure vos trajets toute la journée dans Megève, sans transfert supplémentaire à réserver.",
      },
      {
        question: "Quels lieux visite-t-on le plus souvent avec un chauffeur à l'heure à Megève ?",
        answer:
          "Nos clients se déplacent souvent de leur hôtel de luxe ou de leur chalet privé vers le Mont d'Arbois, le centre du village, les restaurants, les boutiques et les destinations alpines voisines de Megève.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Megève ?",
        answer:
          "Pour les déplacements d'affaires et VIP, la Mercedes Classe S est idéale ; pour une famille, un groupe ou des skieurs avec leur matériel et des bagages en plus, le van Mercedes Classe V est parfait.",
      },
    ],
  },

  "chauffeur-prive-courchevel": {
    slug: "chauffeur-prive-courchevel",
    path: "/fr/chauffeur-prive-courchevel",
    enPath: hourlyChauffeurPages.courchevel.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Courchevel | Kokolimo",
      description: `Chauffeur privé à Courchevel dès ${eur(E_CLASS.prices[ALPINE_RATES].hourly)} de l'heure ou ${eur(E_CLASS.prices[ALPINE_RATES].fullDay)} la journée, pour vos hôtels de luxe, chalets, vacances au ski, shopping et restaurants.`,
      keywords: [
        "chauffeur privé Courchevel",
        "chauffeur privé à l'heure Courchevel",
        "service de chauffeur Courchevel",
        "chauffeur de luxe Courchevel",
        "chauffeur à disposition Courchevel",
      ],
    },
    serviceLabel: "Courchevel",
    heroTitle: "Chauffeur privé à l'heure à Courchevel",
    heroDescription: `À Courchevel 1850, à Courchevel 1650 et dans les Alpes françaises, votre chauffeur privé reste à disposition pendant vos vacances au ski. Il vous conduit de l'hôtel de luxe ou du chalet privé aux boutiques et aux restaurants. À partir de ${eur(E_CLASS.prices[ALPINE_RATES].hourly)} de l'heure en Mercedes Classe E (Classe V ${eur(V_CLASS.prices[ALPINE_RATES].hourly)}, Classe S ${eur(S_CLASS.prices[ALPINE_RATES].hourly)}, Maybach ${eur(MAYBACH.prices[ALPINE_RATES].hourly)}), ou ${eur(E_CLASS.prices[ALPINE_RATES].fullDay)} pour une journée de huit heures.`,
    heroImageSrc: hourlyChauffeurPages.courchevel.heroImageSrc,
    heroImageAlt: "Chauffeur privé de luxe à l'heure à Courchevel",
    introTitle: "Un service de chauffeur haut de gamme pour vos séjours à Courchevel",
    introDescription:
      "Courchevel, l'une des stations de ski les plus prestigieuses au monde, est réputée pour ses hôtels de luxe, ses chalets privés, ses grandes tables et ses expériences alpines exclusives. Un chauffeur à l'heure vous laisse une liberté totale, avec confort, discrétion et des trajets fluides pendant tout votre séjour.",
    panels: [
      {
        title: "Un chauffeur à disposition toute la journée",
        text: "Chalet, domaine skiable, restaurants, boutiques ou stations voisines : votre chauffeur reste disponible chaque fois que votre programme change.",
        theme: "dark",
      },
      {
        title: "Un séjour sans accroc",
        text: "Ni stationnement à trouver, ni routes d'hiver à affronter, ni transports multiples à organiser : votre chauffeur et votre voiture restent à votre disposition pendant toute la réservation.",
        theme: "light",
      },
    ],
    audienceTitle: "Parfait pour",
    audienceAccent: "les séjours à Courchevel",
    audienceDescription:
      "Notre service de chauffeur à l'heure s'adresse aux voyageurs qui veulent de la souplesse, du confort et des trajets haut de gamme pendant tout leur séjour à Courchevel.",
    audienceCards: [
      {
        title: "Clients des hôtels de luxe",
        text: "Passez facilement des hôtels cinq étoiles aux restaurants, aux boutiques et aux activités de loisirs, avec un chauffeur rien que pour vous.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des hôtels de luxe",
      },
      {
        title: "Séjours en chalet privé",
        text: "Des trajets confortables entre les chalets, les domaines skiables, les rues commerçantes, les restaurants et les destinations alpines voisines.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des chalets",
      },
      {
        title: "Ski et loisirs",
        text: "Parfait pour les programmes souples, les arrêts multiples, les voyages en famille et un chauffeur à la journée dans tout Courchevel.",
        icon: "/assets/icons/services/clock.webp",
        iconAlt: "Icône des loisirs en toute liberté",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription:
      "Découvrez notre service de chauffeur à l'heure sur la Côte d'Azur et dans les grandes stations des Alpes.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur privé à l'heure à Courchevel ?",
      description:
        "Parlez-nous de votre chalet, de votre hôtel ou de vos déplacements prévus : nous vous proposerons le service de chauffeur qui convient à votre séjour.",
      buttonText: "Réserver un chauffeur à Courchevel",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi choisir un chauffeur privé à l'heure à Courchevel ?",
        answer:
          "Un chauffeur à l'heure vous offre une liberté totale pendant votre séjour à Courchevel. Que vous alliez de votre chalet à un hôtel de luxe, au restaurant, dans les boutiques ou sur le domaine skiable, votre chauffeur reste disponible dès que vous en avez besoin.",
      },
      {
        question: "Puis-je garder le même chauffeur toute une journée à Courchevel ?",
        answer:
          "Oui, bien sûr. La réservation à la demi-journée ou à la journée est fréquente : le même chauffeur vous conduit sans interruption entre les hôtels, les chalets, les restaurants, les boutiques, les stations de ski et vos rendez-vous d'affaires dans Courchevel.",
      },
      {
        question: "Un chauffeur à l'heure convient-il aux vacances au ski à Courchevel ?",
        answer:
          "Oui. Pendant les vacances au ski, le chauffeur à l'heure est très demandé à Courchevel : il assure vos trajets entre Courchevel 1850, Courchevel 1650, les chalets privés, les pistes, les hôtels et les lieux d'après-ski. Il reste disponible toute la journée, ce qui vous laisse un maximum de souplesse sans transferts séparés à organiser.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant mon shopping, un repas ou une activité ?",
        answer:
          "Oui. Votre chauffeur vous attend pendant toute la durée de la réservation à Courchevel, puis vous conduit à l'adresse suivante, sans autre transfert à organiser.",
      },
      {
        question: "Quels lieux desservez-vous le plus souvent à Courchevel avec un chauffeur à l'heure ?",
        answer:
          "Nos chauffeurs desservent régulièrement les hôtels et résidences de luxe de Courchevel, dont le Cheval Blanc Courchevel, Airelles Courchevel et les Six Senses Residences Courchevel, ainsi que les chalets privés, les grandes tables, les stations de ski et les destinations alpines voisines.",
      },
      {
        question: "Un chauffeur à l'heure convient-il à un séjour en chalet de luxe à Courchevel ?",
        answer:
          "Oui. Beaucoup de clients qui séjournent en chalet privé réservent un chauffeur à l'heure pour leurs trajets entre les stations de ski, les restaurants, les hôtels de luxe, les boutiques et les événements privés, en gardant une liberté totale toute la journée.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Courchevel ?",
        answer:
          "La Mercedes Classe S est idéale pour un déplacement d'affaires ou VIP. La Mercedes Classe V est parfaite pour les familles, les groupes et les voyageurs qui emportent leurs skis ou des bagages en plus.",
      },
    ],
  },

  "chauffeur-prive-chamonix": {
    slug: "chauffeur-prive-chamonix",
    path: "/fr/chauffeur-prive-chamonix",
    enPath: hourlyChauffeurPages.chamonix.path,
    locale: "fr",
    metadata: {
      title: "Chauffeur privé à l'heure à Chamonix | Kokolimo",
      description: `Chauffeur privé à Chamonix dès ${eur(E_CLASS.prices[ALPINE_RATES].hourly)} de l'heure ou ${eur(E_CLASS.prices[ALPINE_RATES].fullDay)} la journée, pour vos vacances au ski, les hôtels de luxe et les excursions en montagne.`,
      keywords: [
        "chauffeur privé Chamonix",
        "chauffeur privé à l'heure Chamonix",
        "service de chauffeur Chamonix",
        "chauffeur de luxe Chamonix",
        "chauffeur à disposition Chamonix",
      ],
    },
    serviceLabel: "Chamonix",
    heroTitle: "Chauffeur privé à l'heure à Chamonix",
    heroDescription: `À Chamonix et dans les Alpes, votre chauffeur privé vous attend pour tous vos trajets, au ski comme en montagne, de l'hôtel de luxe aux restaurants et aux boutiques. À partir de ${eur(E_CLASS.prices[ALPINE_RATES].hourly)} de l'heure en Mercedes Classe E (Classe V ${eur(V_CLASS.prices[ALPINE_RATES].hourly)}, Classe S ${eur(S_CLASS.prices[ALPINE_RATES].hourly)}, Maybach ${eur(MAYBACH.prices[ALPINE_RATES].hourly)}), ou ${eur(E_CLASS.prices[ALPINE_RATES].fullDay)} pour une journée de huit heures.`,
    heroImageSrc: hourlyChauffeurPages.chamonix.heroImageSrc,
    heroImageAlt: "Chauffeur privé de luxe à l'heure à Chamonix",
    introTitle: "Un chauffeur à la carte pour vos séjours à Chamonix",
    introDescription:
      "Chamonix attire des visiteurs du monde entier pour le ski, les aventures en montagne, les hébergements de luxe et les activités alpines proposées toute l'année. Avec un chauffeur à l'heure, vous allez d'un lieu à l'autre confortablement, en gardant une liberté totale toute la journée.",
    panels: [
      {
        title: "Chamonix en toute liberté",
        text: "Votre chauffeur reste disponible quand vos plans changent dans la journée. Il vous conduit de votre hôtel de luxe aux domaines skiables, aux restaurants ou aux sites de montagne.",
        theme: "dark",
      },
      {
        title: "Le confort en toute saison",
        text: "En hiver pour le ski comme en été pour la montagne, profitez de trajets fluides sans vous soucier du stationnement, de la circulation ni des changements d'horaire.",
        theme: "light",
      },
    ],
    audienceTitle: "Parfait pour",
    audienceAccent: "les visiteurs de Chamonix",
    audienceDescription:
      "Pour les voyageurs qui veulent de la souplesse, du confort et un transport haut de gamme pendant leur séjour à Chamonix.",
    audienceCards: [
      {
        title: "Clients des hôtels de luxe",
        text: "D'un hôtel à un restaurant, une boutique ou un site à visiter, un chauffeur dédié vous accompagne toute la journée.",
        icon: "/assets/icons/services/multiple-suit-case.webp",
        iconAlt: "Icône des hôtels de luxe",
      },
      {
        title: "Vacances au ski",
        text: "Entre l'hôtel ou le chalet, les remontées mécaniques et l'après-ski, un chauffeur reste disponible dès que vous en avez besoin.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des chalets de ski",
      },
      {
        title: "Sorties en montagne",
        text: "Idéal pour découvrir les sites alpins de Chamonix, ses points de vue et les destinations voisines de la région.",
        icon: "/assets/icons/services/mountain.webp",
        iconAlt: "Icône des sorties en montagne",
      },
    ],
    localLinksTitle: "Choisir une autre destination",
    localLinksDescription:
      "Découvrez notre service de chauffeur à l'heure sur la Côte d'Azur et dans les grandes stations des Alpes.",
    localLinks: hourlyCityLinksFr,
    cta: {
      title: "Besoin d'un chauffeur privé à l'heure à Chamonix ?",
      description:
        "Envoyez-nous vos dates, l'adresse de votre hôtel ou de votre chalet et vos projets de déplacement : nous confirmons la voiture et le prix par écrit avant la réservation. L'annulation est gratuite jusqu'à cinq jours avant la prise en charge.",
      buttonText: "Réserver un chauffeur à Chamonix",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Pourquoi réserver un chauffeur privé à l'heure à Chamonix ?",
        answer:
          "Réserver un chauffeur à l'heure à Chamonix, c'est garder une liberté totale pendant tout le séjour. Votre chauffeur vous emmène dès que vous le souhaitez à l\'hôtel, sur les domaines skiables, au restaurant, dans les boutiques ou vers les sites de montagne.",
      },
      {
        question: "Puis-je réserver un chauffeur pour une journée entière à Chamonix ?",
        answer:
          "Oui. De nombreux clients choisissent une réservation à la demi-journée ou à la journée pour découvrir Chamonix et les Alpes alentour avec un maximum de souplesse.",
      },
      {
        question: "Le service convient-il aux vacances au ski ?",
        answer:
          "Oui, tout à fait. Pendant vos vacances au ski à Chamonix, un chauffeur privé à l'heure vous conduit confortablement de l'hôtel ou du chalet aux remontées mécaniques, aux restaurants et aux adresses d'après-ski.",
      },
      {
        question: "Le chauffeur peut-il m'attendre pendant un repas, du shopping ou une activité ?",
        answer:
          "Oui. Pendant la réservation, votre chauffeur reste disponible à Chamonix et vous emmène d'un lieu à l'autre, sans transfert séparé à organiser.",
      },
      {
        question: "Quelles sont les destinations les plus demandées avec un chauffeur à l'heure à Chamonix ?",
        answer:
          "Les trajets les plus fréquents relient les hôtels de luxe, le centre-ville, les domaines skiables, les restaurants, les sites de montagne et les destinations alpines voisines, dans toute la vallée de Chamonix.",
      },
      {
        question: "Quelle voiture choisir pour un chauffeur à l'heure à Chamonix ?",
        answer:
          "Choisissez la Mercedes Classe S pour un déplacement d'affaires ou VIP, et le van Mercedes Classe V pour une famille, un groupe ou des voyageurs avec du matériel de ski ou des bagages en plus.",
      },
    ],
  },
});
