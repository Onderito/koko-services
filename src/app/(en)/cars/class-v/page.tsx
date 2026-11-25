import type { Metadata } from "next";
import { pageMetadata } from "@/app/data/page-metadata";
import CarPageTemplate from "@/app/cars/car-page-template";

export const metadata: Metadata = pageMetadata({
  title: "Mercedes Class-V Driver Service in French Riviera | kokolimo",
  description:
    "Travel in comfort with our spacious Mercedes-Benz Class-V. Ideal for families, business teams or group transfers from Nice to Monaco, Cannes and beyond.",
  path: "/cars/class-v",
  image: "/assets/images/cars/class-v/class-v-mercedes.webp",
  imageAlt: "A black Mercedes V-Class with its sliding door open on the quay of Port Hercule, Monaco, at dusk",
  allowPortrait: true,
});

const classVContent = {
  titlePrefix: "Mercedes V-Class ",
  titleHighlight: "Luxury Redefined",
  heroDescription:
    "Travel in supreme comfort with premium leather seating, climate control, and spacious interior for up to 7 passengers.",
  bookLabel: "Book this vehicle",
  heroImageSrc: "/assets/images/cars/class-v/class-v-mercedes.webp",
  heroImageAlt: "Mercedes Class V",
  discoverTitle: "Discover the Mercedes Class-V",
  discoverTitleMobile: (
    <>
      Discover the Mercedes <br /> Class- V
    </>
  ),
  discoverParagraphs: [
    "The Mercedes Class-V sets the standard for luxury travel in a spacious and elegant van. Designed with premium leather seats, generous legroom, and adjustable seating, every journey offers unparalleled comfort for passengers.",
    "Ideal for families, business travelers, or groups, the Class-V combines style and functionality. Its advanced climate control, high-quality materials, and carefully designed interior create a first-class experience on every ride.",
    "Perfect for airport transfers, city tours, and longer trips along the French Riviera, the Mercedes Class-V ensures safety, reliability, and premium amenities tailored to your needs.",
  ],
  gallery: [
    {
      src: "/assets/images/cars/class-v/class-v-first.webp",
      alt: "Class V Interior",
    },
    {
      src: "/assets/images/cars/class-v/class-v-second.webp",
      alt: "Class V Exterior",
    },
    {
      src: "/assets/images/cars/class-v/class-v-third.webp",
      alt: "Class V Details",
    },
  ],
  features: [
    {
      name: "Luxury Seats",
      description:
        "Premium leather seating for maximum comfort on every journey.",
      icon: "/assets/icons/features/star.svg",
    },
    {
      name: "Climate Control",
      description: "Multi-zone climate control for perfect comfort.",
      icon: "/assets/icons/features/snow.svg",
    },
    {
      name: "Large Luggage",
      description: "Ample space for suitcases, bags, and travel gear.",
      icon: "/assets/icons/features/suit-case.svg",
    },
    {
      name: "7 Passengers",
      description: "Spacious design ideal for group travel or family trips.",
      icon: "/assets/icons/features/users.svg",
    },
  ],
  ctaDescription:
    "Book your Mercedes Class-V today and enjoy the ultimate in comfort, style, and sophistication for your next journey.",
  ctaButtonLabel: "Book this vehicle",
};

export default function ClassVPage() {
  return <CarPageTemplate {...classVContent} />;
}
