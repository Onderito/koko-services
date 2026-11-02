"use client";

// Every figure that can roll uses Hyperiux's Number Counter (NumberCounterThree, MPL 2.0, vendor file unchanged).
// 21 Oct 2026, at the user's request, a figure rolls when it appears, not when the page loads: the server sends the plain
// figure (crawlers, .md twins, no JavaScript), and the counter is mounted only once the figure is about to enter the
// screen. Its ScrollTrigger is then set on the page as it is at that moment, and starts the roll when the digits pass 85%
// of the screen height. Visitors who ask for reduced motion keep the plain figure; screen readers always read it.

import { useEffect, useRef, useState } from "react";
import { NumberCounterThree } from "@/components/effects/number-counter";

export default function RollingNumber({ value, className = "", replayKey }: { value: string; className?: string; replayKey?: string | number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setLive(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px 20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // leading-none: the € and % signs sit in the same 1em line as the digit columns, so the figure keeps one baseline.
    <span ref={ref} className={`inline-flex leading-none ${className}`}>
      {live ? (
        <>
          <span aria-hidden="true" className="inline-flex [&_.flex-col>span]:text-center">
            <NumberCounterThree key={replayKey ?? value} value={value} textSize="" textColor="currentColor" fontWeight="inherit" duration={1.5} stagger={0.1} />
          </span>
          <span className="sr-only">{value}</span>
        </>
      ) : (
        value
      )}
    </span>
  );
}
