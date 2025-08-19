"use client"

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
    onScrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        pricingRef: React.RefObject<HTMLDivElement | null>;
        serviceRef: React.RefObject<HTMLDivElement | null>;
        blogRef: React.RefObject<HTMLDivElement | null>;
        ourCarsRef: React.RefObject<HTMLDivElement | null>;
    };
}

export default function NavBar({ onScrollTo, refs }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 ">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="font-manrope-bold text-[18px] md:text-[20px] text-[#404040]">
                        Koko Services
                    </Link>

                    {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <a href="/" className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault();
                                onScrollTo(refs.serviceRef)
                            }} className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                Services
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault();
                                onScrollTo(refs.ourCarsRef)
                            }} className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                Our cars
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault();
                                onScrollTo(refs.blogRef)
                            }} className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault();
                                onScrollTo(refs.pricingRef)
                            }} className="font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300 cursor-pointer">
                                Pricing
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                    >
                        <span className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#404040] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#404040] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white rounded-3xl border-[0.5px] border-[#E5E5E5] ">
                        <ul className="py-4 space-y-2">
                            <li>
                                <a href='/'
                                    className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    onScrollTo(refs.serviceRef);
                                }} className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    onScrollTo(refs.ourCarsRef);
                                }} className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Our cars
                                </a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    onScrollTo(refs.blogRef);
                                }} className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    onScrollTo(refs.pricingRef);
                                }} className="block px-4 py-2 font-manrope-regular text-[16px] text-gray-600 hover:text-[#404040] transition-colors duration-300">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}