"use client";

// Address field with suggestions (Transfeero-style): quick picks before typing, live suggestions while typing,
// keyboard and screen-reader friendly (ARIA combobox). Suggestions come from our own server route.
// 21 Oct 2026, at the user's request ("we need to be able to scroll in place the destinations"): the list fits in the
// space left on screen (it opens upwards when there is more room above), and the wheel scrolls the list, not the page.
// 29 Oct 2026, at the user's request: the contact form's pick-up and drop-off propose the same places, in the hero's
// style (PlaceTextField: the same list in a form field, where any address can still be typed).

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { PlaceDetails, PlaceKind, PlaceProviderName, PlaceSuggestion } from "@/lib/places/types";
import fx from "./place-field.module.css";

const newSession = () =>
  (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}${Math.random()}`).replace(/[^A-Za-z0-9]/g, "").slice(0, 32);

/** Lower case without accents: "Èze" matches "eze". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function KindIcon({ kind }: { kind: PlaceKind }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (kind) {
    case "airport":
      return <svg {...common}><path d="M10.5 21l1.5-1 1.5 1v-3.5l5.5 2v-2.2l-5.5-3.8V7a1.5 1.5 0 0 0-3 0v5.5L5 16.3v2.2l5.5-2z" /></svg>;
    case "station":
      return <svg {...common}><rect x="6" y="3" width="12" height="13" rx="3" /><path d="M6 11h12M9 20l-2 2M15 20l2 2M9 16l-1 4h8l-1-4" /></svg>;
    case "port":
      return <svg {...common}><circle cx="12" cy="5" r="2" /><path d="M12 7v14M5 13a7 7 0 0 0 14 0M8 10h8" /></svg>;
    case "hotel":
      return <svg {...common}><path d="M3 20V8M21 20v-6a3 3 0 0 0-3-3h-8v9M3 14h18" /><circle cx="7" cy="11" r="1.6" /></svg>;
    case "city":
      return <svg {...common}><path d="M4 21V9l5-3v15M9 21V4l6 3v14M15 21v-9l5 2v7M3 21h18" /></svg>;
    default:
      return <svg {...common}><path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>;
  }
}

/** The suggestions behind both fields: what is listed, where the list fits on screen, and the keys that move through it.
 *  `extra`: rows added after the places (the contact form's "Other"), reachable with the arrow keys too. */
function useSuggestions(language: string, extra = 0) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<PlaceSuggestion[]>([]);
  const [provider, setProvider] = useState<PlaceProviderName>("demo");
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const session = useRef(newSession());
  const abort = useRef<AbortController | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<{ up: boolean; maxH: number }>({ up: false, maxH: 340 });

  // Place the open list where it fits on screen, and keep it fitted while the page moves.
  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const r = box.current?.getBoundingClientRect();
      if (!r) return;
      const header = 84; // the fixed header
      const below = window.innerHeight - r.bottom - 28;
      const above = r.top - header - 28;
      const up = below < 260 && above > below;
      const room = (up ? above : below) - 44; // the provider line under the list
      setFit({ up, maxH: Math.max(160, Math.min(340, Math.round(room))) });
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, { passive: true });
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place);
    };
  }, [open]);

  const load = useCallback(
    (q: string) => {
      abort.current?.abort();
      const ctrl = new AbortController();
      abort.current = ctrl;
      setLoading(true);
      setError("");
      const url = (own: boolean) => `/api/places/autocomplete?q=${encodeURIComponent(q)}&s=${session.current}&lang=${language}${own ? "&own=1" : ""}`;
      type Found = { provider: PlaceProviderName; suggestions: PlaceSuggestion[] };
      const show = (d: Found) => {
        setItems(d.suggestions);
        setProvider(d.provider);
        setActive(d.suggestions.length ? 0 : -1);
        setOpen(true);
      };
      // Our own places (airports, ports, every Riviera commune) show at once; the full search, which also finds hotels,
      // villas and streets, replaces them when it answers.
      let full = false;
      if (q.length >= 3)
        fetch(url(true), { signal: ctrl.signal })
          .then(r => (r.ok ? (r.json() as Promise<Found>) : null))
          .then(d => {
            if (d?.suggestions.length && !full) show(d);
          })
          .catch(() => {});
      fetch(url(false), { signal: ctrl.signal })
        .then(r => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
        .then((d: Found) => {
          full = true;
          show(d);
        })
        .catch(e => {
          if ((e as Error).name !== "AbortError") setError("Suggestions are unavailable. Type the full address.");
        })
        .finally(() => setLoading(false));
    },
    [language],
  );

  // Close when clicking outside.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  /** Quick picks for an empty field, nothing for a single letter, then live suggestions 200ms after the typing. */
  const search = (q: string) => {
    if (timer.current) clearTimeout(timer.current);
    if (q.length === 1) {
      setOpen(false);
      return;
    }
    if (q.length > 1) {
      // Until the new places arrive (the OpenStreetMap search can take a second), the list keeps only what matches
      // the typing, so Enter never picks a place from the previous list.
      const n = fold(q);
      const still = items.filter(p => fold(`${p.title} ${p.subtitle}`).includes(n));
      setItems(still);
      setActive(still.length ? 0 : -1);
      setLoading(true);
      setOpen(true);
    }
    timer.current = setTimeout(() => load(q), q.length === 0 ? 0 : 200);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>, text: string, choose: (s: PlaceSuggestion) => void, onExtra?: () => void) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) load(text.trim());
      else setActive(i => Math.min(items.length - 1 + extra, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => Math.max(0, i - 1));
    } else if (e.key === "Enter" && open && active >= 0 && items[active]) {
      e.preventDefault();
      choose(items[active]);
    } else if (e.key === "Enter" && open && onExtra && active === items.length) {
      e.preventDefault();
      onExtra();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return { open, setOpen, items, provider, active, setActive, loading, error, setError, session, box, fit, load, search, onKey };
}

type ExtraRow = { label: string; hint: string; onChoose: () => void };

/** The open list: each place with its kind, an optional last row ("Other"), then where the places come from. */
function SuggestionList({ s, listId, label, onChoose, extra }: { s: ReturnType<typeof useSuggestions>; listId: string; label: string; onChoose: (p: PlaceSuggestion) => void; extra?: ExtraRow }) {
  if (!s.open) return null;
  const extraAt = s.items.length;
  return (
    <div
      className={`${s.fit.up ? fx.listUp : fx.list} absolute left-0 right-0 z-50 min-w-[280px] overflow-hidden rounded-card bg-white shadow-[0_18px_50px_rgba(15,17,21,0.18)] ring-1 ring-black/5 lg:right-auto lg:w-[max(100%,440px)] ${
        s.fit.up ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
      }`}
    >
      <ul
        id={listId}
        role="listbox"
        aria-label={`${label} suggestions`}
        data-lenis-prevent=""
        style={{ maxHeight: s.fit.maxH }}
        className="overflow-y-auto overscroll-contain py-2"
      >
        {s.items.length === 0 && <li className="px-4 py-3 text-[14px] text-[#5b6472]">{s.loading ? "Searching…" : "No place found. Try a hotel, an airport or a street."}</li>}
        {s.items.map((p, i) => (
          <li
            key={p.id}
            id={`${listId}-${i}`}
            role="option"
            aria-selected={i === s.active}
            onMouseEnter={() => s.setActive(i)}
            onMouseDown={e => {
              e.preventDefault();
              onChoose(p);
            }}
            style={{ "--i": i } as React.CSSProperties}
            className={`${fx.item} flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors duration-150 ${i === s.active ? "bg-[#f1f3f5]" : ""}`}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-control bg-[#f1f2f4] text-[#0f1115]">
              <KindIcon kind={p.kind} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-semibold text-[#0f1115]">{p.title}</span>
              <span className="block truncate text-[13px] text-[#5b6472]">{p.subtitle}</span>
            </span>
          </li>
        ))}
        {extra && (
          <li
            id={`${listId}-${extraAt}`}
            role="option"
            aria-selected={s.active === extraAt}
            onMouseEnter={() => s.setActive(extraAt)}
            onMouseDown={e => {
              e.preventDefault();
              extra.onChoose();
            }}
            style={{ "--i": extraAt } as React.CSSProperties}
            className={`${fx.item} flex cursor-pointer items-center gap-3 border-t border-black/5 px-4 py-2.5 transition-colors duration-150 ${s.active === extraAt ? "bg-[#f1f3f5]" : ""}`}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-control bg-[#f1f2f4] text-[#0f1115]">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20h9" />
                <path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-semibold text-[#0f1115]">{extra.label}</span>
              <span className="block truncate text-[13px] text-[#5b6472]">{extra.hint}</span>
            </span>
          </li>
        )}
      </ul>
      <p className="border-t border-black/5 px-4 py-2 text-[11px] text-[#8a92a0]">
        {s.provider === "google"
          ? "Powered by Google"
          : s.provider === "osm"
            ? "Places © OpenStreetMap contributors"
            : s.loading
              ? "Riviera places · searching every address…"
              : "Riviera places · type 3 letters to search every address"}
      </p>
    </div>
  );
}

type Props = {
  name: string;
  label: string;
  placeholder: string;
  value: PlaceDetails | null;
  onChange: (place: PlaceDetails | null) => void;
  required?: boolean;
  language?: string;
  icon?: React.ReactNode;
};

/** The booking bar's field: a chosen suggestion becomes a place with its position (the quote needs the route). */
export default function PlaceField({ name, label, placeholder, value, onChange, required, language = "en", icon }: Props) {
  const uid = useId();
  const inputId = `${uid}-input`;
  const listId = `${uid}-list`;
  const [text, setText] = useState(value?.name ?? "");
  const s = useSuggestions(language);

  useEffect(() => setText(value?.name ?? ""), [value]);

  const choose = async (p: PlaceSuggestion) => {
    s.setOpen(false);
    setText(p.title);
    try {
      const r = await fetch(`/api/places/details?id=${encodeURIComponent(p.id)}&s=${s.session.current}&lang=${language}&name=${encodeURIComponent(p.title)}`);
      const d = (await r.json()) as { place?: PlaceDetails };
      if (!r.ok || !d.place) throw new Error("no place");
      onChange({ ...d.place, name: p.title });
    } catch {
      s.setError("This place could not be loaded. Choose another suggestion.");
      onChange(null);
    } finally {
      s.session.current = newSession(); // a session ends with the chosen place
    }
  };

  const onInput = (v: string) => {
    setText(v);
    if (value) onChange(null);
    s.search(v.trim());
  };

  return (
    <div ref={s.box} className="relative min-w-0 flex-1">
      <div className="flex items-center gap-3">
        {icon && <span className="shrink-0 text-[#8a92a0]">{icon}</span>}
        <div className="min-w-0 flex-1">
          <label htmlFor={inputId} className="block text-[13px] font-medium text-[#5b6472]">
            {label}
          </label>
          <div className="mt-1 flex items-center gap-2">
            <input
              id={inputId}
              name={name}
              type="text"
              role="combobox"
              aria-expanded={s.open}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={s.open && s.active >= 0 ? `${listId}-${s.active}` : undefined}
              autoComplete="off"
              required={required}
              placeholder={placeholder}
              value={text}
              onChange={e => onInput(e.target.value)}
              onFocus={() => {
                if (!value && text.trim().length !== 1) s.load(text.trim());
              }}
              onKeyDown={e => s.onKey(e, text, p => void choose(p))}
              className="w-full min-w-0 truncate bg-transparent text-[16px] font-semibold text-[#0f1115] placeholder:font-normal placeholder:text-[#8a92a0] focus:outline-none"
            />
            {text && (
              <button
                type="button"
                aria-label={`Clear ${label}`}
                onClick={() => {
                  setText("");
                  onChange(null);
                  s.load("");
                }}
                className="shrink-0 rounded-control p-1 text-[#8a92a0] hover:text-[#0f1115]"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>
      {s.error && <p className="mt-1 text-[12px] text-[#b42318]">{s.error}</p>}
      <SuggestionList s={s} listId={listId} label={label} onChoose={p => void choose(p)} />
    </div>
  );
}

/** The same suggestions in a form field (the contact form): any address can be typed; a suggestion fills in its name
 *  and address, which is what the form sends. Its label is the form's own (`id`). */
export function PlaceTextField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  required,
  language = "en",
  other,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (text: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  /** The form's field classes (border, height, error state). */
  className: string;
  required?: boolean;
  language?: string;
  /** A last row, "Other": it puts `value` in the field and lets the form ask for the details. */
  other?: { value: string; label: string; hint: string; onChoose: () => void };
}) {
  const listId = `${id}-list`;
  const s = useSuggestions(language, other ? 1 : 0);
  const input = useRef<HTMLInputElement>(null);
  const chosen = useRef(""); // the text of the last chosen suggestion: focusing it again does not reopen the list

  const choose = (p: PlaceSuggestion) => {
    s.setOpen(false);
    const full = p.subtitle && !p.title.includes(p.subtitle) ? `${p.title}, ${p.subtitle}` : p.title;
    chosen.current = full;
    onChange(full);
    s.session.current = newSession();
  };

  const chooseOther = other
    ? () => {
        s.setOpen(false);
        chosen.current = other.value;
        onChange(other.value);
        other.onChoose();
      }
    : undefined;

  return (
    <div ref={s.box} className="relative">
      <input
        ref={input}
        id={id}
        name={name}
        type="text"
        role="combobox"
        aria-expanded={s.open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={s.open && s.active >= 0 ? `${listId}-${s.active}` : undefined}
        autoComplete="off"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          chosen.current = "";
          onChange(e.target.value);
          s.search(e.target.value.trim());
        }}
        onFocus={() => {
          if ((!value || value !== chosen.current) && value.trim().length !== 1) s.load(value.trim());
        }}
        onBlur={onBlur}
        onKeyDown={e => s.onKey(e, value, choose, chooseOther)}
        className={`${className} pr-10`}
      />
      <span className="absolute right-2 top-1/2 mt-1 -translate-y-1/2">
        {value ? (
          <button
            type="button"
            aria-label={`Clear ${label}`}
            onMouseDown={e => e.preventDefault()}
            onClick={() => {
              chosen.current = "";
              onChange("");
              input.current?.focus();
              s.load("");
            }}
            className="grid h-8 w-8 place-items-center rounded-[6px] text-[18px] leading-none text-[#667085] transition-colors duration-100 hover:bg-[#f2f4f7] hover:text-[#101828]"
          >
            ×
          </button>
        ) : (
          <span className="grid h-8 w-8 place-items-center text-[#667085]">
            <KindIcon kind="address" />
          </span>
        )}
      </span>
      {s.error && <p className="mt-1.5 text-[13px] text-red-600">{s.error}</p>}
      <SuggestionList s={s} listId={listId} label={label} onChoose={choose} extra={other && chooseOther ? { label: other.label, hint: other.hint, onChoose: chooseOther } : undefined} />
    </div>
  );
}
