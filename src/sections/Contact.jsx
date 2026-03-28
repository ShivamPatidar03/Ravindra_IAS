import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Mail, Navigation, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-ias-dark relative w-full overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-ias-gold-500/5 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ias-blue-900/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Detailed Contact Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-ias-gold-500/30 bg-ias-gold-500/10 text-ias-gold-500 text-xs font-bold uppercase tracking-widest mb-8">
              Visit Our Center
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-8 border-l-8 border-ias-gold-500 pl-8">
              Start Locally, <br/>
              Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-ias-gold-300 to-ias-gold-500">Nationally.</span>
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
              Join the Gwalior branch of India's most trusted UPSC mentorship program. Visit Krishna Tower to consult our experts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-ias-gold-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-ias-blue-900/40 flex items-center justify-center text-ias-gold-500 mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Address</h5>
                  <p className="text-gray-400 font-medium">1st Floor, Krishna Tower,<br/>Phoolbagh Chauraha, Gwalior</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-ias-gold-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-ias-gold-500/10 flex items-center justify-center text-ias-gold-500 mb-2 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Contact</h5>
                  <div className="text-gray-400 font-bold tracking-wide">
                    <p>+91 70420 27486</p>
                    <p>+91 83590 38350</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                className="flex items-center justify-center gap-3 px-10 py-5 bg-ias-gold-500 hover:bg-ias-gold-400 text-black font-black rounded-full transition-all shadow-glow-gold hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-sm"
                onClick={() => window.open('tel:+917042027486')}
              >
                <PhoneCall className="w-4 h-4" /> Call Now
              </button>
              <button 
                className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-sm"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </button>
            </div>
          </motion.div>

          {/* Interactive Abstract Map UI Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 aspect-square relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-ias-blue-600/30 to-ias-gold-500/30 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-[2s]" />
            
            <div className="relative w-full h-full glass-panel rounded-[3rem] overflow-hidden border border-white/10 p-3 shadow-2xl">
               <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-ias-blue-900/60 flex flex-col items-center justify-center text-center px-10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60 pointer-events-none" />
                  
                  <div className="z-10 relative">
                    <div className="w-24 h-24 rounded-full bg-ias-gold-500 flex items-center justify-center mx-auto mb-8 shadow-glow-gold animate-pulse">
                      <MapPin className="w-12 h-12 text-black" />
                    </div>
                    <h4 className="text-3xl font-serif text-white mb-4 font-black">PHOOLBAGH CENTER</h4>
                    <p className="text-gray-400 text-lg uppercase tracking-[0.3em] font-sans mb-10">Krishna Tower, Gwalior</p>
                    
                    <button className="flex items-center gap-3 mx-auto px-8 py-3 bg-white/5 border border-white/20 rounded-full text-white text-xs font-black tracking-widest hover:bg-white/10 hover:border-ias-gold-500 transition-all">
                      OPEN IN GOOGLE MAPS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Aesthetic Map Lines Overlay (CSS) */}
                  <div className="absolute w-[200%] h-[200%] top--1/2 left--1/2 rotate-45 pointer-events-none opacity-10">
                    <div className="w-full h-px bg-white/60 mb-20" />
                    <div className="w-full h-px bg-white/60 mb-20" />
                    <div className="w-full h-px bg-white/60" />
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
