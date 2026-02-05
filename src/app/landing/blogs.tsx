"use client";

import Image from "next/image";
import Link from "next/link";

const blogsData = [
  {
    imageUrl: "/blogs/blog-driver.webp",
    name: "Why Private Driver Services Are Essential on the French Riviera",
    description:
      "Explore the key benefits of booking a personal driver in Nice, Cannes, and Monaco.",
    link: "/blogs/private-driver",
  },
  {
    imageUrl: "/blogs/blog-luxury-events.webp",
    name: "Top 5 Luxury Events in the South of France (and How to Get There)",
    description:
      "From Cannes Film Festival to private galas — arrive in style and on time.",
    link: "/blogs/luxury-events",
  },
  {
    imageUrl: "/blogs/blog-airport.webp",
    name: "Airport Transfers in Nice: What to Expect From a Premium Driver",
    description:
      "Stress-free pickups, punctuality, and high-end comfort for your next flight.",
    link: "/blogs/airport-transfers",
  },
];

export default function Blogs() {
  return (
    <div className="flex-center-column">
      <span className="text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto">
        our blogs
      </span>
      <h2 className="heading-2 text-[#404040] mt-4 text-center">
        Driver Insights & Luxury Travel Tips
      </h2>
      <p className="body-text text-center mt-4 ">
        Explore articles on premium transportation, airport transfers, and
        travel experiences along the French Riviera.
      </p>

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8 mt-10 md:mt-12 xl:mt-16">
        {blogsData.map((b, index) => (
          <div
            key={index}
            className="flex-col md:flex md:justify-center md:items-center lg:items-start"
          >
            <Image
              className="rounded-2xl object-conver md:w-full shadow-lg"
              src={b.imageUrl}
              alt="image of car"
              width={400}
              height={300}
            />
            <div className="flex flex-col justify-center items-start mt-4 font-manrope-regular text-[16px]">
              <span className="pb-2 font-manrope-bold text-[18px]">
                {b.name}
              </span>
              <span className="py-1 font-manrope-regular text-[16px] ">
                {b.description}
              </span>
              <Link
                href={b.link}
                scroll
                className="text-gray-400 text-start underline hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Read More
                <span className="sr-only"> about {b.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
