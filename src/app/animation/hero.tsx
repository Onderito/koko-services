"use client";
import gsap from "gsap";

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

export const heroSection = () => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) return;

  const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });

  // Proof pill
  tl.from(".proof", { opacity: 0, y: 10, duration: 0.5 });

  // H1 — mot par mot, chaque mot monte depuis le bas de son masque
  tl.from(
    ".hero-word",
    {
      y: "108%",
      duration: 0.65,
      stagger: 0.055,
    },
    "<0.1",
  );

  // Description + button après le dernier mot
  tl.from(".description", { opacity: 0, y: 10, duration: 0.5 }, "-=0.2");
  tl.from(".button", { opacity: 0, y: 20, duration: 0.5 }, ">");

  // Image — arrive une fois le texte posé
  tl.from(
    ".img",
    { opacity: 0, scale: 0.96, x: 100, y: 50, duration: 0.5 },
    "-=0.5",
  );
};
