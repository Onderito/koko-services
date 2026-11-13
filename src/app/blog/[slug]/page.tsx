// Blog article in Kokolimo's Anti blocks (inspirations/IMG_8800):
// - a dark photo hero with the header inside it (the article photo, or Anti's gallery mosaic for the two legacy tours
//   that carry several photos), "Back to blog", the H1, its text and the meta line (kicker pill, read time, date,
//   category pill; the kicker no longer sits above the title);
// - the article in one readable column, with a sticky table of contents card and the navy request card beside it;
// - the questions as white cards that open (native <details>, answers in the HTML), Anti's dark CTA card, the related
//   articles as Anti cards, then the footer columns.
// Texts, headings and their levels, links, alts, ids, metadata and both JSON-LD blocks unchanged.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import BlogCard from "../blog-card";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
  type BlogFaq,
  type BlogPost,
} from "../../data/blog-posts";
import Footer from "../../layout/footer";
import { AntiHeading, AntiSection, AntiTextLink, GoldArrow } from "../../ui/anti";
import FaqList from "../../ui/faq-list";
import ArrowButton from "../../ui/arrow-button";
// Metadata and JSON-LD live in ../post-seo.tsx, shared with the posts that have their own route (landing posts).
import { PostSchemas, postMetadata } from "../post-seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// **Marked** words in an article's intro and paragraphs show in bold, as on the Cannes post (user, 13 Nov 2026). Text
// without a marker is returned as it is, so every other article renders exactly as before.
function withBold(text: string) {
  if (!text.includes("**")) return text;
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-[#101828]">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export async function generateStaticParams() {
  // Posts rendered with the service-page layout have their own route (blog/<slug>/page.tsx).
  return blogPosts.filter((post) => !post.landing).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return postMetadata(post);
}

const cardShadow = "shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]";
const pageTop = "pt-[calc(var(--header-h)+3.5rem)] lg:pt-[calc(var(--header-h)+4.5rem)]";
const anchorOffset = "scroll-mt-[calc(var(--header-h)+1.5rem)]";

/** "Back to blog", the H1, the post text and the meta line, on the dark hero. */
function HeroText({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <>
      <Link
        href="/blog"
        className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-white/75 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Back to blog
      </Link>
      <div className="mt-10">
        <h1
          className={`max-w-[820px] text-[36px] font-bold leading-[1.06] tracking-[-0.025em] sm:text-[46px] ${compact ? "lg:text-[50px]" : "lg:text-[56px]"}`}
          style={{ textWrap: "balance" }}
        >
          {post.title}
        </h1>
        <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">
          {post.description}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-white/75 md:text-[15px]">
          <span className="rounded-full bg-[#e2b04a] px-3.5 py-1.5 text-[13px] font-semibold text-[#0d1922]">
            {post.heroKicker}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={16} strokeWidth={1.8} className="text-[#e2b04a]" aria-hidden="true" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} strokeWidth={1.8} className="text-[#e2b04a]" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          </span>
          <span className="rounded-full border border-white/25 px-3.5 py-1 text-[13px] font-semibold text-white">
            {post.category}
          </span>
        </div>
        {post.bookingCta ? (
          // "Get a quote" goes to the home booking bar with its glide and veil (scroll-motion.tsx catches /#book).
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ArrowButton text="Get a quote" href="/#book" />
            <Link
              href={post.ctaHref}
              className="text-[15px] font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {post.ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

/** The quote card placed after the post's chosen section (bookingCta), to the home booking bar. */
function BookingCard({ post }: { post: BlogPost }) {
  return (
    <div data-nav-tone="dark" className="mt-10 rounded-[12px] bg-[#0d1922] p-6 text-white md:p-8">
      <p className="text-[22px] font-bold leading-snug tracking-[-0.01em] md:text-[24px]">Get your fixed quote</p>
      <p className="mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-white/75">
        Tell us the date, the pick-up and the drop-off: your fixed fare is confirmed before the ride, with one hour of
        waiting included for airport arrivals and free cancellation until five days before.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ArrowButton text="Get a quote" href="/#book" />
        <Link
          href={post.ctaHref}
          className="text-[15px] font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          {post.ctaLabel}
        </Link>
      </div>
    </div>
  );
}

/** Anti's hero: the article photo full-bleed behind a navy fade, the text on the left, no empty band. */
function PostHero({ post }: { post: BlogPost }) {
  const gallery = post.heroImages ?? [];

  if (gallery.length > 0) {
    // Several photos: Anti's "Moments That Move Us" mosaic on the right of a navy hero.
    const three = gallery.length === 3;
    return (
      <section data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1922] text-white">
        <div className={`mx-auto grid max-w-[1240px] gap-10 px-4 pb-12 md:px-6 md:pb-16 lg:grid-cols-2 lg:items-end lg:gap-14 ${pageTop}`}>
          <div className="flex flex-col">
            <HeroText post={post} compact />
          </div>
          <div className={`grid h-[300px] grid-cols-2 gap-2 sm:h-[380px] lg:h-[440px] ${three ? "grid-rows-2" : "auto-rows-fr"}`}>
            {gallery.map((img, index) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-[8px] bg-[#1a2a36] ${three && index === 0 ? "row-span-2" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(min-width: 1024px) 300px, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-hero-tone="dark" data-nav-tone="dark" className="relative isolate bg-[#0d1922] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0.5)_0%,rgba(13,25,34,0.72)_55%,rgba(13,25,34,0.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(13,25,34,0.92)_0%,rgba(13,25,34,0.72)_38%,rgba(13,25,34,0.18)_70%,rgba(13,25,34,0.05)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-[#0d1922]/80 to-transparent lg:block" />
      </div>
      <div className={`mx-auto flex min-h-[520px] max-w-[1240px] flex-col justify-between px-4 pb-10 md:px-6 md:pb-14 lg:min-h-[560px] ${pageTop}`}>
        <HeroText post={post} />
      </div>
    </section>
  );
}

/** Questions with the home page's animated FAQ (Hyperiux, user, 21 Oct 2026): the question stays an h3, the answer
 *  stays in the HTML. */
function FaqCards({ items }: { items: BlogFaq[] }) {
  return <FaqList items={items.map(item => ({ question: item.question, answer: <p>{item.answer}</p> }))} />;
}

/** Anti's dark CTA card: navy, rounded, the title with one gold accent, text and the gold pill; a photo fades in on the right. */
function CtaCard() {
  return (
    <section data-nav-tone="light" aria-labelledby="post-cta-title" className="bg-white text-[#101828]">
      <div className="mx-auto max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <div data-nav-tone="dark" className="relative overflow-hidden rounded-[12px] bg-[#0d1922] text-white md:min-h-[340px]">
          <div className="relative z-10 p-8 md:max-w-[58%] md:p-12">
            <h2
              id="post-cta-title"
              className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[38px]"
              style={{ textWrap: "balance" }}
            >
              Ready to book your private driver on the <span className="text-[#e2b04a]">French Riviera</span>?
            </h2>
            <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-white/75">
              Tell us your route, dates and preferred service and we will recommend the right vehicle and booking format for your stay.
            </p>
            <div className="mt-8">
              <ArrowButton text="Request your ride" href="/contact-me" />
            </div>
          </div>
          <div aria-hidden="true" className="relative h-52 sm:h-64 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[55%]">
            <Image
              src="/assets/images/services/long-distance.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw"
              className="object-cover object-[50%_62%]"
            />
            <div className="absolute -inset-px bg-[linear-gradient(180deg,#0d1922_0%,rgba(13,25,34,0.35)_45%,rgba(13,25,34,0.1)_100%)] md:bg-[linear-gradient(90deg,#0d1922_0%,rgba(13,25,34,0.6)_28%,rgba(13,25,34,0.05)_70%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  // Landing posts are served by their own route; this one renders articles only.
  if (post.landing) notFound();

  return (
    <>
      <PostSchemas post={post} />

      <article>
        <PostHero post={post} />

        <AntiSection tone="white">
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[300px_minmax(0,760px)] xl:justify-between">
            {/* The contents card stays in view while reading; the request card closes the column at the end. */}
            <aside className="flex flex-col gap-6">
              <div className="lg:flex-1">
                <div className={`rounded-[10px] bg-white p-6 ${cardShadow} lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]`}>
                  <h2 className="text-[17px] font-semibold text-[#101828]">
                    Table of contents
                  </h2>
                  <nav aria-label="Table of contents" className="mt-3">
                    <ul className="divide-y divide-[#eaecf0]">
                      {post.sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="block py-2.5 text-[14.5px] leading-snug text-[#475467] transition-colors duration-200 hover:text-[#a97c25]"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              <div data-nav-tone="dark" className="rounded-[12px] bg-[#0d1922] p-6 text-white">
                <p className="text-[18px] font-semibold leading-snug tracking-[-0.01em]">{post.ctaTitle}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                  {post.ctaDescription}
                </p>
                <Link
                  href={post.ctaHref}
                  className="group mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[15px] font-semibold text-white transition-colors hover:text-[#e2b04a]"
                >
                  {post.ctaLabel}
                  <GoldArrow dark />
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              <p className="text-[18px] leading-[1.7] text-[#344054] md:text-[20px]">
                {withBold(post.intro)}
              </p>

              {post.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`mt-12 border-t border-[#eaecf0] pt-10 md:mt-14 md:pt-12 ${anchorOffset}`}
                >
                  <h2 className="text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-[#101828] md:text-[30px]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-[#475467]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{withBold(paragraph)}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-7 space-y-3 rounded-[10px] bg-[#f5f6f8] p-6 text-[16px] leading-relaxed text-[#344054] md:p-7">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#e2b04a]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {post.bookingCta?.afterSection === section.id ? <BookingCard post={post} /> : null}
                </section>
              ))}
              {/* And once more at the end of the article (user, 12 Nov 2026), unless the chosen section is the last one. */}
              {post.bookingCta && post.sections.at(-1)?.id !== post.bookingCta.afterSection ? (
                <div className="mt-12 border-t border-[#eaecf0] pt-2 md:mt-14">
                  <BookingCard post={post} />
                </div>
              ) : null}
            </div>
          </div>
        </AntiSection>

        <AntiSection tone="grey" labelledBy="post-faq-title">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <AntiHeading id="post-faq-title" title="Frequently asked questions" />
            </div>
            <FaqCards items={post.faq} />
          </div>
        </AntiSection>

        <CtaCard />

        <AntiSection tone="grey" labelledBy="post-related-title">
          <AntiHeading
            id="post-related-title"
            title="Continue planning your Riviera journey"
            action={<AntiTextLink href="/blog">View all articles</AntiTextLink>}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </AntiSection>
      </article>

      <Footer withCta={false} />
    </>
  );
}
