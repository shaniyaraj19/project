import React from 'react';
import { motion } from 'framer-motion';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaHardHat, FaPalette } from 'react-icons/fa';

const caseStudies = [
  {
    name: 'TechStart',
    icon: <MdLightbulbOutline size={40} color="#ff8800" className="mb-2" />,
    problem: 'Frequent missed deadlines.',
    solution: 'Adopted ProjectAccel Gantt & team boards.',
    result: 'Reduced delivery times by 30%.'
  },
  {
    name: 'BuildPro Constructions',
    icon: <FaHardHat size={40} color="#ff8800" className="mb-2" />,
    problem: 'Overruns in material costs & timelines.',
    solution: 'Used budget tracking & milestone dashboards.',
    result: 'Saved 12% on project budgets.'
  },
  {
    name: 'Creative Hive Agency',
    icon: <FaPalette size={40} color="#ff8800" className="mb-2" />,
    problem: 'Clients lacked visibility.',
    solution: 'Shared live project portals.',
    result: 'Improved client satisfaction & referrals.'
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function CaseStudies() {
  return (
    <div className="bg-black text-white px-4 pt-4 py-16 min-h-screen">
      
      <motion.section
        className="text-center mb-8 min-h-screen"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6  leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          See How Teams Thrive
          <br />
          with ProjectAccel
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
          Real-world success stories showing how ProjectAccel helped teams deliver better, faster, and smarter.
        </p>
      </motion.section>

     
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {caseStudies.map((study, i) => (
          <motion.div
            variants={card}
            key={study.name}
            className="glass bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{study.icon}</div>
            <h2 className="text-xl font-bold mb-2 gradient-text">{study.name}</h2>
            <p className="text-gray-300 mb-2"><span className="font-semibold text-blue-400">Problem:</span> {study.problem}</p>
            <p className="text-gray-300 mb-2"><span className="font-semibold text-green-400">Solution:</span> {study.solution}</p>
            <p className="text-gray-300"><span className="font-semibold text-pink-400">Result:</span> {study.result}</p>
          </motion.div>
        ))}
      </motion.section>

      
      <motion.section
        className="text-center mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="gradient-bg text-white px-12 py-4 rounded-xl border border-white/90 shadow-xl hover:shadow-lg transform hover:scale-105 hover:border-blue-400 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg">
          Try It Yourself — Free Trial
        </button>
      </motion.section>
    </div>
  );
}
