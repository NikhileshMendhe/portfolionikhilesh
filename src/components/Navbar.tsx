import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import CircularNavbar from './CircularNavbar';
import FuturisticThemeSlider from './FuturisticThemeSlider';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'home';
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Create neon beam animation for desktop
      if (!isMobile) {
        const beam = document.createElement('div');
        beam.className = 'fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none';
        beam.style.background = theme === 'dark' 
          ? 'linear-gradient(90deg, transparent, #ef4444, transparent)' 
          : 'linear-gradient(90deg, transparent, #06b6d4, transparent)';
        beam.style.boxShadow = theme === 'dark'
          ? '0 0 20px #ef4444, 0 0 40px #ef4444'
          : '0 0 20px #06b6d4, 0 0 40px #06b6d4';
        beam.style.animation = 'slideBeam 1.2s ease-out forwards';
        document.body.appendChild(beam);

        // Add keyframes if not already present
        if (!document.getElementById('beam-animation-styles')) {
          const style = document.createElement('style');
          style.id = 'beam-animation-styles';
          style.textContent = `
            @keyframes slideBeam {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
          `;
          document.head.appendChild(style);
        }

        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);

        setTimeout(() => {
          beam.remove();
        }, 1500);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'navy' : 'dark');
  };

  if (!mounted) return null;

  // Show circular navbar and futuristic slider on mobile only
  if (isMobile) {
    return (
      <>
        <FuturisticThemeSlider />
        <CircularNavbar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          sections={sections}
        />
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <div className="backdrop-blur-md bg-card/90 border border-border/50 rounded-full px-6 py-3 shadow-2xl max-w-fit mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-primary group ${
                        activeSection === section.id
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className="relative z-10">{section.label}</span>
                      
                      {/* Active indicator */}
                      {activeSection === section.id && (
                        <div className="absolute inset-0 bg-primary/10 rounded-full animate-fade-in" />
                      )}
                      
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        theme === 'dark' ? 'bg-red-500/10' : 'bg-cyan-500/10'
                      }`} />
                      
                      {/* Active underline glow */}
                      {activeSection === section.id && (
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full animate-fade-in ${
                          theme === 'dark' ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]'
                        }`} />
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="ml-4 p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 hover:bg-card/90 transition-all duration-300 neon-glow group"
                  aria-label="Toggle theme"
                >
                  <div className="relative w-5 h-5">
                    <Sun 
                      className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                        theme === 'navy' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                      }`}
                    />
                    <Moon 
                      className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                        theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Navbar */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              {/* Left side - Hamburger Menu and Theme Toggle grouped together */}
              <div className="flex items-center gap-2">
                {/* Hamburger Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 hover:bg-card/90 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-6">
                    <Menu 
                      className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                      }`}
                    />
                    <X 
                      className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                      }`}
                    />
                  </div>
                </button>
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 hover:bg-card/90 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  <div className="relative w-5 h-5">
                    <Sun 
                      className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                        theme === 'navy' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                      }`}
                    />
                    <Moon 
                      className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                        theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                      }`}
                    />
                  </div>
                </button>
              </div>
              
              {/* Right side - Empty to maintain flex layout */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:text-primary ${
                    activeSection === section.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`}
                >
                  {section.label}
                  
                  {/* Active indicator for mobile */}
                  {activeSection === section.id && (
                    <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-red-500' : 'bg-cyan-500'
                    }`} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;