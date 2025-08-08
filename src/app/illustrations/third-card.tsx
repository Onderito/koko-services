import Image from "next/image";

export default function ThirdCard() {
  return (
    <>
      {/* Span complètement à gauche */}
      <span className="text-[12px] absolute left-3 top-3 -rotate-5  bg-[#404040] shadow-gray-offset p-2 rounded-lg">
        <span className="text-[#C2C2C2]">08:45 ·</span> Nice Airport
      </span>

      {/* Flèche */}
      <Image
        src={"/arrow.svg"}
        alt="arrow"
        width={50}
        height={50}
        className="mt-8" // espace pour pas que la flèche chevauche le span
      />
      <span className="absolute right-5 bottom-5 z-10 -rotate-5 bg-[#404040] shadow-gray-offset p-2 flex-center rounded-lg gap-2">
        <Image src="/check-marked.svg" alt="check" width={20} height={20} />
        <p className="font-manrope-regular text-[12px]">
          On Time <br />
        </p>
      </span>
    </>
  );
}
