"use client";
import Image from "next/image";
import { serviceAnimation } from "../animation/service";
import { useRef, useEffect } from "react";

const cards = [
  {
    title: "Transfer",
    icon: "/transfer.svg",
    description:
      "Travel in a luxury vehicle with a bilingual driver. Enjoy a punctual, safe, and tailor-made ride experience—from Nice to Monaco, Cannes, and beyond.",
    image: "/nice-hero.webp",
  },
  {
    title: "Hourly Services",
    icon: "/service.svg",
    description:
      "Travel in a luxury vehicle with a bilingual driver. Enjoy a punctual, safe, and tailor-made ride experience—from Nice to Monaco, Cannes, and beyond.",
    image: "/nice-hero.webp",
  },
  {
    title: "Private Hour",
    icon: "/private.svg",
    description:
      "Travel in a luxury vehicle with a bilingual driver. Enjoy a punctual, safe, and tailor-made ride experience—from Nice to Monaco, Cannes, and beyond.",
    image: "/nice-hero.webp",
  },
];

export default function Services() {
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = serviceAnimation(serviceRef.current);
    return cleanup;
  }, []);
  return (
    <div ref={serviceRef} className="flex flex-col justify-center section-2">
      <span className="span text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto">
        our services
      </span>
      <h2 className="text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center h2">
        What We Offer
      </h2>
      <div className="mt-10 flex flex-col gap-8 xl:gap-10 xl:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="item bg-[#F9FAFB] border-1 border-[#EEEEEE] rounded-3xl p-4 "
          >
            <div className="flex items-center gap-2 md:gap-4">
              <span className="bg-[#404040] rounded-xl p-3 md:p-4 xl:p-3 inner-shadow-white">
                <Image
                  className="md:w-8 md:h-8 xl:w-7 xl:h-7"
                  src={card.icon}
                  alt="icon of service"
                  width={20}
                  height={20}
                />
              </span>
              <h3 className="font-manrope-bold text-[20px] md:text-[32px]">
                {card.title}
              </h3>
            </div>
            <p className="mt-6 xl:mt-8 text-[16px] md:text-[18px] font-manrope-regular">
              {card.description}
            </p>
            <Image
              data-speed="0.9"
              className="mt-8 xl:mt-16 rounded-2xl md:w-full object-cover"
              src={card.image}
              alt="image of service"
              width={400}
              height={300}
            />
            <div className="flex justify-center items-center w-full mt-4 gap-4">
              <button className="bg-white w-[40%] rounded-xl cursor-pointer inner-shadow-dark py-4 px-6 font-manrope-bold text-[16px] ">
                See More
              </button>
              <button className="bg-[#404040] cursor-pointer inner-shadow-white py-4 px-6 font-manrope-bold text-[16px] text-white rounded-xl w-[60%]">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
