const nextConfig = {
  // The live preview (next dev) can write to its own folder, so production builds can run beside it.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Every visitor, crawler or browser, gets the title, canonical and sharing tags in the page's <head>, including on
  // pages built on request (by default Next.js streams them into the body for user agents outside its short bot list).
  htmlLimitedBots: /.*/,
  // The site has one root layout per language (app/(en), app/(fr)); an unknown address gets the 404 page of
  // app/global-not-found.tsx, which carries the English layout.
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The project's own Vercel address serves the same site: it redirects to the domain, keeping the path. Deployment
      // addresses (previews) have other host names and are not affected.
      {
        source: "/:path*",
        has: [{ type: "host", value: "koko-services.vercel.app" }],
        destination: "https://kokolimo.com/:path*",
        permanent: true,
      },
      // 13 Nov 2026: the Nice Airport article moved to an address that matches its new subject (our private driver
      // service, no taxi comparison). The first address, live one day, keeps working.
      {
        source: "/blog/nice-airport-taxi-vs-private-driver",
        destination: "/blog/nice-airport-private-driver",
        permanent: true,
      },
      // 18 Nov 2026: blog articles folded into the service page that sells the same ride (src/app/data/removed-posts.ts
      // lists the same moves for their Markdown twins; the gone articles answer 410 in the middleware).
      { source: "/blog/monaco-port-hercule-yacht-transfer", destination: "/our-services/yacht-transfers/monaco", statusCode: 301 },
      { source: "/blog/cap-dail-yacht-transfer", destination: "/our-services/yacht-transfers/monaco", statusCode: 301 },
      { source: "/blog/antibes-port-vauban-yacht-transfer", destination: "/our-services/yacht-transfers/antibes", statusCode: 301 },
      { source: "/blog/golfe-juan-yacht-transfer", destination: "/our-services/yacht-transfers/antibes", statusCode: 301 },
      { source: "/blog/mandelieu-la-napoule-yacht-transfer", destination: "/our-services/yacht-transfers/cannes", statusCode: 301 },
      { source: "/blog/saint-tropez-yacht-transfer", destination: "/our-services/yacht-transfers/saint-tropez", statusCode: 301 },
      { source: "/blog/pampelonne-beach-club-transfers", destination: "/our-services/yacht-transfers/saint-tropez", statusCode: 301 },
      { source: "/blog/yacht-charter-guest-transfers", destination: "/our-services/yacht-transfers", statusCode: 301 },
      { source: "/blog/cap-ferrat-yacht-villa-transfer", destination: "/our-services/yacht-transfers", statusCode: 301 },
      { source: "/blog/grand-hotel-cap-ferrat-transfer", destination: "/our-services/transfers/saint-jean-cap-ferrat-transfer", statusCode: 301 },
      { source: "/blog/hotel-belles-rives-transfer", destination: "/our-services/transfers/antibes-transfer", statusCode: 301 },
      { source: "/blog/la-reserve-beaulieu-transfer", destination: "/our-services/transfers/villefranche-transfer", statusCode: 301 },
      { source: "/blog/nice-airport-to-antibes", destination: "/our-services/transfers/antibes-transfer", statusCode: 301 },
      { source: "/blog/nice-airport-to-menton", destination: "/our-services/transfers/menton-transfer", statusCode: 301 },
      { source: "/blog/nice-airport-to-beaulieu-sur-mer", destination: "/our-services/transfers/nice-airport-transfer", statusCode: 301 },
      { source: "/blog/nice-to-monaco-transfer", destination: "/our-services/transfers/monaco-airport-transfer", statusCode: 301 },
      { source: "/blog/nice-to-cannes-transfer", destination: "/our-services/transfers/cannes-airport-transfer", statusCode: 301 },
      { source: "/blog/antibes-cannes-saint-paul-de-vence-private-tour", destination: "/our-services/private-tours/cannes", statusCode: 301 },
      { source: "/blog/saint-tropez-day-trip", destination: "/our-services/private-tours/saint-tropez", statusCode: 301 },
      { source: "/blog/eze-village-visitor-guide", destination: "/our-services/transfers/eze-transfer", statusCode: 301 },
      { source: "/blog/cap-dantibes-scenic-guide", destination: "/our-services/transfers/antibes-transfer", statusCode: 301 },
      { source: "/blog/saint-jean-cap-ferrat-luxury-guide", destination: "/our-services/transfers/saint-jean-cap-ferrat-transfer", statusCode: 301 },
      { source: "/blog/menton-day-trip-guide", destination: "/our-services/transfers/menton-transfer", statusCode: 301 },
      { source: "/blog/corporate-chauffeur-service", destination: "/our-services/hourly-chauffeur", statusCode: 301 },
      { source: "/blog/multi-day-chauffeur-hire", destination: "/our-services/hourly-chauffeur", statusCode: 301 },
    ];
  },
};

export default nextConfig;
