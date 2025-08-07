"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const serviceSection = () => {
  const title = SplitText.create(".title", {
    type: "words",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-container",
      start: "top center",
      end: "30% center",
      scrub: true,
    },
  });

  tl.to(".our-service", {
    duration: 1,
    clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
  });

  tl.to(
    title.words,
    {
      color: "#404040",
      stagger: 1,
      ease: "power2.out",
    },
    "-=0.4"
  );
};

export const animateCards = () => {
  // On sélectionne toutes les cartes
  const cards = gsap.utils.toArray(".card-wrapper");

  // Si aucune carte n'est trouvée, on ne fait rien pour éviter les erreurs
  if (cards.length === 0) {
    return;
  }

  // On anime chaque carte individuellement avec un décalage (stagger)
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    ease: "power3.out",
    duration: 1,

    scrollTrigger: {
      trigger: ".service-container", // Le conteneur qui déclenche l'animation
      start: "top 70%", // Démarre quand 70% du haut du trigger atteint le viewport
      end: "bottom 80%", //
      scrub: true,
    },

    stagger: {
      each: 0.2,
      from: "end", // Commence le décalage depuis la première carte
    },
  });
};

export const setInitialCardState = () => {
  gsap.set(".card-wrapper", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotate: -2,
  });
};

// fonction permettant de déclencher l'animation lorsque l'user quitte la section
export const serviceScroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-container",
      start: "center 60%",
      end: "bottom 50%",
      markers: true,
      scrub: true,
    },
  });
  tl.to(".service-container", {
    opacity: 0,
    scale: 0.9,
    y: -500,
    ease: "power2.in",
    filter: "blur(2px)",
  });
};
