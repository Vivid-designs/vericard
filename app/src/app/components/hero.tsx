'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// Placeholder: Ensure SVGs are in public/icons/
const cardIcons = [
  '/icons/visa.svg',
  '/icons/mastercard.svg',
  '/icons/amex.svg',
  '/icons/unionpay.svg',
];

export default function Hero() {
  const router = useRouter();

  const handleCTA = () => {
    router.push('#verify');
  };
  const handleLearnMore = () => {
    router.push('/howitworkspage');
  }
  return (
    <>
      <Head>
        <title>Vericard - Verify Your Card for South Africa</title>
        <meta name="description" content="Check card compatibility for seamless transactions in South Africa." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col bg-accent font-sans pb-12">
        
        {/* Hero Section */}
        <main className="relative flex-grow flex flex-col justify-center items-center text-center p-8 space-y-6 bg-gradient-to-r from-blue-900 to-blue-200 overflow-hidden">
          {/* Background Overlay with Map (download free SVG, e.g., from Wikimedia) */}
          <div className="absolute inset-0 bg-[url('/south-africa-map.svg')] bg-center bg-no-repeat bg-contain opacity-10 mix-blend-overlay" />
          {/* Card Icon Pattern Overlay (create or download a repeating pattern SVG) */}
          <div className="absolute inset-0 bg-[url('/card-pattern.svg')] bg-repeat bg-[length:100px] opacity-5 mix-blend-overlay" />
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">
            Verify Your Card for South Africa Travel
          </h1>
          <p className="relative z-10 text-xl text-white max-w-lg">
            Check Visa, MasterCard, Amex, UnionPay compatibility in seconds.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center space-x-4 mb-4">
            {cardIcons.map((icon, idx) => (
              <Image key={idx} src={icon} alt="Card Icon" width={48} height={32} className="h-8" />
            ))}
          </div>
          < div className="flex space-x-8">
             <button
            onClick={handleCTA}
            className=" relative z-10 bg-blue-300 text-white hover:text-blue-300  hover:bg-white text-lg font-bold px-12 py-3 rounded-lg"
            style={{ minHeight: '48px' }} // Fitts’s Law compliance
          >
            Check Your Card
          </button>
                    <button
            onClick={handleLearnMore}
            className=" relative z-10 bg-blue-300 text-white hover:text-blue-300  hover:bg-white text-lg font-bold px-12 py-3 rounded-lg"
            style={{ minHeight: '48px' }} // Fitts’s Law compliance
          >
            Learn More
          </button>
          </ div>
         
        </main>
      </div>
    </>
  );
}