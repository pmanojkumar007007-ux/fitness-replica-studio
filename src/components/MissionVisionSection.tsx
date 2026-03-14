import { Target, Globe, Heart } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold text-card-foreground">Mission</h3>
              </div>
              <p className="text-light leading-relaxed">
                To improve the quality of lives by restoring health, building strength, and creating resilient individuals through exercise, education, and personalized coaching.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold text-card-foreground">Vision</h3>
              </div>
              <p className="text-light leading-relaxed">
                To build a global preventive health and performance ecosystem that empowers millions of people to live stronger, healthier, and more confident lives through science-based transformation and digital accessibility.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold text-card-foreground">Core Values</h3>
              </div>
              <div className="space-y-3 text-light">
                <p>✓ Science-based approach</p>
                <p>✓ Personalized solutions</p>
                <p>✓ Holistic transformation</p>
                <p>✓ Sustainable results</p>
                <p>✓ Accessibility for all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
