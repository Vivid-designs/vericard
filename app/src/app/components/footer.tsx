'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'; // Added for footer navigation

// Placeholder: Ensure SVGs are in public/icons/
const cardIcons = [
  '/icons/visa.svg',
  '/icons/mastercard.svg',
  '/icons/amex.svg',
  '/icons/unionpay.svg',
];

export default function Footer() {
  const router = useRouter();

  const handleCTA = () => {
    router.push('/verify');
  };

  return (
    <>
        {/* Footer Section */}
        <footer className="bg-[#1E3A8A] text-white p-4 flex items-center justify-between">
          <div className="ml-[20vw] md:ml-64">
            <span className="text-sm">© 2025 Vericard</span>
          </div>
          <div className="mr-[20vw] md:mr-64 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <Link href="/" className="hover:text-secondary hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondary hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:text-secondary hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-secondary hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary hover:underline">
              Terms of Use
            </Link>
            <Link href="/popia" className="hover:text-secondary hover:underline">
              POPIA Compliance
            </Link>
          </div>
        </footer>
    </>
  );
}