// Kokolimo's vehicle card, copied from IMG_8794's "Popular Electric Models" cards (user, 21 Oct 2026: "do the same as
// IMG_8794 ... stick to it"): the photo across the top of a white card, the name and one grey line, a row of three facts
// with line icons (the value above, its grey label under it), and a full-width button (Hyperiux Arrow Fill, outline
// tone). With `href`, the name's link covers the card so the whole card opens; the button stays its own link above it.
// No badge on the photo: the user removed the type badges, and nothing supports "Best Seller"-style claims.

import Image from "next/image";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import ArrowButton from "./arrow-button";

export type ModelSpec = { icon: ReactNode; value: ReactNode; label: string };

export default function ModelCard({
  href,
  image,
  imageAlt,
  imageSizes = "(min-width: 1280px) 300px, (min-width: 768px) 46vw, 92vw",
  imagePosition = "object-center",
  name,
  line,
  specs,
  button,
  as: Tag = "h3",
}: {
  href?: string;
  image: string;
  imageAlt: string;
  imageSizes?: string;
  imagePosition?: string;
  name: string;
  line: ReactNode;
  specs: ModelSpec[];
  button: { text: string; href: string; ariaLabel?: string };
  as?: ElementType;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05),0_8px_24px_rgba(16,24,40,0.06)] ring-1 ring-[#eaecf0] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_18px_44px_rgba(16,24,40,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1922]">
        <Image src={image} alt={imageAlt} fill sizes={imageSizes} className={`object-cover ${imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none`} />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <Tag className="text-[18px] font-semibold tracking-[-0.01em] text-[#101828]">
          {href ? (
            <Link
              href={href}
              className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#9a7a3e] focus-visible:outline-none focus-visible:after:rounded-[12px] focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#e8ba64]"
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </Tag>
        <p className="mt-1 text-[13px] text-[#667085]">{line}</p>
        <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-[#f2f4f7] pt-4">
          {specs.map(s => (
            <div key={s.label} className="flex min-w-0 items-start gap-2">
              <span aria-hidden="true" className="mt-px shrink-0 text-[#98a2b3]">
                {s.icon}
              </span>
              {/* The label comes first for screen readers ("Guests 7"); the value shows above it. */}
              <div className="flex min-w-0 flex-col-reverse">
                <dt className="mt-1.5 truncate text-[12px] leading-none text-[#98a2b3]">{s.label}</dt>
                <dd className="text-[15px] font-semibold leading-none text-[#101828]">{s.value}</dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="relative z-10 mt-auto pt-5">
          <ArrowButton text={button.text} href={button.href} tone="outline" size="sm" full aria-label={button.ariaLabel} />
        </div>
      </div>
    </article>
  );
}
