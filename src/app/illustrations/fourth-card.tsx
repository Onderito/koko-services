import Image from "next/image";

export default function FourthCard() {
  return (
    <section className="py-10">
      {/* Titre centré */}
      <h4 className="text-fourth-card text-center font-manrope-bold text-[16px] tracking-tight text-white/92">
        We speak
      </h4>

      {/* Drapeaux alignés au centre */}
      <div className="mt-6 flex items-end justify-center gap-6">
        {/* FR */}
        <div className="flag-card relative -top-3 flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#2F2F2F] text-[18px]">
            🇫🇷
          </span>
          <span className="font-manrope-bold text-[10px] uppercase tracking-[0.12em] text-white/45">
            FR
          </span>
        </div>

        {/* RU */}
        <div className="flag-card flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#2F2F2F] text-[18px]">
            🇷🇺
          </span>
          <span className="font-manrope-bold text-[10px] uppercase tracking-[0.12em] text-white/45">
            RU
          </span>
        </div>

        {/* EN sélectionné */}
        <div className="flag-card relative flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#6BA7FF]/40 bg-[linear-gradient(180deg,#3A3A3A_0%,#2A2A2A_100%)] text-[18px] shadow-[0_0_0_2px_rgba(107,167,255,0.85),0_8px_20px_rgba(107,167,255,0.25)]">
            🇬🇧
          </span>
          <span className="font-manrope-bold text-[10px] uppercase tracking-[0.12em] text-[#6BA7FF]">
            EN
          </span>
          <Image
            className="mouse-svg absolute -right-5 -bottom-2"
            src="/assets/icons/ui/mouse.svg"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
        </div>

        {/* TR */}
        <div className="flag-card relative -top-3 flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#2F2F2F] text-[18px]">
            🇹🇷
          </span>
          <span className="font-manrope-bold text-[10px] uppercase tracking-[0.12em] text-white/45">
            TR
          </span>
        </div>
      </div>
    </section>
  );
}
