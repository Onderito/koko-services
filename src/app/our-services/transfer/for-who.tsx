"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const card = [
    {
        title: "Business Travelers",
        text: "Executive transportation with guaranteed punctuality. Quiet, comfortable environment perfect for preparing meetings or making important calls during your journey.",
        icon: "/icon-services/suit-case.svg"
    },
    {
        title: "First-Time Visitors",
        text: "New to the French Riviera? Start your journey right with reliable transfers and local insights from our bilingual drivers.",
        icon: "/icon-services/hand.svg",
    },
    {
        title: "Group Travelers",
        text: "Families and groups who want to travel together comfortably. Premium vehicles with space for everyone and luggage assistance.",
        icon: "/icon-services/multiple-suit-case.svg",
    }
]

export default function ForWho() {
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
                    start: "-=150 20%",
                    end: "+=200%",
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1, // il nous permet de garder le pin même quand on quitte la section
                }
            });
            tl.to(card1Ref.current, {
                yPercent: -820,
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
                Made For <span className="text-[#C5C5C5] ">Every Journey</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-center mt-4 ">
                From business meetings to special celebrations, discover how our premium transfer service perfectly fits your needs.</p>

            <div className="block xl:hidden">
                {card.map((c, index) => (

                    <div key={index} className="relative z-50 flex flex-col mx-auto items-center  max-w-lg mt-10 border-[0.5px] border-[#E5E5E5] p-4 rounded-2xl ">
                        <Image src={c.icon} alt="icon suitcase" width={40} height={40} />
                        <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">{c.title}</h4>
                        <p className="text-center text-[16px] font-manrope-regular mt-4">{c.text}</p>
                    </div>
                ))}
            </div>
            <div ref={stackRef} className="hidden xl:block relative w-fit mx-auto mt-16 isolate">
                {/* Card 1 - devant */}
                <div ref={card1Ref} className="relative z-50 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/suit-case.svg"} alt="icon suitcase" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Business Travelers</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Executive transportation with guaranteed punctuality. Quiet, comfortable environment perfect for preparing meetings or making important calls during your journey.
                    </p>
                </div>

                {/* Card 2 - derrière */}
                <div ref={card2Ref} className="absolute inset-0 rotate-5 z-30 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/hand.svg"} alt="icon hand" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">First-Time Visitors</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        New to the French Riviera? Start your journey right with reliable transfers and local insights from our <br /> bilingual drivers.
                    </p>
                </div>

                {/* Card 3 - encore plus derrière */}
                <div ref={card3Ref} className="absolute inset-0 -rotate-5 z-10 flex flex-col items-center max-w-lg border-[0.5px] bg-white border-[#E5E5E5] p-4 rounded-2xl will-change-transform">
                    <Image src={"/icon-services/multiple-suit-case.svg"} alt="icon multiple suitcase" width={40} height={40} />
                    <h4 className="text-[20px] leading-7 tracking-[-2%] font-manrope-bold mt-2">Group Travelers</h4>
                    <p className="text-center text-[16px] font-manrope-regular mt-4">
                        Families and groups who want to travel together comfortably. Premium vehicles with space for everyone and luggage assistance.
                    </p>
                </div>
            </div>
        </div>
    )
}