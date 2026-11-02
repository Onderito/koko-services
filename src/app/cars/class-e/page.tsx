// The E-Class page (user, 29 Oct 2026: "you didn't make a page for e-class in /cars"), on the same template as the
// S-Class, V-Class and Maybach pages. Facts as stated elsewhere on the site: up to 3 passengers (data/vehicles), flight
// tracking, meet and greet, fixed fare confirmed before the ride. No luggage figure until the owner confirms it.
// Photos generated in the style of the other cars' photos (Codex, user's account), to be replaced by photos of the
// owner's own E-Class when there are some.

import type { Metadata } from "next";
import CarPageTemplate from "../car-page-template";

export const metadata: Metadata = {
  title: "Mercedes Class-E Driver Nice & Monaco | Business VTC | kokolimo",
  description:
    "Book our Mercedes-Benz E-Class with a private driver for business travel and airport transfers across the French Riviera, for up to 3 passengers.",
  keywords: [
    "Mercedes E-Class driver",
    "business VTC French Riviera",
    "private driver Nice",
    "driver Class E Monaco",
    "Nice airport transfer E-Class",
    "kokolimo Class E",
  ],
  alternates: {
    canonical: "https://kokolimo.com/cars/class-e",
  },
};

const classEContent = {
  titlePrefix: "Mercedes E-Class ",
  titleHighlight: "Business Class",
  heroDescription:
    "A quiet, elegant saloon for business travel and airport transfers, for up to 3 passengers, driven by your private chauffeur.",
  bookLabel: "Book this vehicle",
  heroImageSrc: "/assets/images/cars/class-e/class-e.webp",
  heroImageAlt: "Mercedes Class E",
  discoverTitle: "Discover the Mercedes Class-E",
  discoverTitleMobile: (
    <>
      Discover the Mercedes <br /> Class-E
    </>
  ),
  discoverParagraphs: [
    "The Mercedes Class-E is the business saloon of our fleet: discreet, quiet and comfortable, it suits airport transfers, meetings and evenings out across the French Riviera.",
    "Its calm cabin, comfortable seats and climate control make every journey relaxed, whether you are going from Nice Côte d'Azur Airport to Monaco or Cannes, or from one appointment to the next.",
    "Your chauffeur tracks your flight, meets you on arrival and confirms a fixed fare before the ride, so you can simply sit back and enjoy the Riviera.",
  ],
  gallery: [
    {
      src: "/assets/images/cars/class-e/class-e-first.webp",
      alt: "Class E Interior",
    },
    {
      src: "/assets/images/cars/class-e/class-e-second.webp",
      alt: "Class E Cabin",
    },
    {
      src: "/assets/images/cars/class-e/class-e-third.webp",
      alt: "Class E Exterior",
    },
  ],
  features: [
    {
      name: "Business Comfort",
      description:
        "Comfortable seats and a quiet cabin, to work or rest between appointments.",
      icon: "/assets/icons/features/star.svg",
    },
    {
      name: "Safety Features",
      description:
        "Modern safety and driver-assistance systems for peace of mind on every journey.",
      icon: "/assets/icons/features/safety.svg",
    },
    {
      name: "Advanced Tech",
      description:
        "Connectivity and climate control for a comfortable, modern ride.",
      icon: "/assets/icons/features/mobile.svg",
    },
    {
      name: "3 Passengers",
      description:
        "Room for up to 3 passengers, ideal for business travellers and couples.",
      icon: "/assets/icons/features/users.svg",
    },
  ],
  ctaDescription:
    "Book your Mercedes Class-E today for a calm, elegant journey across the French Riviera.",
  ctaButtonLabel: "Book this vehicle",
};

export default function ClassEPage() {
  return <CarPageTemplate {...classEContent} />;
}
