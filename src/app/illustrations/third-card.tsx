import Image from "next/image";

export default function ThirdCard() {
  return (
    <>
      {/* Pickup - haut gauche */}
      <span className="third-card-illu absolute left-3 top-3 -rotate-[5deg] flex items-center gap-2 rounded-2xl border border-[#6A6A6A] bg-[linear-gradient(180deg,#4A4A4A_0%,#3A3A3A_100%)] p-2 pr-3 text-[12px] shadow-gray-offset">
        <span className="font-manrope-bold text-[#C2C2C2]">08:45</span>
        <span className="h-3 w-px bg-white/20" />
        <span className="text-white">Nice Airport</span>
      </span>

      {/* Flèche animée */}
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="first-path"
          d="M41.6776 46.1727C33.245 45.786 24.9739 43.2785 19.2913 36.5207C14.1621 30.421 13.7801 22.7939 22.4064 20.0335C26.4899 18.7268 32.2051 19.907 34.3632 23.9396C36.7674 28.4322 30.4907 30.7188 27.1417 30.2499C19.3197 29.1546 12.521 22.0123 13.0312 13.3731C13.6354 3.14242 23.9377 5.38407 23.901 5.44377"
          stroke="white"
          strokeWidth="0.79"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="second-path"
          d="M34.897 52.6897C35.2348 51.8192 35.8952 51.1841 36.5216 50.5166C38.5782 48.3243 41.494 46.6207 44.5611 46.4429C41.3451 45.5863 37.4585 43.3904 36.4761 40.034"
          stroke="white"
          strokeWidth="1.79"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Arrivée - bas droite avec dot pulsant */}
      <span className="third-card-illu absolute right-5 bottom-5 z-10 -rotate-[5deg] flex items-center gap-2 rounded-2xl border border-[#6A6A6A] bg-[linear-gradient(180deg,#4A4A4A_0%,#3A3A3A_100%)] p-2 pr-3 shadow-gray-offset">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16A34A]" />
        </span>
        <p className="font-manrope-regular text-[12px] text-white">On Time</p>
      </span>
    </>
  );
}
