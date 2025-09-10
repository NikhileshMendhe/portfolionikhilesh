import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "TypeScript", level: 88, icon: "🔷" },
        { name: "C++", level: 75, icon: "⚡" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 92, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎭" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 87, icon: "🟢" },
        { name: "MongoDB", level: 83, icon: "🍃" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "PostgreSQL", level: 78, icon: "🐘" },
        { name: "Firebase", level: 80, icon: "🔥" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 88, icon: "📚" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 82, icon: "🎨" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-red overflow-hidden"
            >
              <CardContent className="p-6">
                <h3 className="handwritten text-2xl text-primary mb-6 text-center">
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
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
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