// The fleet, "Find Your Perfect Ride". 21 Oct 2026, at the user's request, the cards copy IMG_8794's "Popular Electric
// Models" cards (ui/model-card.tsx), like the price cards: the car's photo across the top, the name and the car page's
// tagline, three facts with icons (each value above its label), and "View Details". No type badges (removed by the user).
// 24 Oct 2026, at the user's request: the E-Class joins the fleet. The facts are the site's own figures
// (data/vehicles.tsx): guests, hourly rate and the lowest transfer fare as "Starting"; the site states no luggage figure
// for the E-Class, so luggage is not shown. The E-Class has no page yet: its card asks for a quote.
// The French home (/fr) passes locale="fr": the cars' French names, lines and labels, and prices written "90 €".

import { Clock3, Tag, UsersRound } from "lucide-react";
import { vehicles } from "../data/vehicles";
import { frLink } from "../data/i18n/addresses";
import { AntiHeading, AntiSection } from "../ui/anti";
import ModelCard from "../ui/model-card";
import RollingNumber from "../ui/rolling-number";

export const FLEET = [
  { id: "mercedes-e", name: "Mercedes E-Class", line: "Business Class", image: "/assets/images/cars/class-e/class-e.webp", focus: "object-[50%_74%]", alt: "Black Mercedes E-Class on a road lined with plane trees near Nice", href: "/cars/class-e", short: "E-Class" },
  { id: "mercedes-v", name: "Mercedes V-Class", line: "Luxury Redefined", image: "/assets/images/cars/class-v/class-v-mercedes.webp", focus: "object-[50%_72%]", alt: "Luxury Mercedes V-CLASS", href: "/cars/class-v", short: "V-Class" },
  { id: "mercedes-s", name: "Mercedes S-Class", line: "Excellence Defined", image: "/assets/images/cars/class-s/class-s.webp", focus: "object-[50%_64%]", alt: "Luxury Mercedes S-CLASS", href: "/cars/class-s", short: "S-Class" },
  { id: "mercedes-maybach", name: "Mercedes Maybach", line: "Prestige Perfected", image: "/assets/images/cars/maybach/maybach.webp", focus: "object-[50%_64%]", alt: "Luxury Mercedes Maybach", href: "/cars/maybach", short: "Maybach" },
] as const;

// The same cars in French, by id.
const FLEET_FR: Record<string, { name: string; line: string; alt: string; short: string }> = {
  "mercedes-e": { name: "Mercedes Classe E", line: "Berline d'affaires", alt: "Mercedes Classe E noire sur une route bordée de platanes près de Nice", short: "Classe E" },
  "mercedes-v": { name: "Mercedes Classe V", line: "Van pour les familles et les groupes", alt: "Van Mercedes Classe V noir", short: "Classe V" },
  "mercedes-s": { name: "Mercedes Classe S", line: "Berline de prestige", alt: "Mercedes Classe S noire", short: "Classe S" },
  "mercedes-maybach": { name: "Mercedes Maybach", line: "Limousine de prestige", alt: "Mercedes Maybach noire", short: "Maybach" },
};

const WORDS = {
  en: {
    guests: "Guests",
    perHour: "Per hour",
    starting: "Starting",
    price: (n: number) => `€${n}`,
    details: "View Details",
    detailsLabel: (car: string) => `View the details of the ${car}`,
    title: "Find Your Perfect Ride",
    homeTitle: "Our Mercedes fleet, from the E-Class to the Maybach",
    intro: "Choose from our range of luxury vehicles. Curated for style, space, and performance.",
  },
  fr: {
    guests: "Passagers",
    perHour: "De l'heure",
    starting: "À partir de",
    price: (n: number) => `${n.toLocaleString("fr-FR")} €`,
    details: "Voir les détails",
    detailsLabel: (car: string) => `Voir les détails de la ${car}`,
    title: "Notre flotte Mercedes, de la Classe E à la Maybach",
    homeTitle: "Notre flotte Mercedes, de la Classe E à la Maybach",
    intro: "Quatre Mercedes, de la berline Classe E au van Classe V pour les groupes, jusqu'à la Maybach.",
  },
};

const icon = { size: 16, strokeWidth: 1.8 };

export function FleetCards({ headingAs = "h3", locale }: { headingAs?: "h2" | "h3"; locale?: "fr" }) {
  const w = WORDS[locale ?? "en"];
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {FLEET.map(car => {
        const v = vehicles.find(x => x.id === car.id)!;
        const starting = Math.min(...Object.values(v.prices).map(p => p.transfer));
        const hourly = Math.min(...Object.values(v.prices).map(p => p.hourly));
        const fr = locale === "fr" ? FLEET_FR[car.id] : undefined;
        const href = fr ? frLink(car.href) : car.href;
        return (
          <li key={car.id}>
            <ModelCard
              href={href}
              as={headingAs}
              image={car.image}
              imageAlt={fr?.alt ?? car.alt}
              imagePosition={car.focus}
              imageSizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 92vw"
              name={fr?.name ?? car.name}
              line={fr?.line ?? car.line}
              specs={[
                { icon: <UsersRound {...icon} />, value: v.passengers, label: w.guests },
                { icon: <Clock3 {...icon} />, value: <RollingNumber value={w.price(hourly)} />, label: w.perHour },
                { icon: <Tag {...icon} />, value: <RollingNumber value={w.price(starting)} />, label: w.starting },
              ]}
              button={{ text: w.details, href, ariaLabel: w.detailsLabel(fr?.short ?? car.short) }}
            />
          </li>
        );
      })}
    </ul>
  );
}

/** The fleet band; the homes pass `home` for their heading naming the fleet, the car pages keep theirs. */
export default function Cars({ locale, home }: { locale?: "fr"; home?: boolean }) {
  const w = WORDS[locale ?? "en"];
  return (
    <AntiSection tone="white" labelledBy="fleet-title">
      <AntiHeading id="fleet-title" title={home ? w.homeTitle : w.title} intro={w.intro} />
      <FleetCards locale={locale} />
    </AntiSection>
  );
}
