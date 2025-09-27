import { Mail, MapPin, Instagram, Globe } from 'lucide-react'; // Import icons from lucide-react
import { motion } from 'framer-motion'; // Import motion for animations

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "💬",
      label: "Email",
      value: "support@phloemhealth.com",
      link: "mailto:support@phloemhealth.com"
    },
    {
      icon: "📍",
      label: "Location", 
      value: "Kochi, Kerala, India",
      link: null
    },
    {
      icon: "📱",
      label: "Instagram",
      value: "@phloem.health",
      link: "https://instagram.com/phloem.health"
    },
    {
      icon: "🌐",
      label: "Website",
      value: "www.phloemhealth.com",
      link: "https://www.phloemhealth.com"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-healing-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              📞 Contact Us
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Ready to start your healing journey? Get in touch with us.
            </motion.p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-soft p-6 rounded-2xl shadow-soft hover:shadow-healing transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{info.icon}</div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-healing-primary hover:text-healing-secondary transition-colors duration-200 font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-healing-primary font-semibold">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Message */}
          <motion.div 
            className="bg-gradient-hero p-8 rounded-3xl shadow-healing text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">🧠 Your Healing Journey Starts Here</h3>
            <p className="text-xl text-white/90 italic max-w-2xl mx-auto">
              "Your body has the power to heal — it just needs the right support. 
              At PHLOEM, we're here to guide you every step of the way."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;