// import React from 'react';

// export default function About() {
//   return (
//     <div className="space-y-16">
//       {/* Headline */}
//       <section className="text-center animate-fade-in-up pt-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
//           About ProjectAccel
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           At ProjectAccel, our mission is to help teams plan smarter, collaborate better, and deliver projects on time, every time. We believe managing projects should be easier — not overwhelming.
//         </p>
//       </section>

//       {/* The Story Behind ProjectAccel */}
//       <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
//         <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
//           <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             The Story Behind ProjectAccel
//           </h2>
//           <p className="mb-4 text-gray-300 text-lg">
//             We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
//           </p>
//           <p className="text-gray-300 text-lg">
//             As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
//           </p>
//         </div>
//       </section>

//       {/* What We Stand For */}
//       <section className="max-w-6xl mx-auto text-center animate-fade-in-up stagger-3">
//         <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//           What We Stand For
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-1">
//             <div className="text-4xl mb-4 animate-float">💡</div>
//             <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Clarity
//             </h3>
//             <p className="text-gray-300">We simplify work so teams always know what's next.</p>
//           </div>
//           <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-2">
//             <div className="text-4xl mb-4 animate-float">🤝</div>
//             <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Accountability
//             </h3>
//             <p className="text-gray-300">We make ownership visible so nothing falls through the cracks.</p>
//           </div>
//           <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-3">
//             <div className="text-4xl mb-4 animate-float">🚀</div>
//             <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Results
//             </h3>
//             <p className="text-gray-300">We help businesses hit deadlines and control budgets.</p>
//           </div>
//         </div>
//       </section>

//       {/* Today */}
//       <section className="max-w-4xl mx-auto animate-fade-in-up stagger-4">
//         <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
//           <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Today
//           </h2>
//           <p className="text-gray-300 text-lg">
//             Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work. Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
//           </p>
//         </div>
//       </section>

//       {/* Join Us Section */}
//       <section className="text-center animate-fade-in-up stagger-5">
//         <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//           Join Us
//         </h2>
//         <p className="mb-6 text-gray-300 text-lg">We're growing and always looking for great people to join our team.</p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
//           <a href="/careers" className="bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 px-8 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base">Explore Careers</a>
//           <a href="/start-free-trial" className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-base">Start Free Trial</a>
//           <a href="/contact" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-base">Talk to Sales</a>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { GiIdea } from "react-icons/gi";
// // Animations (copied from Home page)
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// };

// const textReveal = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.2, 0.65, 0.3, 0.9]
//     }
//   }
// };

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
//   }
// };

// const boxReveal = {
//   hidden: {
//     opacity: 0,
//     scale: 0.95
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
//   },
//   hover: {
//     scale: 1.03,
//     y: -5,
//     transition: { duration: 0.3 }
//   }
// };

// const SplitText = ({ children, className }) => {
//   return (
//     <span className={className}>
//       {children.split(" ").map((word, i) => (
//         <span key={i} className="inline-block overflow-hidden mr-[0.15em]">
//           <motion.span
//             className="inline-block"
//             custom={i}
//             variants={{
//               hidden: { y: "100%" },
//               visible: i => ({
//                 y: 0,
//                 transition: {
//                   delay: i * 0.1,
//                   duration: 0.6,
//                   ease: [0.2, 0.65, 0.3, 0.9]
//                 }
//               })
//             }}
//           >
//             {word}
//           </motion.span>
//         </span>
//       ))}
//     </span>
//   );
// };

// export default function About() {
//   return (
//     <div className="bg-black text-white px-6 py-20 space-y-28 overflow-hidden">
      
//       {/* Headline */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-center space-y-8 max-w-4xl mx-auto"
//       >
//         <motion.h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
//           <SplitText className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
//             About ProjectAccel
//           </SplitText>
//         </motion.h1>

//         <motion.p
//           variants={textReveal}
//           className="text-xl text-gray-400 font-light leading-relaxed"
//         >
//           At ProjectAccel, our mission is to help teams plan smarter, collaborate better,
//           and deliver projects on time, every time. We believe managing projects should be easier — not overwhelming.
//         </motion.p>
//       </motion.section>

