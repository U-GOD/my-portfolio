'use client';

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CTAButtons from './components/CTAButtons';
import FloatingDock from './components/FloatingDock';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section with Animations */}
      <section id="hero" className="px-8 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          {/* Animated Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <motion.span 
              className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Fredrick
            </motion.span>
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-mono"
          >
            Web3 Developer with a Web2 day job
          </motion.p>
          
          {/* Animated Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Building, learning, and sharing on X
          </motion.p>
        </div>

        {/* Animated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CTAButtons />
        </motion.div>
      </section>

      {/* Animated Sections */}
      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection>
        <Skills />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      {/* Add some bottom padding so dock doesn't cover content */}
      <div className="h-32" />

      {/* Floating Dock - Will appear at bottom center after 0.5s */}
      <FloatingDock />
    </main>
  );
}