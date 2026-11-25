import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { marketingExperiences } from '@/data/marketingData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            💼 Work Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Hands-on professional experience driving performance ads, conversion rate optimization, and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {marketingExperiences.map((exp, index) => (
            <div
              key={index}
              data-placeholder="[Placeholder]"
              className="group perspective-1000"
              style={{ 
                animation: `slide-in-${index % 2 === 0 ? 'left' : 'right'} 0.8s ease-out ${index * 0.3}s both`
              }}
            >
              <Card className="h-full bg-white/90 dark:bg-card/50 border border-slate-200/90 dark:border-border hover:border-blue-400 dark:hover:border-primary/50 transition-all duration-700 shadow-md hover:shadow-xl rounded-2xl transform-style-preserve-3d sm:group-hover:rotate-y-12 cursor-pointer">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Front side */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-start justify-between mb-4 sm:mb-6 flex-col sm:flex-row gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl">{exp.logo}</div>
                        <div>
                          {/* TODO: [Placeholder] Company name & role */}
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold handwritten text-slate-900 dark:text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-blue-600 dark:text-accent font-semibold">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 dark:bg-primary/10 text-blue-600 dark:text-primary border border-blue-200/60 dark:border-primary/30 font-semibold">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center text-slate-600 dark:text-muted-foreground text-sm sm:text-base">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-muted-foreground text-sm sm:text-base">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-secondary/50 text-slate-700 dark:text-foreground hover:bg-blue-50 hover:text-blue-600 border border-slate-200/60 transition-colors font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Back side (hover state) */}
                  <div className="absolute inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <h4 className="text-xl font-bold handwritten mb-4 text-slate-900 dark:text-foreground">
                      Key Contributions & Wins
                    </h4>
                    <ul className="space-y-3">
                      {exp.contributions.map((contribution, contribIndex) => (
                        <li
                          key={contribIndex}
                          className="flex items-start text-sm text-slate-600 dark:text-muted-foreground font-medium"
                        >
                          <ExternalLink className="w-3 h-3 mr-2 mt-1 text-blue-600 dark:text-primary flex-shrink-0" />
                          {/* TODO: [Placeholder] Key contribution point */}
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
