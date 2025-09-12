import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
// Image will be placed in public folder

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-card opacity-95" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6 animate-slide-in-left">
              <h1 className="handwritten-bold text-5xl md:text-7xl lg:text-8xl neon-text leading-tight">
                Nikhilesh Mendhe
              </h1>
              <div className="h-1 w-40 bg-gradient-neon neon-glow rounded-full" />
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                Computer Science Engineer | Full-Stack Developer | Innovator
              </p>
              <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
                Crafting digital solutions through code, innovation, and creative problem-solving. 
                From hackathons to full-stack development, bringing ideas to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg neon-glow transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                View Resume
              </Button>
            </div>
          </div>
          
          {/* Right side - Hero Image with Holographic Effects */}
          <div className="relative animate-slide-in-right">
            {/* Holographic UI Elements */}
            <div className="absolute -inset-20 opacity-60">
              {/* Floating panels */}
              <div className="absolute top-10 -left-10 w-32 h-20 border border-accent/50 bg-accent/5 rounded-lg backdrop-blur-sm animate-float-slow">
                <div className="p-2 space-y-1">
                  <div className="h-2 bg-accent/50 rounded w-3/4" />
                  <div className="h-1 bg-accent/30 rounded w-1/2" />
                  <div className="h-1 bg-accent/30 rounded w-2/3" />
                </div>
              </div>
              
              <div className="absolute top-40 -right-16 w-28 h-16 border border-primary/50 bg-primary/5 rounded-lg backdrop-blur-sm animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="p-2 space-y-1">
                  <div className="h-2 bg-primary/50 rounded w-full" />
                  <div className="h-1 bg-primary/30 rounded w-3/4" />
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-12 w-24 h-12 border border-accent/50 bg-accent/5 rounded-lg backdrop-blur-sm animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="p-1">
                  <div className="h-1 bg-accent/50 rounded w-full mb-1" />
                  <div className="h-1 bg-accent/30 rounded w-2/3" />
                </div>
              </div>
              
              {/* Circuit lines */}
              <div className="absolute top-32 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
              <div className="absolute bottom-32 right-0 w-32 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            {/* Main hero image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
              <div className="relative">
                <img 
                  src="/lovable-uploads/199e17c9-2379-4f28-9db7-69c3751e2ddb.png" 
                  alt="Nikhilesh Mendhe - Full Stack Developer"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-primary/70">
          <span className="text-sm mb-2 handwritten">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;