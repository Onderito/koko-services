import Services from "@/app/landing/services";
import HeroSection from "./hero-section";
import WhatIsPrivateTour from "./what-is-private-tour";
import ForWhoPrivateTour from "./for-who-private-tour";

export default function PrivateHour() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
            <HeroSection />
            <WhatIsPrivateTour />
            <ForWhoPrivateTour />
            <Services />
        </div>
    )
}