import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import conceptArt1 from '@/assets/concept-art-1.jpg';
import conceptArt2 from '@/assets/concept-art-2.jpg';
import storyboard1 from '@/assets/storyboard-1.jpg';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
}

const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Dark Fantasy Warrior',
    category: 'Character Design',
    image: conceptArt1,
    description: 'Complete character design sheet featuring armor variations, weapon concepts, and expression studies for an upcoming RPG.',
    tools: ['Photoshop', 'Blender', 'Concept Art']
  },
  {
    id: '2',
    title: 'Mystic Forest Environment',
    category: 'Environment Art',
    image: conceptArt2,
    description: 'Atmospheric environment concept showcasing lighting studies and mood exploration for a fantasy adventure game.',
    tools: ['Digital Painting', 'Lighting Design', 'World Building']
  },
  {
    id: '3',
    title: 'Action Sequence Storyboard',
    category: 'Storyboarding',
    image: storyboard1,
    description: 'Dynamic storyboard panels for an animated cutscene, focusing on camera movement and character expressions.',
    tools: ['Storyboarding', 'Sequential Art', 'Animation Planning']
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            My Side Hustle
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best side projects, creative builds, and passion-driven web experiments that reflect my journey as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="artwork-grid">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer bg-card border-border/50 hover:border-primary/50 overflow-hidden transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-sm text-primary handwritten bg-background/90 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="handwritten text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Work Showcase */}
        <div className="mt-20">
          <div className="notebook-page p-8 md:p-12 text-notebook-foreground">
            <h3 className="handwritten-bold text-3xl mb-8 text-charcoal">
              Featured Work Process
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon.red rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="handwritten text-xl mb-2 text-charcoal">Ideation</h4>
                <p className="text-charcoal/70">
                  Understanding the problem, brainstorming solutions, and sketching out the project flow — from wireframes to core architecture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="handwritten text-xl mb-2 text-charcoal">Development</h4>
                <p className="text-charcoal/70">
                  Bringing ideas to life through clean, efficient code. Building responsive frontends, integrating APIs, and developing scalable backends with continuous testing and iteration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon.red rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="handwritten text-xl mb-2 text-charcoal">Deployment</h4>
                <p className="text-charcoal/70">
                  Polishing the final product, optimizing performance, and deploying it to production. Ensuring smooth functionality, security, and a great user experience from end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-card border-primary/30">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <span className="text-primary handwritten text-sm">
                    {selectedProject.category}
                  </span>
                  <h3 className="handwritten-bold text-3xl mb-4 text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="handwritten text-lg text-foreground">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;