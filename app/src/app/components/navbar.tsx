'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsLanguageOpen(false);
    if (isLanguageOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLanguageOpen]);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-blue-100/50' 
        : 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20'
    }`}>
      <div className="flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex-shrink-0 text-xl font-bold text-gray-800 hover:scale-105 transition-transform duration-200"
        >
          Veri<span className='text-blue-500 hover:text-blue-600 transition-colors'>Card</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/pages/howitworkspage" 
            className="relative text-gray-600 font-medium hover:text-blue-500 transition-all duration-200 group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/pages/aboutpage" 
            className="relative text-gray-600 font-medium hover:text-blue-500 transition-all duration-200 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/pages/contactpage" 
            className="relative text-gray-600 font-medium hover:text-blue-500 transition-all duration-200 group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Enhanced Language Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setIsLanguageOpen(!isLanguageOpen);
              }}
              className="flex items-center gap-2 bg-white/80 border border-blue-200/50 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
            >
              <Globe className="h-4 w-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
              <span className="hidden sm:inline">{languages.find(lang => lang.code === currentLanguage)?.label}</span>
              <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-150 ${
                      currentLanguage === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                    {currentLanguage === lang.code && (
                      <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              Get Started
              <div className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all duration-200"></div>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-200 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden border-t border-white/20 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-b-2xl py-4 space-y-1">
          {/* Mobile Language Selector */}
          <div className="px-6 pb-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Language</span>
              <select
                value={currentLanguage}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrentLanguage(e.target.value)}
                className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <Link
            href="/pages/howitworkspage"
            className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg mx-2 transition-all duration-200 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-between">
              How It Works
              <div className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></div>
            </div>
          </Link>
          <Link
            href="/pages/aboutpage"
            className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg mx-2 transition-all duration-200 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-between">
              About
              <div className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></div>
            </div>
          </Link>
          <Link
            href="/pages/contactpage"
            className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg mx-2 transition-all duration-200 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-between">
              Contact Us
              <div className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></div>
            </div>
          </Link>

          {/* Mobile CTA */}
          <div className="px-6 pt-4">
            <Link
              href="/get-started"
              className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}