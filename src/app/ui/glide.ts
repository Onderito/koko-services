// The site's smooth scroll to a position, for links that glide instead of jumping (user, 28 Oct 2026: "a smooth
// movement, not a brute one"): Lenis when it runs (mouse and trackpad, registered by scroll-motion.tsx), the browser's
// own smooth scroll otherwise. Eases in and out over 0.6 to 1.4 seconds depending on the distance.

import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function registerLenis(instance: Lenis | null) {
  lenis = instance;
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

/** Glides to `y` and returns about how long it takes, in milliseconds (0 when already there). */
export function glideTo(y: number): number {
  const distance = Math.abs(y - window.scrollY);
  if (distance < 2) return 0;
  const seconds = Math.min(1.4, 0.6 + distance / 4000);
  // force: Lenis pauses itself while a menu locks the page, and may not have resumed yet.
  if (lenis) lenis.scrollTo(y, { duration: seconds, easing: easeInOutCubic, force: true });
  else window.scrollTo({ top: y, behavior: "smooth" });
  return seconds * 1000;
}
