import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  MdChecklist,
  MdCalendarToday,
  MdAccessTime,
  MdChatBubbleOutline,
  MdBarChart,
  MdPower,
  MdTimeline,
  MdInsertChart
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaSlack } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiJirasoftware } from "react-icons/si";

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

const TimelineInfographic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 300 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1 }}
    >
      <motion.rect 
        x="20" y="30" width="260" height="20" rx="4" 
        fill="rgba(255,255,255,0.1)"
        initial={{ width: 0 }}
        animate={{ width: 260 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.rect 
        x="20" y="60" width="180" height="20" rx="4" 
        fill="rgba(255,255,255,0.15)"
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
      />
      <motion.rect 
        x="20" y="90" width="220" height="20" rx="4" 
        fill="rgba(255,255,255,0.1)"
        initial={{ width: 0 }}
        animate={{ width: 220 }}
        transition={{ duration: 1.3, delay: 0.6, ease: "easeInOut" }}
      />
      <motion.rect 
        x="20" y="120" width="120" height="20" rx="4" 
        fill="rgba(255,255,255,0.15)"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
      />
      <motion.rect 
        x="20" y="150" width="200" height="20" rx="4" 
        fill="rgba(255,255,255,0.1)"
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
      />
      
      <motion.circle 
        cx="80" cy="30" r="6" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.circle 
        cx="160" cy="60" r="6" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
      <motion.circle 
        cx="200" cy="90" r="6" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.circle 
        cx="100" cy="120" r="6" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.circle 
        cx="180" cy="150" r="6" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />
      
      <motion.line 
        x1="40" y1="20" x2="40" y2="180" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="2" 
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
    </motion.svg>
  </div>
);

const DashboardInfographic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 300 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1 }}
    >
      <motion.rect 
        x="20" y="120" width="30" height="60" rx="2" 
        fill="rgba(255,255,255,0.2)"
        initial={{ height: 0, y: 180 }}
        animate={{ height: 60, y: 120 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      <motion.rect 
        x="60" y="100" width="30" height="80" rx="2" 
        fill="rgba(255,255,255,0.15)"
        initial={{ height: 0, y: 180 }}
        animate={{ height: 80, y: 100 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
      <motion.rect 
        x="100" y="80" width="30" height="100" rx="2" 
        fill="rgba(255,255,255,0.2)"
        initial={{ height: 0, y: 180 }}
        animate={{ height: 100, y: 80 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      />
      <motion.rect 
        x="140" y="60" width="30" height="120" rx="2" 
        fill="rgba(255,255,255,0.15)"
        initial={{ height: 0, y: 180 }}
        animate={{ height: 120, y: 60 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />
      
      <motion.circle 
        cx="230" cy="80" r="40" 
        fill="rgba(255,255,255,0.05)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.path 
        d="M230 80 L270 80 A40 40 0 0 1 250 115 Z" 
        fill="rgba(255,255,255,0.15)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      <motion.path 
        d="M230 80 L250 115 A40 40 0 0 1 210 115 Z" 
        fill="rgba(255,255,255,0.2)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      />
      
      <motion.polyline 
        points="20,40 60,30 100,50 140,20 180,35 220,25 260,40" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="2" 
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.circle 
        cx="60" cy="30" r="3" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle 
        cx="100" cy="50" r="3" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      <motion.circle 
        cx="140" cy="20" r="3" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      <motion.circle 
        cx="180" cy="35" r="3" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
      <motion.circle 
        cx="220" cy="25" r="3" 
        fill="rgba(255,255,255,0.5)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </motion.svg>
  </div>
);

const TaskManagementInfographic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
    <rect x="20" y="30" width="70" height="140" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="100" y="30" width="70" height="140" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="180" y="30" width="70" height="140" rx="4" fill="rgba(255,255,255,0.05)" />
    
    <rect x="25" y="40" width="60" height="25" rx="3" fill="rgba(255,255,255,0.2)" />
    <rect x="25" y="75" width="60" height="25" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="25" y="110" width="60" height="25" rx="3" fill="rgba(255,255,255,0.2)" />
    
    <rect x="105" y="40" width="60" height="25" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="105" y="75" width="60" height="25" rx="3" fill="rgba(255,255,255,0.2)" />
    
    <rect x="185" y="40" width="60" height="25" rx="3" fill="rgba(255,255,255,0.15)" />
    
    <rect x="20" y="15" width="70" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="100" y="15" width="70" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="180" y="15" width="70" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
  </svg>
);

const TimeTrackingInfographic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
    <circle cx="80" cy="80" r="50" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="rgba(255,255,255,0.02)" />
    <line x1="80" y1="80" x2="80" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <line x1="80" y1="80" x2="100" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <circle cx="80" cy="80" r="5" fill="rgba(255,255,255,0.4)" />
    
    <rect x="150" y="50" width="120" height="15" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="150" y="50" width="80" height="15" rx="2" fill="rgba(255,255,255,0.2)" />
    
    <rect x="150" y="80" width="120" height="15" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="150" y="80" width="60" height="15" rx="2" fill="rgba(255,255,255,0.15)" />
    
    <rect x="150" y="110" width="120" height="15" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="150" y="110" width="100" height="15" rx="2" fill="rgba(255,255,255,0.2)" />
    
    <circle cx="80" cy="150" r="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="rgba(255,255,255,0.02)" />
    <path d="M80 150 L80 120 A30 30 0 0 1 105 135 Z" fill="rgba(255,255,255,0.2)" />
    <text x="75" y="155" fill="rgba(255,255,255,0.5)" fontSize="12">$</text>
  </svg>
);

const CollaborationInfographic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
    <circle cx="60" cy="50" r="15" fill="rgba(255,255,255,0.15)" />
    <circle cx="150" cy="50" r="15" fill="rgba(255,255,255,0.2)" />
    <circle cx="240" cy="50" r="15" fill="rgba(255,255,255,0.15)" />
    
    <line x1="75" y1="50" x2="135" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="165" y1="50" x2="225" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    
    <path d="M60 80 L50 100 L80 95 L100 110 L90 80 Z" fill="rgba(255,255,255,0.1)" />
    <path d="M150 80 L140 100 L170 95 L190 110 L180 80 Z" fill="rgba(255,255,255,0.15)" />
    <path d="M240 80 L230 100 L260 95 L280 110 L270 80 Z" fill="rgba(255,255,255,0.1)" />
    
    <rect x="70" y="130" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="75" y="140" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="75" y="150" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="75" y="160" width="20" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    
    <rect x="130" y="130" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="135" y="140" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="135" y="150" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="135" y="160" width="20" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    
    <rect x="190" y="130" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="195" y="140" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="195" y="150" width="30" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="195" y="160" width="20" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
  </svg>
);

const IntegrationsInfographic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
    <circle cx="150" cy="100" r="30" fill="rgba(255,255,255,0.15)" />
    <circle cx="150" cy="100" r="20" fill="rgba(255,255,255,0.05)" />
    
    <circle cx="60" cy="50" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="240" cy="50" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="60" cy="150" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="240" cy="150" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="100" cy="180" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="200" cy="180" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="100" cy="20" r="15" fill="rgba(255,255,255,0.1)" />
    <circle cx="200" cy="20" r="15" fill="rgba(255,255,255,0.1)" />
    
    <line x1="150" y1="100" x2="60" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="240" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="60" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="240" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="100" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="200" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="150" y1="100" x2="200" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
  </svg>
);

export default function Features() {
  const features = [
    {
      icon: <MdChecklist size={40} className="text-gray-100" />,
      title: "Task Management",
      description:
        "Organize work your way. Use Kanban boards, task lists, or calendar views to plan and execute seamlessly.",
      link: "#",
      infographic: <TaskManagementInfographic />,
      size: "normal"
    },
    {
      icon: <MdTimeline size={40} className="text-gray-100" />,
      title: "Timeline & Gantt",
      description:
        "Visualize every milestone. Stay ahead with clear dependencies and critical paths.",
      link: "#",
      infographic: <TimelineInfographic />,
      size: "large"
    },
    {
      icon: <MdAccessTime size={40} className="text-gray-100" />,
      title: "Time & Budget Tracking",
      description:
        "Log hours, control expenses, and keep your project budgets healthy.",
      link: "#",
      infographic: <TimeTrackingInfographic />,
      size: "normal"
    },
    {
      icon: <MdChatBubbleOutline size={40} className="text-gray-100" />,
      title: "Collaboration",
      description:
        "Comment on tasks, share files, and keep your team & clients on the same page.",
      link: "#",
      infographic: <CollaborationInfographic />,
      size: "normal"
    },
    {
      icon: <MdInsertChart size={40} className="text-gray-100" />,
      title: "Reports & Dashboards",
      description:
        "Know exactly where your projects stand — progress, costs, workloads.",
      link: "#",
      infographic: <DashboardInfographic />,
      size: "large"
    },
    {
      icon: <MdPower size={40} className="text-gray-100" />,
      title: "Integrations",
      description: "Connect with Slack, Teams, Google Drive, and more.",
      link: "#",
      infographic: <IntegrationsInfographic />,
      size: "normal"
    }
  ];

  const integrations = [
    { name: "Microsoft Teams", logo: <BsMicrosoftTeams />},
    { name: "Slack", logo: <FaSlack /> },
    { name: "GitHub", logo: <FaGithub /> },
    { name: "Figma", logo: <FaFigma /> },
    { name: "Google Workspace", logo: <BsPersonWorkspace /> },
    { name: "Jira", logo: <SiJirasoftware />}
  ];

  const featuresRef = useRef(null);
  const integrationsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const integrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" });
  const featuresControls = useAnimation();
  const integrationsControls = useAnimation();
  
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
    if (integrationsInView) {
      integrationsControls.start("visible");
    }
  }, [featuresInView, integrationsInView, featuresControls, integrationsControls]);

  return (
    <div className="space-y-20 bg-black text-white">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center py-20"
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-6"
        >
          <motion.h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Designed for Teams
            </SplitText>
            <br />
            <SplitText className="font-medium bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              That Deliver
            </SplitText>
          </motion.h1>
          
          <motion.p 
            variants={textReveal}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Feature-rich, flexible, and built to help you simplify projects, reduce delays, and scale efficiently.
          </motion.p>
        </motion.div>
      </motion.section>

      <section className="py-16" ref={featuresRef}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={featuresControls}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
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
              Core Capabilities
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={textReveal}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
          >
            Everything you need to plan, execute, and deliver projects with confidence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={featuresControls}
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={boxReveal}
              whileHover="hover"
              className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-end border border-white/5 ${feature.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2'}`}
              style={{
                backgroundImage: feature.image ? `url(${feature.image})` : 'none',
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {feature.infographic && feature.infographic}
              <div className={`${!feature.image && !feature.infographic ? 'h-full flex flex-col justify-center items-center pt-10' : ''} bg-gradient-to-t from-black via-black/80 to-transparent p-6 relative z-10`}>
                {!feature.image && !feature.infographic && (
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
                    {feature.icon}
                  </motion.div>
                )}
                <h3 className="text-xl font-medium leading-snug bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-md text-gray-300 mt-3 font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        ref={integrationsRef}
        initial="hidden"
        animate={integrationsControls}
        variants={fadeIn}
        className="py-16"
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Seamless Integrations
            </SplitText>
          </motion.h2>
          <motion.p 
            variants={textReveal}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
          >
            Connect with your favorite tools and streamline your workflow with 150+ integrations.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto px-4"
        >
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              variants={scaleUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px -5px rgba(255,255,255,0.1)",
                transition: { duration: 0.2 }
              }}
              className="border border-white/10 p-6 rounded-xl backdrop-blur-sm bg-white/[0.03] text-center transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg mx-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  } 
                }}
              >
                {item.logo}
              </motion.div>
              <div className="text-sm font-light text-white mt-3">
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={textReveal}
          className="flex justify-center mt-12"
        >
          <motion.button 
            className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-8 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 20px -5px rgba(255,255,255,0.15)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Integrations
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}