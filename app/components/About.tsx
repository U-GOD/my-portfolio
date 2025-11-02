export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">About</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Description */}
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a Web3-focused Smart Contract Developer and entrepreneur, currently building 
            scalable decentralized applications. With experience across multiple startups, 
            hackathon wins, and grants, I love turning ideas into products that bridge Web2 and Web3.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Beyond coding, I enjoy experimenting with new blockchain technologies, sharing 
            knowledge, and contributing to the developer ecosystem. I'm passionate about 
            making Web3 accessible and building the decentralized future.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-black dark:text-white">7+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Wins</div>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-black dark:text-white">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Smart Contract Focus</div>
            </div>
          </div>
        </div>

        {/* Right Column - Focus Areas */}
        <div className="space-y-6">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-bold mb-3 text-lg">Smart Contract Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Specializing in secure, gas-optimized smart contracts with comprehensive testing and auditing.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-bold mb-3 text-lg">Web3 Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Designing decentralized systems that are scalable, secure, and user-friendly.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-bold mb-3 text-lg">Blockchain Research</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Staying at the forefront of blockchain technology and contributing to the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}