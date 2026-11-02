// Kokolimo's page blocks, cloned from "Anti" (koko/inspirations/IMG_8800.JPG), the reference the user chose:
// white and light-grey sections, navy bands, white cards with soft shadows and inset photos, gold circle arrows,
// gold pill buttons (Hyperiux Arrow Fill), a navy split card with gold circle icons, a navy gallery, a navy footer.
// Server components: no JavaScript is shipped for them. Dark blocks declare data-nav-tone for the header.

import Image from "next/image";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Accent } from "./kit";
import ArrowButton from "./arrow-button";
import LinkArrow from "./link-arrow";

export const NAVY = "#0d1922";
export const NAVY_CARD = "#1a2a36";

export type AntiTone = "white" | "grey" | "navy";

const SECTION_BG: Record<AntiTone, string> = {
  white: "bg-white text-[#101828]",
  grey: "bg-[#f5f6f8] text-[#101828]",
  navy: "bg-[#0d1922] text-white",
};

/** Full-width section with the 1240px column (Anti's page rhythm). */
export function AntiSection({
  tone = "white",
  id,
  labelledBy,
  className = "",
  innerClassName = "",
  children,
}: {
  tone?: AntiTone;
  id?: string;
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} data-nav-tone={tone === "navy" ? "dark" : "light"} className={`${SECTION_BG[tone]} ${className}`}>
      <div className={`mx-auto max-w-[1240px] px-4 py-16 md:px-6 md:py-24 ${innerClassName}`}>{children}</div>
    </section>
  );
}

