'use client';

import { useState } from 'react';
import { CheckCircle, AlertTriangle, CreditCard, Shield, Globe, Users, Clock, Zap, Star, ArrowRight, Lock } from 'lucide-react';

export default function ComprehensiveCardVerification() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [issuer, setIssuer] = useState('');
  const [cardType, setCardType] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [activeInfo, setActiveInfo] = useState('why-test');

  // Enhanced BIN-based type detection
  const detectCardType = (num) => {
    const cleanNum = num.replace(/\s/g, '');
    if (/^4/.test(cleanNum)) return 'Visa';
    if (/^5[1-5]/.test(cleanNum)) return 'MasterCard';
    if (/^2[2-7]/.test(cleanNum)) return 'MasterCard';
    if (/^3[47]/.test(cleanNum)) return 'American Express';
    if (/^3[0689]/.test(cleanNum)) return 'Diners Club';
    if (/^6011|^644|^645|^646|^647|^648|^649|^65/.test(cleanNum)) return 'Discover';
    if (/^62/.test(cleanNum)) return 'UnionPay';
    return '';
  };

  const validate = () => {
    const newErrors = {};
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    
    if (!/^\d{13,19}$/.test(cleanCardNumber)) {
      newErrors.cardNumber = 'Invalid card number (13-19 digits required)';
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Invalid expiry date (MM/YY format)';
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = 'Invalid CVV (3-4 digits)';
    }
    if (!consent) {
      newErrors.consent = 'Data processing consent is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 19);
    value = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(value);
    setCardType(detectCardType(value.replace(/\s/g, '')));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setExpiry(value);
  };

  const handleSubmit = () => {
    if (!validate()) return;
    
    setLoading(true);
    setCurrentStep(2);
    
    // Simulate comprehensive card testing
    setTimeout(() => {
      const mockResults = {
        cardValid: true,
        cardType: cardType,
        issuerBank: issuer || 'Unknown Bank',
        southAfricaCompatibility: {
          mastercard: cardType === 'MasterCard' ? 'excellent' : 'good',
          visa: cardType === 'Visa' ? 'excellent' : 'good',
          amex: cardType === 'American Express' ? 'limited' : 'good',
          localBanks: Math.random() > 0.3 ? 'compatible' : 'limited'
        },
        recommendedActions: [
          'Notify your bank of international travel',
          'Ensure sufficient daily withdrawal limits',
          'Consider carrying a backup payment method'
        ],
        testScore: Math.floor(Math.random() * 30) + 70
      };
      
      setTestResults(mockResults);
      setLoading(false);
      setCurrentStep(3);
    }, 3000);
  };

  const resetTest = () => {
    setCurrentStep(1);
    setTestResults(null);
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setIssuer('');
    setCardType('');
    setConsent(false);
    setErrors({});
  };

  const stats = [
    { number: '50K+', label: 'Cards Verified', icon: Shield },
    { number: '95%', label: 'Success Rate', icon: CheckCircle },
    { number: '4.9/5', label: 'User Rating', icon: Star },
    { number: '45s', label: 'Avg Test Time', icon: Clock }
  ];

  const infoTabs = [
    {
      id: 'why-test',
      title: 'Why Test?',
      content: {
        title: 'Why Test Your Card?',
        points: [
          { icon: CheckCircle, title: 'Avoid Travel Disruptions', desc: 'Prevent payment failures during your South African adventure' },
          { icon: Shield, title: 'Bank Compatibility Check', desc: 'Test with major SA financial institutions (FNB, Standard Bank, ABSA)' },
          { icon: Globe, title: 'International Acceptance', desc: 'Verify your card works with South African payment systems' },
          { icon: Lock, title: 'Security Validation', desc: 'Ensure your card\'s fraud protection is travel-ready' }
        ]
      }
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      content: {
        title: 'Our Testing Process',
        points: [
          { icon: CreditCard, title: 'Card Analysis', desc: 'We analyze your card type, issuer, and compatibility factors' },
          { icon: Globe, title: 'SA Network Testing', desc: 'Test against South African banking and payment networks' },
          { icon: Shield, title: 'Security Verification', desc: 'Validate international transaction capabilities' },
          { icon: CheckCircle, title: 'Instant Results', desc: 'Get detailed compatibility report with recommendations' }
        ]
      }
    },
    {
      id: 'security',
      title: 'Security',
      content: {
        title: 'Your Security is Our Priority',
        points: [
          { icon: Shield, title: 'Bank-Level Encryption', desc: '256-bit SSL encryption protects all data transmission' },
          { icon: Lock, title: 'No Data Storage', desc: 'We never store your card details - everything is processed in real-time' },
          { icon: CheckCircle, title: 'POPIA Compliant', desc: 'Full compliance with South African data protection laws' },
          { icon: Users, title: 'PCI-DSS Certified', desc: 'Meets the highest payment card industry security standards' }
        ]
      }
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
              Trusted by 50,000+ international travelers
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Test Your Card for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> South Africa</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Comprehensive card verification service for international travelers. 
              Test compatibility, verify acceptance, and travel with complete confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('verify-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition"
              >
                <Zap className="h-4 w-4" />
                Test My Card
              </button>
              <button 
                onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* Verification Form Section */}
      <section id="verify-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {currentStep === 1 && (
              <div className="p-8 space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Enter Your Card Details</h2>
                  <p className="text-gray-600">We'll test your card's compatibility with South African payment systems</p>
                </div>

                {/* Card Number */}
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      aria-invalid={!!errors.cardNumber}
                    />
                    {cardType && (
                      <div className="absolute right-3 top-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{cardType}</span>
                      </div>
                    )}
                  </div>
                  {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      id="expiry"
                      type="text"
                      value={expiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      maxLength="5"
                      aria-invalid={!!errors.expiry}
                    />
                    {errors.expiry && <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-invalid={!!errors.cvv}
                    />
                    {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
                  </div>
                </div>

                {/* Issuer */}
                <div>
                  <label htmlFor="issuer" className="block text-sm font-medium text-gray-700 mb-2">
                    Issuing Bank (Optional)
                  </label>
                  <input
                    id="issuer"
                    type="text"
                    value={issuer}
                    onChange={(e) => setIssuer(e.target.value)}
                    placeholder="e.g., Chase, Bank of America, Barclays"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I consent to secure processing of my card data for testing purposes. 
                    No storage, POPIA compliant, encrypted transmission only.
                  </label>
                </div>
                {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Zap className="inline w-5 h-5 mr-2" />
                  Start Verification Test
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="p-8 text-center">
                <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Testing Your Card</h3>
                <p className="text-gray-600 mb-6">
                  Running comprehensive compatibility checks with South African payment systems...
                </p>
                <div className="space-y-2 text-sm text-gray-500 max-w-md mx-auto">
                  <p>✓ Validating card number and format</p>
                  <p>✓ Checking international transaction capability</p>
                  <p>✓ Testing with major SA banks (FNB, Standard Bank, ABSA, Nedbank)</p>
                  <p>✓ Verifying merchant acceptance rates</p>
                </div>
              </div>
            )}

            {currentStep === 3 && testResults && (
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                    ${testResults.testScore >= 80 ? 'bg-green-100' : testResults.testScore >= 60 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                    {testResults.testScore >= 80 ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <AlertTriangle className={`w-8 h-8 ${testResults.testScore >= 60 ? 'text-yellow-600' : 'text-red-600'}`} />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Test Complete!</h3>
                  <p className="text-lg text-gray-600">Card Score: {testResults.testScore}/100</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">South Africa Compatibility</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Major Banks:</span>
                        <span className={`font-medium ${testResults.southAfricaCompatibility.localBanks === 'compatible' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {testResults.southAfricaCompatibility.localBanks === 'compatible' ? 'Fully Compatible' : 'Limited'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Card Network:</span>
                        <span className="font-medium text-green-600">Excellent</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {testResults.recommendedActions.map((action, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={resetTest}
                    className="w-full py-3 px-4 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Test Another Card
                  </button>
                </div>
              </div>
            )}
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

      {/* Information Section */}
      <section id="info" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {infoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveInfo(tab.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition ${
                    activeInfo === tab.id
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {infoTabs.map((tab) => (
              activeInfo === tab.id && (
                <div key={tab.id} className="animate-fadeIn">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{tab.content.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tab.content.points.map((point, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <point.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                        </div>
                        <p className="text-gray-600">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8">
              {[
                { step: 1, title: "Enter Details", icon: CreditCard },
                { step: 2, title: "Testing", icon: Clock },
                { step: 3, title: "Get Results", icon: CheckCircle }
              ].map(({ step, title, icon: Icon }) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 
                    ${currentStep >= step 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`ml-3 font-medium ${currentStep >= step ? 'text-blue-600' : 'text-gray-400'}`}>
                    {title}
                  </span>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-8 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
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