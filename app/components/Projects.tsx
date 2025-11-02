'use client';

import { motion, Variants } from 'framer-motion';

interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  contractAddress?: string;
  githubUrl?: string;
  explorerUrl?: string;
  status: "completed" | "in-progress" | "upcoming";
}

const projects: Project[] = [
  {
    title: "MEMEFI",
    year: "2025",
    description: "Gamified meme staking platform with 50+ active users and significant staked value. Users upload memes, stake them, and earn rewards based on engagement with wallet abstraction achieving 90%+ user retention.",
    technologies: ["Next.js", "TypeScript", "Solidity", "Node.js", "IPFS"],
    status: "completed",
    githubUrl: "#",
    explorerUrl: "#"
  },
  {
    title: "ForkYouDaddy",
    year: "2025",
    description: "Web3 application for creating, licensing creative IP with 100+ replies. Original works on-chain with timestamp verification and privacy controls.",
    technologies: ["Next.js", "TypeScript", "Solidity", "Web3", "Monad"],
    status: "completed",
    githubUrl: "#",
    explorerUrl: "#"
  },
  {
    title: "SnapChain",
    year: "2025",
    description: "AI-powered drag-and-drop platform to simplify Rust smart contract creation. Features Scratch-like interface, AI-assisted generation, and pre-made templates.",
    technologies: ["Next.js", "TypeScript", "Rust", "AI/ML"],
    status: "in-progress",
    githubUrl: "#"
  },
  {
    title: "Advanced DeFi Protocol",
    year: "2024",
    description: "Under development - A sophisticated DeFi protocol with innovative yield strategies and cross-chain compatibility.",
    technologies: ["Solidity", "Hardhat", "TypeScript"],
    status: "upcoming",
    githubUrl: "#"
  }
];

export default function Projects() {
  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "in-progress": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "upcoming": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "completed": return "Live";
      case "in-progress": return "In Development";
      case "upcoming": return "Coming Soon";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-center"
      >
        My Projects
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
      >
        Check out my latest work. I've worked on various projects, from simple smart contracts to complex decentralized applications.
      </motion.p>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                  >
                    {getStatusText(project.status)}
                  </motion.span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a 
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </motion.a>
              )}
              
              {project.explorerUrl && (
                <motion.a 
                  href={project.explorerUrl}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Contract
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}