"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
      trigger: ".performance-section",
      start: "top center",
      end: "30% center",
      scrub: 2,
    },
  });
  tl.from(".performance-section", {
    autoAlpha: 0,
    y: 20,
    duration: 0.8,
  });
  tl.from(
    split.chars,
    {
      y: 20,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );
  tl.from(
    ".perf-desc",
    {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );
  gsap.set(".perf-card", { willChange: "transform,opacity", force3D: true });

  tl.from(cards, {
    autoAlpha: 0,
    x: 80,
    scale: 0.96,
    rotate: -2,
    duration: 0.8,
    ease: "none",
    stagger: {
      each: 0.8,
      from: "end",
    },
  });
  // Animation de la FirstCard après les cartes
  tl.from(
    ".first-card-illustration",
    {
      scale: 0.8,
      rotate: 2,
      autoAlpha: 0,
      duration: 0.8,
      ease: "bounce.out",
    },
    "+=0.2"
  ); // Démarre 0.2s après la fin de l'animation des cartes
};
