import Link from "next/link";
import type { Metadata } from "next";

import BlogCard from "./blog-card";
import { blogPosts, featuredHomePosts, siteUrl } from "../data/blog-posts";
import { Reveal } from "../ui/reveal";

export const metadata: Metadata = {
  title: "Blog | Private Driver Tips for Nice, Cannes and Monaco",
  description:
    "Read viplimonice articles about airport transfers, private driver services, Monaco business travel, Cannes events and luxury transport on the French Riviera.",
  keywords: [
    "private driver blog French Riviera",
    "Nice airport transfer blog",
    "chauffeur service Monaco blog",
    "Cannes transfer guide",
    "Saint-Tropez private driver blog",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "viplimonice Blog",
    description:
      "Luxury transport advice, airport transfer guides and private driver tips for the French Riviera.",
    url: `${siteUrl}/blog`,
    siteName: "viplimonice",
    type: "website",
  },
};

const featuredPost = featuredHomePosts[0];
const remainingPosts = blogPosts.filter(
  (post) => post.slug !== featuredPost.slug,
);

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-20 pt-28 md:pt-32">
      <section className="container">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-[#E8DCCB] bg-[linear-gradient(160deg,#FBF3E5_0%,#F5E6CC_45%,#EAD6B4_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] md:p-10 xl:p-14" amount={0.42}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(232,217,196,0.75)_0%,rgba(232,217,196,0)_65%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(198,164,112,0.35)_0%,rgba(198,164,112,0)_65%)] blur-3xl"
          />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-8 h-[340px] w-[340px] text-[#C9A874] opacity-[0.18]"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 40 260 Q 120 160, 220 220 T 380 140"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 20 320 Q 140 220, 240 290 T 400 220"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="320" cy="120" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="320" cy="120" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="inline-flex w-fit rounded-full border border-[#E3D3BC] bg-white/85 px-4 py-2 text-[14px] font-manrope-bold text-[#6D5830] shadow-[0_10px_24px_rgba(135,108,61,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm">
              French Riviera blog
            </span>
            <h1 className="heading-2 max-w-4xl text-[#1F1F1F]">
              Private driver guides for smoother travel on the French Riviera
            </h1>
            <p className="body-text max-w-2xl !text-[#5C5C5C]">
              Explore practical advice for airport transfers, event travel,
              business rides and day trips across Nice, Cannes, Monaco and
              Saint-Tropez.
            </p>
          </div>

          <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#E9DECF] bg-white/80 p-5 backdrop-blur-sm shadow-[0_8px_20px_rgba(135,108,61,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                {blogPosts.length}
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Practical private driver guides
              </p>
            </div>
            <div className="rounded-[24px] border border-[#E9DECF] bg-white/80 p-5 backdrop-blur-sm shadow-[0_8px_20px_rgba(135,108,61,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                4
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Core Riviera destinations covered
              </p>
            </div>
            <div className="rounded-[24px] border border-[#E9DECF] bg-white/80 p-5 backdrop-blur-sm shadow-[0_8px_20px_rgba(135,108,61,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                3
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Transfer, business and leisure intents
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container pt-0">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <BlogCard
            post={featuredPost}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
          />

          <div className="rounded-[28px] border border-[#E5E5E5] bg-[#404040] p-7 text-white shadow-sm md:p-8">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[13px] font-manrope-bold uppercase tracking-[0.12em]">
              Plan your ride
            </span>
            <h2 className="mt-4 max-w-[16ch] text-[28px] font-manrope-bold leading-tight md:text-[32px]">
              Need a private driver for your next trip on the Riviera?
            </h2>
            <p className="mt-4 max-w-[34ch] text-[13px] leading-6 text-gray-300 md:text-[14px]">
              Tell us your route, date and service needs and we will help you
              choose the right chauffeur option for your stay.
            </p>
            <div className="mt-8 space-y-3 text-[15px] text-gray-200">
              <p>Airport transfers from Nice</p>
              <p>Business chauffeur service in Monaco</p>
              <p>Cannes congress and event transportation</p>
              <p>Saint-Tropez private day trips</p>
            </div>
            <Link
              href="/contact-me"
              className="mt-8 inline-flex rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 text-[15px] font-manrope-bold text-[#111111] transition-transform duration-300 hover:scale-[1.02]"
            >
              Request your ride
            </Link>
          </div>
        </div>
      </section>

      <section className="container pt-0">
        <Reveal className="mb-8 md:mb-10 space-y-4" amount={0.2}>
          <span className="block text-[12px] md:text-[14px] font-manrope-bold uppercase tracking-[0.14em] text-[#8A6B3B]">
            All articles
          </span>
          <h2 className="text-[24px] leading-[1.15] tracking-[-0.5px] md:text-[34px] md:leading-[1.08] md:tracking-[-1px] xl:text-[42px] xl:leading-[1.04] xl:tracking-[-1.4px] font-manrope-bold text-[#404040] max-w-[22ch]">
            Explore airport transfers, events, business travel and private
            tours
          </h2>
          <p className="max-w-[46rem] text-[14px] md:text-[15px] leading-relaxed text-gray-600">
            Each guide is designed to help clients understand the best options
            for getting around the French Riviera with comfort, timing and
            premium service in mind.
          </p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {remainingPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
