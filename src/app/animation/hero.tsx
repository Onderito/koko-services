"use client";
import gsap from "gsap";

export const heroSection = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1 } });

  tl.to(".hero-content", {
    opacity: 1,
    y: 0,
    duration: 1,
  });

  tl.to(
    ".hero-span",
    {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
    },
    "-=0.7",
  );

  tl.from(
    "h1",
    {
      opacity: 0,
      scale: 0.9,
      y: 5,
    },
    "<",
  );

  tl.from(
    ".description",
    {
      opacity: 0,
      scale: 0.9,
      y: 5,
    },
    "<",
  );

  tl.from(
    ".button",
    {
      opacity: 0,
      scale: 0.9,
      y: 5,
    },
    "<0.2",
  );

  tl.from(
    ".svg",
    {
      opacity: 0,
      scale: 0.9,
      y: 20,
      ease: "elastic(1, 0.75)",
    },
    "<0.4",
  );
  tl.from(
    ".img",
    {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    "<",
  );
};
