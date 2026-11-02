import HomeHero from "./landing/home-hero";
import Services from "./landing/services";
import Performances from "./landing/performances";
import Cars from "./landing/cars";
import CtaCloser from "./landing/cta-closer";
import Reviews from "./landing/reviews";
import Pricing from "./landing/pricing";
import Steps from "./landing/steps";
import Vip from "./landing/vip";
import Faq from "./landing/faq";
import Blogs from "./landing/blogs";
import Trust from "./landing/trust";
import Footer from "./layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Driver in Nice, Cannes and Monaco | kokolimo",
  description:
    "Luxury private driver service in Nice, Cannes, Monaco and Saint-Tropez. Book airport transfers, hourly chauffeur hire and premium Riviera travel.",
  alternates: {
    canonical: "https://kokolimo.com",
  },
};

// The home page follows the Anti reference (inspirations/IMG_8800) block by block, in the order the user set on
// 21 Oct 2026: services, performance, fleet, CTA banner, reviews, pricing, process, VIP, articles gallery, reviews
// reminder, then the footer's CTA banner and columns. Each section is a full-width band that sets its header tone.
export default function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <Performances />
      <Cars />
      <CtaCloser />
      <Reviews />
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
