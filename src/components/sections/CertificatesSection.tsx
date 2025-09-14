import { useState } from 'react';
import { Award, Download, ExternalLink, X, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "React Development Mastery",
      issuer: "Meta (Facebook)",
      date: "2024",
      type: "Professional Certificate",
      image: "🎓",
      skills: ["React", "JavaScript", "JSX", "Hooks"],
      description: "Comprehensive course covering advanced React concepts and best practices",
      credentialId: "REACT2024001"
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      type: "Certification",
      image: "💻",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      description: "300+ hours of hands-on web development training",
      credentialId: "FCC2023FS"
    },
    {
      title: "Smart India Hackathon 2024",
      issuer: "Government of India",
      date: "2024",
      type: "Hackathon Certificate",
      image: "🏆",
      skills: ["Innovation", "Problem Solving", "Team Leadership"],
      description: "Runner-up certificate for innovative solution in national hackathon",
      credentialId: "SIH2024RU"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "Cloud Certification",
      image: "☁️",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      description: "Foundation level AWS cloud services certification",
      credentialId: "AWS2024CP"
    },
    {
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2023",
      type: "Database Certification",
      image: "🗄️",
      skills: ["MongoDB", "NoSQL", "Database Design"],
      description: "Advanced MongoDB development and administration",
      credentialId: "MONGO2023DEV"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2023",
      type: "Course Certificate",
      image: "🐍",
      skills: ["Python", "Data Structures", "Algorithms"],
      description: "Comprehensive Python programming course with projects",
      credentialId: "COURSERA2023PY"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            🏅 Certificates & Awards
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, course completions, and recognition achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-border hover:border-primary/50 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  {/* Certificate icon/image */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl sm:text-3xl">{cert.image}</span>
                  </div>

                  {/* Certificate title */}
                  <h3 className="text-lg sm:text-xl font-bold handwritten mb-2 neon-text group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-accent font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date and type */}
                  <div className="flex items-center justify-center space-x-4 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Type badge */}
                  <Badge 
                    variant="outline" 
                    className="mb-4 bg-secondary/50 border-secondary text-secondary-foreground"
                  >
                    {cert.type}
                  </Badge>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" size="sm" className="bg-primary/10 border-primary/30 hover:bg-primary/20">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate detail modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedCert.image}</span>
                  <div>
                    <h3 className="text-2xl handwritten neon-text">
                      {selectedCert.title}
                    </h3>
                    <p className="text-accent">{selectedCert.issuer}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Certificate Type</h4>
                    <Badge variant="outline">{selectedCert.type}</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Year Obtained</h4>
                    <p className="text-muted-foreground">{selectedCert.date}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Credential ID</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    {selectedCert.credentialId}
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Online
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;