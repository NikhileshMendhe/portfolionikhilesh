import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import EducationTimeline from '@/components/sections/EducationTimeline';
import SkillsSection from '@/components/sections/SkillsSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <StatsSection />
      <ProjectsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
