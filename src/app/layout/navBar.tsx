"use client"

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from "next/navigation";



export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-5 z-50">
            <div className="flex justify-center p-4">
                {/* Background container centré */}
                <div className="flex justify-between items-center w-full max-w-[1200px] h-16 md:h-18 
                        bg-white/80 backdrop-blur-xs rounded-3xl px-4 md:px-4 border-[0.5px] border-[#E5E5E5]">

                    {/* Logo à gauche */}
                    <Link href="/" className="font-manrope-bold text-[18px] md:text-[20px] text-[#404040]">
                        Koko limo
                    </Link>

                    {/* Liens centrés */}
                    {pathname === '/' && (

                        <ul className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                            <li>
                                <a href="#services" className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#cars" className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                    Our cars
                                </a>
                            </li>
                            <li>
                                <a href="#blogs" className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    )}

                    {/* Bouton / Mobile burger à droite */}
                    <div className="flex items-center gap-4">
                        {/* Desktop button */}
                        <button className="hidden md:block text-[16px] font-manrope-bold text-white bg-[#23C063] px-8 rounded-2xl h-[52px] cursor-pointer">
                            Contact us
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                        >
                            <span className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`w-6 h-0.5 bg-[#404040] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white rounded-3xl border-[0.5px]  border-[#E5E5E5] mt-2">

                    {pathname === '/' && (
                        <ul className="py-4 space-y-2 px-2 ">
                            <li>
                                <a href="#services" className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#cars" className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Our cars
                                </a>
                            </li>
                            <li>
                                <a href="#blogs" className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="block px-4 py-4 font-manrope-bold text-[16px] text-white bg-[#23C063] rounded-2xl text-center">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </nav>
    );
}
