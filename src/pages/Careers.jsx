// import React from 'react';

// const openRoles = [
//   {
//     title: 'Sales Development Representative',
//     location: 'Remote / Chennai',
//     type: 'Full-time',
//     description: "Drive new business by qualifying leads and setting up demos for our sales team. Great for energetic communicators who love helping businesses grow."
//   },
//   {
//     title: 'Frontend React Developer',
//     location: 'Remote / Chennai',
//     type: 'Full-time',
//     description: 'Build beautiful, high-performance UIs for our project management platform. Experience with React and Tailwind CSS required.'
//   },
//   {
//     title: 'Business Development',
//     location: 'Remote / Chennai',
//     type: 'Full-time',
//     description: 'Help our customers get the most out of ProjectAccel. You\'ll onboard new users, answer questions, and turn feedback into product improvements.'
//   },
//   {
//     title: 'FullStack Developer',
//     location: 'Remote / Chennai',
//     type: 'Full-time',
//     description: 'Build and maintain our project management platform. Experience with Node.js, React, and modern web technologies required.'
//   }
// ];

// const benefits = [
//   'Flexible remote work options',
//   'Competitive salary & performance bonuses',
//   'Learning budget for courses & certifications',
//   'Collaborative, growth-focused team culture',
//   'Opportunity to make a real impact for thousands of businesses',
//   'Modern tech stack & tools',
//   'Health insurance (India-based employees)'
// ];

// export default function Careers() {
//   return (
//     <div className="space-y-16">
//       {/* Headline */}
//       <section className="text-center animate-fade-in-up pt-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
//           Join the ProjectAccel Team
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           At ProjectAccel, we are on a mission to help ambitious teams deliver projects on time, every time. We believe in simplicity, transparency, and constant improvement. Want to be part of our story?
//         </p>
//       </section>

//       {/* Open Roles */}
//       <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
//         <div className="bg-white/5 p-8 rounded-xl">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
//             Open Roles
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {openRoles.map((role, idx) => (
//               <div key={role.title} className="bg-white/10 p-6 rounded-xl hover:scale-105 transition duration-300 flex flex-col h-full">
//                 <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
//                 <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
//                   <span>{role.location}</span>
//                   <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 font-semibold">{role.type}</span>
//                 </div>
//                 <p className="text-gray-300 mb-4 flex-1">{role.description}</p>
//                 <a
//                   href={`mailto:careers@projectaccel.io?subject=Application for ${encodeURIComponent(role.title)}`}
//                   className="mt-auto inline-block bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-2 px-6 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="max-w-4xl mx-auto animate-fade-in-up stagger-3">
//         <div className="bg-white/5 p-8 rounded-xl text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Benefits & Perks
//           </h2>
//           <ul className="grid gap-4 md:grid-cols-2 text-gray-300 text-base mb-8">
//             {benefits.map((benefit, idx) => (
//               <li
//                 key={benefit}
//                 className={`bg-white/10 rounded-lg py-4 px-6 ${
//                   idx === benefits.length - 1 && benefits.length % 2 !== 0 ? 'md:col-span-2' : ''
//                 }`}
//               >
//                 {benefit}
//               </li>
//             ))}
//           </ul>
//           <a
//             href="mailto:careers@projectaccel.io?subject=General%20Application"
//             className="inline-block bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 px-8 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base"
//           >
//             Don't see your role? Send us your profile
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// } 



import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation definitions
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const boxReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// SplitText component
const SplitText = ({ children, className }) => (
  <span className={className}>
    {children.split(' ').map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.15em]">
        <motion.span
          className="inline-block"
          custom={i}
          variants={{
            hidden: { y: '100%' },
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

// Job openings data
const openRoles = [
  {
    title: 'Sales Development Representative',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description:
      'Drive new business by qualifying leads and setting up demos for our sales team. Great for energetic communicators who love helping businesses grow.'
  },
  {
    title: 'Frontend React Developer',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description:
      'Build beautiful, high-performance UIs for our project management platform. Experience with React and Tailwind CSS required.'
  },
  {
    title: 'Business Development',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description:
      "Help our customers get the most out of ProjectAccel. You'll onboard new users, answer questions, and turn feedback into product improvements."
  },
  {
    title: 'FullStack Developer',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description:
      'Build and maintain our project management platform. Experience with Node.js, React, and modern web technologies required.'
  }
];

// Benefits data
const benefits = [
  'Flexible remote work options',
  'Competitive salary & performance bonuses',
  'Learning budget for courses & certifications',
  'Collaborative, growth-focused team culture',
  'Opportunity to make a real impact for thousands of businesses',
  'Modern tech stack & tools',
  'Health insurance (India-based employees)'
];

// Main Careers component
export default function Careers() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 space-y-20 px-6 py-20">

        {/* Header Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
            <SplitText className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Join the ProjectAccel Team
            </SplitText>
          </motion.h1>

          <motion.p
            variants={textReveal}
            className="text-xl text-gray-400 font-light leading-relaxed"
          >
            At ProjectAccel, we help teams deliver projects on time, every time.
            We believe in simplicity, transparency, and continuous improvement.
          </motion.p>
        </motion.section>

        {/* Open Roles Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight text-center"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Open Roles
            </SplitText>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                variants={boxReveal}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
                  <span>{role.location}</span>
                  <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 font-semibold">
                    {role.type}
                  </span>
                </div>
                <p className="text-gray-300 font-light mb-4">{role.description}</p>
                <a
                  href={`mailto:careers@projectaccel.io?subject=Application for ${encodeURIComponent(
                    role.title
                  )}`}
                  className="inline-block bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-white/5 transition duration-300 text-sm"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h2
            variants={textReveal}
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Benefits & Perks
            </SplitText>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300 font-light">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                variants={boxReveal}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="border border-white/10 p-4 rounded-xl backdrop-blur-sm bg-white/[0.03]"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.h2
            variants={textReveal}
            className="text-2xl md:text-3xl font-light"
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Want to work with us?
            </SplitText>
          </motion.h2>

          <motion.div variants={scaleUp}>
            <Link
              to="/contact"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg text-sm"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.p
            variants={textReveal}
            className="text-gray-400 font-light"
          >
            Or email us: careers@projectaccel.io
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
}