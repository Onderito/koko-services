"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { formatBlogDate, type BlogPost } from "../data/blog-posts";

type BlogCardProps = {
  post: BlogPost;
  priority?: boolean;
  sizes?: string;
};

export default function BlogCard({
  post,
  priority = false,
  sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
}: BlogCardProps) {
  return (
    <motion.article
      initial={false}
      whileHover="hovered"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        mass: 0.9,
      }}
      className="group overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-white shadow-sm"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div
          variants={{
            hovered: { y: -4, boxShadow: "0 20px 40px rgba(64,64,64,0.12)" },
          }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <motion.div
            variants={{
              hovered: { scale: 1.035 },
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
              mass: 0.8,
            }}
            className="h-full w-full"
          >
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </Link>

      <motion.div
        variants={{
          hovered: { y: -4 },
        }}
        className="flex flex-col gap-4 p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-500 md:text-[14px]">
          <span className="rounded-full bg-[#F4F4F4] px-3 py-1 font-manrope-bold text-[#404040]">
            {post.category}
          </span>
          <span>{post.readTime}</span>
          <span>{formatBlogDate(post.publishedAt)}</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] font-manrope-bold leading-tight text-[#404040]">
            <Link href={`/blog/${post.slug}`} className="hover:text-[#1F1F1F]">
              {post.title}
            </Link>
          </h3>
          <p className="text-[14px] leading-relaxed text-gray-600">
            {post.excerpt}
          </p>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="w-fit"
        >
          <motion.span
            variants={{
              hovered: { x: 4 },
            }}
            className="inline-block text-[15px] font-manrope-bold text-[#404040] underline underline-offset-4"
          >
            Read the article
          </motion.span>
        </Link>
      </motion.div>
    </motion.article>
  );
}
