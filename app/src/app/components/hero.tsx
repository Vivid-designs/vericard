'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';

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
    router.push('/verify');
  };

  return (
    <>
      <Head>
        <title>Vericard - Verify Your Card for South Africa</title>
        <meta name="description" content="Check card compatibility for seamless transactions in South Africa." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col bg-accent font-sans">
        
        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center items-center text-center p-8 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Verify Your Card for South Africa Travel
          </h1>
          <p className="text-xl text-neutral max-w-lg">
            Check Visa, MasterCard, Amex, UnionPay compatibility in seconds.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            {cardIcons.map((icon, idx) => (
              <Image key={idx} src={icon} alt="Card Icon" width={48} height={32} className="h-8" />
            ))}
          </div>
          <button
            onClick={handleCTA}
            className="bg-primary text-blue text-lg font-bold px-8 py-3 rounded-lg hover:bg-opacity-90"
            style={{ minHeight: '48px' }} // Fitts’s Law compliance
          >
            Check Your Card
          </button>
        </main>
      </div>
    </>
  );
}