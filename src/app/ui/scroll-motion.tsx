"use client";

// The site's scroll feel (user, 21 Oct 2026: "almost the same framer motion scrolling like we initially have but not
// that heavy"). The original site had Lenis smooth scrolling (duration 1.2) and Motion reveals (fade, 18px rise and 0.97
// scale over 0.68s). Lighter here: Lenis settles faster (lerp 0.14), on mouse and trackpad only, and the blocks of each
// section fade in and rise 14px over 0.6s as they come into view, with a short stagger inside card grids. One observer,
// no animation library. Nothing is hidden before this script runs (crawlers, .md twins, no JavaScript), what is on screen
// when it runs stays as it is, and visitors who ask for reduced motion get neither effect.
// It also sends the page back to the top when the visitor opens another page (user, 21 Oct 2026); Back and Forward keep
// the browser's own position. Links to the booking bar (/#book) glide to it (user, 28 Oct 2026; booking/book-focus.tsx).

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { registerLenis } from "./glide";
import { focusBook, focusBookOnArrival } from "./booking/book-focus";

const SECTIONS = "main section:not([data-hero-tone]):not([data-no-reveal])";
const STAGGER_MS = 70;
const MAX_STAGGER = 6;

/** The blocks of a section that reveal: each child of its inner column, or each card when the child is a grid. */
function revealTargets(): HTMLElement[] {
  const out: HTMLElement[] = [];
  for (const section of document.querySelectorAll<HTMLElement>(SECTIONS)) {
    const column = section.firstElementChild as HTMLElement | null;
    if (!column) continue;
    for (const block of Array.from(column.children) as HTMLElement[]) {
      if (block.matches("form, [data-no-reveal]") || block.querySelector("form")) continue;
      const display = getComputedStyle(block).display;
      const cards = Array.from(block.children) as HTMLElement[];
      if ((display === "grid" || block.matches("ul, ol")) && cards.length >= 2 && cards.length <= 12) out.push(...cards);
      else out.push(block);
    }
  }
  return out;
}

export default function ScrollMotion() {
  const pathname = usePathname();
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);
  const popRef = useRef(false);
  const firstRef = useRef(true);

  // Smooth scrolling, lighter than the original; native scrolling on the quote page (a form beside a live map).
  const quotePage = pathname.startsWith("/reservation");
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !finePointer || quotePage) return;
    const lenis = new Lenis({ lerp: 0.14, smoothWheel: true, wheelMultiplier: 1, autoRaf: true, allowNestedScroll: true, autoToggle: true });
    lenisRef.current = lenis;
    registerLenis(lenis);
    return () => {
      registerLenis(null);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [quotePage]);

  // "Get a quote" and the other links to the booking bar glide to it instead of jumping; from another page, the home
  // page opens without a reload and the glide follows. The bar's own "Get my quote" is left alone.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href="/#book"], a[href="#book"]');
      if (!link || link.closest("#book")) return;
      e.preventDefault();
      if (window.location.pathname === "/" && focusBook()) return;
      focusBookOnArrival();
      router.push("/");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // Back to the top on a new page; Back and Forward (popstate) and links to an anchor keep their position.
  useEffect(() => {
    const onPop = () => {
      popRef.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useLayoutEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    if (popRef.current) {
      popRef.current = false;
      return;
    }
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Reveals, set up again for each page.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const pending: HTMLElement[] = [];
    for (const el of revealTargets()) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) continue; // already on screen: leave it alone
      el.dataset.reveal = "pending";
      pending.push(el);
    }
    root.classList.add("reveal-ready");

    const timers: number[] = [];
    const io = new IntersectionObserver(
      entries => {
        const shown = entries
          .filter(e => e.isIntersecting)
          .map(e => e.target as HTMLElement)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        shown.forEach((el, i) => {
          io.unobserve(el);
          const delay = Math.min(i, MAX_STAGGER) * STAGGER_MS;
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.dataset.reveal = "shown";
          // Hand the element back to its own styles (hover transitions…) once the reveal is over.
          timers.push(
            window.setTimeout(() => {
              delete el.dataset.reveal;
              el.style.removeProperty("--reveal-delay");
            }, 700 + delay),
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    pending.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(t => window.clearTimeout(t));
      pending.forEach(el => {
        delete el.dataset.reveal;
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
