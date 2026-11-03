"use client";

// "Driver Services Pricing Guide". 21 Oct 2026, at the user's request:
// - the "Indicative Rates" banner follows IMG_8794's banners: the Promenade des Anglais at dusk (art direction of the
//   S-Class banner) fading into navy, the destination always on its own line so the banner keeps one height, and a gold
//   pill that slides between destinations (Motion spring, ui/sliding-pill.tsx);
// - the car cards copy IMG_8794's "Popular Electric Models" cards (ui/model-card.tsx): photo, name, one line, three
//   facts with icons, a full-width button. No grey boxes behind the rates.
// Every price and note is unchanged (data/vehicles.tsx); the transfer price rolls again when the destination changes.

import Image from "next/image";
import { useState } from "react";
import { Clock3, PlaneLanding, SunMedium } from "lucide-react";

import { cities, vehicles } from "../data/vehicles";
import { AntiHeading } from "../ui/anti";
import ModelCard from "../ui/model-card";
import RollingNumber from "../ui/rolling-number";
import { AllDestinationPrices } from "../ui/destination-prices";
import { useSlidingPill } from "../ui/sliding-pill";

// Card photos generated in the site's art direction (Codex, user's account), one per vehicle.
const CARD_PHOTO: Record<string, string> = {
  "mercedes-e": "/assets/images/cards/card-e-class.jpg",
  "mercedes-v": "/assets/images/cards/card-v-class.jpg",
  "mercedes-s": "/assets/images/cards/card-s-class.jpg",
  "mercedes-maybach": "/assets/images/cards/card-maybach.jpg",
};

const icon = { size: 16, strokeWidth: 1.8 };

export default function Pricing() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const chips = useSlidingPill<HTMLDivElement>(activeCity.id, "z-0 rounded-full bg-[#e8ba64] shadow-[0_6px_18px_rgba(232,186,100,0.25)]");

  return (
    <section aria-labelledby="pricing-title" data-nav-tone="light" className="bg-white text-[#101828]">
      <div className="mx-auto max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <AntiHeading
          id="pricing-title"
          title="Driver Services Pricing Guide"
          intro="Compare indicative transfer, hourly and eight-hour chauffeur rates by vehicle before requesting your confirmed quote."
        />

        <div data-nav-tone="dark" className="relative isolate mt-8 overflow-hidden rounded-[14px] bg-[#0d1922] text-white">
          <div className="absolute inset-x-0 top-0 -z-10 h-[220px] sm:h-[280px] md:inset-0 md:h-auto">
            <Image
              src="/assets/images/banners/rates-promenade-dusk.jpg"
              alt="A black Mercedes S-Class on the Promenade des Anglais in Nice at dusk"
              fill
              sizes="(min-width: 1280px) 1240px, 100vw"
              className="object-cover object-[75%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0.05)_0%,rgba(13,25,34,0.35)_55%,#0d1922_100%)] md:bg-[linear-gradient(90deg,#0d1922_0%,rgba(13,25,34,0.9)_34%,rgba(13,25,34,0.35)_62%,rgba(13,25,34,0)_85%)]" />
          </div>
          <div className="relative max-w-[760px] px-6 pb-8 pt-[196px] sm:pt-[256px] md:px-12 md:py-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d4b471]">Indicative Rates</p>
            <h3 className="mt-3 text-[28px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[40px]">
              Nice Airport to <span className="block whitespace-nowrap text-[#d4b471]">{activeCity.displayName}</span>
            </h3>
            <p className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-white/75 md:text-[16px]">
              These guide prices help clients understand the order of magnitude before requesting a tailored quote. Final pricing can adapt to timing, exact
              route, luggage, and service conditions.
            </p>
            <div ref={chips.listRef} className="relative isolate mt-7 flex flex-wrap gap-2" role="group" aria-label="Destination">
              {chips.pill}
              {cities.map(city => {
                const isActive = activeCity.id === city.id;
                return (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    aria-pressed={isActive}
                    data-selected={isActive ? "true" : "false"}
                    className={`relative z-[1] rounded-full border px-4 py-2.5 text-[14px] font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b471] ${
                      isActive
                        ? `border-transparent text-[#0d1922] ${chips.ready ? "" : "bg-[#e8ba64]"}`
                        : "border-white/25 text-white/85 hover:border-white/50 hover:bg-white/10"
                    }`}
                  >
                    {city.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Selected destination <span className="ml-2 font-semibold text-white">{activeCity.displayName}</span>
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {vehicles.map(vehicle => {
            const pricing = vehicle.prices[activeCity.id];
            return (
              <ModelCard
                key={vehicle.id}
                image={CARD_PHOTO[vehicle.id] ?? vehicle.image}
                imageAlt={`${vehicle.name} vehicle`}
                name={vehicle.name}
                line={`Up to ${vehicle.passengers} passengers`}
                specs={[
                  { icon: <PlaneLanding {...icon} />, value: <RollingNumber value={`${pricing.transfer}€`} replayKey={`${activeCity.id}-${pricing.transfer}`} />, label: "Transfer" },
                  { icon: <Clock3 {...icon} />, value: <RollingNumber value={`${pricing.hourly}€`} />, label: "Per hour" },
                  { icon: <SunMedium {...icon} />, value: <RollingNumber value={`${pricing.fullDay}€`} />, label: "Full day" },
                ]}
                button={{ text: "Get a quote", href: "/#book", ariaLabel: `Get a quote for the ${vehicle.name}` }}
              />
            );
          })}
        </div>

        {/* Every destination's price as text, for visitors comparing and for crawlers (the cards show one at a time). */}
        <AllDestinationPrices />

        <p className="mx-auto mt-8 max-w-4xl text-center text-[13px] leading-relaxed text-[#667085] md:text-[14px]">
          Guide prices are shown for clarity. For events, late-night timing, custom itineraries, or multi-stop journeys, we prepare a tailored quote adapted to the
          exact service level required.
        </p>
      </div>
    </section>
  );
}
