// /demo — preview of the rebranded hero and the Transfeero-style booking bar. Never indexed.
// The photo is a placeholder from the site (the real V-Class at Port Hercule) until the night shoot.

import type { Metadata } from "next";
import Image from "next/image";
import { Archivo } from "next/font/google";
import BookingBar from "../ui/booking/booking-bar";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Demo · Kokolimo booking",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function DemoPage() {
  return (
    <div className={archivo.className}>
      {/* No overflow clipping on the section itself: the address suggestions must be able to open below the hero. */}
      <section className="relative isolate bg-[#0f1115] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src="/assets/images/cars/class-v/class-v-mercedes.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%] opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/70 to-transparent" />
        </div>
        <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-[calc(var(--nav-clearance)+3rem)] md:pb-20">
          <h1 className="max-w-[900px] text-[40px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[64px] lg:text-[76px]" style={{ textWrap: "balance" }}>
            Luxury Chauffeur Service on the <span className="text-[#e2b04a]">French Riviera</span>
          </h1>
          <p className="mt-5 max-w-[620px] text-[18px] text-white/80 md:text-[20px]">
            Airport transfers, hourly hire and private tours in Nice, Cannes, Monaco and Saint-Tropez.
          </p>
          <div className="mt-10">
            <BookingBar />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[15px] text-white/85">
            <p>Fixed fare before booking · One hour of waiting included · 10 years on the Riviera</p>
            <p>
              <span className="font-semibold text-white">5.0</span> on Google (32) · <span className="font-semibold text-white">4.8</span> on Tripadvisor (165)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
