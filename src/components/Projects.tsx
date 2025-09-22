import React from "react";

const projects = [
  {
    title: "Join Craft Club (US)",
    description:
      "Subscription-based automation system with integrated payments and marketing tools.",
    tech: ["Laravel", "MySQL", "Stripe", "Zapier"],
    role: "Lead Developer",
    link: "https://joincraftclub.com/",
  },
  {
    title: "Gurukul International School ERP",
    description:
      "ERP modules for exams, admissions, and reporting, scaling to thousands of student records.",
    tech: ["Laravel", "Yii2", "MySQL", "jQuery"],
    role: "Senior Developer",
    link: "https://gurukulintl.com/",
  },
  {
    title: "NSFT Permit to Work",
    description:
      "Safety checklist application for port inspections with real-time automation.",
    tech: ["Laravel", "REST APIs", "AJAX"],
    role: "Team Lead",
    link: "https://www.nsft.com/",
  },
];

export default function Projects() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <p className="mt-2 text-sm font-medium">
              <span className="text-blue-600">Tech:</span> {p.tech.join(", ")}
            </p>
            <p className="mt-1 text-sm">
              <span className="text-green-600">Role:</span> {p.role}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                className="text-blue-500 mt-3 inline-block"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
