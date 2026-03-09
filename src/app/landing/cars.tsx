"use client";

import Image from "next/image";
import Link from "next/link";

const vehiclesData = [
  {
    name: "Mercedes V-CLASS",
    type: "Van",
    imageUrl: "/assets/images/cars/class-v/class-v.webp",
    summary: "Best for families, luggage-heavy transfers and group travel.",
    guests: "6 guests",
    bags: "6 bags",
    feature: "Ambient",
    button: "View Vehicle",
    link: "/cars/class-v",
    featured: false,
  },
  {
    name: "Maybach",
    type: "Limousine",
    imageUrl: "/assets/images/cars/maybach/maybach.webp",
    summary: "Our most elevated option for VIP arrivals and special moments.",
    guests: "3 guests",
    bags: "3 bags",
    feature: "VIP",
    button: "View Vehicle",
    link: "/cars/maybach",
    featured: true,
  },
  {
    name: "Mercedes S-CLASS",
    type: "Berline",
    imageUrl: "/assets/images/cars/class-s/class-s.webp",
    summary: "A refined executive ride for business and premium point-to-point travel.",
    guests: "3 guests",
    bags: "2 bags",
    feature: "Ambient",
    button: "View Vehicle",
    link: "/cars/class-s",
    featured: false,
  },
];

export default function Cars() {
  return (
    <div className="flex-center-column">
      <span className="text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto">
        our cars
      </span>
      <h2 className="heading-2 text-[#404040] mt-4 text-center ">
        Our Fleet, Your Comfort
      </h2>
      <p className="body-text text-center mt-4 ">
        Choose from our range of luxury vehicles — curated for style, space, and
        performance.{" "}
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-8 mt-10">
        {vehiclesData.map((v, index) => (
          <div
            className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              v.featured ? "border-[#D9D1BF]" : "border-[#E7E7E7]"
            }`}
            key={index}
          >
            <Link
              href={v.link}
              scroll
              aria-label={`open ${v.name} details`}
              className="relative block aspect-[4/4.6] overflow-hidden"
            >
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={v.imageUrl}
                alt={`Luxury ${v.name}`}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAABwAgCdASoEAAQA..."
                width={400}
                height={300}
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 via-black/18 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                  {v.type}
                </span>
              </div>
              {v.featured ? (
                <div className="absolute right-5 top-5">
                  <span className="inline-flex rounded-full border border-[#D9D1BF] bg-[#171717]/85 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#E8DDC0] shadow-lg backdrop-blur-md">
                    Signature
                  </span>
                </div>
              ) : null}
            </Link>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[#404040] heading-3">
                    <Link href={v.link} className="hover:text-[#1F1F1F]">
                      {v.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                    {v.summary}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[12px] font-manrope-bold ${
                    v.featured
                      ? "border border-[#D9D1BF] bg-[#FBF8F0] text-[#6D5830]"
                      : "bg-[#F4F4F4] text-[#404040]"
                  }`}
                >
                  {v.feature}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#E7E7E7] px-3 py-1 text-[13px] text-gray-600">
                  {v.guests}
                </span>
                <span className="rounded-full border border-[#E7E7E7] px-3 py-1 text-[13px] text-gray-600">
                  {v.bags}
                </span>
                <span className="rounded-full border border-[#E7E7E7] px-3 py-1 text-[13px] text-gray-600">
                  {v.type}
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-[#EFEFEF]">
                <Link
                  aria-label={`view details about ${v.name}`}
                  href={v.link}
                  scroll
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#DADADA] bg-white px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-[#404040] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F7F7F7]"
                >
                  {v.button}
                  <span className="sr-only"> about {v.name}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
