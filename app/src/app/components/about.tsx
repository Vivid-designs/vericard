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

export default function About() {
  const router = useRouter();

  const handleCTA = () => {
    router.push('/verify');
  };

  return (
    <>

        <section className="py-12 px-4 md:px-8 bg-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              About Vericard
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Vericard is dedicated to ensuring seamless card compatibility for travelers to South Africa. Our mission is to provide fast, secure, and reliable verification services, empowering you with peace of mind.
            </p>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              With a focus on innovation and trust, we support Visa, MasterCard, Amex, and UnionPay, adhering to PCI-DSS and POPIA standards.
            </p>
            <button
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 mt-6"
              style={{ minHeight: '48px' }} // Fitts’s Law
            >
              Learn More
            </button>
          </div>
        </section>
    </>
  );
}