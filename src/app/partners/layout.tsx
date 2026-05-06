import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Partner With Viplimonice | Luxury Chauffeur French Riviera | Travel Agencies & Concierge",
  description:
    "Join Viplimonice's partner program. Premium chauffeur service for travel agencies, concierge services, and luxury hotels on the French Riviera. Commission-based. Priority booking. 24/7.",
  alternates: {
    canonical: "https://viplimonice.com/partners",
  },
};

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
