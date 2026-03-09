"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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

export const heroScroll = () => {
  gsap.set(".hero.content", {
    willChange: "transform",
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-content",
      start: "1% top",
      end: "bottom",
      scrub: true,
    },
  });
  tl.to(".hero-content", {
    rotate: 5,
    scale: 1,
    yPercent: 10,
    ease: "power1.out",
  });
  tl.set(".hero-content", {
    willChange: "auto",
  });
};

export const imgOnHover = () => {
  const img = document.querySelector(".img");

  if (!img) return;

  setTimeout(() => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, {
        duration: 0.8,
        xPercent: -0.8,
        yPercent: -0.8,
        skewX: -1,
        ease: "power1.out",
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, {
        duration: 0.9,
        xPercent: 0,
        yPercent: 0,
        skewX: 0,
        ease: "power1.out",
      });
    });
  }, 1000);
};
