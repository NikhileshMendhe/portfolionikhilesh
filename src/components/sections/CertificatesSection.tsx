import { useState } from 'react';
import { Award, Download, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { marketingCertificates, MarketingCertificate } from '@/data/marketingData';

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<MarketingCertificate | null>(null);

  return (
    <section id="certificates" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            🏅 Certifications & Credentials
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials in paid acquisition, search ads, analytics, and inbound marketing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {marketingCertificates.map((cert, index) => (
            <Card
              key={index}
              data-placeholder="[Placeholder]"
              className="group bg-white/90 dark:bg-card/50 border border-slate-200/90 dark:border-border hover:border-blue-400 dark:hover:border-primary/50 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fade-in shadow-md hover:shadow-xl rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  {/* Certificate icon/image */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-50 dark:bg-primary/10 mb-3 sm:mb-4 group-hover:bg-blue-100 dark:group-hover:bg-primary/20 transition-colors shadow-sm">
                    <span className="text-2xl sm:text-3xl">{cert.image}</span>
                  </div>

                  {/* TODO: [Placeholder] Certificate title */}
                  <h3 className="text-lg sm:text-xl font-bold handwritten mb-2 text-slate-900 dark:text-foreground group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-blue-600 dark:text-accent font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date and type */}
                  <div className="flex items-center justify-center space-x-4 mb-3 sm:mb-4 text-xs sm:text-sm text-slate-500 dark:text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-blue-500" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Type badge */}
                  <Badge 
                    variant="outline" 
                    className="mb-4 bg-slate-100 dark:bg-secondary/50 border-slate-200 dark:border-secondary text-slate-700 dark:text-secondary-foreground font-medium"
                  >
                    {cert.type}
                  </Badge>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-blue-50 dark:bg-primary/10 text-blue-600 dark:text-primary border border-blue-200/60 dark:border-primary/30 font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-secondary text-slate-600 dark:text-muted-foreground">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" size="sm" className="bg-blue-50 dark:bg-primary/10 border-blue-200 dark:border-primary/30 text-blue-600 dark:text-primary hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all font-medium rounded-lg">
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
                    <h4 className="font-semibold mb-2">Certification Scope</h4>
                    <Badge variant="outline">{selectedCert.type}</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Year Issued</h4>
                    <p className="text-muted-foreground">{selectedCert.date}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Skills Tested</h4>
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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
