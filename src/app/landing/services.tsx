"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { globalAnimation } from "../animation/global-animation";

const cards = [
  {
    title: "Transfer",
    icon: "/transfer.svg",
    description:
      "Point-to-point luxury transportation for airports, hotels, events. Professional service with flight monitoring and personalized assistance throughout the French Riviera.",
    image: "/services/transfer.webp",
    link: "/our-services/transfer"
  },
  {
    title: "Hourly Services",
    icon: "/service.svg",
    description:
      "Flexible chauffeur service by the hour for business meetings, shopping tours, or leisure activities. Your dedicated driver waits while you attend to your appointments.",
    image: "/services/hourly.webp",
    link: "/our-services/hourly-services"
  },
  {
    title: "Private Tour",
    icon: "/private.svg",
    description:
      "Exclusive full-day or half-day chauffeur service for complete freedom and privacy. Explore the Côte d'Azur at your own pace with a personal driver-guide.",
    image: "/services/private-tour.webp",
    link: "/our-services/private-tour"
  },
];

export default function Services() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      globalAnimation();
    });

    return () => ctx.revert();
  }, []);
  return (

    <div className="main-container relative z-10 flex-center-column section-2">
      <span
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our services
      </span>
      <h2 className="split xl:text-gray-100 text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center">
        What We Offer
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card flex flex-col bg-[#F9FAFB] border border-[#EEEEEE] rounded-3xl p-6 h-full"
          >
            <div className="flex items-center gap-2 md:gap-4">
              <span className="bg-[#404040] rounded-xl p-3 md:p-4 xl:p-3 inner-shadow-white">
                <Image
                  className="md:w-8 md:h-8 xl:w-7 xl:h-7"
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-manrope-bold text-[20px] md:text-[32px]">
                {card.title}
              </h3>
            </div>
            <p className="mt-6 xl:mt-8 text-[16px] md:text-[18px] font-manrope-regular flex-grow">
              {card.description}
            </p>
            <div className="relative aspect-video w-full mt-8 xl:mt-16 rounded-2xl overflow-hidden">
              <Image
                src={card.image}
                alt={`${card.title} service illustration`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 
                       (max-width: 768px) 85vw,
                       (max-width: 1024px) 40vw,
                       400px"
                loading="lazy"
                quality={80}
              />
            </div>
            <div className="flex justify-center items-center w-full mt-4 gap-4">
              <Link aria-label="see more about the service" scroll={true} href={card.link} className="bg-white w-[45%] rounded-xl cursor-pointer text-center inner-shadow-dark py-4 px-6 font-manrope-bold text-[16px] ">
                See More
                <span className="sr-only"> about {card.title}</span>
              </Link>
              <Link aria-label="book now the service" className="w-[60%]" href={"/contact-me"}>
                <button aria-label="book now the service" className="bg-[#404040] cursor-pointer inner-shadow-white py-4 px-6 font-manrope-bold text-[16px] text-white rounded-xl w-full">
                  Book Now
                  <span className="sr-only"> about {card.title}</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

