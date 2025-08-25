import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsPrivateTour from "./what-is-private-tour";
import ForWhoPrivateTour from "./for-who-private-tour";
import FooterComponent from "../footer-component";

export default function PrivateHour() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
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