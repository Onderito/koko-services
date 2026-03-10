import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogCard from "../blog-card";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
  siteUrl,
} from "../../data/blog-posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
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

  return {
    title: `${post.title} | Koko Limo`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Koko Limo",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.imageUrl,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.imageUrl}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Koko Limo",
    },
    publisher: {
      "@type": "Organization",
      name: "Koko Limo",
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] pb-20 pt-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <article>
        <section className="container">
          <div className="overflow-hidden rounded-[36px] border border-[#E5E5E5] bg-white shadow-sm">
            <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/75" />
              <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 text-white md:min-h-[560px] md:p-10 xl:p-14">
                <Link
                  href="/blog"
                  className="mb-5 inline-flex w-fit rounded-full bg-white/12 px-4 py-2 text-[14px] font-manrope-bold backdrop-blur-sm"
                >
                  Back to blog
                </Link>
                <span className="inline-flex w-fit rounded-full bg-white/12 px-4 py-2 text-[14px] font-manrope-bold backdrop-blur-sm">
                  {post.heroKicker}
                </span>
                <h1 className="mt-5 max-w-4xl text-[34px] font-manrope-bold leading-tight md:text-[52px] lg:text-[60px]">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-gray-100 md:text-[20px]">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px] text-gray-200 md:text-[15px]">
                  <span>{post.readTime}</span>
                  <span>{formatBlogDate(post.publishedAt)}</span>
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-0">
          <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
            <aside className="h-fit rounded-[28px] border border-[#E5E5E5] bg-white p-6 shadow-sm xl:sticky xl:top-28">
              <h2 className="text-[18px] font-manrope-bold text-[#404040]">
                Table of contents
              </h2>
              <nav className="mt-5 space-y-3">
                {post.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-[15px] leading-relaxed text-gray-600 transition-colors duration-300 hover:text-[#404040]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-[24px] bg-[#404040] p-5 text-white">
                <p className="text-[18px] font-manrope-bold">{post.ctaTitle}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-200">
                  {post.ctaDescription}
                </p>
                <Link
                  href={post.ctaHref}
                  className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-[14px] font-manrope-bold text-[#404040]"
                >
                  {post.ctaLabel}
                </Link>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="rounded-[28px] border border-[#E5E5E5] bg-white p-7 shadow-sm md:p-10">
                <p className="text-[18px] leading-relaxed text-gray-700 md:text-[20px]">
                  {post.intro}
                </p>
              </div>

              {post.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-[28px] border border-[#E5E5E5] bg-white p-7 shadow-sm md:p-10"
                >
                  <h2 className="text-[28px] font-manrope-bold leading-tight text-[#404040]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-gray-700 md:text-[18px]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3 rounded-[24px] bg-[#F6F6F6] p-6 text-[15px] text-gray-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-[#404040]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="rounded-[28px] border border-[#E5E5E5] bg-white p-7 shadow-sm md:p-10">
                <h2 className="text-[28px] font-manrope-bold text-[#404040]">
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-4">
                  {post.faq.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-[22px] border border-[#EAEAEA] bg-[#FAFAFA] p-5"
                    >
                      <h3 className="text-[18px] font-manrope-bold text-[#404040]">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="container pt-0">
          <div className="rounded-[32px] border border-[#E5E5E5] bg-[#404040] p-8 text-white shadow-sm md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[14px] font-manrope-bold uppercase tracking-[0.14em] text-gray-300">
                  Tailored quote
                </span>
                <h2 className="mt-3 text-[30px] font-manrope-bold leading-tight">
                  Ready to book your private driver on the French Riviera?
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-200">
                  Tell us your route, dates and preferred service and we will
                  recommend the right vehicle and booking format for your stay.
                </p>
              </div>
              <Link
                href="/contact-me"
                className="inline-flex w-fit rounded-2xl bg-white px-6 py-3 text-[15px] font-manrope-bold text-[#404040]"
              >
                Request your ride
              </Link>
            </div>
          </div>
        </section>

        <section className="container pt-0">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[14px] font-manrope-bold uppercase tracking-[0.14em] text-gray-500">
                Related reading
              </span>
              <h2 className="mt-2 text-[34px] font-manrope-bold text-[#404040]">
                Continue planning your Riviera journey
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[15px] font-manrope-bold text-[#404040] underline underline-offset-4"
            >
              View all articles
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
