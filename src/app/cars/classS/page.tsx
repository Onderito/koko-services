import Cars from "@/app/landing/cars";
import Image from "next/image";


const featuresData = [
    {
        name: "Luxury Seats",
        description: "Premium leather seating for maximum comfort on every journey.",
        icon: "/star.svg"
    },
    {
        name: "Safety Features",
        description: "Equipped with top-tier safety systems to ensure peace of mind on every journey.",
        icon: "/safety.svg"
    },
    {
        name: "Advanced Tech",
        description: "Cutting-edge infotainment, connectivity, and climate control for a modern travel experience.",
        icon: "/mobile.svg"
    },
    {
        name: "4 Passengers",
        description: "Spacious seating for up to 4 passengers, ideal for business or personal travel.",
        icon: "/users.svg"
    }
]

export default function ClassSPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] md:min-h-[70vh] xl:min-h-dvh flex justify-center items-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/class-s-third.webp" alt="Class S" fill className="object-cover" priority />
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center gap-4 px-4">
                    <h1 className="font-manrope-bold text-[32px] md:text-[44px] lg:text-[52px] xl:text-[80px] text-white text-center">
                        Class-S
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
                            Discover the Mercedes Class-S
                        </h2>
                        <div className="space-y-4 text-gray-600 font-manrope-regular text-[14px] md:text-[16px] leading-relaxed">
                            <p>
                                The Mercedes Class-S represents the pinnacle of luxury sedans, combining elegant design with cutting-edge technology. Its premium leather seats, spacious interior, and advanced safety features ensure an exceptionally smooth and comfortable ride.
                            </p>
                            <p>
                                Perfect for business trips, airport transfers, or touring the French Riviera, the Class-S offers a sophisticated environment with customizable seating, ambient lighting, and advanced climate control for every passenger.
                            </p>
                            <p>
                                Equipped with top-tier safety features and modern amenities, the Mercedes Class-S provides a first-class travel experience. Enjoy ample legroom, high-quality materials, and refined details that make every journey truly unforgettable.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/class-s-first.webp"
                                    alt="Class S Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/class-s-second.webp"
                                    alt="Class S Exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden col-span-2">
                                <Image
                                    src="/class-s-third.webp"
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
                        Book your Mercedes Class-S today and enjoy the ultimate in comfort, style, and sophistication for your next journey.
                    </p>
                    <button className="bg-[#404040] text-white rounded-xl px-8 py-4 font-manrope-bold text-[16px] hover:bg-[#505050] transition-colors duration-300 cursor-pointer">
                        Reserve Your Class-S
                    </button>
                </div>
            </div>
        </div>
    );
}