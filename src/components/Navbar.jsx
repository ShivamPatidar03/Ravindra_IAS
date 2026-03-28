import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Courses', href: '#courses' },
    { name: 'Resources', href: '#resources' },
    { name: 'Toppers', href: '#toppers' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ias-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-ias-gold-500/30 bg-white shadow-glow-gold transition-transform duration-500 group-hover:scale-110">
            <img 
              src={logo} 
              alt="Ravindra IAS Logo" 
              className="w-full h-full object-contain filter contrast-125 transition-all duration-500 group-hover:brightness-110"
              style={{ filter: 'brightness(1) contrast(1.1) drop-shadow(0 0 2px rgba(212,175,55,0.5))' }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif text-white font-bold tracking-wider leading-none">
              RAVINDRA <span className="text-ias-gold-500">IAS.</span>
            </span>
            <span className="text-[10px] text-ias-gold-300/80 uppercase tracking-[0.3em] font-sans mt-0.5">Gwalior Branch</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors py-2 group overflow-hidden"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ias-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-2 bg-ias-gold-500 hover:bg-ias-gold-400 text-ias-dark font-sans font-semibold rounded-full transition-all duration-300 shadow-glow-gold hover:scale-105 uppercase text-sm tracking-widest ml-4">
            Enroll Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-ias-dark/95 backdrop-blur-xl z-30 flex flex-col items-center pt-20 space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-gray-300 hover:text-ias-gold-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="px-8 py-3 mt-4 bg-ias-gold-500 text-ias-dark font-bold rounded-full shadow-glow-gold">
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
