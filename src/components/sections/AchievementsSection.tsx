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
    <section className="py-20 bg-background relative overflow-hidden">
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

        {/* Horizontal scrolling achievements */}
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-8 min-w-max px-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card
                  key={index}
                  className={`min-w-[350px] bg-card/50 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-bounce`}
                  style={{ animationDelay: `${index * 0.2}s`, animationDuration: '1s', animationFillMode: 'both' }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${achievement.bgColor} mb-6 pulse-glow`}>
                      <IconComponent className={`w-10 h-10 ${achievement.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold handwritten mb-2 neon-text">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-accent uppercase tracking-wider mb-3">
                      {achievement.category}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;