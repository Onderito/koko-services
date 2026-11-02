// The articles, set as Anti's "Moments That Move Us" gallery band (IMG_8800, crop 09) at the user's request (21 Oct
// 2026): navy band, heading with "View all articles" as an outline pill, and a mosaic of five articles (one large,
// four small), each a photo with its title. The three home articles come first, then the two most recent others.
// 21 Oct 2026, at the user's request: the tiles take the photos of IMG_8800's gallery (calm, close, premium details: the
// door held open, tail lights, cars waiting, the cabin, the key) in the site's own dusk colours, generated for them
// (Codex, user's account). They are used here only; each article keeps its own cover on the blog.
// 2 Nov 2026, before the release: the live home page links to the topic pages of its articles (through each card's
// category); a whole tile is one link here, so those topics are listed under the mosaic instead, keeping the links.

import Image from "next/image";
import Link from "next/link";
import { blogPosts, clusterById, featuredHomePosts, formatBlogDate } from "../data/blog-posts";
import { AntiHeading, AntiOutlinePill, AntiSection } from "../ui/anti";

// Home tile photo for each article, with what it shows.
const TILE: Record<string, { src: string; alt: string }> = {
  "private-driver": { src: "/assets/images/articles/art-private-driver.jpg", alt: "A chauffeur holding the rear door of a black Mercedes S-Class for a passenger outside a Riviera hotel at dusk" },
  "luxury-events": { src: "/assets/images/articles/art-luxury-events.jpg", alt: "The tail lights of a black Mercedes-Maybach at dusk in front of a seafront venue" },
  "airport-transfers": { src: "/assets/images/articles/art-airport-transfers.jpg", alt: "Black chauffeur cars waiting at an airport terminal at dusk" },
  "monaco-e-prix-guide": { src: "/assets/images/articles/art-monaco-e-prix.jpg", alt: "The rear seats of a Mercedes V-Class with a harbour and yachts at dusk through the window" },
  "nice-airport-to-monaco": { src: "/assets/images/articles/art-nice-monaco.jpg", alt: "A car key on a tan leather seat with the Riviera coastline at dusk through the window" },
};

const posts = [
  ...featuredHomePosts,
  ...blogPosts.filter(p => !p.featuredOnHome).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
].slice(0, 5);

// The topic pages of the articles shown, once each, in their order.
const topics = [...new Map(posts.flatMap(p => (p.cluster ? [[p.cluster, clusterById[p.cluster]] as const] : []))).values()];

export default function Blogs() {
  return (
    <AntiSection tone="navy" labelledBy="blogs-title">
      <AntiHeading
        id="blogs-title"
        dark
        title="Driver Insights & Luxury Travel Tips"
        intro="Explore articles on premium transportation, airport transfers, and travel experiences along the French Riviera."
        action={<AntiOutlinePill href="/blog">View all articles</AntiOutlinePill>}
      />
      <div className="mt-10 grid gap-4 md:h-[540px] md:grid-cols-4 md:grid-rows-2">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group relative block min-h-[220px] overflow-hidden rounded-[10px] bg-[#1a2a36] ${i === 0 ? "md:col-span-2 md:row-span-2 min-h-[320px]" : ""}`}
          >
            <Image
              src={TILE[post.slug]?.src ?? post.imageUrl}
              alt={TILE[post.slug]?.alt ?? post.imageAlt}
              fill
              sizes={i === 0 ? "(min-width: 768px) 620px, 100vw" : "(min-width: 768px) 300px, 100vw"}
              className="object-cover opacity-85 transition-opacity duration-200 group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0)_35%,rgba(13,25,34,0.9)_100%)]" />
            <span className="absolute inset-x-0 bottom-0 p-5">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#d4b471]">{post.category}</span>
              <h3 className={`mt-1.5 font-semibold leading-snug text-white ${i === 0 ? "text-[22px] md:text-[26px]" : "text-[16px]"}`}>{post.title}</h3>
              <span className="mt-1 block text-[13px] text-white/60">
                {post.readTime} · {formatBlogDate(post.publishedAt)}
              </span>
            </span>
          </Link>
        ))}
      </div>
      {topics.length > 0 && (
        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[14px] text-white/60">
          <span className="mr-1">Browse by topic:</span>
          {topics.map(t => (
            <Link
              key={t.slug}
              href={`/blog/category/${t.slug}`}
              className="rounded-full border border-white/20 px-3 py-1 font-medium text-white/85 transition-colors duration-150 hover:border-[#d4b471] hover:text-[#d4b471]"
            >
              {t.label}
            </Link>
          ))}
        </p>
      )}
    </AntiSection>
  );
}
