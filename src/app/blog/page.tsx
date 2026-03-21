import Link from "next/link";
import type { Metadata } from "next";

import BlogCard from "./blog-card";
import { blogPosts, featuredHomePosts, siteUrl } from "../data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Private Driver Tips for Nice, Cannes and Monaco",
  description:
    "Read My Riviera articles about airport transfers, private driver services, Monaco business travel, Cannes events and luxury transport on the French Riviera.",
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
    title: "My Riviera Blog",
    description:
      "Luxury transport advice, airport transfer guides and private driver tips for the French Riviera.",
    url: `${siteUrl}/blog`,
    siteName: "My Riviera",
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
        <div className="rounded-[36px] border border-[#E5E5E5] bg-white p-6 shadow-sm md:p-10 xl:p-14">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex w-fit rounded-full bg-[#F2F2F2] px-4 py-2 text-[14px] font-manrope-bold text-[#404040]">
              French Riviera blog
            </span>
            <h1 className="heading-2 max-w-4xl text-[#404040]">
              Private driver guides for smoother travel on the French Riviera
            </h1>
            <p className="body-text max-w-2xl">
              Explore practical advice for airport transfers, event travel,
              business rides and day trips across Nice, Cannes, Monaco and
              Saint-Tropez.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] bg-[#F6F6F6] p-5">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                {blogPosts.length}
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Practical private driver guides
              </p>
            </div>
            <div className="rounded-[24px] bg-[#F6F6F6] p-5">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                4
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Core Riviera destinations covered
              </p>
            </div>
            <div className="rounded-[24px] bg-[#F6F6F6] p-5">
              <span className="text-[34px] font-manrope-bold text-[#404040]">
                3
              </span>
              <p className="mt-2 text-[15px] text-gray-600">
                Transfer, business and leisure intents
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <BlogCard post={featuredPost} priority />

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
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-[15px] font-manrope-bold text-[#404040] transition-transform duration-300 hover:scale-[1.02]"
            >
              Request your ride
            </Link>
          </div>
        </div>
      </section>

      <section className="container pt-0">
        <div className="mb-8 flex flex-col gap-4">
          <div>
            <span className="text-[14px] font-manrope-bold uppercase tracking-[0.14em] text-gray-500">
              All articles
            </span>
            <h2 className="mt-2 text-[34px] font-manrope-bold text-[#404040]">
              Explore airport transfers, events, business travel and private
              tours
            </h2>
          </div>
          <p className="max-w-[46rem] text-[15px] leading-relaxed text-gray-600">
            Each guide is designed to help clients understand the best options
            for getting around the French Riviera with comfort, timing and
            premium service in mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {remainingPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
