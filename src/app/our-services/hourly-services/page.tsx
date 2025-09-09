import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsHourlyServices from "./what-is-hourly-services";
import ForWhoHourlyServices from "./for-who-hourly-services";
import FooterComponent from "../footer-component";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hourly Chauffeur Services in Nice & French Riviera | Koko Limo",
    description: "Book a private chauffeur by the hour in Nice, Cannes, Monaco. Luxury Mercedes vehicles, English-speaking drivers, 24/7 availability.",
    keywords: [
        "private chauffeur Nice",
        "hourly car service French Riviera",
        "chauffeur by the hour Nice",
        "luxury VTC Cannes",
        "chauffeur Monaco",
        "Mercedes chauffeur service",
        "Koko Limo"
    ],
    alternates: {
        canonical: "https://kokolimonice.com/our-services/hourly-services",
    },
};

export default function hourlyServices() {
    return (
        <div className="px-6 pt-28 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
            <HeroSection />
            <WhatIsHourlyServices />
            <ForWhoHourlyServices />
            <Services />
            <FooterComponent
                title="Discover Hourly Services"
                description="Enjoy the freedom of a bilingual chauffeur at your disposal — flexible, punctual, and tailored to your schedule."
                buttonText="Book Hourly Service"
                buttonHref="/contact-me"
            />
        </div>
    )
}