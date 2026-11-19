import type { Metadata } from "next";
import { pageMetadata } from "@/app/data/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Booking | kokolimo",
  description:
    "Book your private driver on the French Riviera. Airport transfers, hourly hire and private tours in Nice, Cannes, Monaco and Saint-Tropez.",
  path: "/contact-me",
});

export default function ContactMeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
