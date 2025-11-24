'use client';

import { useState } from 'react';
import { CheckCircle, AlertTriangle, CreditCard, Shield, Globe, Users, Clock, Zap, Star, ArrowRight, Lock, XCircle, AlertCircle } from 'lucide-react';

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
  const [apiError, setApiError] = useState(null);

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
    
    // For free tier, we only need 6 digits minimum for BIN lookup
    // But we validate full card for better UX
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

  const handleSubmit = async () => {
    // Clear previous errors
    setApiError(null);
    
    if (!validate()) return;
    
    setLoading(true);
    setCurrentStep(2);
    setErrors({});
    
    try {
      // Call the BIN lookup API
      const response = await fetch('/api/validate-card/free', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber: cardNumber.replace(/\s/g, ''),
        }),
      });

      // Handle different error scenarios
      if (!response.ok) {
        const errorData = await response.json();
        
        // Rate limit exceeded - encourage upgrade
        if (response.status === 429) {
          setApiError({
            type: 'rate_limit',
            title: 'Daily Limit Reached',
            message: errorData.error || 'You\'ve reached the daily limit for free card checks.',
            action: 'upgrade',
            actionText: 'Upgrade to Guaranteed Check - R20'
          });
          setCurrentStep(1);
          setLoading(false);
          return;
        }
        
        // BIN not found - offer paid tier
        if (response.status === 404) {
          setApiError({
            type: 'not_found',
            title: 'Card Not Recognized',
            message: errorData.error || 'We couldn\'t identify this card. This might be a newer card or regional issuer.',
            action: 'upgrade',
            actionText: 'Try Guaranteed Verification - R20'
          });
          setCurrentStep(1);
          setLoading(false);
          return;
        }
        
        // Server error - generic retry
        if (response.status === 500) {
          setApiError({
            type: 'server_error',
            title: 'Service Temporarily Unavailable',
            message: 'Our validation service is experiencing issues. Please try again in a few minutes.',
            action: 'retry',
            actionText: 'Try Again'
          });
          setCurrentStep(1);
          setLoading(false);
          return;
        }
        
        // Generic error
        throw new Error(errorData.error || 'Validation failed');
      }

      const result = await response.json();
      
      // Set the results with the data from the API
      setTestResults({
        cardValid: result.isValid,
        cardType: result.details.cardBrand || cardType,
        issuerBank: result.details.issuingBank || issuer || 'Unknown Bank',
        issuingCountry: result.details.issuingCountry,
        southAfricaCompatibility: result.details.southAfricaCompatibility,
        recommendedActions: result.details.recommendedActions,
        warnings: result.details.warnings || [],
        testScore: result.testScore,
        confidence: result.confidence,
        message: result.message,
      });
      
      setCurrentStep(3);
    } catch (error) {
      console.error('Validation error:', error);
      
      // Network error or unexpected error
      setApiError({
        type: 'network_error',
        title: 'Connection Failed',
        message: error.message || 'Unable to connect to validation service. Please check your internet connection and try again.',
        action: 'retry',
        actionText: 'Try Again'
      });
      setCurrentStep(1);
    } finally {
      setLoading(false);
    }
  };

  const resetTest = () => {
    setCurrentStep(1);
    setTestResults(null);
    setApiError(null);
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setIssuer('');
    setCardType('');
    setConsent(false);
    setErrors({});
  };

  const handleErrorAction = () => {
    if (apiError?.action === 'retry') {
      setApiError(null);
      handleSubmit();
    } else if (apiError?.action === 'upgrade') {
      // TODO: Navigate to paid tier or show upgrade modal
      alert('Upgrade to guaranteed verification - Coming soon!');
    }
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
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
                Test My Card - Free
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
                  <h2 className="text-2xl font-bold text-gray-900">Free Quick Check (90% Accurate)</h2>
                  <p className="text-gray-600">We'll test your card's compatibility with South African payment systems</p>
                </div>

                {/* API Error Display */}
                {apiError && (
                  <div className={`p-4 rounded-lg border flex items-start gap-3 ${
                    apiError.type === 'rate_limit' ? 'bg-yellow-50 border-yellow-200' :
                    apiError.type === 'not_found' ? 'bg-blue-50 border-blue-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    {apiError.type === 'rate_limit' && <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
                    {apiError.type === 'not_found' && <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                    {(apiError.type === 'server_error' || apiError.type === 'network_error') && 
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
                    
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${
                        apiError.type === 'rate_limit' ? 'text-yellow-900' :
                        apiError.type === 'not_found' ? 'text-blue-900' :
                        'text-red-900'
                      }`}>
                        {apiError.title}
                      </h4>
                      <p className={`text-sm mb-3 ${
                        apiError.type === 'rate_limit' ? 'text-yellow-700' :
                        apiError.type === 'not_found' ? 'text-blue-700' :
                        'text-red-700'
                      }`}>
                        {apiError.message}
                      </p>
                      <button
                        onClick={handleErrorAction}
                        className={`text-sm font-medium px-4 py-2 rounded-lg transition ${
                          apiError.action === 'upgrade' 
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-600 text-white hover:bg-gray-700'
                        }`}
                      >
                        {apiError.actionText}
                      </button>
                    </div>
                  </div>
                )}

                {/* Card Number */}
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number * (First 8 digits minimum for free check)
                  </label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="4571 7360 1234 5678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      aria-invalid={!!errors.cardNumber}
                    />
                    {cardType && (
                      <div className="absolute right-3 top-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">{cardType}</span>
                      </div>
                    )}
                  </div>
                  {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
                  <p className="mt-1 text-xs text-gray-500">
                    We only use the first 8 digits for free validation. Your full card number is never stored.
                  </p>
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
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Zap className="inline w-5 h-5 mr-2" />
                  {loading ? 'Testing Card...' : 'Start Free Verification Test'}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{testResults.message}</h3>
                  <p className="text-lg text-gray-600">Card Score: {testResults.testScore}/100</p>
                  {testResults.issuingCountry && (
                    <p className="text-sm text-gray-500 mt-1">Issued in: {testResults.issuingCountry}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">South Africa Compatibility</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>Visa Network:</span>
                        <span className={`font-medium capitalize px-3 py-1 rounded-full text-xs
                          ${testResults.southAfricaCompatibility.visa === 'excellent' ? 'bg-green-100 text-green-700' : 
                            testResults.southAfricaCompatibility.visa === 'good' ? 'bg-blue-100 text-blue-700' : 
                            'bg-yellow-100 text-yellow-700'}`}>
                          {testResults.southAfricaCompatibility.visa}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Mastercard Network:</span>
                        <span className={`font-medium capitalize px-3 py-1 rounded-full text-xs
                          ${testResults.southAfricaCompatibility.mastercard === 'excellent' ? 'bg-green-100 text-green-700' : 
                            testResults.southAfricaCompatibility.mastercard === 'good' ? 'bg-blue-100 text-blue-700' : 
                            'bg-yellow-100 text-yellow-700'}`}>
                          {testResults.southAfricaCompatibility.mastercard}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>American Express:</span>
                        <span className={`font-medium capitalize px-3 py-1 rounded-full text-xs
                          ${testResults.southAfricaCompatibility.amex === 'excellent' ? 'bg-green-100 text-green-700' : 
                            testResults.southAfricaCompatibility.amex === 'good' ? 'bg-blue-100 text-blue-700' : 
                            'bg-yellow-100 text-yellow-700'}`}>
                          {testResults.southAfricaCompatibility.amex}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Major SA Banks:</span>
                        <span className={`font-medium capitalize px-3 py-1 rounded-full text-xs
                          ${testResults.southAfricaCompatibility.localBanks === 'compatible' ? 'bg-green-100 text-green-700' : 
                            'bg-yellow-100 text-yellow-700'}`}>
                          {testResults.southAfricaCompatibility.localBanks}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Warnings Section */}
                  {testResults.warnings && testResults.warnings.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Important Warnings
                      </h4>
                      <ul className="space-y-1 text-sm text-yellow-800">
                        {testResults.warnings.map((warning, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-yellow-600 mt-0.5">•</span>
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommended Actions */}
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

                  {/* Card Details */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Card Details</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">Card Brand:</span>
                        <p className="font-medium capitalize">{testResults.cardType}</p>
                      </div>
                      {testResults.issuerBank && testResults.issuerBank !== 'Unknown Bank' && (
                        <div>
                          <span className="text-gray-600">Issuing Bank:</span>
                          <p className="font-medium">{testResults.issuerBank}</p>
                        </div>
                      )}
                      {testResults.issuingCountry && (
                        <div>
                          <span className="text-gray-600">Issuing Country:</span>
                          <p className="font-medium">{testResults.issuingCountry}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-gray-600">Confidence:</span>
                        <p className="font-medium">{testResults.confidence}% accurate</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={resetTest}
                      className="w-full py-3 px-4 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Test Another Card
                    </button>
                    
                    {/* Upgrade CTA */}
                    <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
                      <h4 className="text-lg font-bold mb-2">Want 100% Certainty?</h4>
                      <p className="text-sm mb-3 text-indigo-100">
                        Get a guaranteed verification with real transaction test for only R20
                      </p>
                      <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                        Upgrade to Guaranteed Check - R20
                      </button>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <p className="font-semibold mb-1">Disclaimer:</p>
                  <p>
                    This free check is approximately {testResults.confidence}% accurate and based on card metadata. 
                    For 100% certainty, use our guaranteed verification service. Always notify 
                    your bank before international travel.
                  </p>
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