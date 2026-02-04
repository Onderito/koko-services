import Image from "next/image"

export default function WhatIsHourlyServices() {
    return (
        <div className="">
            <h2 className="heading-2 text-[#404040] mt-4 text-center">
                The Art of the Hourly Services
            </h2>
            <p className="body-text text-center mt-4 ">
                More than just transportation—hourly service gives you the freedom of a dedicated driver, ready whenever and wherever you need.
            </p>

            <div className="relative -z-10 flex flex-col xl:flex-row justify-center items-center gap-10 py-10 xl:py-24">
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#404040] p-4 py-10 rounded-2xl text-white xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="heading-3 text-white">Our Commitment</h3>
                    <p className="relative z-20 text-center mt-4 body-text text-white ">
                        Complete flexibility and absolute discretion. Our bilingual drivers and premium vehicles are available by the hour—so you can attend meetings, shop, or enjoy your day with zero stress.
                    </p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/dark-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#F9FAFB] p-4 py-10 rounded-2xl border-[0.5px] border-[#E5E5E5] xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="heading-3 text-[#404040] "> Your Experience</h3>
                    <p className="relative z-20 text-center mt-4 body-text ">
                        Whether for half a day or the entire day, your driver stays at your disposal. Multiple stops, last-minute changes, and total privacy—designed entirely around your schedule.</p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/light-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
            </div>
        </div>
    )
}