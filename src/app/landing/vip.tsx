import Image from "next/image";

export default function Vip() {
  return (
    <div className="flex flex-col">
      <h2 className=" text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center">
        VIP Service Included
      </h2>
      <p className=" text-[16px] md:text-[18px] text-center mt-4 ">
        Tailored quotes for airport transfers, hourly services and custom
        journeys.
      </p>
      <div className="mt-10">
        {/* Mobile: flex-col */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="bg-[#F9FAFB] h-56 rounded-2xl p-4 shadow-xs relative overflow-hidden">
            <h3 className="text-[20px] font-manrope-bold">
              Professional chauffeur <br /> in suit
            </h3>
            <Image
              className="absolute bottom-0 right-0"
              src={"/bento/suit.png"}
              alt="suit"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-xs relative overflow-hidden h-32">
            <h3 className="font-manrope-bold text-[20px] text-center">
              Personalized airport pickup with name sign
            </h3>
          </div>
          <div className="bg-[#2A2A2A] rounded-2xl p-4 shadow-xs relative overflow-hidden h-40">
            <h3 className="text-white font-manrope-bold text-[20px] text-center">
              Top-of-the-range, impeccably maintained vehicles
            </h3>
            <Image
              className="absolute left-[-45px] bottom-[-15px]"
              src={"/bento/circle.svg"}
              alt="circle"
              width={100}
              height={100}
            />
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-xs relative overflow-hidden h-32">
            <h3 className="font-manrope-bold text-[20px] text-center">
              Complimentary bottled water on board
            </h3>
            <Image
              className="absolute left-[-40px] bottom-[-80px]"
              src={"/bento/bottle.svg"}
              alt="bottle"
              width={120}
              height={100}
            />
            <Image
              className="absolute right-[-40px] bottom-[-80px]"
              src={"/bento/bottle2.svg"}
              alt="bottle"
              width={120}
              height={100}
            />
          </div>
          <div className="bg-[#2A2A2A] rounded-2xl p-4 shadow-xs relative overflow-hidden h-56">
            <h3 className="text-white font-manrope-bold text-[20px]">
              Phone chargers available
            </h3>
            <Image
              className="absolute left-[-20px] bottom-[-90px]"
              src={"/bento/phone.png"}
              alt="phone"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Tablette/Desktop: grid avec proportions ajustées */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:h-[450px]">
          {/* Colonne gauche - plus rectangulaire (1 colonne) */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-xs relative overflow-hidden">
            <h3 className="text-[20px] xl:text-[24px] font-manrope-bold leading-8">
              Professional chauffeur <br /> in suit
            </h3>
            <Image
              className="absolute bottom-0 right-0"
              src={"/bento/suit.png"}
              alt="suit"
              width={300}
              quality={100}
              height={200}
            />
          </div>
          {/* Colonne centrale - plus d'espace (3 colonnes) */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-xs relative overflow-hidden flex-1">
              <div className="flex flex-row items-center justify-center h-full">
                <h3 className="font-manrope-bold text-[20px] xl:text-[24px] text-center leading-8">
                  Personalized airport pickup with{" "}
                  <br className="hidden xl:block" /> bname sign
                </h3>
              </div>
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl p-4 shadow-xs relative overflow-hidden flex-1">
              <div className="flex flex-row items-center justify-center h-full">
                <h3 className="text-white font-manrope-bold text-[20px] xl:text-[24px] text-center leading-8">
                  Top-of-the-range, impeccably{" "}
                  <br className="hidden xl:block" /> maintained vehicles
                </h3>
              </div>
              <Image
                className="absolute left-[-45px] md:hidden bottom-[-40px]"
                src={"/bento/circle.svg"}
                alt="circle"
                width={150}
                quality={100}
                height={100}
              />
            </div>
            <div className="bg-[#F9FAFB] rounded-2xl p-4 shadow-xs relative overflow-hidden flex-1">
              <div className="flex flex-row items-center justify-center h-full">
                <h3 className="font-manrope-bold text-[20px] xl:text-[24px] text-center leading-8">
                  Complimentary bottled water <br className="hidden xl:block" />{" "}
                  on board
                </h3>
              </div>
              <Image
                className="absolute left-[-40px] bottom-[-80px] md:bottom-[-110px]"
                src={"/bento/bottle.svg"}
                alt="bottle"
                width={150}
                quality={100}
                height={100}
              />
              <Image
                className="absolute right-[-40px] bottom-[-80px] md:bottom-[-110px]"
                src={"/bento/bottle2.svg"}
                alt="bottle"
                width={150}
                quality={100}
                height={100}
              />
            </div>
          </div>
          {/* Colonne droite - plus rectangulaire (1 colonne) */}
          <div className="bg-[#2A2A2A] rounded-2xl p-4 shadow-xs relative overflow-hidden">
            <h3 className="text-white font-manrope-bold text-[20px] xl:text-[24px] leading-8 ">
              Phone chargers <br className="hidden xl:block" /> available
            </h3>
            <Image
              className="absolute left-0 bottom-[-60px] "
              src="/bento/phone.png"
              alt="Phone"
              width={280}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
