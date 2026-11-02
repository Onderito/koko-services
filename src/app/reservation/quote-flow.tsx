"use client";

// The quote request after "Get my quote": 01 Vehicle · 02 Details · 03 Confirm, laid out as Transfeero's reservation
// page (teardown of 20 Oct 2026): the route map with its reveal, the cars as cards you select (border, background and
// shadow change over 0.15s), and "Your booking" beside them. Quotes, not payments: each car shows "Starting from"
// (the site's price guide) or "fixed fare on request", and the request goes to the owner's inbox
// (/api/reservations/request). If it cannot be sent from here, the same request opens in WhatsApp in one tap.
// 28 Oct 2026, at the user's request: from 1024px the layout follows the step. Vehicle and Confirm keep the map docked
// on the left, still; Details opens it as a wide banner over the form, and changing between the two morphs the boxes
// with the sliding buttons' spring. On opening, the map slides in from the left and the rest from the right. Native
// scrolling on this page (no smoothing), and scrolling never changes the layout.

import { useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { BadgeCheck, Check, Clock3, Handshake, Luggage, Plane, Repeat, ShieldCheck, UsersRound } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ArrowButton from "../ui/arrow-button";
import DateField from "../ui/booking/date-field";
import TimeField from "../ui/booking/time-field";
import RouteMap, { type MapProps } from "./route-map";
import type { CarOffer } from "@/lib/reservations/pricing";
import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";

type PlaceKind = "airport" | "station" | "port" | "hotel" | "city" | "address";
type PublicPlace = { id: string; name: string; address: string; kind: PlaceKind; lat: number; lng: number };
export type QuoteRating = { source: "google" | "tripadvisor"; rating: number; count: number | null; url: string };

export type QuoteTrip = {
  mode: "transfer" | "hourly";
  from: PublicPlace;
  to: PublicPlace | null;
  date: string;
  time: string;
  trip: "oneway" | "return";
  returnDate: string | null;
  returnTime: string | null;
  passengers: number;
  hours: number | null;
};

type QuoteRoute = { points: [number, number][]; km: number; minutes: number; estimated: boolean } | null;
type Details = { name: string; phone: string; email: string; flight: string; luggage: string; notes: string };

const STEPS = ["Vehicle", "Details", "Confirm"];
const SPRING = { type: "spring", bounce: 0.2, duration: 0.6 } as const;

const fmtDate = (d: string) => {
  const [y, m, day] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, day)));
};

const addMinutes = (hhmm: string, minutes: number) => {
  const [h, m] = hhmm.split(":").map(Number);
  const total = (h * 60 + m + Math.ceil(minutes / 5) * 5) % (24 * 60);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
};

const duration = (minutes: number) => (minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")}`);

function Steps({ step }: { step: number }) {
  return (
    <ol className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]" aria-label="Steps">
      {STEPS.map((s, i) => {
        const on = i + 1 === step, done = i + 1 < step;
        return (
          <li key={s} aria-current={on ? "step" : undefined} className={`flex items-center gap-2 border-b-2 pb-1.5 transition-colors ${on ? "border-[#d4b471] font-semibold text-[#101828]" : done ? "border-transparent text-[#101828]" : "border-transparent text-[#98a2b3]"}`}>
            <span className={`grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold ${done ? "bg-[#e8ba64] text-[#0d1922]" : on ? "bg-[#0d1922] text-white" : "bg-[#eaecf0] text-[#667085]"}`}>
              {done ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : i + 1}
            </span>
            {s}
          </li>
        );
      })}
    </ol>
  );
}

