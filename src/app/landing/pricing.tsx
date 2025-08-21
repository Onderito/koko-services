"use client";
import Image from "next/image";
import { cities, vehicles } from "../data/vehicles";
import React, { useState } from "react";

export default function Pricing() {
  const [isCityActive, setIsCityActive] = useState(cities[0]);
  return (
    <div className="flex-center-column">
      <span
        // style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our pricing
      </span>
      <h2 className="text-[32px] md:text-[56px] md:leading-16 font-manrope-bold mt-4 text-center ">
        Chauffeur Services Pricing Guide
      </h2>
      <p className="text-[16px] md:text-[18px] text-center mt-4 ">
        Tailored quotes from nice airport to :
      </p>
      <div className="mt-10 md:mt-12 xl:mt-12 flex flex-col justify-center items-center">
        <h5 className="text-[18px] font-manrope-bold ">
          Choose your destination
        </h5>
        <ul className="grid grid-cols-2 md:flex gap-2 md:gap-4 mt-4">
          {cities.map((c, index) => (
            <li
              onClick={() => setIsCityActive(c)}
              className={`p-2 text-[16px] rounded-xl text-center cursor-pointer ${isCityActive === c
                ? "inner-shadow-white bg-[#404040] text-white"
                : "bg-white text-[#404040] inner-light-shadow"
                } " `}
              key={index}
            >
              {c.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 w-full">
          {vehicles.map((v, index) => (
            <div
              className={`border-[#E5E5E5] border-[0.5px] shadow-xs relative overflow-hidden rounded-3xl flex flex-col justify-center items-center p-2 xl:p-4 ${index >= vehicles.length - 2
                ? "card-dark inner-shadow-white"
                : ""
                }`}
              key={index}
            >
              {index === vehicles.length - 1 && (
                <Image
                  className="absolute right-[-45px] top-[-200px] "
                  src="/vector.svg"
                  alt="vector"
                  width={100}
                  height={100}
                />
              )}
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
                <p
                  className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                    }`}
                >
                  {v.passengers} passengers
                </p>
              </div>
              <div
                className={`flex flex-col justify-center items-center bg-[#F9FAFB] w-full rounded-2xl mt-5 py-4 ${index >= vehicles.length - 2 ? "dark-bg " : ""
                  } `}
              >
                <p
                  className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                    }`}
                >
                  Transfer
                </p>
                <h3 className="font-manrope-bold text-[32px]">
                  {v.prices[isCityActive.id].transfer}€
                </h3>
                <p
                  className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                    }`}
                >
                  {" "}
                  to {isCityActive.displayName}
                </p>
              </div>
              <div className="flex justify-between items-center mt-5 w-full gap-8">
                <div
                  className={`flex flex-col justify-center items-center border-[#EBEBEB] border-[0.5px] rounded-2xl w-1/2 py-4 ${index >= vehicles.length - 2 ? "dark-border" : ""
                    }`}
                >
                  <p
                    className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                      }`}
                  >
                    Hourly
                  </p>
                  <h3 className="font-manrope-bold text-[32px]">
                    {v.prices[isCityActive.id].hourly}€
                  </h3>
                  <p
                    className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                      }`}
                  >
                    per hour
                  </p>
                </div>
                <div
                  className={`flex flex-col justify-center items-center border-[#EBEBEB] border-[0.5px] rounded-2xl w-1/2 py-4 ${index >= vehicles.length - 2 ? "dark-border" : ""
                    }`}
                >
                  <p
                    className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                      }`}
                  >
                    Full Day
                  </p>
                  <h3 className="font-manrope-bold text-[32px]">
                    {v.prices[isCityActive.id].fullDay}€
                  </h3>
                  <p
                    className={`text-[#6B7280] text-[16px] font-manrope-regular ${index >= vehicles.length - 2 ? "card-secondary-text" : ""
                      }`}
                  >
                    8 hours
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


