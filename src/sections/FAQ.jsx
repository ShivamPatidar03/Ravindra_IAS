import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Is the Foundation course suitable for college students?", a: "Yes, our Foundation course is highly recommended for college students. It starts from the absolute basics (NCERTs) and gradually moves to advanced topics, giving you ample time to build a strong base." },
  { q: "How is answer writing evaluated?", a: "Answers are evaluated by expert faculty and selected candidates. We provide line-by-line feedback focusing on structure, content quality, and presentation, usually within 48 hours." },
  { q: "Are the mock interviews conducted by actual bureaucrats?", a: "Yes. Our interview panels consists of retired IAS/IPS officers, senior subject matter experts, and distinguished psychologists to recreate the exact UPSC environment." },
  { q: "Do you provide recorded sessions for missed classes?", a: "Absolutely. Dedicated portals are provided to all enrolled students where they can access high-quality recordings, class notes, and daily handouts." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-32 bg-ias-dark relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-ias-gold-500 tracking-[0.3em] uppercase mb-4 font-semibold">Common Queries</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Frequently Asked <span className="text-gray-500">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-panel border rounded-2xl overflow-hidden transition-colors duration-300 ${openIdx === idx ? 'border-ias-gold-500/50 bg-white/[0.03]' : 'border-white/10 hover:border-white/30'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className={`text-lg font-medium transition-colors ${openIdx === idx ? 'text-ias-gold-500' : 'text-white'}`}>{faq.q}</span>
                <span className={`text-2xl transition-transform duration-300 ${openIdx === idx ? 'rotate-45 text-ias-gold-500' : 'text-gray-500'}`}>+</span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
