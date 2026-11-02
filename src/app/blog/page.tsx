// Blog index in Kokolimo's Anti blocks (inspirations/IMG_8800): a navy band hero with the H1, its text and the three
// figures laid out like Anti's hero stats; on the first page the featured article next to a navy request card (gold
// circles, gold pill button); then every article as Anti cards under the topic pills, with pill pagination, and the
// footer columns. Texts, headings, links, metadata and the ?page= behaviour unchanged.

import type { Metadata } from "next";
import { Check } from "lucide-react";

import BlogCard from "./blog-card";
import { BlogBandHero, CategoryPills } from "./blog-ui";
import Pagination from "./pagination";
import { blogPosts, featuredHomePosts, siteUrl } from "../data/blog-posts";
import Footer from "../layout/footer";
import { AntiHeading, AntiSection } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { Accent } from "../ui/kit";

const PAGE_SIZE = 12;

const blogDescription =
  "Private driver guides for the French Riviera: airport transfers, Monaco business travel, Cannes events and luxury transport in Nice and Saint-Tropez.";

const blogKeywords = [
  "private driver blog French Riviera",
  "Nice airport transfer blog",
  "chauffeur service Monaco blog",
  "Cannes transfer guide",
  "Saint-Tropez private driver blog",
];

function parsePageParam(value?: string) {
  const parsed = Number.parseInt(value ?? "1", 10);
  return Number.isFinite(parsed) && parsed > 1 ? parsed : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = parsePageParam(page);
  const canonical =
    currentPage > 1 ? `${siteUrl}/blog?page=${currentPage}` : `${siteUrl}/blog`;
  const titleSuffix = currentPage > 1 ? ` — Page ${currentPage}` : "";

  return {
    title: `Blog${titleSuffix} | Private Driver Tips for Nice, Cannes and Monaco`,
    description: blogDescription,
    keywords: blogKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: "kokolimo Blog",
      description:
        "Luxury transport advice, airport transfer guides and private driver tips for the French Riviera.",
      url: canonical,
      siteName: "kokolimo",
      type: "website",
    },
  };
}

const featuredPost = featuredHomePosts[0];
const remainingPosts = blogPosts.filter(
  (post) => post.slug !== featuredPost.slug,
);

const heroFigures = [
  { value: String(blogPosts.length), label: "Practical private driver guides" },
  { value: "4", label: "Core Riviera destinations covered" },
  { value: "3", label: "Transfer, business and leisure intents" },
];

const rideNeeds = [
  "Airport transfers from Nice",
  "Business chauffeur service in Monaco",
  "Cannes congress and event transportation",
  "Saint-Tropez private day trips",
];

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / PAGE_SIZE));
  const currentPage = Math.min(parsePageParam(page), totalPages);
  const isFirstPage = currentPage === 1;
  const pagePosts = remainingPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <>
      <BlogBandHero
        title="Private driver guides for smoother travel on the French Riviera"
        accent="French Riviera"
        intro="Explore practical advice for airport transfers, event travel, business rides and day trips across Nice, Cannes, Monaco and Saint-Tropez."
        aside={
          // Anti's hero figures: a row under the text on phones, a column beside it on desktop, thin rules between them.
          <div className="mt-10 grid max-w-[720px] grid-cols-3 md:mt-12 lg:mt-0 lg:grid-cols-1 lg:border-l lg:border-white/15 lg:pl-10">
            {heroFigures.map((figure, index) => (
              <div
                key={figure.label}
                className={`pr-3 sm:pr-8 lg:pr-0 ${index > 0 ? "border-l border-white/15 pl-4 sm:pl-8 lg:mt-5 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5" : ""}`}
              >
                <span className="block text-[30px] font-bold leading-none tracking-[-0.02em] md:text-[36px]">{figure.value}</span>
                <p className="mt-2 text-[13px] leading-snug text-white/65 md:text-[14px]">{figure.label}</p>
              </div>
            ))}
          </div>
        }
      />

      {isFirstPage && (
        <AntiSection tone="white">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <BlogCard
              post={featuredPost}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
            />

            {/* Request card: Anti's navy block with gold circles and the gold pill button. */}
            <div data-nav-tone="dark" className="flex flex-col rounded-[12px] bg-[#0d1922] p-7 text-white md:p-9">
              <h2 className="max-w-[18ch] text-[28px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[32px]" style={{ textWrap: "balance" }}>
                <Accent text="Need a private driver for your next trip on the Riviera?" accent="Riviera" tone="dark" />
              </h2>
              <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-white/70">
                Tell us your route, date and service needs and we will help you choose the right chauffeur option for your stay.
              </p>
              <ul className="mt-8 space-y-4">
                {rideNeeds.map((need) => (
                  <li key={need} className="flex items-center gap-3.5 text-[15px] font-medium text-white/90">
                    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e2b04a] text-[#0d1922]">
                      <Check size={16} strokeWidth={2.2} />
                    </span>
                    {need}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-9">
                <ArrowButton text="Request your ride" href="/contact-me" />
              </div>
            </div>
          </div>
        </AntiSection>
      )}

      <AntiSection tone="grey" labelledBy="all-articles-title">
        <AntiHeading
          id="all-articles-title"
          title="Explore airport transfers, events, business travel and private tours"
          intro="Each guide is designed to help clients understand the best options for getting around the French Riviera with comfort, timing and premium service in mind."
        />

        <CategoryPills active="all" className="mt-8" />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </AntiSection>

      <Footer withCta={false} />
    </>
  );
}
