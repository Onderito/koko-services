import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 container pt-[var(--nav-clearance)] min-h-[calc(100vh-var(--nav-clearance))]">
        <div className="xl:w-2/3">
          <div className="space-y-5 md:space-y-6 xl:space-y-7">
            <h1 className="heading-1">Transfer</h1>
            <p className="body-text">
              Where every journey is a statement of elegance. From the airport
              to the Riviera&apos;s heart, travel in unparalleled comfort.
            </p>
            <div className="flex gap-4">
              <Link href="/contact-me">
                <button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-10 font-manrope-bold text-[16px] tracking-[-0.01em] text-white rounded-xl">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <div className="relative w-full min-h-[220px] aspect-[16/14] rounded-3xl bg-white">
            <Image
              src="/services/airport-arrivals.webp"
              alt="heroImageAlt"
              fill
              priority
              className="object-cover rounded-3xl ring-6 ring-gray-100 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
