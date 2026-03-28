import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Users, Award, BookOpen, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const branchFeatures = [
  { icon: <Mic className="w-8 h-8" />, title: 'Offline Classroom Experience', desc: 'Immersive, distraction-free environment with high-tech infrastructure tailored for UPSC preparation right here in Gwalior.' },
  { icon: <Users className="w-8 h-8" />, title: 'Small Batch Size', desc: 'We strictly cap our batch sizes to ensure individual attention, allowing you to ask doubts without hesitation.' },
  { icon: <Award className="w-8 h-8" />, title: 'Personal Mentorship', desc: '1-on-1 guidance from seasoned officers and Delhi-trained faculty who understand the exact demands of the exam.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Daily Answer Writing', desc: 'Rigorous daily practice with on-the-spot evaluation to help you secure top marks in the Mains examination.' },
  { icon: <MessageSquare className="w-8 h-8" />, title: 'Local Doubt Support', desc: '24/7 access to dedicated doubt-clearing sessions and study rooms available at our Gwalior center.' }
];

const BranchFeatures = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRefs.current, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-ias-blue-900/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Our Methodology</h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white mb-6">
            Why Choose Ravindra IAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-ias-gold-300 to-ias-gold-500">Gwalior?</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We bring India's best UPSC mentorship directly to you. No need to relocate to Delhi—everything you need to succeed is available at our state-of-the-art Gwalior branch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchFeatures.map((feat, idx) => (
            <div 
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`glass-panel p-10 rounded-3xl relative group border border-white/5 hover:border-ias-gold-500/30 transition-all duration-500 overflow-hidden ${idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ias-gold-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ias-gold-500 mb-8 group-hover:bg-ias-gold-500 group-hover:text-ias-dark transition-all duration-300 shadow-glow-gold/20">
                {feat.icon}
              </div>
              
              <h4 className="text-2xl font-serif text-white mb-4">{feat.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchFeatures;
