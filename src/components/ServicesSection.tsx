import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { motion } from 'framer-motion'; // Import motion

const ServicesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const conditionPlans = [
    {
      title: "PCOD & Hormonal Imbalance Program",
      description: "Regain hormonal balance, boost fertility, and restore your overall well-being with a science-backed, holistic plan.",
      features: [
        "Targeted Nutrition Guidance: Evidence-based food recommendations to support hormone regulation.",
        "PCOD-Friendly Recipes: Delicious, easy-to-follow meal ideas tailored to your lifestyle.",
        "Smart Grocery Planner: Curated shopping list to make meal prep simple and stress-free.",
        "Personalised Diet Plans: Designed around your cycle health, weight goals, and daily schedule.",
        "Mind–Body Support: Tools and guidance to reduce stress — one of the key triggers of hormonal imbalance.",
        "Yoga & Fitness Plans: Gentle, effective workouts to improve metabolism and hormonal health.",
      ],
    },
    {
      title: "Thyroid & Weight Loss Program",
      description: "Support thyroid function, enhance energy, and achieve healthy weight loss — all in a sustainable, enjoyable way.",
      features: [
        "Thyroid Nutrition Framework: Expert-approved food list to promote thyroid balance.",
        "Smart Portion Strategies: Practical plating techniques to stay on track without restriction.",
        "Custom Diet Charts: Tailored to your thyroid profile, calorie needs, and goals.",
        "Simplified Grocery Guide: Easy shopping lists to keep your routine consistent.",
        "Metabolism & Energy Boost: Lifestyle strategies to improve metabolism and maintain long-term results.",
      ],
    },
    {
      title: "Weight Loss Program",
      description: "Lose fat — not health. Our approach focuses on sustainable weight management without crash diets or extreme restrictions.",
      features: [
        "Personalised Meal Plans: Designed for your body type, preferences, and daily routine.",
        "Nutritious, Tasty Recipes: Balanced meals that keep you satisfied and energized.",
        "No Crash Diets: Evidence-based nutrition plans that support long-term weight maintenance.",
        "Tailored Workout Routines: Exercise plans that fit your fitness level and schedule.",
        "Continuous Support: Regular check-ins and accountability to help you stay consistent.",
      ],
    },
    {
      title: "Weight Gain Program",
      description: "Build strength and gain weight the healthy way — focusing on lean muscle, not just calories.",
      features: [
        "Structured Diet Plans: Step-by-step meal strategies for safe, gradual weight gain.",
        "High-Calorie, Nutrient-Rich Foods: Wholesome options to fuel muscle development.",
        "Muscle-Building Recipes: Delicious meals designed for strength and recovery.",
        "Strength-Centric Workouts: Tailored exercise programs to build lean mass.",
        "Ongoing Guidance: Regular support to keep you on track and motivated.",
      ],
    },
    {
      title: "Diabetes & Metabolic Health Program",
      description: "Take control of your blood sugar, improve metabolic function, and reduce long-term health risks with a comprehensive lifestyle plan.",
      features: [
        "Blood Sugar–Focused Diet Plans: Customised charts to balance glucose and energy.",
        "Low-GI Food Strategies: Smart swaps to improve insulin sensitivity and control cravings.",
        "Balanced Meal Framework: Visual plating techniques for portion control and nutrient balance.",
        "Progress Monitoring: Regular follow-ups to track improvement and adjust plans.",
        "Diabetes-Friendly Recipes: Enjoyable meals designed for blood sugar stability.",
        "Lifestyle Interventions: Practical steps to support liver function and reduce metabolic risk.",
        "Sustainable Health Education: Tools and knowledge for lifelong metabolic wellness.",
      ],
    },
  ];

  const approaches = [
    {
      title: "Personalized Nutrition Plans",
      description: "Tailored meals designed by certified dietitians."
    },
    {
      title: "Physical Activity Guidance", 
      description: "Customized workout and activity routines."
    },
    {
      title: "Lifestyle Mentoring",
      description: "Sleep, stress, and habit coaching."
    },
    {
      title: "Doctor Consultations",
      description: "1:1 sessions to track your progress and adjust plans."
    },
    {
      title: "Progress Tracking",
      description: "Regular check-ins and reports to keep you motivated."
    }
  ];

  const serviceHighlights = [
    {
      title: "Customized Diet Plans",
      image: "/src/assets/DIET.jpg", // Updated image path
    },
    {
      title: "Lifestyle Guidance",
      image: "/src/assets/lifestyle.png", // Updated image path
    },
    {
      title: "1:1 Doctor Consultations",
      image: "/src/assets/doctor.jpg", // Updated image path
    },
  ];

  const openProgramDetails = (program: any) => {
    setSelectedProgram(program);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-healing-primary mb-4 md:mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Personalized Care for Every Need
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {serviceHighlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center max-w-[240px] p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-32 h-32 object-cover rounded-full mb-5 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Condition-Focused Plans */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-healing-secondary text-center mb-6 md:mb-8">
              Condition-Focused Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {conditionPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-soft p-6 rounded-2xl shadow-soft hover:shadow-healing transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openProgramDetails(plan)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-healing-primary mb-3 text-center">
                    {plan.title}
                  </h4>
                  <p className="text-muted-foreground text-center">
                    {plan.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 360° Health Approach */}
          <div className="bg-gradient-section p-6 md:p-10 rounded-3xl shadow-healing mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-healing-primary text-center mb-4 md:mb-6">
              Beyond Diet – A 360° Health Approach
            </h3>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-10 max-w-3xl mx-auto">
              We don't stop at meal plans. PHLOEM is a <strong>complete health transformation system</strong>:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {approaches.map((approach, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 p-6 rounded-xl hover:bg-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <h4 className="text-lg font-semibold text-healing-primary mb-2">
                    {approach.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why People Love PHLOEM */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-healing-secondary mb-6 md:mb-8">
              Why People Love PHLOEM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                "100% Personalized – No copy-paste diets",
                "Backed by Medical & Nutrition Experts", 
                "Focus on Root-Cause Healing",
                "Lifestyle-first, Medicine-last Approach",
                "Holistic Support – Diet, Exercise, Mentorship, and More"
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center text-left p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-healing-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs">✔</span>
                  </div>
                  <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white p-6 rounded-lg shadow-lg">
          {selectedProgram && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-healing-primary mb-2">
                  {selectedProgram.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-lg mb-6">
                  {selectedProgram.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {selectedProgram.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-healing-primary mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;