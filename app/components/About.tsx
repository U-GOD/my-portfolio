'use client';

import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-8 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        About
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Description */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I'm a Web3-focused Smart Contract Developer and entrepreneur, currently building 
            scalable decentralized applications. With experience across multiple startups, 
            hackathon wins, and grants, I love turning ideas into products that bridge Web2 and Web3.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Beyond coding, I enjoy experimenting with new blockchain technologies, sharing 
            knowledge, and contributing to the developer ecosystem. I'm passionate about 
            making Web3 accessible and building the decentralized future.
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="text-2xl font-bold text-black dark:text-white">7+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Wins</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="text-2xl font-bold text-black dark:text-white">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Smart Contract Focus</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Focus Areas */}
        <StaggerContainer className="space-y-6">
          <StaggerItem>
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <h3 className="font-bold mb-3 text-lg">Smart Contract Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Specializing in secure, gas-optimized smart contracts with comprehensive testing and auditing.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <h3 className="font-bold mb-3 text-lg">Web3 Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Designing decentralized systems that are scalable, secure, and user-friendly.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <h3 className="font-bold mb-3 text-lg">Blockchain Research</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Staying at the forefront of blockchain technology and contributing to the ecosystem.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}