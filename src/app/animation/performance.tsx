"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

export const performanceSection = () => {
  const cards = gsap.utils.toArray(".perf-card");
  if (cards.length === 0) {
    return;
  }
  const split = SplitText.create(".perf-title", {
    type: "words, chars",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-container",
      pin: true,
      start: "top top",
      end: "+=3000",
      scrub: 1.5,
    },
  });
  tl.from(".performance-section", {
    autoAlpha: 0,
    y: 20,
    duration: 0.5,
  });
  tl.from(
    split.chars,
    {
      y: 20,
      autoAlpha: 0,
      stagger: 0.02,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2"
  );
  tl.from(
    ".perf-desc",
    {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.2"
  );
  gsap.set(".perf-card", { willChange: "transform,opacity", force3D: true });

  tl.from(cards, {
    autoAlpha: 0,
    x: 80,
    scale: 0.96,
    rotate: -2,
    duration: 0.6,
    ease: "none",
    stagger: {
      each: 0.2,
      from: "end",
    },
  });

  // Animation de la FirstCard après les cartes
  // First card
  tl.from(".first-card-illu", {
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
    ) // Overlap légèrement avec la précédente

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
    ) // Commence avant la fin de la précédente

    .from(
      ".mouse-svg",
      {
        autoAlpha: 0,
        x: 15,
        duration: 0.6,
        ease: "power3.out",
      },
      "+=0.1"
    );
};
