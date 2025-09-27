import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/assets/WhatsApp.png';

const WhatsAppFloatingButton: React.FC = () => {
  const whatsappNumber = "9645589165";
  const genericMessage = encodeURIComponent("Hello, I'd like to chat about your services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${genericMessage}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Button
        className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg flex items-center justify-center p-0"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" className="w-10 h-10" />
      </Button>
    </motion.div>
  );
};

export default WhatsAppFloatingButton;
