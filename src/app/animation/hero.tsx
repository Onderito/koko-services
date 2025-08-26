"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const heroSection = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

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
    "-=0.7"
  );

  tl.from(
    "h1",
    {
      opacity: 0,
      y: 40,
    },
    "-=0.7"
  );

  tl.from(
    ".description",
    {
      opacity: 0,
      y: 20,
    },
    "-=0.6"
  );

  tl.from(
    ".button",
    {
      opacity: 0,
      scale: 0.95,
    },
    "-=0.6"
  );

  tl.from(
    ".svg",
    {
      opacity: 0,
      y: -60,
      scale: 0.95,
    },
    "-=0.6"
  );
  tl.from(
    ".img",
    {
      opacity: 0,
      y: -60,
      scale: 0.95,
    },
    "-=0.6"
  );
};

export const heroScroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-container",
      start: "1% top",
      end: "bottom",
      scrub: true,
    },
  });
  tl.to(".hero-container", {
    rotate: 2,
    scale: 0.9,
    yPercent: 10,
    ease: "power2.out",
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

export const buttonAnimation = () => {
  const buttons = gsap.utils.toArray(".button");
  buttons.forEach((item) => {
    const button = item as HTMLElement;
    const span = button.querySelector(".button-content");
    const tl = gsap.timeline({ pause: true });

    tl.to(span, { duration: 0.4, yPercent: -150, ease: "back.in(1.3)" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.6, yPercent: 0, ease: "back.out(1.7)" });

    button.addEventListener("mouseenter", () => tl.play(0));
  });
};
