import Services from "@/app/landing/services"
import HeroSection from "./hero-section"
import WhatIsTransfer from "./what-is-transfer"
import ForWhoTransfer from "./for-who-transfer"
import FooterComponent from "../footer-component"

export default function Transfer() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
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