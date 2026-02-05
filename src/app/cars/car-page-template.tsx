import Cars from "@/app/landing/cars";
import Image from "next/image";
import Link from "next/link";

type Feature = {
  name: string;
  description: string;
  icon: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

type CarPageTemplateProps = {
  titlePrefix: string;
  titleHighlight: string;
  heroDescription: string;
  bookLabel: string;
  heroImageSrc: string;
  heroImageAlt: string;
  discoverTitle: string;
  discoverParagraphs: string[];
  gallery: GalleryImage[];
  features: Feature[];
  ctaDescription: string;
  ctaButtonLabel: string;
};

export default function CarPageTemplate({
  titlePrefix,
  titleHighlight,
  heroDescription,
  bookLabel,
  heroImageSrc,
  heroImageAlt,
  discoverTitle,
  discoverParagraphs,
  gallery,
  features,
  ctaDescription,
  ctaButtonLabel,
}: CarPageTemplateProps) {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 container pt-[var(--nav-clearance)] min-h-[calc(100vh-var(--nav-clearance))]">
        <div className="xl:w-2/3">
          <div className="space-y-5 md:space-y-6 xl:space-y-7">
            <h1 className="heading-1">
              {titlePrefix}
              <span className="bg-gradient-to-r from-[#D5D5D5] to-[#404040] bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h1>
            <p className="body-text">{heroDescription}</p>
            <div className="flex">
              <Link href="/contact-me">
                <button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-6 font-manrope-bold text-[16px] tracking-[-0.01em] text-white rounded-xl">
                  {bookLabel}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <div className="relative w-full min-h-[220px] aspect-[16/14] rounded-3xl bg-white">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              priority
              className="object-cover rounded-3xl ring-6 ring-gray-100 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-1 lg:order-2">
          <h2 className="heading-2 text-[#404040] mb-6">{discoverTitle}</h2>
          <div className="space-y-4 body-text">
            {discoverParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden col-span-2">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="heading-2 text-[#404040] text-center">
          Vehicle Features
        </h2>
        <p className="body-text text-center mt-4 max-w-3xl mx-auto">
          Discover the key features and premium amenities of our vehicles,
          designed to provide maximum comfort, safety, and convenience on every
          journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center border-[#E5E5E5] border-[0.5px] rounded-2xl py-4 px-2"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="heading-3 text-[#404040] mb-2">{feature.name}</h3>
              <p className="card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <Cars />
      </div>

      <div className="container">
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 mt-16 lg:mt-20">
          <h2 className="heading-2 text-[#404040] mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="body-text mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
          <button className="bg-[#404040] text-white rounded-xl px-8 py-4 font-manrope-bold text-[16px] tracking-[-0.01em] hover:bg-[#505050] transition-colors duration-300 cursor-pointer">
            {ctaButtonLabel}
          </button>
        </div>
      </div>
    </>
  );
}
