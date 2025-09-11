import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor & Mentor",
      company: "VNIT Nagpur",
      image: "👨‍🏫",
      quote: "Nikhilesh demonstrates exceptional problem-solving skills and innovation. His approach to hackathons and project development is truly commendable.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Team Lead",
      company: "Boostnow Solutions",
      image: "👩‍💼",
      quote: "Working with Nikhilesh has been amazing. His full-stack development skills and dedication to quality code make him a valuable team member.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Hackathon Teammate",
      company: "SIH 2024 Team",
      image: "👨‍💻",
      quote: "Nikhilesh's technical expertise and leadership during our hackathon journey was instrumental in achieving runner-up position at SIH 2024.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Project Manager",
      company: "Octanet Technologies",
      image: "👩‍💻",
      quote: "During his internship, Nikhilesh showed remarkable growth and contributed significantly to our web development projects.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            🗣️ What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from mentors, teammates, and colleagues
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial display */}
          <div className="relative h-80 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`absolute inset-0 bg-card/50 border-border transition-all duration-700 transform ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
                    
                    <blockquote className="text-xl text-foreground mb-8 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div className="text-left">
                        <h4 className="font-bold handwritten text-lg neon-text">
                          {testimonial.name}
                        </h4>
                        <p className="text-accent font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse"
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
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-card/50 border-border hover:border-primary/50 hover:bg-primary/10"
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