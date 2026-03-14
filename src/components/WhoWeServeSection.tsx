import { Users, Briefcase, Trophy, Heart, Zap, TrendingUp } from "lucide-react";

const WhoWeServeSection = () => {
  const segments = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Busy Professionals",
      description: "Seeking sustainable fitness that fits their schedules"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Management",
      description: "Individuals with obesity, diabetes, thyroid or lifestyle disorders"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Post-Injury Recovery",
      description: "Post-injury and post-surgery rehabilitation clients"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Athletes",
      description: "Athletes and fitness enthusiasts seeking performance optimization"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Performers",
      description: "Corporate leaders, entrepreneurs, and public figures"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Everyone Starting Out",
      description: "Beginners starting their health journey with expert guidance"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              AZARAIAHZ supports individuals across all stages of health and performance. From corrective therapy to peak performance — we guide every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-primary flex-shrink-0">
                    {segment.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">
                      {segment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {segment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <p className="text-2xl font-bold text-foreground">
              <span className="text-primary">Complete body transformation</span> at every life stage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
