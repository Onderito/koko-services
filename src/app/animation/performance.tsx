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
      trigger: ".performance-section",
      start: "top center",
      toggleActions: "play none none reverse",
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
  tl.from(
    ".first-card-illu",
    {
      scale: 0.95,
      rotate: 1, // On peut réduire un peu la rotation pour plus de subtilité
      autoAlpha: 0,
      duration: 0.8, // On augmente un peu la durée
      ease: "power3.out",
    },
    "+=0.001"
  ); // Démarre 0.2s après la fin de l'animation des cartes
  tl.from(
    ".illu-content",
    {
      autoAlpha: 0,
      x: 15, // On peut augmenter un peu le déplacement pour qu'il soit visible malgré la durée plus longue
      duration: 0.6,
      ease: "power3.out",
    },
    "<"
  );
  tl.from(
    ".second-card-illu",
    {
      scale: 0.8,
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "<"
  );
  tl.from(".first-path", {
    drawSVG: "100% 100%", // Commence depuis le début, longueur 0
    duration: 1.1,
    ease: "power2.out",
  });
  tl.from(
    ".second-path",
    {
      drawSVG: "100% 100%",
      duration: 0.8,
      ease: "back.out(1.5)",
    },
    "<"
  );
  tl.from(
    ".third-card-illu",
    {
      autoAlpha: 0,
      x: 15,
      duration: 0.6,
      ease: "power3.out",
    },
    "<"
  );
  tl.from(
    ".text-fourth-card",
    {
      autoAlpha: 0,
      x: 15,
      duration: 1.2,
      ease: "power3.out",
    },
    "<"
  );
  tl.from(
    ".flag-card",
    {
      scale: 0.8,
      autoAlpha: 0,
      rotate: 2,
      duration: 1.2,
      ease: "bounce.out",
    },
    "<"
  );
  tl.from(
    ".mouse-svg",
    {
      autoAlpha: 0,
      x: 15,
      duration: 0.6,
      ease: "power3.out",
    },
    "<"
  );
};
