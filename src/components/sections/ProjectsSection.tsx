import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Globe, Gamepad2, Trophy, Lightbulb } from 'lucide-react';

// Import project images
import spaceVendorImg from '@/assets/projects/spacevendor.png';
import tetrisImg from '@/assets/projects/tetris.png';
import mindmazeImg from '@/assets/projects/mindmaze.png';
import astrayImg from '@/assets/projects/astray.png';
import nightCartImg from '@/assets/projects/nightcart.png';
import pinkSocialImg from '@/assets/projects/pinksocial.png';
import finMentorImg from '@/assets/projects/finmentor.png';
import portfolioImg from '@/assets/projects/portfolio.png';
import fancyBeignetImg from '@/assets/projects/fancybeignet.png';
import twitterCloneImg from '@/assets/projects/twitterclone.png';

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
    title: "Night Cart",
    description: "E-Commerce Website with advanced cart management and cyberpunk aesthetics.",
    category: "web-apps",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: nightCartImg,
    liveDemo: "https://calm-fairy-bdd959.netlify.app",
    githubLink: "https://github.com/NikhileshMendhe/nightfall-ecom-world",
    featured: true,
    animationType: "slide-left"
  },
  {
    id: 2,
    title: "PinkSocial",
    description: "Social Networking App connecting people with modern UI and real-time features.",
    category: "web-apps",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: pinkSocialImg,
    liveDemo: "https://pink-tweet-garden.vercel.app/",
    githubLink: "https://github.com/NikhileshMendhe/pink-tweet-garden",
    featured: true,
    animationType: "slide-right"
  },
  {
    id: 3,
    title: "MindMaze",
    description: "Game City for Gamers with arena battles and real-time multiplayer gameplay.",
    category: "games",
    techStack: ["React.js", "Node.js", "Express.js", "WebSocket", "PostgreSQL", "Tailwind CSS"],
    image: mindmazeImg,
    liveDemo: "https://mindmaze-arena-masters.vercel.app/",
    githubLink: "https://github.com/NikhileshMendhe/Mindmaze-Gamecity",
    featured: true,
    animationType: "fade-up"
  },
  {
    id: 4,
    title: "FinMentor",
    description: "Financial Chatbot with AI-powered financial advice and real-time market insights.",
    category: "web-apps",
    techStack: ["React.js", "Node.js", "NLP API", "MongoDB", "Tailwind CSS"],
    image: finMentorImg,
    liveDemo: "https://finmentor-chai-time.vercel.app/",
    githubLink: "https://github.com/NikhileshMendhe/finmentor-chai-time",
    animationType: "zoom-in"
  },
  {
    id: 5,
    title: "SpaceVendor",
    description: "Classic Web Game featuring space trading mechanics and galactic adventures.",
    category: "games",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: spaceVendorImg,
    liveDemo: "https://spacevendor.vercel.app/",
    githubLink: "https://github.com/NikhileshMendhe/spacevendor",
    animationType: "slide-left"
  },
  {
    id: 6,
    title: "TetrisBoostNow",
    description: "Tetris Game with neon cyberpunk theme and enhanced gameplay mechanics.",
    category: "games",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: tetrisImg,
    liveDemo: "https://tetrisboostnow.vercel.app/",
    githubLink: "https://github.com/NikhileshMendhe/neon-tetris-touch",
    animationType: "slide-right"
  },
  {
    id: 7,
    title: "Nikhilesh's Portfolio",
    description: "Personal Website showcasing my journey and projects with modern design.",
    category: "web-apps",
    techStack: ["TypeScript", "CSS"],
    image: portfolioImg,
    liveDemo: "https://portfolionikhilesh.netlify.app/",
    githubLink: "https://github.com/NikhileshMendhe/portfolionikhilesh",
    animationType: "fade-up"
  },
  {
    id: 8,
    title: "Fancy Beignet",
    description: "Study App with interactive learning features and progress tracking.",
    category: "experiments",
    techStack: ["TypeScript", "CSS"],
    image: fancyBeignetImg,
    liveDemo: "https://fancy-beignet-d6c6e1.netlify.app/",
    animationType: "zoom-in"
  },
  {
    id: 9,
    title: "Twitter Clone",
    description: "Social media platform clone with modern UI and core Twitter features.",
    category: "web-apps",
    techStack: ["TypeScript", "CSS"],
    image: twitterCloneImg,
    liveDemo: "https://unique-basbousa-359182.netlify.app/",
    animationType: "slide-left"
  },
  {
    id: 10,
    title: "Astray",
    description: "Maze Game with challenging puzzles and immersive 3D environments.",
    category: "games",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: astrayImg,
    liveDemo: "https://wwwtyro.github.io/Astray/",
    githubLink: "https://github.com/NikhileshMendhe/Astray",
    animationType: "slide-right"
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    if (!isVisible) return `${baseClasses} opacity-0 translate-y-16`;
    
    const delay = `delay-[${Math.min(index * 150, 800)}ms]`;
    
    switch (animationType) {
      case 'slide-left':
        return `${baseClasses} ${delay} opacity-100 translate-y-0 translate-x-0`;
      case 'slide-right':
        return `${baseClasses} ${delay} opacity-100 translate-y-0 translate-x-0`;
      case 'fade-up':
        return `${baseClasses} ${delay} opacity-100 translate-y-0`;
      case 'zoom-in':
        return `${baseClasses} ${delay} opacity-100 scale-100`;
      default:
        return `${baseClasses} ${delay} opacity-100 translate-y-0`;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Futuristic Neon Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 dark:bg-destructive/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 dark:bg-destructive/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/8 dark:bg-destructive/8 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Parallax Moving Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 dark:bg-destructive/30 rounded-full animate-ping delay-100"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-primary/40 dark:bg-destructive/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-40 left-32 w-3 h-3 bg-primary/20 dark:bg-destructive/20 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 bg-primary/50 dark:bg-destructive/50 rounded-full animate-ping delay-1000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-6xl md:text-7xl font-handwritten bg-gradient-to-r from-primary to-primary/60 dark:from-destructive dark:to-destructive/60 bg-clip-text text-transparent mb-4 relative"
          >
            {/* Title will be filled by typewriter effect */}
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-primary/50 to-primary dark:from-destructive/50 dark:to-destructive mx-auto mb-6 rounded-full shadow-lg shadow-primary/30 dark:shadow-destructive/30"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my futuristic collection of web apps, games, and innovative experiments
          </p>
        </div>

        {/* Category Filter with Neon Effect */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-primary dark:bg-destructive text-primary-foreground dark:text-destructive-foreground shadow-lg shadow-primary/30 dark:shadow-destructive/30 border-primary/50 dark:border-destructive/50" 
                    : "hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-destructive/30 hover:border-primary/50 dark:hover:border-destructive/50 hover:scale-105"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent dark:from-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconComponent className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">{category.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid - Futuristic 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.id}
              className={`group relative ${getAnimationClass(project.animationType, index)}`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 3D Card with Neon Glow */}
              <div className="relative bg-card/60 dark:bg-card/40 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-destructive/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-primary/20 dark:group-hover:shadow-destructive/20">
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/30 dark:from-destructive/50 dark:to-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm -z-10"></div>
                
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Hover Overlay with Tech Stack Icons */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-all duration-500 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 animate-fade-in">
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className={`text-xs bg-primary/20 dark:bg-destructive/20 border-primary/30 dark:border-destructive/30 transition-all duration-300 ${
                              hoveredCard === project.id ? `animate-fade-in delay-[${techIndex * 100}ms]` : ''
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-destructive transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack (mobile view) */}
                  <div className="md:hidden flex flex-wrap gap-1">
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
                  
                  {/* Action Buttons with Ripple Effect */}
                  <div className="flex gap-3 pt-2">
                    {project.liveDemo && (
                      <Button 
                        size="sm" 
                        className="flex-1 relative overflow-hidden bg-primary dark:bg-destructive hover:bg-primary/80 dark:hover:bg-destructive/80 text-primary-foreground dark:text-destructive-foreground transition-all duration-300 group/btn"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-full"></div>
                          <Globe className="w-4 h-4 mr-2 relative z-10" />
                          <span className="relative z-10">Live Demo</span>
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="relative overflow-hidden border-primary/40 dark:border-destructive/40 hover:bg-primary/10 dark:hover:bg-destructive/10 hover:border-primary dark:hover:border-destructive transition-all duration-300 group/btn"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <div className="absolute inset-0 bg-primary/10 dark:bg-destructive/10 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-full"></div>
                          <Github className="w-4 h-4 relative z-10" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Neon Pulse Effect on Hover */}
                <div className="absolute inset-0 border-2 border-primary/0 dark:border-destructive/0 group-hover:border-primary/30 dark:group-hover:border-destructive/30 rounded-2xl transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-primary/0 dark:bg-destructive/0 group-hover:bg-primary/5 dark:group-hover:bg-destructive/5 rounded-2xl transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button with Futuristic Design */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-16">
            <Button 
              onClick={loadMoreProjects}
              className="relative overflow-hidden bg-transparent border-2 border-primary/30 dark:border-destructive/30 text-primary dark:text-destructive hover:text-primary-foreground dark:hover:text-destructive-foreground px-8 py-3 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-primary dark:bg-destructive scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10 font-medium">Load More Projects</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;