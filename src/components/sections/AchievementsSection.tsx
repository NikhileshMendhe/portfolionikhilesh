import { Trophy, Medal, Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "SIH 2024 Runner-up",
      category: "National Hackathon",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      description: "Runner-up position in Smart India Hackathon 2024"
    },
    {
      title: "State Level Winner",
      category: "College Hackathon",
      icon: Medal,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      description: "First place in state-level hackathon competition"
    },
    {
      title: "Innovation Award",
      category: "Tech Competition",
      icon: Award,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      description: "Most innovative solution award"
    },
    {
      title: "Coding Excellence",
      category: "Programming Contest",
      icon: Star,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      description: "Excellence in competitive programming"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background relative overflow-hidden">
      {/* Floating confetti particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            🏆 Achievements Wall
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating victories in hackathons, competitions, and innovation challenges
          </p>
        </div>

        {/* Glowing divider line */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full neon-glow" />
        </div>

        {/* Grid layout achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${achievement.bgColor} mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="text-xl font-bold handwritten mb-2 neon-text">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-accent uppercase tracking-wider mb-2">
                    {achievement.category}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;