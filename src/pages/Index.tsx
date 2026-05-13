import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceEducation from "@/components/ExperienceEducation";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BenzeneBackground from "@/components/BenzeneBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BenzeneBackground />
      <Navbar />
      <HeroSection />
      <ExperienceEducation />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
