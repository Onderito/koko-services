import Services from "@/app/landing/services"
import HeroSection from "./hero-section"
import WhatIsTransfer from "./what-is-transfer"
import ForWhoTransfer from "./for-who-transfer"
import FooterComponent from "../footer-component"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Airport Transfers from Nice to Monaco, Cannes, Saint-Tropez | Koko Limo",
    description: "Private airport transfer with chauffeur from Nice Airport to Monaco, Cannes, Saint-Tropez. Book a premium ride with Koko Limo.",
    keywords: [
        "Nice airport transfer",
        "private transfer Monaco",
        "chauffeur Nice airport",
        "VTC Nice Cannes",
        "transfer French Riviera",
        "airport chauffeur service",
        "Koko Limo"
    ],
    alternates: {
        canonical: "https://kokolimonice.com/our-services/transfer",
    },
};


export default function Transfer() {
    return (
        <div className="px-6 pt-28 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
            <HeroSection />
            <WhatIsTransfer />
            <ForWhoTransfer />
            <Services />
            <FooterComponent
                title="Ready to Experience Luxury Transfers?"
                description="Book your private transfer today and enjoy a seamless, safe, and stylish journey across the French Riviera."
                buttonText="Reserve Your Transfer"
                buttonHref="/contact-me"
            />
        </div >
    )
}