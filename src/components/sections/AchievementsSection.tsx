import { Trophy, TrendingUp, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { marketingAchievements } from '@/data/marketingData';

const AchievementsSection = () => {
  const getAchievementIcon = (index: number) => {
    switch (index % 4) {
      case 0: return { icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-400/10" };
      case 1: return { icon: TrendingUp, color: "text-blue-400", bgColor: "bg-blue-400/10" };
      case 2: return { icon: Target, color: "text-green-400", bgColor: "bg-green-400/10" };
      case 3: return { icon: Award, color: "text-purple-400", bgColor: "bg-purple-400/10" };
      default: return { icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-400/10" };
    }
  };

  return (
    <section id="achievements" className="py-20 bg-transparent relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            🏆 Marketing Milestones
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Key campaign scaling milestones, performance records, and growth achievements
          </p>
        </div>

        {/* Glowing divider line */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="w-24 sm:w-32 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full neon-glow" />
        </div>

        {/* Grid layout achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {marketingAchievements.map((achievement, index) => {
            const { icon: IconComponent, color, bgColor } = getAchievementIcon(index);
            return (
              <Card
                key={index}
                data-placeholder="[Placeholder]"
                className="bg-white/90 dark:bg-card/50 border border-slate-200/90 dark:border-border hover:border-blue-400 dark:hover:border-primary/50 transition-all duration-500 shadow-md hover:shadow-xl rounded-2xl transform hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${bgColor} mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                    <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${color}`} />
                  </div>
                  {/* TODO: [Placeholder] Achievement {index + 1} */}
                  <h3 className="text-lg sm:text-xl font-bold handwritten mb-2 text-slate-900 dark:text-foreground group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-accent font-semibold uppercase tracking-wider mb-2">
                    {achievement.category}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
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
