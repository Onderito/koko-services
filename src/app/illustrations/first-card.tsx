"use client";
import Image from "next/image";

export default function FirstCard() {
  return (
    <div className="bg-[#404040] shadow-gray-offset -rotate-5 p-2 pr-8 flex-center w-fit rounded-2xl gap-2 first-card-illustration">
      <Image src="/check-marked.svg" alt="check" width={20} height={20} />
      <p className="font-manrope-regular text-[12px]">
        Private transfer to Nice Airport — <br />
        right on schedule.
      </p>
    </div>
  );
}
