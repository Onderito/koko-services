"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { businessName, whatsappUrl } from "../data/site-config";

const contactCtaLabel = "WhatsApp Us";

const serviceLinks = [
  {
    href: "/our-services/transfer",
    label: "Transfer",
    description: "Airport, hotel and point-to-point rides",
  },
  {
    href: "/our-services/hourly-services",
    label: "Hourly Services",
    description: "Flexible chauffeur service by the hour",
  },
  {
    href: "/our-services/private-tour",
    label: "Private Tour",
    description: "Tailored Riviera experiences with a driver",
  },
];

const vehicleLinks = [
  {
    href: "/cars/class-v",
    label: "Class V",
    description: "Spacious Mercedes van for groups and luggage",
  },
  {
    href: "/cars/class-s",
    label: "Class S",
    description: "Executive comfort for premium transfers",
  },
  {
    href: "/cars/maybach",
    label: "Maybach",
    description: "Flagship luxury for top-tier bookings",
  },
];

function DesktopDropdown({
  label,
  links,
  isOpen,
  onOpen,
  onClose,
  onNavigate,
}: {
  label: string;
  links: Array<{ href: string; label: string; description: string }>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: () => void;
}) {
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className="flex items-center gap-2 whitespace-nowrap font-manrope-regular text-[14px] text-gray-600 transition-colors duration-200 hover:text-[#404040]"
      >
        {label}
        <motion.span
          animate={{ rotate: isOpen ? 225 : 45, y: isOpen ? 1 : 0 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="inline-block h-[7px] w-[7px] border-b border-r border-gray-400"
        >
          <span className="sr-only">Open {label} menu</span>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 24,
              mass: 0.5,
            }}
            className="absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 pt-3"
          >
            <div className="rounded-[20px] border border-[#E5E5E5] bg-white p-2 shadow-[0_16px_36px_rgba(64,64,64,0.10)]">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="block rounded-[16px] px-3 py-3 transition-colors duration-200 hover:bg-[#F6F6F6]"
                >
                  <span className="block font-manrope-bold text-[15px] text-[#404040]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-gray-500">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleResetScroll = () => {
    window.scrollTo(0, 0);
    setActiveDropdown(null);
  };
  return (
    <nav className="fixed w-full z-50">
      <div className="flex justify-center px-4 py-4 md:px-5 md:py-4">
        {/* Background container centré */}
        <div
          className="relative flex h-[60px] w-full items-center justify-between rounded-[22px]
                        border border-[#E8E8E8] bg-white/92 px-4 shadow-[0_10px_28px_rgba(64,64,64,0.06)]
                        backdrop-blur-md md:h-[64px] md:w-[78%] md:max-w-[980px] md:px-5
                        xl:h-[68px] xl:w-[56%] xl:max-w-[860px] xl:px-6 2xl:w-[50%]"
        >
          {/* Logo à gauche */}
          <Link
            onClick={closeMobileMenu}
            href="/"
            className="shrink-0 font-manrope-bold text-[17px] tracking-[-0.03em] text-[#404040] md:text-[18px] xl:text-[20px]"
          >
            {businessName}
          </Link>

          {/* Liens centrés */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex">
            <DesktopDropdown
              label="Services"
              links={serviceLinks}
              isOpen={activeDropdown === "services"}
              onOpen={() => setActiveDropdown("services")}
              onClose={() => setActiveDropdown(null)}
              onNavigate={handleResetScroll}
            />
            <DesktopDropdown
              label="Vehicles"
              links={vehicleLinks}
              isOpen={activeDropdown === "vehicles"}
              onOpen={() => setActiveDropdown("vehicles")}
              onClose={() => setActiveDropdown(null)}
              onNavigate={handleResetScroll}
            />
            <li>
              <Link
                onClick={handleResetScroll}
                href="/blog"
                className="whitespace-nowrap font-manrope-regular text-[14px] text-gray-600 transition-colors duration-200 hover:text-[#404040]"
              >
                Blog
              </Link>
            </li>
          </ul>
          {/* Bouton / Mobile burger à droite */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Desktop button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <span className="hidden h-[38px] items-center rounded-[14px] bg-[#23C063] px-4 text-[13px] font-manrope-bold text-white shadow-[0_8px_18px_rgba(35,192,99,0.20)] transition-colors duration-200 hover:bg-[#1DAA57] xl:inline-flex">
                {contactCtaLabel}
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              aria-label="open menu for mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center space-y-1 xl:hidden"
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
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
              mass: 0.9,
            }}
            onClick={closeMobileMenu}
            className="relative rounded-[24px] border border-[#E5E5E5] bg-white px-2 py-2 shadow-[0_12px_32px_rgba(64,64,64,0.08)] xl:hidden"
          >
            <ul className="space-y-2 px-2 py-3">
              <li>
                <span className="block px-4 pb-1 pt-2 font-manrope-bold text-[13px] uppercase tracking-[0.14em] text-gray-400">
                  Services
                </span>
              </li>
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    onClick={handleResetScroll}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 font-manrope-regular text-[16px] text-gray-600 transition-colors duration-300 hover:bg-[#F6F6F6] hover:text-[#404040]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="block px-4 pb-1 pt-3 font-manrope-bold text-[13px] uppercase tracking-[0.14em] text-gray-400">
                  Vehicles
                </span>
              </li>
              {vehicleLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    onClick={handleResetScroll}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 font-manrope-regular text-[16px] text-gray-600 transition-colors duration-300 hover:bg-[#F6F6F6] hover:text-[#404040]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  onClick={handleResetScroll}
                  href="/blog"
                  className="block rounded-2xl px-4 py-3 font-manrope-regular text-[16px] text-gray-600 transition-colors duration-300 hover:bg-[#F6F6F6] hover:text-[#404040]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="mt-2 block rounded-2xl bg-[#23C063] px-4 py-4 text-center font-manrope-bold text-[16px] text-white shadow-[0_12px_24px_rgba(35,192,99,0.24)]"
                >
                  {contactCtaLabel}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
