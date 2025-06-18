import { motion } from 'framer-motion';
import AnoopImg from '../assets/images/img2.jpg';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } }
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

const qualities = ["Problem Solver", "Team Player", "Quick Learner", "Strong Communication Skills"];
const achievements = [
  "District Topper in Class 12th, CBSE Board, 2024 ",
  "Qualified JEE Mains with 98.05 percentile",
  "Cracked NDA examination",
  "School Topper in class 10th",
];
const studies = [
  "B.Tech in Computer Science, NIT Jamshedpur (2024-2028) Engineering and Computational Mechanics(ECM) ",
  "Relevant Coursework: Data Structures & Algorithms, Web Development, Competitive Programming"
];

export default function AboutMe() {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
      <div className="flex flex-row items-center justify-center w-full max-w-5xl gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex-shrink-0"
        >
        <img
          src={AnoopImg}
          alt="Anoop"
          className="w-96 h-96 rounded-3xl object-cover shadow-2xl border-4 border-white hover:border-amber-200"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-500 to-pink-600 rounded-3xl shadow-2xl mt-12"
      >
        <motion.h1
          className="text-5xl font-extrabold text-center text-blue-700 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Studies Section */}
        <motion.section variants={sectionVariant} className="mb-8">
          <motion.h2 className="text-2xl font-bold text-blue-800 mb-3"
            whileHover={{ scale: 1.05, color: "#2563eb" }}>
            🎓 Studies
          </motion.h2>
          <ul>
            {studies.map((study, i) => (
              <motion.li
                key={study}
                custom={i}
                variants={itemVariant}
                className="text-gray-900 text-xl mb-1"
              >
                * {study}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Achievements Section */}
        <motion.section variants={sectionVariant} className="mb-8">
          <motion.h2 className="text-2xl font-bold text-green-900 mb-3"
            whileHover={{ scale: 1.05, color: "green" }}>
            🏆 Achievements
          </motion.h2>
          <ul>
            {achievements.map((ach, i) => (
              <motion.li
                key={ach}
                custom={i}
                variants={itemVariant}
                className="text-gray-900 text-xl mb-1"
              >
                * {ach}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Qualities Section */}
        <motion.section variants={sectionVariant}>
          <motion.h2 className="text-2xl font-bold text-purple-900 mb-3"
            whileHover={{ scale: 1.05, color: "purple" }}>
            🌟 Qualities
          </motion.h2>
          <ul className="flex flex-wrap gap-3">
            {qualities.map((q, i) => (
              <motion.li
                key={q}
                custom={i}
                variants={itemVariant}
                className="bg-purple-100 text-purple-700 px-6 m-2 py-2 rounded-full shadow hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ scale: 1.15, backgroundColor: "#a78bfa" }}
              >
                {q}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
      </div>
    </div>
  );
}

