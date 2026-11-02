"use client";

// Site header embedded in the hero (Transfeero model): transparent at the top of the page, then it takes the colour of
// what is under it — light text over dark sections, dark text over light ones — with a solid bar once the page scrolls.
// A section can state its tone with data-nav-tone="dark" | "light"; otherwise its background colour decides.
// Menus open with a plain fade. Works with mouse, touch (tap toggles), keyboard (Escape returns focus) and screen readers.

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./site-header.module.css";
import { NAV_LINKS, NAV_PANELS, type NavPanel } from "./nav-data";
import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";
import ArrowButton from "../ui/arrow-button";

type Key = NavPanel["key"];
type Tone = "dark" | "light";
const ORDER: Key[] = NAV_PANELS.map(p => p.key);
const CLOSE_DELAY = 160;
const SLIDE_MS = 260; // Hyperiux Directional Menu: content slide duration

// Reads any CSS colour (rgb, oklch, color(), …) through a 1×1 canvas: relative luminance and opacity.
let paint: CanvasRenderingContext2D | null = null;
function readColour(value: string) {
  if (!value || value === "transparent") return null;
  paint ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!paint) return null;
  paint.clearRect(0, 0, 1, 1);
  paint.fillStyle = "rgba(0, 0, 0, 0)";
  paint.fillStyle = value;
  paint.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = paint.getImageData(0, 0, 1, 1).data;
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return { luminance: 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b), alpha: a / 255 };
}

