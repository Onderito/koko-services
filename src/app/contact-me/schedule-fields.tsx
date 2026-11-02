"use client";

// The contact form's pick-up date and time as pop-ups, in the booking bar's Cloudflare manner (user, 28 Oct 2026: "the
// calendar in contact-me ... animated like Cloudflare type"): the same calendar and quarter-hour list, opening under the
// field with the short fade and lift, drawn as the form's fields. The values stay "YYYY-MM-DD" and "HH:MM", as the
// browser's date and time inputs sent them to /api/contact.

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import Popover from "../ui/booking/popover";
import { isoDate, parseIso } from "../ui/booking/date-field";
import { TimeColumn } from "../ui/booking/time-field";

const BookingCalendar = dynamic(() => import("../ui/booking/booking-calendar"), {
  ssr: false,
  loading: () => <div className="h-[332px] w-[280px]" aria-hidden="true" />,
});

type FieldProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  /** Called when the pop-up closes (the field counts as visited). */
  onDone: () => void;
  /** The form's field classes (border, height, error state). */
  className: string;
};

const long = (s: string) => parseIso(s)?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }) ?? "";

function usePopup(onDone: () => void) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    onDone();
  }, [onDone]);
  const dismiss = useCallback(() => {
    close();
    trigger.current?.focus();
  }, [close]);
  return { open, setOpen, box, trigger, close, dismiss };
}

export function DatePick({ id, value, onChange, onDone, className }: FieldProps) {
  const p = usePopup(onDone);
  const [month, setMonth] = useState(() => parseIso(value) ?? new Date());
  return (
    <div ref={p.box} className="relative">
      <button ref={p.trigger} type="button" id={id} aria-haspopup="dialog" aria-expanded={p.open} onClick={() => p.setOpen(o => !o)} className={`${className} flex items-center justify-between gap-3 text-left`}>
        <span className={value ? "" : "text-[#667085]/70"}>{value ? long(value) : "Choose a date"}</span>
        <CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-[#667085]" />
      </button>
      <Popover open={p.open} onClose={p.dismiss} anchor={p.box} label="Choose your pick-up date" className="w-[312px] p-4">
        <BookingCalendar
          mode="single"
          today={new Date()}
          month={month}
          onMonthChange={setMonth}
          selected={parseIso(value)}
          onSelect={(d: Date | undefined) => {
            if (!d) return;
            onChange(isoDate(d));
            window.setTimeout(p.close, 180);
          }}
        />
      </Popover>
    </div>
  );
}

export function TimePick({ id, value, onChange, onDone, className }: FieldProps) {
  const p = usePopup(onDone);
  return (
    <div ref={p.box} className="relative">
      <button ref={p.trigger} type="button" id={id} aria-haspopup="dialog" aria-expanded={p.open} onClick={() => p.setOpen(o => !o)} className={`${className} flex items-center justify-between gap-3 text-left tabular-nums`}>
        <span className={value ? "" : "text-[#667085]/70"}>{value || "Choose a time"}</span>
        <Clock3 size={18} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-[#667085]" />
      </button>
      <Popover open={p.open} onClose={p.dismiss} anchor={p.box} label="Choose your pick-up time" className="w-[150px] p-3">
        <TimeColumn
          value={value}
          autoFocus
          onPick={t => {
            onChange(t);
            window.setTimeout(p.close, 150);
          }}
        />
      </Popover>
    </div>
  );
}
