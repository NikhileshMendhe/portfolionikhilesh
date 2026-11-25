import { useEffect, useState, useRef } from 'react';
import { personalInfo, marketingStrengths } from '@/data/marketingData';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Notebook page with about content */}
          <div 
            className={`notebook-page p-8 md:p-12 text-notebook-foreground transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h2 className="handwritten-bold text-4xl md:text-5xl mb-8 text-charcoal">
              About Me & Growth Philosophy
            </h2>
            
            <div className="space-y-6 text-charcoal/80 relative z-10">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              <div className="pt-6">
                <h3 className="handwritten text-2xl mb-4 text-charcoal">What I'm Good At</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {marketingStrengths.map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-neon.red' : 'bg-accent'}`} />
                      <span className="text-sm font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dark side with marketing approach and stats */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="handwritten text-3xl mb-8 neon-text">
                  The 4 Pillars of Growth
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-blue-100 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold neon-text mb-2">01. Research</div>
                  <div className="text-sm text-muted-foreground">Competitor teardowns, audience pain points, & high-intent search gaps.</div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-cyan-100 hover:border-cyan-400 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-accent mb-2">02. Creative</div>
                  <div className="text-sm text-muted-foreground">Scroll-stopping UGC, hooks, direct response angles, & high-CTR copy.</div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-blue-100 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold neon-text mb-2">03. Funnel</div>
                  <div className="text-sm text-muted-foreground">High-speed custom landing pages built for frictionless checkout and conversion.</div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-cyan-100 hover:border-cyan-400 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-accent mb-2">04. Analytics</div>
                  <div className="text-sm text-muted-foreground">Server-side CAPI, GA4 events, and attribution dashboards for clarity.</div>
                </div>
              </div>
              
              {/* Marketing Edge Box */}
              <div 
                className="bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/60 p-6 rounded-2xl border border-blue-200/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-placeholder="[Placeholder]"
              >
                {/* TODO: [Placeholder] Technical Edge highlight */}
                <h4 className="text-lg font-bold neon-text mb-2 flex items-center gap-2">
                  <span>⚡</span> The Engineering Advantage
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most marketers wait weeks for developers to launch a landing page or configure a webhook. 
                  Because I code, I deploy landing pages, fix conversion tracking discrepancies, and automate lead delivery in hours, not weeks.
                </p>
              </div>

              <div className="text-center pt-2">
                <p className="text-muted-foreground italic">
                  "Marketing is no longer about the stuff you make, but about the stories you tell and the data you track."
                </p>
                <span className="text-sm text-primary handwritten">- Growth Mindset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
