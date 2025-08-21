import Image from "next/image"

export default function WhatIsTransfer() {
    return (
        <div className="">
            <h2 className="text-[32px] md:text-[56px] md:leading-16 font-manrope-bold mt-4 text-center">
                The Art of the Transfer
            </h2>
            <p className="text-[16px] md:text-[18px] text-center mt-4 ">
                We believe a transfer is more than just a ride. It's the seamless transition between two moments of your journey.
            </p>

            <div className="relative -z-10 flex flex-col xl:flex-row justify-center items-center gap-10 py-10 xl:py-24">
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#404040] p-4 py-10 rounded-2xl text-white xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="font-manrope-bold text-[20px] md:text-[22px] xl:text-[32px] ">Our Commitment</h3>
                    <p className="relative z-20 text-center mt-4 font-manrope-regular text-[16px] md:text-[18px] xl:text-[20px] ">Our commitment is to flawless execution. Professional, bilingual drivers and impeccably maintained vehicles ensure your safety, comfort, and absolute punctuality.</p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/dark-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
                <div className="relative overflow-hidden flex flex-col justify-center xl:justify-start items-center bg-[#F9FAFB] p-4 py-10 rounded-2xl border-[0.5px] border-[#E5E5E5] xl:max-w-3xl xl:h-[410px] ">
                    <h3 className="font-manrope-bold text-[20px] md:text-[22px] xl:text-[32px] ">Your Arrival</h3>
                    <p className="relative z-20 text-center mt-4 font-manrope-regular text-[16px] md:text-[18px] xl:text-[20px] ">From the moment you land, your focus should remain on your destination, not the logistics. We handle every detail: flight tracking, luggage assistance, and a smooth, quiet ride.</p>
                    <Image className="absolute bottom-0 z-10 md:bottom-[-50px] xl:bottom-0" src="/light-abstract.svg" alt="dark abstract" width={750} height={144} />
                </div>
            </div>
        </div>
    )
}