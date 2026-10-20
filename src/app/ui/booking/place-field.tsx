"use client";

// Address field with suggestions (Transfeero-style): quick picks before typing, live suggestions while typing,
// keyboard and screen-reader friendly (ARIA combobox). Suggestions come from our own server route.

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { PlaceDetails, PlaceKind, PlaceProviderName, PlaceSuggestion } from "@/lib/places/types";

const newSession = () =>
  (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}${Math.random()}`).replace(/[^A-Za-z0-9]/g, "").slice(0, 32);

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

type Props = {
  name: string;
  label: string;
  placeholder: string;
  value: PlaceDetails | null;
  onChange: (place: PlaceDetails | null) => void;
  required?: boolean;
  language?: string;
};

export default function PlaceField({ name, label, placeholder, value, onChange, required, language = "en" }: Props) {
  const uid = useId();
  const inputId = `${uid}-input`;
  const listId = `${uid}-list`;
  const [text, setText] = useState(value?.name ?? "");
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

  useEffect(() => setText(value?.name ?? ""), [value]);

  const load = useCallback(
    (q: string) => {
      abort.current?.abort();
      const ctrl = new AbortController();
      abort.current = ctrl;
      setLoading(true);
      setError("");
      fetch(`/api/places/autocomplete?q=${encodeURIComponent(q)}&s=${session.current}&lang=${language}`, { signal: ctrl.signal })
        .then(r => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
        .then((d: { provider: PlaceProviderName; suggestions: PlaceSuggestion[] }) => {
          setItems(d.suggestions);
          setProvider(d.provider);
          setActive(d.suggestions.length ? 0 : -1);
          setOpen(true);
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

  const choose = async (s: PlaceSuggestion) => {
    setOpen(false);
    setText(s.title);
    try {
      const r = await fetch(`/api/places/details?id=${encodeURIComponent(s.id)}&s=${session.current}&lang=${language}&name=${encodeURIComponent(s.title)}`);
      const d = (await r.json()) as { place?: PlaceDetails };
      if (!r.ok || !d.place) throw new Error("no place");
      onChange({ ...d.place, name: s.title });
    } catch {
      setError("This place could not be loaded. Choose another suggestion.");
      onChange(null);
    } finally {
      session.current = newSession(); // a session ends with the chosen place
    }
  };

  const onInput = (v: string) => {
    setText(v);
    if (value) onChange(null);
    if (timer.current) clearTimeout(timer.current);
    const q = v.trim();
    if (q.length === 1) {
      setOpen(false);
      return;
    }
    timer.current = setTimeout(() => load(q), q.length === 0 ? 0 : 200);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) load(text.trim());
      else setActive(i => Math.min(items.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => Math.max(0, i - 1));
    } else if (e.key === "Enter" && open && active >= 0 && items[active]) {
      e.preventDefault();
      void choose(items[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={box} className="relative min-w-0 flex-1">
      <label htmlFor={inputId} className="block text-[13px] font-medium text-[#5b6472]">
        {label}
      </label>
      <div className="mt-1 flex items-center gap-2">
        <input
          id={inputId}
          name={name}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
          autoComplete="off"
          required={required}
          placeholder={placeholder}
          value={text}
          onChange={e => onInput(e.target.value)}
          onFocus={() => {
            if (!value && text.trim().length !== 1) load(text.trim());
          }}
          onKeyDown={onKey}
          className="w-full min-w-0 truncate bg-transparent text-[16px] font-semibold text-[#0f1115] placeholder:font-normal placeholder:text-[#8a92a0] focus:outline-none"
        />
        {text && (
          <button
            type="button"
            aria-label={`Clear ${label}`}
            onClick={() => {
              setText("");
              onChange(null);
              load("");
            }}
            className="shrink-0 rounded-full p-1 text-[#8a92a0] hover:text-[#0f1115]"
          >
            ×
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-[12px] text-[#b42318]">{error}</p>}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 min-w-[280px] overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(15,17,21,0.18)] ring-1 ring-black/5">
          <ul id={listId} role="listbox" aria-label={`${label} suggestions`} className="max-h-[340px] overflow-auto py-2">
            {items.length === 0 && !loading && <li className="px-4 py-3 text-[14px] text-[#5b6472]">No place found. Try a hotel, an airport or a street.</li>}
            {items.map((s, i) => (
              <li
                key={s.id}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onMouseDown={e => {
                  e.preventDefault();
                  void choose(s);
                }}
                className={`flex cursor-pointer items-center gap-3 px-4 py-2.5 ${i === active ? "bg-[#f1f3f5]" : ""}`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#f1f2f4] text-[#0f1115]">
                  <KindIcon kind={s.kind} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-semibold text-[#0f1115]">{s.title}</span>
                  <span className="block truncate text-[13px] text-[#5b6472]">{s.subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t border-black/5 px-4 py-2 text-[11px] text-[#8a92a0]">
            {provider === "google" ? "Powered by Google" : "Demo list · add the Google key for live results"}
          </p>
        </div>
      )}
    </div>
  );
}
