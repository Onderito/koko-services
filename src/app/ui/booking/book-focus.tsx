"use client";

// "Get a quote" and every other link to the booking bar (/#book) glide to the hero's bar and light it up (user, 28 Oct
// 2026: "a smooth movement, not a brute one"; "a blur dark effect, slightly, that disappears in about 3 seconds"). The
// rest of the hero dims and blurs a little under a navy veil while the bar stays sharp above it; the veil clears within
// 3 seconds of arriving. From another page the home page opens at its top, then the glide follows. Reduced motion: a
// plain jump, no veil. The clicks are caught in scroll-motion.tsx, beside the site's other scroll rules.

import { useEffect, useRef } from "react";
import { glideTo } from "../glide";

let light: (() => void) | null = null;
let arriving = false;

/** On the home page: glide to the bar and light it up. False when the bar is not on this page. */
export function focusBook(): boolean {
  light?.();
  return light !== null;
}

/** Before opening the home page from another page: the bar lights up once it is there. */
export function focusBookOnArrival() {
  arriving = true;
}

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function BookFocus() {
  const veil = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const bar = document.getElementById("book");
      if (!bar) return;
      const r = bar.getBoundingClientRect();
      const top = window.scrollY + r.top;
      // The whole hero when the bar fits on screen under it, otherwise the bar just under the header.
      const y = r.height + top + 24 <= window.innerHeight ? 0 : Math.max(0, top - (parseFloat(getComputedStyle(bar).scrollMarginTop) || 0));
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return window.scrollTo({ top: y, behavior: "instant" });
      const glide = glideTo(y);
      // In over 0.3s, held until half a second after arriving, then gone over 2.5s.
      const total = glide + 3000;
      const blur = "blur(4px)";
      veil.current?.animate(
        [
          { opacity: 0, backdropFilter: blur, easing: EASE },
          { opacity: 1, backdropFilter: blur, easing: EASE, offset: 300 / total },
          { opacity: 1, backdropFilter: blur, easing: EASE, offset: (glide + 500) / total },
          { opacity: 0, backdropFilter: blur },
        ],
        { duration: total },
      );
    };
    // Once the page scrolls again: the phone menu, closing on the same tap, locks the page until it has gone.
    light = () => {
      let frames = 0;
      const when = (): void => {
        if (getComputedStyle(document.documentElement).overflow === "hidden" && frames++ < 30) requestAnimationFrame(when);
        else run();
      };
      requestAnimationFrame(when);
    };
    if (arriving || window.location.hash === "#book") {
      arriving = false;
      light();
    }
    return () => {
      light = null;
    };
  }, []);

  return <div ref={veil} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[#0d1922]/40 opacity-0" />;
}
