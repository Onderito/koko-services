"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const card = [
    {
        title: "First-Time Visitors",
        text: "See the must-sees without stress: tailored route, photo stops, café breaks, and a bilingual driver-guide sharing local tips.",
        icon: "/icon-services/plane.webp"
    },
    {
        title: "Culture & History Lovers",
        text: "Old towns, perched villages, museums, artisan stops—Èze, Antibes, Saint-Paul-de-Vence and more, at your own pace.",
        icon: "/icon-services/museum.webp",
    },
    {
        title: "Families & Small Groups",
        text: "Comfortable vehicle, flexible timing, beach or village vibes, snack pauses—everyone enjoys the day, logistics handled",
        icon: "/icon-services/van.webp",
    }
]

export default function ForWhoPrivateTour() {
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
                Made For <span className="text-[#C5C5C5] ">Every Traveler</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-center mt-4 ">
                Custom private tours on the French Riviera—flexible routes, local insights, and zero logistics.
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
                    <Image src={"/icon-services/plane.webp"} alt="icon of plane" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">First-Time Visitors</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        See the must-sees without stress: tailored route, photo stops, café breaks, and a bilingual driver-guide sharing local tips.
                    </p>
                </div>

                {/* Card 2 - derrière */}
                <div ref={card2Ref} className="absolute inset-0 rotate-5 z-30 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/museum.webp"} alt="icon of museum" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Culture & History Lovers</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Old towns, perched villages, museums, artisan stops—Èze, Antibes, Saint-Paul-de-Vence and more, at your own pace.
                    </p>
                </div>

                {/* Card 3 - encore plus derrière */}
                <div ref={card3Ref} className="absolute inset-0 -rotate-5 z-10 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/van.webp"} alt="icon of van" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Families & Small Groups</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Comfortable vehicle, flexible timing, beach or village vibes, snack pauses—everyone enjoys the day, logistics handled.
                    </p>
                </div>
            </div>
        </div>
    )
}