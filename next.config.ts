const nextConfig = {
  // The live preview (next dev) can write to its own folder, so production builds can run beside it.
  distDir: process.env.NEXT_DIST_DIR || ".next",
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
  // 13 Nov 2026: the Nice Airport article moved to an address that matches its new subject (our private driver
  // service, no taxi comparison; the user's request). The first address, live one day, keeps working.
  async redirects() {
    return [
      {
        source: "/blog/nice-airport-taxi-vs-private-driver",
        destination: "/blog/nice-airport-private-driver",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
