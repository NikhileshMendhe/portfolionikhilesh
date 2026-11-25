import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, ExternalLink, Phone, Linkedin } from 'lucide-react';
import { marketingServices, personalInfo } from '@/data/marketingData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send directly to personal email via FormSubmit AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Growth Inquiry from ${formData.name} (${formData.service})`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Inquiry Sent Successfully!",
          description: `Thank you, ${formData.name}. Your inquiry has been sent directly to ${personalInfo.email}. I'll review and respond promptly!`,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (err) {
      console.warn('Form submission fallback:', err);
      // Fallback: open default mail client prefilled with all details
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `Growth Inquiry: ${formData.service || 'Strategy Call'} - ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nCampaign Goals & Budget:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      toast({
        title: "Redirecting to Email Client",
        description: `Drafting inquiry directly to ${personalInfo.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="handwritten-bold text-5xl md:text-6xl mb-6 neon-text">
            Let's Scale Together
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-8 neon-glow rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn ad spend into high-intent leads and profitable sales? Let's talk growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="notebook-page p-6 sm:p-8 md:p-12">
            <h3 className="handwritten-bold text-3xl mb-8 text-charcoal">
              Book a Strategy Call / Message
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
                    className="bg-white border-charcoal/20 text-charcoal focus:border-blue-500"
                    placeholder="e.g., Alex Johnson"
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
                    className="bg-white border-charcoal/20 text-charcoal focus:border-blue-500"
                    placeholder="alex@brand.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="handwritten text-lg text-charcoal block mb-2">
                  Service Interested In
                </label>
                <Input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-white border-charcoal/20 text-charcoal focus:border-blue-500"
                  placeholder="e.g., Meta/Google Ads, Funnel Setup, SEO"
                  required
                />
              </div>
              
              <div>
                <label className="handwritten text-lg text-charcoal block mb-2">
                  Campaign Goals & Monthly Budget
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-white border-charcoal/20 text-charcoal focus:border-blue-500 resize-none"
                  placeholder="Tell me about your product/service, target CPA/ROAS, current monthly ad spend, and timeline..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 text-lg rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending Directly to {personalInfo.email}...
                  </span>
                ) : (
                  "Send Growth Inquiry"
                )}
              </Button>

              <p className="text-center text-xs text-charcoal/60 pt-1">
                Submissions are delivered directly to <a href={`mailto:${personalInfo.email}`} className="text-blue-600 font-medium hover:underline">{personalInfo.email}</a>
              </p>
            </form>
          </div>

          {/* Contact Information & Services */}
          <div className="space-y-8">
            <Card className="bg-white/90 dark:bg-card border border-slate-200/90 dark:border-border/50 p-8 shadow-md hover:shadow-xl rounded-2xl">
              <h3 className="handwritten-bold text-2xl mb-6 neon-text">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-primary transition-colors font-medium">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">WhatsApp</h4>
                    <a 
                      href={personalInfo.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-green-400 hover:text-emerald-700 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Direct Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-sky-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">LinkedIn</h4>
                    <a 
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-blue-400 hover:text-sky-700 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>linkedin.com/in/nikhileshmendhe</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">Phone</h4>
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-primary transition-colors font-medium">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-rose-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">Response Time</h4>
                    <p className="text-slate-600 dark:text-muted-foreground text-sm font-medium">Usually within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="handwritten text-lg text-slate-900 dark:text-foreground mb-1 font-bold">Availability</h4>
                    <p className="text-slate-600 dark:text-muted-foreground text-sm font-medium">Open for performance ad management & funnel audits</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-border/40">
                <a
                  href={personalInfo.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-semibold text-sm shadow-sm group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                  <span>Start WhatsApp Conversation</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </Card>

            <Card className="bg-white/90 dark:bg-card border border-slate-200/90 dark:border-border/50 p-8 shadow-md hover:shadow-xl rounded-2xl">
              <h3 className="handwritten-bold text-2xl mb-6 text-blue-600 dark:text-accent">
                Services Offered
              </h3>
              
              <div className="space-y-4">
                {marketingServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 dark:bg-card/40 border border-slate-100 dark:border-border/40 transition-all hover:border-blue-200">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-500'}`} />
                    <div>
                      <h4 className="text-slate-900 dark:text-foreground font-bold mb-1 text-sm sm:text-base">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center pt-2">
              <p className="text-slate-600 dark:text-muted-foreground italic handwritten text-lg">
                "Good marketing makes the company look smart. Great marketing makes the customer feel smart."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
