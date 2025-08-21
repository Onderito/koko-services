import Services from "@/app/landing/services";
import HeroSection from "./hero-section";

export default function PrivateTour() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
            <HeroSection />
            <Services />
        </div>
    )
}