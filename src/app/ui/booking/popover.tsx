"use client";

// The booking bar's pop-up panel (date, time), Cloudflare-like (user, 21 Oct 2026): white, hairline border, soft shadow,
// 12px corners. It opens under its field, or above it when there is more room there, with a short fade and lift; it
// closes on Escape, on a click outside the field, or when the choice is made, with a quicker fade out.

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import fx from "./popover.module.css";

export default function Popover({
  open,
  onClose,
  anchor,
  label,
  className = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  /** The field the panel belongs to (relative): clicks inside it do not close the panel. */
  anchor: RefObject<HTMLElement | null>;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const [shown, setShown] = useState(open);
  const [up, setUp] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  // Keep the panel for its fade out.
  useEffect(() => {
    if (open) {
      setShown(true);
      return;
    }
    const t = window.setTimeout(() => setShown(false), 130);
    return () => window.clearTimeout(t);
  }, [open]);

  // Open where it fits.
  useLayoutEffect(() => {
    if (!open) return;
    const r = anchor.current?.getBoundingClientRect();
    const h = panel.current?.offsetHeight ?? 380;
    if (!r) return;
    const below = window.innerHeight - r.bottom - 16;
    const above = r.top - 84 - 16; // the fixed header
    setUp(below < h && above > below);
  }, [open, anchor]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (anchor.current && !anchor.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, anchor]);

  if (!shown) return null;
  return (
    <div
      ref={panel}
      role="dialog"
      aria-label={label}
      data-lenis-prevent=""
      className={`absolute left-0 z-50 rounded-[12px] bg-white text-[#101828] shadow-[0_24px_60px_rgba(15,17,21,0.2),0_2px_6px_rgba(15,17,21,0.06)] ring-1 ring-[#e4e7ec] ${
        up ? "bottom-[calc(100%+14px)]" : "top-[calc(100%+14px)]"
      } ${open ? (up ? fx.panelUp : fx.panel) : fx.closing} ${className}`}
    >
      {children}
    </div>
  );
}