// Tone under a point: the first ancestor that declares one, else the first solid background, else the white page.
function toneUnder(el: Element | null, memo: WeakMap<Element, Tone | null>): Tone {
  for (let node = el; node && node !== document.documentElement; node = node.parentElement) {
    let tone = memo.get(node);
    if (tone === undefined) {
      const declared = node.getAttribute("data-nav-tone");
      tone = declared === "dark" || declared === "light" ? declared : null;
      if (!tone) {
        const c = readColour(getComputedStyle(node).backgroundColor);
        if (c && c.alpha > 0.6) tone = c.luminance < 0.4 ? "dark" : "light";
      }
      memo.set(node, tone);
    }
    if (tone) return tone;
  }
  return "light";
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`${s.chevron} ${open ? s.chevronOpen : ""}`}>
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HoverArrow({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="inline-block shrink-0 transition-transform duration-500 group-hover:-rotate-45 motion-reduce:transition-none">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function PanelContent({ panel, onNavigate }: { panel: NavPanel; onNavigate: () => void }) {
  return (
    <div className="px-8 pb-8 pt-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--p-gold)]">{panel.eyebrow}</p>
      <p className="mt-1 text-[20px] font-semibold tracking-[-0.01em]">{panel.title}</p>

      {panel.key === "services" && (
        <div className="mt-5 grid gap-8 border-t border-[var(--p-line)] pt-5 lg:grid-cols-[1fr_340px]">
          <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {panel.list!.map(l => (
              <li key={l.href}>
                <Link href={l.href} onClick={onNavigate} className="-mx-3 block rounded-control px-3 py-3 transition-colors hover:bg-[var(--p-hover)]">
                  <span className="block text-[15px] font-semibold">{l.label}</span>
                  {l.description && <span className="mt-0.5 block text-[13px] leading-relaxed text-[var(--p-soft)]">{l.description}</span>}
                </Link>
              </li>
            ))}
            {/* The CTA asked for on 21 Oct 2026, the same as the home page's "Discover All of Our Services" button. */}
            <li className="pt-3 sm:col-span-2">
              <ArrowButton text="Discover All of Our Services" href="/our-services" size="sm" onClick={onNavigate} />
            </li>
          </ul>
          {panel.cards.map(c => (
            <Link key={c.href} href={c.href} onClick={onNavigate} className="group relative block min-h-[220px] overflow-hidden rounded-card bg-[#0f1115]">
              <Image src={c.image} alt={c.alt} fill sizes="340px" className="object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-95" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-white">
                <span className="flex items-center gap-2 text-[16px] font-semibold">{c.title} <HoverArrow size={16} /></span>
                <span className="mt-0.5 block text-[13px] text-white/80">{c.text}</span>
              </span>
            </Link>
          ))}
        </div>
      )}

      {panel.key === "destinations" && (
        <div className="mt-5 grid gap-8 border-t border-[var(--p-line)] pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {panel.columns!.map(col => (
            <div key={col.title}>
              {col.href ? (
                <Link href={col.href} onClick={onNavigate} className="group inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--p-soft)] transition-colors hover:text-[var(--p-fg)]">{col.title} <HoverArrow size={13} /></Link>
              ) : (
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--p-soft)]">{col.title}</p>
              )}
              <ul className="mt-3 space-y-2">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={onNavigate} className="text-[15px] transition-colors hover:text-[var(--p-gold)]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {panel.key === "fleet" && (
        <ul className="mt-5 grid gap-6 border-t border-[var(--p-line)] pt-5 sm:grid-cols-4">
          {panel.cards.map(c => (
            <li key={c.href}>
              <Link href={c.href} onClick={onNavigate} className="group block">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-card bg-[#eef1f2]">
                  <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 380px, 100vw" className={`object-cover ${c.focus ?? ""}`} />
                </span>
                <span className="mt-3 flex items-center gap-2 text-[15px] font-semibold transition-colors group-hover:text-[var(--p-gold)]">{c.title} <HoverArrow /></span>
                <span className="mt-0.5 block text-[13px] text-[var(--p-soft)]">{c.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SiteHeader({ fontClassName = "" }: { fontClassName?: string }) {
  const pathname = usePathname();
  const [active, setActive] = useState<Key | null>(null);
  const [shown, setShown] = useState<Key | null>(null); // last opened panel, kept while the panel closes
  const [leaving, setLeaving] = useState<{ key: Key; dir: 1 | -1 } | null>(null);
  const [enterDir, setEnterDir] = useState<1 | -1 | 0>(0);
  const [openSeq, setOpenSeq] = useState(0); // each fresh opening replays the content fade
  const [height, setHeight] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [tone, setTone] = useState<Tone | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<Key | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Partial<Record<Key, HTMLButtonElement | null>>>({});

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  // Directional: moving to an item further right slides its content in from the right, and the reverse.
  const open = useCallback((next: Key) => {
    cancelClose();
    const current = activeRef.current;
    if (current === next) return;
    if (current) {
      const dir = ORDER.indexOf(next) > ORDER.indexOf(current) ? 1 : -1;
      setLeaving({ key: current, dir });
      setEnterDir(dir);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => setLeaving(null), SLIDE_MS + 20);
    } else {
      setLeaving(null);
      setEnterDir(0);
      setOpenSeq(n => n + 1);
    }
    activeRef.current = next;
    setActive(next);
    setShown(next);
  }, []);

  const close = useCallback((focusTrigger = false) => {
    cancelClose();
    const current = activeRef.current;
    if (focusTrigger && current) triggerRefs.current[current]?.focus();
    activeRef.current = null;
    setActive(null);
    setLeaving(null);
  }, []);

  // The panel height follows the content shown.
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!active || !el) {
      setHeight(0);
      return;
    }
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => close(), CLOSE_DELAY);
  };

  // Follow the background under the header while the page scrolls (three sample points, majority wins).
  useEffect(() => {
    const header = headerRef.current;
    const bar = barRef.current;
    if (!header || !bar) return;
    const memo = new WeakMap<Element, Tone | null>();
    let frame = 0;
    const probe = () => {
      frame = 0;
      const y = Math.round(bar.offsetHeight / 2);
      const w = window.innerWidth;
      let dark = 0;
      for (const x of [0.15, 0.5, 0.85]) {
        const under = document.elementsFromPoint(Math.round(w * x), y).find(el => !header.contains(el)) ?? null;
        if (toneUnder(under, memo) === "dark") dark++;
      }
      setTone(dark >= 2 ? "dark" : "light");
      setScrolled(window.scrollY > 4);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(probe);
    };
    schedule();
    const late = window.setTimeout(schedule, 500); // images and client sections that settle after the first paint
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(late);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  // Close everything on navigation, on Escape, and on a click outside the header.
  useEffect(() => {
    close();
    setSheetOpen(false);
  }, [pathname, close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close(true);
        setSheetOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [close]);

  // The phone sheet covers the page: lock its scroll, and close the sheet if the window grows to desktop width.
  useEffect(() => {
    if (!sheetOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = () => wide.matches && setSheetOpen(false);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = previous;
      wide.removeEventListener("change", onWide);
    };
  }, [sheetOpen]);

  const panel = NAV_PANELS.find(p => p.key === shown) ?? null;
  const leavingPanel = leaving ? NAV_PANELS.find(p => p.key === leaving.key) ?? null : null;
  const solid = scrolled || active !== null || sheetOpen;
  const inSection = (key: Key) => (key === "services" ? pathname.startsWith("/our-services") : key === "fleet" ? pathname.startsWith("/cars") : false);

  return (
    <header
      ref={headerRef}
      data-tone={sheetOpen ? "dark" : tone ?? "auto"}
      data-solid={solid ? "true" : "false"}
      className={`${s.header} fixed inset-x-0 top-0 z-50 ${fontClassName}`}
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
      }}
    >
      <div ref={barRef} className={s.bar}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-4 px-4 md:px-6 lg:h-[76px]">
          <Link href="/" className="shrink-0 text-[22px] font-bold tracking-[-0.02em]" aria-label="Kokolimo, home">
            Kokolimo<span className="text-[#d4b471]">.</span>
          </Link>

          <nav aria-label="Main" className="ml-6 hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_PANELS.map(p => (
                <li key={p.key}>
                  <button
                    ref={el => {
                      triggerRefs.current[p.key] = el;
                    }}
                    type="button"
                    aria-expanded={active === p.key}
                    aria-controls="site-header-panel"
                    onMouseEnter={() => open(p.key)}
                    onClick={e => {
                      if (active === p.key) return close();
                      open(p.key);
                      // Opened from the keyboard: move into the menu so its links are the next Tab stops.
                      if (e.detail === 0) requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());
                    }}
                    className={`${s.link} ${inSection(p.key) ? s.current : ""} flex h-10 items-center gap-1.5 rounded-control px-3.5 text-[15px] font-medium`}
                  >
                    {p.label}
                    <Chevron open={active === p.key} />
                  </button>
                </li>
              ))}
              {NAV_LINKS.map(l => {
                const here = pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onMouseEnter={scheduleClose}
                      aria-current={here ? "page" : undefined}
                      className={`${s.link} ${here ? s.current : ""} flex h-10 items-center rounded-control px-3.5 text-[15px] font-medium`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a href={`tel:${contactPhone}`} className={`${s.link} hidden h-10 items-center gap-2 rounded-control px-3 text-[14px] font-semibold xl:inline-flex`}>
              <PhoneIcon />
              {contactPhoneDisplay}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${s.ghost} hidden h-10 items-center gap-2 rounded-control px-3.5 text-[14px] font-semibold sm:inline-flex`}>
              <span className={`${s.wa} inline-flex items-center gap-2`}>
                <WhatsAppIcon />
                WhatsApp
              </span>
            </a>
            <ArrowButton text="Get a quote" href="/#book" size="sm" />
            <button
              type="button"
              aria-label={sheetOpen ? "Close menu" : "Open menu"}
              aria-expanded={sheetOpen}
              aria-controls="site-header-sheet"
              onClick={() => setSheetOpen(o => !o)}
              className={`${s.ghost} grid h-10 w-10 place-items-center rounded-control lg:hidden`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {sheetOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop menu (Hyperiux Directional Menu): a panel under the bar whose height follows its content, the content
          sliding in from the side of travel; black over white sections, white over dark heroes (s.panel). The top
          padding keeps the pointer inside the header. */}
      <div className={`absolute inset-x-0 top-full hidden px-4 pt-2 md:px-6 lg:block ${active ? "" : "pointer-events-none"}`}>
        <div
          ref={panelRef}
          id="site-header-panel"
          role="region"
          aria-label={panel ? `${panel.label} menu` : "Menu"}
          inert={!active}
          className={`${s.panelShell} ${s.panel} mx-auto max-w-[1240px] overflow-hidden rounded-card`}
          style={{ height: active ? height : 0, opacity: active ? 1 : 0 }}
        >
          <div className="relative">
            {leavingPanel && leaving && (
              <div className={`${s.layer} ${leaving.dir === 1 ? s.exitToLeft : s.exitToRight}`} aria-hidden="true">
                <PanelContent panel={leavingPanel} onNavigate={() => close()} />
              </div>
            )}
            {panel && (
              <div ref={contentRef} key={`${panel.key}-${openSeq}`} className={enterDir === 1 ? s.enterFromRight : enterDir === -1 ? s.enterFromLeft : s.enterFade}>
                <PanelContent panel={panel} onNavigate={() => close()} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Phones and tablets: full-screen sheet with native expandable sections */}
      <div
        id="site-header-sheet"
        inert={!sheetOpen}
        className={`${s.sheet} ${sheetOpen ? s.sheetOpen : ""} fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-[#0f1115] px-4 pb-10 pt-2 text-white lg:hidden`}
      >
        <nav
          aria-label="Main (mobile)"
          className="mx-auto max-w-[640px]"
          onClick={e => {
            if ((e.target as HTMLElement).closest("a")) setSheetOpen(false);
          }}
        >
          {NAV_PANELS.map(p => (
            <details key={p.key} className="group border-b border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[19px] font-semibold">
                {p.label}
                <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true" className="transition-transform duration-150 group-open:rotate-180">
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>
              <ul className="pb-3">
                {(p.list ?? []).map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2.5 text-[16px] text-white/80 hover:text-white">{l.label}</Link>
                  </li>
                ))}
                {(p.columns ?? []).map(c => (
                  <li key={c.title} className="pt-2">
                    <p className="pb-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">{c.title}</p>
                    <ul>
                      {c.links.map(l => (
                        <li key={l.href}>
                          <Link href={l.href} className="block py-2 text-[16px] text-white/80 hover:text-white">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                {p.key === "fleet" &&
                  p.cards.map(c => (
                    <li key={c.href}>
                      <Link href={c.href} className="block py-2.5 text-[16px] text-white/80 hover:text-white">{c.title}</Link>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="block border-b border-white/10 py-4 text-[19px] font-semibold">{l.label}</Link>
          ))}
          <div className="mt-8 grid gap-3">
            <ArrowButton text="Get a quote" href="/#book" full onClick={() => setSheetOpen(false)} />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-white/25 text-[16px] font-semibold text-[#25d366]">
              <WhatsAppIcon />
              WhatsApp us
            </a>
            <a href={`tel:${contactPhone}`} className="inline-flex h-12 items-center justify-center gap-2 text-[16px] font-semibold text-white/85">
              <PhoneIcon />
              {contactPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
