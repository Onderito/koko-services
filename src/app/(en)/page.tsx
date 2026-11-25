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
import Blogs from "@/app/landing/blogs";
import Trust from "@/app/landing/trust";
import Footer from "@/app/layout/footer";
import type { Metadata } from "next";
import { pageMetadata } from "@/app/data/page-metadata";
import { businessGeo } from "@/app/data/site-config";
import { AntiSection } from "@/app/ui/anti";
import BookingReasons from "@/app/ui/booking-reasons";
import HomePageJsonLd from "@/app/ui/schema/home-page-json-ld";

// Home title and description: the brand first, the areas served, and the phrase people search ("private driver nice");
// the same text in the sharing tags, plus the business's map location. The description stays under 155 characters.
const homeTitle = "Kokolimo - Luxury Private Driver in Nice, Cannes & Monaco";
const homeDescription =
  "Private driver in Nice, Cannes, Antibes, Monaco and Saint-Tropez: Nice Airport transfers, hourly chauffeur, Alps in winter. Mercedes, fixed prices, 24/7.";

export const metadata: Metadata = {
  ...pageMetadata({ title: homeTitle, description: homeDescription, path: "" }),
  // Where the business is, for maps and directories that read these tags (Google reads the LocalBusiness data).
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": `${businessGeo.latitude};${businessGeo.longitude}`,
    ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
  },
};

// The home page's blocks, in order: services, performance, fleet, CTA banner, reviews, the four reasons travellers book
// (ratings, the company, languages, terms), pricing, process, what every ride includes, articles gallery, reviews
// reminder, then the footer's CTA banner and columns. Each section is a full-width band that sets its header tone.
export default function Home() {
  return (
    <>
      <HomePageJsonLd language="en" name={homeTitle} description={homeDescription} />
      <HomeHero />
      <Services />
      <Performances />
      <Cars home />
      <CtaCloser />
      <Reviews />
      <AntiSection tone="white" labelledBy="service-reasons-title">
        <BookingReasons />
      </AntiSection>
      <Pricing />
      <Steps />
      <Vip />
      <Faq />
      <Blogs />
      <Trust />
      <Footer />
    </>
  );
}
