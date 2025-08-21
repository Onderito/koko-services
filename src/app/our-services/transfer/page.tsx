import Services from "@/app/landing/services"
import HeroSection from "./hero-section"
import WhatIsTransfer from "./what-is-transfer"
import ForWho from "./for-who"

export default function Transfer() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
            <HeroSection />
            <WhatIsTransfer />
            <ForWho />
            <Services />
        </div >
    )
}