"use client";

import Image from "next/image";
import Link from "next/link";

const vehiclesData = [
  {
    name: "Mercedes V-CLASS",
    type: "Van",
    imageUrl: "/cars/class-v/class-v.webp",
    guests: "6 guests",
    bags: "6 bags",
    feature: "Ambient",
    button: "See More",
    link: "/cars/class-v",
  },
  {
    name: "Maybach",
    type: "Limousine",
    imageUrl: "/cars/maybach/maybach.webp",
    guests: "3 guests",
    bags: "3 bags",
    feature: "VIP",
    button: "See More",
    link: "/cars/maybach",
  },
  {
    name: "Mercedes S-CLASS",
    type: "Berline",
    imageUrl: "/cars/class-s/class-s.webp",
    guests: "3 guests",
    bags: "2 bags",
    feature: "Ambient",
    button: "See More",
    link: "/cars/class-s",
  },
];

export default function Cars() {
  return (
    <div className="flex-center-column">
      <span className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto">
        our cars
      </span>
      <h2 className="split heading-2 text-[#404040] mt-4 text-center ">
        Our Fleet, Your Comfort
      </h2>
      <p className=" split body-text text-center mt-4 ">
        Choose from our range of luxury vehicles — curated for style, space, and
        performance.{" "}
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-8 mt-10">
        {vehiclesData.map((v, index) => (
          <div
            className="overflow-hidden card relative shadow-lg rounded-3xl xl:h-[620px]"
            key={index}
          >
            <Image
              className="rounded-3xl object-cover w-full h-full"
              src={v.imageUrl}
              alt="image of car"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAABwAgCdASoEAAQA..."
              width={400}
              height={300}
            />
            {/* Gradient/blur avec transition plus douce */}
            <div
              className="absolute bottom-0 left-0 right-0 h-80 xl:h-80 rounded-b-3xl backdrop-blur-[4px]"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
              }}
            ></div>
            {index === 1 && (
              <div
                className="absolute bottom-0 left-0 right-0 h-80 xl:h-44 rounded-b-3xl  bg-gradient-to-t from-[#7A25BB]/50 to-transparent"
                style={{
                  maskImage:
                    "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                }}
              ></div>
            )}
            <div className="absolute top-3/4 md:top-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <h3 className="text-white heading-3 ">
                {v.name}
                <span className="ml-2 font-light text-white/80 body-text ">
                  ({v.type})
                </span>
              </h3>
              <div className="text-white/80 flex divide-x justify-center mt-4 font-manrope-regular pb-8 xl:pb-16 card-text">
                <span className="px-4">{v.guests}</span>
                <span className="px-4">{v.bags}</span>
                <span className="px-4">{v.feature}</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <Link
                aria-label="see more about the car"
                href={v.link}
                scroll
                className="block w-full text-[#404040] bg-white cursor-pointer tracking-[-0.01em] inner-shadow-dark py-4 rounded-2xl font-manrope-bold text-[16px] text-center hover:scale-105 transition-transform duration-300"
              >
                {v.button}
                <span className="sr-only"> about {v.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
