// /robots.txt: every crawler, AI crawlers included, may read the site (no AI crawler is singled out); only the private
// quote pages and the internal API are left out. The comment lines name the two languages; the sitemap lists every page
// with its English and French versions (hreflang), as each page's own head does. llms.txt is at /llms.txt.

import { siteUrl } from "../data/site-config";

export const dynamic = "force-static";

const BODY = `# Kokolimo, private driver on the French Riviera, based in Nice.
# English: ${siteUrl}/
# Français : ${siteUrl}/fr
# Every page names its English and French versions (hreflang), in its head and in the sitemap below.
# For AI assistants: ${siteUrl}/llms.txt

User-Agent: *
Allow: /
Disallow: /api/
Disallow: /reservation
Disallow: /fr/reservation

Sitemap: ${siteUrl}/sitemap.xml
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
