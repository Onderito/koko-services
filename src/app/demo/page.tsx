// /demo — the first preview link, kept: it now shows the same hero as the home page. Never indexed.

import type { Metadata } from "next";
import HomeHero from "../landing/home-hero";

export const metadata: Metadata = {
  title: "Demo · Kokolimo booking",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function DemoPage() {
  return <HomeHero />;
}
