"use client";

import Image from "next/image";
import React, { useState } from "react";

import { cities, vehicles } from "../data/vehicles";
import { Reveal } from "../ui/reveal";

const featuredVehicleIds = new Set(["mercedes-s", "mercedes-maybach"]);

export default function Pricing() {
  const [activeCity, setActiveCity] = useState(cities[0]);

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[#EEE5D9] bg-[radial-gradient(circle_at_top,#FFF8EE_0%,#FFFFFF_62%)] px-4 py-10 md:px-6 md:py-14 xl:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="section-label">Our Pricing</span>
        <h2 className="heading-2 mt-4 text-center text-[#404040]">
          Driver Services Pricing Guide
        </h2>
        <p className="body-text mt-4 text-center">
          A cleaner way to compare transfer, hourly, and full-day pricing
          across the Riviera without losing the premium feel of the site.
        </p>
      </Reveal>

      <div className="mx-auto mt-8 max-w-6xl rounded-[30px] border border-[#E9DECF] bg-[linear-gradient(180deg,#FFFDF9_0%,#F7EFE3_100%)] p-5 shadow-[0_18px_48px_rgba(45,33,15,0.08)] md:mt-10 md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-[#6D5830]">
              Indicative Rates
            </p>
            <h3 className="mt-3 text-[26px] font-manrope-bold tracking-[-0.04em] text-[#161616] md:text-[34px]">
              Nice Airport to {activeCity.displayName}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#666666] md:text-[15px]">
              These guide prices help clients understand the order of magnitude
              before requesting a tailored quote. Final pricing can adapt to
              timing, exact route, luggage, and service conditions.
            </p>
          </div>

          <div className="rounded-[22px] border border-[#E7D8C0] bg-white/80 px-4 py-3 text-left shadow-[0_10px_24px_rgba(109,88,48,0.08)] backdrop-blur-sm">
            <p className="text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#6D5830]">
              Selected destination
            </p>
            <p className="mt-2 text-[18px] font-manrope-bold text-[#2E2E2E]">
              {activeCity.displayName}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
          {cities.map((city) => {
            const isActive = activeCity.id === city.id;

            return (
              <button
                key={city.id}
                type="button"
                onClick={() => setActiveCity(city)}
                className={`rounded-full border px-4 py-2 text-[14px] font-manrope-bold tracking-[-0.01em] transition-all duration-200 md:px-5 md:py-2.5 ${
                  isActive
                    ? "border-[#2C2C2C] bg-[#2C2C2C] text-white shadow-[0_12px_24px_rgba(28,28,28,0.18)]"
                    : "border-[#E6D8C4] bg-white text-[#5F5A52] hover:-translate-y-0.5 hover:border-[#D8C6AA] hover:bg-[#FBF8F2]"
                }`}
                aria-pressed={isActive}
              >
                {city.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
        {vehicles.map((vehicle) => {
          const pricing = vehicle.prices[activeCity.id];
          const isFeatured = featuredVehicleIds.has(vehicle.id);

          return (
            <article
              key={vehicle.id}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(36,30,18,0.10)] md:p-5 ${
                isFeatured
                  ? "border-[#E4D1B1] bg-[linear-gradient(180deg,#FFF8EE_0%,#F7EBDC_100%)]"
                  : "border-[#E9E1D6] bg-white"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-32 ${
                  isFeatured
                    ? "bg-[radial-gradient(circle_at_top,#F5E5CA_0%,transparent_72%)]"
                    : "bg-[radial-gradient(circle_at_top,#F3F0EA_0%,transparent_72%)]"
                }`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] ${
                        isFeatured
                          ? "border border-[#DCC49C] bg-white/70 text-[#7B6034]"
                          : "border border-[#ECE4D8] bg-[#FAF8F4] text-[#6C6257]"
                      }`}
                    >
                      {isFeatured ? "Signature Vehicle" : "Vehicle Option"}
                    </span>
                    <h3 className="mt-4 text-[20px] font-manrope-bold leading-tight tracking-[-0.03em] text-[#202020] md:text-[21px] xl:text-[22px] xl:whitespace-nowrap">
                      {vehicle.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-[#6B6B6B]">
                      Up to {vehicle.passengers} passengers
                    </p>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-[12px] font-manrope-bold ${
                      isFeatured
                        ? "bg-[#1E1E1E] text-[#F5E7C9]"
                        : "bg-[#F3F1ED] text-[#4C4C4C]"
                    }`}
                  >
                    {vehicle.id === "mercedes-maybach"
                      ? "VIP"
                      : vehicle.id === "mercedes-s"
                        ? "Executive"
                        : vehicle.id === "mercedes-v"
                          ? "Group"
                          : "Classic"}
                  </div>
                </div>

                <div
                  className={`relative mt-5 overflow-hidden rounded-[24px] border ${
                    isFeatured
                      ? "border-[#E7D8BD] bg-[linear-gradient(180deg,#FFFDF9_0%,#F6ECDD_100%)]"
                      : "border-[#EFE8DE] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F5F0_100%)]"
                  }`}
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} vehicle`}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 92vw"
                      className="object-contain px-5 py-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div
                  className={`mt-5 rounded-[26px] border px-5 py-5 ${
                    isFeatured
                      ? "border-[#E1D0B2] bg-[#201E1B] text-white"
                      : "border-[#ECE4D8] bg-[#FBF8F3]"
                  }`}
                >
                  <p
                    className={`text-[12px] font-manrope-bold uppercase tracking-[0.14em] ${
                      isFeatured ? "text-[#E7D2AA]" : "text-[#7A6750]"
                    }`}
                  >
                    Transfer Rate
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-[38px] font-manrope-bold leading-none tracking-[-0.05em]">
                      {pricing.transfer}€
                    </span>
                    <span
                      className={`pb-1 text-[14px] ${
                        isFeatured ? "text-[#D4C8B4]" : "text-[#6A6A6A]"
                      }`}
                    >
                      to {activeCity.displayName}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div
                    className={`rounded-[22px] border px-4 py-4 ${
                      isFeatured
                        ? "border-[#E5D3B3] bg-white/50"
                        : "border-[#ECE4D8] bg-white"
                    }`}
                  >
                    <p className="text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-[#7A6750]">
                      Hourly
                    </p>
                    <p className="mt-3 text-[28px] font-manrope-bold leading-none tracking-[-0.04em] text-[#202020]">
                      {pricing.hourly}€
                    </p>
                    <p className="mt-2 text-[13px] text-[#6C6C6C]">per hour</p>
                  </div>

                  <div
                    className={`rounded-[22px] border px-4 py-4 ${
                      isFeatured
                        ? "border-[#E5D3B3] bg-white/50"
                        : "border-[#ECE4D8] bg-white"
                    }`}
                  >
                    <p className="text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-[#7A6750]">
                      Full Day
                    </p>
                    <p className="mt-3 text-[28px] font-manrope-bold leading-none tracking-[-0.04em] text-[#202020]">
                      {pricing.fullDay}€
                    </p>
                    <p className="mt-2 text-[13px] text-[#6C6C6C]">8 hours</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-5xl text-center md:mt-10">
        <p className="text-[13px] leading-relaxed text-[#7A7A7A] md:text-[14px]">
          Guide prices are shown for clarity. For events, late-night timing,
          custom itineraries, or multi-stop journeys, we prepare a tailored
          quote adapted to the exact service level required.
        </p>
      </div>
    </section>
  );
}
