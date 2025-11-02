interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Blockchain & Smart Contracts",
    skills: ["Solidity", "Rust", "Smart Contract Security", "Gas Optimization", "Hardhat", "Foundry"]
  },
  {
    title: "Web Development",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Tools & Platforms",
    skills: ["AWS", "Docker", "Git", "IPFS", "The Graph", "Etherscan"]
  },
  {
    title: "Languages",
    skills: ["JavaScript/TypeScript", "Python", "C++", "SQL", "Rust", "Solidity"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}