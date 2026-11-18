// Markdown twins, as in Claude's docs: every page is also readable as Markdown at its address + ".md"
// (/our-services/transfers.md, /blog/<slug>.md; /index.md for the home page); the page path travels in the URL
// (/api/md/<page>) so nothing depends on query strings. The blog articles taken off the site (data/removed-posts.ts)
// come here too: a gone article answers 410, and a moved article's Markdown twin redirects to its new page's twin (the
// moved article pages themselves redirect in next.config.ts).

import { NextResponse, type NextRequest } from "next/server";
import { GONE_POSTS, MOVED_POSTS } from "./app/data/removed-posts";

const GONE_PAGE =
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Article removed | Kokolimo</title></head>' +
  '<body style="font-family:system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 16px;color:#101828;background:#fff">' +
  '<h1 style="font-size:24px">This article has been removed</h1><p><a href="/blog">Read our other articles</a> or <a href="/#book">get a quote</a> for your private chauffeur.</p></body></html>';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const post = /^\/blog\/([a-z0-9-]+)(\.md)?$/.exec(pathname);
  if (post) {
    const [, slug, md] = post;
    if (GONE_POSTS.has(slug)) {
      return new NextResponse(md ? "Gone\n" : GONE_PAGE, {
        status: 410,
        headers: { "Content-Type": md ? "text/plain; charset=utf-8" : "text/html; charset=utf-8", "X-Robots-Tag": "noindex" },
      });
    }
    if (md && MOVED_POSTS[slug]) return NextResponse.redirect(new URL(`${MOVED_POSTS[slug]}.md`, req.url), 301);
  }
  if (!pathname.endsWith(".md")) return NextResponse.next();
  const page = pathname === "/index.md" ? "" : pathname.slice(0, -3);
  const url = req.nextUrl.clone();
  url.pathname = `/api/md${page}`;
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/|api/).*\\.md)",
    // The gone articles of data/removed-posts.ts, written out because a matcher must be static.
    "/blog/(french-riviera-hidden-gems|best-beaches-french-riviera|best-french-riviera-gardens|french-riviera-with-kids-family|french-riviera-5-day-itinerary|how-to-plan-a-french-riviera-trip|best-time-to-visit-french-riviera|french-riviera-luxury-vs-budget|french-riviera-michelin-dining|chauffeur-vs-limousine-vs-taxi|cannes-taxi-vs-private-driver|monaco-business-chauffeur)",
  ],
};
