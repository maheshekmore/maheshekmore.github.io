import React from "react";

const coreSkills = [
  "PHP", "Laravel", "Yii2", "MySQL", "JavaScript", "jQuery", "Ajax"
];

const tools = [
  "Git/GitHub", "Zapier", "Klaviyo", "DailyStory", 
  "Payment Gateways (Razorpay, Stripe, Clover, CCAvenue)"
];

const learning = ["Node.js", "MongoDB", "PostgreSQL", "AI Integrations (GPT, Gemini, DeepSeek)"];

export default function Skills() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Core</h3>
          <ul className="list-disc pl-5 text-gray-700">{coreSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools & Integrations</h3>
          <ul className="list-disc pl-5 text-gray-700">{tools.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Currently Learning</h3>
          <ul className="list-disc pl-5 text-gray-700">{learning.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
