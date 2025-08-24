"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const card = [
    {
        title: "Business & Executives",
        text: "Full-day or half-day chauffeur on standby. Stay productive between meetings with quiet, punctual, and discreet service.",
        icon: "/icon-services/suit-case.svg"
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
    }
]

export default function ForWhoHourlyServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 20%",
                    end: "bottom top+=100",
                    pin: true,
                    scrub: 2,
                    anticipatePin: 1, // il nous permet de garder le pin même quand on quitte la section
                }
            });
            tl.to(card1Ref.current, {
                yPercent: -520,
                rotation: 15,
                transformOrigin: "bottom center",
                z: 100,
            })
            tl.to(card2Ref.current, {
                yPercent: -620,
                rotation: -15,
                transformOrigin: "top center",
                z: 100,
                ease: "none",
            }, "<30%")
            tl.to(card3Ref.current, {
                yPercent: -420,
                rotation: 15,
                transformOrigin: "bottom center",
                z: 100,
                ease: "none",
            }, "<40%")
        }, containerRef)
        return () => ctx.revert();
    }, [])
    return (
        <div ref={containerRef} className="mb-20">
            <h2 className="text-[32px] leading-10 tracking-[-2%] md:text-[56px] md:leading-16 font-manrope-bold mt-4 text-center">
                Made For <span className="text-[#C5C5C5] ">Your Schedule</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-center mt-4 ">
                Exclusive full-day or half-day chauffeur service for freedom and privacy across the Côte d’Azur.
            </p>

            <div className="block xl:hidden">
                {card.map((c, index) => (

                    <div key={index} className="relative z-50 flex flex-col mx-auto items-center  max-w-lg mt-10 border-[0.5px] border-[#E5E5E5] p-4 rounded-2xl ">
                        <Image src={c.icon} alt="icon suitcase" width={40} height={40} />
                        <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">{c.title}</h4>
                        <p className="text-center text-[16px] font-manrope-regular mt-4">{c.text}</p>
                    </div>
                ))}
            </div>
            <div ref={stackRef} className="hidden xl:block relative w-fit mx-auto mt-24 isolate">
                {/* Card 1 - devant */}
                <div ref={card1Ref} className="relative z-50 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/suit-case.svg"} alt="icon suitcase" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Business & Executives</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Full-day or half-day chauffeur on standby. Stay productive between meetings with quiet, punctual, and discreet service.
                    </p>
                </div>

                {/* Card 2 - derrière */}
                <div ref={card2Ref} className="absolute inset-0 rotate-5 z-30 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/clock.webp"} alt="icon of clock" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Flexible Day Hire</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Your driver, your pace: multiple stops, last-minute changes, luggage handled—freedom and privacy all day long.
                    </p>
                </div>

                {/* Card 3 - encore plus derrière */}
                <div ref={card3Ref} className="absolute inset-0 -rotate-5 z-10 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/star.webp"} alt="icon of star" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Events & Evenings</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Dinners, shopping, beach clubs, or night outs—door-to-door rides with a dedicated driver waiting for you.
                    </p>
                </div>
            </div>
        </div>
    )
}