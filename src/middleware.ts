// Markdown twins, as in Claude's docs: every page is also readable as Markdown at its address + ".md"
// (/our-services/transfers.md, /blog/<slug>.md; /index.md for the home page). Only ".md" requests reach this; the
// page path travels in the URL (/api/md/<page>) so nothing depends on query strings.

import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const page = pathname === "/index.md" ? "" : pathname.slice(0, -3);
  const url = req.nextUrl.clone();
  url.pathname = `/api/md${page}`;
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/|api/).*\\.md)"],
};
