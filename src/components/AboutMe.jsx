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
    <div className='flex items-center justify-center flex-col min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex-shrink-0"
        >
        <img
          src={AnoopImg}
          alt="Anoop"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl border-4 border-white hover:border-amber-200"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="w-full max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-500 to-pink-600 rounded-3xl shadow-2xl"
      >
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-blue-700 mb-6 sm:mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Studies Section */}
        <motion.section variants={sectionVariant} className="mb-4 sm:mb-6">
          <motion.h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3"
            whileHover={{ scale: 1.05, color: "#2563eb" }}>
            🎓 Studies
          </motion.h2>
          <ul>
            {studies.map((study, i) => (
              <motion.li
                key={study}
                custom={i}
                variants={itemVariant}
                className="text-gray-900 text-sm sm:text-base mb-1"
              >
                * {study}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Achievements Section */}
        <motion.section variants={sectionVariant} className="mb-4 sm:mb-6">
          <motion.h2 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-3"
            whileHover={{ scale: 1.05, color: "green" }}>
            🏆 Achievements
          </motion.h2>
          <ul>
            {achievements.map((ach, i) => (
              <motion.li
                key={ach}
                custom={i}
                variants={itemVariant}
                className="text-gray-900 text-sm sm:text-base mb-1"
              >
                * {ach}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Qualities Section */}
        <motion.section variants={sectionVariant}>
          <motion.h2 className="text-lg sm:text-xl font-bold text-purple-900 mb-2"
            whileHover={{ scale: 1.05, color: "purple" }}>
            🌟 Qualities
          </motion.h2>
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {qualities.map((q, i) => (
              <motion.li
                key={q}
                custom={i}
                variants={itemVariant}
                className="bg-purple-100 text-xs sm:text-sm md:text-base text-purple-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow hover:scale-105 transition-transform cursor-pointer"
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

