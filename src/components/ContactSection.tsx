import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-6 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            Let's Create Together
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="notebook-page p-6 sm:p-8 md:p-12">
            <h3 className="handwritten-bold text-3xl mb-8 text-charcoal">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="handwritten text-lg text-charcoal block mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border-charcoal/20 text-charcoal focus:border-neon.red"
                    required
                  />
                </div>
                <div>
                  <label className="handwritten text-lg text-charcoal block mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-charcoal/20 text-charcoal focus:border-neon.red"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="handwritten text-lg text-charcoal block mb-2">
                  Project Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-white border-charcoal/20 text-charcoal focus:border-neon.red"
                  placeholder="e.g., Character Design for Mobile Game"
                  required
                />
              </div>
              
              <div>
                <label className="handwritten text-lg text-charcoal block mb-2">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-white border-charcoal/20 text-charcoal focus:border-neon.red resize-none"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-neon.red hover:bg-neon.red/90 text-white py-3 text-lg handwritten"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border/50 p-8">
              <h3 className="handwritten-bold text-2xl mb-6 neon-text">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">nicksgalaxy30@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-foreground mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24–48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-foreground mb-1">Availability</h4>
                    <p className="text-muted-foreground">Currently accepting new projects</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border/50 p-8">
              <h3 className="handwritten-bold text-2xl mb-6 text-accent">
                Project Types
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Web Applications & Dashboards</h4>
                    <p className="text-sm text-muted-foreground">Building dynamic, responsive, and scalable web apps with modern tech stacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Full Stack Development</h4>
                    <p className="text-sm text-muted-foreground">Creating end-to-end solutions — from frontend interfaces to backend architecture and database management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">APIs & Integrations</h4>
                    <p className="text-sm text-muted-foreground">Designing secure and efficient RESTful APIs for seamless communication between systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">UI/UX Development</h4>
                    <p className="text-sm text-muted-foreground">Translating design ideas into pixel-perfect, user-friendly interfaces that perform beautifully.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Automation & Optimization Projects</h4>
                    <p className="text-sm text-muted-foreground">Developing smart systems to streamline processes, improve efficiency, and enhance user experience.</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center pt-6">
              <p className="text-muted-foreground italic handwritten text-lg">
                "Every great design begins with an even better story."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;