"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export const performanceSection = () => {
  const title = document.querySelector(".perf-title");
  const description = document.querySelector(".perf-description");
  const pin = document.querySelector<HTMLElement>(".pin-container");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    if (!title || !description || !pin) return () => {};

    const cards = gsap.utils.toArray<HTMLElement>(".perf-card");
    if (!cards.length) return () => {};

    gsap.set([title, description, cards], {
      willChange: "transform,opacity",
      force3D: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        pin: true,
        start: "top top",
        end: () => `+=${Math.max(pin.offsetHeight * 0.95, 780)}`,
        scrub: 0.75,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    tl.from(title, {
      autoAlpha: 0,
      y: 28,
      duration: 0.7,
      ease: "power2.out",
    })
      .from(
        description,
        {
          y: 18,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .from(cards, {
        autoAlpha: 0,
        y: 72,
        scale: 0.96,
        rotate: -1.5,
        duration: 0.9,
        ease: "power2.out",
        stagger: { each: 0.08, from: "start" },
      })
      // First card
      .from(".first-card-illu", {
        scale: 0.72,
        x: 10,
        rotate: 1,
        autoAlpha: 0,
        duration: 0.7,
        ease: "expo.out",
      })
      // Second card
      .from(
        ".second-card-illu",
        {
          scale: 0.72,
          y: 10,
          autoAlpha: 0,
          duration: 0.6,
          ease: "expo.out",
        },
        "<",
      )
      // Third card avec paths
      .from(
        ".first-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: "expo.out",
        },
        "<",
      )
      .from(
        ".second-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: "expo.out",
        },
        "<",
      )
      .from(
        ".third-card-illu",
        {
          scale: 0.72,
          y: 10,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "<",
      )
      // Fourth card
      .from(
        ".text-fourth-card",
        {
          scale: 0.72,
          y: -6,
          rotate: -4,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "<",
      )
      .from(
        ".flag-card",
        {
          scale: 0.72,
          autoAlpha: 0,
          rotate: 6,
          duration: 0.75,
          ease: "expo.out",
        },
        "<",
      )
      .from(
        ".mouse-svg",
        {
          autoAlpha: 0,
          scale: 0.72,
          rotate: 4,
          y: 4,
          duration: 0.6,
          ease: "power2.out",
        },
        "<",
      );

    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
      gsap.set([title, description, cards], { clearProps: "all" });
    };
  });

  return () => mm.revert();
};
