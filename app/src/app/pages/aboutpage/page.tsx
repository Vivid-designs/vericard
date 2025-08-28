'use client';

import Link from 'next/link';
import Image from 'next/image'; // For optimized images/SVGs if needed later
import Head from 'next/head'; // For SEO/title

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About VeriCard | Card Compatibility Verification</title>
        <meta name="description" content="Learn about VeriCard, empowering travelers with payment confidence in South Africa." />
      </Head>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-4">About VeriCard</h1> {/* Updated name based on design doc */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering travelers with payment confidence since 2025 {/* Adjusted year to current date */}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="border rounded-lg shadow-sm bg-white"> {/* Replaces Card */}
            <div className="p-8"> {/* Replaces CardContent */}
              <h2 className="text-2xl mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                We believe travel should be about discovery, not payment stress. VeriCard was born from 
                countless traveler stories of declined cards, unexpected fees, and payment confusion in South Africa. 
                Our platform provides instant clarity so you can focus on what matters: experiencing the beauty, 
                culture, and warmth of South Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="mb-16">
          <div className="border rounded-lg shadow-sm bg-muted/50"> {/* Replaces Card with bg-muted/50 */}
            <div className="p-8"> {/* Replaces CardContent */}
              <blockquote className="text-lg italic text-center mb-6">
                "After watching too many friends struggle with payment issues during their South African adventures, 
                We knew there had to be a better way. VeriCard is our solution to turn payment uncertainty into 
                travel confidence."
              </blockquote>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <p className="font-semibold">George Myburgh</p> {/* Update if needed to real founder */}
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl mb-2">50K+</div>
            <p className="text-muted-foreground">Cards Verified</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">95%</div>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">4.9/5</div>
            <p className="text-muted-foreground">User Rating</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border rounded-lg shadow-sm bg-white"> {/* Replaces Card */}
          <div className="p-8 text-center"> {/* Replaces CardContent */}
            <h3 className="text-xl mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="border rounded px-4 py-2 hover:bg-gray-100 transition-colors"> {/* Replaces Button variant="outline" */}
                📧 info@vericard.co.za {/* Updated email based on design doc */}
              </button>
              <button className="border rounded px-4 py-2 hover:bg-gray-100 transition-colors"> {/* Replaces Button variant="outline" */}
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}