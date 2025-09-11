"use client";

import { useState } from 'react';
import { CreditCard, Heart, Shield, Lock, ExternalLink, Mail, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '/', icon: null },
    { name: 'How It Works', href: '/pages/howitworkspage', icon: null },
    { name: 'About', href: '/pages/aboutpage', icon: null },
    { name: 'Contact', href: '/pages/contactpage', icon: null }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#', icon: MessageCircle },
    { name: 'Travel Tips', href: '#', icon: null },
    { name: 'Card Issues', href: '#', icon: null },
    { name: 'Report Bug', href: '#', icon: ExternalLink }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#', icon: Shield },
    { name: 'Terms of Service', href: '#', icon: null },
    { name: 'POPIA Compliance', href: '#', icon: Lock },
    { name: 'Security', href: '#', icon: Shield }
  ];

  const socialLinks = [
    { name: 'Support', href: 'mailto:support@vericard.co.za', icon: Mail, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-500' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-gray-200 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Veri<span className="text-blue-500">Card</span>
              </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Verify your card&apos;s South African compatibility before you travel. 
              No surprises, just confident payments.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 ${social.color} hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 group`}
                  //onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <social.icon className={`h-4 w-4 transition-transform duration-200 ${hoveredSocial === index ? 'scale-110' : ''}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              Quick Links
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group"
                    //onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/*{link.icon && <link.icon className="h-4 w-4" />}*/}
                    <span className="relative">
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${hoveredLink === `quick-${index}` ? 'w-full' : ''}`}></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              Support
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-500"></div>
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group"
                    //onMouseEnter={() => setHoveredLink(`support-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    <span className="relative">
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${hoveredLink === `support-${index}` ? 'w-full' : ''}`}></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              Legal
              <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group"
                    //onMouseEnter={() => setHoveredLink(`legal-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    <span className="relative">
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${hoveredLink === `legal-${index}` ? 'w-full' : ''}`}></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-600">
              <span className="flex items-center gap-2">
                © 2025 VeriCard.co.za - All rights reserved
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              </span>
            </div>

            {/* Vivid Credit */}
            <div className="text-gray-600">
              <span className="flex items-center gap-2">
                Designed & Developed by{' '}
                <a 
                  href="https://vividgraphics.co.za" 
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vivid Graphics
                  <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-200 hover:shadow-md hover:scale-105 transition-all duration-200 group">
                <Shield className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                <span className="text-sm font-medium">PCI-DSS</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 hover:shadow-md hover:scale-105 transition-all duration-200 group">
                <Lock className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                <span className="text-sm font-medium">POPIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div>
    </footer>
  );
}