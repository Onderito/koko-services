"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const setInitialCardState = () => {
  gsap.set(".card-wrapper", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotate: -2,
  });
};
