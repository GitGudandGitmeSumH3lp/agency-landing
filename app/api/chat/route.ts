import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    // DEBUG: Print to Vercel Logs to see if we get inputs
    console.log("Chat API called with:", { sessionId, messageSnippet: message?.substring(0, 10) });

    // 1. Check for the Secret URL
    const n8nUrl = process.env.N8N_CHAT_WEBHOOK_URL;
    
    if (!n8nUrl) {
      // This will show up in Vercel Logs as the specific error
      console.error("CRITICAL ERROR: N8N_CHAT_WEBHOOK_URL is not set in Vercel Environment Variables.");
      return NextResponse.json(
        { error: "Server misconfiguration: Missing Webhook URL" }, 
        { status: 500 }
      );
    }

    // 2. Send to n8n
    const response = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
    });

    // 3. Handle n8n Errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error("n8n returned an error:", response.status, errorText);
      return NextResponse.json(
        { error: "AI Service Unavailable" },
        { status: 502 }
      );
    }

    // 4. Return success
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Unhandled API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}