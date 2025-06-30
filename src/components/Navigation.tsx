import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navbar logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-background bg-opacity-90 backdrop-blur-md border border-foreground border-opacity-20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-lg font-semibold tracking-wider hover:text-opacity-70 transition-colors duration-300"
            >
              IG
            </button>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`navigation-link text-sm tracking-wider transition-all duration-300 hover:text-opacity-70 relative px-3 py-1 ${
                      activeSection === item.id ? 'text-foreground' : 'text-foreground text-opacity-60'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-foreground animate-fade-in"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-foreground hover:bg-opacity-10 rounded-full transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-foreground hover:bg-opacity-10 rounded-full transition-colors duration-300"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 bg-background bg-opacity-95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`navigation-link text-xl tracking-wider transition-all duration-300 hover:text-opacity-70 ${
                isOpen ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;