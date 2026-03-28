import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Layer: Premium Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ias-gold-500/20 via-transparent to-transparent z-0 pointer-events-none" />


      {/* Content wrapper */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-[10vh]">
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 2.3 }}
           className="text-white/80 mb-4 uppercase tracking-[0.3em] text-xs font-semibold"
        >
          Gwalior's Premier UPSC Coaching Institute
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-ias-gold-500/50 bg-ias-gold-500/20 backdrop-blur-md mb-6 shadow-glow-gold"
        >
          <span>📍</span>
          <span className="text-ias-gold-300 text-sm font-bold tracking-widest uppercase">
            Ravindra's Institute
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-2xl"
        >
          Start Your IAS <br /> Journey from <span className="text-transparent bg-clip-text bg-gradient-to-r from-ias-gold-300 to-ias-gold-500">Gwalior</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light"
        >
          India’s trusted UPSC mentorship now in Gwalior. Learn from proven methods and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 text-lg uppercase tracking-wider">
            Enroll in Gwalior Branch
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-lg uppercase tracking-wider">
            Visit Center
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="mt-8 inline-block px-4 py-1.5 rounded bg-ias-blue-900/40 border border-ias-blue-600/30 text-xs text-blue-200 uppercase tracking-widest backdrop-blur-md"
        >
          ✦ Offline + Hybrid Classes Available
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-ias-gold-500 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
