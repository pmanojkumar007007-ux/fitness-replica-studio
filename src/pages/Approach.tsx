import Header from "@/components/Header";
import IntegratedApproachSection from "@/components/IntegratedApproachSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import { Button } from "@/components/ui/button";

const Approach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero text-primary mb-6">
              OUR APPROACH
            </h1>
            <p className="text-xl text-light mb-8">
              A holistic ecosystem combining fitness, rehabilitation, nutrition, and lifestyle coaching into personalized programs designed to deliver sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Integrated Approach */}
      <IntegratedApproachSection />

      {/* Philosophy */}
      <PhilosophySection />

      {/* Who We Serve */}
      <WhoWeServeSection />

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Experience the AZARAIAHZ Difference?
            </h2>
            <p className="text-xl text-light mb-8">
              Whether your goal is fat loss, muscle building, injury recovery, posture correction, lifestyle disease management, or athletic performance — we have a personalized solution for you.
            </p>
            <Button className="btn-primary text-lg px-8 py-4">
              BOOK YOUR FREE CONSULTATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
