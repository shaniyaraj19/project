import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <Link
          to={item.link || "#"}
          key={item.link + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-transparent block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          {/* ✅ Card with image background and overlay */}
          <div className="relative overflow-hidden rounded-2xl h-full w-full group border border-white/[0.1]">
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-300 group-hover:bg-black/70" />

            {/* Content Overlay */}
            <div className="relative z-20 p-6 flex flex-col justify-between h-full">
              <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              {item.benefits && (
                <ul className="mt-auto space-y-1 text-sm">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
