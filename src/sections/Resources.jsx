import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Newspaper, TrendingUp, MonitorPlay, FileCheck } from 'lucide-react';

const resources = [
  { icon: <BookOpen className="w-8 h-8" />, title: 'Daily Editorials', desc: 'Curated and simplified analysis from The Hindu & Indian Express.' },
  { icon: <Newspaper className="w-8 h-8" />, title: 'Current Affairs', desc: 'Monthly compilations of key national and international events.' },
  { icon: <FileText className="w-8 h-8" />, title: 'Handwritten Notes', desc: 'Topper strategy notes digitized for structured revision.' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Economy Digest', desc: 'Simplifying economic surveys, budgets, and fiscal policies.' },
  { icon: <FileCheck className="w-8 h-8" />, title: 'Mock Tests', desc: 'Free sectional tests to evaluate your Prelims readiness.' },
  { icon: <MonitorPlay className="w-8 h-8" />, title: 'Strategy Videos', desc: 'Weekly masterclasses by selected officers and senior faculty.' }
];

const Resources = () => {
  return (
    <section id="resources" className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ias-gold-500/5 blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Free Resources</h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white mb-6">Empowering Your Self-Study.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We provide premium study materials absolutely free to help dedicated aspirants level the playing field.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex items-start gap-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ias-gold-500 shrink-0 group-hover:scale-110 transition-transform shadow-glow-gold/20">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-ias-gold-500 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-transparent border border-ias-gold-500 text-ias-gold-500 font-semibold rounded-full hover:bg-ias-gold-500 hover:text-ias-dark transition-all text-sm uppercase tracking-wider inline-flex items-center gap-3">
            Access Resource Library <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
