import Image from "next/image";
import HeroSection from "./landing/hero-section";

export default function Home() {
  return (
    <>
      <section className="container mx-auto px-2 py-16 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <HeroSection />
      </section>
    </>
  );
}
