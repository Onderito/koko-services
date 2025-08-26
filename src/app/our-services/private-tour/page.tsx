import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsPrivateTour from "./what-is-private-tour";
import ForWhoPrivateTour from "./for-who-private-tour";
import FooterComponent from "../footer-component";

export default function PrivateHour() {
    return (
        <div className="px-2 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
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