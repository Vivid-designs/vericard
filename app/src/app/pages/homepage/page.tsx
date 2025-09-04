'use client';

// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import Head from 'next/head';
import Hero from '../../components/hero';
import About from '../../components/about';
import VerifyCard from '../../components/verify';

// Placeholder: Ensure SVGs are in public/icons/
export default function HomePage() {
  return (
    <>
   < Hero />
   < VerifyCard />
   < About />
   </>
  );
}