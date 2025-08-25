import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className="min-h-[80vh]">
            {/* Hero Section */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
                <div className="xl:w-2/3">
                    <h1 className="font-manrope-bold text-[44px] leading-[40px] tracking-[-2%] md:text-[64px] md:leading-[56px] xl:text-[80px] xl:tracking-[-5%] xl:leading-[72px]  ">Private Tour </h1>
                    <p className="font-manrope-regular text-[18px] tracking-[-1%] xl:tracking-[-2%] leading-[26px] md:text-[20px] mt-4 xl:mt-6">Your exclusive tour of the French Riviera. Discover the Côte d'Azur at your own pace with a dedicated private driver-guide for a half-day or full-day experience.</p>
                    <div className="flex gap-4 mt-8 xl:mt-10">
                        <Link href="/contact-me"><button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-10 font-manrope-bold text-[16px] tracking-[-2%] text-white rounded-xl">Book Now</button></Link>
                        {/* <button className="border-1 border-[#404040] !cursor-pointer py-4 px-6 font-manrope-bold text-[16px] tracking-[-2%] rounded-xl">See Pricing</button> */}

                    </div>
                </div>
                <div className="relative xl:w-2/3">
                    <Image
                        width={1200}
                        height={1000}
                        src="/services/white-rectangle.svg"
                        alt="Rectangle"
                        className="w-full h-auto "
                    />

                    {/* First Image */}
                    <div className="absolute top-15 left-5 md:left-10">
                        <h4 className="text-[10px] md:text-[14px] xl:text-[16px] p-1 px-4 xl:px-6 xl:py-2 ml-auto mb-6 bg-white rounded-lg xl:rounded-xl border-[0.5px] border-[#E5E5E5] w-fit font-gloria">By the hour</h4>
                        <Image
                            src="/services/driver.webp"
                            alt="koko person"
                            width={250}
                            height={250}
                            quality={100}
                            className="object-cover rounded-xl no-blur-shadow-little w-[120px] md:w-[250px] xl:w-[269px] xl:h-[267px]"
                        />
                    </div>

                    {/* Arrow Image */}
                    <Image src={"/services/plane-arrow.svg"} alt="plane arrow" width={30} height={30} className="absolute top-18 md:top-35 xl:top-30 left-40 md:left-80 xl:left-85 md:w-[80px]" />

                    {/* Second Image */}
                    <div className="absolute top-29 right-5 md:top-60 ">
                        <h4 className="text-[10px] md:text-[14px] xl:text-[16px] p-1 px-4 xl:px-6 xl:py-2 mr-auto mb-6 bg-white rounded-lg xl:rounded-xl border-[0.5px] border-[#E5E5E5] w-fit font-gloria">Èze </h4>
                        <Image
                            src="/services/eze.webp"
                            alt="Saint Tropez image"
                            width={300}
                            height={300}
                            quality={100}
                            className="object-cover rounded-xl no-blur-shadow-little w-[120px] md:w-[300px] xl:w-[367px] xl:h-[245px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
