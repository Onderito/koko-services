"use client";

// The hero booking bar, modelled on Transfeero: two tabs (Transfer / By the hour), From, To (or duration),
// date, time, passengers, and "Get my quote", which opens /reservation?t=<signed trip>.
// 21 Oct 2026, at the user's request: the date and the time open Cloudflare-style pop-ups (booking calendar, quarter
// hours), and a transfer can be one way or return (two days, two times).

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PlaceField from "./place-field";
import DateField, { isoDate, type Trip } from "./date-field";
import TimeField from "./time-field";
import ArrowButton from "../arrow-button";
import { useSlidingPill } from "../sliding-pill";
import { RollingCount } from "./count-stepper";
import type { PlaceDetails } from "@/lib/places/types";

type Mode = "transfer" | "hourly";

const icon = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
const CarIcon = () => <svg {...icon}><path d="M5 17h14M6 17v2M18 17v2M4 13l1.6-4.4A2 2 0 0 1 7.5 7h9a2 2 0 0 1 1.9 1.6L20 13v4H4z" /><circle cx="8" cy="14" r=".6" /><circle cx="16" cy="14" r=".6" /></svg>;
const ClockIcon = () => <svg {...icon}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>;
const PinIcon = () => <svg {...icon}><path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>;
const CalendarIcon = () => <svg {...icon}><rect x="4" y="5.5" width="16" height="14.5" rx="1.5" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /></svg>;

