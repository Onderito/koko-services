// "Performance that speaks for itself", laid out as IMG_8794's "Your Trusted EV Partner" banner (user, 21 Oct 2026:
// the banners of IMG_8794 inspire ours): the drone view of the van on the corniche, now at dusk in the art direction of
// the S-Class banner, the title and "Discover All of Our Services" on the left, and the four facts in a translucent
// panel with gold-circle icons on the right (the flags for the languages). The four facts keep their exact words; the
// figures roll when they appear (ui/rolling-number.tsx). The French home (/fr) passes locale="fr": the same facts in
// French, with French number spacing.

import { CalendarCheck, CarFront, Clock3, Languages } from "lucide-react";
import { frLink } from "../data/i18n/addresses";
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

const TEXT = {
  en: {
    title: "Performance that speaks for itself",
    button: { text: "Discover All of Our Services", href: "/our-services" },
    imageAlt: "Drone view of a black chauffeur van on a coastal road above the Mediterranean at dusk",
    transfers: { figure: "1,200+", label: "transfers completed", text: "Over a thousand successful journeys handled with precision, professionalism, and care, trusted by clients across the French Riviera." },
    missed: { figure: "0", label: "missed pickups", text: "Never late, never absent. We’ve honored every reservation with punctuality and dedication, because your time matters." },
    onTime: { figure: "100%", label: "on-time arrivals", text: "Time is luxury. Our entire service is built to ensure you arrive precisely when you need to, no delays, no excuses." },
    languages: { label: "Multilingual service", text: "We speak English, French, Turkish and Russian, to make your experience smooth, seamless, and understood at every moment." },
  },
  fr: {
    title: "Des résultats qui parlent d'eux-mêmes",
    button: { text: "Découvrir tous nos services", href: frLink("/our-services") },
    imageAlt: "Vue de drone d'un van noir avec chauffeur sur une route côtière au-dessus de la Méditerranée, au crépuscule",
    transfers: { figure: "1 200+", label: "transferts effectués", text: "Plus de mille trajets menés avec précision, sérieux et attention, pour des clients de toute la Côte d'Azur." },
    missed: { figure: "0", label: "prise en charge manquée", text: "Jamais en retard, jamais absents : chaque réservation a été honorée à l'heure, parce que votre temps compte." },
    onTime: { figure: "100 %", label: "d'arrivées à l'heure", text: "Tout notre service est organisé pour que vous arriviez à l'heure prévue, sans retard ni excuse." },
    languages: { label: "Service multilingue", text: "Nous parlons anglais, français, turc et russe, pour que tout soit clair à chaque étape de votre trajet." },
  },
};

export default function Performances({ locale }: { locale?: "fr" }) {
  const t = TEXT[locale ?? "en"];
  return (
    <AntiSection tone="white" labelledBy="perf-title" innerClassName="!pt-0">
      <StatsBanner
        titleId="perf-title"
        title={t.title}
        button={t.button}
        image="/assets/images/banners/perf-drone-dusk.jpg"
        imageMirror
        imageAlt={t.imageAlt}
        stats={[
          {
            icon: <CarFront {...icon} />,
            figure: <RollingNumber value={t.transfers.figure} className="text-[#d4b471]" />,
            label: t.transfers.label,
            text: t.transfers.text,
          },
          {
            icon: <CalendarCheck {...icon} />,
            figure: <RollingNumber value={t.missed.figure} className="text-[#d4b471]" />,
            label: t.missed.label,
            text: t.missed.text,
          },
          {
            icon: <Clock3 {...icon} />,
            figure: <RollingNumber value={t.onTime.figure} className="text-[#d4b471]" />,
            label: t.onTime.label,
            text: t.onTime.text,
          },
          {
            icon: <Languages {...icon} />,
            figure: <Flags />,
            label: t.languages.label,
            text: t.languages.text,
          },
        ]}
      />
    </AntiSection>
  );
}
