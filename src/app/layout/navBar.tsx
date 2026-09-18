"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { businessName, whatsappUrl } from "../data/site-config";
import { serviceMenuLinks } from "../data/service-pages";

const contactCtaLabel = "WhatsApp Us";

const vehicleLinks = [
  {
    href: "/cars/class-v",
    label: "Mercedes V-Class",
    description: "Spacious Mercedes van for groups and luggage",
  },
  {
    href: "/cars/class-s",
    label: "Mercedes S-Class",
    description: "Executive comfort for premium transfers",
  },
  {
    href: "/cars/maybach",
    label: "Mercedes Maybach",
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50">
      <div className="relative z-30 flex justify-center px-4 py-4 md:px-5 md:py-4">
        {/* Background container centré */}
        <div
          className="relative flex h-[60px] w-full items-center justify-between rounded-[22px]
                        border border-[#E8E8E8] bg-white/92 px-4 shadow-[0_10px_28px_rgba(64,64,64,0.06)]
                        backdrop-blur-md md:h-[64px] md:w-[88%] md:max-w-[1100px] md:px-5
                        xl:h-[68px] xl:w-[78%] xl:max-w-[1140px] xl:px-6 2xl:w-[72%]"
        >
          {/* Logo à gauche */}
          <Link
            onClick={closeMobileMenu}
            href="/"
            className="shrink-0 font-manrope-bold text-[17px] tracking-[-0.03em] text-[#111111] md:text-[18px] xl:text-[20px]"
          >
            {businessName}
          </Link>

          {/* Liens centrés */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex">
            <DesktopDropdown
              label="Services"
              links={serviceMenuLinks}
              isOpen={activeDropdown === "services"}
              onOpen={() => setActiveDropdown("services")}
              onClose={() => setActiveDropdown(null)}
              onNavigate={handleResetScroll}
            />
            <DesktopDropdown
              label="Our Fleet"
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
            <li>
              <Link
                onClick={handleResetScroll}
                href="/partners"
                className="whitespace-nowrap font-manrope-regular text-[14px] text-gray-600 transition-colors duration-200 hover:text-[#404040]"
              >
                Travel Partners
              </Link>
            </li>
          </ul>
          {/* Bouton / Mobile burger à droite */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Reserve my driver */}
            <Link
              href="/contact-me"
              onClick={handleResetScroll}
              aria-label="Reserve a private driver"
              className="hidden xl:block"
            >
              <span className="inline-flex h-[38px] items-center rounded-[14px] bg-[#111111] px-4 text-[13px] font-manrope-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#2a2a2a] active:scale-[0.96]">
                Reserve my driver
              </span>
            </Link>
            {/* WhatsApp */}
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
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-10 bg-black/25 backdrop-blur-[2px] xl:hidden"
            />
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
              className="relative z-20 mx-4 max-h-[calc(100dvh-92px)] overflow-y-auto overscroll-contain rounded-[24px] border border-[#E5E5E5] bg-white px-2 py-2 shadow-[0_12px_32px_rgba(64,64,64,0.08)] xl:hidden"
            >
            <ul className="space-y-2 px-2 py-3">
              <li>
                <button
                  type="button"
                  aria-expanded={activeDropdown === "mobile-services"}
                  aria-controls="mobile-services-menu"
                  onClick={() =>
                    setActiveDropdown((current) =>
                      current === "mobile-services" ? null : "mobile-services",
                    )
                  }
                  className="flex min-h-11 w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-manrope-bold text-[15px] text-[#404040] transition-colors duration-200 hover:bg-[#F6F6F6]"
                >
                  <span>Services</span>
                  <span
                    aria-hidden="true"
                    className={`text-[18px] transition-transform duration-200 ${activeDropdown === "mobile-services" ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </li>
              {activeDropdown === "mobile-services" ? (
                <li id="mobile-services-menu">
                  <ul className="space-y-1 border-l border-[#E7D9BF] pl-3">
                    {serviceMenuLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          onClick={closeMobileMenu}
                          href={item.href}
                          className="block rounded-2xl px-4 py-3 font-manrope-regular text-[15px] text-gray-600 transition-colors duration-200 hover:bg-[#F6F6F6] hover:text-[#404040]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null}
              <li>
                <button
                  type="button"
                  aria-expanded={activeDropdown === "mobile-fleet"}
                  aria-controls="mobile-fleet-menu"
                  onClick={() =>
                    setActiveDropdown((current) =>
                      current === "mobile-fleet" ? null : "mobile-fleet",
                    )
                  }
                  className="flex min-h-11 w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-manrope-bold text-[15px] text-[#404040] transition-colors duration-200 hover:bg-[#F6F6F6]"
                >
                  <span>Our Fleet</span>
                  <span
                    aria-hidden="true"
                    className={`text-[18px] transition-transform duration-200 ${activeDropdown === "mobile-fleet" ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </li>
              {activeDropdown === "mobile-fleet" ? (
                <li id="mobile-fleet-menu">
                  <ul className="space-y-1 border-l border-[#E7D9BF] pl-3">
                    {vehicleLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          onClick={closeMobileMenu}
                          href={item.href}
                          className="block rounded-2xl px-4 py-3 font-manrope-regular text-[15px] text-gray-600 transition-colors duration-200 hover:bg-[#F6F6F6] hover:text-[#404040]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null}
              <li>
                <Link
                  onClick={closeMobileMenu}
                  href="/blog"
                  className="block rounded-2xl px-4 py-3 font-manrope-regular text-[16px] text-gray-600 transition-colors duration-300 hover:bg-[#F6F6F6] hover:text-[#404040]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMobileMenu}
                  href="/partners"
                  className="block rounded-2xl px-4 py-3 font-manrope-regular text-[16px] text-gray-600 transition-colors duration-300 hover:bg-[#F6F6F6] hover:text-[#404040]"
                >
                  Travel Partners
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMobileMenu}
                  href="/contact-me"
                  className="mt-2 block rounded-2xl bg-[#111111] px-4 py-4 text-center font-manrope-bold text-[16px] text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                >
                  Reserve my driver
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
          </>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
