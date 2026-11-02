// /our-services — the services hub the site never had (asked for on 18 Oct and again on 21 Oct 2026: "we need to do
// the page 'Our Services'"). Anti layout (IMG_8800): photo hero with the header inside, the five services as Anti
// cards, the main routes from Nice Airport, the dark CTA card, then the footer. Each card opens its own service page.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/footer";
import { siteUrl, whatsappUrl } from "../data/site-config";
import { chauffeurToursPage, eventsPage, hourlyChauffeurPage, serviceMenuLinks, transferPages, transfersPage, yachtTransfersPage } from "../data/service-pages";
import { AntiCard, AntiHeading, AntiOutlinePill, AntiSection, AntiTextLink, GoldArrow } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { CtaBanner } from "../ui/banner";
import { PhoneLink } from "../landing/cta-closer";

export const metadata: Metadata = {
  title: "Our Services | Private Chauffeur on the French Riviera | kokolimo",
  description:
    "All Kokolimo chauffeur services on the French Riviera: Nice Airport and private transfers, hourly chauffeur hire, private tours, yacht transfers and event transport.",
  alternates: { canonical: `${siteUrl}/our-services` },
};

const hubs: Record<string, { image: string; alt: string }> = {
  "/our-services/transfers": { image: transfersPage.heroImageSrc, alt: transfersPage.heroImageAlt },
  "/our-services/hourly-chauffeur": { image: hourlyChauffeurPage.heroImageSrc, alt: hourlyChauffeurPage.heroImageAlt },
  "/our-services/private-tours": { image: chauffeurToursPage.heroImageSrc, alt: chauffeurToursPage.heroImageAlt },
  "/our-services/yacht-transfers": { image: yachtTransfersPage.heroImageSrc, alt: yachtTransfersPage.heroImageAlt },
  "/our-services/events": { image: eventsPage.heroImageSrc, alt: eventsPage.heroImageAlt },
};

const routeSlugs = ["monaco-airport-transfer", "cannes-airport-transfer", "antibes-transfer", "saint-tropez-transfer", "eze-transfer", "nice-airport-transfer"];
const routes = routeSlugs.map(s => transferPages[s]).filter(Boolean);

export default function OurServicesPage() {
  return (
    <>
      <section data-hero-tone="dark" data-nav-tone="dark" className="relative isolate bg-[#0d1922] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image src="/assets/images/hero/drone-corniche.jpg" alt="Drone view of a black chauffeur van on a coastal road above the Mediterranean" fill priority sizes="100vw" className="object-cover object-[60%_45%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,25,34,0.9)_0%,rgba(13,25,34,0.55)_45%,rgba(13,25,34,0.15)_100%)]" />
        </div>
        <div className="mx-auto flex min-h-[560px] max-w-[1240px] flex-col justify-end px-4 pb-14 pt-[calc(var(--header-h)+3.5rem)] md:px-6 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <h1 className="max-w-[720px] text-[40px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[60px]">
            Our <span className="text-[#d4b471]">Services</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">
            Private chauffeur services across the French Riviera: Nice Airport and private transfers, hourly chauffeur hire, private tours, yacht transfers and
            event transport.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ArrowButton text="Get my quote" href="/#book" />
            <AntiOutlinePill href={whatsappUrl} external>
              WhatsApp Us
            </AntiOutlinePill>
          </div>
        </div>
      </section>

      <AntiSection tone="white" labelledBy="all-services">
        <AntiHeading id="all-services" title="Find The Right Service" intro="Every service comes with a fixed fare confirmed before the ride." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceMenuLinks.map(s => {
            const hub = hubs[s.href];
            return (
              <AntiCard key={s.href} href={s.href} image={hub?.image ?? "/assets/images/services/transfer.webp"} imageAlt={hub?.alt ?? s.label} imageLinkLabel={`open ${s.label}`}>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[#101828]">
                  <Link href={s.href} className="after:absolute after:inset-0 after:rounded-[10px] after:content-[''] group-hover:text-[#9a7a3e]">
                    {s.label}
                  </Link>
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{s.description}</p>
                <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-[15px] font-semibold text-[#101828]">
                  Explore
                  <GoldArrow />
                </span>
              </AntiCard>
            );
          })}
        </div>
      </AntiSection>

      <AntiSection tone="grey" labelledBy="routes">
        <AntiHeading id="routes" title="Popular Transfers From Nice Airport" action={<AntiTextLink href="/our-services/transfers">All transfers</AntiTextLink>} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map(r => (
            <AntiCard key={r.path} href={r.path} image={r.heroImageSrc} imageAlt={r.heroImageAlt} imageLinkLabel={`open ${r.heroTitle}`}>
              <h3 className="text-[17px] font-semibold text-[#101828]">
                <Link href={r.path} className="after:absolute after:inset-0 after:rounded-[10px] after:content-[''] group-hover:text-[#9a7a3e]">
                  {r.heroTitle}
                </Link>
              </h3>
              <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-[14px] text-[#667085]">
                Private chauffeur, fixed fare
                <GoldArrow />
              </span>
            </AntiCard>
          ))}
        </div>
      </AntiSection>

      <AntiSection tone="white">
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
