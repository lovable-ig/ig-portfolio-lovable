import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Simple delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-foreground rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center z-10">
        {/* Main heading with fade-in animation */}
        <h1 className={`text-5xl md:text-8xl font-light tracking-wider mb-6 font-playfair transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          ITTEBA GILANI
        </h1>

        {/* Subtitle with fade-in animation */}
        <div className={`transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl md:text-2xl text-foreground text-opacity-70 tracking-wide mb-4">
            Creative Developer & Designer
          </p>
          <p className="text-sm md:text-base text-foreground text-opacity-50 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative design and cutting-edge development
          </p>
        </div>

        {/* CTA Button */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={scrollToAbout}
            className={`group bg-foreground bg-opacity-5 border border-foreground border-opacity-20 px-8 py-3 rounded-full hover:bg-opacity-10 transition-all duration-300 backdrop-blur-sm ${
              isDark ? 'text-black' : 'text-white'
            }`}
          >
            <span className="text-sm tracking-wider">Explore My Work</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 transition-all duration-1000 delay-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-foreground text-opacity-40 hover:text-opacity-100 transition-colors duration-300 group"
        >
          <span className="text-xs tracking-wider mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;