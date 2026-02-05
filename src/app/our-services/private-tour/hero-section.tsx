import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 min-h-screen container">
        <div className="xl:w-2/3">
          <h1 className="heading-1">Private Tour </h1>
          <p className="body-text mt-4 xl:mt-6">
            Your exclusive tour of the French Riviera. Discover the Côte
            d&apos;Azur at your own pace with a dedicated private driver-guide
            for a half-day or full-day experience.
          </p>
          <div className="flex gap-4 mt-8 xl:mt-10">
            <Link href="/contact-me">
              <button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-10 font-manrope-bold text-[16px] tracking-[-0.01em] text-white rounded-xl">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <div className="relative w-full min-h-[220px] aspect-[16/14] rounded-3xl bg-white">
            <Image
              src="/services/driver.webp"
              alt="heroImageAlt"
              fill
              className="object-cover rounded-3xl ring-6 ring-gray-100 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
