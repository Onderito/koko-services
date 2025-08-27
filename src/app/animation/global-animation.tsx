"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const globalAnimation = () => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px", () => {
        const el = document.querySelector(".main-container .split");
        if (!el) return;
        const split = SplitText.create(el, { type: "chars" });
        console.log("mots:", split.chars.length);

        gsap.set(".card", {
            autoAlpha: 0,
            scale: 0.95,
            y: 20,
            duration: 0.5
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-container",
                start: "top center",
                end: "60% center",
                scrub: 1.5,
            },
        });

        tl.to(".span-anim", {
            duration: 0.7,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "power2.out"
        })
            .to(split.chars, {
                color: "#404040",
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.3")
            .to(".card", {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.2)"
            }, "-=0.2")

        // cleanup: retire les wrappers du SplitText
        return () => split.revert();
    });
};
