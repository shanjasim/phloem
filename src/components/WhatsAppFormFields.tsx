import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch, UseFormHandleSubmit } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

export const consultationSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  whatsapp: z.string()
    .trim()
    .min(10, { message: "Please enter a valid WhatsApp number" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[+]?[\d\s-()]+$/, { message: "Invalid phone number format" }),
  healthConcern: z.string()
    .min(1, { message: "Please select your primary health concern" })
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

interface WhatsAppFormFieldsProps {
  register: UseFormRegister<ConsultationFormData>;
  errors: FieldErrors<ConsultationFormData>;
  setValue: UseFormSetValue<ConsultationFormData>;
  watch: UseFormWatch<ConsultationFormData>;
  handleSubmit: UseFormHandleSubmit<ConsultationFormData>;
  onSubmit: (data: ConsultationFormData) => Promise<void>;
  isSubmitting: boolean;
}

const WhatsAppFormFields: React.FC<WhatsAppFormFieldsProps> = ({
  register,
  errors,
  setValue,
  watch,
  handleSubmit,
  onSubmit,
  isSubmitting,
}) => {
  const healthConcernValue = watch('healthConcern');

  const healthConcerns = [
    'PCOD',
    'Thyroid',
    'Weight Loss', 
    'Weight Gain',
    'Diabetes',
    'Others'
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-gray-900 font-medium">
          Full Name *
        </Label>
        <Input
          id="fullName"
          {...register('fullName')}
          placeholder="Enter your full name"
          className="border-healing-mint focus:border-healing-primary focus:ring-healing-primary/20"
        />
        {errors.fullName && (
          <p className="text-destructive text-sm">{errors.fullName.message}</p>
        )}
      </div>

      {/* WhatsApp Number */}
      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="text-gray-900 font-medium">
          WhatsApp Number *
        </Label>
        <Input
          id="whatsapp"
          {...register('whatsapp')}
          placeholder="Enter your WhatsApp number"
          className="border-healing-mint focus:border-healing-primary focus:ring-healing-primary/20"
        />
        {errors.whatsapp && (
          <p className="text-destructive text-sm">{errors.whatsapp.message}</p>
        )}
      </div>

      {/* Health Concern */}
      <div className="space-y-2">
        <Label className="text-gray-900 font-medium">
          Primary Health Concern *
        </Label>
        <Select 
          value={healthConcernValue} 
          onValueChange={(value) => setValue('healthConcern', value)}
        >
          <SelectTrigger className="border-healing-mint focus:border-healing-primary focus:ring-healing-primary/20">
            <SelectValue placeholder="Select your primary health concern" />
          </SelectTrigger>
          <SelectContent>
            {healthConcerns.map((concern) => (
              <SelectItem key={concern} value={concern}>
                {concern}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.healthConcern && (
          <p className="text-destructive text-sm">{errors.healthConcern.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-healing-primary hover:bg-healing-secondary text-white py-6 text-lg font-semibold rounded-xl shadow-healing transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-70"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Opening WhatsApp...
          </div>
        ) : (
          '💬 Chat with us on WhatsApp'
        )}
      </Button>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>🔒 Your information is secure and confidential</p>
      </div>
    </form>
  );
};

export default WhatsAppFormFields;
