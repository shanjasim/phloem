import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ConsultationForm from "@/components/ConsultationForm";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <ConsultationForm />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
