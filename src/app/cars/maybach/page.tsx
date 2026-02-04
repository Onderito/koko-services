import Cars from "@/app/landing/cars";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Mercedes Maybach Driver Service in French Riviera | VIP VTC | Koko Limo",
    description: "Enjoy the ultimate luxury ride with our Mercedes Maybach. Driver service for VIPs, weddings, or executive transfers across the Côte d’Azur.",
    keywords: [
        "Mercedes Maybach driver",
        "Maybach Nice Monaco",
        "luxury driver French Riviera",
        "VIP VTC Maybach",
        "wedding car French Riviera",
        "Koko Limo Maybach"
    ],
    alternates: {
        canonical: "https://kokolimonice.com/our-cars/maybach",
    },
};


const featuresData = [
    {
        name: "Luxury Seats",
        description: "Premium leather seating for maximum comfort on every journey.",
        icon: "/star.svg"
    },
    {
        name: "Safety & Privacy",
        description: "Top-tier safety features and privacy options ensure a secure and discreet ride.",
        icon: "/safety.svg"
    },
    {
        name: "Advanced Tech",
        description: "State-of-the-art infotainment, connectivity, and climate systems for a high-end experience.",
        icon: "/mobile.svg"
    },
    {
        name: "VIP Capacity",
        description: "Spacious seating for up to 4 passengers, ideal for VIP travel and executive journeys.",
        icon: "/users.svg"
    }
]

export default function Maybach() {
    return (
        <div className="min-h-screen px-6 pt-28 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
            {/* Hero Section */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-10 ">
                <div className="xl:w-2/3">
                    <h1 className="heading-1"> Mercedes Maybach -
                        <span className="bg-gradient-to-r from-[#D5D5D5] to-[#404040] bg-clip-text text-transparent">Prestige Perfected</span></h1>
                    <p className="body-text mt-4 xl:mt-6">Experience unparalleled opulence with driver-driven excellence, handcrafted details, and royal-level comfort</p>
                    <Link href="/contact-me"><button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-6 font-manrope-bold text-[16px] tracking-[-0.01em] text-white rounded-xl mt-8 xl:mt-10 button">Book Maybach</button></Link>
                </div>

                <div className="relative xl:w-2/3">
                    <Image
                        width={1200}
                        height={1000}
                        src="/rectangle.svg"
                        alt="Rectangle"
                        className="w-full h-auto "
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/cars/maybach/maybach.svg"
                            alt="Class V"
                            fill
                            className="object-contain scale-110"
                        />
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20 mt-16 xl:mt-56">
                <div className="order-1 lg:order-2">
                    <h2 className="heading-2 text-[#404040] mb-6">
                        Discover the Mercedes Maybach
                    </h2>
                    <div className="space-y-4 body-text">
                        <p>
                            The Mercedes Maybach is the ultimate expression of luxury and elegance in automotive design. Featuring ultra-premium leather seats, spacious legroom, and sophisticated craftsmanship, every journey feels like first-class travel.                           </p>
                        <p>
                            Ideal for VIPs, business executives, or luxury travelers along the French Riviera, the Maybach offers a refined atmosphere with ambient lighting, advanced climate control, and customizable seating for optimal comfort.                      </p>
                        <p>
                            Equipped with cutting-edge technology, high-end entertainment systems, and top-tier safety features, the Mercedes Maybach ensures a seamless, safe, and luxurious travel experience. Every detail is designed to provide unparalleled comfort, style, and exclusivity on the road.                           </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                            <Image
                                src="/cars/maybach/maybach-first.webp"
                                alt="Maybach Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                            <Image
                                src="/cars/maybach/maybach-second.webp"
                                alt="Maybach Exterior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden col-span-2">
                            <Image
                                src="/cars/maybach/maybach-third.webp"
                                alt="Maybach Details"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-16 lg:mb-20">
                <h2 className="heading-2 text-[#404040] text-center">
                    Vehicle Features
                </h2>
                <p className="body-text text-center mt-4 max-w-3xl mx-auto">
                    Discover the key features and premium amenities of our vehicles, designed to provide maximum comfort, safety, and convenience on every journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
                    {/* Features Card */}
                    {featuresData.map((f, index) => (
                        <div key={index} className="text-center border-[#E5E5E5] border-[0.5px] rounded-2xl py-4 px-2">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                                <Image src={f.icon} alt={f.name} width={50} height={50} />
                            </div>
                            <h3 className="heading-3 text-[#404040] mb-2">
                                {f.name}
                            </h3>
                            <p className="text-gray-600 font-manrope-regular text-[13px] md:text-[14px] leading-relaxed">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Cars />
            {/* CTA Section */}
            <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 mt-16 lg:mt-20">
                <h2 className="heading-2 text-[#404040] mb-4">
                    Ready to Experience Luxury?
                </h2>
                <p className="body-text text-[#404040] mb-8 max-w-2xl mx-auto">
                    Book your Mercedes Maybach today and enjoy the ultimate in comfort, style, and sophistication for your next journey.
                </p>
                <button className="bg-[#404040] text-white rounded-xl px-8 py-4 font-manrope-bold text-[16px] hover:bg-[#505050] tracking-[-0.01em] transition-colors duration-300 cursor-pointer">
                    Reserve Your Maybach
                </button>
            </div>
        </div>
    );
}