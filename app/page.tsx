import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
            Hi, I'm <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Aditya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-mono">
            Web3 Developer with a Web2 day job
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Building, learning, and sharing on X
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <button className="px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
            View My Work
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-black dark:hover:border-white transition-all duration-300">
            Get In Touch
          </button>
        </div>

        {/* About Section Preview */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a Web3-focused Smart Contract Developer and entrepreneur, currently building scalable decentralized applications. 
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With experience across multiple startups and hackathon wins, I love turning ideas into products that bridge Web2 and Web3.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}