import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import MovingBackground from '@/components/MovingBackground';
import Navbar from '@/components/Navbar';
import EducationTimeline from '@/components/sections/EducationTimeline';
import SkillsSection from '@/components/sections/SkillsSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import BlogSection from '@/components/sections/BlogSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500 overflow-x-hidden w-full max-w-[100vw]">
      <MovingBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <StatsSection />
      <ProjectsSection />
      {/* Testimonials moved immediately after Case Studies per requirement 9 */}
      <TestimonialsSection />
      <AchievementsSection />
      <ExperienceSection />
      <CertificatesSection />
      <BlogSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
