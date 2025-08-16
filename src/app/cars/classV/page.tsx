import Cars from "@/app/landing/cars";
import Image from "next/image";
import Link from "next/link";

const featuresData = [
    {
        name: "Luxury Seats",
        description: "Premium leather seating for maximum comfort on every journey.",
        icon: "/star.svg"
    },
    {
        name: "Climate Control",
        description: "Spacious design ideal for group travel or family trips.",
        icon: "/snow.svg"
    },
    {
        name: "Large Luggage",
        description: "Ample space for suitcases, bags, and travel gear.",
        icon: "/suit-case.svg"
    },
    {
        name: "7 Passengers",
        description: "Multi-zone air conditioning for perfect comfort.",
        icon: "/users.svg"
    }
]

export default function ClassVPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] md:min-h-[70vh] xl:min-h-dvh flex justify-center items-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/class-v-hero.webp" alt="Class S" fill className="object-cover" priority />
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center gap-4 px-4">
                    <h1 className="font-manrope-bold text-[32px] md:text-[44px] lg:text-[52px] xl:text-[80px] text-white text-center">
                        Class-V
                    </h1>
                    <button className="bg-white rounded-xl px-6 py-3 md:px-8 md:py-4 cursor-pointer inner-shadow-dark font-manrope-bold text-[14px] md:text-[16px] hover:scale-105 transition-transform duration-300">
                        Reserve Your Ride
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
                {/* Description Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-manrope-bold text-[32px] md:text-[56px] xl:leading-16 text-[#404040] mb-6">
                            Discover the Mercedes Class-V
                        </h2>
                        <div className="space-y-4 text-gray-600 font-manrope-regular text-[14px] md:text-[16px] leading-relaxed">
                            <p>
                                The Mercedes Classe V sets the standard for luxury travel in a spacious and elegant van. Designed with premium leather seats, generous legroom, and adjustable seating, every journey offers unparalleled comfort for passengers.                            </p>
                            <p>
                                Ideal for families, business travelers, or groups, the Classe V combines style and functionality. Its advanced climate control, high-quality materials, and carefully designed interior create a first-class experience on every ride.                            </p>
                            <p>
                                Perfect for airport transfers, city tours, and longer trips along the French Riviera, the Mercedes Classe V ensures safety, reliability, and premium amenities tailored to your needs. Enjoy a seamless travel experience with ample luggage space, convenient features, and a refined atmosphere.                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/class-v-first.webp"
                                    alt="Class S Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/class-v-second.webp"
                                    alt="Class S Exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden col-span-2">
                                <Image
                                    src="/class-v-third.webp"
                                    alt="Class S Details"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="font-manrope-bold text-[32px] md:text-[56px] text-center">
                        Vehicle Features
                    </h2>
                    <p className="text-gray-600 font-manrope-regular text-[16px] md:text-[18px] text-center mt-4 max-w-3xl mx-auto">
                        Discover the key features and premium amenities of our vehicles, designed to provide maximum comfort, safety, and convenience on every journey.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
                        {/* Features Card */}
                        {featuresData.map((f, index) => (
                            <div key={index} className="text-center border-[#E5E5E5] border-[0.5px] rounded-2xl py-4 px-2">
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                                    <Image src={f.icon} alt={f.name} width={50} height={50} />
                                </div>
                                <h3 className="font-manrope-bold text-[16px] md:text-[18px] text-[#404040] mb-2">
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
                    <h2 className="font-manrope-bold text-[24px] md:text-[32px] text-[#404040] mb-4">
                        Ready to Experience Luxury?
                    </h2>
                    <p className="text-gray-600 font-manrope-regular text-[14px] md:text-[16px] mb-8 max-w-2xl mx-auto">
                        Book your Mercedes Class-V today and enjoy the ultimate in comfort, style, and sophistication for your next journey.
                    </p>
                    <button className="bg-[#404040] text-white rounded-xl px-8 py-4 font-manrope-bold text-[16px] hover:bg-[#505050] transition-colors duration-300 cursor-pointer">
                        Reserve Your Class-V
                    </button>
                </div>
            </div>
        </div>
    );
}