"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export const performanceSection = () => {
  const root = document.querySelector(".performance-section");
  const pin = document.querySelector(".pin-container");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px", () => {

    if (!root || !pin) return () => { };

    const cards = gsap.utils.toArray<HTMLElement>(".perf-card");
    if (!cards.length) return () => { };

    // SplitText
    const split = SplitText.create(".text", {
      type: "words,chars",
    });

    gsap.set(".perf-card", { willChange: "transform,opacity", force3D: true });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        pin: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * 3, // durée relative au viewport
        scrub: 1.2,
        anticipatePin: 1,
        pinSpacing: true,
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
          y: 2,
          scale: 0.85,
          autoAlpha: 0,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(cards, {
        autoAlpha: 0,
        y: "100px",
        scale: 0.95,
        rotate: -2,
        duration: 0.6,
        ease: "none",
        stagger: { each: 0.01, from: "end" },
      })
      // First card
      .from(".first-card-illu", {
        scale: 0.50,
        x: "100px",
        rotate: 1,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      // Second card
      .from(
        ".second-card-illu",
        {
          scale: 0.50,
          y: "100px",
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      )
      // Third card avec paths
      .from(
        ".first-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: "black.out(1.5)",
        },
        "<"
      )
      .from(
        ".second-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "<"
      )
      .from(
        ".third-card-illu",
        {
          scale: 0.50,
          y: "100px",
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      // Fourth card
      .from(
        ".text-fourth-card",
        {
          scale: 0.20,
          y: "-50px",
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".flag-card",
        {
          scale: 0.5,
          autoAlpha: 0,
          rotate: 2,
          duration: 0.9,
          ease: "bounce.out",
        },
        "<"
      )
      .from(
        ".mouse-svg",
        {
          autoAlpha: 0,
          y: "100px",
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
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