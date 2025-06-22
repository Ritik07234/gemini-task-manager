<h1>🧠 Task Generator using Gemini API (Next.js)</h1>

<p>
  A simple web application that takes a topic input from the user and generates 5 actionable tasks using Google's Gemini API.
  Built with Next.js, TypeScript, and ShadCN UI.
</p>

<h2>🚀 Features</h2>
<ul>
  <li>📌 Topic-based task generation using Gemini Pro API</li>
  <li>✨ Clean and minimal UI with ShadCN components</li>
  <li>⚡ Realtime task display after API call</li>
  <li>🔐 Secure usage with environment variables</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li>Next.js (App Router)</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
  <li>ShadCN UI</li>
  <li>Gemini Pro API (Google Generative Language API)</li>
</ul>

<h2>📁 Project Structure</h2>
<pre><code>
client/
│
├── src/
│   ├── app/
│   │   ├── page.tsx        # Home UI logic
│   │   ├── layout.tsx      # Root layout with Clerk integration
│   ├── components/
│   │   └── ui/
│   │       ├── input.tsx   # Custom Input field
│   │       └── button.tsx  # Custom Button
├── app/api/
│   └── generate/route.ts   # Gemini API call logic
├── .env.local              # Gemini API key
</code></pre>

<h2>🔐 Environment Variables</h2>
<p>Create a <code>.env.local</code> file at the root of your project:</p>

<pre><code>
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_gemini_key_here
</code></pre>

<blockquote><strong>⚠️ Note:</strong> Make sure billing is enabled on your Google Cloud project to use Gemini API.</blockquote>

<h2>🧪 Local Setup</h2>
<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/your-username/gemini-task-generator.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>cd client
npm install</code></pre>
  </li>
  <li>Add your <code>.env.local</code> file with your Gemini API key.</li>
  <li>Run the development server:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
</ol>

<h2>📷 Preview</h2>
<img src="https://via.placeholder.com/800x400?text=UI+Screenshot" alt="Task Generator UI" />

<h2>🙏 Acknowledgements</h2>
<ul>
  <li><a href="https://ui.shadcn.com/">ShadCN UI</a></li>
  <li><a href="https://ai.google.dev/">Gemini Pro API</a></li>
  <li><a href="https://nextjs.org/">Next.js</a></li>
</ul>

<hr/>

<h2>✍️ Author</h2>
<p><strong>Ritik Kumar Singh</strong></p>

<p>Happy Building! 🚀</p>

