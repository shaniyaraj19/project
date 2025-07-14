import React, { useEffect, useRef } from 'react';
import { MdCampaign } from 'react-icons/md';
import { FaLaptopCode, FaHardHat, FaUserTie } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      type: 'spring',
      when: 'beforeChildren',
    },
  },
};

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

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: 'spring' },
  }),
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
            {word}{wordIndex !== children.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const useCases = [
  {
    title: 'Marketing Teams',
    icon: <MdCampaign size={48} className="mb-4 text-gray-100" />,
    desc: 'Plan campaigns, track content production, and delight clients with on-time delivery and clear status updates.',
  },
  {
    title: 'IT & Software Teams',
    icon: <FaLaptopCode size={40} className="mb-4 text-gray-100" />,
    desc: 'Manage sprints, releases, and bug fixes with clarity and speed using boards and timelines.',
  },
  {
    title: 'Construction Projects',
    icon: <FaHardHat size={48} className="mb-4 text-gray-100" />,
    desc: 'Monitor budgets, contractors, and site schedules. Hit milestones with confidence using Gantt charts and reports.',
  },
  {
    title: 'Freelancers & Consultants',
    icon: <FaUserTie size={48} className="mb-4 text-gray-100" />,
    desc: 'Keep deliverables and timelines crystal clear. Share progress and results with clients in one place.',
  },
];

const MarketingInfographic = () => (
  <div className="mt-4 opacity-70">
    <motion.svg 
      width="100%" 
      height="180" 
      viewBox="0 0 300 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Megaphone with dynamic elements */}
      <motion.path 
        d="M50,50 L80,50 C90,50 100,60 100,70 C100,80 90,90 80,90 L50,90 C40,90 30,80 30,70 C30,60 40,50 50,50 Z" 
        fill="rgba(255,255,255,0.1)" 
        stroke="rgba(255,255,255,0.4)" 
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.path 
        d="M100,65 L120,65 L130,55 M100,75 L120,75 L130,85" 
        stroke="rgba(255,255,255,0.4)" 
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
      />
      
      {/* Dynamic sound waves with pulsing animation */}
      <motion.path 
        d="M140,60 C145,60 150,65 150,70 C150,75 145,80 140,80" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 1, 0.5, 1, 0],
          scale: [0.9, 1, 1.1, 1, 0.9]
        }}
        transition={{ 
          duration: 2, 
          ease: "easeInOut", 
          delay: 1.5, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      <motion.path 
        d="M155,50 C165,50 175,60 175,70 C175,80 165,90 155,90" 
        stroke="rgba(255,255,255,0.2)" 
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 0.7, 0.3, 0.7, 0],
          scale: [0.8, 1, 1.2, 1, 0.8]
        }}
        transition={{ 
          duration: 2.5, 
          ease: "easeInOut", 
          delay: 1.7, 
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.2
        }}
      />
      <motion.path 
        d="M170,40 C185,40 200,55 200,70 C200,85 185,100 170,100" 
        stroke="rgba(255,255,255,0.15)" 
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 0.5, 0.2, 0.5, 0],
          scale: [0.7, 1, 1.3, 1, 0.7]
        }}
        transition={{ 
          duration: 3, 
          ease: "easeInOut", 
          delay: 1.9, 
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.3
        }}
      />
      
      {/* Analytics dashboard with grid and interactive elements */}
      <motion.rect 
        x="180" 
        y="40" 
        width="100" 
        height="80" 
        rx="4" 
        fill="rgba(255,255,255,0.05)" 
        stroke="rgba(255,255,255,0.2)" 
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      />
      
      {/* Grid lines for analytics */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.0 }}>
        <motion.line x1="180" y1="60" x2="280" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="180" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="180" y1="100" x2="280" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="200" y1="40" x2="200" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="220" y1="40" x2="220" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="240" y1="40" x2="240" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
        <motion.line x1="260" y1="40" x2="260" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
      </motion.g>
      
      {/* Analytics chart with animated bars */}
      <motion.rect 
        x="190" 
        y="90" 
        width="10" 
        height="30" 
        rx="2" 
        fill="rgba(255,255,255,0.25)"
        initial={{ height: 0, y: 120 }}
        animate={{ height: 30, y: 90 }}
        transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
      />
      <motion.rect 
        x="210" 
        y="70" 
        width="10" 
        height="50" 
        rx="2" 
        fill="rgba(255,255,255,0.35)"
        initial={{ height: 0, y: 120 }}
        animate={{ height: 50, y: 70 }}
        transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
      />
      <motion.rect 
        x="230" 
        y="100" 
        width="10" 
        height="20" 
        rx="2" 
        fill="rgba(255,255,255,0.2)"
        initial={{ height: 0, y: 120 }}
        animate={{ height: 20, y: 100 }}
        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
      />
      <motion.rect 
        x="250" 
        y="60" 
        width="10" 
        height="60" 
        rx="2" 
        fill="rgba(255,255,255,0.3)"
        initial={{ height: 0, y: 120 }}
        animate={{ height: 60, y: 60 }}
        transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
      />
      
      {/* Trend line overlay */}
      <motion.path 
        d="M195,85 Q210,60 215,65 T235,95 T255,55"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 3.0, ease: "easeInOut" }}
      />
      <motion.circle cx="195" cy="85" r="3" fill="rgba(255,255,255,0.8)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 3.2 }}
      />
      <motion.circle cx="215" cy="65" r="3" fill="rgba(255,255,255,0.8)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 3.3 }}
      />
      <motion.circle cx="235" cy="95" r="3" fill="rgba(255,255,255,0.8)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 3.4 }}
      />
      <motion.circle cx="255" cy="55" r="3" fill="rgba(255,255,255,0.8)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 3.5 }}
      />
      
      {/* Target audience visualization */}
      <motion.circle cx="60" cy="130" r="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
      />
      <motion.circle cx="60" cy="130" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.4, ease: "easeOut" }}
      />
      <motion.circle cx="60" cy="130" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.6, ease: "easeOut" }}
      />
      
      {/* Content calendar or schedule */}
      <motion.rect x="90" cy="120" width="40" height="30" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      />
      <motion.path d="M95,125 L125,125 M95,130 L115,130 M95,135 L120,135 M95,140 L110,140" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 3.0 }}
      />
      
      {/* Social media icons */}
      <motion.circle cx="150" cy="130" r="8" fill="rgba(255,255,255,0.2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 3.2, ease: "easeOut" }}
      />
      <motion.path d="M146,130 L154,130 M150,126 L150,134" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.3 }}
      />
      
      <motion.rect x="165" cy="125" width="16" height="10" rx="2" fill="rgba(255,255,255,0.2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 3.4, ease: "easeOut" }}
      />
      
      <motion.circle cx="190" cy="130" r="8" fill="rgba(255,255,255,0.2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 3.5, ease: "easeOut" }}
      />
      <motion.path d="M186,126 L194,134 M186,134 L194,126" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.6 }}
      />
    </motion.svg>
  </div>
);

