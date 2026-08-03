import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogCard from "../../blog-card";
import Pagination from "../../pagination";
import { Reveal } from "../../../ui/reveal";
import {
  clusters,
  clusterBySlug,
  getPostsByCluster,
  siteUrl,
} from "../../../data/blog-posts";

const PAGE_SIZE = 12;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

function parsePageParam(value?: string) {
  const parsed = Number.parseInt(value ?? "1", 10);
  return Number.isFinite(parsed) && parsed > 1 ? parsed : 1;
}

// Only clusters that already have at least one article get a hub page, so no
// thin/empty hub is ever generated or indexed.
export function generateStaticParams() {
  return clusters
    .filter((cluster) => getPostsByCluster(cluster.id).length > 0)
    .map((cluster) => ({ slug: cluster.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cluster = clusterBySlug[slug];
  if (!cluster) {
    return {};
  }

  const { page } = await searchParams;
  const currentPage = parsePageParam(page);
  const base = `${siteUrl}/blog/category/${cluster.slug}`;
  const canonical = currentPage > 1 ? `${base}?page=${currentPage}` : base;
  const titleSuffix = currentPage > 1 ? ` — Page ${currentPage}` : "";

  return {
    title: `${cluster.title}${titleSuffix} | kokolimo`,
    description: cluster.description,
    alternates: { canonical },
    openGraph: {
      title: cluster.title,
      description: cluster.description,
      url: canonical,
      siteName: "kokolimo",
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const cluster = clusterBySlug[slug];
  if (!cluster) {
    notFound();
  }

  const posts = getPostsByCluster(cluster.id);
  if (posts.length === 0) {
    notFound();
  }

  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const currentPage = Math.min(parsePageParam(page), totalPages);
  const pagePosts = posts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: cluster.label,
        item: `${siteUrl}/blog/category/${cluster.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-20 pt-28 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="container">
        <Reveal
          className="relative overflow-hidden rounded-[36px] border border-[#E8DCCB] bg-[linear-gradient(160deg,#FBF3E5_0%,#F5E6CC_45%,#EAD6B4_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] md:p-10 xl:p-14"
          amount={0.42}
        >
          <div className="relative z-10 max-w-3xl space-y-5">
            <nav className="flex items-center gap-2 text-[13px] font-manrope-bold text-[#8A6B3B] md:text-[14px]">
              <Link href="/blog" className="hover:text-[#6D5830]">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#6D5830]">{cluster.label}</span>
            </nav>
            <h1 className="heading-2 max-w-4xl text-[#111111]">{cluster.title}</h1>
            <p className="body-text max-w-2xl !text-[#5C5C5C]">
              {cluster.description}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container pt-0">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/blog/category/${cluster.slug}`}
        />

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-2xl border border-[#E5E5E5] bg-white px-6 py-3 text-[15px] font-manrope-bold text-[#111111] transition-colors duration-200 hover:bg-[#F6F6F6]"
          >
            View all articles
          </Link>
        </div>
      </section>
    </div>
  );
}
