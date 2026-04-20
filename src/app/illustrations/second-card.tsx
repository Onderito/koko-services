import Image from "next/image";

export default function SecondCard() {
  return (
    <div className="relative z-0 flex flex-col items-center">
      {/* Devant - succès */}
      <span className="second-card-illu relative z-10 -rotate-[5deg] flex items-center gap-2 rounded-2xl border border-[#6A6A6A] bg-[linear-gradient(180deg,#4A4A4A_0%,#3A3A3A_100%)] p-2 pr-3 shadow-gray-offset">
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
          Always on time
        </p>
      </span>

      {/* Derrière - échec barré */}
      <span className="second-card-illu relative z-0 left-2 -top-2 -rotate-[5deg] flex items-center gap-2 rounded-2xl border border-[#4A4A4A] bg-[linear-gradient(180deg,#3A3A3A_0%,#2E2E2E_100%)] p-2 pr-3 opacity-40 shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7A2A2A]/70">
          <Image
            src="/assets/icons/ui/unchecked.svg"
            alt=""
            width={12}
            height={12}
            aria-hidden="true"
          />
        </span>
        <p className="font-manrope-regular text-[12px] text-white/60 line-through decoration-white/40">
          Client left waiting
        </p>
      </span>
    </div>
  );
}