const ITSoftwareInfographic = () => (
  <div className="mt-4 opacity-70">
    <motion.svg 
      width="100%" 
      height="150" 
      viewBox="0 0 300 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background grid for code/tech feel */}
      <motion.g 
        stroke="rgba(255,255,255,0.03)" 
        strokeWidth="0.5" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        {/* Horizontal grid lines */}
        {[...Array(15)].map((_, i) => (
          <motion.line 
            key={`h-line-${i}`} 
            x1="0" 
            y1={i * 10} 
            x2="300" 
            y2={i * 10} 
          />
        ))}
        
        {/* Vertical grid lines */}
        {[...Array(30)].map((_, i) => (
          <motion.line 
            key={`v-line-${i}`} 
            x1={i * 10} 
            y1="0" 
            x2={i * 10} 
            y2="150" 
          />
        ))}
      </motion.g>
      
      {/* Main laptop */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Laptop base */}
        <motion.path 
          d="M30,100 L90,100 L100,120 L20,120 Z" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1"
        />
        
        {/* Laptop screen */}
        <motion.rect 
          x="30" 
          y="55" 
          width="60" 
          height="45" 
          rx="2" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1"
        />
        
        {/* Code on screen */}
        <motion.g 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.line x1="35" y1="60" x2="55" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <motion.line x1="35" y1="65" x2="65" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <motion.line x1="40" y1="70" x2="70" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <motion.line x1="40" y1="75" x2="60" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <motion.line x1="35" y1="80" x2="75" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <motion.line x1="40" y1="85" x2="65" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <motion.line x1="35" y1="90" x2="70" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <motion.line x1="40" y1="95" x2="60" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        </motion.g>
        
        {/* Keyboard details */}
        <motion.g 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.rect x="40" y="105" width="40" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
          <motion.rect x="45" y="110" width="30" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
        </motion.g>
      </motion.g>
      
      {/* Server racks */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.rect 
          x="110" 
          y="55" 
          width="30" 
          height="65" 
          rx="2" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        
        {/* Server units */}
        <motion.g>
          {[...Array(6)].map((_, i) => (
            <motion.g key={`server-${i}`}>
              <motion.rect 
                x="112" 
                y={60 + i * 9} 
                width="26" 
                height="7" 
                rx="1" 
                fill="rgba(255,255,255,0.01)" 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="0.5"
              />
              <motion.circle 
                cx="135" 
                cy={63.5 + i * 9} 
                r="1" 
                fill="rgba(255,255,255,0.2)"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, repeatType: "reverse", delay: 1 + i * 0.2 }}
              />
              <motion.circle 
                cx="131" 
                cy={63.5 + i * 9} 
                r="1" 
                fill="rgba(255,255,255,0.15)"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, repeatType: "reverse", delay: 1.5 + i * 0.2 }}
              />
            </motion.g>
          ))}
        </motion.g>
      </motion.g>
      
      {/* Network connections */}
      <motion.g
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
        strokeDasharray="2,2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.3 }}
      >
        <motion.path 
          d="M90,90 C100,90 100,90 110,90" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        <motion.path 
          d="M140,90 C150,90 150,90 160,90" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        />
        <motion.path 
          d="M140,110 C150,110 150,130 160,130" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        />
        <motion.path 
          d="M200,90 C220,90 220,50 240,50" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        />
        <motion.path 
          d="M200,130 C220,130 220,150 240,150" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
      </motion.g>
      
      {/* Cloud services */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.path 
          d="M160,70 C160,65 165,60 170,60 C175,55 185,55 190,60 C195,55 205,55 210,60 C215,60 220,65 220,70 C220,75 215,80 210,80 C205,85 195,85 190,80 C185,85 175,85 170,80 C165,80 160,75 160,70 Z" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        
        {/* Cloud icons */}
        <motion.g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none">
          <motion.circle cx="175" cy="70" r="3" />
          <motion.circle cx="185" cy="65" r="2" />
          <motion.circle cx="195" cy="70" r="3" />
          <motion.circle cx="205" cy="65" r="2" />
        </motion.g>
        
        {/* Data flow animation */}
        <motion.g>
          <motion.circle 
            cx="180" 
            cy="70" 
            r="1" 
            fill="rgba(255,255,255,0.3)"
            animate={{ 
              cx: [180, 190, 200], 
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "loop", 
              delay: 2.5 
            }}
          />
          <motion.circle 
            cx="200" 
            cy="65" 
            r="1" 
            fill="rgba(255,255,255,0.3)"
            animate={{ 
              cx: [200, 190, 180], 
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "loop", 
              delay: 3 
            }}
          />
        </motion.g>
      </motion.g>
      
      {/* Dashboard/Analytics */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.rect 
          x="160" 
          y="90" 
          width="40" 
          height="30" 
          rx="2" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        
        {/* Chart lines */}
        <motion.g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
          <motion.path 
            d="M165,105 L170,100 L175,110 L180,95 L185,105 L190,100 L195,105" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2.0 }}
          />
        </motion.g>
        
        {/* Chart bars */}
        <motion.rect 
          x="165" 
          y="115" 
          width="4" 
          height="0" 
          fill="rgba(255,255,255,0.15)"
          animate={{ height: 5 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        />
        <motion.rect 
          x="172" 
          y="115" 
          width="4" 
          height="0" 
          fill="rgba(255,255,255,0.15)"
          animate={{ height: 8 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        />
        <motion.rect 
          x="179" 
          y="115" 
          width="4" 
          height="0" 
          fill="rgba(255,255,255,0.15)"
          animate={{ height: 3 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        />
        <motion.rect 
          x="186" 
          y="115" 
          width="4" 
          height="0" 
          fill="rgba(255,255,255,0.15)"
          animate={{ height: 7 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
        <motion.rect 
          x="193" 
          y="115" 
          width="4" 
          height="0" 
          fill="rgba(255,255,255,0.15)"
          animate={{ height: 4 }}
          transition={{ duration: 0.5, delay: 2.6 }}
        />
      </motion.g>
      
      {/* Database */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.path 
          d="M160,130 C160,125 170,120 180,120 C190,120 200,125 200,130 L200,150 C200,155 190,160 180,160 C170,160 160,155 160,150 Z" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        <motion.path 
          d="M160,130 C160,135 170,140 180,140 C190,140 200,135 200,130" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5" 
          fill="none"
        />
        <motion.path 
          d="M160,140 C160,145 170,150 180,150 C190,150 200,145 200,140" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5" 
          fill="none"
        />
        
        {/* Database activity */}
        <motion.g>
          <motion.circle 
            cx="180" 
            cy="135" 
            r="1.5" 
            fill="rgba(255,255,255,0.2)"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 2.8 }}
          />
          <motion.circle 
            cx="170" 
            cy="145" 
            r="1" 
            fill="rgba(255,255,255,0.15)"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 3.0 }}
          />
          <motion.circle 
            cx="190" 
            cy="145" 
            r="1" 
            fill="rgba(255,255,255,0.15)"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 3.2 }}
          />
        </motion.g>
      </motion.g>
      
      {/* Mobile device */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.rect 
          x="240" 
          y="130" 
          width="20" 
          height="40" 
          rx="3" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        <motion.rect 
          x="242" 
          y="135" 
          width="16" 
          height="25" 
          rx="1" 
          fill="rgba(255,255,255,0.01)" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="0.5"
        />
        <motion.circle 
          cx="250" 
          cy="165" 
          r="2" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
        />
        
        {/* Mobile app interface */}
        <motion.g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
          <motion.line x1="245" y1="140" x2="255" y2="140" />
          <motion.line x1="245" y1="145" x2="255" y2="145" />
          <motion.line x1="245" y1="150" x2="250" y2="150" />
        </motion.g>
        
        {/* Notification animation */}
        <motion.circle 
          cx="253" 
          cy="138" 
          r="1" 
          fill="rgba(255,255,255,0.3)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 3.5 }}
        />
      </motion.g>
      
      {/* API/Code integration */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.rect 
          x="240" 
          y="30" 
          width="40" 
          height="40" 
          rx="2" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1"
        />
        
        {/* Code brackets */}
        <motion.g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none">
          <motion.path 
            d="M250,40 L245,50 L250,60" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.0 }}
          />
          <motion.path 
            d="M270,40 L275,50 L270,60" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
        </motion.g>
        
        {/* Code lines */}
        <motion.g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
          <motion.line 
            x1="255" 
            y1="45" 
            x2="265" 
            y2="45"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          />
          <motion.line 
            x1="255" 
            y1="50" 
            x2="265" 
            y2="50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          />
          <motion.line 
            x1="255" 
            y1="55" 
            x2="260" 
            y2="55"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 2.6 }}
          />
        </motion.g>
        
        {/* Data flow animation */}
        <motion.circle 
          cx="260" 
          cy="65" 
          r="1.5" 
          fill="rgba(255,255,255,0.2)"
          animate={{ 
            y: [65, 75, 85], 
            opacity: [0.2, 0.4, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop", 
            delay: 3.0 
          }}
        />
      </motion.g>
      
      {/* Connection lines between components */}
      <motion.g 
        stroke="rgba(255,255,255,0.05)" 
        strokeWidth="0.5" 
        strokeDasharray="1,2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <motion.path d="M260,70 C260,80 230,80 230,90" />
        <motion.path d="M180,80 C180,85 200,85 200,90" />
        <motion.path d="M180,160 C180,165 230,165 250,165" />
      </motion.g>
    </motion.svg>
  </div>
);

const ConstructionInfographic = () => (
  <div className="mt-4 opacity-70">
    <motion.svg 
      width="100%" 
      height="180" 
      viewBox="0 0 300 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background grid for blueprint effect */}
      <motion.g 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.3 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Horizontal grid lines */}
        {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((y, i) => (
          <motion.line 
            key={`h-${i}`}
            x1="10" 
            y1={y} 
            x2="290" 
            y2={y} 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="0.5"
            strokeDasharray="2,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.1 + i * 0.05 }}
          />
        ))}
        
        {/* Vertical grid lines */}
        {[20, 60, 100, 140, 180, 220, 260].map((x, i) => (
          <motion.line 
            key={`v-${i}`}
            x1={x} 
            y1="10" 
            x2={x} 
            y2="170" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="0.5"
            strokeDasharray="2,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.1 + i * 0.05 }}
          />
        ))}
      </motion.g>
      
      {/* Blueprint title */}
      <motion.g 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.rect 
          x="15" 
          y="15" 
          width="80" 
          height="15" 
          rx="2" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
        />
        <motion.text 
          x="20" 
          y="26" 
          fontSize="8" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.6)"
        >
          CONSTRUCTION PLAN
        </motion.text>
      </motion.g>
      
      {/* Mid-rise building */}
      <motion.rect 
        x="110" 
        y="70" 
        width="50" 
        height="70" 
        fill="rgba(255,255,255,0.04)" 
        stroke="rgba(255,255,255,0.15)" 
        strokeWidth="1"
        initial={{ height: 0, y: 140 }}
        animate={{ height: 70, y: 70 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
      />
      
      {/* Mid-rise building details */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
        <motion.line x1="110" y1="90" x2="160" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <motion.line x1="110" y1="110" x2="160" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <motion.rect x="120" y="80" width="8" height="5" fill="rgba(255,255,255,0.05)"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 2.0 }}
        />
        <motion.rect x="140" y="80" width="8" height="5" fill="rgba(255,255,255,0.05)"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 2.3 }}
        />
        <motion.rect x="120" y="100" width="8" height="5" fill="rgba(255,255,255,0.05)"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", delay: 1.7 }}
        />
        <motion.rect x="140" y="100" width="8" height="5" fill="rgba(255,255,255,0.05)"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        />
        
        {/* Building label */}
        <motion.text 
          x="135" 
          y="65" 
          fontSize="6" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          OFFICE TOWER
        </motion.text>
      </motion.g>
      
      {/* Low-rise building or foundation */}
      <motion.rect 
        x="180" 
        y="100" 
        width="40" 
        height="40" 
        fill="rgba(255,255,255,0.03)" 
        stroke="rgba(255,255,255,0.1)" 
        strokeWidth="1"
        initial={{ height: 0, y: 140 }}
        animate={{ height: 40, y: 100 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
      />
      
      {/* Construction grid/framework on top */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
        <motion.line x1="185" y1="100" x2="185" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <motion.line x1="195" y1="100" x2="195" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <motion.line x1="205" y1="100" x2="205" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <motion.line x1="215" y1="100" x2="215" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <motion.line x1="180" y1="95" x2="220" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <motion.line x1="180" y1="90" x2="220" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        
        {/* Building label */}
        <motion.text 
          x="200" 
          y="95" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          RETAIL
        </motion.text>
      </motion.g>
      
      {/* Crane with moving parts */}
      <motion.g>
        {/* Crane base */}
        <motion.rect 
          x="240" 
          y="110" 
          width="20" 
          height="30" 
          rx="2" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        
        {/* Crane tower */}
        <motion.rect 
          x="245" 
          y="40" 
          width="10" 
          height="70" 
          rx="1" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="0.5"
          initial={{ height: 0, y: 110 }}
          animate={{ height: 70, y: 40 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
        />
        
        {/* Crane arm */}
        <motion.path 
          d="M245,50 L210,50 L210,60" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        
        {/* Crane counterweight */}
        <motion.path 
          d="M255,50 L275,50 L275,60" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        />
        
        {/* Crane cable */}
        <motion.path 
          d="M210,55 L210,80" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="0.5"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        
        {/* Crane hook */}
        <motion.rect 
          x="205" 
          y="80" 
          width="10" 
          height="5" 
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ y: 55 }}
          animate={{ y: [80, 70, 80] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 2.4 }}
        />
        
        {/* Crane label */}
        <motion.text 
          x="250" 
          y="35" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          CRANE
        </motion.text>
      </motion.g>
      
      {/* Construction materials and equipment */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.0 }}>
        {/* Cement mixer */}
        <motion.circle 
          cx="140" 
          cy="150" 
          r="8" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.06)" 
          strokeWidth="0.5" 
        />
        <motion.path 
          d="M135,145 L145,155 M135,155 L145,145" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="0.5" 
        />
        <motion.rect 
          x="132" 
          y="158" 
          width="16" 
          height="5" 
          rx="1" 
          fill="rgba(255,255,255,0.03)" 
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5"
        />
        
        {/* Material piles */}
        <motion.path 
          d="M170,150 L180,145 L190,150 L180,155 Z" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="0.5" 
        />
        <motion.path 
          d="M195,150 C195,145 200,145 200,150 C205,150 205,155 200,155 C195,155 195,150 195,150 Z" 
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5" 
        />
        
        {/* Equipment label */}
        <motion.text 
          x="140" 
          y="170" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          EQUIPMENT
        </motion.text>
        
        {/* Materials label */}
        <motion.text 
          x="185" 
          y="165" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          MATERIALS
        </motion.text>
      </motion.g>
      
      {/* Construction worker helmet */}
      <motion.g>
        <motion.path 
          d="M100,155 C90,155 85,150 85,145 C85,140 90,135 100,135 C110,135 115,140 115,145 C115,150 110,155 100,155 Z" 
          fill="rgba(255,255,255,0.03)" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }}
        />
        <motion.path 
          d="M90,145 L110,145" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        />
        
        {/* Worker label */}
        <motion.text 
          x="100" 
          y="165" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          SAFETY
        </motion.text>
      </motion.g>
      
      {/* Project timeline/Gantt chart */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.6 }}>
        {/* Timeline title */}
        <motion.text 
          x="25" 
          y="180" 
          fontSize="5" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.5)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          PROJECT TIMELINE
        </motion.text>
        
        <motion.rect 
          x="20" 
          y="165" 
          width="260" 
          height="10" 
          rx="1" 
          fill="rgba(255,255,255,0.01)" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="0.5" 
        />
        
        <motion.rect 
          x="25" 
          y="167" 
          width="40" 
          height="6" 
          rx="1" 
          fill="rgba(255,255,255,0.04)" 
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        />
        <motion.rect 
          x="70" 
          y="167" 
          width="60" 
          height="6" 
          rx="1" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        />
        <motion.rect 
          x="135" 
          y="167" 
          width="30" 
          height="6" 
          rx="1" 
          fill="rgba(255,255,255,0.04)" 
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        />
        <motion.rect 
          x="170" 
          y="167" 
          width="50" 
          height="6" 
          rx="1" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 0.8, delay: 3.4 }}
        />
        <motion.rect 
          x="225" 
          y="167" 
          width="30" 
          height="6" 
          rx="1" 
          fill="rgba(255,255,255,0.04)" 
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        />
        
        {/* Timeline marker */}
        <motion.line 
          x1="150" 
          y1="160" 
          x2="150" 
          y2="175" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="0.5" 
          strokeDasharray="2,1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 3.8 }}
        />
        
        <motion.circle 
          cx="150" 
          cy="160" 
          r="2" 
          fill="rgba(255,255,255,0.2)"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop", 
            delay: 3.9 
          }}
        />
      </motion.g>
      
      {/* Measurement indicators */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.0 }}>
        <motion.line 
          x1="110" 
          y1="50" 
          x2="110" 
          y2="70" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="0.5"
          strokeDasharray="2,1"
        />
        <motion.line 
          x1="160" 
          y1="50" 
          x2="160" 
          y2="70" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="0.5"
          strokeDasharray="2,1"
        />
        <motion.line 
          x1="110" 
          y1="50" 
          x2="160" 
          y2="50" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="0.5"
          strokeDasharray="2,1"
        />
        <motion.text 
          x="135" 
          y="48" 
          fontSize="4" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.4)"
        >
          50m
        </motion.text>
      </motion.g>
      
      {/* North indicator */}
      <motion.g 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 3.2 }}
        style={{ transformOrigin: '280px 30px' }}
      >
        <motion.circle 
          cx="280" 
          cy="30" 
          r="10" 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5"
        />
        <motion.path 
          d="M280,20 L280,30 M280,20 L277,23 M280,20 L283,23" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="0.5"
          fill="none"
        />
        <motion.text 
          x="280" 
          y="35" 
          fontSize="5" 
          textAnchor="middle" 
          fontFamily="monospace" 
          fill="rgba(255,255,255,0.5)"
        >
          N
        </motion.text>
      </motion.g>
    </motion.svg>
  </div>
);

