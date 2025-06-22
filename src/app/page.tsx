"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      console.log("Gemini Response:", data); // ✅ Debug Line

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      const newTasks = Array.isArray(data.tasks) ? data.tasks : [];
      setTasks(newTasks);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Generator</h1>

      <Input
        placeholder="Enter a topic like 'Learn Python'"
        value={topic}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTopic(e.target.value)
        }
      />

      <Button className="mt-4" onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Tasks"}
      </Button>

      {error && (
        <div className="mt-4 text-red-600 font-medium">❌ {error}</div>
      )}

      <div className="mt-6 space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className="p-3 bg-gray-100 rounded border">
            {task}
          </div>
        ))}
      </div>
    </main>
  );
}
