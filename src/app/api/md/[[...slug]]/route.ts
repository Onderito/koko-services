// Markdown version of a page, reached through src/middleware.ts: "/our-services/transfers.md" is served by
// "/api/md/our-services/transfers", "/index.md" by "/api/md". It reads the page's own HTML, keeps the main content
// (no header, menus, footer, forms, images or decorative duplicates), and returns it as Markdown with a short front
// matter. The canonical Link header points to the HTML page and X-Robots-Tag keeps the copy out of search results,
// so the pages Google ranks are unchanged. Pages that are noindex (reservation, demo) have no Markdown version.

import { NodeHtmlMarkdown } from "node-html-markdown";
import { parse } from "node-html-parser";
import type { NextRequest } from "next/server";
import { siteUrl } from "@/app/data/site-config";

const SEGMENT_RE = /^[a-z0-9-]+$/i;
const PRIVATE = /^\/(api|reservation|demo)(\/|$)/;
const DAY = 86_400;
const DROP = "nav, footer, form, button, select, svg, img, picture, video, iframe, noscript, template, [aria-hidden='true'], .sr-only";

const markdown = new NodeHtmlMarkdown({ bulletMarker: "-", maxConsecutiveNewlines: 2 });

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function notFound() {
  return new Response("Not found\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" } });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  if (slug.length > 8 || !slug.every(s => SEGMENT_RE.test(s))) return notFound();
  const path = `/${slug.join("/")}`;
  if (PRIVATE.test(path)) return notFound();

  let res: Response;
  try {
    res = await fetch(new URL(path, req.nextUrl.origin), { headers: { accept: "text/html" }, next: { revalidate: DAY } });
  } catch {
    return notFound();
  }
  if (!res.ok || !(res.headers.get("content-type") ?? "").includes("text/html")) return notFound();
  const html = await res.text();
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) return notFound();

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? `${siteUrl}${path === "/" ? "" : path}`;

  const main = parse(html).querySelector("main");
  if (!main) return notFound();
  // Links named for screen readers ("Rated 5.0 out of 5 on Google") read better than their visual fragments.
  for (const a of main.querySelectorAll("a[aria-label]")) {
    const label = a.getAttribute("aria-label");
    if (label) a.set_content(label);
  }
  for (const el of main.querySelectorAll(DROP)) el.remove();

  const body = markdown.translate(main.innerHTML).trim();
  const doc = `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\nurl: ${canonical}\nsource: Kokolimo (${siteUrl})\n---\n\n${body}\n`;

  return new Response(doc, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${canonical}>; rel="canonical"`,
      "X-Robots-Tag": "noindex",
      "Cache-Control": `public, max-age=0, s-maxage=${DAY}, stale-while-revalidate=${7 * DAY}`,
    },
  });
}
