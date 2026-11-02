"use client";

// The booking bar's date field (user, 21 Oct 2026: "a better calendar ... Cloudflare style"; "propose a range date as
// well ... adapt it to One way or not"). A field showing the chosen day(s) opens the booking calendar in a pop-up. For a
// transfer, "One way / Return" sits on top (the pill slides between them, Motion spring): one way picks one day, return
// picks the outbound and return days as a range. By the hour picks one day. The calendar's code loads on first open.

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import Popover from "./popover";
import { useSlidingPill } from "../sliding-pill";

const BookingCalendar = dynamic(() => import("./booking-calendar"), {
  ssr: false,
  loading: () => <div className="h-[332px] w-[280px]" aria-hidden="true" />,
});

export type Trip = "oneway" | "return";

const pad = (n: number) => String(n).padStart(2, "0");
export const isoDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const parseIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return y && m && d ? new Date(y, m - 1, d) : undefined;
};
const short = (s: string, weekday = false) =>
  parseIso(s)?.toLocaleDateString("en-GB", weekday ? { weekday: "short", day: "numeric", month: "short" } : { day: "numeric", month: "short" }) ?? "";

export default function DateField({
  showTrip,
  trip,
  onTrip,
  date,
  returnDate,
  today,
  onChange,
}: {
  /** Transfers offer one way / return; by the hour is one day. */
  showTrip: boolean;
  trip: Trip;
  onTrip: (t: Trip) => void;
  date: string;
  returnDate: string;
  today: string;
  onChange: (v: { date: string; returnDate: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => parseIso(date) ?? new Date());
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const isReturn = showTrip && trip === "return";
  const tripPill = useSlidingPill<HTMLDivElement>(trip, "z-0 rounded-[8px] bg-[#0d1922] shadow-[0_4px_12px_rgba(13,25,34,0.18)]");
  const close = useCallback(() => setOpen(false), []);

  const value = isReturn ? (returnDate ? `${short(date)} → ${short(returnDate)}` : `${short(date)} → return?`) : short(date, true);
  const todayDate = parseIso(today) ?? new Date();

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
        <span className="block text-[13px] font-medium text-[#5b6472]">{isReturn ? "Dates" : "Date"}</span>
        <span className="mt-1 block whitespace-nowrap text-[16px] font-semibold text-[#0f1115]">{value}</span>
      </button>

      <Popover
        open={open}
        onClose={() => {
          close();
          trigger.current?.focus();
        }}
        anchor={box}
        label={isReturn ? "Choose your outbound and return dates" : "Choose your date"}
        className="w-[312px] p-4"
      >
        {showTrip && (
          <div ref={tripPill.listRef} role="radiogroup" aria-label="Trip" className="relative isolate mb-3 grid grid-cols-2 gap-1 rounded-[10px] bg-[#f2f4f7] p-1">
            {tripPill.pill}
            {(["oneway", "return"] as const).map(t => {
              const on = trip === t;
              return (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  data-selected={on ? "true" : "false"}
                  onClick={() => {
                    onTrip(t);
                    if (t === "oneway") onChange({ date, returnDate: "" });
                  }}
                  className={`relative z-[1] h-9 rounded-[8px] text-[14px] font-semibold transition-colors duration-300 ${
                    on ? `text-white ${tripPill.ready ? "" : "bg-[#0d1922]"}` : "text-[#475467] hover:text-[#101828]"
                  }`}
                >
                  {t === "oneway" ? "One way" : "Return"}
                </button>
              );
            })}
          </div>
        )}

        {isReturn ? (
          <BookingCalendar
            mode="range"
            today={todayDate}
            month={month}
            onMonthChange={setMonth}
            selected={{ from: parseIso(date), to: returnDate ? parseIso(returnDate) : undefined }}
            onSelect={(r: DateRange | undefined) => {
              const from = r?.from ? isoDate(r.from) : date;
              const to = r?.to ? isoDate(r.to) : "";
              onChange({ date: from, returnDate: to && to >= from ? to : "" });
              if (r?.from && r?.to) window.setTimeout(close, 220); // the same day twice is a same-day return
            }}
          />
        ) : (
          <BookingCalendar
            mode="single"
            today={todayDate}
            month={month}
            onMonthChange={setMonth}
            selected={parseIso(date)}
            onSelect={(d: Date | undefined) => {
              if (!d) return;
              onChange({ date: isoDate(d), returnDate: "" });
              window.setTimeout(close, 180);
            }}
          />
        )}

        <p className="mt-2 border-t border-[#f2f4f7] pt-3 text-[13px] text-[#667085]" aria-live="polite">
          {isReturn
            ? returnDate
              ? `Outbound ${short(date, true)} · Return ${short(returnDate, true)}`
              : "Choose your outbound day, then your return day."
            : `Pick-up ${short(date, true)}`}
        </p>
      </Popover>
    </div>
  );
}
