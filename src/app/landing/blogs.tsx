import Image from "next/image";

const blogsData = [
  {
    imageUrl: "/blog-private.webp",
    name: "Why Private Chauffeur Services Are Essential on the French Riviera",
    description:
      "Explore the key benefits of booking a personal driver in Nice, Cannes, and Monaco.",
  },
  {
    imageUrl: "/blog-cannes.webp",
    name: "Top 5 Luxury Events in the South of France (and How to Get There)",
    description:
      "From Cannes Film Festival to private galas — arrive in style and on time.",
  },
  {
    imageUrl: "/blog-airport.webp",
    name: "Airport Transfers in Nice: What to Expect From a Premium Chauffeur",
    description:
      "Stress-free pickups, punctuality, and high-end comfort for your next flight.",
  },
];

export default function Blogs() {
  return (
    <div className="flex-center-column">
      <span
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our blogs
      </span>
      <h2 className="title text-[32px] md:text-[56px] md:leading-16 font-manrope-bold mt-4 text-center h2 text-gray-100">
        Chauffeur Insights & Luxury Travel Tips
      </h2>
      <p className="description text-[16px] md:text-[18px] text-center mt-4 ">
        Explore articles on premium transportation, airport transfers, and
        travel experiences along the French Riviera.
      </p>

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8 mt-10 md:mt-12 xl:mt-16">
        {blogsData.map((b, index) => (
          <div
            key={index}
            className="flex-col md:flex md:justify-center md:items-center"
          >
            <Image
              className="rounded-2xl object-conver md:w-full shadow-lg"
              src={b.imageUrl}
              alt="image of car"
              width={400}
              height={300}
            />
            <div className="flex flex-col justify-center items-center mt-4 font-manrope-regular text-[16px]">
              <span className="pb-2 font-manrope-bold text-[18px]  ">
                {b.name}
              </span>
              <span className="py-1 font-manrope-regular text-[16px] ">
                {b.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
