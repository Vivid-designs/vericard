"use client";

import { useState } from 'react';
import { Shield, Users, Zap, Globe, CheckCircle, Star, ArrowRight, Mail, MessageCircle, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const stats = [
    { number: '50K+', label: 'Cards Verified', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle, color: 'from-blue-600 to-blue-700' },
    { number: '4.9/5', label: 'User Rating', icon: Star, color: 'from-blue-400 to-blue-500' },
    { number: '30+', label: 'Countries Served', icon: Globe, color: 'from-blue-500 to-blue-700' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level encryption protects your sensitive payment information at every step of the verification process.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get immediate verification results in under 3 minutes so you can plan your trip with complete confidence.',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Users,
      title: 'Traveler Focused',
      description: 'Built by travelers, for travelers. We understand your payment concerns and South African requirements.',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Specialized knowledge of South African payment systems, regulations, and banking requirements.',
      gradient: 'from-blue-500 to-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section - Matching your hero style */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 overflow-hidden">
        {/* Background animations matching your hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-16 left-1/2 w-3 h-3 bg-blue-200/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-16 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 shadow-sm mb-6">
              <Shield className="h-4 w-4 text-blue-500" />
              100+ <span className="text-yellow-400">★★★★★</span> reviews
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              About <span className="text-blue-500">Veri</span>Card
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We&apos;re eliminating payment stress for travelers heading to South Africa. 
              Test your cards before you travel and enjoy peace of mind.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-md hover:bg-gray-100 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Wave decoration matching your hero */}
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

      {/* Stats Section - Matching contact page card style */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                //onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg mb-4 transform transition-transform duration-200 ${hoveredStat === index ? 'scale-110' : ''}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">Why VeriCard exists and what drives us every day</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              We believe travel should be about discovery, not payment stress. VeriCard was born from 
              countless traveler stories of declined cards, unexpected fees, and payment confusion in South Africa. 
              Our platform provides instant clarity so you can focus on what matters: experiencing the beauty, 
              culture, and warmth of South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Matching contact page style */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300"
                //onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-lg flex items-center justify-center transform transition-transform duration-200 ${hoveredValue === index ? 'scale-110' : ''}`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-105 transition-transform duration-200">
                <span className="text-3xl">👨‍💻</span>
              </div>
              
              <blockquote className="text-xl italic text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                &quot;After watching too many friends struggle with payment issues during their South African adventures, 
                we knew there had to be a better way. VeriCard is our solution to turn payment uncertainty into 
                travel confidence.&quot;
              </blockquote>
              
              <div>
                <p className="text-xl font-semibold text-gray-900">George Myburgh</p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Matching contact page style */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions or feedback? We&apos;d love to hear from you and help make your South African travel experience seamless.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:info@vericard.co.za"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-md hover:bg-gray-100 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
                info@vericard.co.za
              </a>
              
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}