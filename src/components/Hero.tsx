
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'ITTEBA GILANI';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
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
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center z-10">
        {/* Main heading with typing animation */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-wider mb-6">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle with fade-in animation */}
        <div className={`transition-all duration-1000 ${
          isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide mb-4">
            Creative Developer & Designer
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative design and cutting-edge development
          </p>
        </div>

        {/* CTA Button */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${
          isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={scrollToAbout}
            className="group bg-white bg-opacity-5 border border-white border-opacity-20 px-8 py-3 rounded-full hover:bg-opacity-10 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-sm tracking-wider">Explore My Work</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 transition-all duration-1000 delay-1000 ${
        isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs tracking-wider mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
