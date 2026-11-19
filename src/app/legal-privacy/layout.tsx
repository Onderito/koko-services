import type { Metadata } from "next";
import { pageMetadata } from "@/app/data/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Legal Notice & Privacy Policy | kokolimo",
  description:
    "Read kokolimo's legal notice and privacy policy, including how we collect, use, and protect personal data and how to contact us about your information.",
  path: "/legal-privacy",
});

export default function LegalPrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
