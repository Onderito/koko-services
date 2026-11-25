// Mid-page call to action, laid out as IMG_8794's "Find Your Perfect EV Today" banner with the back of a 2025 S-Class
// on the corniche at dusk (user, 21 Oct 2026: "the back of an S-Class luxury from 2025 would be perfect as CTA banner";
// photo generated with Codex on the user's account). Copy unchanged from the earlier Anti version. The French home
// (/fr) passes locale="fr"; its button opens the French home's booking bar.

import { Phone } from "lucide-react";
import { contactPhone, contactPhoneDisplay } from "../data/site-config";
import { altFor } from "../data/image-alts";
import { AntiSection } from "../ui/anti";
import { CtaBanner } from "../ui/banner";

export function PhoneLink({ locale }: { locale?: "fr" }) {
  return (
    <a href={`tel:${contactPhone}`} className="group flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-[#d4b471] group-hover:text-[#d4b471]">
        <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] text-white/60">{locale === "fr" ? "Appelez-nous" : "Call Us"}</span>
        <span className="block text-[15px] font-semibold">{contactPhoneDisplay}</span>
      </span>
    </a>
  );
}

const IMAGE = "/assets/images/banners/cta-s-class-rear.jpg";

const TEXT = {
  en: {
    eyebrow: "Ready when you land",
    title: "Your Riviera Chauffeur Is Closer Than You Think",
    accent: "Than You Think",
    text: "Tell us your trip and receive your fixed fare before you travel.",
    button: { text: "Get my quote", href: "/#book" },
    imageAlt: "The back of a black Mercedes S-Class on the coastal road above the Riviera at dusk",
  },
  fr: {
    eyebrow: "Prêt dès votre atterrissage",
    title: "Votre chauffeur sur la Côte d'Azur est plus proche que vous ne le pensez",
    accent: "que vous ne le pensez",
    text: "Indiquez-nous votre trajet et recevez votre prix fixe avant de partir.",
    button: { text: "Obtenir mon devis", href: "/fr#book" },
    imageAlt: altFor(IMAGE, "fr"),
  },
};

export default function CtaCloser({ locale }: { locale?: "fr" }) {
  const t = TEXT[locale ?? "en"];
  return (
    <AntiSection tone="white" innerClassName="!pt-0">
      <CtaBanner
        eyebrow={t.eyebrow}
        title={t.title}
        accent={t.accent}
        text={t.text}
        button={t.button}
        secondary={<PhoneLink locale={locale} />}
        image={IMAGE}
        imageAlt={t.imageAlt}
        imagePosition="object-[70%_60%]"
      />
    </AntiSection>
  );
}
