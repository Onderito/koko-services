import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking | kokolimo",
  description:
    "Book your private driver on the French Riviera. Airport transfers, hourly hire and private tours in Nice, Cannes, Monaco and Saint-Tropez.",
  alternates: {
    canonical: "https://kokolimo.com/contact-me",
  },
};

export default function ContactMeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
