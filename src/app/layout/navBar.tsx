"use client";

import Link from "next/link";
import { useState } from "react";
import { ScrollTrigger } from "gsap/all";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResetScroll = () => {
    ScrollTrigger.killAll();
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  };
  return (
    <nav className="fixed w-full z-50">
      <div className="flex justify-center p-4">
        {/* Background container centré */}
        <div
          className="flex justify-between items-center w-full max-w-[1250px] h-16 md:h-18
                        bg-white/80 backdrop-blur-xs rounded-3xl px-4 md:px-4 border-[0.5px] border-[#E5E5E5]"
        >
          {/* Logo à gauche */}
          <Link
            onClick={closeMobileMenu}
            href="/"
            className="font-manrope-bold text-[18px] md:text-[20px] text-[#404040]"
          >
            ViplimoNice
          </Link>

          {/* Liens centrés */}
          <ul className="hidden xl:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href="/our-services/transfer"
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Transfer
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href="/our-services/hourly-services"
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Hourly Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href={"/our-services/private-tour"}
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Private Tour
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href={"/cars/class-v"}
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Class-V
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href={"/cars/class-s"}
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Class-S
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={handleResetScroll}
                href={"/cars/maybach"}
                className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer"
              >
                Maybach
              </Link>
            </li>
          </ul>
          {/* Bouton / Mobile burger à droite */}
          <div className="flex items-center gap-4">
            {/* Desktop button */}
            <a
              target="_blank"
              aria-label="Contact us on whatsapp"
              rel="noopener noreferrer"
              href="https://wa.me/33771698142"
            >
              <button className="hidden xl:block text-[16px] font-manrope-bold text-white bg-[#23C063] px-8 rounded-2xl h-[52px] cursor-pointer">
                Contact us
              </button>
            </a>

            {/* Mobile menu button */}
            <button
              aria-label="open menu for mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            >
              <span
                className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-[#404040] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="xl:hidden bg-white relative rounded-3xl border-[0.5px] border-[#E5E5E5]"
        >
          <ul className="py-4 space-y-2 px-2 ">
            <li>
              <Link
                href={"/our-services/transfer"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Transfer
              </Link>
            </li>
            <li>
              <Link
                href={"/our-services/hourly-services"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Hourly Services
              </Link>
            </li>
            <li>
              <Link
                href={"/our-services/private-tour"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Private Tour
              </Link>
            </li>
            <li>
              <Link
                href={"/cars/class-v"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Class-V
              </Link>
            </li>
            <li>
              <Link
                href={"/cars/class-s"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Class-S
              </Link>
            </li>
            <li>
              <Link
                href={"/cars/maybach"}
                className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300"
              >
                Maybach
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                aria-label="Contact us on whatsapp"
                rel="noopener noreferrer"
                href="https://wa.me/33771698142"
                className="block px-4 py-4 font-manrope-bold text-[16px] text-white bg-[#23C063] rounded-2xl text-center"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
