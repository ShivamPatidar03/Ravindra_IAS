import React from 'react';
import { motion } from 'framer-motion';

const toppers = [
  { name: 'Ankita Sharma', rank: 'AIR 14', year: '2024', story: 'From a small village in MP to an IPS officer. Her discipline and our mentorship made history.' },
  { name: 'Rahul Dev', rank: 'AIR 32', year: '2023', story: 'Cracked the exam while working full-time using our weekend mentorship program.' },
  { name: 'Priya Raj', rank: 'AIR 5', year: '2022', story: 'Mastered answer writing in our intensive Mains program to jump from AIR 312 to AIR 5.' }
];

const Toppers = () => {
  return (
    <section id="toppers" className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Hall of Fame</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Our Selection <br/><span className="text-gray-500">Legacy.</span></h3>
            <p className="text-gray-400 text-lg">Selections from Ravindra IAS (Delhi + All Centers)</p>
            <div className="mt-4 inline-block px-4 py-1.5 rounded bg-ias-blue-900/40 border border-ias-blue-600/30 text-xs text-blue-200 uppercase tracking-widest backdrop-blur-md animate-pulse">
              ✦ Now guiding aspirants in Gwalior
            </div>
          </div>
          <p className="text-gray-400 max-w-sm mt-6 md:mt-0 pb-2 md:text-right">
            500+ Selections. 15+ Top 100 Ranks. <br/> The results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center perspective-1000">
          {toppers.map((topper, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
               whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               className="group relative h-96 [transform-style:preserve-3d]"
             >
               <div className="absolute inset-0 w-full h-full glass-panel rounded-3xl p-8 border border-white/10 [backface-visibility:hidden] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] flex flex-col items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-ias-blue-900/40 mix-blend-overlay z-0" />
                 <div className="relative z-10">
                   <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gray-800 border-2 border-ias-gold-500/50 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                     <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Topper" className="w-full h-full object-cover" />
                   </div>
                   <h4 className="text-2xl font-serif text-white mb-2">{topper.name}</h4>
                   <div className="inline-block px-4 py-1 rounded-full bg-ias-gold-500 text-ias-dark font-bold tracking-wider mb-2">
                     {topper.rank}
                   </div>
                   <div className="text-gray-500 text-sm">CSE {topper.year}</div>
                 </div>
               </div>

               <div className="absolute inset-0 w-full h-full bg-ias-blue-900 rounded-3xl p-8 border border-ias-gold-500/30 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] transition-transform duration-700 group-hover:[transform:rotateY(0deg)] flex flex-col items-center justify-center">
                 <div className="text-ias-gold-500 mb-6 flex justify-center w-full">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                 </div>
                 <p className="text-lg leading-relaxed font-serif italic mb-6">"{topper.story}"</p>
                 <button className="text-xs uppercase tracking-[0.2em] font-semibold text-ias-gold-400 hover:text-white transition-colors border-b border-ias-gold-400 pb-1">Watch Interview</button>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
