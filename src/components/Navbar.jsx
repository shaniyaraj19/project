import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {Link} from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const indicatorRef = useRef(null);


  useEffect(() => {
    
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
    
    
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      linksRef.current.children,
      { opacity: 0, y: -5 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.05, 
        delay: 0.2, 
        ease: "power1.out" 
      }
    );
    
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.4, ease: "power1.out" }
    );
  }, []);

  
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.4, ease: "power2.out" }
        );
        
        
        gsap.fromTo(
          mobileMenuRef.current.children[0].children,
          { opacity: 0, y: 5 },
          { opacity: 1, y: 0, stagger: 0.03, duration: 0.3 }
        );
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm transition-all duration-300 ${
      isActive 
        ? 'text-white' 
        : 'text-gray-400 hover:text-gray-200'
    }`;

  return (
    <nav 
      ref={navbarRef}
      className="bg-black/70 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50"
    >
      <div className="container mx-auto px-8 py-5 flex items-center justify-between">
        
        <div ref={logoRef} className="flex items-center">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-700 to-white text-white border border-white/20">
            <span className="font-medium text-sm">P</span>
            </div>
            <div className="text-lg font-light text-white tracking-wide">
              Project<span className="font-medium">Accel</span>
            </div>
          </NavLink>
        </div>

        
        <div className="flex items-center space-x-10">
          
          <div ref={linksRef} className="hidden lg:flex space-x-6">
            <NavLink to="/" end className={navLinkClass}>
              <span className="relative">
                Home
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
            <NavLink to="/features" className={navLinkClass}>
              <span className="relative">
                Features
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
            <NavLink to="/use-cases" className={navLinkClass}>
              <span className="relative">
                Use Cases
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
            <NavLink to="/pricing" className={navLinkClass}>
              <span className="relative">
                Pricing
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              <span className="relative">
                Blog
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <span className="relative">
                Contact
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left transition-transform duration-300 ${({ isActive }) => isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
            </NavLink>
          </div>


          <div ref={ctaRef} className="hidden lg:block">
            <button className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-5 py-1.5 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
              Start Free Trial
            </button>
          </div>

          
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-end">
                <span className={`block h-px bg-white w-5 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`block h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-3.5'}`}></span>
                <span className={`block h-px bg-white w-5 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden bg-black/90 backdrop-blur-xl overflow-hidden"
        >
          <div className="container mx-auto px-8 py-4 flex flex-col space-y-3">
            <NavLink to="/" end className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/features" className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Features</NavLink>
            <NavLink to="/use-cases" className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Use Cases</NavLink>
            <NavLink to="/pricing" className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Pricing</NavLink>
            <NavLink to="/blog" className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Blog</NavLink>
            <NavLink to="/contact" className="text-gray-400 hover:text-white py-2 transition-colors" onClick={toggleMobileMenu}>Contact</NavLink>
            <div className="pt-3 mt-1 border-t border-white/5">
             <Link 
                  to="/start-free-trial" 
                  className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-800 px-8 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 block"
                >
                  Start Free Trial
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;