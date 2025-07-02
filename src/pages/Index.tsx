
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const IndexContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const  { isDark } = useTheme();

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="mt-4 text-white text-sm tracking-wider animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      {/* Scroll to top indicator */}
      <div className="fixed bottom-8 right-8 z-50">
  <button 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 group
      ${isDark 
        ? "bg-white bg-opacity-5 border-white border-opacity-10 hover:border-opacity-20" 
        : "bg-black bg-opacity-5 border-black border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20"
      }`}
  >
    <svg 
      className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 
        ${isDark 
          ? "text-white group-hover:text-white" 
          : "text-black group-hover:text-black"
        }`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</div>

    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
