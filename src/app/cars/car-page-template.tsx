import Cars from "@/app/landing/cars";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "../our-services/footer-component";
import { Reveal, RevealGroup } from "../ui/reveal";

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
  discoverTitleMobile?: React.ReactNode;
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
  discoverTitleMobile,
  discoverParagraphs,
  gallery,
  features,
  ctaDescription,
  ctaButtonLabel,
}: CarPageTemplateProps) {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 container pt-[var(--nav-clearance)] min-h-[calc(100vh-var(--nav-clearance))]">
        <Reveal className="xl:w-2/3" amount={0.42}>
          <div className="space-y-5 md:space-y-6 xl:space-y-7">
            <h1 className="heading-1">
              {titlePrefix}
              <span className="text-[#404040]">
                {titleHighlight}
              </span>
            </h1>
            <p className="body-text">{heroDescription}</p>
            <div className="flex">
              <Link href="/contact-me">
                <span className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[15px] tracking-[-0.02em] text-[#6D5830] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(109,88,48,0.32),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  {bookLabel}
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="w-full xl:w-2/3" delay={0.06} amount={0.42}>
          <div className="relative aspect-[16/14] min-h-[220px] w-full rounded-[32px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F1E8_100%)] p-2.5 shadow-[0_24px_60px_rgba(45,33,15,0.12)] md:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <Reveal className="order-1 lg:order-2" amount={0.38}>
          <h2 className="heading-2 mb-6 text-[#404040]">
            <span className="md:hidden">
              {discoverTitleMobile ?? discoverTitle}
            </span>
            <span className="hidden md:inline">{discoverTitle}</span>
          </h2>
          <div className="space-y-4 body-text">
            {discoverParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <RevealGroup className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4" amount={0.32}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-2 shadow-[0_18px_40px_rgba(45,33,15,0.08)]">
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-2 shadow-[0_18px_40px_rgba(45,33,15,0.08)]">
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </RevealGroup>
      </div>

      <Reveal className="container" amount={0.28}>
        <div className="relative h-[280px] md:h-[460px] lg:h-[560px] overflow-hidden rounded-[28px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-2 shadow-[0_22px_48px_rgba(45,33,15,0.10)]">
          <div className="relative h-full w-full overflow-hidden rounded-[22px]">
            <Image
              src={gallery[2].src}
              alt={gallery[2].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </Reveal>

      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center" amount={0.38}>
          <h2 className="heading-2 text-[#404040] text-center">
            Vehicle Features
          </h2>
          <p className="body-text text-center mt-4 max-w-3xl mx-auto">
            Discover the key features and premium amenities of our vehicles,
            designed to provide maximum comfort, safety, and convenience on every
            journey.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10" amount={0.3}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] px-4 py-6 text-center shadow-[0_18px_40px_rgba(45,33,15,0.08)]"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#E8D8BF] bg-white/85 shadow-[0_12px_28px_rgba(109,88,48,0.12)] md:h-14 md:w-14">
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="heading-3 text-[#404040] mb-2">{feature.name}</h3>
              <p className="card-text">{feature.description}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div className="container">
        <Cars />
      </div>

      <FooterComponent
        title="Ready to Experience Luxury?"
        description={ctaDescription}
        buttonText={ctaButtonLabel}
        buttonHref="/contact-me"
      />
    </>
  );
}
