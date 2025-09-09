"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-64">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              List, Rent & Sell More.
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Work smarter, close faster, stay organized, and grow your agency -
              all in one place.
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 shadow-sm">
                100+ <span className="text-yellow-400">★★★★★</span> reviews
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/get-started"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/Gradient hand card.png"
              alt="Dashboard screenshot"
              width={1000}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Decorative Wave (not in Framer, added manually) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 text-blue-50"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
