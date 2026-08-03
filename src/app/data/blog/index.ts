import type { BlogPost, ClusterId } from "./types";

import { legacyPosts } from "./legacy";
import { routePosts } from "./routes";
import { destinationPosts } from "./destinations";
import { yachtPosts } from "./yacht";
import { eventPosts } from "./events";
import { hotelPosts } from "./hotels";
import { guidePosts } from "./guides";
import { servicesExplainedPosts } from "./services-explained";

export { siteUrl } from "../site-config";
export type { BlogPost, BlogSection, BlogFaq, ClusterId } from "./types";
export { clusters, clusterById, clusterBySlug } from "./clusters";
export type { ClusterConfig } from "./clusters";

// Legacy posts predate the cluster files, so they are mapped to hubs by slug.
const legacyClusterBySlug: Record<string, ClusterId> = {
  "airport-transfers": "routes",
  "nice-to-monaco-transfer": "routes",
  "nice-to-cannes-transfer": "routes",
  "antibes-cannes-saint-paul-de-vence-private-tour": "destinations",
  "eze-monaco-private-tour-from-nice": "destinations",
  "saint-tropez-day-trip": "destinations",
  "luxury-events": "events",
  "private-driver": "services-explained",
  "cannes-taxi-vs-private-driver": "services-explained",
  "monaco-business-chauffeur": "services-explained",
};

function tagCluster(posts: BlogPost[], cluster: ClusterId): BlogPost[] {
  return posts.map((post) => ({ ...post, cluster: post.cluster ?? cluster }));
}

function tagLegacy(posts: BlogPost[]): BlogPost[] {
  return posts.map((post) => ({
    ...post,
    cluster: post.cluster ?? legacyClusterBySlug[post.slug],
  }));
}

// Order is significant: the /blog index and homepage render posts in this
// order. legacyPosts stays first so existing pages are unchanged.
export const blogPosts: BlogPost[] = [
  ...tagLegacy(legacyPosts),
  ...tagCluster(routePosts, "routes"),
  ...tagCluster(destinationPosts, "destinations"),
  ...tagCluster(yachtPosts, "yacht"),
  ...tagCluster(eventPosts, "events"),
  ...tagCluster(hotelPosts, "hotels"),
  ...tagCluster(guidePosts, "guides"),
  ...tagCluster(servicesExplainedPosts, "services-explained"),
];

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;

export const featuredHomePosts = blogPosts.filter((post) => post.featuredOnHome);

export function getBlogPost(slug: string) {
  return blogPostsBySlug[slug];
}

export function getPostsByCluster(cluster: ClusterId) {
  return blogPosts.filter((post) => post.cluster === cluster);
}

// Returns explicit relatedSlugs as-is when there are enough (preserving the
// original behaviour). When a post has fewer than `minCount`, it is padded with
// other posts from the same cluster so new articles get related links for free.
export function getRelatedPosts(post: BlogPost, minCount = 3) {
  const explicit = post.relatedSlugs
    .map((slug) => blogPostsBySlug[slug])
    .filter(Boolean);

  if (explicit.length >= minCount) {
    return explicit;
  }

  const used = new Set([post.slug, ...explicit.map((related) => related.slug)]);
  const fallback = blogPosts.filter(
    (candidate) => candidate.cluster === post.cluster && !used.has(candidate.slug),
  );

  return [...explicit, ...fallback.slice(0, minCount - explicit.length)];
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