//       {/* Story */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <motion.div
//           variants={boxReveal}
//           initial="hidden"
//           whileInView="visible"
//           whileHover="hover"
//           className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
//         >
//           <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             The Story Behind ProjectAccel
//           </h2>
//           <p className="text-gray-300 text-lg font-light mb-3">
//             We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
//           </p>
//           <p className="text-gray-300 text-lg font-light">
//             As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* Values */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-center space-y-10 max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//           What We Stand For
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {[
//             [<GiIdea />, "Clarity", "We simplify work so teams always know what's next."],
//             ["🤝", "Accountability", "We make ownership visible so nothing falls through the cracks."],
//             ["🚀", "Results", "We help businesses hit deadlines and control budgets."]
//           ].map(([icon, title, desc], i) => (
//             <motion.div
//               key={i}
//               variants={boxReveal}
//               initial="hidden"
//               whileInView="visible"
//               whileHover="hover"
//               className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
//             >
//               <div className="text-4xl mb-4 animate-float">{icon}</div>
//               <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
//               <p className="text-gray-300 font-light">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Today */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <motion.div
//           variants={boxReveal}
//           initial="hidden"
//           whileInView="visible"
//           whileHover="hover"
//           className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
//         >
//           <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Today
//           </h2>
//           <p className="text-gray-300 text-lg font-light">
//             Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work.
//             Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* Join Us */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-center space-y-6 max-w-4xl mx-auto"
//       >
//         <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//           Join Us
//         </h2>
//         <p className="text-gray-300 text-lg font-light">
//           We're growing and always looking for great people to join our team.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-6">
//           <Link
//             to="/careers"
//             className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold py-3 px-8 rounded-full hover:from-gray-200 hover:to-gray-300 transition duration-300 shadow-lg text-sm"
//           >
//             Explore Careers
//           </Link>
//           <Link
//             to="/start-free-trial"
//             className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg text-sm"
//           >
//             Start Free Trial
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm"
//           >
//             Talk to Sales
//           </Link>
//         </div>
//       </motion.section>
//     </div>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiIdea } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiRocket } from "react-icons/gi";

// Animations
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

const boxReveal = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: { duration: 0.3 }
  }
};

const SplitText = ({ children, className }) => {
  return (
    <span className={className}>
      {children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.15em]">
          <motion.span
            className="inline-block"
            custom={i}
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

export default function About() {
  return (
    <div className="bg-black text-white px-6 py-20 space-y-28 overflow-hidden">

      {/* Headline */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 leading-tight tracking-tight">
          <SplitText className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            About 
          </SplitText>
          <SplitText className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
           ProjectAccel
          </SplitText>

        </motion.h1>

        <motion.p
          variants={textReveal}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          At ProjectAccel, our mission is to help teams plan smarter, collaborate better,
          and deliver projects on time, every time. We believe managing projects should be easier — not overwhelming.
        </motion.p>
      </motion.section>

      {/* Story */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={boxReveal}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Story Behind ProjectAccel
          </h2>
          <p className="text-gray-300 text-lg font-light mb-3">
            We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
          </p>
          <p className="text-gray-300 text-lg font-light">
            As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
          </p>
        </motion.div>
      </motion.section>

      {/* Values */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-10 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          What We Stand For
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {[
            [<GiIdea />, "Clarity", "We simplify work so teams always know what's next."],
            [<MdOutlineManageAccounts />, "Accountability", "We make ownership visible so nothing falls through the cracks."],
            [<GiRocket />, "Results", "We help businesses hit deadlines and control budgets."]
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              variants={boxReveal}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className="bg-[#0f0f0f] border border-[#1a1a1a] px-8 py-6 rounded-2xl backdrop-blur-sm shadow-xl w-[300px]"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Today */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={boxReveal}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Today
          </h2>
          <p className="text-gray-300 text-lg font-light">
            Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work.
            Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
          </p>
        </motion.div>
      </motion.section>

      {/* Join Us */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Join Us
        </h2>
        <p className="text-gray-300 text-lg font-light">
          We're growing and always looking for great people to join our team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/careers"
            className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold py-3 px-8 rounded-full hover:from-gray-200 hover:to-gray-300 transition duration-300 shadow-lg text-sm"
          >
            Explore Careers
          </Link>
          <Link
            to="/start-free-trial"
            className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg text-sm"
          >
            Start Free Trial
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm"
          >
            Talk to Sales
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
