'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link' ;

// Placeholder: Ensure SVGs are in public/icons/
const cardIcons = [
  '/icons/visa.svg',
  '/icons/mastercard.svg',
  '/icons/amex.svg',
  '/icons/unionpay.svg',
];


export default function About() {

  const router = useRouter();
  const HandleAboutCTA = () => {
  const router = useRouter();
  router.push('./pages/aboutpage');
}


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
 <Link
              href="/pages/howitworkspage"
              className="relative z-10 bg-blue-300 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 text-white hover:text-blue-300 hover:bg-white text-lg font-bold px-12 py-3 rounded-lg"
              style={{ minHeight: "48px" }}
            >
              Learn More
            </Link>
          </div>
        </section>
    </>
  );
}