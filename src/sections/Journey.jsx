import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  { step: '01', title: 'Preparation Starts', desc: 'Building the foundation with NCERTs and standard books.' },
  { step: '02', title: 'Prelims', desc: 'Mock tests, revisions, and overcoming the first real hurdle.' },
  { step: '03', title: 'Mains', desc: 'Answer writing, analytical thinking, and deep subject mastery.' },
  { step: '04', title: 'Interview Phase', desc: 'Personality test, current affairs clarity, and confidence building.' },
  { step: '05', title: 'Selection', desc: 'The final destination: LBSNAA and beyond.' }
];

const Journey = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${scrollContainerRef.current.scrollWidth - window.innerWidth}`,
        scrub: 1,
      });

      gsap.to(scrollContainerRef.current, {
        x: () => -(scrollContainerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollContainerRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1,
        }
      });
      
      return () => pinTrigger.kill();
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="journey" 
      ref={containerRef} 
      className="h-screen w-full bg-ias-dark relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-24 left-12 md:left-24 z-10 w-full max-w-4xl pr-8">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
          The <span className="text-ias-gold-500">Journey</span>
        </h2>
        <p className="text-gray-400 max-w-lg text-lg">Every officer walks this path. We walk it with you.</p>
      </div>

      <div 
        ref={scrollContainerRef} 
        className="flex items-center h-[60vh] mt-24 pl-12 md:pl-24 w-max gap-8 md:gap-24 relative z-1"
      >
        {phases.map((phase, index) => (
          <div key={index} className="w-[300px] md:w-[450px] flex flex-col relative shrink-0">
            {/* Timeline Line */}
            <div className={`absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 -z-10 ${index === phases.length - 1 ? 'hidden' : ''}`} />
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-12 rounded-2xl relative"
            >
              <div className="text-6xl font-serif text-white/5 font-bold absolute top-4 right-4">{phase.step}</div>
              <div className="w-16 h-16 rounded-full bg-ias-gold-500/20 border border-ias-gold-500/50 flex items-center justify-center text-ias-gold-500 text-xl font-bold mb-6">
                {phase.step}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{phase.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {phase.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Cinematic Blur Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ias-dark to-transparent mix-blend-multiply" />
    </section>
  );
};

export default Journey;
