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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-800">VeriCard</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/homepage"
              className="text-gray-700 hover:text-blue-800 hover:underline transition-colors font-medium focus:outline-none"
              aria-label="Navigate to home"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-blue-800 hover:underline transition-colors font-medium focus:outline-none"
              aria-label="Navigate to how it works"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-800 hover:underline transition-colors font-medium focus:outline-none"
              aria-label="Navigate to the about us page"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-800 hover:underline transition-colors font-medium focus:outline-none"
              aria-label="Navigate to the contact us page"
            >
              Contact Us
            </Link>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-800"
                aria-label="Select language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <Link
              href="/homepage"
              className="block px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="block px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}