import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6 animate-slide-in-left">
              <h1 className="handwritten-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl neon-text leading-tight">
                Nikhilesh Mendhe
              </h1>
              <div className="h-0.5 lg:h-1 w-24 sm:w-32 lg:w-40 bg-gradient-neon neon-glow rounded-full mx-auto lg:mx-0" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide">
                Computer Science Engineer | Full-Stack Developer | Innovator
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Crafting digital solutions through code, innovation, and creative problem-solving. 
                From hackathons to full-stack development, bringing ideas to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg neon-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg transition-all duration-300 hover:scale-105 neon-glow w-full sm:w-auto"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/NIKHILESH_MENDHE_RESUME.pdf';
                  link.download = 'NIKHILESH_MENDHE_RESUME.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Right side - Hero Image */}
          <div className="relative animate-slide-in-right order-1 lg:order-2">
            {/* Main hero image */}
            <div className="relative group">
              <div className="relative">
                <img 
                  src={theme === 'dark' ? "/red-cyber-portrait.png" : "/blue-cyber-portrait.png"}
                  alt="Nikhilesh Mendhe - Full Stack Developer"
                  className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center text-primary/70">
          <span className="text-xs lg:text-sm mb-2 handwritten">Scroll to explore</span>
          <div className="w-5 lg:w-6 h-8 lg:h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-0.5 lg:w-1 h-2 lg:h-3 bg-primary rounded-full mt-1.5 lg:mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;