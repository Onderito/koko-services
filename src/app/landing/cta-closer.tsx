// Mid-page call to action, laid out as IMG_8794's "Find Your Perfect EV Today" banner with the back of a 2025 S-Class
// on the corniche at dusk (user, 21 Oct 2026: "the back of an S-Class luxury from 2025 would be perfect as CTA banner";
// photo generated with Codex on the user's account). Copy unchanged from the earlier Anti version.

import { Phone } from "lucide-react";
import { contactPhone, contactPhoneDisplay } from "../data/site-config";
import { AntiSection } from "../ui/anti";
import { CtaBanner } from "../ui/banner";

export function PhoneLink() {
  return (
    <a href={`tel:${contactPhone}`} className="group flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-[#d4b471] group-hover:text-[#d4b471]">
        <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] text-white/60">Call Us</span>
        <span className="block text-[15px] font-semibold">{contactPhoneDisplay}</span>
      </span>
    </a>
  );
}

export default function CtaCloser() {
  return (
    <AntiSection tone="white" innerClassName="!pt-0">
      <CtaBanner
        eyebrow="Ready when you land"
        title="Your Riviera Chauffeur Is Closer Than You Think"
        accent="Than You Think"
        text="Tell us your trip and receive your fixed fare before you travel."
        button={{ text: "Get my quote", href: "/#book" }}
        secondary={<PhoneLink />}
        image="/assets/images/banners/cta-s-class-rear.jpg"
        imageAlt="The back of a black Mercedes S-Class on the coastal road above the Riviera at dusk"
        imagePosition="object-[70%_60%]"
      />
    </AntiSection>
  );
}
