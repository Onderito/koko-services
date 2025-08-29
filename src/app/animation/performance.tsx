"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export const performanceSection = () => {
  const root = document.querySelector(".performance-section");
  const pin = document.querySelector(".pin-container");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px", () => {

    if (!root || !pin) return () => { };

    const cards = gsap.utils.toArray<HTMLElement>(".perf-card");
    if (!cards.length) return () => { };

    // SplitText
    // const split = SplitText.create(".text", {
    //   type: "words,chars",
    // });

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
      .from((".text"),
        {
          y: "20px",
          scale: 0.6,
          autoAlpha: 0,
          duration: 0.8,
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
        x: "10px",
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
          y: "10px",
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
          y: "10px",
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
          scale: 0.50,
          y: "-5px",
          rotate: -5,
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
          rotate: 10,
          duration: 0.9,
          ease: "bounce.out",
        },
        "<"
      )
      .from(
        ".mouse-svg",
        {
          autoAlpha: 0,
          scale: 0.5,
          rotate: 4,
          y: "4px",
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      );


    // cleanup
    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
      gsap.set(".perf-card", { clearProps: "all" });
    };
  })
};