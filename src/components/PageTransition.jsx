import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Create a context to share the animation state with child components
export const PageTransitionContext = createContext({
  isAnimationComplete: true,
  setIsAnimationComplete: () => {}
});

// Custom hook to access the animation state
export const usePageTransition = () => useContext(PageTransitionContext);

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [contentVisible, setContentVisible] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);
  
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // First hide the current page content and set animation as not complete
      setContentVisible(false);
      setIsAnimationComplete(false);
      
      // Then start the transition
      setTransitionStage("fadeOut");
      
      const timeout = setTimeout(() => {
        // Update the location after the overlay has appeared
        setDisplayLocation(location);
        
        // Wait a bit longer before starting the fade in animation
        setTimeout(() => {
          setTransitionStage("fadeIn");
          
          // Show the new page content with a delay to ensure it's properly loaded
          setTimeout(() => {
            setContentVisible(true);
            
            // Set animation as complete after a small delay to allow content to render
            setTimeout(() => {
              setIsAnimationComplete(true);
            }, 100);
          }, 100);
        }, 100);
      }, 800); 
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  // Premium zoom and swipe transition effect
  const contentVariants = {
    fadeIn: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease for premium feel
        delay: 0.8 // Increased delay to ensure transition completes first
      }
    },
    fadeOut: {
      opacity: 0,
      scale: 0.92, // Zoom out effect
      y: 50, // Move down slightly
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <PageTransitionContext.Provider value={{ isAnimationComplete, setIsAnimationComplete }}>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="w-full"
          initial="fadeOut"
          animate={transitionStage}
          variants={contentVariants}
          style={{ visibility: contentVisible ? 'visible' : 'hidden' }}
        >
          {children}
        </motion.div>

        <AnimatePresence>
          {transitionStage === "fadeOut" && (
            <>
              {/* Main overlay with swipe up effect */}
              <motion.div
                className="fixed inset-0 z-[100] pointer-events-none bg-black"
                initial={{ y: "100%" }}
                animate={{ 
                  y: "0%", 
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  } 
                }}
                exit={{ 
                  y: "-100%",
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                  } 
                }}
              />
              
              {/* Premium silver gradient overlay */}
              <motion.div
                className="fixed inset-0 z-[101] pointer-events-none bg-gradient-to-t from-white/[0.08] via-white/[0.03] to-transparent"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ 
                  opacity: 1,
                  y: "0%",
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.05
                  } 
                }}
                exit={{ 
                  opacity: 0,
                  y: "-100%",
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15
                  } 
                }}
              />
              
              {/* Subtle grain texture */}
              <motion.div
                className="fixed inset-0 z-[101] pointer-events-none opacity-20 mix-blend-overlay"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ 
                  opacity: 0.2,
                  y: "0%",
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                  } 
                }}
                exit={{ 
                  opacity: 0,
                  y: "-100%",
                  transition: { 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                  } 
                }}
                style={{ 
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  backgroundSize: 'cover'
                }}
              />
              
              {/* Center logo with silver gradient */}
              <motion.div
                className="fixed inset-0 z-[102] pointer-events-none flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                  } 
                }}
                exit={{ 
                  opacity: 0,
                  y: -50,
                  transition: { 
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                  } 
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="text-3xl font-light tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      } 
                    }}
                    exit={{ 
                      opacity: 0,
                      y: -20,
                      transition: { 
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      } 
                    }}
                  >
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                     V-Accel
                    </span>
                  </motion.div>
                  
                  {/* Animated line with silver gradient */}
                  <motion.div
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mt-2"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: 120,
                      transition: { 
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1]
                      } 
                    }}
                    exit={{ 
                      width: 0,
                      transition: { 
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      } 
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Premium animated accent lines */}
              <motion.div 
                className="fixed inset-0 z-[101] pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Horizontal accent line - top */}
                <motion.div 
                  className="absolute top-[20%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ width: 0, x: "100%" }}
                  animate={{ 
                    width: "100%", 
                    x: "-100%",
                    transition: { 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.2
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Horizontal accent line - bottom */}
                <motion.div 
                  className="absolute top-[80%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ width: 0, x: "-100%" }}
                  animate={{ 
                    width: "100%", 
                    x: "100%",
                    transition: { 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.3
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Vertical accent line - left */}
                <motion.div 
                  className="absolute top-0 left-[20%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  initial={{ height: 0, y: "100%" }}
                  animate={{ 
                    height: "100%", 
                    y: "-100%",
                    transition: { 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.25
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Vertical accent line - right */}
                <motion.div 
                  className="absolute top-0 left-[80%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  initial={{ height: 0, y: "-100%" }}
                  animate={{ 
                    height: "100%", 
                    y: "100%",
                    transition: { 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.35
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;
