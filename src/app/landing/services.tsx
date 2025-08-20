"use client";
import Image from "next/image";
import {
  serviceSection,
  animateCards,
  setInitialCardState,
  serviceScroll,
} from "../animation/service";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Transfer",
    icon: "/transfer.svg",
    description:
      "Point-to-point luxury transportation for airports, hotels, and events. Professional service with flight monitoring and personalized assistance throughout the French Riviera.",
    image: "/services/transfer.webp",
  },
  {
    title: "Hourly Services",
    icon: "/service.svg",
    description:
      "Flexible chauffeur service by the hour for business meetings, shopping tours, or leisure activities. Your dedicated driver waits while you attend to your appointments.",
    image: "/services/hourly.webp",
  },
  {
    title: "Private Hour",
    icon: "/private.svg",
    description:
      "Exclusive full-day or half-day chauffeur service for complete freedom and privacy. Explore the Côte d'Azur at your own pace with a personal driver-guide.",
    image: "/services/private-tour.webp",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setInitialCardState();
      serviceSection();
      serviceScroll();
      animateCards();
      ScrollTrigger.refresh(); // un seul refresh à la fin
    }, sectionRef);

    return () => ctx.revert(); // suffit, pas besoin de kill tous les triggers
  }, []);
  return (

    <div ref={sectionRef} className="service-container relative z-10 flex-center-column section-2">
      <span
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our services
      </span>
      <h2 className="title text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center h2 text-gray-100">
        What We Offer
      </h2>
      <div className="card mt-10 flex flex-col gap-8 xl:gap-10 xl:flex-row ">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" card-wrapper bg-[#F9FAFB] border-1 border-[#EEEEEE] rounded-3xl p-4 "
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
              className="mt-8 xl:mt-16 rounded-2xl md:w-full object-cover md:h-64"
              src={card.image}
              alt="image of service"
              width={400}
              height={400}
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
};

