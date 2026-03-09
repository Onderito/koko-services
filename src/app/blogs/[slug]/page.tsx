import { permanentRedirect } from "next/navigation";

type LegacyBlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LegacyBlogPage({ params }: LegacyBlogPageProps) {
  const { slug } = await params;

  permanentRedirect(`/blog/${slug}`);
}
