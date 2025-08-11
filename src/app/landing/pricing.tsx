"use client";
import Image from "next/image";
import { cities, vehicles } from "../data/vehicles";
import React, { useState } from "react";

export default function Pricing() {
  const [isCityActive, setIsCityActive] = useState(cities[0]);
  return (
    <div className="flex-center-column">
      <span
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our pricing
      </span>
      <h2 className="title text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center h2 text-gray-100">
        Chauffeur Services Pricing Guide
      </h2>
      <p className="description text-[16px] md:text-[18px] text-center mt-4 ">
        Tailored quotes for airport transfers, hourly services and custom
        journeys.
      </p>
      <div className="mt-10 xl:mt-12 flex flex-col justify-center items-center">
        <h5 className="text-[18px] font-manrope-bold ">
          Choose your destination
        </h5>
        <ul className="grid grid-cols-2 md:flex gap-2 md:gap-4 mt-4">
          {cities.map((c, index) => (
            <li
              onClick={() => setIsCityActive(c)}
              className={`p-2 text-[16px] rounded-xl text-center cursor-pointer ${
                isCityActive === c
                  ? "inner-shadow-white bg-[#404040] text-white"
                  : "bg-white text-[#404040] inner-light-shadow"
              } " `}
              key={index}
            >
              {c.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-10 w-full">
          {vehicles.map((v, index) => (
            <div
              className="border-[#E5E5E5] border-[0.5px] rounded-2xl flex flex-col justify-center items-center p-2"
              key={index}
            >
              <Image
                src={v.image}
                alt="image of car"
                width={300}
                height={200}
              />
              <div className="w-full flex flex-col items-start border-t border-b border-[#EBEBEB] py-4">
                <h6 className="self-start font-manrope-bold text-[20px] ">
                  {v.name}
                </h6>
                <p className="text-[#6B7280] text-[16px] font-manrope-regular">
                  {v.passengers} passengers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
