import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
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
              About the Developer
            </h2>
            
            <div className="space-y-6 text-charcoal/80 relative z-10">
              <p className="text-lg leading-relaxed">
                Hey there! I'm a passionate full-stack developer who loves turning ideas into real, working web apps. 
                I've spent the last few years exploring how design and functionality can come together to create smooth, 
                memorable user experiences.
              </p>
              
              <p className="text-lg leading-relaxed">
                I enjoy building everything from interactive frontends with React and Tailwind CSS to solid backends 
                with Node.js, Express, and MongoDB. I'm big on clean code, scalable architecture, and making things 
                that actually feel good to use.
              </p>
              
              <p className="text-lg leading-relaxed">
                Whether it's crafting a chatbot that understands finance or developing a virtual gaming city, 
                I love projects that challenge me to think differently and push the limits of what's possible.
              </p>
              
              <div className="pt-6">
                <h3 className="handwritten text-2xl mb-4 text-charcoal">What I'm Good At</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon.red rounded-full" />
                      <span>Full Stack Web Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Frontend Engineering (React.js, Tailwind CSS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon.red rounded-full" />
                      <span>Backend Development (Node.js, Express.js, MongoDB)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>RESTful APIs & Authentication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon.red rounded-full" />
                      <span>UI/UX Design Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Problem Solving & Building Scalable Apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dark side with stats/experience */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="handwritten text-3xl mb-8 neon-text">
                  Creative Journey
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="text-3xl font-bold neon-text mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="text-3xl font-bold neon-text mb-2">15+</div>
                  <div className="text-muted-foreground">Game Titles</div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-muted-foreground">Character Designs</div>
                </div>
              </div>
              
              <div className="text-center pt-6">
                <p className="text-muted-foreground italic">
                  "Art is not what you see, but what you make others see."
                </p>
                <span className="text-sm text-primary handwritten">- Edgar Degas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;