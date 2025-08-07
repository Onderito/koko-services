import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const serviceAnimation = (element: HTMLElement | null) => {
  if (!element) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      markers: true,
      once: true, // once pour que le scrollTrigger ne se déclenche qu'une seule fois
    },
  });
  tl.from(element.querySelector("span"), {
    y: 20,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  });
  tl.from(element.querySelector("h2"), {
    y: 20,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  });
  tl.from(
    element.querySelectorAll(".item"),
    {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=0.8"
  );
};
