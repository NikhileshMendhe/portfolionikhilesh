import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EducationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const education = [
    {
      id: 1,
      level: "Bachelor's in Computer Science",
      institution: "Your College Name",
      period: "2020 - 2024",
      cgpa: "8.5 CGPA",
      highlights: ["Data Structures", "Algorithms", "Web Development", "Machine Learning"]
    },
    {
      id: 2,
      level: "Higher Secondary (XII)",
      institution: "Your School Name",
      period: "2018 - 2020",
      cgpa: "85%",
      highlights: ["Mathematics", "Physics", "Computer Science", "Chemistry"]
    },
    {
      id: 3,
      level: "Secondary School (X)",
      institution: "Your School Name",
      period: "2016 - 2018",
      cgpa: "92%",
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
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            Education Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-50" />

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
                  <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-red">
                    <CardContent className="p-6">
                      <div className="relative">
                        <h3 className="handwritten text-2xl text-primary mb-2">{item.level}</h3>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.institution}</h4>
                        <p className="text-muted-foreground mb-3">{item.period}</p>
                        <div className="bg-primary/10 rounded-lg p-3 mb-4">
                          <span className="text-primary font-bold text-lg">{item.cgpa}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
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
                    ? 'bg-primary border-primary shadow-glow-red pulse-glow'
                    : 'bg-background border-muted'
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