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
  const sectionRef = useRef(null);

  useEffect(() => {
    let cleanupAnimation: (() => void) | undefined;

    const ctx = gsap.context(() => {
      cleanupAnimation = performanceSection();
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      cleanupAnimation?.();
      ctx.revert();
    };
  }, []);
  return (
    <section aria-labelledby="perf-title" ref={sectionRef}>
      <div className="pin-container min-h-dvh flex-center relative z-20 flex justify-center bg-[#292929]  rounded-3xl ">
        <div className="performance-section flex flex-col py-10 px-2 ">
          <h2
            id="perf-title"
            className="perf-title text-white heading-2 mt-4 text-center"
          >
            Performance that speaks for itself
          </h2>
          <p className="perf-description text-white body-text text-center mt-4">
            Flawless execution, absolute discretion, and a reputation built on
            consistency.
          </p>
          <ul className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row px-2 xl:px-16 gap-4 text-white mt-10">
            {cards.map((c, index) => (
              <li
                key={index}
                className="perf-card flex flex-col rounded-3xl border border-[#6F6250] bg-[#404040] p-3 shadow-[0_0_0_1px_rgba(245,232,208,0.08),inset_0_1px_0_rgba(255,245,228,0.06)] xl:max-w-xs"
              >
                <div
                  className="relative flex-center h-34 w-full rounded-2xl border border-[#7A6B58] bg-[#292929] shadow-[inset_0_1px_0_rgba(255,244,225,0.05)]"
                  aria-hidden="true"
                >
                  {index === 0 && <FirstCard />}
                  {index === 1 && <SecondCard />}
                  {index === 2 && <ThirdCard />}
                  {index === 3 && <FourthCard />}
                </div>

                <h3 className="heading-3 text-white text-center mt-8">
                  {c.title}
                </h3>
                <p className="card-text text-white text-center mt-2">
                  {c.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