/** Google and Tripadvisor marks for the review line under the cars. */
function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function TripadvisorMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#34e0a1" />
      <circle cx="8" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="16" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="8" cy="12.5" r="1.7" fill="#000" />
      <circle cx="16" cy="12.5" r="1.7" fill="#000" />
      <path d="M5.2 8.2C7 6.9 9.4 6.2 12 6.2s5 .7 6.8 2" fill="none" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function YellowStars() {
  return (
    <span className="inline-flex gap-0.5 text-[#fbbc04]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** The review line under the cars (Transfeero shows Trustpilot there; Kokolimo's reviews are on Google and Tripadvisor). */
function ReviewLine({ ratings }: { ratings: QuoteRating[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {ratings.map(r => (
        <a key={r.source} href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-[#344054] transition-colors hover:text-[#101828]">
          {r.source === "google" ? <GoogleMark /> : <TripadvisorMark />}
          <YellowStars />
          <span>
            <strong className="font-semibold text-[#101828]">{r.rating.toFixed(1)}</strong>/5
            {r.count ? ` · ${r.count.toLocaleString("en-GB")} reviews` : ""} on {r.source === "google" ? "Google" : "Tripadvisor"}
          </span>
        </a>
      ))}
    </div>
  );
}

/** Cards and contactless, as recorded on the Google listing (credit and debit cards, Mastercard, NFC mobile payments). */
function PaymentLogos() {
  const box = "grid h-7 w-11 place-items-center rounded-[5px] bg-[#f2f4f7] ring-1 ring-[#eaecf0]";
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Payment: Visa, Mastercard, Apple Pay, Google Pay">
      <span className={box} aria-hidden="true">
        <svg width="30" height="10" viewBox="0 0 30 10"><text x="15" y="9" textAnchor="middle" fontSize="10" fontWeight="800" fontStyle="italic" fill="#1a1f71" fontFamily="Arial, sans-serif">VISA</text></svg>
      </span>
      <span className={box} aria-hidden="true">
        <svg width="26" height="16" viewBox="0 0 26 16"><circle cx="9.5" cy="8" r="6.5" fill="#eb001b" /><circle cx="16.5" cy="8" r="6.5" fill="#f79e1b" /><path d="M13 2.6a6.5 6.5 0 0 1 0 10.8 6.5 6.5 0 0 1 0-10.8z" fill="#ff5f00" /></svg>
      </span>
      <span className={box} aria-hidden="true">
        <svg width="34" height="14" viewBox="0 0 34 14">
          <path d="M7.6 3.2c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.3-.8 2.1.8.1 1.6-.4 2.2-1zM8.3 4.3c-1.2-.1-2.2.7-2.8.7-.6 0-1.5-.6-2.4-.6-1.2 0-2.4.7-3 1.9-1.3 2.2-.3 5.5.9 7.3.6.9 1.3 1.8 2.3 1.8.9 0 1.2-.6 2.3-.6s1.4.6 2.3.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2.1 0 0-1.9-.8-1.9-3 0-1.9 1.5-2.7 1.6-2.8-.9-1.3-2.2-1.4-2.5-1.4z" fill="#000" transform="scale(.82) translate(1 -1)" />
          <text x="23" y="11" textAnchor="middle" fontSize="10" fontWeight="600" fill="#000" fontFamily="Arial, sans-serif">Pay</text>
        </svg>
      </span>
      <span className={box} aria-hidden="true">
        <svg width="34" height="14" viewBox="0 0 34 14">
          <text x="1" y="11" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif"><tspan fill="#4285f4">G</tspan></text>
          <text x="22" y="11" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3c4043" fontFamily="Arial, sans-serif">Pay</text>
        </svg>
      </span>
    </div>
  );
}

function CarCard({ offer, selected, tooSmall, onSelect }: { offer: CarOffer; selected: boolean; tooSmall: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-disabled={tooSmall}
      onClick={() => !tooSmall && onSelect()}
      className={`group flex w-full items-center gap-3 rounded-[14px] bg-white p-3 text-left outline-none ring-1 transition-[box-shadow,background-color] duration-150 focus-visible:ring-2 focus-visible:ring-[#e8ba64] sm:gap-4 sm:p-4 ${
        tooSmall
          ? "cursor-not-allowed opacity-50 ring-[#eaecf0]"
          : selected
            ? "bg-[#fffaf0] shadow-[0_10px_30px_rgba(232,186,100,0.2)] ring-2 ring-[#e8ba64]"
            : "ring-[#eaecf0] hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)] hover:ring-[#d0d5dd]"
      }`}
    >
      {/* The car as an "icon" cut-out on white, as on Transfeero (user, 28 Oct 2026). */}
      <span className="relative h-[62px] w-[96px] shrink-0 sm:h-[76px] sm:w-[124px]">
        <Image src={offer.icon ?? offer.image} alt="" fill sizes="124px" className={offer.icon ? "object-contain" : "rounded-[10px] object-cover"} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-semibold leading-snug text-[#101828] sm:text-[18px]">{offer.name.replace(/-/g, "‑")}</span>
        <span className="mt-1 inline-flex rounded-full bg-[#f2f4f7] px-2.5 py-0.5 text-[11px] font-semibold text-[#344054]">{offer.cls}</span>
        <span className="mt-1.5 flex items-center gap-3 text-[13px] text-[#667085]">
          <span className="inline-flex items-center gap-1" title="Passengers">
            <UsersRound size={14} strokeWidth={1.8} aria-hidden="true" />
            <span className="sr-only">Passengers </span>
            {offer.passengers}
          </span>
          {offer.bags !== null && (
            <span className="inline-flex items-center gap-1" title="Suitcases">
              <Luggage size={14} strokeWidth={1.8} aria-hidden="true" />
              <span className="sr-only">Suitcases </span>
              {offer.bags}
            </span>
          )}
          {tooSmall && <span className="text-[12px]">too small for your group</span>}
        </span>
      </span>
      <span className="shrink-0 text-right">
        {offer.from !== null ? (
          <>
            <span className="block text-[11px] text-[#98a2b3]">Starting from</span>
            <span className="block text-[20px] font-bold leading-tight text-[#101828] sm:text-[24px]">€{offer.from}</span>
            <span className="block text-[11px] text-[#98a2b3]">{offer.basis}</span>
          </>
        ) : (
          <>
            <span className="block text-[13px] font-semibold text-[#101828]">Fixed fare</span>
            <span className="block text-[12px] text-[#98a2b3]">on request</span>
          </>
        )}
      </span>
      <span aria-hidden="true" className={`hidden h-5 w-5 shrink-0 place-items-center rounded-full ring-1 transition-colors duration-150 sm:grid ${selected ? "bg-[#e8ba64] ring-[#e8ba64]" : "ring-[#d0d5dd]"}`}>
        {selected && <Check size={12} strokeWidth={3} className="text-[#0d1922]" />}
      </span>
    </button>
  );
}

/** "Add return" (one-way transfers): the return day and time, then the same trip comes back as a return quote. */
function AddReturn({ trip }: { trip: QuoteTrip }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [rDate, setRDate] = useState(trip.date);
  const [rTime, setRTime] = useState("18:00");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const apply = async () => {
    if (rDate === trip.date && rTime <= trip.time) return setErr("Choose a return after your pick-up.");
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: trip.mode, from: trip.from, to: trip.to, date: trip.date, time: trip.time, trip: "return", returnDate: rDate, returnTime: rTime, passengers: trip.passengers, hours: null }),
      });
      const data = (await res.json()) as { token?: string };
      if (!res.ok || !data.token) throw new Error("return");
      router.replace(`/reservation?t=${encodeURIComponent(data.token)}`);
    } catch {
      setErr("The return could not be added. Please try again.");
      setBusy(false);
    }
  };
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)} className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[#f2f4f7] text-[14px] font-semibold text-[#101828] transition-colors hover:bg-[#eaecf0]">
        <Repeat size={16} strokeWidth={1.8} className="text-[#9a7a3e]" aria-hidden="true" />
        Add return
      </button>
    );
  return (
    <div className="mt-4 rounded-[12px] bg-[#f5f6f8] p-4">
      <p className="text-[13px] font-semibold text-[#101828]">Your return</p>
      <div className="mt-3 flex gap-5">
        <DateField showTrip={false} trip="oneway" onTrip={() => {}} date={rDate} returnDate="" today={trip.date} onChange={v => setRDate(v.date)} />
        <TimeField isReturn={false} time={rTime} returnTime="" onChange={v => setRTime(v.time)} />
      </div>
      {err && <p className="mt-2 text-[12px] font-medium text-[#b42318]">{err}</p>}
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={apply} disabled={busy} className="h-10 flex-1 rounded-full bg-[#0d1922] text-[14px] font-semibold text-white transition-colors hover:bg-[#1a2a36] disabled:opacity-60">
          {busy ? "Adding…" : "Add the return"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="h-10 rounded-full px-4 text-[14px] font-semibold text-[#667085] hover:text-[#101828]">
          Cancel
        </button>
      </div>
    </div>
  );
}

