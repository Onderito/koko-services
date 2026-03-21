import type { MetadataRoute } from "next";

import { blogPosts, siteUrl } from "./data/blog-posts";
import {
  chauffeurTourPages,
  chauffeurToursPage,
  hourlyChauffeurPage,
  hourlyChauffeurPages,
  transferPages,
  transfersPage,
} from "./data/service-pages";

const staticRoutes = [
  "",
  "/blog",
  "/contact-me",
  "/legal-privacy",
  transfersPage.path,
  hourlyChauffeurPage.path,
  chauffeurToursPage.path,
  "/cars/class-s",
  "/cars/class-v",
  "/cars/maybach",
  ...Object.values(transferPages).map((page) => page.path),
  ...Object.values(hourlyChauffeurPages).map((page) => page.path),
  ...Object.values(chauffeurTourPages).map((page) => page.path),
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

  return [...staticEntries, ...blogEntries];
}
