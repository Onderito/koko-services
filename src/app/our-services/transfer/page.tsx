import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsTransfer from "./what-is-transfer";
import ForWhoTransfer from "./for-who-transfer";
import FooterComponent from "../footer-component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Airport Transfers from Nice to Monaco, Cannes, Saint-Tropez | Koko Limo",
  description:
    "Private airport transfer with driver from Nice Airport to Monaco, Cannes, Saint-Tropez. Book a premium ride with Koko Limo.",
  keywords: [
    "Nice airport transfer",
    "private transfer Monaco",
    "driver Nice airport",
    "VTC Nice Cannes",
    "transfer French Riviera",
    "airport driver service",
    "Koko Limo",
  ],
  alternates: {
    canonical: "https://kokolimonice.com/our-services/transfer",
  },
};

export default function Transfer() {
  return (
    <div>
      <HeroSection />
      <WhatIsTransfer />
      <ForWhoTransfer />
      <div className="container">
        <Services />
      </div>
      <FooterComponent
        title="Ready to Experience Luxury Transfers?"
        description="Book your private transfer today and enjoy a seamless, safe, and stylish journey across the French Riviera."
        buttonText="Reserve Your Transfer"
        buttonHref="/contact-me"
      />
    </div>
  );
}
