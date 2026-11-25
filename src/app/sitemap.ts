import type { MetadataRoute } from "next";

import {
  blogPosts,
  clusters,
  getPostsByCluster,
  siteUrl,
} from "./data/blog-posts";
import {
  chauffeurTourPages,
  chauffeurToursPage,
  eventPages,
  eventsPage,
  hourlyChauffeurPage,
  hourlyChauffeurPages,
  transferPages,
  transfersPage,
  yachtTransferPages,
  yachtTransfersPage,
} from "./data/service-pages";
import { frenchServicePages } from "./data/service-pages-fr";
import { englishTwin, frenchTwin } from "./data/i18n/addresses";

// The French home, once it is live (data/i18n/addresses.ts).
const frenchHome = frenchTwin("/");
import { FRENCH_SITE_RELEASE, SITE_RELAUNCH, laterDate, pageUpdatedAt } from "./data/page-dates";

const staticRoutes = [
  "",
  "/blog",
  "/contact-me",
  "/legal-privacy",
  "/partners",
  "/ai-instructions",
  "/our-services",
  "/cars",
  transfersPage.path,
  hourlyChauffeurPage.path,
  chauffeurToursPage.path,
  yachtTransfersPage.path,
  eventsPage.path,
  "/cars/class-e",
  "/cars/class-s",
  "/cars/class-v",
  "/cars/maybach",
  ...Object.values(transferPages).map((page) => page.path),
  ...Object.values(hourlyChauffeurPages).map((page) => page.path),
  ...Object.values(chauffeurTourPages).map((page) => page.path),
  ...Object.values(yachtTransferPages).map((page) => page.path),
  ...Object.values(eventPages).map((page) => page.path),
  ...(frenchHome ? [frenchHome] : []),
  ...Object.values(frenchServicePages).map((page) => page.path),
];

// Real dates per page (18 Nov 2026), instead of one fixed date for every page: see data/page-dates.ts.
const pageDate = (route: string) => pageUpdatedAt[route] ?? (route.startsWith("/fr") ? FRENCH_SITE_RELEASE : SITE_RELAUNCH);
const latestPost = (posts: { publishedAt: string }[]) =>
  posts.reduce((latest, post) => laterDate(latest, post.publishedAt), SITE_RELAUNCH);

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  return route === "" || route === "/fr" ? "weekly" : "monthly";
}

/** A page's two language versions as hreflang alternates (en, fr, and x-default: the English page), when both are live
 *  (data/i18n/addresses.ts); the same pairs as the pages' own hreflang links. */
function languages(route: string) {
  const isFrench = route === "/fr" || route.startsWith("/fr/");
  const french = isFrench ? route : frenchTwin(route || "/");
  const english = isFrench ? englishTwin(route) : route;
  if (french === undefined || english === undefined) return undefined;
  const en = `${siteUrl}${english === "/" ? "" : english}`;
  return { languages: { en, fr: `${siteUrl}${french}`, "x-default": en } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => {
    const alternates = languages(route);
    return {
      url: `${siteUrl}${route}`,
      // The blog home lists the newest articles, so a new article moves its date too.
      lastModified: new Date(route === "/blog" ? laterDate(pageDate(route), latestPost(blogPosts)) : pageDate(route)),
      changeFrequency: getChangeFrequency(route),
      priority: route === "" || route === "/fr" ? 1 : 0.8,
      ...(alternates ? { alternates } : {}),
    };
  });

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    // An article is never older than its publication, and an edit after it moves the date.
    lastModified: new Date(laterDate(post.publishedAt, pageDate(`/blog/${post.slug}`))),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryEntries = clusters
    .filter((cluster) => getPostsByCluster(cluster.id).length > 0)
    .map((cluster) => ({
      url: `${siteUrl}/blog/category/${cluster.slug}`,
      // A category page lists its articles, so its newest article moves its date too.
      lastModified: new Date(
        laterDate(pageDate(`/blog/category/${cluster.slug}`), latestPost(getPostsByCluster(cluster.id))),
      ),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticEntries, ...blogEntries, ...categoryEntries];
}
