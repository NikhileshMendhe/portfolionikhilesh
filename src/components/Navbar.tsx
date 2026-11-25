import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import CircularNavbar from './CircularNavbar';
import FuturisticThemeSlider from './FuturisticThemeSlider';
import { useIsMobile } from '@/hooks/use-mobile';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'results', label: 'Results' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

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
        beam.style.background = 'linear-gradient(90deg, transparent, #2563eb, transparent)';
        beam.style.boxShadow = '0 0 20px #2563eb, 0 0 40px #2563eb';
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
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 dark:bg-card/95 backdrop-blur-md border-b border-slate-200/70 dark:border-border/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <div className="backdrop-blur-md bg-white/85 dark:bg-card/90 border border-slate-200/80 dark:border-border/50 rounded-full px-6 py-3 shadow-lg shadow-slate-200/50 dark:shadow-2xl max-w-fit mx-auto transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 group ${
                        activeSection === section.id
                          ? 'text-blue-600 dark:text-primary'
                          : 'text-slate-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-foreground'
                      }`}
                    >
                      <span className="relative z-10">{section.label}</span>
                      
                      {/* Active indicator */}
                      {activeSection === section.id && (
                        <div className="absolute inset-0 bg-blue-50 dark:bg-primary/10 rounded-full animate-fade-in" />
                      )}
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-blue-500/10" />
                      
                      {/* Active underline glow */}
                      {activeSection === section.id && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full animate-fade-in bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-card/80 backdrop-blur-md border border-slate-200 dark:border-border/50 hover:bg-slate-200 dark:hover:bg-card/90 transition-all duration-300 group shadow-sm"
                  aria-label="Toggle theme"
                >
                  <div className="relative w-5 h-5">
                    <Sun 
                      className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 ${
                        theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                      }`}
                    />
                    <Moon 
                      className={`absolute inset-0 w-5 h-5 text-blue-500 transition-all duration-500 ${
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
                  className="p-2 rounded-full bg-white/90 dark:bg-card/80 backdrop-blur-md border border-slate-200 dark:border-border/50 hover:bg-slate-100 dark:hover:bg-card/90 transition-all duration-300 shadow-sm"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-6">
                    <Menu 
                      className={`absolute inset-0 w-6 h-6 text-blue-600 dark:text-primary transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                      }`}
                    />
                    <X 
                      className={`absolute inset-0 w-6 h-6 text-blue-600 dark:text-primary transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                      }`}
                    />
                  </div>
                </button>
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/90 dark:bg-card/80 backdrop-blur-md border border-slate-200 dark:border-border/50 hover:bg-slate-100 dark:hover:bg-card/90 transition-all duration-300 shadow-sm"
                  aria-label="Toggle theme"
                >
                  <div className="relative w-5 h-5">
                    <Sun 
                      className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 ${
                        theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                      }`}
                    />
                    <Moon 
                      className={`absolute inset-0 w-5 h-5 text-blue-500 transition-all duration-500 ${
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
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-card/95 backdrop-blur-md border-b border-slate-200 dark:border-border/50 transition-all duration-300 ease-in-out shadow-lg ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-primary/10'
                      : 'text-slate-600 dark:text-muted-foreground hover:bg-slate-100 dark:hover:bg-muted/50'
                  }`}
                >
                  {section.label}
                  
                  {/* Active indicator for mobile */}
                  {activeSection === section.id && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
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