"use client";

// The booking calendar (react-day-picker 9), rebuilt from the range-select calendar the user sent on 21 Oct 2026, in
// Kokolimo's colours: the first and last days of a return trip are gold circles joined by a pale gold band, a one-way
// date is a gold circle, today has a gold ring, past days are greyed out. Weeks start on Monday (Europe); the month
// changes with a short slide. Loaded only when the date field is first opened (next/dynamic in date-field.tsx).

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, type DateRange, type DayButtonProps, type DayProps } from "react-day-picker";
import { enGB } from "react-day-picker/locale";
import s from "./booking-calendar.module.css";

function DayButton({ day: _day, modifiers, className = "", ...props }: DayButtonProps) {
  const edge = modifiers.range_start || modifiers.range_end || (modifiers.selected && !modifiers.range_middle);
  return (
    <button
      {...props}
      className={`${className} grid h-10 w-10 place-items-center rounded-full text-[14px] font-medium tabular-nums outline-none transition-[background-color,color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-[#e8ba64] ${
        edge
          ? "bg-[#e8ba64] font-semibold text-[#0d1922] shadow-[0_4px_12px_rgba(232,186,100,0.35)]"
          : modifiers.range_middle
            ? "text-[#0d1922]"
            : modifiers.disabled
              ? "cursor-not-allowed text-[#c8cdd5]"
              : `text-[#101828] hover:bg-[#f2f4f7] ${modifiers.today ? "ring-1 ring-inset ring-[#e8ba64]" : ""}`
      }`}
    />
  );
}

// The band of a return trip, drawn by the cell: half a band on the first and last day, a full one between them.
function Day({ day: _day, modifiers, className = "", ...props }: DayProps) {
  const band =
    modifiers.range_start && modifiers.range_end
      ? ""
      : modifiers.range_start
        ? "bg-[linear-gradient(90deg,transparent_50%,#f8edd5_50%)]"
        : modifiers.range_end
          ? "bg-[linear-gradient(90deg,#f8edd5_50%,transparent_50%)]"
          : modifiers.range_middle
            ? "bg-[#f8edd5]"
            : "";
  return <td {...props} className={`${className} ${band}`} />;
}

const classNames = {
  root: "relative select-none",
  months: "relative",
  month: "overflow-hidden",
  month_caption: "flex h-10 items-center justify-center",
  caption_label: "text-[15px] font-semibold text-[#101828]",
  nav: "absolute inset-x-0 top-0 z-10 flex h-10 items-center justify-between",
  button_previous: "grid h-9 w-9 place-items-center rounded-full text-[#101828] transition-colors hover:bg-[#f2f4f7] disabled:pointer-events-none disabled:opacity-30",
  button_next: "grid h-9 w-9 place-items-center rounded-full text-[#101828] transition-colors hover:bg-[#f2f4f7] disabled:pointer-events-none disabled:opacity-30",
  month_grid: "mt-2 w-full border-separate [border-spacing:0_4px]",
  weekdays: "",
  weekday: "h-8 w-10 text-center text-[12px] font-medium uppercase tracking-[0.06em] text-[#98a2b3]",
  week: "",
  day: "p-0 text-center",
  outside: "opacity-40",
  hidden: "invisible",
  weeks_before_enter: s.weeksBeforeEnter,
  weeks_before_exit: s.weeksBeforeExit,
  weeks_after_enter: s.weeksAfterEnter,
  weeks_after_exit: s.weeksAfterExit,
  caption_after_enter: s.captionEnter,
  caption_after_exit: s.captionExit,
  caption_before_enter: s.captionEnter,
  caption_before_exit: s.captionExit,
};

const components = {
  Day,
  DayButton,
  Chevron: ({ orientation }: { orientation?: "up" | "down" | "left" | "right" }) =>
    orientation === "left" ? <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" /> : <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />,
};

type Common = { today: Date; month: Date; onMonthChange: (m: Date) => void };

export default function BookingCalendar(
  props: Common & ({ mode: "single"; selected?: Date; onSelect: (d: Date | undefined) => void } | { mode: "range"; selected?: DateRange; onSelect: (r: DateRange | undefined) => void }),
) {
  const shared = {
    locale: enGB,
    weekStartsOn: 1 as const,
    showOutsideDays: true,
    fixedWeeks: true,
    animate: true,
    autoFocus: true,
    disabled: { before: props.today },
    startMonth: props.today,
    month: props.month,
    onMonthChange: props.onMonthChange,
    classNames,
    components,
  };
  return props.mode === "single" ? (
    <DayPicker {...shared} mode="single" required={false} selected={props.selected} onSelect={props.onSelect} />
  ) : (
    <DayPicker {...shared} mode="range" selected={props.selected} onSelect={props.onSelect} />
  );
}
