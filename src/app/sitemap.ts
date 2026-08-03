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

const staticRoutes = [
  "",
  "/blog",
  "/contact-me",
  "/legal-privacy",
  "/partners",
  transfersPage.path,
  hourlyChauffeurPage.path,
  chauffeurToursPage.path,
  yachtTransfersPage.path,
  eventsPage.path,
  "/cars/class-s",
  "/cars/class-v",
  "/cars/maybach",
  ...Object.values(transferPages).map((page) => page.path),
  ...Object.values(hourlyChauffeurPages).map((page) => page.path),
  ...Object.values(chauffeurTourPages).map((page) => page.path),
  ...Object.values(yachtTransferPages).map((page) => page.path),
  ...Object.values(eventPages).map((page) => page.path),
];

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  return route === "" ? "weekly" : "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: getChangeFrequency(route),
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryEntries = clusters
    .filter((cluster) => getPostsByCluster(cluster.id).length > 0)
    .map((cluster) => ({
      url: `${siteUrl}/blog/category/${cluster.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticEntries, ...blogEntries, ...categoryEntries];
}
