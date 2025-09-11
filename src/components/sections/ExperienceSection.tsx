import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Octanet Technologies",
      role: "Web Development Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      logo: "🌐",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      contributions: [
        "Developed responsive web applications using React and Node.js",
        "Implemented RESTful APIs and database integration",
        "Collaborated with senior developers on production projects",
        "Gained hands-on experience with modern web technologies"
      ]
    },
    {
      company: "Boostnow Solutions",
      role: "Full Stack Developer",
      duration: "Sep 2024 - Present",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
      logo: "🚀",
      skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
      contributions: [
        "Built scalable full-stack applications using modern tech stack",
        "Optimized application performance and user experience",
        "Implemented secure authentication and authorization systems",
        "Led development of client projects from conception to deployment"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            💼 Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey building real-world applications and gaining industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{ 
                animation: `slide-in-${index % 2 === 0 ? 'left' : 'right'} 0.8s ease-out ${index * 0.3}s both`
              }}
            >
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12 cursor-pointer">
                <CardContent className="p-8">
                  {/* Front side */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold handwritten neon-text">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-accent font-semibold">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Back side (hover state) */}
                  <div className="absolute inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <h4 className="text-xl font-bold handwritten mb-4 neon-text">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.contributions.map((contribution, contribIndex) => (
                        <li
                          key={contribIndex}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <ExternalLink className="w-3 h-3 mr-2 mt-1 text-primary flex-shrink-0" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;