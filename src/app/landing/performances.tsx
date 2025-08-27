"use client";
import { performanceSection } from "../animation/performance";
import { useEffect, useRef } from "react";
import FirstCard from "../illustrations/first-card";
import SecondCard from "../illustrations/second-card";
import ThirdCard from "../illustrations/third-card";
import FourthCard from "../illustrations/fourth-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Force un recalcul complet des positions AVANT de lancer l'animation
      ScrollTrigger.refresh();
      gsap.delayedCall(0.1, () => {
        performanceSection();
        ScrollTrigger.refresh(); // Et encore après
      });
    }, sectionRef)

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, []);
  return (
    <section aria-labelledby="perf-title" ref={sectionRef}>
      <div className="pin-container min-h-dvh flex-center relative z-20 flex justify-center bg-[#292929]  rounded-3xl ">
        <div className="performance-section flex flex-col py-10 px-2 ">
          <h2 id="perf-title" className="text-white text-[32px] md:text-[56px] perf-title font-manrope-bold mt-4 text-center">
            Performance that speaks for itself
          </h2>
          <p className="text-white text-[16px] md:text-[18px] text-center mt-4 perf-desc">
            Flawless execution, absolute discretion, and a reputation built on
            consistency.
          </p>
          <ul className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row px-2 xl:px-16 gap-4 text-white mt-10">
            {cards.map((c, index) => (
              <li
                key={index}
                className="bg-[#404040] perf-card shadow-white-thin flex flex-col rounded-3xl p-3 xl:max-w-xs"
              >
                <div className="bg-[#292929] w-full h-34 shadow-white-thin rounded-2xl flex-center relative" aria-hidden="true">
                  {index === 0 && <FirstCard />}
                  {index === 1 && <SecondCard />}
                  {index === 2 && <ThirdCard />}
                  {index === 3 && <FourthCard />}
                </div>

                <h3 className="font-manrope-bold text-center text-[18px] md:text-[20px] mt-8">
                  {c.title}
                </h3>
                <p className="font-manrope-regular text-center mt-2 text-[16px]">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
