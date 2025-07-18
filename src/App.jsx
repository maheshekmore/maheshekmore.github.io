import { Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: '📘 School ERP Demo',
    description: 'Admissions, fee tracking, role-based access, and dashboard reporting.',
    link: 'https://github.com/maheshekmore/school-erp-demo-laravel',
  },
  {
    title: '📦 Stock Audit Demo',
    description: 'Audit workflow simulation, warehouse management, reporting.',
    link: 'https://github.com/maheshekmore/php-stock-audit-demo',
  },
  {
    title: '🛒 E-commerce Core',
    description: 'Basic cart, login, order tracking, and payment placeholders.',
    link: 'https://github.com/maheshekmore/ecommerce-core-laravel',
  },
  {
    title: '🌱 India Climate Collaborative',
    description: 'CMS with real-time content editing and collaborative tools.',
    link: '#',
  },
  {
    title: '📋 NSFT Checklist',
    description: 'Safety inspections & role management system with dynamic reports.',
    link: '#',
  },
  {
    title: '🎓 Vani School ERP',
    description: 'Fee management, tax filing, admission workflows using Yii2.',
    link: '#',
  },
  {
    title: '📦 Kritaa Shopee',
    description: 'School item sales with cart, checkout, and inventory control.',
    link: '#',
  },
  {
    title: '🧾 Chartered Studies',
    description: 'Dynamic test management, subscriptions, and payment workflows.',
    link: '#',
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 text-gray-800 font-sans">
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Mahesh More</h1>
          <p className="text-lg text-gray-600 mt-2">
            Senior PHP / Laravel Developer | 6+ Yrs | ERP, E-commerce, Remote-ready
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:maheshekmore07@gmail.com"><Mail /></a>
            <a href="https://github.com/maheshekmore" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/mahesh-more-946426b1" target="_blank"><Linkedin /></a>
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-lg font-semibold mb-1">{proj.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{proj.description}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 text-sm underline">View on GitHub</a>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}