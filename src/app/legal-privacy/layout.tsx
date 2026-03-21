import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice & Privacy Policy | My Riviera",
  description:
    "Read My Riviera's legal notice and privacy policy, including how we collect, use, and protect personal data and how to contact us about your information.",
  alternates: {
    canonical: "https://kokolimonice.com/legal-privacy",
  },
};

export default function LegalPrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
