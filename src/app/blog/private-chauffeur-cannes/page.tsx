// "Private Chauffeur in Cannes" (12 Nov 2026): a blog post built like /our-services/hourly-chauffeur/monaco, so it is
// rendered with the service-page layout. It has its own route so that the layout's code is loaded on this page only and
// the other posts (blog/[slug]) keep their lighter bundle. Text and data: data/blog/destinations.ts (landing);
// metadata and JSON-LD: ../post-seo.tsx, the same as every post.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPost } from "../../data/blog-posts";
import ServicePageTemplate from "../../our-services/service-page-template";
import { PostSchemas, postMetadata } from "../post-seo";

const SLUG = "private-chauffeur-cannes";

export function generateMetadata(): Metadata {
  const post = getBlogPost(SLUG);
  return post ? postMetadata(post) : {};
}

export default function PrivateChauffeurCannesPage() {
  const post = getBlogPost(SLUG);
  if (!post?.landing) notFound();

  return (
    <>
      <PostSchemas post={post} />
      <ServicePageTemplate config={post.landing} />
    </>
  );
}
