import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-healing-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Meet Our Expert
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Led by certified nutrition professionals dedicated to your health transformation
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-healing p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <img
                    src="/lovable-uploads/79257b93-43e4-42c8-86f7-565b68ae39d4.png"
                    alt="Asna Razak - Certified Dietician"
                    className="w-full h-96 object-cover rounded-xl shadow-soft"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-healing-primary/20 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-healing-primary mb-4">
                  Asna Razak
                </h3>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-healing-secondary mb-2">
                    Chief Nutritionist & Dietician
                  </p>
                  <p className="text-base text-muted-foreground">
                    BSc & MSc Nutrition and Dietetics
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With advanced degrees in Nutrition and Dietetics, Asna brings years of 
                    expertise in personalized nutrition therapy and metabolic health management.
                  </p>
                  
                  <p>
                    Specializing in hormonal balance, weight management, and lifestyle disease 
                    reversal, she has helped hundreds of clients achieve their health goals 
                    through evidence-based nutrition strategies.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-healing-mint text-healing-primary rounded-full text-sm font-medium">
                    PCOD Specialist
                  </span>
                  <span className="px-4 py-2 bg-healing-mint text-healing-primary rounded-full text-sm font-medium">
                    Weight Management
                  </span>
                  <span className="px-4 py-2 bg-healing-mint text-healing-primary rounded-full text-sm font-medium">
                    Metabolic Health
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;