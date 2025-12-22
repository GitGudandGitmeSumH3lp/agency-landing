import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Parse the JSON body from the frontend
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Define your n8n Webhook URL
    // REPLACE 'YOUR_WEBHOOK_URL' below with your actual n8n Production URL
    // Best Practice: Store this in a .env file later (e.g., process.env.N8N_WEBHOOK_URL)
    const N8N_WEBHOOK_URL = "https://carloverina.app.n8n.cloud/webhook-test/8be9e79d-aa63-483b-9d4a-206c0ef1ff49";

    // 4. Send data to n8n
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: "Agency Landing Page", // Helpful tag for n8n
        timestamp: new Date().toISOString(),
      }),
    });

    // 5. Check if n8n received it successfully
    if (!n8nResponse.ok) {
      console.error("n8n Error:", n8nResponse.statusText);
      return NextResponse.json(
        { error: "Failed to send data to automation workflow" },
        { status: 502 } // Bad Gateway
      );
    }

    // 6. Return success to the frontend
    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}   