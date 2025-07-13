// SkillsShowcase.jsx
// import React from "react";

// const orbitSkills = [
//   { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" },
//   { name: "JavaScript", color: "bg-yellow-400", icon: "🟨" },
//   { name: "Node.js", color: "bg-green-600", icon: "🟩" },
//   { name: "CSS", color: "bg-blue-300", icon: "🎨" },
//   { name: "Tailwind CSS", color: "bg-teal-400", icon: "🌬️" },
// ];

// const orbitRadius = 190;

// function polarToCartesian(angle, r) {
//   const theta = (angle * Math.PI) / 180;
//   return {
//     x: Math.cos(theta) * r,
//     y: Math.sin(theta) * r,
//   };
// }

// export default function SkillsShowcase() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 py-8">
//       <div className="relative w-full max-w-4xl h-32 mb-16">
//         {/* Left Rectangle */}
//         <div className="absolute left-0 top-1/2 -translate-y-1/2">
//           <div className="bg-pink-600 bg-opacity-80 rounded-xl px-8 py-6 shadow-lg flex items-center group hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-600 transition-all duration-300">
//             <span className="text-3xl mr-4">🔗</span>
//             <span className="text-white text-xl font-bold tracking-wide group-hover:text-green-200 transition">NEXT.js</span>
//           </div>
//         </div>
//         {/* Right Rectangle */}
//         <div className="absolute right-0 top-1/2 -translate-y-1/2">
//           <div className="bg-purple-700 bg-opacity-80 rounded-xl px-8 py-6 shadow-lg flex items-center group hover:bg-gradient-to-l hover:from-gray-800 hover:to-yellow-600 transition-all duration-300">
//             <span className="text-3xl mr-4">🚂</span>
//             <span className="text-white text-xl font-bold tracking-wide group-hover:text-yellow-200 transition">Express.js</span>
//           </div>
//         </div>
//       </div>

//       {/* Orbiting skills section */}
//       <div className="relative flex items-center justify-center" style={{ height: 400 }}>
//         {/* Center Avatar */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//           <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg text-white text-5xl font-bold border-4 border-white">
//             💻
//           </div>
//         </div>
//         {/* Orbiting skills */}
//         {orbitSkills.map((skill, idx) => {
//           const angle = (360 / orbitSkills.length) * idx - 90;
//           const { x, y } = polarToCartesian(angle, orbitRadius);
//           return (
//             <div
//               key={skill.name}
//               className={`absolute left-1/2 top-1/2 transition-transform duration-500 hover:scale-110`}
//               style={{
//                 transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
//                 zIndex: 5,
//               }}
//             >
//               <div
//                 className={`flex flex-col items-center justify-center w-36 h-36 rounded-xl shadow-lg ${skill.color} text-white transition-all duration-300 hover:rotate-6 hover:shadow-2xl`}
//               >
//                 <span className="text-3xl mb-1">{skill.icon}</span>
//                 <span className="font-semibold">{skill.name}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }









// SkillsCircle.jsx
// import React from "react";

// // Example skills with optional images (replace with your own)
// const skills = [
//   { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" },
//   { name: "JavaScript", color: "bg-yellow-400", icon: "🟨" },
//   { name: "Node.js", color: "bg-green-600", icon: "🟩" },
//   { name: "CSS", color: "bg-blue-300", icon: "🎨" },
//   { name: "Tailwind CSS", color: "bg-teal-400", icon: "🌬️" },
//   { name: "Next.js", color: "bg-gray-900", icon: "🧭" },
//   { name: "Express.js", color: "bg-gray-700", icon: "🚂" },
//   // Add more as needed
// ];

// const CIRCLE_RADIUS = 180; // px, distance from center

// function polarToCartesian(angle, r) {
//   const theta = (angle * Math.PI) / 180;
//   return {
//     x: Math.cos(theta) * r,
//     y: Math.sin(theta) * r,
//   };
// }

// export default function SkillsCircle() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 py-8">
//       <h2 className="text-3xl font-bold text-white mb-12 tracking-wide">My Skills</h2>
//       <div className="relative" style={{ width: 2 * CIRCLE_RADIUS + 180, height: 2 * CIRCLE_RADIUS + 180 }}>
//         {/* Center Avatar or Logo */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//           <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg text-white text-6xl font-bold border-4 border-white">
//             💻
//           </div>
//         </div>
//         {/* Skills around the circle */}
//         {skills.map((skill, idx) => {
//           const angle = (360 / skills.length) * idx - 90; // Start from top
//           const { x, y } = polarToCartesian(angle, CIRCLE_RADIUS);
//           return (
//             <div
//               key={skill.name}
//               className="absolute left-1/2 top-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
//                 zIndex: 5,
//               }}
//             >
//               <div
//                 className={`w-24 h-24 flex flex-col items-center justify-center rounded-full shadow-xl ${skill.color} text-white text-center transition-all duration-300 hover:scale-110 hover:rotate-6`}
//               >
//                 <span className="text-3xl mb-1">{skill.icon}</span>
//                 <span className="font-semibold text-lg">{skill.name}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }









// SkillsCircleRect.jsx
import React from "react";

// Define your skills here
const skills = [
  { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" },
  { name: "JavaScript", color: "bg-yellow-400", icon: "🟨" },
  { name: "Node.js", color: "bg-green-600", icon: "🟩" },
  { name: "CSS", color: "bg-blue-300", icon: "🎨" },
  { name: "Tailwind CSS", color: "bg-teal-400", icon: "🌬️" },
  { name: "Next.js", color: "bg-pink-700", icon: "🧭" },
  { name: "Express.js", color: "bg-gray-700", icon: "🚂" },
  { name: "Mongo-DB", color: "bg-red-700", icon: "🚂" },
  { name: "C++", color: "bg-purple-700", icon: "🧭" },
  // Add more as needed
];

// Responsive radius based on screen size
const getResponsiveRadius = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 120; // sm screens
    if (window.innerWidth < 768) return 150; // md screens
    if (window.innerWidth < 1024) return 200; // lg screens
    return 250; // xl screens
  }
  return 250; // default
};

function polarToCartesian(angle, r) {
  const theta = (angle * Math.PI) / 180;
  return {
    x: Math.cos(theta) * r,
    y: Math.sin(theta) * r,
  };
}

export default function SkillsCircleRect() {
  const [radius, setRadius] = React.useState(getResponsiveRadius());

  React.useEffect(() => {
    const handleResize = () => {
      setRadius(getResponsiveRadius());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 py-4 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 tracking-wide text-center">My Skills</h2>
      <div
        className="relative w-full max-w-4xl"
        style={{
          height: Math.max(2 * radius + 200, 400), // Ensure minimum height
        }}
      >
        {/* Center Avatar or Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center animate-bounce rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-2 md:border-4 border-white">
            💻
          </div>
        </div>
        {/* Skills around the circle */}
        {skills.map((skill, idx) => {
          const angle = (360 / skills.length) * idx - 90; // Start from top
          const { x, y } = polarToCartesian(angle, radius);
          return (
            <div
              key={skill.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
                zIndex: 5,
              }}
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col items-center justify-center rounded-xl shadow-xl ${skill.color} text-white text-center transition-all duration-300 hover:scale-110 hover:rotate-6`}
                style={{
                  // Counter rotate the content so text is always horizontal
                  transform: `rotate(-${angle + 90}deg)`,
                }}
              >
                <span className="text-lg sm:text-xl md:text-2xl mb-1">{skill.icon}</span>
                <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
