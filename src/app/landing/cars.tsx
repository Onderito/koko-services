"use client"

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const vehiclesData = [
  {
    name: "Mercedes V-CLASS",
    type: "Van",
    imageUrl: "/class-v.webp",
    guests: "6 guests",
    bags: "6 bags",
    feature: "Ambient",
    button: "See More",
    link: "/cars/classV",
  },
  {
    name: "Maybach",
    type: "Limousine",
    imageUrl: "/maybach.webp",
    guests: "3 guests",
    bags: "3 bags",
    feature: "VIP",
    button: "See More",
    link: "/cars/maybach",
  },
  {
    name: "Mercedes S-CLASS",
    type: "Berline",
    imageUrl: "/class-s.webp",
    guests: "3 guests",
    bags: "2 bags",
    feature: "Ambient",
    button: "See More",
    link: "/cars/classS",
  },
];

export default function Cars() {
  return (
    <div className="flex-center-column">
      <span
        // style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className=" text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our cars
      </span>
      <h2 className="title text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center h2 ">
        Our Fleet, Your Comfort
      </h2>
      <p className="description text-[16px] md:text-[18px] text-center mt-4 ">
        Choose from our range of luxury vehicles — curated for style, space, and
        performance.{" "}
      </p>
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8 mt-10">
        {vehiclesData.map((v, index) => (
          <div className="overflow-hidden relative" key={index}>
            <Image
              className="rounded-3xl object-cover md:w-full h-full"
              src={v.imageUrl}
              alt="image of car"
              width={400}
              height={300}
            />
            {/* Gradient/blur avec transition plus douce */}
            <div className="absolute bottom-0 left-0 right-0 h-64 xl:h-44 rounded-b-3xl bg-gradient-to-t from-black/30  to-transparent backdrop-blur-[2px]"></div>

            {index === 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-64 xl:h-44 rounded-b-3xl bg-gradient-to-t from-[#7A25BB]/50  to-transparent"></div>
            )}
            <div className="absolute top-3/4 md:top-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <h4 className="text-white font-manrope-bold text-[24px] md:text-[28px] ">
                {v.name}
                {/* Ajouter un espace manuel pour séparer le nom et le type */}
                <span className="ml-2 font-light text-white/80 text-[16px] md:text-[18px] ">
                  ({v.type})
                </span>
              </h4>
              <div className="text-[#C2C2C2] flex divide-x justify-center mt-4 font-manrope-regular pb-8 xl:pb-16 text-[16px]">
                <span className="px-4">{v.guests}</span>
                <span className="px-4">{v.bags}</span>
                <span className="px-4">{v.feature}</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <Link scroll={true} href={v.link} className="block w-full text-[#404040] bg-white inner-shadow-dark py-4 rounded-2xl font-manrope-bold text-[16px] text-center hover:scale-105 transition-transform duration-300">
                {v.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
