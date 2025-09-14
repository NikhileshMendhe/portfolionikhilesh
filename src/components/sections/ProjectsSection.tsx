import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Globe, Gamepad2, Trophy, Lightbulb } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web-apps' | 'games' | 'hackathons' | 'experiments';
  techStack: string[];
  image: string;
  liveDemo?: string;
  githubLink?: string;
  featured?: boolean;
  animationType: 'slide-left' | 'slide-right' | 'fade-up' | 'zoom-in';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ful2Win",
    description: "A comprehensive gaming platform with live tournaments, real-time leaderboards, and social features for competitive gaming.",
    category: "web-apps",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    featured: true,
    animationType: "slide-left"
  },
  {
    id: 2,
    title: "Mindmaze",
    description: "An AI-powered puzzle game that adapts to player skill level using machine learning algorithms.",
    category: "games",
    techStack: ["React", "TensorFlow.js", "Firebase", "CSS3"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    featured: true,
    animationType: "slide-right"
  },
  {
    id: 3,
    title: "Night Cart",
    description: "E-commerce platform with dark theme optimization and advanced cart management features.",
    category: "web-apps",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    featured: true,
    animationType: "fade-up"
  },
  {
    id: 4,
    title: "Smart City Dashboard",
    description: "IoT-based city monitoring system built during SIH 2024, featuring real-time data visualization.",
    category: "hackathons",
    techStack: ["React", "D3.js", "Python", "FastAPI", "Arduino"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    animationType: "zoom-in"
  },
  {
    id: 5,
    title: "Voice Assistant Bot",
    description: "AI chatbot with natural language processing and voice recognition capabilities.",
    category: "experiments",
    techStack: ["Python", "OpenAI", "Speech API", "Flask"],
    image: "/placeholder.svg",
    githubLink: "#",
    animationType: "slide-left"
  },
  {
    id: 6,
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking app with portfolio management and price alerts.",
    category: "web-apps",
    techStack: ["Vue.js", "CoinGecko API", "Chart.js", "PWA"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    animationType: "slide-right"
  },
  {
    id: 7,
    title: "Memory Game Pro",
    description: "Enhanced memory card game with multiplayer support and difficulty scaling.",
    category: "games",
    techStack: ["JavaScript", "Canvas API", "WebRTC", "CSS3"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    animationType: "fade-up"
  },
  {
    id: 8,
    title: "QR Code Generator",
    description: "Advanced QR code generator with custom styling, logo embedding, and batch processing.",
    category: "experiments",
    techStack: ["React", "QR.js", "Canvas API", "File API"],
    image: "/placeholder.svg",
    liveDemo: "#",
    githubLink: "#",
    animationType: "zoom-in"
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'web-apps', label: 'Web Apps', icon: Globe },
  { id: 'games', label: 'Games', icon: Gamepad2 },
  { id: 'hackathons', label: 'Hackathons', icon: Trophy },
  { id: 'experiments', label: 'Experiments', icon: Lightbulb }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && titleRef.current) {
      const title = "My Projects";
      const titleElement = titleRef.current;
      titleElement.textContent = "";
      
      title.split("").forEach((char, index) => {
        setTimeout(() => {
          titleElement.textContent += char;
        }, index * 100);
      });
    }
  }, [isVisible]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const getAnimationClass = (animationType: string, index: number) => {
    const baseClasses = "transition-all duration-700 ease-out";
    if (!isVisible) return `${baseClasses} opacity-0 translate-y-8`;
    
    const delay = `delay-${Math.min(index * 100, 500)}`;
    
    switch (animationType) {
      case 'slide-left':
        return `${baseClasses} ${delay} animate-fade-in translate-x-0`;
      case 'slide-right':
        return `${baseClasses} ${delay} animate-fade-in translate-x-0`;
      case 'fade-up':
        return `${baseClasses} ${delay} animate-fade-in translate-y-0`;
      case 'zoom-in':
        return `${baseClasses} ${delay} animate-scale-in`;
      default:
        return `${baseClasses} ${delay} animate-fade-in`;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-6xl md:text-7xl font-handwritten text-neon-red mb-4 relative"
          >
            {/* Title will be filled by typewriter effect */}
          </h2>
          <div className="w-48 h-1 bg-gradient-neon mx-auto mb-6 neon-underline"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a journey through the apps, games, and experiments I've built
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`group transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-neon-red text-white shadow-glow-red" 
                    : "hover:shadow-glow-red hover:border-neon-red"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-handwritten text-primary mb-8 text-center">Featured Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-neon-red/20 hover:border-neon-red/60 hover:shadow-glow-red transition-all duration-500 hover:scale-105 ${getAnimationClass(project.animationType, index)}`}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-neon-red transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.liveDemo && (
                        <Button 
                          size="sm" 
                          className="bg-neon-red hover:bg-neon-red/80 text-white shadow-glow-red hover:shadow-glow-red/80 transition-all duration-300"
                          asChild
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-neon-red/40 hover:bg-neon-red/10 hover:border-neon-red transition-all duration-300"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularProjects.slice(0, visibleProjects).map((project, index) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden bg-card/40 backdrop-blur-sm border-primary/20 hover:border-neon-red/60 hover:shadow-glow-red transition-all duration-500 hover:scale-105 ${getAnimationClass(project.animationType, index + featuredProjects.length)}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-neon-red transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.liveDemo && (
                    <Button 
                      size="sm" 
                      className="bg-neon-red hover:bg-neon-red/80 text-white shadow-glow-red hover:shadow-glow-red/80 transition-all duration-300 flex-1"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neon-red/40 hover:bg-neon-red/10 hover:border-neon-red transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < regularProjects.length && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMoreProjects}
              className="bg-primary/20 hover:bg-primary/40 border border-primary text-primary hover:text-white transition-all duration-300 px-8 py-3 animate-pulse"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;