function BookingCard({ trip, route, offer }: { trip: QuoteTrip; route: QuoteRoute; offer: CarOffer | null }) {
  const drop = route ? addMinutes(trip.time, route.minutes) : null;
  const airport = trip.from.kind === "airport" || trip.to?.kind === "airport";
  const promises = [
    { icon: Check, text: "Door-to-door service" },
    { icon: Handshake, text: "Meet & greet" },
    airport ? { icon: Plane, text: "Flight tracking" } : { icon: ShieldCheck, text: "Fixed fare, no meter" },
    { icon: BadgeCheck, text: "Licensed chauffeurs" },
    ...(airport ? [{ icon: Clock3, text: "One hour of waiting included" }] : []),
  ];
  return (
    <div className="rounded-[16px] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] ring-1 ring-[#eaecf0] md:p-6">
      <h2 className="text-[20px] font-bold text-[#101828]">Your booking</h2>
      <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-[#667085]">
        <span>{fmtDate(trip.date)}</span>
        <span className="inline-flex items-center gap-1.5">
          <UsersRound size={14} strokeWidth={1.8} aria-hidden="true" />
          {trip.passengers} passenger{trip.passengers > 1 ? "s" : ""}
        </span>
        {trip.mode === "hourly" && trip.hours ? <span>{trip.hours} hours</span> : null}
      </p>
      <ol className="relative mt-5 space-y-4 pl-6">
        {trip.to && <span aria-hidden="true" className="absolute bottom-6 left-[6px] top-2 w-px bg-[#d0d5dd]" />}
        <li className="relative">
          <span aria-hidden="true" className="absolute -left-6 top-1.5 h-3 w-3 rounded-[3px] bg-[#1a1a1a]" />
          <p className="font-semibold leading-snug text-[#101828]">{trip.from.name}</p>
          <p className="mt-0.5 flex justify-between gap-3 text-[13px] text-[#667085]">
            <span className="min-w-0 truncate">{trip.from.address}</span>
            <span className="shrink-0 tabular-nums">{trip.time}</span>
          </p>
        </li>
        {route && (
          <li className="text-[13px] text-[#667085]">
            ~ {duration(route.minutes)} · {route.km.toLocaleString("en-GB")} km{route.estimated ? " (estimate)" : ""}
          </li>
        )}
        {trip.to && (
          <li className="relative">
            <span aria-hidden="true" className="absolute -left-6 top-1.5 h-3 w-3 rounded-[3px] bg-[#e8ba64]" />
            <p className="font-semibold leading-snug text-[#101828]">{trip.to.name}</p>
            <p className="mt-0.5 flex justify-between gap-3 text-[13px] text-[#667085]">
              <span className="min-w-0 truncate">{trip.to.address}</span>
              {drop && <span className="shrink-0 tabular-nums">~{drop}</span>}
            </p>
          </li>
        )}
      </ol>
      {trip.trip === "return" && trip.returnDate ? (
        <p className="mt-4 flex items-center gap-2 rounded-[10px] bg-[#f5f6f8] px-3 py-2.5 text-[13px] text-[#344054]">
          <Repeat size={15} strokeWidth={1.8} className="text-[#9a7a3e]" aria-hidden="true" />
          Return {fmtDate(trip.returnDate)} · {trip.returnTime}
        </p>
      ) : (
        trip.mode === "transfer" && trip.to && <AddReturn trip={trip} />
      )}

      {offer && (
        <div className="mt-5 border-t border-[#eaecf0] pt-4">
          <div className="flex items-end justify-between gap-3">
            <span>
              <span className="block text-[13px] text-[#667085]">{offer.name}</span>
              <span className="block text-[15px] font-semibold text-[#101828]">{offer.from !== null ? "Starting from" : "Fixed fare"}</span>
            </span>
            <span className="text-right text-[26px] font-bold leading-none text-[#101828]">{offer.from !== null ? `€${offer.from}` : <span className="text-[15px]">on request</span>}</span>
          </div>
          <p className="mt-2 text-[12px] text-[#98a2b3]">Indicative price from our guide. Your chauffeur confirms the fixed fare before the ride.</p>
        </div>
      )}

      <p className="mt-4 text-[14px] leading-relaxed text-[#344054]">
        <strong className="font-bold text-[#101828]">Pay later.</strong> Nothing to pay now: you pay the confirmed fare later, by card or contactless.
      </p>

      <p className="mt-4 flex items-center gap-2.5 rounded-[10px] bg-[#ecf7f0] px-4 py-3 text-[14px] font-semibold text-[#1f7a4d]">
        <ShieldCheck size={18} strokeWidth={1.9} aria-hidden="true" />
        Free cancellation up to 5 days before
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5">
        {promises.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2 text-[13px] text-[#344054]">
            <Icon size={15} strokeWidth={1.8} className="shrink-0 text-[#9a7a3e]" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-[#eaecf0] pt-4">
        <PaymentLogos />
      </div>
    </div>
  );
}

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-[#344054]">{label}</span>
      <span className="mt-1.5 block">{children}</span>
      {hint && <span className="mt-1 block text-[12px] text-[#98a2b3]">{hint}</span>}
    </label>
  );
}

const input = "h-12 w-full rounded-[10px] bg-white px-3.5 text-[15px] text-[#101828] outline-none ring-1 ring-[#d0d5dd] transition-shadow placeholder:text-[#98a2b3] focus:ring-2 focus:ring-[#e8ba64]";

export default function QuoteFlow({ token, trip, route, offers, ratings }: { token: string; trip: QuoteTrip; route: QuoteRoute; offers: CarOffer[]; ratings: QuoteRating[] }) {
  const fits = (o: CarOffer) => o.passengers >= trip.passengers;
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  // The key of the sliding step content: it changes only when a step slides in with Motion (phones, and Confirm to
  // Sent). A step that comes with the layout change keeps the same box, and the view transition animates it instead.
  const [slide, setSlide] = useState(0);
  const morphRun = useRef(0);
  const reduced = useReducedMotion();
  const enter = (dx: number, delay = 0) => (reduced ? {} : { initial: { opacity: 0, x: dx }, animate: { opacity: 1, x: 0 }, transition: { ...SPRING, delay } });
  const [carId, setCarId] = useState(() => offers.find(fits)?.id ?? offers[0]?.id ?? "");
  const [d, setD] = useState<Details>({ name: "", phone: "", email: "", flight: "", luggage: "", notes: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const offer = offers.find(o => o.id === carId) ?? null;
  const airport = trip.from.kind === "airport" || trip.to?.kind === "airport";

  // From 1024px the map is docked on the left for Vehicle, Confirm and Sent, and a wide banner for Details. Going into
  // or out of Details, the browser's view transition morphs the map, the step and the booking card between the two
  // layouts (globals.css: Motion's spring, the step sliding out and in); other step changes, phones, reduced motion and
  // browsers without view transitions get the Motion slide, with a smooth scroll back to the top.
  const docked = step !== 2;
  const go = (next: number) => {
    const forward = next > step;
    const morph = (step === 2) !== (next === 2) && !reduced && "startViewTransition" in document && window.matchMedia("(min-width: 1024px)").matches;
    if (!morph) {
      setDir(forward ? 1 : -1);
      setSlide(k => k + 1);
      setStep(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const root = document.documentElement;
    const run = ++morphRun.current;
    root.dataset.quoteDir = forward ? "forward" : "back";
    document
      .startViewTransition(() => {
        flushSync(() => setStep(next));
        window.scrollTo({ top: 0, behavior: "instant" });
      })
      .finished.finally(() => {
        if (morphRun.current === run) delete root.dataset.quoteDir;
      });
  };

  const map: MapProps = useMemo(() => {
    const labels: MapProps["labels"] = [{ at: [trip.from.lat, trip.from.lng], data: { kind: "pickup", title: trip.from.name, time: trip.time, airport: trip.from.kind === "airport" } }];
    if (trip.to) labels.push({ at: [trip.to.lat, trip.to.lng], data: { kind: "dropoff", title: trip.to.name, time: route ? addMinutes(trip.time, route.minutes) : "", airport: trip.to.kind === "airport" } });
    return { points: route?.points ?? [], labels };
  }, [trip, route]);

  const whatsappText = useMemo(() => {
    const lines = [
      "Hello Kokolimo, I would like a quote:",
      `${trip.from.name}${trip.to ? ` → ${trip.to.name}` : ` (by the hour, ${trip.hours} hours)`}`,
      `${fmtDate(trip.date)} at ${trip.time}, ${trip.passengers} passenger${trip.passengers > 1 ? "s" : ""}`,
      trip.trip === "return" && trip.returnDate ? `Return ${fmtDate(trip.returnDate)} at ${trip.returnTime}` : "",
      offer ? `Vehicle: ${offer.name}` : "",
      d.name ? `Name: ${d.name}` : "",
      d.phone ? `Phone: ${d.phone}` : "",
      d.flight ? `Flight: ${d.flight}` : "",
      d.notes ? `Notes: ${d.notes}` : "",
    ].filter(Boolean);
    return `${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [trip, offer, d]);

  const toDetails = () => {
    if (!offer || !fits(offer)) return setError("Choose a vehicle for your group.");
    setError("");
    go(2);
  };

  const toConfirm = () => {
    if (d.name.trim().length < 2) return setError("Please enter your name.");
    if (!/^[+\d][\d\s().-]{5,24}$/.test(d.phone.trim())) return setError("Please enter a phone number we can call or message on WhatsApp.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) return setError("Please enter a valid email address.");
    setError("");
    go(3);
  };

  const send = async () => {
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/reservations/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, vehicle: carId, ...d, luggage: d.luggage ? Number(d.luggage) : null }),
      });
      if (!res.ok) throw new Error(String(res.status));
      go(4);
    } catch {
      setFailed(true);
      setError("We could not send your request from here. Send it to us on WhatsApp in one tap, it is already written.");
    } finally {
      setSending(false);
    }
  };

  const button = (text: string, onClick: () => void, tone: "dark" | "gold" = "dark") => (
    <ArrowButton
      text={text}
      href="#continue"
      tone={tone}
      size="lg"
      full
      role="button"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    />
  );

  return (
    <LazyMotion features={domAnimation} strict>
    <section data-no-reveal="" className="bg-[#f5f6f8] pb-20 pt-[calc(var(--nav-clearance)+0.5rem)]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Steps step={Math.min(step, 3)} />
          {step > 1 && step < 4 && (
            <button type="button" onClick={() => { setError(""); go(step - 1); }} className="text-[14px] font-semibold text-[#667085] transition-colors hover:text-[#101828]">
              ← Back
            </button>
          )}
        </div>

        {/* Phones: map, step, booking. From 1024px, docked (Vehicle, Confirm, Sent): the map on the left, where it stays in
            view, the step and the booking on the right, in three columns from 1280px (Transfeero's layout); Details: the
            map as a wide banner, the form beside the booking. */}
        <div
          className={`mt-6 grid gap-6 [grid-template-areas:'map'_'main'_'aside'] ${
            docked
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:[grid-template-areas:'map_main'_'map_aside'] xl:grid-cols-[360px_minmax(0,1fr)_320px] xl:[grid-template-areas:'map_main_aside'] 2xl:grid-cols-[420px_minmax(0,1fr)_340px]"
              : "lg:grid-cols-[minmax(0,1fr)_340px] lg:[grid-template-areas:'map_map'_'main_aside']"
          }`}
        >
          <m.div
            {...enter(-40)}
            style={{ viewTransitionName: "quote-map" }}
            className={`h-[300px] [grid-area:map] sm:h-[380px] ${docked ? "lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:h-[calc(100vh-var(--header-h)-48px)] lg:max-h-[680px] lg:min-h-[480px] lg:self-start" : "lg:h-[420px]"}`}
          >
            <RouteMap points={map.points} labels={map.labels} avatar={offer?.icon ?? offer?.image} />
          </m.div>

          {/* The clip edge sits 12px outside the column, so a selected card's ring and shadow are never cut. */}
          <m.div {...enter(40, 0.08)} style={{ viewTransitionName: "quote-main" }} className="-mx-3 min-w-0 overflow-x-clip px-3 [grid-area:main]">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
            <m.div
              key={slide}
              initial={reduced ? false : { opacity: 0, x: 48 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -48 * dir }}
              transition={SPRING}
            >
            {step === 1 && (
              <div>
                <h1 className="text-[24px] font-bold tracking-[-0.01em] text-[#101828] md:text-[28px]">Choose your vehicle</h1>
                <p className="mt-1 text-[15px] text-[#667085]">Starting prices from our guide; your chauffeur confirms the fixed fare.</p>
                <div role="radiogroup" aria-label="Vehicle" className="mt-5 space-y-3">
                  {offers.map((o, i) => (
                    <m.div key={o.id} {...enter(28, 0.18 + i * 0.06)}>
                      <CarCard offer={o} selected={o.id === carId} tooSmall={!fits(o)} onSelect={() => setCarId(o.id)} />
                    </m.div>
                  ))}
                </div>
                <ReviewLine ratings={ratings} />
                {error && <p role="alert" className="mt-4 text-[14px] font-medium text-[#b42318]">{error}</p>}
                <div className="mt-5">{button("Continue", toDetails)}</div>
                <p className="mt-3 text-center text-[13px] text-[#667085]">No payment now · Fixed fare confirmed before the ride</p>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="text-[24px] font-bold tracking-[-0.01em] text-[#101828] md:text-[28px]">Your details</h1>
                <p className="mt-1 text-[15px] text-[#667085]">So your chauffeur can confirm the fare and the meeting point.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <input className={input} value={d.name} onChange={e => setD({ ...d, name: e.target.value })} autoComplete="name" required />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input className={input} value={d.phone} onChange={e => setD({ ...d, phone: e.target.value })} autoComplete="tel" inputMode="tel" placeholder="+33 6 12 34 56 78" required />
                  </Field>
                  <Field label="Email">
                    <input className={input} type="email" value={d.email} onChange={e => setD({ ...d, email: e.target.value })} autoComplete="email" required />
                  </Field>
                  {airport ? (
                    <Field label="Flight number" hint="Optional: we track it and adjust the pick-up time.">
                      <input className={input} value={d.flight} onChange={e => setD({ ...d, flight: e.target.value.toUpperCase() })} placeholder="AF 7700" maxLength={12} />
                    </Field>
                  ) : (
                    <Field label="Suitcases">
                      <input className={input} type="number" min={0} max={20} value={d.luggage} onChange={e => setD({ ...d, luggage: e.target.value })} inputMode="numeric" />
                    </Field>
                  )}
                  {airport && (
                    <Field label="Suitcases">
                      <input className={input} type="number" min={0} max={20} value={d.luggage} onChange={e => setD({ ...d, luggage: e.target.value })} inputMode="numeric" />
                    </Field>
                  )}
                  <div className="sm:col-span-2">
                    <Field label="Notes" hint="Optional: child seats, extra stops, the name to show on the sign…">
                      <textarea className={`${input} h-28 resize-none py-3`} value={d.notes} onChange={e => setD({ ...d, notes: e.target.value })} maxLength={800} />
                    </Field>
                  </div>
                </div>
                {error && <p role="alert" className="mt-4 text-[14px] font-medium text-[#b42318]">{error}</p>}
                <div className="mt-6">{button("Continue", toConfirm)}</div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h1 className="text-[24px] font-bold tracking-[-0.01em] text-[#101828] md:text-[28px]">Check and send</h1>
                <p className="mt-1 text-[15px] text-[#667085]">Your chauffeur replies with your fixed fare. Nothing is charged online.</p>
                <dl className="mt-6 divide-y divide-[#eaecf0] rounded-[14px] bg-white px-5 ring-1 ring-[#eaecf0]">
                  {[
                    ["Trip", trip.to ? `${trip.from.name} → ${trip.to.name}` : `${trip.from.name}, by the hour (${trip.hours} hours)`],
                    ["When", `${fmtDate(trip.date)} at ${trip.time}${trip.trip === "return" && trip.returnDate ? ` · return ${fmtDate(trip.returnDate)} at ${trip.returnTime}` : ""}`],
                    ["Vehicle", offer ? `${offer.name}${offer.from !== null ? ` · starting from €${offer.from}` : " · fixed fare on request"}` : ""],
                    ["Passengers", `${trip.passengers}${d.luggage ? ` · ${d.luggage} suitcase${d.luggage === "1" ? "" : "s"}` : ""}`],
                    ["Contact", `${d.name} · ${d.phone} · ${d.email}`],
                    ...(d.flight ? [["Flight", d.flight]] : []),
                    ...(d.notes ? [["Notes", d.notes]] : []),
                  ].map(([k, v]) => (
                    <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[120px_1fr] sm:gap-4">
                      <dt className="text-[13px] font-semibold text-[#98a2b3]">{k}</dt>
                      <dd className="text-[15px] text-[#101828]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[13px] text-[#667085]">
                  We use your details only to prepare and confirm this ride.{" "}
                  <a href="/legal-privacy" className="underline underline-offset-2 hover:text-[#101828]">
                    Privacy
                  </a>
                </p>
                {error && (
                  <p role="alert" className="mt-4 text-[14px] font-medium text-[#b42318]">
                    {error}
                  </p>
                )}
                <div className="mt-6 space-y-3">
                  {failed ? (
                    <ArrowButton text="Send it on WhatsApp" href={whatsappText} tone="gold" size="lg" full target="_blank" rel="noopener noreferrer" />
                  ) : (
                    button(sending ? "Sending…" : "Send my request", send, "gold")
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="rounded-[16px] bg-white p-6 text-center ring-1 ring-[#eaecf0] md:p-10">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e8ba64] text-[#0d1922]">
                  <Check size={26} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <h1 className="mt-5 text-[26px] font-bold text-[#101828]">Request received</h1>
                <p className="mx-auto mt-2 max-w-[440px] text-[15px] leading-relaxed text-[#667085]">
                  Thank you{d.name ? `, ${d.name.split(" ")[0]}` : ""}. Your chauffeur will contact you to confirm your fixed fare and the meeting point.
                </p>
                <div className="mx-auto mt-7 flex max-w-[420px] flex-col gap-3 sm:flex-row sm:justify-center">
                  <ArrowButton text="WhatsApp us" href={whatsappUrl} tone="dark" target="_blank" rel="noopener noreferrer" />
                  <ArrowButton text={contactPhoneDisplay} href={`tel:${contactPhone}`} tone="outline" />
                </div>
              </div>
            )}
            </m.div>
            </AnimatePresence>
          </m.div>

          <m.aside {...enter(40, 0.16)} style={{ viewTransitionName: "quote-aside" }} className={`[grid-area:aside] ${docked ? "xl:sticky xl:top-[calc(var(--header-h)+24px)] xl:self-start" : ""}`}>
            <BookingCard trip={trip} route={route} offer={offer} />
            {step === 1 && (
              <p className="mt-3 flex items-center justify-center gap-2 text-[13px] text-[#667085]">
                <Luggage size={14} strokeWidth={1.8} aria-hidden="true" />
                Luggage and child seats can be added in the next step
              </p>
            )}
          </m.aside>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
