"use client";
import gsap from "gsap";

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

export const heroSection = () => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) return;

  const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });

  // Image — démarre en premier, en parallèle avec tout le reste
  tl.from(".img", { opacity: 0, scale: 0.97, y: 12, duration: 0.7 });

  // Proof pill — démarre en même temps que l'image
  tl.from(".proof", { opacity: 0, y: 8, duration: 0.45 }, "<");

  // H1 — mot par mot, légèrement décalé après le pill
  tl.from(
    ".hero-word",
    { y: "108%", duration: 0.6, stagger: 0.05 },
    "<0.08",
  );

  // Description + button dans la foulée
  tl.from(".description", { opacity: 0, y: 8, duration: 0.4 }, "-=0.25");
  tl.from(".button", { opacity: 0, y: 6, duration: 0.35 }, "<0.07");
};
