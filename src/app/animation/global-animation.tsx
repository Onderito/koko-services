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

    gsap.set(".card", {
      autoAlpha: 0,
      scale: 0.95,
      y: 20,
      duration: 0.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top center",
        end: "top center",
      },
    });

    tl.to(".span-anim", {
      duration: 0.3,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
    })
      .to(
        split.chars,
        {
          color: "#404040",
          stagger: 0.05,
          duration: 0.5,
          ease: "power1.out",
        },
        "<",
      )
      .to(
        ".card",
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power1.out",
        },
        "<",
      );

    return () => split.revert();
  });
};
