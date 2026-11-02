import type { MetadataRoute } from "next";

import { siteUrl } from "./data/blog-posts";

// Every crawler, AI crawlers included, may read the site, as on the Riviera operators AI answers cite most (no AI
// crawler is singled out). Only the private quote pages and the internal API are left out. llms.txt is at /llms.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/reservation"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
