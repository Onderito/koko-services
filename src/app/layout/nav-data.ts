// Content of the header's menus, in English and in French. Every link points to an existing page.

import { serviceMenuLinks } from "../data/service-pages";
import { frLink } from "../data/i18n/addresses";

export type NavLink = { href: string; label: string; description?: string };
export type NavColumn = { title: string; href?: string; links: NavLink[] };
/** `focus`: where a portrait photo is cut in the 16:10 tile, so the whole car shows. */
export type NavCard = { href: string; title: string; text: string; image: string; alt: string; focus?: string };

export type NavPanel = {
  key: "services" | "destinations" | "fleet";
  label: string;
  eyebrow: string;
  title: string;
  list?: NavLink[];
  columns?: NavColumn[];
  cards: NavCard[];
};

export const NAV_PANELS: NavPanel[] = [
  {
    key: "services",
    label: "Services",
    eyebrow: "Our services",
    title: "Your private chauffeur on the Riviera",
    list: serviceMenuLinks.map(l => ({ href: l.href, label: l.label, description: l.description })),
    cards: [
      {
        href: "/our-services/transfers/monaco-airport-transfer",
        title: "Nice Airport to Monaco",
        text: "Met at arrivals, flight tracked, one hour of waiting included.",
        image: "/assets/images/cars/class-v/class-v-mercedes.webp",
        alt: "Kokolimo Mercedes V-Class at Port Hercule, Monaco",
      },
    ],
  },
  {
    key: "destinations",
    label: "Destinations",
    eyebrow: "Destinations",
    title: "From Nice to the whole Riviera",
    columns: [
      {
        title: "Transfers from Nice",
        href: "/our-services/transfers",
        links: [
          { href: "/our-services/transfers/nice-airport-transfer", label: "Nice Airport" },
          { href: "/our-services/transfers/monaco-airport-transfer", label: "Monaco" },
          { href: "/our-services/transfers/cannes-airport-transfer", label: "Cannes" },
          { href: "/our-services/transfers/antibes-transfer", label: "Antibes" },
          { href: "/our-services/transfers/saint-tropez-transfer", label: "Saint-Tropez" },
          { href: "/our-services/transfers/eze-transfer", label: "Èze" },
          { href: "/our-services/transfers/menton-transfer", label: "Menton" },
          { href: "/our-services/transfers/villefranche-transfer", label: "Villefranche-sur-Mer" },
          { href: "/our-services/transfers/saint-jean-cap-ferrat-transfer", label: "Saint-Jean-Cap-Ferrat" },
          { href: "/our-services/transfers/long-distance-transfer", label: "Long distance" },
        ],
      },
      {
        title: "Hourly chauffeur",
        href: "/our-services/hourly-chauffeur",
        links: [
          { href: "/our-services/hourly-chauffeur/nice", label: "Nice" },
          { href: "/our-services/hourly-chauffeur/monaco", label: "Monaco" },
          { href: "/our-services/hourly-chauffeur/cannes", label: "Cannes" },
          { href: "/our-services/hourly-chauffeur/saint-tropez", label: "Saint-Tropez" },
        ],
      },
      {
        title: "Private tours",
        href: "/our-services/private-tours",
        links: [
          { href: "/our-services/private-tours/nice", label: "Nice" },
          { href: "/our-services/private-tours/monaco", label: "Monaco & Èze" },
          { href: "/our-services/private-tours/cannes", label: "Cannes" },
          { href: "/our-services/private-tours/saint-tropez", label: "Saint-Tropez" },
        ],
      },
      {
        title: "Winter in the Alps",
        links: [
          { href: "/our-services/hourly-chauffeur/courchevel", label: "Courchevel" },
          { href: "/our-services/hourly-chauffeur/megeve", label: "Megève" },
          { href: "/our-services/hourly-chauffeur/chamonix", label: "Chamonix" },
        ],
      },
    ],
    cards: [],
  },
  {
    key: "fleet",
    label: "Fleet",
    eyebrow: "Our fleet",
    title: "Mercedes, driven by your chauffeur",
    cards: [
      { href: "/cars/class-e", title: "Mercedes E-Class", text: "The business saloon for up to 3 passengers.", image: "/assets/images/cars/class-e/class-e.webp", alt: "Mercedes E-Class on a road lined with plane trees", focus: "object-[50%_74%]" },
      { href: "/cars/class-v", title: "Mercedes V-Class", text: "Up to 7 passengers, for families and groups.", image: "/assets/images/cars/class-v/class-v-mercedes.webp", alt: "Mercedes V-Class at Port Hercule, Monaco" },
      { href: "/cars/class-s", title: "Mercedes S-Class", text: "The executive sedan for airport and business travel.", image: "/assets/images/cars/class-s/class-s.webp", alt: "Mercedes S-Class on a tree-lined road", focus: "object-[50%_64%]" },
      { href: "/cars/maybach", title: "Mercedes-Maybach", text: "For VIPs, weddings and special occasions.", image: "/assets/images/cars/maybach/maybach.webp", alt: "Mercedes-Maybach in a park", focus: "object-[50%_64%]" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Partners" },
];

// The same menus for the French pages. Links go to the French page when it exists (data/i18n/addresses.ts), else to
// the English one; the keys and the order are the English menus'.
const fr = frLink;

export const NAV_PANELS_FR: NavPanel[] = [
  {
    key: "services",
    label: "Services",
    eyebrow: "Nos services",
    title: "Votre chauffeur privé sur la Côte d'Azur",
    list: [
      { href: fr("/our-services/transfers"), label: "Transferts aéroport", description: "Transferts depuis l'aéroport et longues distances avec chauffeur" },
      { href: fr("/our-services/hourly-chauffeur"), label: "Chauffeur privé à l'heure", description: "Un chauffeur à disposition sur la Côte d'Azur et, l'hiver, dans les grandes stations des Alpes" },
      { href: fr("/our-services/private-tours"), label: "Excursions privées", description: "Excursions privées sur la Côte d'Azur et, l'hiver, dans les Alpes françaises." },
      { href: fr("/our-services/yacht-transfers"), label: "Transferts yacht", description: "Transferts avec chauffeur vers les ports de Monaco, Cannes, Antibes et Saint-Tropez." },
      { href: fr("/our-services/events"), label: "Transport événementiel", description: "Chauffeur pour le Grand Prix, les festivals de Cannes et le Monaco Yacht Show." },
    ],
    cards: [
      {
        href: fr("/our-services/transfers/monaco-airport-transfer"),
        title: "Aéroport de Nice à Monaco",
        text: "Accueil aux arrivées, suivi du vol, une heure d'attente incluse.",
        image: "/assets/images/cars/class-v/class-v-mercedes.webp",
        alt: "Mercedes Classe V de Kokolimo sur le port Hercule, à Monaco",
      },
    ],
  },
  {
    key: "destinations",
    label: "Destinations",
    eyebrow: "Destinations",
    title: "De Nice à toute la Côte d'Azur",
    columns: [
      {
        title: "Transferts depuis Nice",
        href: fr("/our-services/transfers"),
        links: [
          { href: fr("/our-services/transfers/nice-airport-transfer"), label: "Aéroport de Nice" },
          { href: fr("/our-services/transfers/monaco-airport-transfer"), label: "Monaco" },
          { href: fr("/our-services/transfers/cannes-airport-transfer"), label: "Cannes" },
          { href: fr("/our-services/transfers/antibes-transfer"), label: "Antibes" },
          { href: fr("/our-services/transfers/saint-tropez-transfer"), label: "Saint-Tropez" },
          { href: fr("/our-services/transfers/eze-transfer"), label: "Èze" },
          { href: fr("/our-services/transfers/menton-transfer"), label: "Menton" },
          { href: fr("/our-services/transfers/villefranche-transfer"), label: "Villefranche-sur-Mer" },
          { href: fr("/our-services/transfers/saint-jean-cap-ferrat-transfer"), label: "Saint-Jean-Cap-Ferrat" },
          { href: fr("/our-services/transfers/long-distance-transfer"), label: "Longue distance" },
        ],
      },
      {
        title: "Chauffeur à l'heure",
        href: fr("/our-services/hourly-chauffeur"),
        links: [
          { href: fr("/our-services/hourly-chauffeur/nice"), label: "Nice" },
          { href: fr("/our-services/hourly-chauffeur/monaco"), label: "Monaco" },
          { href: fr("/our-services/hourly-chauffeur/cannes"), label: "Cannes" },
          { href: fr("/our-services/hourly-chauffeur/saint-tropez"), label: "Saint-Tropez" },
        ],
      },
      {
        title: "Excursions privées",
        href: fr("/our-services/private-tours"),
        links: [
          { href: fr("/our-services/private-tours/nice"), label: "Nice" },
          { href: fr("/our-services/private-tours/monaco"), label: "Monaco et Èze" },
          { href: fr("/our-services/private-tours/cannes"), label: "Cannes" },
          { href: fr("/our-services/private-tours/saint-tropez"), label: "Saint-Tropez" },
        ],
      },
      {
        title: "L'hiver dans les Alpes",
        links: [
          { href: fr("/our-services/hourly-chauffeur/courchevel"), label: "Courchevel" },
          { href: fr("/our-services/hourly-chauffeur/megeve"), label: "Megève" },
          { href: fr("/our-services/hourly-chauffeur/chamonix"), label: "Chamonix" },
        ],
      },
    ],
    cards: [],
  },
  {
    key: "fleet",
    label: "Flotte",
    eyebrow: "Notre flotte",
    title: "Des Mercedes, conduites par votre chauffeur",
    cards: [
      { href: fr("/cars/class-e"), title: "Mercedes Classe E", text: "La berline d'affaires, jusqu'à 3 passagers.", image: "/assets/images/cars/class-e/class-e.webp", alt: "Mercedes Classe E sur une route bordée de platanes", focus: "object-[50%_74%]" },
      { href: fr("/cars/class-v"), title: "Mercedes Classe V", text: "Jusqu'à 7 passagers, pour les familles et les groupes.", image: "/assets/images/cars/class-v/class-v-mercedes.webp", alt: "Mercedes Classe V sur le port Hercule, à Monaco" },
      { href: fr("/cars/class-s"), title: "Mercedes Classe S", text: "La berline de prestige pour l'aéroport et les déplacements d'affaires.", image: "/assets/images/cars/class-s/class-s.webp", alt: "Mercedes Classe S sur une route bordée d'arbres", focus: "object-[50%_64%]" },
      { href: fr("/cars/maybach"), title: "Mercedes-Maybach", text: "Pour les VIP, les mariages et les grandes occasions.", image: "/assets/images/cars/maybach/maybach.webp", alt: "Mercedes-Maybach dans un parc", focus: "object-[50%_64%]" },
    ],
  },
];

export const NAV_LINKS_FR: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: fr("/partners"), label: "Partenaires" },
];
