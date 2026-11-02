// Brand typeface for the rebrand (Archivo, as on Transfeero). Self-hosted by Next.js at build time: no layout shift, no external request.
// `variable` exposes it as --font-archivo (set on <html>), which globals.css uses for the whole site.
import { Archivo, Great_Vibes } from "next/font/google";

export const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-archivo" });

// The handwritten "It's that simple!" of Anti's process block (IMG_8800, crop 07). Loaded only where it is used.
export const script = Great_Vibes({ subsets: ["latin"], weight: "400", display: "swap" });
