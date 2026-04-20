"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

// Emil-inspired easing mapped to GSAP's built-in curves.
// power3.out ≈ cubic-bezier(0.215, 0.61, 0.355, 1) — strong ease-out for UI entry
// expo.out   ≈ cubic-bezier(0.19, 1, 0.22, 1)      — even steeper, used for drawSVG lines
const EMIL_OUT = "power3.out";
const LINE_OUT = "expo.out";

export const performanceSection = () => {
  const title = document.querySelector(".perf-title");
  const description = document.querySelector(".perf-description");
  const pin = document.querySelector<HTMLElement>(".pin-container");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    if (!title || !description || !pin) return () => {};

    const cards = gsap.utils.toArray<HTMLElement>(".perf-card");
    if (!cards.length) return () => {};

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      return () => {};
    }

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
      y: 18,
      duration: 0.6,
      ease: EMIL_OUT,
    })
      .from(
        description,
        {
          autoAlpha: 0,
          y: 12,
          duration: 0.5,
          ease: EMIL_OUT,
        },
        "-=0.3",
      )
      .from(cards, {
        autoAlpha: 0,
        y: 32,
        scale: 0.97,
        duration: 0.7,
        ease: EMIL_OUT,
        stagger: { each: 0.06, from: "start" },
      })
      // First card illustration — the receipt tag
      .from(
        ".first-card-illu",
        {
          autoAlpha: 0,
          scale: 0.94,
          y: 8,
          duration: 0.55,
          ease: EMIL_OUT,
        },
        "-=0.2",
      )
      // Second card illustration
      .from(
        ".second-card-illu",
        {
          autoAlpha: 0,
          scale: 0.94,
          y: 8,
          duration: 0.55,
          ease: EMIL_OUT,
        },
        "<0.06",
      )
      // Third card — draw the SVG paths in sequence
      .from(
        ".first-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: LINE_OUT,
        },
        "<0.06",
      )
      .from(
        ".second-path",
        {
          drawSVG: "100% 100%",
          duration: 0.8,
          ease: LINE_OUT,
        },
        "<0.1",
      )
      .from(
        ".third-card-illu",
        {
          autoAlpha: 0,
          scale: 0.94,
          y: 8,
          duration: 0.55,
          ease: EMIL_OUT,
        },
        "<0.06",
      )
      // Fourth card — language chip + flag + cursor
      .from(
        ".text-fourth-card",
        {
          autoAlpha: 0,
          scale: 0.95,
          y: 6,
          duration: 0.55,
          ease: EMIL_OUT,
        },
        "<0.06",
      )
      .from(
        ".flag-card",
        {
          autoAlpha: 0,
          scale: 0.95,
          y: 6,
          duration: 0.55,
          ease: EMIL_OUT,
        },
        "<0.06",
      )
      .from(
        ".mouse-svg",
        {
          autoAlpha: 0,
          scale: 0.95,
          y: 4,
          duration: 0.5,
          ease: EMIL_OUT,
        },
        "<0.06",
      );

    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
      gsap.set([title, description, cards], { clearProps: "all" });
    };
  });

  return () => mm.revert();
};
