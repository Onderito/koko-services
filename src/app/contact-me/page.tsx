// /contact-me in the Anti language (inspirations/IMG_8800): a navy band hero with the header inside it (the page's
// h1 and text, WhatsApp and phone as pills, the 24-hour reply note beside them), then the quote form in a white card
// on the grey section (contact-form.tsx), then the navy footer columns. Texts and form unchanged; no animation.
// The "Reply within 24 hours" pill that sat above the title now sits next to the buttons (no label above titles).

import { Clock3, Phone } from "lucide-react";
import Footer from "../layout/footer";
import { AntiSection } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { Accent } from "../ui/kit";
import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";
import ContactForm from "./contact-form";

export default function ContactMe() {
  return (
    <>
      <section data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1922] text-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-[calc(var(--header-h)+3.5rem)] md:px-6 md:pb-16 lg:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <h1 className="max-w-[760px] text-[40px] font-bold leading-[1.04] tracking-[-0.025em] sm:text-[54px] lg:text-[64px]" style={{ textWrap: "balance" }}>
            <Accent text="Contact Me" accent="Me" tone="dark" />
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-relaxed text-white/80 md:text-[18px]" style={{ textWrap: "pretty" }}>
            Tell us about your ride and we&apos;ll get back to you with a tailored quote as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <ArrowButton text="WhatsApp Us" href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex h-11 items-center gap-2.5 rounded-full border border-white/30 px-5 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10"
            >
              <Phone size={16} strokeWidth={1.9} aria-hidden="true" className="text-[#e2b04a]" />
              {contactPhoneDisplay}
            </a>
            <p className="flex items-center gap-2 text-[14px] text-white/70 md:ml-2 md:text-[15px]">
              <Clock3 size={16} strokeWidth={1.9} aria-hidden="true" className="text-[#e2b04a]" />
              Reply within 24 hours
            </p>
          </div>
        </div>
      </section>

      <AntiSection tone="grey" labelledBy="contact-form-title">
        <ContactForm />
      </AntiSection>

      <Footer withCta={false} />
    </>
  );
}
