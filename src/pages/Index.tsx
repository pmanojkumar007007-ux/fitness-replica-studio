import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import AZUAppSection from "@/components/AZUAppSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ReviewsSection />
      <FounderSection />
      <AZUAppSection />
      <ContactSection />
    </div>
  );
};

export default Index;
