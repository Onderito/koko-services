"use client";

// The booking bar's time field (user, 21 Oct 2026: a better time selector, Cloudflare style). A field showing the chosen
// time opens a pop-up list of quarter hours, scrolled to the current choice; for a return trip it shows two columns,
// outbound and return. The list scrolls in place (the page does not move), and the keys move through it.

import { useCallback, useEffect, useRef, useState } from "react";
import Popover from "./popover";

const SLOTS = Array.from({ length: 96 }, (_, i) => `${String(Math.floor(i / 4)).padStart(2, "0")}:${String((i % 4) * 15).padStart(2, "0")}`);

/** A scrolling list of quarter hours (also used by the contact form's time field). */
export function TimeColumn({ title, value, onPick, autoFocus }: { title?: string; value: string; onPick: (t: string) => void; autoFocus?: boolean }) {
  const list = useRef<HTMLUListElement>(null);

  // Open on the current choice, centred; with no choice yet, on 9:00.
  useEffect(() => {
    const el = list.current?.querySelector<HTMLElement>('[aria-selected="true"]') ?? list.current?.querySelector<HTMLElement>('[data-time="09:00"]');
    if (el && list.current) list.current.scrollTop = el.offsetTop - list.current.clientHeight / 2 + el.offsetHeight / 2;
    if (autoFocus) el?.focus({ preventScroll: true });
  }, [autoFocus]);

  const onKey = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const items = [...(list.current?.querySelectorAll<HTMLButtonElement>("button") ?? [])];
    const i = items.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = items[Math.max(0, Math.min(items.length - 1, i + (e.key === "ArrowDown" ? 1 : -1)))];
      next?.focus();
      next?.scrollIntoView({ block: "nearest" });
    }
  };

  return (
    <div className="min-w-0 flex-1">
      {title && <p className="px-2 pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">{title}</p>}
      <ul ref={list} role="listbox" aria-label={title ?? "Time"} onKeyDown={onKey} data-lenis-prevent="" className="relative max-h-[264px] overflow-y-auto overscroll-contain pr-1">
        {SLOTS.map(t => {
          const on = t === value;
          return (
            <li key={t}>
              <button
                type="button"
                role="option"
                aria-selected={on}
                data-time={t}
                onClick={() => onPick(t)}
                className={`w-full rounded-[8px] px-3 py-2 text-left text-[15px] tabular-nums outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e8ba64] ${
                  on ? "bg-[#e8ba64] font-semibold text-[#0d1922]" : "text-[#101828] hover:bg-[#f2f4f7]"
                }`}
              >
                {t}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TimeField({
  isReturn,
  time,
  returnTime,
  onChange,
}: {
  isReturn: boolean;
  time: string;
  returnTime: string;
  onChange: (v: { time: string; returnTime: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div ref={box} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="block rounded-control text-left outline-none focus-visible:ring-2 focus-visible:ring-[#e8ba64] focus-visible:ring-offset-4"
      >
        <span className="block text-[13px] font-medium text-[#5b6472]">{isReturn ? "Times" : "Time"}</span>
        <span className="mt-1 block whitespace-nowrap text-[16px] font-semibold tabular-nums text-[#0f1115]">{isReturn ? `${time} · ${returnTime}` : time}</span>
      </button>

      <Popover
        open={open}
        onClose={() => {
          close();
          trigger.current?.focus();
        }}
        anchor={box}
        label={isReturn ? "Choose your pick-up times" : "Choose your pick-up time"}
        className={`p-3 ${isReturn ? "w-[300px]" : "w-[150px]"}`}
      >
        {isReturn ? (
          <>
            <div className="flex gap-2">
              <TimeColumn title="Outbound" value={time} onPick={t => onChange({ time: t, returnTime })} autoFocus />
              <span aria-hidden="true" className="w-px bg-[#f2f4f7]" />
              <TimeColumn title="Return" value={returnTime} onPick={t => onChange({ time, returnTime: t })} />
            </div>
            <button
              type="button"
              onClick={() => {
                close();
                trigger.current?.focus();
              }}
              className="mt-3 h-10 w-full rounded-full bg-[#0d1922] text-[14px] font-semibold text-white transition-colors hover:bg-[#1a2a36]"
            >
              Done
            </button>
          </>
        ) : (
          <TimeColumn
            value={time}
            autoFocus
            onPick={t => {
              onChange({ time: t, returnTime });
              window.setTimeout(close, 150);
            }}
          />
        )}
      </Popover>
    </div>
  );
}
