'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full bg-white backdrop-blur-md shadow-lg border border-white/10">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 text-xl font-bold text-gray-800">
          Veri<span className='text-blue-500'>Card</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-m* font-large text-gray-550">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/pages/howitworkspage" className="hover:text-blue-500 transition">
            How It Works
          </Link>
          <Link href="/pages/aboutpage" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/pages/contactpage" className="hover:text-blue-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Language Selector + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative hidden md:block">
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="appearance-none bg-transparent border border-blue-550/20 rounded-md px-3 py-1 pr-8 text-sm font-medium text-gray-550/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-black">
                  {lang.label}
                </option>
              ))}
            </select>
            <Globe className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-550 pointer-events-none" />
          </div>

          {/* CTA (Desktop only) */}
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-gray-100 shadow-md hover:bg-gray-100 hover:text-blue-500 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 py-4 space-y-2 bg-black/80 backdrop-blur-md rounded-b-2xl">
          <Link
            href="/"
            className="block px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pages/howitworkspage"
            className="block px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/pages/aboutpage"
            className="block px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pages/contactpage"
            className="block px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/get-started"
            className="block px-6 py-2 text-sm font-semibold text-black bg-white rounded-full shadow-md hover:bg-gray-200 transition text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
