// "Performance that speaks for itself", laid out as IMG_8794's "Your Trusted EV Partner" banner (user, 21 Oct 2026:
// the banners of IMG_8794 inspire ours): the drone view of the van on the corniche, now at dusk in the art direction of
// the S-Class banner, the title and "Discover All of Our Services" on the left, and the four facts in a translucent
// panel with gold-circle icons on the right (the flags for the languages). The four facts keep their exact words; the
// figures roll when they appear (ui/rolling-number.tsx).

import { CalendarCheck, CarFront, Clock3, Languages } from "lucide-react";
import { AntiSection } from "../ui/anti";
import { StatsBanner } from "../ui/banner";
import RollingNumber from "../ui/rolling-number";

// Flags of the four languages the chauffeurs speak (English, French, Turkish, Russian).
function Flags() {
  const box = "h-[20px] w-[30px] overflow-hidden rounded-[3px] ring-1 ring-white/25";
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <svg viewBox="0 0 60 40" className={box}>
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
      </svg>
      <svg viewBox="0 0 3 2" className={box}>
        <rect width="1" height="2" fill="#0055A4" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#EF4135" />
      </svg>
      <svg viewBox="0 0 30 20" className={box}>
        <rect width="30" height="20" fill="#E30A17" />
        <circle cx="11" cy="10" r="5" fill="#fff" />
        <circle cx="12.3" cy="10" r="4" fill="#E30A17" />
        <path d="M17.6 10l-2.9 1 1.8-2.5v3l-1.8-2.5z" fill="#fff" />
      </svg>
      <svg viewBox="0 0 3 2" className={box}>
        <rect width="3" height="2" fill="#fff" />
        <rect y=".667" width="3" height=".667" fill="#0039A6" />
        <rect y="1.333" width="3" height=".667" fill="#D52B1E" />
      </svg>
    </span>
  );
}

const icon = { size: 20, strokeWidth: 1.8 };

export default function Performances() {
  return (
    <AntiSection tone="white" labelledBy="perf-title" innerClassName="!pt-0">
      <StatsBanner
        titleId="perf-title"
        title="Performance that speaks for itself"
        button={{ text: "Discover All of Our Services", href: "/our-services" }}
        image="/assets/images/banners/perf-drone-dusk.jpg"
        imageMirror
        imageAlt="Drone view of a black chauffeur van on a coastal road above the Mediterranean at dusk"
        stats={[
          {
            icon: <CarFront {...icon} />,
            figure: <RollingNumber value="1,200+" className="text-[#d4b471]" />,
            label: "transfers completed",
            text: "Over a thousand successful journeys handled with precision, professionalism, and care, trusted by clients across the French Riviera.",
          },
          {
            icon: <CalendarCheck {...icon} />,
            figure: <RollingNumber value="0" className="text-[#d4b471]" />,
            label: "missed pickups",
            text: "Never late, never absent. We’ve honored every reservation with punctuality and dedication, because your time matters.",
          },
          {
            icon: <Clock3 {...icon} />,
            figure: <RollingNumber value="100%" className="text-[#d4b471]" />,
            label: "on-time arrivals",
            text: "Time is luxury. Our entire service is built to ensure you arrive precisely when you need to, no delays, no excuses.",
          },
          {
            icon: <Languages {...icon} />,
            figure: <Flags />,
            label: "Multilingual service",
            text: "We speak English, French, Turkish and Russian, to make your experience smooth, seamless, and understood at every moment.",
          },
        ]}
      />
    </AntiSection>
  );
}
