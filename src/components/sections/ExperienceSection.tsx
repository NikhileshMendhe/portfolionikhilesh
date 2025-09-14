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
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            💼 Work Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey building real-world applications and gaining industry experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{ 
                animation: `slide-in-${index % 2 === 0 ? 'left' : 'right'} 0.8s ease-out ${index * 0.3}s both`
              }}
            >
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-700 transform-style-preserve-3d sm:group-hover:rotate-y-12 cursor-pointer">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Front side */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-start justify-between mb-4 sm:mb-6 flex-col sm:flex-row gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold handwritten neon-text">
                            {exp.company}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-accent font-semibold">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
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