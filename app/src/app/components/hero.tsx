"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-44 md:py-76 sm:px-32 sm:py-48 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Test, Check & Travel.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ensure all your payment cards are valid and will work before you travel To South Africa.
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
                href="/pages/verifypage"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
            src={"/blue card in hand.png"}
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
            />
          </div>
        </div>
      </div>

      {/* Enhanced Dynamic Wave Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-600/20 animate-pulse"></div>
        
        {/* Wave Layer 1 - Back Layer */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-40 text-blue-100/80 animate-wave-slow"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(219 234 254)" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="rgb(147 197 253)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="rgb(96 165 250)" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <path
            fill="url(#wave1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Wave Layer 2 - Middle Layer */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-36 text-blue-200/70 animate-wave-medium"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(191 219 254)" stopOpacity="0.7"/>
              <stop offset="50%" stopColor="rgb(147 197 253)" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
          <path
            fill="url(#wave2)"
            d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Wave Layer 3 - Front Layer */}
        <svg
          viewBox="0 0 1440 320"
          className="relative w-full h-32 text-blue-50 animate-wave-fast"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(239 246 255)" stopOpacity="1"/>
              <stop offset="50%" stopColor="rgb(219 234 254)" stopOpacity="1"/>
              <stop offset="100%" stopColor="rgb(191 219 254)" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path
            fill="url(#wave3)"
            d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,144C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-12 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-float-medium"></div>
          <div className="absolute top-16 left-1/2 w-3 h-3 bg-blue-200/30 rounded-full animate-float-fast"></div>
          <div className="absolute top-6 right-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-float-slow"></div>
          <div className="absolute top-20 left-3/4 w-2.5 h-2.5 bg-blue-300/35 rounded-full animate-float-medium"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute bottom-16 left-1/6 w-8 h-8 bg-gradient-to-br from-blue-300/30 to-purple-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-1/5 w-6 h-6 bg-gradient-to-br from-purple-300/40 to-blue-400/40 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute bottom-12 left-3/5 w-4 h-4 bg-gradient-to-br from-blue-400/50 to-cyan-400/50 rounded-full blur-sm animate-pulse delay-500"></div>
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-25px) translateY(-5px); }
        }
        
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(25px) translateY(-8px); }
        }
        
        @keyframes wave-fast {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-15px) translateY(-3px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(360deg); }
        }
        
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite;
        }
        
        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}