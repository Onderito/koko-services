import type { Metadata } from "next";
import CarPageTemplate from "../car-page-template";

export const metadata: Metadata = {
  title: "Mercedes Class-S Driver Nice & Monaco | Luxury VTC | Koko Limo",
  description:
    "Book our Mercedes-Benz S-Class for a premium and elegant ride across the French Riviera. Perfect for business travel and VIP airport transfers.",
  keywords: [
    "Mercedes S-Class driver",
    "luxury VTC French Riviera",
    "private driver Nice",
    "driver Class S Monaco",
    "executive transfer Nice airport",
    "Koko Limo Class S",
  ],
  alternates: {
    canonical: "https://kokolimonice.com/cars/class-s",
  },
};

const classSContent = {
  titlePrefix: "Mercedes S-Class  ",
  titleHighlight: "Excellence Defined",
  heroDescription:
    "The pinnacle of luxury with handcrafted interior, advanced technology, and unparalleled comfort for discerning clients.",
  bookLabel: "Book S-Class",
  heroImageSrc: "/cars/class-s/class-s.svg",
  heroImageAlt: "Mercedes Class S",
  discoverTitle: "Discover the Mercedes Class-S",
  discoverParagraphs: [
    "The Mercedes Class-S represents the pinnacle of luxury sedans, combining elegant design with cutting-edge technology. Its premium leather seats, spacious interior, and advanced safety features ensure an exceptionally smooth and comfortable ride.",
    "Perfect for business trips, airport transfers, or touring the French Riviera, the Class-S offers a sophisticated environment with customizable seating, ambient lighting, and advanced climate control for every passenger.",
    "Equipped with top-tier safety features and modern amenities, the Mercedes Class-S provides a first-class travel experience. Enjoy ample legroom, high-quality materials, and refined details that make every journey truly unforgettable.",
  ],
  gallery: [
    { src: "/cars/class-s/class-s-first.webp", alt: "Class S Interior" },
    { src: "/cars/class-s/class-s-second.webp", alt: "Class S Exterior" },
    { src: "/cars/class-s/class-s-third.webp", alt: "Class S Details" },
  ],
  features: [
    {
      name: "Luxury Seats",
      description:
        "Premium leather seating for maximum comfort on every journey.",
      icon: "/star.svg",
    },
    {
      name: "Safety Features",
      description:
        "Equipped with top-tier safety systems to ensure peace of mind on every journey.",
      icon: "/safety.svg",
    },
    {
      name: "Advanced Tech",
      description:
        "Cutting-edge infotainment, connectivity, and climate control for a modern travel experience.",
      icon: "/mobile.svg",
    },
    {
      name: "4 Passengers",
      description:
        "Spacious seating for up to 4 passengers, ideal for business or personal travel.",
      icon: "/users.svg",
    },
  ],
  ctaDescription:
    "Book your Mercedes Class-S today and enjoy the ultimate in comfort, style, and sophistication for your next journey.",
  ctaButtonLabel: "Reserve Your Class-S",
};

export default function ClassSPage() {
  return <CarPageTemplate {...classSContent} />;
}
