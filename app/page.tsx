import Navigation from './components/Navigation';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CTAButtons from './components/CTAButtons';

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

        <CTAButtons />
      </section>

      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}