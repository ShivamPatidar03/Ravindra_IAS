import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Brain, Rocket, Flag } from 'lucide-react';

const features = [
  { icon: <Target />, title: 'Exam-Oriented Approach', desc: 'No fluff. Only what is relevant for Prelims, Mains, and the Interview.' },
  { icon: <Users />, title: 'Personal Mentorship', desc: '1-on-1 guidance from officers and seasoned experts who know the exact demands of the UPSSE.' },
  { icon: <Brain />, title: 'Answer Writing Mastery', desc: 'Daily practice and detailed evaluation to help you secure top marks in Mains.' },
  { icon: <Award />, title: 'Proven Track Record', desc: 'Consistent top ranks year after year, establishing us as a trusted name.' }
];

const Features = () => {
  return (
    <section className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Visuals */}
        <div className="relative aspect-square w-full">
           <div className="absolute inset-0 bg-ias-gold-500/10 rounded-full blur-[120px]" />
           <motion.div 
             initial={{ rotate: -10, opacity: 0 }}
             whileInView={{ rotate: 0, opacity: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="relative z-10 w-full h-full glass-panel rounded-full overflow-hidden border border-white/10 flex items-center justify-center p-8 group"
           >
             <div className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('https://images.unsplash.com/photo-1577563908411-5079b6a1d89d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-[3s]" />
             
             {/* Floating Elements */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="glass-panel p-6 rounded-2xl border-t border-white/20 absolute top-1/4 left-0 shadow-2xl backdrop-blur-xl flex flex-col items-center"
             >
               <Rocket className="text-ias-gold-500 w-8 h-8 mb-2" />
               <div className="text-white font-semibold">Strategic</div>
               <div className="text-gray-400 text-xs text-center w-20 line-clamp-2">Test Series</div>
             </motion.div>

             <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="glass-panel p-6 rounded-2xl border-t border-white/20 absolute bottom-1/4 right-0 shadow-2xl backdrop-blur-xl flex flex-col items-center bg-ias-blue-900/60"
             >
               <Flag className="text-white w-8 h-8 mb-2" />
               <div className="text-white font-semibold">Dedicated</div>
               <div className="text-gray-400 text-xs text-center w-20 line-clamp-2">Mentorship</div>
             </motion.div>
           </motion.div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-16 leading-tight">
            The Science Inside <br/>
            Our <span className="text-gray-500">Mentorship.</span>
          </h3>

          <div className="space-y-12">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-ias-blue-900/50 border border-white/10 flex items-center justify-center text-white group-hover:bg-ias-gold-500 group-hover:text-ias-dark group-hover:scale-110 transition-all shadow-glow-blue group-hover:shadow-glow-gold shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-ias-gold-500 transition-colors">{feat.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