const FreelancerInfographic = () => (
  <div className="mt-4 opacity-70">
    <motion.svg 
      width="100%" 
      height="180" 
      viewBox="0 0 300 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Workspace desk */}
      <motion.rect 
        x="20" 
        y="100" 
        width="260" 
        height="10" 
        rx="2" 
        fill="rgba(255,255,255,0.15)" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.rect 
        x="30" 
        y="110" 
        width="8" 
        height="30" 
        rx="1" 
        fill="rgba(255,255,255,0.1)" 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.rect 
        x="262" 
        y="110" 
        width="8" 
        height="30" 
        rx="1" 
        fill="rgba(255,255,255,0.1)" 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      {/* Laptop */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.0 }}>
        {/* Laptop base */}
        <motion.rect 
          x="120" 
          y="85" 
          width="60" 
          height="40" 
          rx="2" 
          fill="rgba(255,255,255,0.1)" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
        {/* Laptop screen */}
        <motion.rect 
          x="125" 
          y="45" 
          width="50" 
          height="35" 
          rx="2" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
        {/* Screen content - code editor */}
        <motion.rect x="130" y="50" width="40" height="25" fill="rgba(30,30,40,0.9)" />
        
        {/* Code lines */}
        <motion.line x1="135" y1="55" x2="155" y2="55" stroke="rgba(100,200,255,0.6)" strokeWidth="1" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.line x1="135" y1="60" x2="160" y2="60" stroke="rgba(255,150,100,0.6)" strokeWidth="1" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.line x1="140" y1="65" x2="165" y2="65" stroke="rgba(150,255,150,0.6)" strokeWidth="1" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.line x1="140" y1="70" x2="150" y2="70" stroke="rgba(255,255,150,0.6)" strokeWidth="1" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        
        {/* Blinking cursor */}
        <motion.rect 
          x="150" 
          y="70" 
          width="1" 
          height="5" 
          fill="rgba(255,255,255,0.8)"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.g>
      
      {/* Coffee cup */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}>
        <motion.rect x="200" y="75" width="15" height="20" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <motion.path d="M215,80 C220,80 220,90 215,90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
        <motion.path 
          d="M203,70 C203,65 212,65 212,70" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
        <motion.path 
          d="M205,75 L210,75" 
          stroke="rgba(255,255,255,0.6)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        />
      </motion.g>
      
      {/* Smartphone */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.9 }}>
        <motion.rect x="85" y="75" width="20" height="35" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <motion.rect x="90" y="80" width="10" height="20" fill="rgba(30,30,40,0.9)" />
        <motion.circle cx="95" cy="105" r="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        
        {/* Notification animation */}
        <motion.circle 
          cx="95" 
          cy="85" 
          r="2" 
          fill="rgba(38, 35, 35, 0.6)"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.g>
      
      {/* Client management dashboard */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.0 }}>
        <motion.rect x="40" y="40" width="60" height="45" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <motion.rect x="45" y="45" width="50" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
        
        {/* Client list */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.1 }}>
          <motion.rect x="45" y="55" width="50" height="5" rx="1" fill="rgba(255,255,255,0.1)" />
          <motion.rect x="45" y="65" width="50" height="5" rx="1" fill="rgba(255,255,255,0.1)" />
          <motion.rect x="45" y="75" width="50" height="5" rx="1" fill="rgba(255,255,255,0.1)" />
          
          {/* Status indicators */}
          <motion.circle cx="50" cy="57.5" r="1.5" fill="rgba(100,255,100,0.6)" />
          <motion.circle cx="50" cy="67.5" r="1.5" fill="rgba(255,200,100,0.6)" />
          <motion.circle cx="50" cy="77.5" r="1.5" fill="rgba(255,100,100,0.6)" />
        </motion.g>
      </motion.g>
      
      {/* Project timeline */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.2 }}>
        <motion.rect x="200" y="40" width="60" height="30" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        {/* Timeline bars */}
        <motion.rect x="205" y="45" width="50" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
        <motion.rect x="205" y="45" width="30" height="3" rx="1" fill="rgba(100,200,255,0.5)" 
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        />
        
        <motion.rect x="205" y="52" width="50" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
        <motion.rect x="205" y="52" width="40" height="3" rx="1" fill="rgba(150,255,150,0.5)" 
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        />
        
        <motion.rect x="205" y="59" width="50" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
        <motion.rect x="205" y="59" width="15" height="3" rx="1" fill="rgba(255,150,150,0.5)" 
          initial={{ width: 0 }}
          animate={{ width: 15 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
      </motion.g>
      
      {/* Financial chart */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.6 }}>
        <motion.rect x="40" y="130" width="220" height="40" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        {/* Chart grid */}
        <motion.g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2,2">
          <motion.line x1="40" y1="140" x2="260" y2="140" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 2.7 }} />
          <motion.line x1="40" y1="150" x2="260" y2="150" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 2.8 }} />
          <motion.line x1="40" y1="160" x2="260" y2="160" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 2.9 }} />
        </motion.g>
        
        {/* Income line chart */}
        <motion.path 
          d="M50,160 L80,145 L110,155 L140,140 L170,130 L200,135 L230,125 L250,135" 
          stroke="rgba(38, 41, 42, 0.6)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.0 }}
        />
        
        {/* Data points */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3.2 }}>
          <motion.circle cx="50" cy="160" r="2" fill="rgba(28, 29, 29, 0.8)" />
          <motion.circle cx="80" cy="145" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="110" cy="155" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="140" cy="140" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="170" cy="130" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="200" cy="135" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="230" cy="125" r="2" fill="rgba(48, 50, 52, 0.8)" />
          <motion.circle cx="250" cy="135" r="2" fill="rgba(48, 50, 52, 0.8)" />
        </motion.g>
      </motion.g> 
      
      {/* Calendar/schedule */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.3 }}>
        <motion.rect x="230" y="75" width="30" height="20" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        {/* Calendar grid */}
        <motion.line x1="230" y1="80" x2="260" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <motion.line x1="240" y1="75" x2="240" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <motion.line x1="250" y1="75" x2="250" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        
        {/* Calendar highlights */}
        <motion.rect x="240" y="85" width="10" height="5" rx="1" fill="rgba(43, 39, 39, 0.4)" />
        <motion.rect x="250" y="85" width="10" height="5" rx="1" fill="rgba(30, 33, 30, 0.4)" />
      </motion.g>
      
      {/* Remote work cloud */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.4 }}>
        <motion.path 
          d="M150,25 C145,15 160,10 165,20 C175,10 185,20 175,30 C185,35 175,45 165,40 C160,50 140,45 145,35 C135,35 135,25 150,25 Z" 
          fill="rgba(255,255,255,0.1)" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1"
        />
        
        {/* Cloud connection lines */}
        <motion.path 
          d="M150,40 L120,45 M160,40 L200,45" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1" 
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        />
        
        {/* Data transfer animation */}
        <motion.circle 
          cx="135" 
          cy="42" 
          r="2" 
          fill="rgba(25, 26, 27, 0.6)"
          animate={{ 
            x: [-15, 0, 15], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 1 
          }}
        />
        
        <motion.circle 
          cx="180" 
          cy="42" 
          r="2" 
          fill="rgba(48, 50, 52, 0.6)"
          animate={{ 
            x: [15, 0, -15], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 1.5 
          }}
        />
      </motion.g>
    </motion.svg>
  </div>
);

