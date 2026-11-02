"use client";

// The selection pill that slides from one option to the next (user, 21 Oct 2026: "a motion effect sliding from that
// button to another", then "smoother, like a motion"), for the hero's "Transfer / By the hour" and the pricing
// destinations. Motion (motion.dev) moves it with a spring, the motion of its tab examples: bounce 0.2 over 0.6s,
// interrupted smoothly when the visitor clicks again mid-way. Only Motion's small animation bundle is loaded
// (LazyMotion + domAnimation). The list (relative, isolate) measures its selected option (data-selected="true"); until the
// first measure (server HTML, first paint) the selected option keeps its own fill, so nothing jumps when the script starts.

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

type Box = { x: number; y: number; w: number; h: number };

const SPRING = { type: "spring", bounce: 0.2, duration: 0.6 } as const;

export function useSlidingPill<T extends HTMLElement = HTMLDivElement>(selected: unknown, pillClassName: string, pillStyle?: CSSProperties) {
  const listRef = useRef<T>(null);
  const [box, setBox] = useState<Box | null>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const el = list.querySelector<HTMLElement>('[data-selected="true"]');
      if (el) setBox({ x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight });
    };
    measure();
    // Re-measure when the options change size (fonts arriving, wrapping on a narrow screen).
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    list.querySelectorAll("[data-selected]").forEach(el => ro.observe(el));
    return () => ro.disconnect();
  }, [selected]);

  const pill = box ? (
    <LazyMotion features={domAnimation} strict>
      <m.span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 ${pillClassName}`}
        style={pillStyle}
        initial={false}
        animate={{ x: box.x, y: box.y, width: box.w, height: box.h }}
        transition={reduced ? { duration: 0 } : SPRING}
      />
    </LazyMotion>
  ) : null;

  return { listRef, ready: box !== null, pill };
}
