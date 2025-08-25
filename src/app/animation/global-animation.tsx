"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const globalAnimation = () => {
    const el = document.querySelector(".main-container .split");
    if (!el) return;
    const split = SplitText.create(el, { type: "chars" });
    console.log("mots:", split.chars.length);

    gsap.set(".card", {
        autoAlpha: 0,
        scale: 0.95,
        y: 5
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".main-container",
            start: "top center",
            end: "60% center",
            scrub: 1.5,
        },
    }).to(".span-anim", {
        duration: 0.7,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "none"

    }).to(split.chars, {
        color: "#404040",
        stagger: 0.05,
        duration: 0.5,
        ease: "none"
    }).to(".card", {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: "none",
        duration: 0.4
    }, "<")

    // cleanup: retire les wrappers du SplitText
    return () => split.revert();
};
