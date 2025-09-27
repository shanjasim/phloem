import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-healing-primary/80 via-healing-secondary/70 to-healing-accent/60"></div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Reclaim Your Health,{" "}
            <span className="text-healing-mint">Naturally</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Personalized diet, lifestyle, and wellness plans designed to reverse hormonal imbalance, 
            support weight goals, and improve metabolic health — all with the power of nutrition, 
            movement, and expert care.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-healing-primary hover:bg-healing-mint hover:text-healing-primary text-lg px-8 py-6 rounded-full shadow-healing transition-all duration-300 transform hover:scale-105"
            >
              Book Your Free Consultation Today
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;