"use client";
import gsap from "gsap";

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

export const heroSection = () => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: EASE_OUT, duration: 0.55 } });

  tl.from("h1", { opacity: 0, scale: 0.97, y: 8 });
  tl.from(".description", { opacity: 0, scale: 0.97, y: 8 }, "<0.06");
  tl.from(".proof", { opacity: 0, scale: 0.97, y: 8 }, "<0.06");
  tl.from(".button", { opacity: 0, scale: 0.97, y: 8 }, "<0.06");
  tl.from(
    ".img",
    { opacity: 0, scale: 0.95, y: 12, duration: 0.7 },
    "<0.08",
  );
};
