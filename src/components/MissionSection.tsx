const MissionSection = () => {
  const benefits = [
    "Heal from within",
    "Reverse lifestyle disorders naturally", 
    "Build a strong metabolic foundation",
    "Feel confident and energized every single day"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-healing-primary mb-8">
            🌱 Our Mission
          </h2>
          
          <motion.div 
            className="bg-gradient-soft p-8 rounded-3xl shadow-soft mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At <strong className="text-healing-primary">PHLOEM</strong>, we believe that health is not about quick fixes — 
              it's about <strong>nourishing your body, restoring balance, and building habits that last a lifetime</strong>.
            </p>
            
            <h3 className="text-2xl font-semibold text-healing-secondary mb-6">
              Our mission is to help you:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-white/80 p-4 rounded-xl shadow-soft"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-healing-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;