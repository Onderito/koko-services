import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsPrivateTour from "./what-is-private-tour";
import ForWhoPrivateTour from "./for-who-private-tour";
import FooterComponent from "../footer-component";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Private Chauffeur Tours in French Riviera | Nice, Monaco, Cannes | Koko Limo",
    description: "Explore the Côte d’Azur with tailor-made chauffeur tours. Visit Monaco, Èze, Saint-Paul de Vence in a luxury Mercedes with English-speaking driver.",
    keywords: [
        "private tour French Riviera",
        "chauffeur tour Nice",
        "luxury tour Monaco",
        "custom tour Côte d'Azur",
        "VTC sightseeing tour",
        "chauffeur guide French Riviera",
        "Koko Limo"
    ],
    alternates: {
        canonical: "https://kokolimonice.com/our-services/private-tours",
    },
};


export default function PrivateHour() {
    return (
        <div className="px-6 pt-28 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
            <HeroSection />
            <WhatIsPrivateTour />
            <ForWhoPrivateTour />
            <Services />
            <FooterComponent
                title="Private Tours Await You"
                description="Explore the French Riviera’s iconic destinations with a luxury vehicle and personal driver guiding your journey."
                buttonText="Start Your Tour"
                buttonHref="/contact-me"
            />
        </div>
    )
}