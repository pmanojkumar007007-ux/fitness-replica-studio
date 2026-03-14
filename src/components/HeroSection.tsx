import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/fitness-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-hero text-accent mb-6">
              Next-Generation<br />
              <span className="text-primary">Holistic Health</span>
              <br />
              & Transformation
            </h1>

            <div className="mb-8">
              <p className="text-xl mb-6 text-light">
                Combining fitness, rehabilitation, nutrition, and lifestyle coaching into one seamless ecosystem designed for sustainable results.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-light">Science-based personalized programming</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-light">Comprehensive body transformation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-light">Accessible online, at home, or in-person</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-light">Sustainable results that last a lifetime</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="btn-primary text-lg px-8 py-4 w-full md:w-auto">
                START YOUR TRANSFORMATION
              </Button>
              <p className="text-sm text-light">
                🎯 Free consultation • Expert guidance • Personalized approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;