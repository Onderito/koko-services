import Image from "next/image"

export default function WhatIsPrivateTour() {
    return (
        <div className="">
            <h2 className="text-[32px] md:text-[56px] md:leading-16 font-manrope-bold mt-4 text-center">
                The Art of the Private Tour
            </h2>
            <p className="text-[16px] md:text-[18px] text-center mt-4 ">
                Discover the French Riviera at your own pace with a bilingual driver-guide and a luxury vehicle—custom routes, local insights, zero logistics.
            </p>

            <div className="relative -z-10 flex flex-col xl:flex-row justify-center items-center gap-10 py-10 xl:py-24">
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#404040] p-4 py-10 rounded-2xl text-white xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="font-manrope-bold text-[20px] md:text-[22px] xl:text-[32px] ">Our Commitment</h3>
                    <p className="relative z-20 text-center mt-4 font-manrope-regular text-[16px] md:text-[18px] xl:text-[20px] ">            Curated, stress-free touring. We craft a bespoke itinerary—Nice, Monaco, Èze, Cannes, Antibes, Saint-Tropez—arrange photo stops and lunch spots, and keep you on schedule with door-to-door service.
                    </p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/dark-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#F9FAFB] p-4 py-10 rounded-2xl border-[0.5px] border-[#E5E5E5] xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="font-manrope-bold text-[20px] md:text-[22px] xl:text-[32px] ">Your Experience</h3>
                    <p className="relative z-20 text-center mt-4 font-manrope-regular text-[16px] md:text-[18px] xl:text-[20px] ">            Tell us what you love—scenic drives, hidden villages, beaches, or heritage—and we’ll adapt on the fly. Book by the hour or full day; enjoy a quiet, comfortable ride with a knowledgeable local guide.
                    </p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/light-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
            </div>
        </div>
    )
}