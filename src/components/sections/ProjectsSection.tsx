import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Search, Share2, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { caseStudies, caseStudyCategories } from '@/data/marketingData';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const filteredProjects = caseStudies.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

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
      const title = "Case Studies";
      const titleElement = titleRef.current;
      titleElement.textContent = "";
      
      title.split("").forEach((char, index) => {
        setTimeout(() => {
          titleElement.textContent += char;
        }, index * 90);
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meta-ads': return <Target className="w-4 h-4 mr-2" />;
      case 'google-ads': return <Search className="w-4 h-4 mr-2" />;
      case 'seo': return <TrendingUp className="w-4 h-4 mr-2" />;
      case 'social': return <Share2 className="w-4 h-4 mr-2" />;
      case 'creative': return <Sparkles className="w-4 h-4 mr-2" />;
      default: return <Target className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <section id="case-studies" ref={sectionRef} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="w-48 h-1 bg-gradient-to-r from-primary/50 to-primary dark:from-destructive/50 dark:to-destructive mx-auto mb-6 rounded-full shadow-lg shadow-primary/30"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real campaign breakdowns: strategic problems solved with measurable revenue, lower acquisition costs, and scale
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {caseStudyCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={`group relative overflow-hidden transition-all duration-300 rounded-xl font-medium ${
                activeCategory === category.id 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border-transparent" 
                  : "bg-white/80 dark:bg-card/50 border border-slate-200 dark:border-border text-slate-700 dark:text-muted-foreground hover:border-blue-400 hover:text-blue-600 shadow-sm hover:scale-105"
              }`}
            >
              {getCategoryIcon(category.id)}
              <span className="relative z-10">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((study) => (
            <div 
              key={study.id}
              data-placeholder="[Placeholder]"
              className="group relative transition-all duration-500 ease-out"
            >
              {/* Card Container */}
              <div className="relative h-full flex flex-col bg-white/90 dark:bg-card/70 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-primary/20 overflow-hidden transition-all duration-500 hover:border-blue-400 dark:hover:border-primary/50 shadow-md hover:shadow-2xl">
                
                {/* Visual Header / Image */}
                <div className="relative overflow-hidden h-44">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-card dark:via-card/40 dark:to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/95 dark:bg-background/90 text-blue-600 dark:text-primary border border-blue-200 dark:border-primary/30 text-xs backdrop-blur-sm shadow-sm font-semibold">
                      {study.categoryLabel}
                    </Badge>
                  </div>

                  {/* Result Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{study.resultHighlight}</span>
                    </div>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* TODO: [Placeholder] Case Study {study.id} Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
                      {study.title}
                    </h3>

                    {/* Problem */}
                    <div className="mb-3 text-xs leading-relaxed text-slate-600 dark:text-muted-foreground">
                      <span className="font-semibold text-blue-600 dark:text-primary flex items-center gap-1 mb-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Problem
                      </span>
                      {/* TODO: [Placeholder] Case study problem statement */}
                      {study.problem}
                    </div>

                    {/* What I Did */}
                    <div className="mb-3 text-xs leading-relaxed text-slate-600 dark:text-muted-foreground">
                      <span className="font-semibold text-indigo-600 dark:text-accent flex items-center gap-1 mb-1">
                        <Target className="w-3.5 h-3.5" /> What I Did
                      </span>
                      {/* TODO: [Placeholder] Case study implementation details */}
                      {study.whatIDid}
                    </div>

                    {/* Result */}
                    <div className="text-xs leading-relaxed text-slate-800 dark:text-foreground/90 bg-gradient-to-r from-blue-50 to-cyan-50 dark:bg-primary/10 p-3 rounded-lg border border-blue-200 dark:border-primary/20 font-medium">
                      <span className="font-semibold text-blue-600 dark:text-primary flex items-center gap-1 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified Result
                      </span>
                      {/* TODO: [Placeholder] Case study numbers and outcome */}
                      {study.result}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-[11px] bg-slate-100 dark:bg-secondary/60 text-slate-600 dark:text-muted-foreground hover:text-blue-600 border border-slate-200/60 dark:border-transparent font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMoreProjects}
              className="bg-white dark:bg-transparent border-2 border-blue-600/50 text-blue-600 dark:text-primary hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white px-8 py-3 transition-all duration-300 shadow-sm font-semibold rounded-xl"
            >
              Load More Case Studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
