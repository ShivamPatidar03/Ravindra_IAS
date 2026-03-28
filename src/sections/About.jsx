import React from 'react';
import { motion } from 'framer-motion';
import sangeetaImg from '../assets/sangeeta_gupta.jpg';
import ravindraImg from '../assets/ravindra_singh_jadon.png';

const About = () => {
  const leaders = [
    {
      name: "Sangeeta Gupta",
      role: "Managing Director",
      image: sangeetaImg,
      description: "A visionary leader dedicated to empowering aspirants with the right resources and a growth mindset for UPSC success."
    },
    {
      name: "Ravindra Singh Jadon",
      role: "Director",
      image: ravindraImg,
      description: "An expert educator with years of experience, focused on simplified teaching methods and results-oriented mentorship."
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-ias-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ias-gold-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ias-blue-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold"
          >
            Our Leadership
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Guided by <span className="text-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-ias-gold-300 to-ias-gold-500">Excellence.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative h-auto glass-panel p-8 lg:p-12 rounded-[2rem] border border-white/5 hover:border-ias-gold-500/30 transition-all duration-500 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 shadow-2xl"
            >
              {/* Image with zoom effect */}
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 shrink-0 rounded-2xl overflow-hidden border border-white/10 group-hover:border-ias-gold-500/50 transition-colors duration-500 shadow-xl">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1s]"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col text-center lg:text-left">
                <h4 className="text-2xl lg:text-3xl font-serif text-white mb-2 font-bold tracking-wide">{leader.name}</h4>
                <div className="text-ias-gold-500 font-sans font-semibold uppercase tracking-widest text-xs mb-4">
                  {leader.role}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed italic line-clamp-3">
                  "{leader.description}"
                </p>

                {/* Micro interaction link */}
                <div className="mt-8 flex justify-center lg:justify-start">
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-ias-gold-500 group-hover:border-ias-gold-500 transition-all duration-300">
                      →
                   </div>
                </div>
              </div>

              {/* Float animation decor */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-ias-gold-500/10 border border-white/5 backdrop-blur-md hidden lg:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
