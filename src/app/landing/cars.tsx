import Image from "next/image";

export default function Cars() {
  return (
    <div className="flex-center-column">
      <span
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="span-anim text-[16px] shadow-lg inner-shadow-dark p-2 px-4 rounded-4xl font-manrope-regular w-fit mx-auto"
      >
        our cars
      </span>
      <h2 className="title text-[32px] md:text-[56px] font-manrope-bold mt-4 text-center h2 text-gray-100">
        Our Fleet, Your Comfort
      </h2>
    </div>
  );
}
