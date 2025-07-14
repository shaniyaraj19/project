import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion,useAnimation, useInView } from 'framer-motion';
import { usePageTransition } from '../components/PageTransition';

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
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
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
            {word}{wordIndex !== children.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  const pricingRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const pricingControls = useAnimation();
  
  // Get the page transition state
  const { isAnimationComplete } = usePageTransition();
  
  // Start animations when the page transition is complete
  useEffect(() => {
    if (isAnimationComplete) {
      pricingControls.start("visible");
    } else {
      pricingControls.start("hidden");
    }
  }, [isAnimationComplete, pricingControls]);
  
  useEffect(() => {
    if (pricingInView) {
      pricingControls.start("visible");
    }
  }, [pricingInView, pricingControls]);

  const plans = [
    {
      name: 'Starter',
      description: 'Small teams, up to 5 projects',
      monthlyPrice: '₹999',
      yearlyPrice: '₹9990',
      features: ['Core PM features', 'Kanban', 'Reports'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Growth',
      description: 'Growing businesses',
      monthlyPrice: '₹2499',
      yearlyPrice: '₹24990',
      features: ['Unlimited projects', 'Advanced dashboards'],
      cta: 'Start Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'Custom workflows & support',
      monthlyPrice: 'Contact Us',
      yearlyPrice: 'Contact Us',
      features: ['SLA', 'Integrations', 'Dedicated manager'],
      cta: 'Talk to Sales'
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden py-20 px-4">
      <motion.div 
        className="text-center mb-16"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Flexible Plans for
          </SplitText>
          <br />
          <SplitText className="font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Every Team
          </SplitText>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          variants={textReveal}
        >
          From startups to enterprises, thousands of teams rely on ProjectAccel to run projects with clarity and confidence.
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex justify-center mb-12"
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <span className={!isYearly ? 'font-semibold text-white' : 'text-gray-400'}>Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only"
            />
            <div className="w-14 h-7 bg-gray-700 rounded-full" />
            <motion.div
              className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow"
              animate={{
                translateX: isYearly ? 28 : 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30 
              }}
            />
          </div>
          <span className={isYearly ? 'font-semibold text-white' : 'text-gray-400'}>
            Yearly
            <motion.span 
              className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: isYearly ? Infinity : 0, 
                repeatDelay: 2,
                duration: 0.5 
              }}
            >
              Save 20%
            </motion.span>
          </span>
        </label>
      </motion.div>

      <motion.div 
        ref={pricingRef}
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-4 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={pricingControls}
        viewport={{ once: true }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative w-full md:w-[300px] backdrop-blur-md p-8 rounded-2xl transition-all duration-500
              ${plan.highlight 
                ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/20 md:scale-105 md:z-10' 
                : 'bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10'}
            `}
            variants={boxReveal}
            whileHover={{ 
              y: -8,
              boxShadow: "0px 20px 40px -15px rgba(255,255,255,0.1)",
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
            }}
            custom={index}
          >
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 blur-3xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0.1],
                scale: [0.8, 1.2, 1],
                rotate: [0, 90]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: index * 2
              }}
            />

            {plan.highlight && (
              <motion.div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/80 via-gray-300/80 to-white/80 text-black text-xs font-medium px-4 py-1 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              >
                Most Popular
              </motion.div>
            )}

            <motion.div className="space-y-6">
              <motion.h3 
                className="text-2xl font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
                variants={textReveal}
              >
                {plan.name}
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 text-sm font-light min-h-[40px]"
                variants={textReveal}
              >
                {plan.description}
              </motion.p>
              
              <motion.div 
                className="relative"
                variants={textReveal}
              >
                <motion.div 
                  className="text-4xl font-light bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
                  animate={plan.highlight ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  } : {}}
                  transition={plan.highlight ? {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  } : {}}
                >
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  {plan.monthlyPrice !== 'Contact Us' && (
                    <span className="text-lg text-gray-400 font-light"> /mo</span>
                  )}
                </motion.div>
                
                <motion.div 
                  className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.ul 
                className="space-y-4 mb-8 text-gray-300 text-sm font-light"
                variants={staggerContainer}
              >
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    variants={textReveal}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.span 
                      className="mr-3 text-xs"
                      animate={{ 
                        color: plan.highlight ? ["rgba(255,255,255,0.6)", "rgba(255,255,255,1)", "rgba(255,255,255,0.6)"] : ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.6)"]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: i * 0.5,
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span> 
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              {plan.cta === 'Start Free Trial' ? (
                <motion.div
                  variants={scaleUp}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/start-free-trial"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 text-center block"
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  variants={scaleUp}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/schedule-demo"
                    className="w-full py-3 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 text-center block"
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-16 mb-8 space-y-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-light mb-8"
          variants={textReveal}
        >
          <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Ready to get started?
          </SplitText>
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to ="/start-free-trial">
          <motion.button 
            className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-10 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
            variants={scaleUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px -5px rgba(255,255,255,0.15)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free Trial
          </motion.button>
          </Link>
          <Link to= "schedule-demo">
          <motion.button 
            className="border border-white/30 text-white px-10 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10"
            variants={scaleUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px -5px rgba(255,255,255,0.05)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to Sales
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
