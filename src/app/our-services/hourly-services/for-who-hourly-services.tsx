"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const card = [
  {
    title: "Business & Executives",
    text: "Full-day or half-day driver on standby. Stay productive between meetings with quiet, punctual, and discreet service.",
    icon: "/icon-services/suit-case.webp",
  },
  {
    title: "Flexible Day Hire",
    text: "Your driver, your pace: multiple stops, last-minute changes, luggage handled—freedom and privacy all day long.",
    icon: "/icon-services/clock.webp",
  },
  {
    title: "Events & Evenings",
    text: "Dinners, shopping, beach clubs, or night outs—door-to-door rides with a dedicated driver waiting for you.",
    icon: "/icon-services/star.webp",
  },
];

export default function ForWhoHourlyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop uniquement (ta pile xl)
      mm.add("(min-width: 1280px)", () => {
        // States init (GPU + origine)
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
          transformOrigin: "50% 50%",
          force3D: true,
          willChange: "transform",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom 30%",
            scrub: 0.8,
          },
          defaults: { ease: "none" },
        });
        tl.fromTo(
          card1Ref.current,
          { yPercent: 0, rotate: 0 },
          { yPercent: -520, rotate: 15 },
          0,
        );
        tl.fromTo(
          card2Ref.current,
          { yPercent: 0, rotate: 5 },
          { yPercent: -620, rotate: -15 },
          0.2,
        );

        tl.fromTo(
          card3Ref.current,
          { yPercent: 0, rotate: -5 },
          { yPercent: -420, rotate: 15 },
          0.4,
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className="mb-20 container">
      <h2 className="heading-2 text-[#404040] mt-4 text-center">
        Made For <span className="text-[#C5C5C5] ">Your Schedule</span>
      </h2>
      <p className="body-text text-center mt-4 ">
        Exclusive full-day or half-day driver service for freedom and privacy
        across the Côte d’Azur.
      </p>

      <div className="block xl:hidden">
        {card.map((c, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col mx-auto items-center  max-w-lg mt-10 border-[0.5px] border-[#E5E5E5] p-4 rounded-2xl "
          >
            <Image src={c.icon} alt="icon suitcase" width={40} height={40} />
            <h3 className="heading-3 text-[#404040] mt-2">{c.title}</h3>
            <p className="text-center card-text mt-4">{c.text}</p>
          </div>
        ))}
      </div>
      <div
        ref={stackRef}
        className="hidden xl:block relative w-fit mx-auto mt-24 isolate"
      >
        {/* Card 1 - devant */}
        <div
          ref={card1Ref}
          className="relative z-8 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform"
        >
          <Image
            src={"/icon-services/suit-case.webp"}
            alt="icon suitcase"
            width={40}
            height={40}
            quality={100}
          />
          <h3 className="heading-3 text-[#404040] mt-2">
            Business & Executives
          </h3>
          <p className="text-center card-text mt-4">
            Full-day or half-day driver on standby. Stay productive between
            meetings with quiet, punctual, and discreet service.
          </p>
        </div>

        {/* Card 2 - derrière */}
        <div
          ref={card2Ref}
          className="absolute inset-0 rotate-5 z-6 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform"
        >
          <Image
            src={"/icon-services/clock.webp"}
            alt="icon of clock"
            width={40}
            height={40}
            quality={100}
          />
          <h3 className="heading-3 text-[#404040] mt-2">Flexible Day Hire</h3>
          <p className="text-center card-text mt-4">
            Your driver, your pace: multiple stops, last-minute changes, luggage
            handled—freedom and privacy all day long.
          </p>
        </div>

        {/* Card 3 - encore plus derrière */}
        <div
          ref={card3Ref}
          className="absolute inset-0 -rotate-5 z-4 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform"
        >
          <Image
            src={"/icon-services/star.webp"}
            alt="icon of star"
            width={40}
            height={40}
            quality={100}
          />
          <h3 className="heading-3 text-[#404040] mt-2">Events & Evenings</h3>
          <p className="text-center card-text mt-4">
            Dinners, shopping, beach clubs, or night outs—door-to-door rides
            with a dedicated driver waiting for you.
          </p>
        </div>
      </div>
    </div>
  );
}
