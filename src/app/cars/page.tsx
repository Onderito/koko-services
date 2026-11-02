// /cars — the fleet page the site was missing (user, 24 Oct 2026: "the page /cars is missing too, displaying the cars").
// A photo hero with the header inside, the four cars as the home page's vehicle cards (E-Class, V-Class, S-Class,
// Maybach), the call-to-action banner, then the footer. Facts and prices are the site's own (data/vehicles.tsx).

import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../layout/footer";
import { siteUrl, whatsappUrl } from "../data/site-config";
import { AntiHeading, AntiOutlinePill, AntiSection } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { CtaBanner } from "../ui/banner";
import { FleetCards } from "../landing/cars";
import { PhoneLink } from "../landing/cta-closer";

export const metadata: Metadata = {
  title: "Our Fleet | Mercedes E-Class, S-Class, V-Class & Maybach | kokolimo",
  description:
    "Kokolimo's chauffeur-driven fleet on the French Riviera: Mercedes E-Class, S-Class, V-Class for up to 7 passengers, and Mercedes-Maybach, with fixed fares confirmed before the ride.",
  alternates: { canonical: `${siteUrl}/cars` },
};

export default function FleetPage() {
  return (
    <>
      <section data-hero-tone="dark" data-nav-tone="dark" className="relative isolate bg-[#0d1922] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/assets/images/banners/rates-promenade-dusk.jpg"
            alt="A black Mercedes S-Class on the Promenade des Anglais in Nice at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,25,34,0.92)_0%,rgba(13,25,34,0.6)_42%,rgba(13,25,34,0.1)_100%)]" />
        </div>
        <div className="mx-auto flex min-h-[520px] max-w-[1240px] flex-col justify-end px-4 pb-14 pt-[calc(var(--header-h)+3.5rem)] md:px-6 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <h1 className="max-w-[720px] text-[40px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[60px]">
            Our Chauffeur <span className="text-[#d4b471]">Fleet</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">
            Four Mercedes, each driven by your private chauffeur: the E-Class and S-Class saloons, the V-Class for up to 7 passengers, and the Maybach for
            special occasions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ArrowButton text="Get my quote" href="/#book" />
            <AntiOutlinePill href={whatsappUrl} external>
              WhatsApp Us
            </AntiOutlinePill>
          </div>
        </div>
      </section>

      <AntiSection tone="white" labelledBy="fleet-list">
        <AntiHeading id="fleet-list" title="Choose Your Vehicle" intro="Indicative rates from Nice Airport; your fixed fare is confirmed before the ride." />
        <FleetCards />
      </AntiSection>

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

      <Footer withCta={false} />
    </>
  );
}