/** Anti's section heading: title (one gold accent at most) and a grey line, an optional action on the right. */
export function AntiHeading({
  title,
  accent,
  intro,
  action,
  dark = false,
  id,
  as: Tag = "h2",
}: {
  title: string;
  accent?: string;
  intro?: ReactNode;
  action?: ReactNode;
  dark?: boolean;
  id?: string;
  as?: ElementType;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[700px]">
        <Tag id={id} className={`text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px] ${dark ? "text-white" : "text-[#101828]"}`} style={{ textWrap: "balance" }}>
          <Accent text={title} accent={accent} tone={dark ? "dark" : "light"} />
        </Tag>
        {intro && <div className={`mt-3 text-[16px] leading-relaxed md:text-[17px] ${dark ? "text-white/70" : "text-[#667085]"}`}>{intro}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** "View All Vehicles →" (light sections). */
export function AntiTextLink({ href, children, dark = false }: { href: string; children: string; dark?: boolean }) {
  return (
    <LinkArrow href={href} tone={dark ? "dark" : "light"}>
      {children}
    </LinkArrow>
  );
}

/** "View Gallery →" (navy sections): outline pill. */
export function AntiOutlinePill({
  href,
  children,
  dark = true,
  external = false,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
  ariaLabel?: string;
}) {
  const cls = `inline-flex h-11 items-center gap-3 rounded-full border px-6 text-[15px] font-semibold transition-colors duration-200 ${dark ? "border-white/30 text-white hover:border-white/60 hover:bg-white/10" : "border-[#101828]/20 text-[#101828] hover:border-[#101828]/45 hover:bg-[#101828]/[0.04]"}`;
  const inner = (
    <>
      {children}
      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="transition-transform duration-500 group-hover:-rotate-45 motion-reduce:transition-none" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {inner}
    </Link>
  );
}

/** The small gold circle with an arrow in the corner of Anti's cards. Decorative: the card's link carries the text. */
export function GoldArrow({ dark = false }: { dark?: boolean }) {
  return (
    <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-200 ${dark ? "bg-[#e8ba64] text-[#0d1922]" : "bg-[#f6ecd6] text-[#101828] group-hover:bg-[#e8ba64]"}`}>
      {/* Same arrow motion as Hyperiux's Link Button: it turns -45° when the card is hovered. */}
      <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:-rotate-45 motion-reduce:transition-none" />
    </span>
  );
}

/** Anti's vehicle card: white, soft shadow, the photo inset with its own corners, text under it. */
export function AntiCard({
  href,
  image,
  imageAlt,
  imageAspect = "aspect-[16/11]",
  imageSizes = "(min-width: 1280px) 300px, (min-width: 768px) 45vw, 92vw",
  imageFit = "cover",
  imageBg = "bg-[#eef0f3]",
  badge,
  children,
  className = "",
  imageLinkLabel,
}: {
  href: string;
  image: string;
  imageAlt: string;
  imageAspect?: string;
  imageSizes?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  imageLinkLabel?: string;
}) {
  return (
    <article className={`group relative flex h-full flex-col rounded-[10px] bg-white p-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_18px_44px_rgba(16,24,40,0.12)] ${className}`}>
      <Link href={href} aria-label={imageLinkLabel} className={`relative block ${imageAspect} overflow-hidden rounded-[8px] ${imageBg}`}>
        <Image src={image} alt={imageAlt} fill sizes={imageSizes} className={imageFit === "cover" ? "object-cover" : "object-contain p-4"} />
        {badge && <span className="absolute left-3 top-3">{badge}</span>}
      </Link>
      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">{children}</div>
    </article>
  );
}

/** Small label on a card photo (Anti keeps them discreet). */
export function PhotoTag({ children, gold = false }: { children: ReactNode; gold?: boolean }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm ${gold ? "bg-[#e8ba64] text-[#0d1922]" : "bg-[#0d1922]/70 text-white"}`}>
      {children}
    </span>
  );
}

/** Small neutral chip inside a card (guests, bags…). */
export function SpecChip({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-[#f2f4f7] px-3 py-1 text-[12px] font-medium text-[#475467]">{children}</span>;
}

/** Anti's "More Than Just A Car Dealership": photo with the title on the left, gold-circle items on the right, navy. */
export function AntiSplit({
  image,
  imageAlt,
  title,
  titleId,
  intro,
  items,
}: {
  image: string;
  imageAlt: string;
  title: string;
  titleId?: string;
  intro?: ReactNode;
  items: { icon: ReactNode; title: string; text: string }[];
}) {
  return (
    <div data-nav-tone="dark" className="grid overflow-hidden rounded-[12px] bg-[#0d1922] text-white lg:grid-cols-[1.05fr_1fr]">
      <div className="relative min-h-[340px] lg:min-h-[480px]">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0.82)_0%,rgba(13,25,34,0.25)_55%,rgba(13,25,34,0.55)_100%)] lg:bg-[linear-gradient(90deg,rgba(13,25,34,0.55)_0%,rgba(13,25,34,0.15)_60%,rgba(13,25,34,1)_100%)]" />
        <div className="relative max-w-[460px] p-8 md:p-10">
          <h2 id={titleId} className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[38px]" style={{ textWrap: "balance" }}>
            {title}
          </h2>
          {intro && <div className="mt-4 text-[16px] leading-relaxed text-white/80">{intro}</div>}
        </div>
      </div>
      <ul className="flex flex-col justify-center gap-7 p-8 md:p-12">
        {items.map(it => (
          <li key={it.title} className="flex gap-4">
            <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8ba64] text-[#0d1922]">
              {it.icon}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold leading-snug">{it.title}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-white/70">{it.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Anti's dark CTA card ("Your Dream Car Is Closer Than You Think", crop 05): navy, title with one gold accent, a line
 *  of text, the gold arrow button and a round phone link, the photo fading in on the right. */
export function AntiCtaCard({
  title,
  accent,
  text,
  button,
  phone,
  image,
  imageAlt = "",
  titleAs: Tag = "h2",
  children,
}: {
  title: string;
  accent?: string;
  text?: ReactNode;
  button?: { text: string; href: string };
  phone?: { href: string; display: string; label?: string };
  image: string;
  imageAlt?: string;
  titleAs?: ElementType;
  children?: ReactNode;
}) {
  return (
    <div data-nav-tone="dark" className="relative isolate overflow-hidden rounded-[12px] bg-[#0d1922] text-white">
      <div className="absolute inset-0 -z-10 md:left-auto md:w-[62%]">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 780px, 100vw" className="object-cover object-right" />
        <div className="absolute inset-0 bg-[rgba(13,25,34,0.72)] md:bg-[linear-gradient(90deg,#0d1922_0%,rgba(13,25,34,0.55)_30%,rgba(13,25,34,0)_65%)]" />
      </div>
      <div className="max-w-[600px] p-8 md:p-12">
        <Tag className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
          <Accent text={title} accent={accent} tone="dark" />
        </Tag>
        {text && <div className="mt-4 text-[16px] leading-relaxed text-white/75">{text}</div>}
        {children}
        {(button || phone) && (
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {button && <ArrowButton text={button.text} href={button.href} />}
            {phone && (
              <a href={phone.href} className="group flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-[#d4b471] group-hover:text-[#d4b471]">
                  <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] text-white/60">{phone.label ?? "Call Us"}</span>
                  <span className="block text-[15px] font-semibold">{phone.display}</span>
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/** Anti's testimonial card: initials avatar, quote, name and context, a badge on the right. */
export function AntiTestimonial({
  quote,
  author,
  context,
  badge,
  label,
}: {
  quote: string;
  author: string;
  context: string;
  badge?: ReactNode;
  label?: ReactNode;
}) {
  const initials = author
    .split(/\s+/)
    .filter(w => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map(w => w[0]!.toUpperCase())
    .join("");
  return (
    <article className="flex h-full flex-col rounded-[10px] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]">
      <div className="flex items-center justify-between gap-3">
        <span aria-hidden="true" className="grid h-14 w-14 place-items-center rounded-full bg-[#0d1922] text-[16px] font-semibold tracking-[0.04em] text-[#d4b471]">
          {initials}
        </span>
        {label}
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-[#344054]">
        <span aria-hidden="true">&ldquo;</span>
        {quote}
        <span aria-hidden="true">&rdquo;</span>
      </p>
      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
        <div>
          <p className="text-[15px] font-semibold text-[#101828]">{author}</p>
          <p className="mt-0.5 text-[13px] text-[#667085]">{context}</p>
        </div>
        {badge}
      </div>
    </article>
  );
}
