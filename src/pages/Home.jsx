import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { MdBarChart, MdTrackChanges, MdAttachMoney, MdGroups, MdChecklist, MdCheckCircle } from 'react-icons/md';
import { FaRocket } from 'react-icons/fa';


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

    
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.2, 0.65, 0.3, 0.9] 
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  })
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const gradientShift = {
  hidden: { backgroundPosition: '0% 50%' },
  visible: {
    backgroundPosition: '100% 50%',
    transition: { 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 15,
      ease: "linear"
    }
  }
};

const boxReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    boxShadow: "0px 0px 0px rgba(255,255,255,0)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    boxShadow: "0px 10px 30px -10px rgba(255,255,255,0.1)",
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  },
  hover: {
    y: -5,
    boxShadow: "0px 15px 30px -10px rgba(255,255,255,0.15)",
    transition: { duration: 0.3 }
  }
};

const SplitText = ({ children, className }) => {
  return (
    <span className={className}>
      {children.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.15em]">
          <motion.span
            className="inline-block"
            custom={wordIndex}
            variants={{
              hidden: { y: "100%" },
              visible: i => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }
              })
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  // Refs for scroll-triggered animations
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const featuresControls = useAnimation();
  
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
  }, [featuresInView, featuresControls]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 space-y-20">

        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative text-center space-y-8 py-20"
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
              <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Deliver Projects
              </SplitText>
              <br />
              <SplitText className="font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                On Time, Every Time.
              </SplitText>
            </motion.h1>
            
            <motion.p 
              variants={textReveal}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
            </motion.p>
            
            <motion.div 
              variants={textReveal}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/start-free-trial" 
                  className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-8 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 block"
                >
                  Start Free Trial
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/schedule-demo" 
                  className="bg-transparent text-white px-8 py-3 rounded-full border border-white/20 hover:border-white/50 transition-all duration-300 text-sm font-medium block"
                >
                  Schedule a Demo
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={textReveal}
              className="inline-flex items-center px-4 py-2 mt-12 rounded-full text-sm text-gray-400 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 5px 15px -5px rgba(255,255,255,0.1)" 
              }}
            >
              <span className="text-green-400 mr-2">•</span>
              Trusted by <span className="mx-1 text-white font-medium">10,000+</span> teams worldwide
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <motion.h2 
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Why Teams Choose ProjectAccel
            </motion.span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 max-w-2xl mx-auto">
            {[
              [<MdBarChart size={40} className="text-gray-100" />, "Plan with confidence: Visual timelines & Kanban boards keep everyone aligned."],
              [<MdTrackChanges size={40} className="text-gray-100" />, "Boost accountability: Assign tasks, set priorities, track progress."],
              [<MdAttachMoney size={40} className="text-gray-100" />, "Control budgets: Monitor time & costs in real time."],
              [<MdGroups size={40} className="text-gray-100" />, "Delight clients: Share project portals for transparency."]
            ].map(([icon, text], i) => (
              <motion.div
                key={i}
                variants={boxReveal}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="border border-white/10 p-6 rounded-xl transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm bg-white/[0.03]"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    y: [0, -5, 0], 
                    filter: ["drop-shadow(0px 0px 0px rgba(255,255,255,0.0))", "drop-shadow(0px 10px 10px rgba(255,255,255,0.2))", "drop-shadow(0px 0px 0px rgba(255,255,255,0.0))"],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2.5, 
                      ease: "easeInOut" 
                    } 
                  }}
                >
                  {icon}
                </motion.div>
                <p className="text-gray-300 font-light">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <motion.h2 
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Simple Workflow. Powerful Results.
            </SplitText>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              [<FaRocket size={40} className="text-gray-100" />, "Plan & Create", "Set goals and map your path."],
              [<MdChecklist size={40} className="text-gray-100" />, "Assign & Execute", "Delegate tasks to your team."],
              [<MdBarChart size={40} className="text-gray-100" />, "Track & Optimize", "Get clear dashboards & reports."]
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={boxReveal}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={i}
                className="border border-white/10 p-5 rounded-xl transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ 
                    opacity: [1, 0.7, 1], 
                    scale: [1, 1.1, 1],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: i * 0.3
                    } 
                  }}
                >
                  {icon}
                </motion.div>
                <h3 className="text-lg font-medium mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-300 text-sm font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

              
        <motion.section
          ref={featuresRef}
          animate={featuresControls}
          initial="hidden"
          variants={fadeIn}
          className="text-center py-16"
        >
          <motion.h2 
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Everything You Need. Nothing You Don't.
            </motion.span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Gantt & Kanban Views",
              "Time Tracking & Timesheets",
              "File Sharing & Discussions",
              "Budget & Expense Tracking",
              "Reports & Dashboards",
              "Client Portals"
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: i => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }
                  })
                }}
                className="border border-white/10 p-4 rounded-full hover:border-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  boxShadow: "0px 5px 15px -5px rgba(255,255,255,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      delay: i * 0.2,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                >
                  <MdCheckCircle size={22} className="text-gray-100" />
                </motion.div>
                <span className="font-light">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto py-16"
        >
          <motion.h2 
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              See What Our Customers Are Saying
            </SplitText>
          </motion.h2>
          
          <motion.div 
            variants={boxReveal}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="border border-white/10 p-8 rounded-xl transition-all duration-500 backdrop-blur-sm bg-gradient-to-b from-white/[0.05] to-transparent"
          >
            <motion.blockquote 
              className="italic text-xl text-gray-300 mb-4 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
            </motion.blockquote>
            <motion.p 
              className="font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              — Priya, Director at TechBridge Solutions
            </motion.p>
          </motion.div>
        </motion.section>

        
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8 py-20"
        >
          <motion.h2 
            variants={textReveal}
            className="text-2xl md:text-3xl font-light"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Ready to simplify your projects?
            </SplitText>
          </motion.h2>
          
          <motion.button 
            variants={scaleUp}
            className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-10 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px -5px rgba(255,255,255,0.15)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Try Free for 14 Days
          </motion.button>
          
          <motion.p 
            variants={textReveal}
            className="text-gray-400 font-light"
          >
            No credit card needed.
          </motion.p>
        </motion.section>

      </div>
    </div>
  );
}