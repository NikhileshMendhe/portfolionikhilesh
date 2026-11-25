import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { marketingTestimonials } from '@/data/marketingData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % marketingTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % marketingTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? marketingTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            Client Testimonials
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-6 neon-glow rounded-full" />
          <p className="text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            What founders, marketing directors, and brand operators say about working together
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial display */}
          <div className="relative min-h-[340px] md:min-h-[290px] overflow-hidden">
            {marketingTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                data-placeholder="[Placeholder]"
                className={`absolute inset-0 bg-white/95 dark:bg-card/60 backdrop-blur-md border border-slate-200/90 dark:border-border/70 hover:border-blue-400 dark:hover:border-primary/40 transition-all duration-700 shadow-xl rounded-2xl transform ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Quote className="w-10 h-10 text-blue-500 mx-auto mb-4 animate-pulse" />
                    
                    {/* TODO: [Placeholder] Client quote {index + 1} */}
                    <blockquote className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-foreground mb-6 leading-relaxed italic font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-3xl sm:text-4xl">{testimonial.image}</div>
                      <div className="text-left">
                        {/* TODO: [Placeholder] Client Name & Company */}
                        <h4 className="font-bold handwritten text-base sm:text-lg text-slate-900 dark:text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 dark:text-accent text-xs sm:text-sm font-semibold">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-muted-foreground font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse"
                          style={{ animationDelay: `${starIndex * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-card/50 border-border hover:border-primary/50 hover:bg-primary/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {marketingTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125 shadow-glow-red'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-card/50 border-border hover:border-primary/50 hover:bg-primary/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
