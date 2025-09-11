import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EducationTimeline from '@/components/sections/EducationTimeline';
import SkillsSection from '@/components/sections/SkillsSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import OpenSourceSection from '@/components/sections/OpenSourceSection';
import BlogSection from '@/components/sections/BlogSection';
import HobbiesSection from '@/components/sections/HobbiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <StatsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CertificatesSection />
      <OpenSourceSection />
      <BlogSection />
      <HobbiesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
