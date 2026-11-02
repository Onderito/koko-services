// Banners in the manner of IMG_8794 (user, 21 Oct 2026: "the banners on it I love them as well ... get inspired by it
// like we did for 8800"), in Kokolimo's colours and with photos in the art direction of the S-Class banner (dusk on
// the Riviera, navy-teal shadows, a warm amber glow): the photo fills the banner and fades into navy on the left, where
// the text sits. On phones the photo is a band at the top fading into the navy, the text under it.
// - CtaBanner: IMG_8794's "Find Your Perfect EV Today" (eyebrow, title, one line, buttons).
// - StatsBanner: IMG_8794's "Your Trusted EV Partner" (title and button on the left, a translucent panel of facts with
//   gold-circle icons on the right).
// Server components: no JavaScript is shipped for them.

import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import { Accent } from "./kit";
import ArrowButton from "./arrow-button";

const EYEBROW = "text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d4b471]";

export function CtaBanner({
  eyebrow,
  title,
  accent,
  text,
  button,
  secondary,
  image,
  imageAlt = "",
  imagePosition = "object-[60%_55%]",
  titleAs: Tag = "h2",
  titleId,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  text?: ReactNode;
  button?: { text: string; href: string };
  secondary?: ReactNode;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  titleAs?: ElementType;
  titleId?: string;
}) {
  return (
    <div data-nav-tone="dark" className="relative isolate overflow-hidden rounded-[14px] bg-[#0d1922] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[230px] sm:h-[290px] md:inset-0 md:h-auto">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1280px) 1240px, 100vw" className={`object-cover ${imagePosition}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0.05)_0%,rgba(13,25,34,0.35)_55%,#0d1922_100%)] md:bg-[linear-gradient(90deg,#0d1922_0%,rgba(13,25,34,0.9)_28%,rgba(13,25,34,0.4)_55%,rgba(13,25,34,0)_80%)]" />
      </div>
      <div className="relative max-w-[580px] px-6 pb-9 pt-[205px] sm:pt-[265px] md:px-12 md:py-14 lg:py-16">
        {eyebrow && <p className={EYEBROW}>{eyebrow}</p>}
        <Tag id={titleId} className={`${eyebrow ? "mt-3" : ""} text-[30px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[42px]`} style={{ textWrap: "balance" }}>
          <Accent text={title} accent={accent} tone="dark" />
        </Tag>
        {text && <div className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/75 md:text-[16px]">{text}</div>}
        {(button || secondary) && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {button && <ArrowButton text={button.text} href={button.href} />}
            {secondary}
          </div>
        )}
      </div>
    </div>
  );
}

export type BannerStat = { icon: ReactNode; figure: ReactNode; label: string; text?: string };

export function StatsBanner({
  eyebrow,
  title,
  titleId,
  accent,
  text,
  button,
  image,
  imageAlt,
  imageMirror = false,
  stats,
}: {
  eyebrow?: string;
  title: string;
  titleId?: string;
  accent?: string;
  text?: ReactNode;
  button?: { text: string; href: string };
  image: string;
  imageAlt: string;
  /** Mirror the photo, so its subject (the road, the car) shows between the title and the panel. */
  imageMirror?: boolean;
  stats: BannerStat[];
}) {
  return (
    <div data-nav-tone="dark" className="relative isolate overflow-hidden rounded-[14px] bg-[#0d1922] text-white">
      {/* Desktop: the photo runs past the banner's right edge (under the panel), so the car on the road shows between
          the title and the panel. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[260px] sm:h-[320px] lg:inset-y-0 lg:left-0 lg:-right-1/2 lg:h-auto">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 1860px, 100vw" className={`object-cover object-[50%_40%] ${imageMirror ? "-scale-x-100" : ""}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0.05)_0%,rgba(13,25,34,0.4)_55%,#0d1922_100%)] lg:bg-[linear-gradient(90deg,rgba(13,25,34,0.92)_0%,rgba(13,25,34,0.78)_17%,rgba(13,25,34,0.2)_27%,rgba(13,25,34,0)_32%)]" />
      </div>
      {/* The facts panel is flush with the banner's right, top and bottom edges (user, 21 Oct 2026). */}
      <div className="grid gap-8 px-6 pt-[225px] sm:pt-[285px] lg:min-h-[480px] lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-10 lg:p-0 lg:pl-12">
        <div className="flex flex-col justify-center lg:py-12">
          {eyebrow && <p className={EYEBROW}>{eyebrow}</p>}
          <h2 id={titleId} className={`${eyebrow ? "mt-3" : ""} max-w-[420px] text-[32px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[42px]`} style={{ textWrap: "balance" }}>
            <Accent text={title} accent={accent} tone="dark" />
          </h2>
          {text && <div className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/75 md:text-[16px]">{text}</div>}
          {button && (
            <div className="mt-8">
              <ArrowButton text={button.text} href={button.href} />
            </div>
          )}
        </div>
        <ul className="-mx-6 grid content-center gap-x-6 gap-y-6 border-t border-white/10 bg-[#0d1922]/85 p-6 backdrop-blur-md sm:grid-cols-2 md:p-8 lg:mx-0 lg:border-l lg:border-t-0 lg:px-9">
          {stats.map(s => (
            <li key={s.label} className="flex gap-4">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8ba64]/15 text-[#e8ba64] ring-1 ring-[#e8ba64]/30">
                {s.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug text-white">
                  <span className="flex h-[30px] items-center text-[26px] font-bold leading-none tracking-[-0.02em]">{s.figure}</span>{" "}
                  <span className="mt-1.5 block">{s.label}</span>
                </h3>
                {s.text && <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{s.text}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
