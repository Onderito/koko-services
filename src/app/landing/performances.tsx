"use client";
import Image from "next/image";
import { performanceSection } from "../animation/performance";
import { useEffect } from "react";
import FirstCard from "../illustrations/first-card";
import SecondCard from "../illustrations/second-card";
import ThirdCard from "../illustrations/third-card";
import FourthCard from "../illustrations/fourth-card";

const cards = [
  {
    title: "1,200+ transfers completed",
    text: "Over a thousand successful journeys handled with precision, professionalism, and care — trusted by clients across the French Riviera.",
  },
  {
    title: "0 missed pickups",
    text: "Never late, never absent. We’ve honored every reservation with punctuality and dedication — because your time matters.",
  },
  {
    title: "100% on-time arrivals",
    text: "Time is luxury. Our entire service is built to ensure you arrive precisely when you need to — no delays, no excuses.",
  },
  {
    title: "Multilingual service",
    text: "We speak English, French, Turkish and Russian — to make your experience smooth, seamless, and understood at every moment.",
  },
];

export default function Performances() {
  useEffect(() => {
    performanceSection();
  }, []);
  return (
    <div className="performance-section min-h-dvh flex-center relative z-20 flex justify-center bg-[#292929]  rounded-3xl ">
      <div className="flex flex-col py-10 px-2">
        <h2 className="text-white text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center">
          Performance that speaks for itself
        </h2>
        <p className="text-white text-[16px] md:text-[18px] text-center mt-4 ">
          Flawless execution, absolute discretion, and a reputation built on
          consistency.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row xl:px-16 gap-4 text-white mt-10">
          {cards.map((c, index) => (
            <div
              className="bg-[#404040] shadow-white-thin flex flex-col rounded-3xl p-2 xl:max-w-xs"
              key={index}
            >
              <div className="bg-[#292929] w-full h-34 shadow-white-thin rounded-2xl flex-center relative">
                {index === 0 && <FirstCard />}
                {index === 1 && <SecondCard />}
                {index === 2 && <ThirdCard />}
                {index === 3 && <FourthCard />}
              </div>
              <h3 className="font-manrope-bold text-center text-[20px] mt-8">
                {c.title}
              </h3>
              <p className="font-manrope-regular text-center mt-2 text-[16px]">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
