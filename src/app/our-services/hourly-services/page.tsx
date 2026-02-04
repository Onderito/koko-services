import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsHourlyServices from "./what-is-hourly-services";
import ForWhoHourlyServices from "./for-who-hourly-services";
import FooterComponent from "../footer-component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hourly Driver Services in Nice & French Riviera | Koko Limo",
  description:
    "Book a private driver by the hour in Nice, Cannes, Monaco. Luxury Mercedes vehicles, English-speaking drivers, 24/7 availability.",
  keywords: [
    "private driver Nice",
    "hourly car service French Riviera",
    "driver by the hour Nice",
    "luxury VTC Cannes",
    "driver Monaco",
    "Mercedes driver service",
    "Koko Limo",
  ],
  alternates: {
    canonical: "https://kokolimonice.com/our-services/hourly-services",
  },
};

export default function hourlyServices() {
  return (
    <div className="container">
      <HeroSection />
      <WhatIsHourlyServices />
      <ForWhoHourlyServices />
      <Services />
      <FooterComponent
        title="Discover Hourly Services"
        description="Enjoy the freedom of a bilingual driver at your disposal — flexible, punctual, and tailored to your schedule."
        buttonText="Book Hourly Service"
        buttonHref="/contact-me"
      />
    </div>
  );
}
