import type { Metadata } from "next";
import CarPageTemplate from "../car-page-template";

export const metadata: Metadata = {
  title:
    "Mercedes Maybach Driver Service in French Riviera | VIP VTC | Koko Limo",
  description:
    "Enjoy the ultimate luxury ride with our Mercedes Maybach. Driver service for VIPs, weddings, or executive transfers across the French Riviera.",
  keywords: [
    "Mercedes Maybach driver",
    "Maybach Nice Monaco",
    "luxury driver French Riviera",
    "VIP VTC Maybach",
    "wedding car French Riviera",
    "Koko Limo Maybach",
  ],
  alternates: {
    canonical: "https://kokolimonice.com/cars/maybach",
  },
};

const maybachContent = {
  titlePrefix: "Mercedes Maybach ",
  titleHighlight: "Prestige Perfected",
  heroDescription:
    "Experience unparalleled opulence with driver-driven excellence, handcrafted details, and royal-level comfort.",
  bookLabel: "Book Maybach",
  heroImageSrc: "/cars/maybach/maybach.webp",
  heroImageAlt: "Mercedes Maybach",
  discoverTitle: "Discover the Mercedes Maybach",
  discoverParagraphs: [
    "The Mercedes Maybach is the ultimate expression of luxury and elegance in automotive design. Featuring ultra-premium leather seats, spacious legroom, and sophisticated craftsmanship, every journey feels like first-class travel.",
    "Ideal for VIPs, business executives, or luxury travelers along the French Riviera, the Maybach offers a refined atmosphere with ambient lighting, advanced climate control, and customizable seating for optimal comfort.",
    "Equipped with cutting-edge technology, high-end entertainment systems, and top-tier safety features, the Mercedes Maybach ensures a seamless, safe, and luxurious travel experience.",
  ],
  gallery: [
    { src: "/cars/maybach/maybach-first.webp", alt: "Maybach Interior" },
    { src: "/cars/maybach/maybach-second.webp", alt: "Maybach Exterior" },
    { src: "/cars/maybach/maybach-third.webp", alt: "Maybach Details" },
  ],
  features: [
    {
      name: "Luxury Seats",
      description:
        "Premium leather seating for maximum comfort on every journey.",
      icon: "/star.svg",
    },
    {
      name: "Safety & Privacy",
      description:
        "Top-tier safety features and privacy options ensure a secure and discreet ride.",
      icon: "/safety.svg",
    },
    {
      name: "Advanced Tech",
      description:
        "State-of-the-art infotainment, connectivity, and climate systems for a high-end experience.",
      icon: "/mobile.svg",
    },
    {
      name: "VIP Capacity",
      description:
        "Spacious seating for up to 4 passengers, ideal for VIP travel and executive journeys.",
      icon: "/users.svg",
    },
  ],
  ctaDescription:
    "Book your Mercedes Maybach today and enjoy the ultimate in comfort, style, and sophistication for your next journey.",
  ctaButtonLabel: "Reserve Your Maybach",
};

export default function MaybachPage() {
  return <CarPageTemplate {...maybachContent} />;
}
