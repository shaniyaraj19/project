import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isLoading]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }
          }}
        >
          {/* Premium silver gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-white/[0.08] via-white/[0.03] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              } 
            }}
          />
          
          {/* Subtle grain texture */}
          <motion.div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: 'cover'
            }}
          />
          
          {/* Center logo with silver gradient */}
          <div className="z-10 flex flex-col items-center">
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
            />
            
            {/* Loading progress bar */}
            <div className="mt-8 w-[200px] relative">
              <div className="h-[2px] w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-gray-300 via-white to-gray-300"
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: `${progress}%`,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                />
              </div>
              <motion.div 
                className="text-xs text-gray-400 mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.5 }
                }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </div>
          
          {/* Premium animated accent lines */}
          <motion.div 
            className="absolute inset-0 z-[1] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Horizontal accent lines */}
            <motion.div 
              className="absolute top-[20%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ width: 0, x: "100%" }}
              animate={{ 
                width: "100%", 
                x: "-100%",
                transition: { 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            />
            <motion.div 
              className="absolute top-[80%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ width: 0, x: "-100%" }}
              animate={{ 
                width: "100%", 
                x: "100%",
                transition: { 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            />
            
            {/* Vertical accent lines */}
            <motion.div 
              className="absolute top-0 left-[20%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
              initial={{ height: 0, y: "100%" }}
              animate={{ 
                height: "100%", 
                y: "-100%",
                transition: { 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: 0.25,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            />
            <motion.div 
              className="absolute top-0 left-[80%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
              initial={{ height: 0, y: "-100%" }}
              animate={{ 
                height: "100%", 
                y: "100%",
                transition: { 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: 0.35,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
