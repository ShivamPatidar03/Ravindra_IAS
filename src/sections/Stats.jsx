import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Award, Calendar } from 'lucide-react';

const StatCard = ({ end, label, icon: Icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easedProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative flex flex-col items-center text-center p-8 lg:p-12 rounded-3xl glass-panel-hover overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ias-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-16 h-16 rounded-2xl bg-ias-gold-500/10 flex items-center justify-center text-ias-gold-400 mb-8 border border-white/5 group-hover:scale-110 group-hover:border-ias-gold-500/50 transition-all duration-500 shadow-glow-gold/20">
        <Icon className="w-8 h-8" />
      </div>

      <div className="relative">
        <h4 className="text-6xl lg:text-8xl font-serif text-white font-black tracking-tighter mb-4 flex items-center justify-center gap-1">
          {count}
          <span className="text-ias-gold-500">+</span>
        </h4>
        <div className="absolute -inset-8 bg-ias-gold-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      <p className="text-lg lg:text-xl text-gray-400 uppercase tracking-[0.3em] mt-2 font-bold group-hover:text-white transition-colors duration-300">
        {label}
      </p>

      {/* Decorative separator */}
      <div className="mt-8 w-12 h-1 bg-gradient-to-r from-transparent via-ias-gold-500/30 to-transparent group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-ias-dark border-y border-white/5 relative w-full overflow-hidden">
      {/* Background stardust/particles effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-ias-blue-900/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <StatCard end={10000} label="Aspirants Guided" icon={Users} delay={0} />
        <StatCard end={500} label="Final Selections" icon={Award} delay={0.1} />
        <StatCard end={15} label="Years of Excellence" icon={Calendar} delay={0.2} />
      </div>
    </section>
  );
};

export default Stats;
