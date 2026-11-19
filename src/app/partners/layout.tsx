import type { Metadata } from "next";
import { pageMetadata } from "@/app/data/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Chauffeur Partner Program | French Riviera | Kokolimo",
  description:
    "Partner with Kokolimo — premium chauffeur service for agencies, concierge teams and luxury hotels on the French Riviera. Commission-based, 24/7 booking.",
  path: "/partners",
});

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
