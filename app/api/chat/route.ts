import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message, sessionId } = await request.json();
    const N8N_WEBHOOK_URL = process.env.N8N_CHAT_WEBHOOK;

    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json({ error: "Missing Webhook URL" }, { status: 500 });
    }

    console.log("Sending to n8n:", N8N_WEBHOOK_URL); // Debug Log 1

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatInput: message, sessionId }),
    });

    // Read the text first, THEN try to parse JSON
    const textData = await n8nResponse.text(); 
    console.log("n8n Raw Response:", textData); // Debug Log 2

    if (!textData) {
      return NextResponse.json({ response: "Error: n8n returned empty response." });
    }

    try {
      const data = JSON.parse(textData);
      // Handle the case where n8n returns { output: "..." } vs just { "..." }
      const aiResponse = data.output || data.response || JSON.stringify(data);
      return NextResponse.json({ response: aiResponse });
    } catch (e) {
      // If n8n returned HTML or plain text (not JSON)
      console.error("JSON Parse Error:", e);
      return NextResponse.json({ response: "Error: Received invalid JSON from n8n." });
    }

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}