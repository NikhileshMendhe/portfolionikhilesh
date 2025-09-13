import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-card/90 border border-border/50 rounded-full px-6 py-3 shadow-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;