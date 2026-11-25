import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { marketingSkillCategories } from '@/data/marketingData';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="handwritten-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 neon-text">
            Skills & Marketing Stack
          </h2>
          <div className="h-0.5 lg:h-1 w-20 lg:w-24 bg-gradient-neon mx-auto mb-6 lg:mb-8 neon-glow rounded-full" />
          <p className="text-base lg:text-lg text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            A battle-tested technical and creative toolkit for acquisition, analytics, and conversion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {marketingSkillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="bg-white/90 dark:bg-card/80 backdrop-blur-md border border-slate-200/90 dark:border-primary/20 hover:border-blue-400 dark:hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl dark:hover:shadow-glow-blue overflow-hidden rounded-2xl"
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="handwritten text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-slate-800 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-100 dark:bg-muted/30 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
