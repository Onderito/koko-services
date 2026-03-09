import HeroSection from "./landing/hero-section";
import Services from "./landing/services";
import Cars from "./landing/cars";
import Blogs from "./landing/blogs";
import Pricing from "./landing/pricing";
import Vip from "./landing/vip";
import Footer from "./layout/footer";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Driver in Nice, Cannes and Monaco | Koko Limo",
  description:
    "Luxury private driver service on the French Riviera. Book airport transfers, hourly chauffeur hire and premium travel in Nice, Cannes, Monaco and Saint-Tropez.",
  alternates: {
    canonical: "https://kokolimonice.com",
  },
};

const Performances = dynamic(() => import("./landing/performances"), {
  loading: () => <p>Loading…</p>,
});

export default function Home() {
  return (
    <>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div className="container">
        <Services />
      </div>
      <Performances />
      <div className="container">
        <Cars />
      </div>
      <div className="container">
        <Blogs />
      </div>
      <div className="container">
        <Pricing />
      </div>
      <div className="container">
        <Vip />
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
