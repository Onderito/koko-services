import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother: ScrollSmoother | null = null;

export const initScrollSmoother = () => {
  if (typeof window === "undefined") return;

  if (!smoother) {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true, // pour activer les data-speed etc.
    });
  }
};

export const killScrollSmoother = () => {
  if (smoother) {
    smoother.kill();
    smoother = null;
  }
};
