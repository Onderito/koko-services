import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsPrivateTour from "./what-is-private-tour";
import ForWhoPrivateTour from "./for-who-private-tour";
import FooterComponent from "../footer-component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Private Driver Tours in French Riviera | Nice, Monaco, Cannes | Koko Limo",
  description:
    "Explore the Côte d’Azur with tailor-made driver tours. Visit Monaco, Èze, Saint-Paul de Vence in a luxury Mercedes with English-speaking driver.",
  keywords: [
    "private tour French Riviera",
    "driver tour Nice",
    "luxury tour Monaco",
    "custom tour Côte d'Azur",
    "VTC sightseeing tour",
    "driver guide French Riviera",
    "Koko Limo",
  ],
  alternates: {
    canonical: "https://kokolimonice.com/our-services/private-tours",
  },
};

export default function PrivateHour() {
  return (
    <>
      <HeroSection />
      <WhatIsPrivateTour />
      <ForWhoPrivateTour />
      <div className="container">
        <Services />
      </div>
      <FooterComponent
        title="Private Tours Await You"
        description="Explore the French Riviera’s iconic destinations with a luxury vehicle and personal driver guiding your journey."
        buttonText="Start Your Tour"
        buttonHref="/contact-me"
      />
    </>
  );
}
