import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { text: "The Gwalior center helped me stay consistent and focused locally without having to migrate to Delhi. Best decision ever.", author: "Amit J.", mockRank: "Student, Gwalior" },
  { text: "The foundation course here didn't just teach me the syllabus. It taught me how to think like an administrator.", author: "Neha S.", mockRank: "Mains 2023" },
  { text: "Personal mentorship at the Gwalior branch was exactly what I needed to identify my weaknesses in Mains answer writing.", author: "Rajat V.", mockRank: "Student, Gwalior" },
  { text: "I struggled with answer writing for years. Their daily evaluation process was brutal initially, but it paid off immensely.", author: "Vikram P.", mockRank: "Interview Appeared" },
  { text: "Joining target prelims was the best decision. The mock tests mirrored the actual exam complexity perfectly.", author: "Riya K.", mockRank: "Prelims 2024 Cleared" }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-ias-blue-900/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center mb-20">
        <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Student Voices</h2>
        <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white">The Ravindra IAS <br/><span className="text-gray-500">Difference.</span></h3>
      </div>

      <div className="relative w-full flex overflow-x-hidden pt-10 pb-20 group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-8 w-max px-8"
        >
          {/* Double the array for infinite smooth scroll effect */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] glass-panel p-10 rounded-3xl shrink-0 group-hover:pause transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-ias-gold-500/30"
            >
              <div className="text-ias-gold-500 mb-6 text-6xl font-serif leading-none opacity-50">"</div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-ias-blue-800 border-2 border-ias-gold-500/30 flex items-center justify-center text-white font-bold shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-semibold">{t.author}</h5>
                  <p className="text-ias-gold-500 text-xs font-bold tracking-widest uppercase">{t.mockRank}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
