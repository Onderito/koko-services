import Link from "next/link";

import BlogCard from "../blog/blog-card";
import { featuredHomePosts } from "../data/blog-posts";

export default function Blogs() {
  return (
    <div className="flex-center-column">
      <span className="section-label">
        Our Blogs
      </span>
      <h2 className="heading-2 text-[#404040] mt-4 text-center">
        Driver Insights & Luxury Travel Tips
      </h2>
      <p className="body-text text-center mt-4 ">
        Explore articles on premium transportation, airport transfers, and
        travel experiences along the French Riviera.
      </p>

      <div className="mt-10 grid gap-8 md:mt-12 xl:mt-16 xl:grid-cols-3">
        {featuredHomePosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} priority={index === 0} />
        ))}
      </div>

      <Link
        href="/blog"
        className="mx-auto mt-10 inline-flex rounded-2xl border border-[#D8D8D8] px-6 py-3 text-[15px] font-manrope-bold text-[#404040] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#404040] hover:text-white md:mt-12"
      >
        View all articles
      </Link>
    </div>
  );
}
