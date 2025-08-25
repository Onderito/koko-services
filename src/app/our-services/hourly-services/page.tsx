import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsHourlyServices from "./what-is-hourly-services";
import ForWhoHourlyServices from "./for-who-hourly-services";
import FooterComponent from "../footer-component";

export default function hourlyServices() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
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