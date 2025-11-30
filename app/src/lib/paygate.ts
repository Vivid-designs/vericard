// src/lib/paygate.ts

import type { PayGateConfig, PayGatePaymentRequest, PayGatePaymentResponse } from '../Types/paygate';

// Import PayGate SDK (no types available)
const PayGate = require('paygate-sdk');

// Initialize PayGate instance
export function getPayGateInstance(): any {
  const config: PayGateConfig = {
    payGateId: process.env.PAYGATE_ID || '',
    encryptionKey: process.env.PAYGATE_ENCRYPTION_KEY || '',
    testMode: process.env.PAYGATE_TEST_MODE === 'true',
  };

  if (!config.payGateId || !config.encryptionKey) {
    throw new Error('PayGate credentials are missing. Check your environment variables.');
  }

  return new PayGate(config);
}

// Create a one-time payment
export async function createPayment(
  paymentData: PayGatePaymentRequest
): Promise<PayGatePaymentResponse> {
  try {
    const paygate = getPayGateInstance();
    
    const response = await paygate.onceOffPayment({
      reference: paymentData.reference,
      amount: paymentData.amount,
      currency: paymentData.currency,
      returnUrl: paymentData.returnUrl,
      notifyUrl: paymentData.notifyUrl,
      email: paymentData.email,
      locale: paymentData.locale,
    });

    return {
      redirectUrl: response.redirectUrl,
      payRequestId: response.payRequestId,
      reference: paymentData.reference,
    };
  } catch (error) {
    console.error('PayGate payment creation error:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Failed to create payment'
    );
  }
}

// Helper to format amount from Rands to cents
export function formatAmountToCents(amountInRands: number): number {
  return Math.round(amountInRands * 100);
}

// Helper to format amount from cents to Rands
export function formatAmountToRands(amountInCents: number): number {
  return amountInCents / 100;
}

// Validate payment reference (alphanumeric, max 50 chars)
export function validateReference(reference: string): boolean {
  const regex = /^[a-zA-Z0-9-_]{1,50}$/;
  return regex.test(reference);
}