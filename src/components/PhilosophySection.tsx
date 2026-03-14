import { Zap, Apple, Brain } from "lucide-react";

const PhilosophySection = () => {
  const pillars = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Movement",
      description: "Building strength, mobility, and functional fitness through intelligent programming"
    },
    {
      icon: <Apple className="w-12 h-12 text-primary" />,
      title: "Nutrition",
      description: "Personalized nutrition strategies aligned with your goals and lifestyle"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Mindset",
      description: "Developing discipline, resilience, and mental strength for lasting change"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              We believe true health is built on three pillars. When these systems align, the human body becomes resilient, energetic, and powerful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Goal
            </h3>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Not temporary fitness — but <span className="font-bold text-primary">lifelong strength and independence</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
