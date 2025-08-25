"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// export const serviceSection = () => {

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".service-container",
//       start: "top center",
//       end: "30% center",
//       scrub: 1.5,
//     },
//   });
// };

// export const animateCards = () => {
//   // On sélectionne toutes les cartes
//   const cards = gsap.utils.toArray(".card-wrapper");

//   // Si aucune carte n'est trouvée, on ne fait rien pour éviter les erreurs
//   if (cards.length === 0) {
//     return;
//   }

//   // On anime chaque carte individuellement avec un décalage (stagger)
//   gsap.to(cards, {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotate: 0,
//     ease: "power3.out",
//     duration: 1,

//     scrollTrigger: {
//       trigger: ".service-container", // Le conteneur qui déclenche l'animation
//       start: "top 70%", // Démarre quand 70% du haut du trigger atteint le viewport
//       end: "bottom 80%", //
//       scrub: true,
//     },

//     stagger: {
//       each: 0.2,
//       from: "end", // Commence le décalage depuis la première carte
//     },
//   });
// };

export const setInitialCardState = () => {
  gsap.set(".card-wrapper", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotate: -2,
  });
};

// // fonction permettant de déclencher l'animation lorsque l'user quitte la section
// export const serviceScroll = () => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".service-container",
//       start: "center 60%",
//       end: "bottom 50%",
//       scrub: true,
//     },
//   });
//   tl.to(".service-container", {
//     opacity: 0.5,
//     scale: 1,
//     yPercent: 20,
//     ease: "power2.in",
//   });
// };
