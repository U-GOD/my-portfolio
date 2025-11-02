import Navigation from './components/Navigation';
import About from './components/About';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="px-8 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
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
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-black dark:hover:border-white transition-all duration-300"
          >
            Learn About Me
          </button>
        </div>
      </section>

      <About />
      <WorkExperience />
    </main>
  );
}