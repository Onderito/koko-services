import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

export const heroAnimation = (element: HTMLElement | null) => {
  if (!element) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      element.querySelectorAll(".toto"),
      {
        opacity: 0,
        y: 60,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "expoScale(0.5,7,none)", // tu peux aussi tester "back.out(1.4)" pour un mini rebond
        delay: 0.8,
        scale: 1,
        stagger: 0.1,
      }
    );
  }, element);

  return () => ctx.revert(); // ici on revient à la position initiale
};

export const splitText = () => {
  SplitText.create(".split", {
    type: "lines, words",
    mask: "lines",
    autoSplit: true,
    onSplit(self) {
      return gsap.from(self.words, {
        duration: 1.2,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    },
  });
};

export const imgAnimation = () => {
  gsap.fromTo(
    ".img",
    {
      autoAlpha: 0,
      y: -500,
      scale: 0.8,
      ease: "power1.inOut",
      borderWidth: 0,
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ease: "power1.inOut",
      duration: 1.2,
      borderWidth: 10,
    }
  );
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
    let span = button.querySelector(".button-content");
    let tl = gsap.timeline({ pause: true });

    tl.to(span, { duration: 0.4, yPercent: -150, ease: "back.in(1.3)" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.6, yPercent: 0, ease: "back.out(1.7)" });

    button.addEventListener("mouseenter", () => tl.play(0));
  });
};
