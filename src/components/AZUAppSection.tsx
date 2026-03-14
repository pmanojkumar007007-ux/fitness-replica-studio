import { Smartphone, Zap, Users, TrendingUp, BookOpen, MessageCircle, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const AZUAppSection = () => {
  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Personalized Workout Programs" },
    { icon: <Apple className="w-6 h-6" />, title: "Customized Diet & Nutrition Plans" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Rehabilitation & Recovery Protocols" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Progress Tracking & Analytics" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Expert Support & Consultation" },
    { icon: <Users className="w-6 h-6" />, title: "Habit & Lifestyle Coaching" },
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">
                  About AZU App
                </h2>
              </div>
              <p className="text-xl text-light mb-6">
                Your Personal Health & Transformation Platform
              </p>
              <p className="text-light mb-6 leading-relaxed">
                AZU is the official digital platform of AZARAIAHZ created to bring personalized coaching, structured programs, and expert guidance directly to users through technology.
              </p>
              <p className="text-light mb-8 leading-relaxed">
                The app integrates fitness, nutrition, rehabilitation, and lifestyle coaching into one intelligent ecosystem designed for sustainable transformation.
              </p>
              <Button className="btn-primary text-lg px-8 py-4">
                LEARN MORE ABOUT AZU
              </Button>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Access Through AZU
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-card-foreground font-medium">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Your coach. Your plan. Your transformation — in one app.
            </h3>
            <p className="text-light max-w-2xl mx-auto">
              Whether starting a fitness journey, recovering from injury, or optimizing performance, AZU provides professional guidance anytime and anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AZUAppSection;
