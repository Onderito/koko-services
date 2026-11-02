// The fleet, "Find Your Perfect Ride". 21 Oct 2026, at the user's request, the cards copy IMG_8794's "Popular Electric
// Models" cards (ui/model-card.tsx), like the price cards: the car's photo across the top, the name and the car page's
// tagline, three facts with icons (each value above its label), and "View Details". No type badges (removed by the user).
// 24 Oct 2026, at the user's request: the E-Class joins the fleet. The facts are the site's own figures
// (data/vehicles.tsx): guests, hourly rate and the lowest transfer fare as "Starting"; the site states no luggage figure
// for the E-Class, so luggage is not shown. The E-Class has no page yet: its card asks for a quote.

import { Clock3, Tag, UsersRound } from "lucide-react";
import { vehicles } from "../data/vehicles";
import { AntiHeading, AntiSection } from "../ui/anti";
import ModelCard from "../ui/model-card";
import RollingNumber from "../ui/rolling-number";

export const FLEET = [
  { id: "mercedes-e", name: "Mercedes E-Class", line: "Business Class", image: "/assets/images/cars/class-e/class-e.webp", focus: "object-[50%_74%]", alt: "Black Mercedes E-Class on a road lined with plane trees near Nice", href: "/cars/class-e", short: "E-Class" },
  { id: "mercedes-v", name: "Mercedes V-Class", line: "Luxury Redefined", image: "/assets/images/cars/class-v/class-v-mercedes.webp", focus: "object-[50%_72%]", alt: "Luxury Mercedes V-CLASS", href: "/cars/class-v", short: "V-Class" },
  { id: "mercedes-s", name: "Mercedes S-Class", line: "Excellence Defined", image: "/assets/images/cars/class-s/class-s.webp", focus: "object-[50%_64%]", alt: "Luxury Mercedes S-CLASS", href: "/cars/class-s", short: "S-Class" },
  { id: "mercedes-maybach", name: "Mercedes Maybach", line: "Prestige Perfected", image: "/assets/images/cars/maybach/maybach.webp", focus: "object-[50%_64%]", alt: "Luxury Mercedes Maybach", href: "/cars/maybach", short: "Maybach" },
] as const;

const icon = { size: 16, strokeWidth: 1.8 };

export function FleetCards({ headingAs = "h3" }: { headingAs?: "h2" | "h3" }) {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {FLEET.map(car => {
        const v = vehicles.find(x => x.id === car.id)!;
        const starting = Math.min(...Object.values(v.prices).map(p => p.transfer));
        const hourly = Math.min(...Object.values(v.prices).map(p => p.hourly));
        return (
          <li key={car.id}>
            <ModelCard
              href={car.href}
              as={headingAs}
              image={car.image}
              imageAlt={car.alt}
              imagePosition={car.focus}
              imageSizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 92vw"
              name={car.name}
              line={car.line}
              specs={[
                { icon: <UsersRound {...icon} />, value: v.passengers, label: "Guests" },
                { icon: <Clock3 {...icon} />, value: <RollingNumber value={`€${hourly}`} />, label: "Per hour" },
                { icon: <Tag {...icon} />, value: <RollingNumber value={`€${starting}`} />, label: "Starting" },
              ]}
              button={{ text: "View Details", href: car.href, ariaLabel: `View the details of the ${car.short}` }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function Cars() {
  return (
    <AntiSection tone="white" labelledBy="fleet-title">
      <AntiHeading id="fleet-title" title="Find Your Perfect Ride" intro="Choose from our range of luxury vehicles — curated for style, space, and performance." />
      <FleetCards />
    </AntiSection>
  );
}
