import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TrendingUp, AlertCircle, CheckCircle2, Droplet, Heart, Apple, BarChart3, Zap, Calendar } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

const KYB = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight");
      return;
    }

    let heightInMeters: number;
    let weightInKg: number;

    if (unit === "metric") {
      heightInMeters = parseFloat(height) / 100;
      weightInKg = parseFloat(weight);
    } else {
      // Convert imperial to metric
      heightInMeters = (parseFloat(height) * 0.3048); // feet to meters
      weightInKg = parseFloat(weight) * 0.453592; // lbs to kg
    }

    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(calculatedBmi.toFixed(1));
    setBmi(roundedBmi);

    // Determine category and advice
    if (roundedBmi < 18.5) {
      setCategory("Underweight");
      setAdvice("You may need to focus on building muscle mass and overall strength. Consider a personalized nutrition and training plan to gain healthy weight.");
    } else if (roundedBmi < 25) {
      setCategory("Normal Weight");
      setAdvice("Great! You're in a healthy weight range. Maintain this with regular exercise and balanced nutrition. Focus on fitness goals and performance.");
    } else if (roundedBmi < 30) {
      setCategory("Overweight");
      setAdvice("Consider adopting a balanced fitness and nutrition program. Our transformation programs are designed to help you achieve a healthier weight range.");
    } else {
      setCategory("Obese");
      setAdvice("It's time for a comprehensive health transformation. Our holistic approach combines personalized training, nutrition coaching, and lifestyle modification for sustainable results.");
    }
  };

  const getBmiColor = () => {
    if (!bmi) return "text-muted-foreground";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-green-500";
    if (bmi < 30) return "text-yellow-500";
    return "text-red-500";
  };

  const getCategoryIcon = () => {
    if (!category) return null;
    if (category === "Normal Weight") {
      return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    }
    return <AlertCircle className="w-6 h-6 text-yellow-500" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <TrendingUp className="w-10 h-10 text-primary" />
              <h1 className="text-hero text-primary">
                KYB - Know Your Body
              </h1>
            </div>
            <p className="text-xl text-light mb-4">
              Understand your body composition and get personalized insights for your health transformation journey
            </p>
            <p className="text-light max-w-2xl mx-auto">
              Your Body Mass Index (BMI) is a key indicator of your current health status. Use our calculator to understand where you stand and what steps to take next.
            </p>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">
                  BMI Calculator
                </h2>

                {/* Unit Selection */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-card-foreground mb-3">
                    Measurement Unit
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUnit("metric")}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        unit === "metric"
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      Metric (kg, cm)
                    </button>
                    <button
                      onClick={() => setUnit("imperial")}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        unit === "imperial"
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      Imperial (lbs, ft)
                    </button>
                  </div>
                </div>

                {/* Height Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Height {unit === "metric" ? "(cm)" : "(feet)"}
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder={unit === "metric" ? "e.g., 175" : "e.g., 5.9"}
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="bg-input border-border pr-12"
                      step={unit === "metric" ? "1" : "0.1"}
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                      {unit === "metric" ? "cm" : "ft"}
                    </span>
                  </div>
                </div>

                {/* Weight Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder={unit === "metric" ? "e.g., 75" : "e.g., 165"}
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="bg-input border-border pr-12"
                      step="0.1"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                      {unit === "metric" ? "kg" : "lbs"}
                    </span>
                  </div>
                </div>

                {/* Calculate Button */}
                <Button
                  onClick={calculateBMI}
                  className="w-full btn-primary text-lg py-6 mb-4"
                >
                  Calculate BMI
                </Button>

                {/* Info Text */}
                <p className="text-xs text-muted-foreground text-center">
                  BMI is calculated as weight (kg) divided by height (m)²
                </p>
              </div>

              {/* Results Display */}
              <div className="flex flex-col gap-6">
                {bmi !== null ? (
                  <>
                    {/* BMI Result Card */}
                    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 rounded-2xl p-8 text-center">
                      <p className="text-muted-foreground mb-2 text-sm">Your BMI</p>
                      <p className={`text-6xl font-bold mb-2 ${getBmiColor()}`}>
                        {bmi}
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        {getCategoryIcon()}
                        <p className={`text-2xl font-bold ${getBmiColor()}`}>
                          {category}
                        </p>
                      </div>
                    </Card>

                    {/* Category Explanation */}
                    <Card className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
                      <h3 className="text-lg font-bold text-card-foreground mb-3">
                        What This Means
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-semibold">BMI Under 18.5:</span> Underweight
                        </p>
                        <p>
                          <span className="font-semibold">BMI 18.5 - 24.9:</span> Normal Weight
                        </p>
                        <p>
                          <span className="font-semibold">BMI 25 - 29.9:</span> Overweight
                        </p>
                        <p>
                          <span className="font-semibold">BMI 30+:</span> Obese
                        </p>
                      </div>
                    </Card>

                    {/* Personalized Advice */}
                    <Card className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-primary">
                      <h3 className="text-lg font-bold text-card-foreground mb-3">
                        Your Personalized Recommendation
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {advice}
                      </p>
                    </Card>

                    {/* CTA Button */}
                    <Button 
                      className="btn-primary w-full text-lg py-6"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      GET PERSONALIZED PLAN
                    </Button>
                  </>
                ) : (
                  <Card className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] h-full flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground text-lg">
                        Enter your height and weight to calculate your BMI
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Beyond BMI: Complete Body Assessment
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Body Composition
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Understand your muscle-to-fat ratio and how it impacts your overall health and performance
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Health Metrics
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Track multiple indicators including body fat percentage, muscle mass, and metabolic health
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Personalized Insights
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Get science-based recommendations tailored to your unique body composition and goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Holistic Transformation Process
              </h2>
              <p className="text-xl text-light max-w-3xl mx-auto">
                A comprehensive, science-based approach to understanding and transforming your health
              </p>
            </div>

            {/* Process Flow - Desktop */}
            <div className="hidden md:block mb-16">
              <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-12">
                {/* Step 1 */}
                <div className="grid grid-cols-12 gap-6 mb-12 items-start">
                  <div className="col-span-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Droplet className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-card-foreground mb-2">
                      Step 1: Health Analysis
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Collect comprehensive health history through specialized tests
                    </p>
                  </div>
                  
                  <div className="col-span-9 flex items-center">
                    <div className="space-y-2 text-muted-foreground text-sm w-full">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span><span className="font-semibold">Urine Tests</span> - Metabolic and kidney function analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span><span className="font-semibold">Blood Tests</span> - Complete blood count and hormone levels</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span><span className="font-semibold">Blood Sugar Tests</span> - Glucose levels and diabetes risk</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span><span className="font-semibold">Other Tests</span> - Nutritional deficiencies and vital signs</span>
                      </div>
                    </div>
                    <div className="text-3xl text-primary font-bold ml-8">→</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-12 gap-6 mb-12 items-start">
                  <div className="text-3xl text-primary font-bold">←</div>
                  
                  <div className="col-span-9 flex items-center">
                    <div className="space-y-2 text-muted-foreground text-sm w-full">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span><span className="font-semibold">Expert Team Analysis</span> - Reports reviewed by specialists</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span><span className="font-semibold">Nutritional Experts</span> - Dietary assessment and planning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span><span className="font-semibold">Physicians & Doctors</span> - Medical evaluation and clearance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span><span className="font-semibold">Comprehensive Review</span> - Holistic health assessment</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-card-foreground mb-2">
                      Step 2: Expert Review
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      In-depth analysis by our specialist team
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-12 gap-6 mb-12 items-start">
                  <div className="col-span-3">
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Apple className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-card-foreground mb-2">
                      Step 3: Custom Plan
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Personalized recommendations delivered
                    </p>
                  </div>
                  
                  <div className="col-span-9 flex items-center">
                    <div className="space-y-2 text-muted-foreground text-sm w-full">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span><span className="font-semibold">Customized Diet Plan</span> - Based on your specific health needs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span><span className="font-semibold">Sleep Optimization</span> - Tracking and improvement strategies</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span><span className="font-semibold">Exercise Programming</span> - Tailored fitness routine</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span><span className="font-semibold">Lifestyle Coaching</span> - Sustainable habit development</span>
                      </div>
                    </div>
                    <div className="text-3xl text-primary font-bold ml-8">→</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-12 gap-6 mb-12 items-start">
                  <div className="text-3xl text-primary font-bold">←</div>
                  
                  <div className="col-span-9 flex items-center">
                    <div className="space-y-2 text-muted-foreground text-sm w-full">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span><span className="font-semibold">2-Week Implementation</span> - Follow your personalized plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span><span className="font-semibold">Weekly Check-ins</span> - Progress monitoring and support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span><span className="font-semibold">Daily Tracking</span> - Diet, sleep, and exercise logging</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span><span className="font-semibold">Expert Support</span> - Guidance and motivation throughout</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-card-foreground mb-2">
                      Step 4: Transformation
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Begin your 2-week journey
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-3">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-card-foreground mb-2">
                      Step 5: Re-Assessment
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Measure progress and adjust
                    </p>
                  </div>
                  
                  <div className="col-span-9 flex items-center">
                    <div className="space-y-2 text-muted-foreground text-sm w-full">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span><span className="font-semibold">Repeat Health Tests</span> - Measure metabolic improvements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span><span className="font-semibold">Progress Evaluation</span> - Compare before & after results</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span><span className="font-semibold">Case Study Analysis</span> - Document your transformation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span><span className="font-semibold">Next Phase Planning</span> - Continue your journey</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow - Mobile */}
            <div className="md:hidden space-y-4 mb-12">
              {/* Step 1 */}
              <Card className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">Step 1: Health Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-3">Collect comprehensive health history through specialized tests</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>✓ Urine Tests - Metabolic analysis</li>
                      <li>✓ Blood Tests - Complete count</li>
                      <li>✓ Blood Sugar Tests - Glucose levels</li>
                      <li>✓ Other Tests - Vital signs</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-green-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">Step 2: Expert Review</h3>
                    <p className="text-sm text-muted-foreground mb-3">In-depth analysis by our specialist team</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>✓ Nutritional Experts</li>
                      <li>✓ Physicians & Doctors</li>
                      <li>✓ Report Analysis</li>
                      <li>✓ Comprehensive Review</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-yellow-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Apple className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">Step 3: Custom Plan</h3>
                    <p className="text-sm text-muted-foreground mb-3">Personalized recommendations delivered</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>✓ Customized Diet Plan</li>
                      <li>✓ Sleep Optimization</li>
                      <li>✓ Exercise Programming</li>
                      <li>✓ Lifestyle Coaching</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-purple-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">Step 4: Transformation</h3>
                    <p className="text-sm text-muted-foreground mb-3">Begin your 2-week journey</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>✓ 2-Week Implementation</li>
                      <li>✓ Weekly Check-ins</li>
                      <li>✓ Daily Tracking</li>
                      <li>✓ Expert Support</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Step 5 */}
              <Card className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-l-4 border-l-red-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">Step 5: Re-Assessment</h3>
                    <p className="text-sm text-muted-foreground mb-3">Measure progress and adjust</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>✓ Repeat Health Tests</li>
                      <li>✓ Progress Evaluation</li>
                      <li>✓ Case Study Analysis</li>
                      <li>✓ Next Phase Planning</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Why This Process Works - Roadmap */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-center text-foreground mb-4">
                Why This Process Works
              </h3>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Our proven methodology combines science, expertise, and personalization for lasting transformation
              </p>

              {/* Desktop Roadmap */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full"></div>

                  {/* Roadmap Items */}
                  <div className="relative grid grid-cols-5 gap-4">
                    {/* Step 1 */}
                    <div className="text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                        1
                      </div>
                      <div className="bg-background border-2 border-primary/30 rounded-xl p-4">
                        <h4 className="font-bold text-foreground mb-2">Science-Based</h4>
                        <p className="text-xs text-muted-foreground">Real data, proven methods & measurable metrics</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                        2
                      </div>
                      <div className="bg-background border-2 border-primary/30 rounded-xl p-4">
                        <h4 className="font-bold text-foreground mb-2">Personalized</h4>
                        <p className="text-xs text-muted-foreground">Tailored specifically to YOUR unique body & goals</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                        3
                      </div>
                      <div className="bg-background border-2 border-primary/30 rounded-xl p-4">
                        <h4 className="font-bold text-foreground mb-2">Holistic</h4>
                        <p className="text-xs text-muted-foreground">Complete wellness - nutrition, fitness & mindset</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                        4
                      </div>
                      <div className="bg-background border-2 border-primary/30 rounded-xl p-4">
                        <h4 className="font-bold text-foreground mb-2">Measurable</h4>
                        <p className="text-xs text-muted-foreground">Track progress with clear benchmarks & results</p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                        5
                      </div>
                      <div className="bg-background border-2 border-primary/30 rounded-xl p-4">
                        <h4 className="font-bold text-foreground mb-2">Sustainable</h4>
                        <p className="text-xs text-muted-foreground">Lasting change through habit formation & support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Roadmap */}
              <div className="md:hidden space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-lg">
                    1
                  </div>
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">Science-Based</h4>
                    <p className="text-sm text-muted-foreground">Real data, proven methods & measurable metrics</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-lg">
                    2
                  </div>
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">Personalized</h4>
                    <p className="text-sm text-muted-foreground">Tailored specifically to YOUR unique body & goals</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-lg">
                    3
                  </div>
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">Holistic</h4>
                    <p className="text-sm text-muted-foreground">Complete wellness - nutrition, fitness & mindset</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-lg">
                    4
                  </div>
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">Measurable</h4>
                    <p className="text-sm text-muted-foreground">Track progress with clear benchmarks & results</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-lg">
                    5
                  </div>
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">Sustainable</h4>
                    <p className="text-sm text-muted-foreground">Lasting change through habit formation & support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready for a Complete Transformation?
            </h2>
            <p className="text-xl text-light mb-8">
              Your BMI is just the starting point. Let our experts create a personalized plan based on your complete body assessment and goals.
            </p>
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => setIsContactModalOpen(true)}
            >
              BOOK YOUR FREE ASSESSMENT
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default KYB;
