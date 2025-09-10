import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    codingHours: 0,
    projects: 0,
    hackathons: 0,
    contributions: 0
  });

  const finalStats = {
    codingHours: 2500,
    projects: 25,
    hackathons: 8,
    contributions: 150
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        codingHours: Math.floor(finalStats.codingHours * progress),
        projects: Math.floor(finalStats.projects * progress),
        hackathons: Math.floor(finalStats.hackathons * progress),
        contributions: Math.floor(finalStats.contributions * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      label: "Coding Hours",
      value: counts.codingHours,
      suffix: "+",
      icon: "⌨️",
      color: "text-primary"
    },
    {
      label: "Projects Built",
      value: counts.projects,
      suffix: "+",
      icon: "🚀",
      color: "text-accent"
    },
    {
      label: "Hackathons Won",
      value: counts.hackathons,
      suffix: "",
      icon: "🏆",
      color: "text-primary"
    },
    {
      label: "Open Source Contributions",
      value: counts.contributions,
      suffix: "+",
      icon: "🌟",
      color: "text-accent"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            By the Numbers
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantifying passion, dedication, and continuous growth in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl bg-card/60 backdrop-blur border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-red group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color} group-hover:text-primary transition-colors duration-300`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              
              <div className="text-muted-foreground text-lg font-medium group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Glowing line under each stat */}
              <div className="w-12 h-0.5 bg-gradient-neon mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional animated elements */}
        <div className="mt-16 text-center">
          <p className="handwritten text-xl text-primary/80 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            "Every line of code tells a story of growth"
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;