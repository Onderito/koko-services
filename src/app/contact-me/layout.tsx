import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking | Koko Limo",
  description:
    "Request a quote or book your private driver in the French Riviera. Airport transfers, hourly hire, private tours, and luxury car service from Nice to Monaco, Cannes, and Saint-Tropez.",
  alternates: {
    canonical: "https://kokolimonice.com/contact-me",
  },
};

export default function ContactMeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

