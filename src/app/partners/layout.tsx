import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Partner With Kokolimo | Luxury Chauffeur French Riviera | Travel Agencies & Concierge",
  description:
    "Partner with Kokolimo — premium chauffeur service for agencies, concierge teams and luxury hotels on the French Riviera. Commission-based, 24/7 booking.",
  alternates: {
    canonical: "https://kokolimo.com/partners",
  },
};

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
