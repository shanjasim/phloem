import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Book a Free Consultation",
      description: "Share your details with us below."
    },
    {
      number: "2", 
      title: "Get Your Health Analysis",
      description: "We assess your current condition, goals, and challenges."
    },
    {
      number: "3",
      title: "Start Your Custom Plan",
      description: "Receive a tailored diet & lifestyle blueprint."
    },
    {
      number: "4",
      title: "Track & Transform",
      description: "Ongoing support, progress tracking, and expert mentoring."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-healing-primary mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Simple Steps to Transform Your Health
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-healing transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-healing-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-healing-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-healing-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;