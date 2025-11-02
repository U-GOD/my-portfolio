interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    company: "Pikme",
    role: "Full Stack Developer",
    period: "July 2025 - Present",
    description: "Building scalable applications with modern web technologies.",
    icon: "P"
  },
  {
    company: "Stealth Startup",
    role: "Full Stack Blockchain",
    period: "August 2025 - Present",
    description: "Developing blockchain solutions and smart contracts for innovative products.",
    icon: "S"
  },
  {
    company: "Euclid Protocol",
    role: "Full Stack Developer",
    period: "May 2025 - July 2025",
    description: "Contributed to protocol development and smart contract architecture.",
    icon: "E"
  },
  {
    company: "Solana Superteam",
    role: "Community Member & Builder",
    period: "March 2025 - Present",
    description: "Active community member building and contributing to the Solana ecosystem.",
    icon: "S"
  },
  {
    company: "Alphi AI",
    role: "Full Stack AI Engineer",
    period: "February 2025 - April 2025",
    description: "Developed AI-powered applications and integrated machine learning models.",
    icon: "A"
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 group">
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black dark:border-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
              <span className="font-bold text-sm">{exp.icon}</span>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
              </div>
              <h4 className="text-gray-600 dark:text-gray-400 font-medium mb-2">{exp.role}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}