import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API Key not found" }, { status: 500 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Give me 5 short, simple tasks to learn "${topic}". Return tasks as plain text only, separated by newline.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    // ✅ Check Gemini response structure
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log("Gemini Raw Text:", rawText);

    // ✅ Clean and extract tasks
    const tasks = rawText
      .split("\n")
      .map((t: string) => t.replace(/^\d+[\).]?\s*/, "").trim()) // remove numbering
      .filter((t: string) => t.length > 0);

    return NextResponse.json({ tasks });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Error generating tasks" }, { status: 500 });
  }
}
