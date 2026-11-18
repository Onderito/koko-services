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
import { businessGeo, businessName, siteUrl, socialPreviewImage } from "./data/site-config";

// Home title and description: the brand first, the areas served, and the phrase people search ("private driver nice");
// the same text in the sharing tags, plus the business's map location.
const homeTitle = "Kokolimo - Luxury Private Driver in Nice, Cannes & Monaco";
const homeDescription =
  "Private driver in Nice, Cannes, Antibes, Monaco, Menton and Saint-Tropez: Nice Airport transfers, hourly chauffeur, Alps in winter. Mercedes, fixed prices, 24/7.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "https://kokolimo.com",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteUrl,
    siteName: businessName,
    type: "website",
    images: [{ url: socialPreviewImage, alt: `${businessName} - Luxury private driver on the French Riviera` }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [socialPreviewImage],
  },
  // Where the business is, for maps and directories that read these tags (Google reads the LocalBusiness data).
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": `${businessGeo.latitude};${businessGeo.longitude}`,
    ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
  },
};

// The home page's blocks, in order: services, performance, fleet, CTA banner, reviews, pricing, process, VIP, articles
// gallery, reviews reminder, then the footer's CTA banner and columns. Each section is a full-width band that sets its
// header tone.
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
