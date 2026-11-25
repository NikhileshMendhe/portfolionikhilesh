import { useEffect, useState } from 'react';
import { marketingStats } from '@/data/marketingData';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'ad-spend': 0,
    'leads-generated': 0,
    'roas': 0,
    'ctr': 0,
    'campaigns': 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    const element = document.getElementById('results');
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

      const newCounts: { [key: string]: number } = {};
      marketingStats.forEach((stat) => {
        if (stat.numericValue % 1 !== 0) {
          // Decimal number (e.g. 4.2, 3.8)
          newCounts[stat.id] = parseFloat((stat.numericValue * progress).toFixed(1));
        } else {
          // Whole number
          newCounts[stat.id] = Math.floor(stat.numericValue * progress);
        }
      });

      setCounts(newCounts);

      if (step >= steps) {
        clearInterval(timer);
        const finalCounts: { [key: string]: number } = {};
        marketingStats.forEach((stat) => {
          finalCounts[stat.id] = stat.numericValue;
        });
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatStatValue = (stat: typeof marketingStats[0]) => {
    const val = counts[stat.id] ?? 0;
    const formattedNum = stat.numericValue % 1 !== 0 
      ? val.toFixed(1) 
      : val.toLocaleString();
    return `${stat.prefix || ''}${formattedNum}${stat.suffix || ''}`;
  };

  return (
    <section 
      id="results" 
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            By the Numbers
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Measurable impact: converting ad spend into high-intent leads, sales, and sustainable growth
          </p>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {marketingStats.map((stat, index) => (
            <div
              key={stat.id}
              data-placeholder="[Placeholder]"
              className={`text-center p-6 rounded-2xl bg-white/90 dark:bg-card/60 backdrop-blur-md border border-slate-200/90 dark:border-primary/20 hover:border-blue-400 dark:hover:border-primary/40 transition-all duration-500 shadow-md hover:shadow-xl dark:hover:shadow-glow-blue group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* TODO: [Placeholder] {stat.label} - replace placeholder with your actual verified metrics */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {formatStatValue(stat)}
              </div>
              
              <div className="text-slate-600 dark:text-muted-foreground text-sm md:text-base font-semibold group-hover:text-slate-900 dark:group-hover:text-foreground transition-colors duration-300">
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
            "Profitability is the only marketing metric that never lies"
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
