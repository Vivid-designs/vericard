"use client";

import { useState } from 'react';
import { CreditCard, Zap, MapPin, Shield, Lock, CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredCompliance, setHoveredCompliance] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Enter Card Details",
      description: "Input your card number, type, and issuing bank. We use bank-level encryption and never store your information.",
      icon: CreditCard,
      gradient: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      number: "02", 
      title: "Instant Verification",
      description: "Our system checks your card against South African payment networks and merchant databases in real-time.",
      icon: Zap,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      number: "03",
      title: "Travel with Confidence",
      description: "Get clear guidance on where your card works, backup payment options, and local South African payment tips.",
      icon: MapPin,
      gradient: "from-blue-600 to-blue-800",
      bgColor: "from-blue-200 to-blue-300"
    }
  ];

  const compliance = [
    {
      icon: Shield,
      title: "PCI-DSS Compliant",
      description: "Highest security standards for card data",
      color: "text-green-600"
    },
    {
      icon: Lock,
      title: "POPIA Compliant", 
      description: "South African data protection certified",
      color: "text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "No Data Stored",
      description: "Information processed and immediately deleted",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-64 pb-64 overflow-hidden ">
        {/* Background animations matching your components */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-16 left-1/2 w-3 h-3 bg-blue-200/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 shadow-sm mb-6">
              <Zap className="h-4 w-4 text-blue-500" />
              Takes less than 3 minutes
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              How It Works
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Get instant clarity on your card&qouts;s compatibility with South African payment systems. 
              Simple, secure, and lightning fast.
            </p>

            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              <Play className="h-4 w-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-16 text-blue-50"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Three Simple Steps</h2>
            <p className="text-gray-600">From card verification to confident travel in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                //onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 transform translate-x-4 z-10"></div>
                )}

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 ${hoveredStep === index ? 'scale-110 rotate-3' : ''}`}>
                    <step.icon className="h-10 w-10 text-white" />
                    
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full animate-ping opacity-20`}></div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Arrow for flow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Start Verification Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
            <p className="text-gray-600">Your data is protected by industry-leading security standards</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {compliance.map((item, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                  //onMouseEnter={() => setHoveredCompliance(index)}
                  onMouseLeave={() => setHoveredCompliance(null)}
                >
                  <div className={`w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 transform transition-all duration-200 ${hoveredCompliance === index ? 'scale-110 shadow-lg' : ''}`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/80 rounded-lg p-6 border border-blue-100">
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                Your card information is processed securely and never stored on our servers. 
                We comply with all relevant data protection regulations including PCI-DSS and South Africa&apos;s POPIA. 
                All data is encrypted in transit and immediately deleted after verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Quick answers about our verification process</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">How accurate is the verification?</h3>
              <p className="text-gray-600">Our verification system has a 95% accuracy rate, tested against real South African merchant systems.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">What if my card doesn&apos;t work?</h3>
              <p className="text-gray-600">We&apos;ll provide specific guidance on contacting your bank, plus recommend alternative payment methods for your trip.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">Is my information secure?</h3>
              <p className="text-gray-600">Yes. We use bank-level encryption and never store your card details. All processing happens in real-time and data is immediately deleted.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-md hover:bg-gray-100 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}