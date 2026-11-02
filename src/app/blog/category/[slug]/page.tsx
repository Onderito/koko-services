// Blog topic hub in Kokolimo's Anti blocks (inspirations/IMG_8800): a navy band hero with the breadcrumb, the H1 and
// its text; then the hub's articles as Anti cards under the topic pills (this hub's pill gold), pill pagination, the
// "View all articles" outline pill and the footer columns. Texts, headings, links, metadata and schema unchanged.

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogCard from "../../blog-card";
import { BlogBandHero, CategoryPills } from "../../blog-ui";
import Pagination from "../../pagination";
import {
  clusters,
  clusterBySlug,
  getPostsByCluster,
  siteUrl,
} from "../../../data/blog-posts";
import Footer from "../../../layout/footer";
import { AntiOutlinePill, AntiSection } from "../../../ui/anti";

const PAGE_SIZE = 12;

// The one word group shown in gold in each hub's H1 (the text itself never changes).
const titleAccent: Record<string, string> = {
  "airport-transfers": "Airport Transfers",
  destinations: "French Riviera",
  "yacht-transfers": "Yacht & Marina",
  events: "Luxury Event",
  "luxury-hotels": "Luxury Hotel",
  "travel-guides": "French Riviera",
  "chauffeur-services": "Chauffeur Service",
};

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <BlogBandHero
        before={
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[14px] text-white/60">
            <Link href="/blog" className="font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">{cluster.label}</span>
          </nav>
        }
        title={cluster.title}
        accent={titleAccent[cluster.slug]}
        intro={cluster.description}
      />

      <AntiSection tone="grey">
        <CategoryPills active={cluster.slug} />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/blog/category/${cluster.slug}`}
        />

        <div className="mt-12 flex justify-center">
          <AntiOutlinePill href="/blog" dark={false}>
            View all articles
          </AntiOutlinePill>
        </div>
      </AntiSection>

      <Footer withCta={false} />
    </>
  );
}
