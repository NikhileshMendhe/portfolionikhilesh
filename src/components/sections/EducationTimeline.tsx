import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EducationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const education = [
    {
      id: 1,
      level: "Bachelor's in Computer Science",
      institution: "GH Raisoni College of Engineering and Management",
      period: "2022 - 2026",
      cgpa: "8.2 CGPA",
      highlights: ["Data Structures", "Algorithms", "Web Development", "Machine Learning"]
    },
    {
      id: 2,
      level: "Higher Secondary (XII)",
      institution: "Jijamata Jr. College",
      period: "2021 - 2022",
      cgpa: "65.67%",
      highlights: ["Mathematics", "Physics", "Computer Science", "Chemistry"]
    },
    {
      id: 3,
      level: "Secondary School (X)",
      institution: "St. Paul School, Nagpur",
      period: "2019 - 2020",
      cgpa: "74.40%",
      highlights: ["Mathematics", "Science", "English", "Social Science"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            Education Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500 rounded-full opacity-60" />

          <div className="space-y-16">
            {education.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                className={`timeline-item flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${
                  visibleItems.includes(item.id) 
                    ? `animate-fade-in ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`
                    : 'opacity-0'
                }`}>
                  <Card className="bg-white/90 dark:bg-card/80 backdrop-blur-md border border-slate-200/90 dark:border-primary/20 hover:border-blue-400 dark:hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl dark:hover:shadow-glow-blue rounded-2xl">
                    <CardContent className="p-6">
                      <div className="relative">
                        <h3 className="handwritten text-2xl text-blue-600 dark:text-primary mb-2 font-bold">{item.level}</h3>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-foreground mb-2">{item.institution}</h4>
                        <p className="text-slate-500 dark:text-muted-foreground mb-3 text-sm">{item.period}</p>
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:bg-primary/10 rounded-lg p-3 mb-4 border border-blue-200/70 dark:border-transparent">
                          <span className="text-blue-600 dark:text-primary font-bold text-lg">{item.cgpa}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-50 dark:bg-accent/20 text-blue-600 dark:text-accent border border-blue-200/60 dark:border-transparent rounded-full text-xs font-semibold"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                  visibleItems.includes(item.id)
                    ? 'bg-blue-600 border-blue-400 shadow-[0_0_12px_#2563eb] pulse-glow'
                    : 'bg-white dark:bg-background border-slate-300 dark:border-muted'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;