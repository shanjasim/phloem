import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import WhatsAppFormFields, { ConsultationFormData, consultationSchema } from '@/components/WhatsAppFormFields';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // New state for dialog visibility
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema) // Use schema from WhatsAppFormFields
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    const whatsappNumber = "9250346889";
    const message = `Hello Phloem,\nMy name is ${data.fullName}.\nMy WhatsApp number is ${data.whatsapp}.\nMy primary health concern is ${data.healthConcern}.\nI would like to book a free consultation.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');

    toast({
      title: "Redirecting to WhatsApp! 🚀",
      description: "A pre-filled message will open in WhatsApp. Please send it to book your consultation.",
      duration: 5000,
    });
    
    reset();
    setIsSubmitting(false);
    setShowDialog(false); // Close dialog after submission
  };

  return (
    <motion.section 
      id="consultation-form" 
      className="py-20 bg-gradient-hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-12 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              📞 Get Your Free Consultation via WhatsApp
            </h2>
            <p className="text-xl text-white/90">
              Click the button below to pre-fill a message and connect with our team on WhatsApp within 24 hours.
            </p>
          </motion.div>

          <motion.div 
            className="glassmorphism p-8 rounded-3xl shadow-healing border-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <WhatsAppFormFields
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        </div>
      </div>

      {/* Removed AnimatePresence and motion.div around DialogContent for debugging */}
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[425px] glassmorphism border-none shadow-healing-glass rounded-xl p-6">
            <DialogHeader>
              <DialogTitle className="text-white text-2xl font-bold">Quick Consultation via WhatsApp</DialogTitle>
              <DialogDescription className="text-white/80">
                Fill out your details to connect with us instantly on WhatsApp.
              </DialogDescription>
            </DialogHeader>
            <WhatsAppFormFields
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
            />
          </DialogContent>
        </Dialog>
      )}
    </motion.section>
  );
};

export default ConsultationForm;
