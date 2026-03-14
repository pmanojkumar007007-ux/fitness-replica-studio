import { CheckCircle2, Dumbbell, Apple, Zap, Brain, Heart } from "lucide-react";

const IntegratedApproachSection = () => {
  const disciplines = [
    { icon: <Dumbbell className="w-6 h-6" />, title: "Personal Training & Strength Conditioning" },
    { icon: <Apple className="w-6 h-6" />, title: "Clinical Nutrition & Fat Loss Programs" },
    { icon: <Heart className="w-6 h-6" />, title: "Physiotherapy & Rehabilitation" },
    { icon: <Zap className="w-6 h-6" />, title: "Biomechanics & Posture Correction" },
    { icon: <Brain className="w-6 h-6" />, title: "Pain Management & Injury Recovery" },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Hormonal & Metabolic Health Optimization" },
  ];

  const deliveryModels = [
    "Online coaching",
    "Personal consultations",
    "Home clinic sessions",
    "Partner gym training support",
    "Digital app-based programs (AZU)",
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Integrated Approach
            </h2>
            <p className="text-xl text-light">
              We combine multiple disciplines into one cohesive transformation system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {disciplines.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
              Flexible Delivery Models
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {deliveryModels.map((model, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{model}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              This ensures accessibility without compromising quality or results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproachSection;
