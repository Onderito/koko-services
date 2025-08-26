"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export const performanceSection = () => {
  const root = document.querySelector(".performance-section");
  const pin = document.querySelector(".pin-container");
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px", () => {

    if (!root || !pin) return () => { };

    const cards = gsap.utils.toArray<HTMLElement>(".perf-card");
    if (!cards.length) return () => { };

    // SplitText
    const split = SplitText.create(".perf-title", {
      type: "words,chars",
    });

    gsap.set(".perf-card", { willChange: "transform,opacity", force3D: true });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,                           // la zone à pinner
        pin: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * 3, // durée relative au viewport
        scrub: 1.2,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });


    tl.from(".performance-section", {
      autoAlpha: 0,
      y: 20,
      duration: 0.5,
    })
      .from(
        split.chars,
        {
          y: 20,
          autoAlpha: 0,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".perf-desc",
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(cards, {
        autoAlpha: 0,
        x: 80,
        scale: 0.96,
        rotate: -2,
        duration: 0.6,
        ease: "none",
        stagger: { each: 0.2, from: "end" },
      })
      // First card
      .from(".first-card-illu", {
        scale: 0.95,
        rotate: 1,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".illu-content",
        {
          autoAlpha: 0,
          x: 15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // Second card
      .from(
        ".second-card-illu",
        {
          scale: 0.8,
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.2"
      )
      // Third card avec paths
      .from(
        ".first-path",
        {
          drawSVG: "100% 100%",
          duration: 1.1,
          ease: "power2.out",
        },
        "+=0.2"
      )
      .from(
        ".second-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "+=0.1"
      )
      .from(
        ".third-card-illu",
        {
          autoAlpha: 0,
          x: 15,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.2"
      )
      // Fourth card
      .from(
        ".text-fourth-card",
        {
          autoAlpha: 0,
          x: 15,
          duration: 1.2,
          ease: "power3.out",
        },
        "+=0.2"
      )
      .from(
        ".flag-card",
        {
          scale: 0.8,
          autoAlpha: 0,
          rotate: 2,
          duration: 1.2,
          ease: "bounce.out",
        },
        "-=0.6"
      )
      .from(
        ".mouse-svg",
        {
          autoAlpha: 0,
          x: 15,
          duration: 0.6,
          ease: "power3.out",
        },
        "start"
      );


    // cleanup
    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
      split.revert();
      gsap.set(".perf-card", { clearProps: "all" });
    };
  })
};


