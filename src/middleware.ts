// Markdown twins, as in Claude's docs: every page is also readable as Markdown at its address + ".md"
// (/our-services/transfers.md, /blog/<slug>.md; /index.md for the home page); the page path travels in the URL
// (/api/md/<page>) so nothing depends on query strings. The blog articles taken off the site (data/removed-posts.ts)
// come here too: a gone article answers 410, and a moved article's Markdown twin redirects to its new page's twin (the
// moved article pages themselves redirect in next.config.ts).
//
// Browser language: a visitor whose browser puts French first, with no `lang` cookie (the header's language menu sets
// it), who asks for an English page that has a live French twin, is sent there (307). Crawlers, prefetches, in-app
// navigations and anything but a page are never redirected, so search engines and AI crawlers read both languages.

import { NextResponse, type NextRequest } from "next/server";
import { GONE_POSTS, MOVED_POSTS } from "./app/data/removed-posts";
import { frenchTwin } from "./app/data/i18n/addresses";

// Crawlers, AI fetchers, link previews and scripts: never redirected. Broad on purpose (a visitor taken for a crawler
// only misses the redirect). "google" covers Google's agents without "bot" in their name (GoogleOther,
// Google-InspectionTool, FeedFetcher-Google, Google-Read-Aloud…); browsers' own user agents do not contain it.
const BOTS =
  /bot\b|bot\/|crawler|spider|slurp|google|adsbot|mediapartners|bingbot|bingpreview|duckduck|yandex|baidu|applebot|gptbot|chatgpt|oai-searchbot|claude|anthropic|perplexity|bytespider|petalbot|semrush|ahrefs|mj12|dotbot|facebookexternalhit|facebookcatalog|meta-external|cohere|mistral|amazonbot|whatsapp|skypeuripreview|ia_archiver|lighthouse|pagespeed|headless|curl|wget|python|node-fetch|axios|go-http/i;

/** True when the browser's first language (highest weight; the first one on a tie) is French. */
function prefersFrench(header: string | null) {
  if (!header) return false;
  let best = { tag: "", weight: -1 };
  for (const part of header.split(",")) {
    const [tag, ...params] = part.trim().toLowerCase().split(";");
    const q = params.map(p => p.trim()).find(p => p.startsWith("q="));
    const weight = q ? Number(q.slice(2)) : 1;
    if (weight > best.weight) best = { tag, weight };
  }
  return best.tag === "fr" || best.tag.startsWith("fr-");
}

function frenchRedirect(req: NextRequest) {
  if (req.method !== "GET" || req.cookies.has("lang")) return null;
  const h = req.headers;
  if (h.get("rsc") || h.get("next-router-prefetch") || h.get("purpose") === "prefetch" || h.get("sec-purpose")?.includes("prefetch")) return null;
  if (!(h.get("accept") ?? "").includes("text/html")) return null;
  if (BOTS.test(h.get("user-agent") ?? "") || !prefersFrench(h.get("accept-language"))) return null;
  const twin = frenchTwin(req.nextUrl.pathname);
  if (!twin) return null;
  const url = req.nextUrl.clone();
  url.pathname = twin;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie");
  return res;
}

const GONE_PAGE =
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Article removed | Kokolimo</title></head>' +
  '<body style="font-family:system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 16px;color:#101828;background:#fff">' +
  '<h1 style="font-size:24px">This article has been removed</h1><p><a href="/blog">Read our other articles</a> or <a href="/#book">get a quote</a> for your private chauffeur.</p></body></html>';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const french = frenchRedirect(req);
  if (french) return french;
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
    // Pages (no file extension), outside /fr, for the browser-language redirect.
    "/((?!_next/|api/|fr(?:/|$))[^.]*)",
    // The gone articles of data/removed-posts.ts, written out because a matcher must be static.
    "/blog/(french-riviera-hidden-gems|best-beaches-french-riviera|best-french-riviera-gardens|french-riviera-with-kids-family|french-riviera-5-day-itinerary|how-to-plan-a-french-riviera-trip|best-time-to-visit-french-riviera|french-riviera-luxury-vs-budget|french-riviera-michelin-dining|chauffeur-vs-limousine-vs-taxi|cannes-taxi-vs-private-driver|monaco-business-chauffeur)",
  ],
};
