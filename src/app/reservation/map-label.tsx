// A place label on the quote map, as on Transfeero (teardown of 20 Oct 2026): a white card with "Pick-up" or
// "Drop-off" and the place name, then a box with the time (and a plane for airports): black for the pick-up, gold for
// the drop-off. Shared by the free map and the Google map. 28 Oct 2026, at the user's request: the card opens with the
// cut-out of the car the visitor has selected, on a light tile, which changes with a short blur crossfade.

import { AnimatePresence, m } from "motion/react";

export type LabelData = { kind: "pickup" | "dropoff"; title: string; time: string; airport: boolean };

/** A small, optimised copy of the car cut-out (Next's image service), sharp at 2x in the 56px tile. */
const thumb = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=128&q=75`;

export function Pin({ kind }: { kind: "pickup" | "dropoff" }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-4 w-4 rounded-[3px] shadow-[0_0_0_2px_#fff,0_2px_6px_rgba(15,17,21,0.35)] ${kind === "pickup" ? "bg-[#1a1a1a]" : "bg-[#e8ba64]"}`}
    />
  );
}

export function PlaceLabel({ data, avatar }: { data: LabelData; avatar?: string }) {
  const pickup = data.kind === "pickup";
  return (
    <span className="flex items-stretch overflow-hidden rounded-[8px] bg-white text-left shadow-[0_6px_18px_rgba(15,17,21,0.18)] ring-1 ring-black/5">
      {avatar && (
        <span aria-hidden="true" className="relative my-1 ml-1 w-14 shrink-0 overflow-hidden rounded-[6px] bg-[#f2f4f7]">
          <AnimatePresence initial={false}>
            <m.img
              key={avatar}
              src={thumb(avatar)}
              alt=""
              className="absolute inset-0 h-full w-full object-contain px-0.5"
              initial={{ opacity: 0, filter: "blur(6px)", scale: 1.08 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </span>
      )}
      <span className="min-w-0 px-2.5 py-1.5">
        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#888888]">{pickup ? "Pick-up" : "Drop-off"}</span>
        <span className="line-clamp-2 max-w-[170px] text-[12px] font-semibold leading-tight text-[#1a1a1a] sm:max-w-[210px]">{data.title}</span>
      </span>
      <span className={`flex shrink-0 items-center gap-1 px-2 text-[12px] font-semibold tabular-nums ${pickup ? "bg-[#1a1a1a] text-white" : "bg-[#e8ba64] text-[#0d1922]"}`}>
        {data.airport && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        )}
        {data.time}
      </span>
    </span>
  );
}
