// The French versions of the three event pages (Monaco Grand Prix, Cannes Film Festival, Monaco Yacht Show), served at
// /fr/<slug> with the service page template. Each page names its English original (enPath) and uses its hero photo.
// Prices come from the price list (data/vehicles.tsx), written the French way ("90 €"). Hourly and full-day rates are
// the same in every area, so they are read from the Nice area, as the pages' price line does (ui/service-prices.tsx);
// a transfer from Nice Airport is read from the event's town (Monaco, Cannes). The Grand Prix and Festival pages also
// link to the airport transfer page of their town, after the other events.

import { eventPages, type ServicePageConfig, type ServiceCardLink } from "../service-pages";
import { eur, E_CLASS, V_CLASS, frenchSpacing } from "../i18n/fr-helpers";
import { frLink } from "../i18n/addresses";

/** The three event pages, linked from each of them: the French twin once it is live, else the English page. */
const eventLinksFr: ServiceCardLink[] = [
  {
    href: frLink("/our-services/events/monaco-grand-prix"),
    label: "Grand Prix de Monaco",
    description: "Transport avec chauffeur pour le Grand Prix de Formule 1, chaque année en mai.",
  },
  {
    href: frLink("/our-services/events/cannes-film-festival"),
    label: "Festival de Cannes",
    description: "Arrivées sur le tapis rouge et chauffeur privé pendant tout le Festival.",
  },
  {
    href: frLink("/our-services/events/monaco-yacht-show"),
    label: "Monaco Yacht Show",
    description: "Transferts et chauffeurs à disposition pour le salon de septembre.",
  },
];

/** The airport transfer pages of Monaco and Cannes, added to the event links of the Grand Prix and Festival pages. */
const monacoAirportLinkFr: ServiceCardLink = {
  href: frLink("/our-services/transfers/monaco-airport-transfer"),
  label: "Transfert aéroport Nice Monaco",
  description: "De l'aéroport de Nice à Monaco et Monte-Carlo, de porte à porte.",
};

const cannesAirportLinkFr: ServiceCardLink = {
  href: frLink("/our-services/transfers/cannes-airport-transfer"),
  label: "Transfert aéroport Nice Cannes",
  description: "De l'aéroport de Nice à Cannes, la Croisette et les hôtels.",
};

