import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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

const formItemReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    borderColor: "rgba(255,255,255,0)"
  },
  visible: {
    opacity: 1,
    y: 0,
    borderColor: "rgba(255,255,255,0.2)",
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  },
  focus: {
    borderColor: "rgba(255,255,255,0.8)",
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  
  const headerControls = useAnimation();
  const formControls = useAnimation();
  const infoControls = useAnimation();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };
  
  useEffect(() => {
    if (headerInView) headerControls.start("visible");
    if (formInView) formControls.start("visible");
    if (infoInView) infoControls.start("visible");
  }, [headerInView, formInView, infoInView, headerControls, formControls, infoControls]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={headerControls}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight"
            variants={staggerContainer}
          >
            <SplitText className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </SplitText>
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-lg mx-auto text-lg font-light"
            variants={textReveal}
          >
            Whether you have questions, need support or want a demo — we're here to help.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            ref={formRef}
            className="flex flex-col justify-between"
            variants={staggerContainer}
            initial="hidden"
            animate={formControls}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <motion.div variants={formItemReveal}>
                <label className="block text-sm mb-2 text-left text-gray-300">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  animate={focusedField === 'name' ? 'focus' : ''}
                  className="w-full border-b border-white/20 bg-transparent py-3 px-0 focus:outline-none transition-all duration-300"
                />
              </motion.div>
              
              <motion.div variants={formItemReveal}>
                <label className="block text-sm mb-2 text-left text-gray-300">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  animate={focusedField === 'email' ? 'focus' : ''}
                  className="w-full border-b border-white/20 bg-transparent py-3 px-0 focus:outline-none transition-all duration-300"
                />
              </motion.div>
              
              <motion.div variants={formItemReveal}>
                <label className="block text-sm mb-2 text-left text-gray-300">Message</label>
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  animate={focusedField === 'message' ? 'focus' : ''}
                  className="w-full border-b border-white/20 bg-transparent py-3 px-0 focus:outline-none resize-none min-h-[100px] transition-all duration-300"
                />
              </motion.div>
              
              <motion.div variants={scaleUp}>
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0px 10px 20px -5px rgba(255,255,255,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div 
            ref={infoRef}
            className="flex flex-col justify-end space-y-10 text-gray-300"
            variants={staggerContainer}
            initial="hidden"
            animate={infoControls}
          >
            <div className="space-y-10">
              <motion.div variants={textReveal}>
                <h2 className="text-base font-medium text-white mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Visit us</h2>
                <p className="font-light">OMR Road,<br />Chennai</p>
              </motion.div>

              <motion.div variants={textReveal}>
                <h2 className="text-base font-medium text-white mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Talk to us</h2>
                <p className="font-light">+91 98765 43210<br />support@projectaccel.com</p>
              </motion.div>

              <motion.div 
                className="flex gap-8 pt-6 justify-center md:justify-start"
                variants={staggerContainer}
              >
                {['twitter', 'linkedin-in', 'instagram', 'youtube'].map((icon, index) => (
                  <motion.a 
                    key={icon}
                    href="#" 
                    aria-label={icon}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                    variants={scaleUp}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                    custom={index}
                  >
                    <i className={`fab fa-${icon} text-xl`} />
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0.1],
                  scale: [0.8, 1.2, 1],
                  rotate: [0, 90]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
