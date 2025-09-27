import { motion } from 'framer-motion';

const ProblemSection = () => {
  const statistics = [
    { stat: "1 in 8", description: "people are now living with obesity" },
    { stat: "40%", description: "of adults are trying to lose weight but struggling" },
    { stat: "50%", description: "of adults may have fatty liver or metabolic dysfunction" },
    { stat: "10%", description: "of women are silently battling PCOS" },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-healing-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The Global Health Crisis
          </motion.h2>
          
          <motion.div 
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-healing-secondary mb-6">
              Why PHLOEM Exists
            </h3>
            <p className="mb-6">
              The world is facing a silent epidemic.
            </p>
          </motion.div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {statistics.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-healing transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="text-4xl font-bold text-healing-primary mb-3">
                  {item.stat}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-healing max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              These conditions don't just affect the body — they impact <strong>confidence, energy, fertility, and mental well-being</strong>.
              And the root cause? <em>Lifestyle, nutrition, and hormonal imbalance.</em>
            </p>
            
            <div className="bg-gradient-hero p-6 rounded-2xl text-white">
              <p className="text-xl font-semibold mb-2">
                But here's the good news — every single one of these conditions can be <strong>improved or reversed</strong> with the right care.
              </p>
              <p className="text-lg">
                That's where <strong>PHLOEM</strong> comes in.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;