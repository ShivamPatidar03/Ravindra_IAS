import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ias-dark overflow-hidden flex-col"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-ias-gold-500 font-serif text-4xl md:text-6xl tracking-wider mb-4"
      >
        RAVINDRA IAS
      </motion.div>
      <div className="w-64 h-1 bg-white/10 overflow-hidden relative rounded-full mt-4">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-full bg-ias-gold-500 absolute inset-0"
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;
