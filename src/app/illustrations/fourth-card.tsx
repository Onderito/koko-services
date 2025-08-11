import Image from "next/image";

export default function FourthCard() {
  return (
    <section className="py-12">
      {/* Titre centré */}
      <h4 className="text-fourth-card text-center text-[16px] tracking-tight">
        We speak
      </h4>

      {/* Tous les drapeaux alignés au centre */}
      <div className="mt-6 flex items-center justify-center gap-8">
        {/* Extrémité gauche */}
        <span className="flag-card relative -top-4 flex items-center justify-center w-10 h-10 rounded-2xl bg-[#2F2F2F]">
          🇫🇷
        </span>

        {/* 2ème */}
        <span className="flag-card flex items-center justify-center w-10 h-10 rounded-2xl bg-[#2F2F2F]">
          🇷🇺
        </span>

        {/* 3ème (sélectionné) */}
        <span className="flag-card flex items-center justify-center w-10 h-10 rounded-2xl bg-[#2F2F2F] ring-2 ring-[#6BA7FF]">
          🇬🇧
        </span>
        <Image
          className="mouse-svg absolute right-20 bottom-1"
          src={"/mouse.svg"}
          alt="mouse"
          width={25}
          height={25}
        />

        {/* Extrémité droite */}
        <span className="flag-card relative -top-4 flex items-center justify-center w-10 h-10 rounded-2xl bg-[#2F2F2F]">
          🇹🇷
        </span>
      </div>
    </section>
  );
}