export const eventPagesFr = frenchSpacing<Record<string, ServicePageConfig>>({
  "chauffeur-grand-prix-monaco": {
    slug: "chauffeur-grand-prix-monaco",
    path: "/fr/chauffeur-grand-prix-monaco",
    enPath: eventPages["monaco-grand-prix"].path,
    locale: "fr",
    metadata: {
      title: "Transport Grand Prix de Monaco | Chauffeur privé | Kokolimo",
      description: `Chauffeur privé pour le Grand Prix de Monaco chaque année en mai, malgré les routes fermées autour du circuit : dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée.`,
      keywords: [
        "transport Grand Prix de Monaco",
        "chauffeur Grand Prix de Monaco",
        "transfert Grand Prix Monaco",
        "aéroport de Nice au Grand Prix de Monaco",
        "chauffeur privé F1 Monaco",
      ],
    },
    serviceLabel: "Transport Grand Prix de Monaco",
    heroTitle: "Chauffeur privé pour le Grand Prix de Monaco",
    heroDescription: `Transport avec chauffeur privé pour le Grand Prix de Monaco, chaque année en mai. Accueil à l'aéroport Nice Côte d'Azur et transferts à la demande, en contournant les fermetures du circuit et la foule de la semaine de course. En Mercedes Classe E : transfert de l'aéroport à Monaco dès ${eur(E_CLASS.prices.monaco.transfer)}, chauffeur à disposition dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée.`,
    heroImageSrc: eventPages["monaco-grand-prix"].heroImageSrc,
    heroImageAlt: "Transport pour le Grand Prix de Monaco, une voiture de course sur le circuit du port",
    introTitle: "La semaine du Grand Prix, organisée pour vous",
    introDescription:
      "Pendant la semaine de course, la Principauté est pleine à craquer et ses routes sont presque toutes fermées : un chauffeur est la seule façon de se déplacer tranquillement.",
    panels: [
      {
        title: "Votre arrivée pour le Grand Prix",
        text: "Nous vous attendons à l'arrivée de votre vol à Nice, à 30 à 40 minutes environ de Monaco, puis vous conduisons vers la Principauté ; vous pouvez aussi combiner le trajet avec l'hélicoptère jusqu'à l'héliport.",
        theme: "dark",
      },
      {
        title: "Autour du circuit",
        text: "Une fois le circuit installé, le centre de Monaco est fermé à la circulation ; un chauffeur qui connaît les déviations vous dépose au plus près de votre tribune ou de votre terrasse, autant que les accès le permettent.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "la semaine du Grand Prix",
    audienceDescription:
      "Pensé pour le joyau du calendrier de la Formule 1, où les fermetures de routes et la foule rendent un chauffeur privé indispensable.",
    audienceCards: [
      {
        title: "Tribunes et terrasses",
        text: "Des trajets vers les tribunes et les terrasses qui surplombent le circuit, calés sur les horaires des séances.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des tribunes du Grand Prix",
      },
      {
        title: "La course depuis un yacht",
        text: "Des transferts vers les yachts amarrés à Port Hercule, qui offrent les plus belles vues sur la course.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des yachts du Grand Prix",
      },
      {
        title: "Réceptions et dîners",
        text: "Un chauffeur à disposition entre les espaces hospitalité, les hôtels et les dîners, tout au long d'un week-end de course très chargé.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des réceptions du Grand Prix",
      },
    ],
    localLinksTitle: "Transport événementiel",
    localLinksDescription:
      "Choisissez l'événement auquel vous assistez pour un transport avec chauffeur adapté à son programme et à ses fermetures de routes, ou réservez votre transfert depuis l'aéroport de Nice.",
    localLinks: [...eventLinksFr, monacoAirportLinkFr],
    cta: {
      title: "Vous assistez au Grand Prix de Monaco ?",
      description:
        "Envoyez-nous vos dates et le nombre de passagers : nous organisons votre transport avec chauffeur pour le Grand Prix, en tenant compte des fermetures de routes et de la foule, et confirmons la voiture et le prix fixe avant la réservation.",
      buttonText: "Organiser mon transport pour le Grand Prix",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quand a lieu le Grand Prix de Monaco ?",
        answer:
          "Le Grand Prix de Monaco a lieu chaque année fin mai, dans les rues de Monte-Carlo : essais le jeudi, qualifications le samedi et course le dimanche.",
      },
      {
        question: "Comment se rendre au Grand Prix de Monaco ?",
        answer: `En chauffeur privé depuis l'aéroport de Nice, en 30 à 40 minutes environ par la route. Votre chauffeur suit votre vol et vous attend dans le hall des arrivées avec une pancarte à votre nom, une heure d'attente incluse ; le transfert jusqu'à Monaco coûte à partir de ${eur(E_CLASS.prices.monaco.transfer)} en Mercedes Classe E ou ${eur(V_CLASS.prices.monaco.transfer)} en Classe V, à prix fixe confirmé avant la réservation. Vous pouvez aussi prendre l'hélicoptère jusqu'à l'héliport de Monaco, où une voiture vous attend.`,
      },
      {
        question: "Pouvez-vous assurer mes déplacements pendant la semaine du Grand Prix ?",
        answer:
          "Oui. Un chauffeur qui connaît les fermetures de routes vous dépose près de votre tribune ou de votre terrasse, et reste à votre disposition entre les séances et les dîners.",
      },
      {
        question: "Faut-il réserver tôt son transport pour le Grand Prix ?",
        answer:
          "Oui. Pendant la semaine du Grand Prix, toute la Côte d'Azur affiche complet : il est indispensable de réserver chauffeurs, hélicoptères et hôtels longtemps à l'avance. L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge ; au-delà, le prix total est dû.",
      },
      {
        question: "Pouvez-vous me conduire jusqu'à un yacht pour la course ?",
        answer:
          "Oui. Nous conduisons les invités jusqu'aux yachts amarrés à Port Hercule, qui offrent certaines des plus belles vues sur le circuit.",
      },
    ],
  },

  "chauffeur-festival-de-cannes": {
    slug: "chauffeur-festival-de-cannes",
    path: "/fr/chauffeur-festival-de-cannes",
    enPath: eventPages["cannes-film-festival"].path,
    locale: "fr",
    metadata: {
      title: "Transport Festival de Cannes | Chauffeur privé | Kokolimo",
      description: `Chauffeur privé pour le Festival de Cannes chaque année en mai, dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée : arrivées sur le tapis rouge et soirées de gala.`,
      keywords: [
        "transport Festival de Cannes",
        "chauffeur Festival de Cannes",
        "transfert tapis rouge Cannes",
        "aéroport de Nice au Festival de Cannes",
        "voiture avec chauffeur Festival de Cannes",
      ],
    },
    serviceLabel: "Transport Festival de Cannes",
    heroTitle: "Chauffeur privé pour le Festival de Cannes",
    heroDescription: `Transport avec chauffeur privé pour le Festival de Cannes, chaque année en mai : accueil à l'aéroport Nice Côte d'Azur, arrivées sur le tapis rouge du Palais, soirées de gala et transferts à la demande en contournant la foule. En Mercedes Classe E : transfert de l'aéroport à Cannes dès ${eur(E_CLASS.prices.cannes.transfer)}, chauffeur à disposition dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée.`,
    heroImageSrc: eventPages["cannes-film-festival"].heroImageSrc,
    heroImageAlt: "Transport pour le Festival de Cannes, une Mercedes noire devant le tapis rouge",
    introTitle: "Arrivez avec élégance",
    introDescription:
      "Pendant les deux semaines du Festival, la Croisette devient le centre du monde du cinéma, et l'arrivée fait partie de l'événement.",
    panels: [
      {
        title: "Jusqu'au tapis rouge",
        text: "Nous vous déposons aux entrées du Palais et aux portes des hôtels avec l'élégance d'une soirée de gala, à l'heure prévue, puis nous vous attendons jusqu'à la fin.",
        theme: "dark",
      },
      {
        title: "Autour de la Croisette",
        text: "Pendant le Festival, les fermetures de routes sont nombreuses et la foule dense ; un chauffeur qui connaît les déviations vous permet de circuler de jour comme de nuit.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "les deux semaines du Festival",
    audienceDescription:
      "Pensé pour le Festival de Cannes, des avant-premières sur le tapis rouge aux soirées dans les villas et aux événements sur les yachts de la baie.",
    audienceCards: [
      {
        title: "Tapis rouge et galas",
        text: "Des arrivées calmes, en tenue de soirée, au Palais et aux galas : nous vous déposons à l'entrée et revenons vous chercher à la sortie.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône du tapis rouge de Cannes",
      },
      {
        title: "Hôtels de la Croisette",
        text: "Des transferts entre l'aéroport de Nice, le Carlton, le Martinez et les rendez-vous, déjeuners et dîners de la semaine du Festival.",
        icon: "/assets/icons/services/hand.webp",
        iconAlt: "Icône des hôtels du Festival de Cannes",
      },
      {
        title: "Villas et yachts",
        text: "Des trajets vers les soirées dans les villas des collines et les événements sur les yachts de la baie, toute la nuit.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des villas du Festival de Cannes",
      },
    ],
    localLinksTitle: "Transport événementiel",
    localLinksDescription:
      "Choisissez l'événement auquel vous assistez pour un transport avec chauffeur adapté à son programme et à ses fermetures de routes, ou réservez votre transfert depuis l'aéroport de Nice.",
    localLinks: [...eventLinksFr, cannesAirportLinkFr],
    cta: {
      title: "Vous assistez au Festival de Cannes ?",
      description:
        "Envoyez-nous vos dates et le nombre de passagers : nous organisons votre transport avec chauffeur pour le Festival, de l'aéroport de Nice au tapis rouge et aux soirées, et confirmons la voiture et le prix fixe avant la réservation.",
      buttonText: "Organiser mon transport pour le Festival",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quand a lieu le Festival de Cannes ?",
        answer:
          "Le Festival de Cannes a lieu chaque année en mai, pendant deux semaines, autour du Palais des Festivals et de sa montée des marches sur le tapis rouge, le long de la Croisette.",
      },
      {
        question: "Comment arriver sur le tapis rouge à Cannes ?",
        answer:
          "Un chauffeur privé vous dépose aux entrées du Palais avec l'élégance d'une soirée de gala, à l'heure prévue, et vous attend jusqu'à la fin de la projection ou du gala.",
      },
      {
        question: "Un chauffeur est-il utile pendant le Festival ?",
        answer:
          "Oui, très. Avec les nombreuses fermetures de routes et la foule, un chauffeur vous permet de circuler entre projections, rendez-vous et soirées, de jour comme de nuit.",
      },
      {
        question: "Pouvez-vous venir me chercher à l'aéroport de Nice pour le Festival ?",
        answer: `Oui. Cannes est à une trentaine de minutes de l'aéroport de Nice : votre chauffeur suit votre vol et vous attend dans le hall des arrivées avec une pancarte à votre nom, une heure d'attente incluse. Le transfert jusqu'à Cannes coûte à partir de ${eur(E_CLASS.prices.cannes.transfer)} en Mercedes Classe E ou ${eur(V_CLASS.prices.cannes.transfer)} en Classe V, à prix fixe confirmé avant la réservation. Nous organisons ensuite vos déplacements de la semaine.`,
      },
      {
        question: "Pouvez-vous me conduire aux soirées en villa et sur les yachts ?",
        answer:
          "Oui. Nous conduisons les invités aux soirées dans les villas des collines et aux événements sur les yachts de la baie, toute la nuit.",
      },
    ],
  },

  "chauffeur-monaco-yacht-show": {
    slug: "chauffeur-monaco-yacht-show",
    path: "/fr/chauffeur-monaco-yacht-show",
    enPath: eventPages["monaco-yacht-show"].path,
    locale: "fr",
    metadata: {
      title: "Transport Monaco Yacht Show | Chauffeur privé | Kokolimo",
      description: `Chauffeur privé pour le Monaco Yacht Show chaque année en septembre, de l'aéroport de Nice à Port Hercule : dès ${eur(E_CLASS.prices.nice.hourly)} de l'heure ou ${eur(E_CLASS.prices.nice.fullDay)} la journée.`,
      keywords: [
        "transport Monaco Yacht Show",
        "chauffeur Monaco Yacht Show",
        "Monaco Yacht Show Port Hercule",
        "aéroport de Nice au Monaco Yacht Show",
        "transfert MYS",
      ],
    },
    serviceLabel: "Transport Monaco Yacht Show",
    heroTitle: "Chauffeur privé pour le Monaco Yacht Show",
    heroDescription:
      "Transport avec chauffeur privé pour le Monaco Yacht Show, chaque année en septembre : arrivées de l'aéroport Nice Côte d'Azur à Port Hercule et transferts à la demande en contournant la foule.",
    heroImageSrc: eventPages["monaco-yacht-show"].heroImageSrc,
    heroImageAlt: "Transport pour le Monaco Yacht Show, des superyachts à Port Hercule et une Mercedes noire",
    introTitle: "La semaine des superyachts",
    introDescription:
      "Chaque année en septembre, le Monaco Yacht Show remplit Port Hercule des plus grands superyachts du monde, et la Principauté d'acheteurs et de courtiers.",
    panels: [
      {
        title: "Votre arrivée pour le salon",
        text: "Nous vous attendons à l'arrivée de votre vol à Nice, à 30 à 40 minutes environ de Monaco, puis vous conduisons vers Port Hercule ; vous pouvez aussi combiner le trajet avec l'hélicoptère jusqu'à l'héliport.",
        theme: "dark",
      },
      {
        title: "Malgré la foule",
        text: "Pendant la semaine du salon, Monaco affiche complet, avec des routes fermées et une foule dense ; un chauffeur qui connaît les déviations rend vos arrivées fluides.",
        theme: "light",
      },
    ],
    audienceTitle: "Idéal pour",
    audienceAccent: "la semaine du Yacht Show",
    audienceDescription:
      "Pensé pour le premier salon de superyachts au monde, où courtiers, propriétaires et médias remplissent la Principauté pendant une semaine exigeante.",
    audienceCards: [
      {
        title: "Courtiers et propriétaires",
        text: "Des trajets fiables entre les quais, les rendez-vous et les dîners pendant la semaine la plus chargée de l'année à Monaco.",
        icon: "/assets/icons/services/star.webp",
        iconAlt: "Icône des courtiers du Yacht Show",
      },
      {
        title: "Aéroport et héliport",
        text: "Arrivée depuis l'aéroport de Nice par la route, ou en hélicoptère jusqu'à l'héliport de Monaco, où une voiture vous attend.",
        icon: "/assets/icons/services/plane.webp",
        iconAlt: "Icône de l'aéroport pour le Yacht Show",
      },
      {
        title: "Transferts à la demande",
        text: "Un chauffeur à disposition entre le salon, les hôtels et les soirées, qui vous dépose près de chaque entrée.",
        icon: "/assets/icons/services/van.webp",
        iconAlt: "Icône des transferts du Yacht Show",
      },
    ],
    localLinksTitle: "Transport événementiel",
    localLinksDescription:
      "Choisissez l'événement auquel vous assistez pour un transport avec chauffeur adapté à son programme et à ses fermetures de routes.",
    localLinks: eventLinksFr,
    cta: {
      title: "Vous assistez au Monaco Yacht Show ?",
      description:
        "Envoyez-nous vos dates et le nombre de passagers : nous organisons votre transport avec chauffeur pour le salon, en tenant compte des fermetures de routes et de la foule.",
      buttonText: "Organiser mon transport pour le Yacht Show",
      buttonHref: frLink("/contact-me"),
    },
    faq: [
      {
        question: "Quand a lieu le Monaco Yacht Show ?",
        answer:
          "Le Monaco Yacht Show a lieu chaque année en septembre : Port Hercule accueille alors les plus grands superyachts du monde, et Monaco devient le grand rendez-vous du calendrier du yachting.",
      },
      {
        question: "Comment se rendre au Monaco Yacht Show ?",
        answer:
          "En chauffeur privé depuis l'aéroport de Nice, en 30 à 40 minutes environ, ou en hélicoptère jusqu'à l'héliport de Monaco, où une voiture vous attend.",
      },
      {
        question: "Faut-il réserver tôt son transport pour le salon ?",
        answer:
          "Oui. Pendant la semaine du salon, toute la Côte d'Azur affiche complet : il est indispensable de réserver chauffeurs et hélicoptères bien à l'avance.",
      },
      {
        question: "Un chauffeur peut-il assurer mes déplacements pendant la semaine du salon ?",
        answer:
          "Oui. Un chauffeur qui connaît les fermetures de routes vous dépose près des entrées et des événements, et reste à votre disposition entre les rendez-vous et les dîners.",
      },
      {
        question: "Peut-on combiner le salon avec le Cannes Yachting Festival ?",
        answer:
          "Oui. Les deux salons de septembre peuvent se combiner, avec le même chauffeur pour vous conduire entre Monaco, Cannes et l'aéroport.",
      },
    ],
  },
});
