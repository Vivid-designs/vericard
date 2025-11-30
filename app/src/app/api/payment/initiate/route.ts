// src/app/api/payment/initiate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { createPayment, formatAmountToCents, validateReference } from '../../../../lib/paygate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { reference, amount, email, planName } = body;

    // Validate required fields
    if (!reference || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: reference and amount are required' },
        { status: 400 }
      );
    }

    // Validate reference format
    if (!validateReference(reference)) {
      return NextResponse.json(
        { error: 'Invalid reference format. Use alphanumeric characters only (max 50 chars)' },
        { status: 400 }
      );
    }

    // Validate amount
    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be a positive number' },
        { status: 400 }
      );
    }

    // Get base URL for return and notify URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Create payment request
    const paymentResponse = await createPayment({
      reference,
      amount: formatAmountToCents(amount), // Convert Rands to cents
      currency: 'ZAR',
      returnUrl: `${baseUrl}/payment/return`,
      notifyUrl: `${baseUrl}/api/payment/notify`,
      email: email || undefined,
      locale: 'en',
    });

    return NextResponse.json({
      success: true,
      redirectUrl: paymentResponse.redirectUrl,
      payRequestId: paymentResponse.payRequestId,
      reference: paymentResponse.reference,
    });

  } catch (error) {
    console.error('Payment initiation error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to initiate payment',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}