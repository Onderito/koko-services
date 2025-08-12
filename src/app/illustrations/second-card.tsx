import Image from "next/image";

export default function SecondCard() {
  return (
    <div className="relative z-0 ">
      {/* Devant */}
      <span className="second-card-illu relative z-10 -rotate-5 bg-[#404040] shadow-gray-offset p-2  flex-center rounded-lg gap-2">
        <Image src="/check-marked.svg" alt="check" width={20} height={20} />
        <p className="font-manrope-regular text-[12px]">
          Always on time <br />
        </p>
      </span>

      {/* Derrière */}
      <span className="second-card-illu relative z-0 -rotate-5 bg-[#404040] shadow-xs p-2 flex-center rounded-lg gap-2 left-1 bottom-3  opacity-20">
        <Image src="/unchecked.svg" alt="check" width={20} height={20} />
        <p className="font-manrope-regular text-[12px]">
          Client left waiting <br />
        </p>
      </span>
    </div>
  );
}
