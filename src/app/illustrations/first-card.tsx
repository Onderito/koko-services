"use client";
import Image from "next/image";

export default function FirstCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="pointer-events-none absolute -translate-x-6 translate-y-3 -rotate-[10deg] rounded-2xl border border-[#4A4A4A] bg-[linear-gradient(180deg,#3A3A3A_0%,#2E2E2E_100%)] p-2 pr-7 opacity-45 shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full border border-[#6A6A6A]" />
          <p className="font-manrope-regular text-[11px] text-white/60">
            Cannes → Monaco
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute translate-x-5 -translate-y-1 -rotate-[6deg] rounded-2xl border border-[#5A5A5A] bg-[linear-gradient(180deg,#3F3F3F_0%,#333333_100%)] p-2 pr-7 opacity-70 shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16A34A]/80">
            <Image
              src="/assets/icons/ui/check-marked.svg"
              alt=""
              width={10}
              height={10}
              aria-hidden="true"
            />
          </span>
          <p className="font-manrope-regular text-[11px] text-white/70">
            Saint-Tropez arrival
          </p>
        </div>
      </div>

      <div className="first-card-illu relative flex w-fit -rotate-[5deg] items-center gap-2 rounded-2xl border border-[#6A6A6A] bg-[linear-gradient(180deg,#4A4A4A_0%,#3A3A3A_100%)] p-2 pr-8 shadow-gray-offset">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A]">
          <Image
            src="/assets/icons/ui/check-marked.svg"
            alt=""
            width={12}
            height={12}
            aria-hidden="true"
          />
        </span>
        <p className="font-manrope-regular text-[12px] text-white">
          Private transfer to Nice Airport
        </p>
      </div>
    </div>
  );
}
