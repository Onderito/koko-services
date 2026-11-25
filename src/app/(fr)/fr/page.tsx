// The French home (/fr): the English home's sections in French (each takes locale="fr"), its English twin "/" in the
// hreflang links (data/i18n/addresses.ts) and in its WebPage data. The articles band is left out: the articles exist in
// English only. The booking bar opens the quote on /reservation, as on the English home.

import type { Metadata } from "next";
import HomeHero from "@/app/landing/home-hero";
import Services from "@/app/landing/services";
import Performances from "@/app/landing/performances";
import Cars from "@/app/landing/cars";
import CtaCloser from "@/app/landing/cta-closer";
import Reviews from "@/app/landing/reviews";
import Pricing from "@/app/landing/pricing";
import Steps from "@/app/landing/steps";
import Vip from "@/app/landing/vip";
import Faq from "@/app/landing/faq";
import Trust from "@/app/landing/trust";
import Footer from "@/app/layout/footer";
import { AntiSection } from "@/app/ui/anti";
import BookingReasons from "@/app/ui/booking-reasons";
import HomePageJsonLd from "@/app/ui/schema/home-page-json-ld";
import { pageMetadata } from "@/app/data/page-metadata";
import { businessGeo } from "@/app/data/site-config";

// Under 155 characters, with a no-break space before the colon.
const title = "Kokolimo, chauffeur privé de luxe à Nice, Cannes et Monaco";
const description =
  "Chauffeur privé à Nice, Cannes, Monaco et Saint-Tropez : transferts aéroport de Nice, chauffeur à l'heure, Alpes l'hiver. Mercedes, prix fixe, 24 h/24.";

export const metadata: Metadata = {
  ...pageMetadata({ title, description, path: "/fr", locale: "fr" }),
  // Where the business is, for maps and directories that read these tags (as on the English home).
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": `${businessGeo.latitude};${businessGeo.longitude}`,
    ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
  },
};

export default function FrenchHome() {
  return (
    <>
      <HomePageJsonLd language="fr" name={title} description={description} />
      <HomeHero locale="fr" />
      <Services locale="fr" />
      <Performances locale="fr" />
      <Cars locale="fr" home />
      <CtaCloser locale="fr" />
      <Reviews locale="fr" />
      <AntiSection tone="white" labelledBy="service-reasons-title">
        <BookingReasons locale="fr" />
      </AntiSection>
      <Pricing locale="fr" />
      <Steps locale="fr" />
      <Vip locale="fr" />
      <Faq locale="fr" />
      <Trust locale="fr" />
      <Footer locale="fr" />
    </>
  );
}
