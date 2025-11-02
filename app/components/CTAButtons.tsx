'use client';

import { motion } from 'framer-motion';

export default function CTAButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center gap-4 mb-20 flex-wrap">
      <motion.button 
        onClick={() => scrollToSection('experience')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">View My Work</span>
        <motion.div
          className="absolute inset-0 bg-black dark:bg-white"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.05, borderColor: 'currentColor' }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-black dark:hover:border-white transition-all duration-300"
      >
        Learn About Me
      </motion.button>
    </div>
  );
}