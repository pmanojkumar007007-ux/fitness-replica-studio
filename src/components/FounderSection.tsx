import { Award, Target, Users, Zap } from "lucide-react";

const FounderSection = () => {
  const expertise = [
    "Personal Training & Strength Conditioning",
    "Clinical Nutrition & Body Recomposition",
    "Physiotherapy & Rehabilitation",
    "Biomechanics & Posture Correction",
    "Pain Management & Injury Recovery",
    "Lifestyle & Habit Transformation",
    "Performance Optimization",
  ];

  const achievements = [
    { number: "16+", label: "Years of Experience" },
    { number: "10,000+", label: "Clients Transformed Globally" },
    { number: "100%", label: "Personalized Approach" },
    { number: "∞", label: "Impact Potential" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              About the Founder
            </h2>
            <p className="text-xl text-light">
              Coach Kolluri Samson Azaraiah (Coach Azzu)
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Holistic Transformation Specialist
              </h3>
              <p className="text-primary text-lg font-semibold mb-4">
                International Certified Kinesio Therapist & Optimal Health Care Professional
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Kolluri Samson Azaraiah is a holistic transformation specialist with over 16 years of experience in fitness, rehabilitation, nutrition, and lifestyle coaching. He has successfully transformed thousands of individuals across different age groups and professions, including entrepreneurs, corporate professionals, athletes, medical rehabilitation patients, film actors, politicians, and healthcare professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-12">
              <h4 className="text-xl font-bold text-card-foreground mb-6 text-center">
                Areas of Expertise
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Founder Philosophy
              </h3>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-primary italic">
                  "A strong body creates a strong mind.<br />
                  A disciplined lifestyle creates a powerful life."
                </p>
                <p className="text-light">
                  Coach Azaraiah believes every individual has the potential to become physically strong, mentally resilient, and confident when guided with the right knowledge and structure.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                His Mission
              </h3>
              <p className="text-light mb-6">
                To build individuals who are not just fit — but unbreakable and unstoppable.
              </p>
              <p className="text-light">
                His mission is to transform not only physical appearance but also confidence, discipline, and overall quality of life. Known for his deeply personalized approach, focusing on root causes rather than temporary solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
