// Blog card in the Anti style (IMG_8800 cards): white, soft shadow, the photo inset, category, date and read time,
// title, excerpt and "Read the article" with a gold arrow. Shared by the home page and the blog pages.

import Image from "next/image";
import Link from "next/link";

import { clusterById, formatBlogDate, type BlogPost } from "../data/blog-posts";
import { GoldArrow } from "../ui/anti";

type BlogCardProps = {
  post: BlogPost;
  priority?: boolean;
  sizes?: string;
};

export default function BlogCard({ post, priority = false, sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" }: BlogCardProps) {
  const clusterConfig = post.cluster ? clusterById[post.cluster] : undefined;
  const chip = "rounded-full bg-[#f6ecd6] px-2.5 py-0.5 text-[12px] font-semibold text-[#7a5a17]";

  return (
    <article className="group flex h-full flex-col rounded-[10px] bg-white p-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_18px_44px_rgba(16,24,40,0.12)]">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-[8px] bg-[#eef0f3]">
        <Image src={post.imageUrl} alt={post.imageAlt} fill priority={priority} sizes={sizes} className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#667085]">
          {clusterConfig ? (
            <Link href={`/blog/category/${clusterConfig.slug}`} className={`${chip} transition-colors hover:bg-[#efdcae]`}>
              {post.category}
            </Link>
          ) : (
            <span className={chip}>{post.category}</span>
          )}
          <span>{post.readTime}</span>
          <span>{formatBlogDate(post.publishedAt)}</span>
        </div>

        <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.01em] text-[#101828]">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[#9a7a3e]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{post.excerpt}</p>

        <div className="mt-auto pt-5">
          <Link href={`/blog/${post.slug}`} className="flex items-center justify-between gap-3 border-t border-[#eaecf0] pt-4 text-[15px] font-semibold text-[#101828]">
            Read the article
            <GoldArrow />
          </Link>
        </div>
      </div>
    </article>
  );
}
