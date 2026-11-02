// Brand typeface for the rebrand (Archivo, as on Transfeero). Self-hosted by Next.js at build time: no layout shift, no external request.
// `variable` exposes it as --font-archivo (set on <html>), which globals.css uses for the whole site.
// 2 Nov 2026: the font files now ship with the site (./fonts, latin subset, the files Google Fonts serves). Google now
// gives its font files addresses without a file extension, which made next/font/google fail the build on Vercel.
import localFont from "next/font/local";

export const archivo = localFont({
  src: [{ path: "./fonts/archivo-latin.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  variable: "--font-archivo",
});

// The handwritten "It's that simple!" of Anti's process block (IMG_8800, crop 07). Loaded only where it is used.
export const script = localFont({ src: "./fonts/great-vibes-latin.woff2", weight: "400", display: "swap" });