export default function BookingBar({ language = "en", aside }: { language?: string; aside?: React.ReactNode }) {
  const router = useRouter();
  const today = useMemo(() => isoDate(new Date()), []);
  const tomorrow = useMemo(() => isoDate(new Date(Date.now() + 86_400_000)), []);
  const [mode, setMode] = useState<Mode>("transfer");
  const [from, setFrom] = useState<PlaceDetails | null>(null);
  const [to, setTo] = useState<PlaceDetails | null>(null);
  const [date, setDate] = useState(tomorrow);
  const [time, setTime] = useState("10:00");
  const [trip, setTrip] = useState<Trip>("oneway");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("18:00");
  const [passengers, setPassengers] = useState(2);
  const [hours, setHours] = useState(4);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // The dark pill slides between the two tabs (Motion spring). It sits over the labels in "difference" blend on the white
  // tab bar, so it shows black and turns the text under it white, all the way through the slide.
  const tabs = useSlidingPill<HTMLDivElement>(mode, "z-[2] rounded-control bg-white mix-blend-difference");
  const send = () => {
    if (!sending) formRef.current?.requestSubmit(); // runs the fields' own checks, then submit()
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!from) return setError(mode === "transfer" ? "Choose where we pick you up." : "Choose the pick-up address.");
    if (mode === "transfer" && !to) return setError("Choose your destination.");
    if (mode === "transfer" && to && from.id === to.id) return setError("Pick-up and destination are the same place.");
    if (!date || date < today) return setError("Choose a date from today.");
    const isReturn = mode === "transfer" && trip === "return";
    if (isReturn && !returnDate) return setError("Choose your return day.");
    setSending(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          from,
          to: mode === "transfer" ? to : null,
          date,
          time,
          trip: isReturn ? "return" : "oneway",
          returnDate: isReturn ? returnDate : null,
          returnTime: isReturn ? returnTime : null,
          passengers,
          hours: mode === "hourly" ? hours : null,
        }),
      });
      const data = (await res.json()) as { token?: string; error?: string };
      if (!res.ok || !data.token) throw new Error(data.error || "error");
      router.push(`/reservation?t=${encodeURIComponent(data.token)}`);
    } catch {
      setError("We could not prepare your quote. Please try again, or contact us on WhatsApp.");
      setSending(false);
    }
  };

  const tab = (m: Mode, label: string, glyph: React.ReactNode) => {
    const on = mode === m;
    return (
      <button
        type="button"
        role="tab"
        aria-selected={on}
        data-selected={on ? "true" : "false"}
        onClick={() => setMode(m)}
        className={`relative z-[1] inline-flex items-center gap-2 rounded-control px-4 py-2.5 text-[15px] font-semibold transition-colors ${
          on && !tabs.ready ? "bg-[#0f1115] text-white" : on ? "text-[#0f1115]" : "text-[#0f1115] hover:bg-black/5"
        }`}
      >
        {glyph}
        {label}
      </button>
    );
  };

  return (
    <form ref={formRef} onSubmit={submit} aria-label="Get a quote" className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div ref={tabs.listRef} role="tablist" aria-label="Type of ride" className="relative isolate inline-flex gap-1 rounded-card bg-white p-1.5 shadow-sm">
          {tab("transfer", "Transfer", <CarIcon />)}
          {tab("hourly", "By the hour", <ClockIcon />)}
          {tabs.pill}
        </div>
        {aside && <div className="text-[15px]">{aside}</div>}
      </div>

      <div className="flex flex-col gap-4 rounded-card bg-white p-4 text-[#0f1115] shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:flex-row lg:items-center lg:gap-0 lg:p-3 lg:pl-5">
        <div className="min-w-0 lg:flex-1 lg:pr-5">
          <PlaceField name="from" label={mode === "transfer" ? "From" : "Pick-up"} placeholder="Address, airport, hotel…" icon={<PinIcon />} value={from} onChange={setFrom} required language={language} />
        </div>
        {mode === "transfer" ? (
          <div className="min-w-0 border-black/10 lg:flex-1 lg:border-l lg:px-5">
            <PlaceField name="to" label="To" placeholder="Address, airport, hotel…" icon={<PinIcon />} value={to} onChange={setTo} required language={language} />
          </div>
        ) : (
          <div className="flex items-center gap-3 border-black/10 lg:border-l lg:px-5">
            <span className="shrink-0 text-[#8a92a0]"><ClockIcon /></span>
            <div>
              <label htmlFor="booking-hours" className="block text-[13px] font-medium text-[#5b6472]">Duration</label>
              <select id="booking-hours" value={hours} onChange={e => setHours(Number(e.target.value))} className="mt-1 bg-transparent text-[16px] font-semibold text-[#0f1115] focus:outline-none">
                {[4, 5, 6, 7, 8, 9, 10, 12].map(h => <option key={h} value={h}>{h} hours</option>)}
              </select>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 border-black/10 lg:border-l lg:px-5">
          <span className="shrink-0 text-[#8a92a0]"><CalendarIcon /></span>
          <div className="flex gap-5">
            <DateField
              showTrip={mode === "transfer"}
              trip={trip}
              onTrip={setTrip}
              date={date}
              returnDate={returnDate}
              today={today}
              onChange={v => {
                setDate(v.date);
                setReturnDate(v.returnDate);
              }}
            />
            <TimeField
              isReturn={mode === "transfer" && trip === "return"}
              time={time}
              returnTime={returnTime}
              onChange={v => {
                setTime(v.time);
                setReturnTime(v.returnTime);
              }}
            />
          </div>
        </div>
        <div className="border-black/10 lg:border-l lg:px-5">
          <span id="booking-pax-label" className="block text-[13px] font-medium text-[#5b6472]">Passengers</span>
          <div className="mt-1 flex items-center gap-3" role="group" aria-labelledby="booking-pax-label">
            <button type="button" aria-label="One passenger less" onClick={() => setPassengers(p => Math.max(1, p - 1))} className="grid h-8 w-8 place-items-center rounded-control ring-1 ring-black/15 transition-colors hover:bg-black/5">−</button>
            <output aria-live="polite" className="w-5 text-center text-[16px] font-semibold text-[#0f1115]">
              <RollingCount value={passengers} />
            </output>
            <button type="button" aria-label="One passenger more" onClick={() => setPassengers(p => Math.min(16, p + 1))} className="grid h-8 w-8 place-items-center rounded-control ring-1 ring-black/15 transition-colors hover:bg-black/5">+</button>
          </div>
        </div>
        {/* Hyperiux Arrow Fill button (a link element), acting as the form's button; the hidden native submit keeps
            Enter-to-submit inside the fields. */}
        <div className="mt-1 lg:mt-0 lg:ml-auto">
          <ArrowButton
            text={sending ? "Preparing…" : "Get my quote"}
            href="#book"
            size="lg"
            full="mobile"
            role="button"
            aria-disabled={sending}
            onClick={e => {
              e.preventDefault();
              send();
            }}
            onKeyDown={e => {
              if (e.key === " ") {
                e.preventDefault();
                send();
              }
            }}
          />
          <button type="submit" tabIndex={-1} aria-hidden="true" className="sr-only">
            Get my quote
          </button>
        </div>
      </div>
      {error && <p role="alert" className="mt-3 text-[14px] font-medium text-[#ffd5cf]">{error}</p>}
    </form>
  );
}
