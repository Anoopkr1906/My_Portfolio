// ProjectsPage.jsx
import React, { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description:
      "A personal portfolio website built using React and Tailwind CSS to showcase my work, skills, and contact information.",
  },
  {
    title: "E-commerce App",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "A full-stack e-commerce platform with product listings, cart, and secure checkout. Built with React, Node.js, and Express.",
  },
  {
    title: "BlogWaani",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "A modern blog platform with markdown support, user authentication, and responsive design. Built using Next.js and MongoDB.",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 py-10 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            className="bg-white/10 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelected(idx)}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selected !== null && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={projects[selected].img}
              alt={projects[selected].title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{projects[selected].title}</h3>
            <p className="text-gray-700">{projects[selected].description}</p>
          </div>
        </div>
      )}

      {/* Fade-in animation for modal */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
