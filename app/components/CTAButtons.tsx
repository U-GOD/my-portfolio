'use client';

export default function CTAButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center gap-4 mb-20">
      <button 
        onClick={() => scrollToSection('experience')}
        className="px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
      >
        View My Work
      </button>
      <button 
        onClick={() => scrollToSection('about')}
        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-black dark:hover:border-white transition-all duration-300"
      >
        Learn About Me
      </button>
    </div>
  );
}