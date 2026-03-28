import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocalTrust = () => {
  return (
    <section className="py-24 bg-ias-dark relative w-full overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-[200px] bg-ias-gold-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold"
          >
            Now in Gwalior
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white max-w-2xl mx-auto"
          >
            India's Best Mentorship, <br/><span className="text-gray-500">Accessible Locally.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-blue border border-white/5 hover:border-ias-blue-600/50"
          >
            <div className="w-16 h-16 rounded-full bg-ias-blue-900/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-ias-blue-600 transition-all duration-500">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Visit Center</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              1st Floor, Krishna Tower,<br/>
              Phoolbagh Chauraha, Gwalior
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-gold border border-white/5 hover:border-ias-gold-500/50 bg-gradient-to-br from-ias-gold-500/5 to-transparent"
          >
            <div className="w-16 h-16 rounded-full bg-ias-gold-500/20 flex items-center justify-center text-ias-gold-500 mb-6 group-hover:scale-110 group-hover:bg-ias-gold-500 group-hover:text-ias-dark transition-all duration-500">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Expert Admissions</h4>
            <p className="text-gray-300 font-medium mb-1">+91 70420 27486</p>
            <p className="text-gray-300 font-medium">+91 83590 38350</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-blue border border-white/5 hover:border-ias-blue-600/50"
          >
            <div className="w-16 h-16 rounded-full bg-ias-blue-900/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-ias-blue-600 transition-all duration-500">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Drop an Email</h4>
            <p className="text-gray-400 text-sm leading-relaxed break-all">
              gwaliorravindrasias@gmail.com
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 font-semibold uppercase tracking-widest">
              <Clock className="w-3 h-3" /> 24x7 Support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrust;
