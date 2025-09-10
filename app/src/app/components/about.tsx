"use client";

import { useState } from 'react';
import { Shield, Users, Zap, Globe, CheckCircle, Star, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '50K+', label: 'Cards Verified', icon: Shield },
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '4.9/5', label: 'User Rating', icon: Star },
    { number: '30+', label: 'Countries Served', icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level encryption protects your sensitive payment information at every step.'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get immediate verification results so you can plan your trip with confidence.'
    },
    {
      icon: Users,
      title: 'Traveler Focused',
      description: 'Built by travelers, for travelers. We understand your payment concerns.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Specialized knowledge of South African payment systems and requirements.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'The Problem',
      description: 'Witnessed countless travelers facing payment rejections in South Africa'
    },
    {
      year: '2025',
      title: 'The Solution',
      description: 'Launched VeriCard to provide instant payment card verification'
    },
    {
      year: 'Today',
      title: 'The Impact',
      description: 'Helping thousands of travelers avoid payment stress worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 50,000+ travelers
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              About <span className="text-blue-600">Veri</span><span className="text-gray-800">Card</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We're on a mission to eliminate payment stress for travelers heading to South Africa. 
              No more declined cards, no more surprises—just confident travel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition"
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {['mission', 'story', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe travel should be about discovery, not payment stress. VeriCard was born from 
                    countless traveler stories of declined cards, unexpected fees, and payment confusion in South Africa. 
                    Our platform provides instant clarity so you can focus on what matters: experiencing the beauty, 
                    culture, and warmth of South Africa.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{item.year}</span>
                      </div>
                      <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                      </div>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍💻</span>
              </div>
              
              <blockquote className="text-xl italic text-gray-700 mb-8 max-w-2xl mx-auto">
                "After watching too many friends struggle with payment issues during their South African adventures, 
                we knew there had to be a better way. VeriCard is our solution to turn payment uncertainty into 
                travel confidence."
              </blockquote>
              
              <div>
                <p className="text-xl font-semibold text-gray-900">George Myburgh</p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you and help make your South African travel experience seamless.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:info@vericard.co.za"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition shadow-sm"
            >
              <Mail className="h-5 w-5" />
              info@vericard.co.za
            </a>
            
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-6 py-3 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition shadow-sm">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}