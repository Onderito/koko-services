"use client";

// The header's language menu: a round flag of the current language; a click opens English / Français, each going to
// the same page in that language (or to that language's home when the page has none). The choice is kept a year in the
// `lang` cookie, which the browser-language redirect respects (src/middleware.ts). Languages switch with a full page
// load, since each language has its own root layout. `variant="list"` shows the two choices as links (phone menu).

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import s from "./site-header.module.css";
import { englishTwin, frenchTwin, frLink } from "../data/i18n/addresses";

type Lang = "en" | "fr";

const YEAR = 60 * 60 * 24 * 365;
const remember = (lang: Lang) => {
  document.cookie = `lang=${lang}; path=/; max-age=${YEAR}; samesite=lax`;
};

/** The French home, or the French transfers hub while the French home does not exist. */
const frenchHome = () => (frLink("/") === "/" ? "/fr/transferts-prives" : frLink("/"));

export const isFrenchPath = (pathname: string) => pathname === "/fr" || pathname.startsWith("/fr/");

function UnionJack({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <clipPath id={`${id}-s`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`${id}-t`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${id}-s)`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}-t)`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function Tricolore() {
  return (
    <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#ffffff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

function Flag({ lang, size = 20 }: { lang: Lang; size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <span
      className="inline-block shrink-0 overflow-hidden rounded-full ring-1 ring-black/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {lang === "en" ? <UnionJack id={`uj${id}`} /> : <Tricolore />}
    </span>
  );
}

const NAMES: Record<Lang, string> = { en: "English", fr: "Français" };

export default function LanguageMenu({ variant = "menu", className = "" }: { variant?: "menu" | "list"; className?: string }) {
  const pathname = usePathname() ?? "/";
  const current: Lang = isFrenchPath(pathname) ? "fr" : "en";
  const hrefs: Record<Lang, string> = {
    en: current === "en" ? pathname : englishTwin(pathname) ?? "/",
    fr: current === "fr" ? pathname : frenchTwin(pathname) ?? frenchHome(),
  };
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  const choices = (["en", "fr"] as Lang[]).map(lang => (
    <a
      key={lang}
      href={hrefs[lang]}
      hrefLang={lang}
      lang={lang}
      role={variant === "menu" ? "menuitem" : undefined}
      aria-current={lang === current ? "true" : undefined}
      onClick={() => remember(lang)}
      className={
        variant === "menu"
          ? "flex items-center gap-3 rounded-control px-3 py-2.5 text-[15px] font-medium transition-colors hover:bg-[var(--p-hover)]"
          : `inline-flex h-12 items-center justify-center gap-2.5 rounded-control border text-[16px] font-semibold ${lang === current ? "border-[#e8ba64] text-white" : "border-white/25 text-white/85"}`
      }
    >
      <Flag lang={lang} />
      <span>{NAMES[lang]}</span>
      {variant === "menu" && lang === current && (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="ml-auto text-[var(--p-gold)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5 10 17 19 7" />
        </svg>
      )}
    </a>
  ));

  if (variant === "list") {
    return (
      <div className={`grid grid-cols-2 gap-3 ${className}`} role="group" aria-label={current === "fr" ? "Langue" : "Language"}>
        {choices}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={current === "fr" ? "Langue : français" : "Language: English"}
        onClick={() => setOpen(o => !o)}
        className={`${s.ghost} inline-flex h-10 items-center gap-1.5 rounded-control px-2.5`}
      >
        <Flag lang={current} />
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`${s.chevron} ${open ? s.chevronOpen : ""}`}>
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div role="menu" aria-label={current === "fr" ? "Langue" : "Language"} className={`${s.panel} absolute right-0 top-full z-50 mt-2 w-48 rounded-card p-1.5`}>
          {choices}
        </div>
      )}
    </div>
  );
}
