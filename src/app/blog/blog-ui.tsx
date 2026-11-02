// Blog blocks in Kokolimo's Anti language (inspirations/IMG_8800), shared by /blog and /blog/category/<slug>:
// the navy band hero (no photo: the header sits inside it, H1 and text on the left) and the topic pills, styled like
// the pricing chips ("All / Sedan / SUV" in Anti: the active one a gold pill, the others plain).
// Server components: they ship no JavaScript.

import Link from "next/link";
import type { ReactNode } from "react";

import { clusters, getPostsByCluster } from "../data/blog-posts";
import { Accent } from "../ui/kit";

/** Navy band hero for pages without a photo. `before` renders above the H1 (breadcrumb); `aside` sits under the text on
 *  phones and in a right-hand column on desktop, level with the bottom of the text, so the band stays short. */
export function BlogBandHero({
  title,
  accent,
  intro,
  before,
  aside,
}: {
  title: string;
  accent?: string;
  intro: ReactNode;
  before?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1922] text-white">
      <div
        className={`mx-auto max-w-[1240px] px-4 pb-12 pt-[calc(var(--header-h)+3.5rem)] md:px-6 md:pb-16 lg:pt-[calc(var(--header-h)+4.5rem)] ${
          aside ? "lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-16" : ""
        }`}
      >
        <div>
          {before}
          <h1 className="max-w-[860px] text-[38px] font-bold leading-[1.06] tracking-[-0.025em] sm:text-[50px] lg:text-[60px]" style={{ textWrap: "balance" }}>
            <Accent text={title} accent={accent} tone="dark" />
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/75 md:text-[18px]">{intro}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}

/** Topic pills: "All articles" then every hub that has articles. `active` is "all" or the hub's slug. */
export function CategoryPills({ active, className = "" }: { active: string; className?: string }) {
  const items = [
    { key: "all", href: "/blog", label: "All articles" },
    ...clusters
      .filter(cluster => getPostsByCluster(cluster.id).length > 0)
      .map(cluster => ({ key: cluster.slug, href: `/blog/category/${cluster.slug}`, label: cluster.label })),
  ];

  return (
    <nav aria-label="Blog categories" className={className}>
      <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map(item => {
          const isActive = item.key === active;
          return (
            <li key={item.key} className="shrink-0">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b04a] ${
                  isActive ? "bg-[#e2b04a] text-[#0d1922]" : "bg-white text-[#475467] shadow-[0_1px_2px_rgba(16,24,40,0.06)] hover:text-[#101828]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
