"use client";

// Counts with − and + (passengers, suitcases), animated in the Cloudflare manner of our ATS Intelligent (Hev) project
// (user, 28 Oct 2026: "animated like Cloudflare type"): 100ms colour changes and 200ms moves on cubic-bezier(.4,0,.2,1).
// The figure rolls, up when it grows and down when it shrinks; the buttons tint on hover, dip when pressed and stop at
// the limits (they stay focusable there); the arrow keys step too.

import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";

const roll = {
  in: (dir: number) => ({ y: `${dir * 100}%`, opacity: 0 }),
  shown: { y: "0%", opacity: 1 },
  out: (dir: number) => ({ y: `${dir * -100}%`, opacity: 0 }),
};

/** The figure alone, rolling when it changes (the hero's passenger count uses it as is). */
export function RollingCount({ value }: { value: number }) {
  const reduced = useReducedMotion();
  const [prev, setPrev] = useState(value);
  const [dir, setDir] = useState(1);
  if (value !== prev) {
    setPrev(value);
    setDir(value > prev ? 1 : -1);
  }
  return (
    <LazyMotion features={domAnimation} strict>
      {/* One grid cell holds the leaving and the arriving figure; the cell clips them. Screen readers get the figure once. */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-grid min-w-[1.25ch] justify-items-center overflow-hidden tabular-nums">
        <AnimatePresence initial={false} custom={dir}>
          <m.span
            key={value}
            custom={dir}
            variants={roll}
            initial={reduced ? false : "in"}
            animate="shown"
            exit={reduced ? undefined : "out"}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="[grid-area:1/1]"
          >
            {value}
          </m.span>
        </AnimatePresence>
      </span>
    </LazyMotion>
  );
}

const button =
  "grid h-9 w-9 place-items-center rounded-[6px] text-[#101828] outline-none transition-[background-color,transform,opacity] duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#f2f4f7] focus-visible:ring-2 focus-visible:ring-[#e2b04a] active:scale-[0.92] aria-disabled:cursor-not-allowed aria-disabled:opacity-35 aria-disabled:hover:bg-transparent aria-disabled:active:scale-100";

/** A count in a form field: − on the left, the rolling figure, + on the right. */
export default function CountStepper({
  id,
  labelledBy,
  value,
  min,
  max,
  onChange,
  names,
}: {
  id: string;
  labelledBy: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  /** The buttons' names for screen readers, e.g. ["One passenger less", "One passenger more"]. */
  names: [less: string, more: string];
}) {
  const step = (by: number) => {
    const next = Math.min(max, Math.max(min, value + by));
    if (next !== value) onChange(next);
  };
  return (
    <div
      role="group"
      aria-labelledby={labelledBy}
      onKeyDown={e => {
        const by = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1 : e.key === "ArrowDown" || e.key === "ArrowLeft" ? -1 : 0;
        if (!by) return;
        e.preventDefault();
        step(by);
      }}
      className="mt-2 flex h-12 items-center justify-between rounded-[8px] border border-[#101828]/15 bg-white px-1.5 transition-colors duration-150 hover:border-[#101828]/30"
    >
      <button type="button" aria-label={names[0]} aria-disabled={value <= min} onClick={() => step(-1)} className={button}>
        <Minus size={16} strokeWidth={2} aria-hidden="true" />
      </button>
      <output id={id} aria-live="polite" className="text-[16px] font-semibold text-[#101828]">
        <RollingCount value={value} />
      </output>
      <button type="button" aria-label={names[1]} aria-disabled={value >= max} onClick={() => step(1)} className={button}>
        <Plus size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
