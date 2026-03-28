import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'UPSC Foundation (Gwalior Batch)',
    duration: '1 Year',
    desc: 'Comprehensive coverage of Prelims and Mains (GS + CSAT) with daily answer writing.',
    highlight: 'Most Popular',
    color: 'from-ias-blue-600/20 to-ias-blue-900/40'
  },
  {
    title: 'Target Prelims (Gwalior Center)',
    duration: '6 Months',
    desc: 'Intensive crash course focusing entirely on clearing the first hurdle. Includes Mock Test Series.',
    highlight: 'Intensive',
    color: 'from-ias-gold-500/10 to-transparent'
  },
  {
    title: 'Mains Mentorship (Offline + Hybrid)',
    duration: '4 Months',
    desc: 'Personalized evaluation, essay strategy, and ethics case study mastery.',
    highlight: 'Advanced',
    color: 'from-purple-900/20 to-transparent'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ias-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl"
           >
             <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Curriculum</h2>
             <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">Programs Designed for <br/><span className="text-gray-500">Excellence.</span></h3>
           </motion.div>
           
           <motion.button 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="shrink-0 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all text-sm uppercase tracking-wider"
           >
             View All Courses
           </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`glass-panel p-8 md:p-10 rounded-3xl relative group overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 bg-gradient-to-br ${course.color}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center text-white backdrop-blur-md">
                   →
                </div>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 uppercase tracking-widest mb-6">
                {course.highlight}
              </div>
              <div className="inline-block ml-2 px-3 py-1.5 rounded-full border border-ias-gold-500/50 bg-ias-gold-500/20 text-[10px] text-ias-gold-500 font-bold uppercase tracking-widest mb-6 animate-pulse shadow-glow-gold/20">
                ✦ Gwalior Center
              </div>

              <h4 className="text-3xl font-serif text-white mb-2">{course.title}</h4>
              <div className="text-ias-gold-500 font-semibold uppercase tracking-wider text-sm mb-6">{course.duration}</div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                {course.desc}
              </p>

              <button className="w-full py-4 rounded-xl border border-white/10 text-white font-medium uppercase tracking-wider text-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Explore Curriculum
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
