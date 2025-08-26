'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';

// Placeholder: Ensure SVGs are in public/icons/
const cardIcons = [
  '/icons/visa.svg',
  '/icons/mastercard.svg',
  '/icons/amex.svg',
  '/icons/unionpay.svg',
];

export default function HomePage() {
  return (
    <>
   < Hero />
   <About />
   </>
  );
}