import React from 'react';

const steps = [
  {
    number: "01",
    title: "Enter Details",
    description: "Input your card number, type, and issuing bank. We use bank-level encryption and never store your information.",
    icon: "💳"
  },
  {
    number: "02", 
    title: "Instant Check",
    description: "Our system checks your card against South African payment networks and merchant databases in real-time.",
    icon: "⚡"
  },
  {
    number: "03",
    title: "Go Explore SA",
    description: "Get confidence to travel with clear guidance on where your card works, backup options, and local payment tips.",
    icon: "🇿🇦"
  }
];

export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4">How It Works</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">  {/* Assuming text-muted-foreground ≈ text-gray-500 */}
          Get instant clarity on your card&apos;s compatibility with South African payment systems
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-blue-800 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">  {/* bg-primary text-primary-foreground ≈ bg-blue-800 text-white */}
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-semibold">  {/* bg-accent text-accent-foreground ≈ bg-yellow-400 text-black; adjust if accent is defined */}
                {step.number}
              </div>
            </div>
            <h3 className="text-xl mb-3">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>  {/* text-muted-foreground ≈ text-gray-500 */}
          </div>
        ))}
      </div>

      {/* Compliance Section - Replaced Card with div */}
      <div className="bg-gray-100/50 rounded-lg shadow-sm">  {/* bg-muted/50 ≈ bg-gray-100/50; add border if needed: border border-gray-200 */}
        <div className="p-8 text-center">  {/* Equivalent to CardContent padding */}
          <h3 className="text-lg mb-4">Security & Compliance</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">🔒</span>
              <span>PCI-DSS Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">🛡️</span>
              <span>POPIA Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">🚫</span>
              <span>No Data Stored</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">  {/* text-muted-foreground ≈ text-gray-500 */}
            Your card information is processed securely and never stored on our servers. 
            We comply with all relevant data protection regulations.
          </p>
        </div>
      </div>
    </div>
  );
}