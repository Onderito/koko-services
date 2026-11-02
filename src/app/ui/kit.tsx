// Shared building blocks of the rebrand: the "Anti" layout language (inspirations/IMG_8800, with IMG_8794) under the
// Transfeero hero and header. Crisp corners (rounded-card 6px, rounded-control 4px), one gold accent, plain hover
// transitions only. Server components: they ship no JavaScript. Sections declare their tone for the header.

import Link from "next/link";
import type { ComponentProps, ElementType, ReactNode } from "react";
import ArrowButton from "./arrow-button";

export type Tone = "light" | "paper" | "dark";

export const INK = "#0f1115";
export const GOLD = "#e8ba64";
export const GOLD_DEEP = "#9a7a3e"; // gold text on light backgrounds (contrast)

const SECTION_BG: Record<Tone, string> = {
  light: "bg-white text-[#0f1115]",
  paper: "bg-[#f6f5f1] text-[#0f1115]",
  dark: "bg-[#0f1115] text-white",
};

/** Full-width band with the page's 1240px column inside. data-nav-tone tells the header which colour to take. */
export function Section({
  tone = "light",
  className = "",
  innerClassName = "",
  children,
  ...rest
}: { tone?: Tone; innerClassName?: string } & ComponentProps<"section">) {
  return (
    <section data-nav-tone={tone === "dark" ? "dark" : "light"} className={`${SECTION_BG[tone]} ${className}`} {...rest}>
      <div className={`mx-auto max-w-[1240px] px-4 py-20 md:px-6 md:py-24 ${innerClassName}`}>{children}</div>
    </section>
  );
}

/** Small label above a title: a short gold rule and uppercase text. */
export function Eyebrow({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] ${tone === "dark" ? "text-[#d4b471]" : "text-[#9a7a3e]"} ${className}`}>
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-[#e8ba64]" />
      {children}
    </p>
  );
}

/** Shows `accent` (a word or phrase already in `title`) in gold. The text itself never changes. */
export function Accent({ text, accent, tone = "light" }: { text: string; accent?: string; tone?: Tone }) {
  const i = accent ? text.lastIndexOf(accent) : -1;
  if (!accent || i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className={tone === "dark" ? "text-[#d4b471]" : "text-[#9a7a3e]"}>{accent}</span>
      {text.slice(i + accent.length)}
    </>
  );
}

/** Title (+ intro) on the left, an optional "View all" style link on the right (Anti / IMG_8794 pattern).
 *  The user asked (20 Oct 2026) to drop the small labels above section titles ("VIP SERVICE", "OUR FLEET"…):
 *  `eyebrow` is accepted for compatibility but no longer rendered. */
export function SectionHeading({
  title,
  accent,
  intro,
  action,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: string;
  accent?: string;
  intro?: ReactNode;
  action?: { href: string; label: string };
  tone?: Tone;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"} ${className}`}>
      <div className={centered ? "flex max-w-[760px] flex-col items-center" : "max-w-[760px]"}>
        <Tag className={`text-[32px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[42px] ${tone === "dark" ? "text-white" : "text-[#0f1115]"}`} style={{ textWrap: "balance" }}>
          <Accent text={title} accent={accent} tone={tone} />
        </Tag>
        {intro && <div className={`mt-4 text-[16px] leading-relaxed md:text-[17px] ${tone === "dark" ? "text-white/70" : "text-[#5b6472]"}`}>{intro}</div>}
      </div>
      {action && (
        <Link href={action.href} className={`shrink-0 text-[15px] font-semibold underline decoration-[#d4b471] decoration-2 underline-offset-[6px] transition-colors ${tone === "dark" ? "text-white hover:text-[#d4b471]" : "text-[#0f1115] hover:text-[#9a7a3e]"}`}>
          {action.label} →
        </Link>
      )}
    </div>
  );
}

export type ButtonVariant = "gold" | "dark" | "outline" | "outlineLight" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANT: Record<ButtonVariant, string> = {
  gold: "bg-[#e8ba64] text-[#0f1115] hover:bg-[#dcae58]",
  dark: "bg-[#0f1115] text-white hover:bg-[#262a33]",
  outline: "border border-[#0f1115]/20 text-[#0f1115] hover:border-[#0f1115]/45 hover:bg-[#0f1115]/[0.04]",
  outlineLight: "border border-white/30 text-white hover:border-white/55 hover:bg-white/10",
  light: "bg-white text-[#0f1115] hover:bg-[#f1efe9]",
};

const SIZE: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[14px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

/** Class string for any button-like element (use with <button>, <a> or <Link>). */
export const buttonClass = (variant: ButtonVariant = "gold", size: ButtonSize = "md") =>
  `inline-flex items-center justify-center gap-2 rounded-control font-semibold transition-colors duration-150 ${VARIANT[variant]} ${SIZE[size]}`;

/** Gold, dark and light buttons with a text label get Hyperiux's Arrow Fill effect (ui/arrow-button.tsx);
 *  outline buttons and buttons with custom content stay plain links. */
export function ButtonLink({
  href,
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...rest
}: { href: string; variant?: ButtonVariant; size?: ButtonSize } & Omit<ComponentProps<typeof Link>, "href">) {
  if (typeof children === "string" && (variant === "gold" || variant === "dark" || variant === "light")) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, ...anchor } = rest as Record<string, unknown>;
    return <ArrowButton text={children.replace(/\s*→\s*$/, "")} href={href} tone={variant} size={size} className={className} {...(anchor as object)} />;
  }
  return (
    <Link href={href} className={`${buttonClass(variant, size)} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Card surfaces. Light: white with a hairline border; dark: night navy on ink. Hover only deepens the shadow. */
export const cardClass = "rounded-card border border-[#e4e1d9] bg-white transition-shadow duration-200 hover:shadow-[0_14px_36px_rgba(15,17,21,0.08)]";
export const darkCardClass = "rounded-card border border-white/10 bg-[#141b2b] text-white";

/** Small label inside cards (vehicle type, category, rating). */
export function Chip({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-control px-2.5 py-1 text-[12px] font-semibold ${tone === "dark" ? "bg-white/10 text-white" : "bg-[#f6f5f1] text-[#0f1115]"} ${className}`}>
      {children}
    </span>
  );
}

/** Square icon holder: gold tint on light backgrounds, solid gold on dark (Anti). */
export function IconBadge({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-control ${tone === "dark" ? "bg-[#e8ba64] text-[#0f1115]" : "bg-[#e8ba64]/15 text-[#9a7a3e]"} ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

/** Five stars, for review cards, in Google's own star yellow (#FBBC04; user, 21 Oct 2026: "more yellow, like the
 *  original Google stars"). The rating text stays next to it in the page's own words. */
export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#fbbc04] ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}
