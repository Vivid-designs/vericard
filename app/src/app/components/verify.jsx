// components/CardVerificationForm.jsx
import { useState } from 'react';

export default function VerifyCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [issuer, setIssuer] = useState('');
  const [cardType, setCardType] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Simple BIN-based type detection (expand with card-validator lib for production)
  const detectCardType = (num) => {
    if (/^4/.test(num)) return 'Visa';
    if (/^5[1-5]/.test(num)) return 'MasterCard';
    if (/^3[47]/.test(num)) return 'Amex';
    if (/^62/.test(num)) return 'UnionPay';
    return '';
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{6,19}$/.test(cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Invalid card number (6-19 digits)';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) newErrors.expiry = 'Invalid expiry (MM/YY)';
    if (!/^\d{3,4}$/.test(cvv)) newErrors.cvv = 'Invalid CVV (3-4 digits)';
    if (!consent) newErrors.consent = 'Consent required for data processing';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 19);
    value = value.replace(/(.{4})/g, '$1 ').trim(); // Format with spaces
    setCardNumber(value);
    setCardType(detectCardType(value.replace(/\s/g, '')));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call (in production: send to Node.js backend for test auth)
    setTimeout(() => {
      console.log({ cardNumber: cardNumber.replace(/\s/g, ''), expiry, cvv, issuer, cardType });
      setLoading(false);
      // Show results (e.g., modal with compatibility info)
    }, 1000);
  };

  return (
    <div>
        <h1 id="verify" className="text-3xl font-bold text-center mb-6">Verify Your Card</h1>
        
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Card Number */}
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Enter first 6+ digits"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          aria-invalid={!!errors.cardNumber}
        />
        {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
      </div>

      {/* Card Type (Auto-detected or Dropdown) */}
      <div>
        <label htmlFor="cardType" className="block text-sm font-medium text-gray-700">Card Type</label>
        <select
          id="cardType"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select or auto-detected</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Amex">Amex</option>
          <option value="UnionPay">UnionPay</option>
        </select>
      </div>

      {/* Expiry (for full test) */}
      <div>
        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
        <input
          id="expiry"
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value.slice(0, 5))}
          placeholder="MM/YY"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          aria-invalid={!!errors.expiry}
        />
        {errors.expiry && <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>}
      </div>

      {/* CVV (for full test) */}
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input
          id="cvv"
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
          placeholder="3-4 digits"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          aria-invalid={!!errors.cvv}
        />
        {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
      </div>

      {/* Issuer (Optional) */}
      <div>
        <label htmlFor="issuer" className="block text-sm font-medium text-gray-700">Issuer (Optional)</label>
        <input
          id="issuer"
          type="text"
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          placeholder="e.g., Bank of America"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* Consent */}
      <div className="flex items-center">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-900">
          I consent to processing my data per POPIA (no storage, encrypted transmission).
        </label>
        {errors.consent && <p className="ml-2 text-sm text-red-600">{errors.consent}</p>}
      </div>

      {/* Trust Signals */}
      <div className="flex justify-center space-x-4">
        <span className="text-sm text-gray-500 flex items-center"><svg className="h-5 w-5 mr-1" /* lock icon SVG */ /> PCI-DSS Compliant</span>
        <span className="text-sm text-gray-500 flex items-center"><svg className="h-5 w-5 mr-1" /* shield icon SVG */ /> POPIA Secure</span>
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-blue-600 text-white font-bold text-lg rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex justify-center items-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" /* spinner SVG */ />
            Checking...
          </span>
        ) : 'Verify Now'}
      </button>
    </form>
    </div>
  );
}