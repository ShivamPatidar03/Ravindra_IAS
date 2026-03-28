import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-32 relative w-full overflow-hidden bg-white text-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ias-gold-500/10 via-white to-white pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-ias-gold-500 shadow-glow-gold" />
      <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-ias-blue-900 shadow-glow-blue" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs text-black font-semibold uppercase tracking-widest mb-8">
            Next Batch Starting Soon
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
            Ready to Begin <br /> Your IAS Journey from <span className="text-ias-gold-500 border-b-4 border-ias-gold-500">Gwalior?</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
            Join the ranks of officers who have shaped the nation. Let us guide you through the toughest examination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-black text-white font-semibold rounded-full hover:bg-ias-dark transition-all text-lg shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider">
              Enroll Now
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-black/20 text-black font-semibold rounded-full hover:bg-black/5 transition-all text-lg hover:scale-105 active:scale-95 uppercase tracking-wider">
              Book Free Demo Class
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