export default function UseCases() {
  const useCasesRef = useRef(null);
  const useCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" });
  const useCasesControls = useAnimation();
  
  useEffect(() => {
    if (useCasesInView) {
      useCasesControls.start("visible");
    }
  }, [useCasesInView, useCasesControls]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <motion.section 
        className="py-16 px-4 text-center"
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
            Solutions for Every
          </SplitText>
          <br />
          <SplitText className="font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Industry & Team
          </SplitText>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          variants={textReveal}
        >
          From marketing to construction, ProjectAccel adapts to your workflow with customized tools for your unique challenges.
        </motion.p>
      </motion.section>

      <motion.section 
        ref={useCasesRef}
        className="py-8 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate={useCasesControls}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 px-4">
          {useCases.map((uc, i) => (
            <motion.div 
              key={i}
              className={`p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-gradient-to-b from-white/[0.05] to-transparent transition-all duration-300 hover:shadow-lg hover:shadow-white/5 ${
                i === 0 ? 'md:col-span-2 md:row-span-1 md:min-h-[300px]' : 
                i === 1 ? 'md:col-span-1 md:row-span-1 md:min-h-[300px]' : 
                i === 2 ? 'md:col-span-1 md:row-span-1 md:min-h-[300px]' : 
                'md:col-span-2 md:row-span-1 md:min-h-[300px]'
              }`}
              variants={boxReveal}
              whileHover="hover"
            >
              <motion.div 
                className="mb-4"
                animate={{ 
                  y: [0, -5, 0], 
                  filter: ["drop-shadow(0px 0px 0px rgba(255,255,255,0.0))", "drop-shadow(0px 10px 10px rgba(255,255,255,0.2))", "drop-shadow(0px 0px 0px rgba(255,255,255,0.0))"],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                {uc.icon}
              </motion.div>
              <motion.h2 
                className="text-xl font-medium leading-snug bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-3"
                variants={textReveal}
              >
                {uc.title}
              </motion.h2>
              <motion.p 
                className="text-md text-gray-300 font-light"
                variants={textReveal}
              >
                {uc.desc}
              </motion.p>
              {i === 0 && <MarketingInfographic />}
              {i === 1 && <ITSoftwareInfographic />}
              {i === 2 && <ConstructionInfographic />}
              {i === 3 && <FreelancerInfographic />}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center mt-16 mb-16"
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
            Ready to transform your workflow?
          </SplitText>
        </motion.h2>
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
      </motion.section>
    </div>
  );
}
