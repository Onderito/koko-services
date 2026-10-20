"use client";

// The hero booking bar, modelled on Transfeero: two tabs (Transfer / By the hour), From, To (or hours),
// date, time, passengers, and "Get my quote", which opens /reservation?id=<temporary id>.

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PlaceField from "./place-field";
import type { PlaceDetails } from "@/lib/places/types";

type Mode = "transfer" | "hourly";

const pad = (n: number) => String(n).padStart(2, "0");
const isoDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export default function BookingBar({ language = "en" }: { language?: string }) {
  const router = useRouter();
  const today = useMemo(() => isoDate(new Date()), []);
  const tomorrow = useMemo(() => isoDate(new Date(Date.now() + 86_400_000)), []);
  const [mode, setMode] = useState<Mode>("transfer");
  const [from, setFrom] = useState<PlaceDetails | null>(null);
  const [to, setTo] = useState<PlaceDetails | null>(null);
  const [date, setDate] = useState(tomorrow);
  const [time, setTime] = useState("10:00");
  const [passengers, setPassengers] = useState(2);
  const [hours, setHours] = useState(4);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!from) return setError(mode === "transfer" ? "Choose where we pick you up." : "Choose the pick-up address.");
    if (mode === "transfer" && !to) return setError("Choose your destination.");
    if (mode === "transfer" && to && from.id === to.id) return setError("Pick-up and destination are the same place.");
    if (!date || date < today) return setError("Choose a date from today.");
    setSending(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, from, to: mode === "transfer" ? to : null, date, time, passengers, hours: mode === "hourly" ? hours : null }),
      });
      const data = (await res.json()) as { id?: string; error?: string };
      if (!res.ok || !data.id) throw new Error(data.error || "error");
      router.push(`/reservation?id=${data.id}`);
    } catch {
      setError("We could not prepare your quote. Please try again, or contact us on WhatsApp.");
      setSending(false);
    }
  };

  const tab = (m: Mode, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={mode === m}
      onClick={() => setMode(m)}
      className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors ${mode === m ? "bg-[#0f1115] text-white" : "text-[#0f1115] hover:bg-black/5"}`}
    >
      {label}
    </button>
  );

  return (
    <form onSubmit={submit} aria-label="Get a quote" className="w-full">
      <div role="tablist" aria-label="Type of ride" className="mb-4 inline-flex gap-1 rounded-full bg-white p-1.5 shadow-sm">
        {tab("transfer", "Transfer")}
        {tab("hourly", "By the hour")}
      </div>

      <div className="flex flex-col gap-4 rounded-[22px] bg-white p-4 text-[#0f1115] shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:flex-row lg:items-center lg:gap-0 lg:p-3 lg:pl-6">
        <div className="min-w-0 lg:flex-1 lg:pr-5">
          <PlaceField name="from" label={mode === "transfer" ? "From" : "Pick-up"} placeholder="Address, airport, hotel…" value={from} onChange={setFrom} required language={language} />
        </div>
        {mode === "transfer" ? (
          <div className="min-w-0 border-black/10 lg:flex-1 lg:border-l lg:px-5">
            <PlaceField name="to" label="To" placeholder="Address, airport, hotel…" value={to} onChange={setTo} required language={language} />
          </div>
        ) : (
          <div className="border-black/10 lg:border-l lg:px-5">
            <label htmlFor="booking-hours" className="block text-[13px] font-medium text-[#5b6472]">Duration</label>
            <select id="booking-hours" value={hours} onChange={e => setHours(Number(e.target.value))} className="mt-1 bg-transparent text-[16px] font-semibold text-[#0f1115] focus:outline-none">
              {[4, 5, 6, 7, 8, 9, 10, 12].map(h => <option key={h} value={h}>{h} hours</option>)}
            </select>
          </div>
        )}
        <div className="flex gap-4 border-black/10 lg:border-l lg:px-5">
          <div>
            <label htmlFor="booking-date" className="block text-[13px] font-medium text-[#5b6472]">Date</label>
            <input id="booking-date" type="date" required min={today} value={date} onChange={e => setDate(e.target.value)} className="mt-1 bg-transparent text-[16px] font-semibold text-[#0f1115] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="booking-time" className="block text-[13px] font-medium text-[#5b6472]">Time</label>
            <input id="booking-time" type="time" required step={300} value={time} onChange={e => setTime(e.target.value)} className="mt-1 bg-transparent text-[16px] font-semibold text-[#0f1115] focus:outline-none" />
          </div>
        </div>
        <div className="border-black/10 lg:border-l lg:px-5">
          <span id="booking-pax-label" className="block text-[13px] font-medium text-[#5b6472]">Passengers</span>
          <div className="mt-1 flex items-center gap-3" role="group" aria-labelledby="booking-pax-label">
            <button type="button" aria-label="One passenger less" onClick={() => setPassengers(p => Math.max(1, p - 1))} className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-black/15 hover:bg-black/5">−</button>
            <output aria-live="polite" className="w-5 text-center text-[16px] font-semibold text-[#0f1115]">{passengers}</output>
            <button type="button" aria-label="One passenger more" onClick={() => setPassengers(p => Math.min(16, p + 1))} className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-black/15 hover:bg-black/5">+</button>
          </div>
        </div>
        <button
          type="submit"
          disabled={sending}
          className="mt-1 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#e2b04a] px-7 text-[16px] font-bold text-[#0f1115] transition-colors hover:bg-[#d6a23c] disabled:opacity-60 lg:mt-0 lg:ml-auto"
        >
          {sending ? "Preparing…" : "Get my quote"} <span aria-hidden>→</span>
        </button>
      </div>
      {error && <p role="alert" className="mt-3 text-[14px] font-medium text-[#ffd5cf]">{error}</p>}
    </form>
  );
}
