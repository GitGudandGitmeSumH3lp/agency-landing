import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Send to n8n Webhook (We will create this URL next)
    // TODO: Replace this URL with your ACTUAL n8n Production URL
    const N8N_WEBHOOK_URL = process.env.N8N_CONTACT_WEBHOOK_URL; 

    if (!N8N_WEBHOOK_URL) {
      console.error("N8N_CONTACT_WEBHOOK_URL is missing in .env.local");
      // Fallback for demo if env is missing (simulates success)
      return NextResponse.json({ success: true, message: "Demo mode: Sent" });
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        source: "contact_form",
        timestamp: new Date().toISOString()
      }),
    });

    if (!n8nResponse.ok) {
      throw new Error('Failed to send to n8n');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}