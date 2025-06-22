import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API Key not found" }, { status: 500 });
    }

    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate 5 short, useful tasks to help someone learn ${topic}. Return as a plain list, one task per line.`
              }
            ]
          }
        ]
      }),
    });

    const data = await geminiRes.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    console.log("🧠 Gemini raw text:", text); // 👈 add this for debug

    const tasks = text
      .split(/\n+/)
      .map((t: string) => t.replace(/^\d+[\.\)]?\s*/, "").trim())
      .filter((t: string) => t.length > 0);

    return NextResponse.json({ tasks });
  } catch (err: any) {
    console.error("❌ Error in /api/generate:", err.message);
    return NextResponse.json({ error: "Error generating tasks" }, { status: 500 });
  }
}
