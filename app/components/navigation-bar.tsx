'use client'

import { useState } from 'react';
import NavBarLinks from './navBarLinks';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-500 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section: App Name */}
                <div className="text-white font-bold text-lg flex items-center">
                    Monitoring Panel
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavBarLinks />
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Hidden by default, shown when toggled) */}
            <div
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-700 p-4`}
            >
                <NavBarLinks />
            </div>
        </nav>
    );
}
