import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/phloem-logo.png" 
              alt="PHLOEM Health & Wellness" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              Why PHLOEM
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              Our Expert
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-healing-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToForm}
              className="bg-healing-primary text-primary-foreground hover:bg-healing-secondary transition-all duration-300 px-6"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                Why PHLOEM
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                Our Expert
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-healing-primary transition-colors py-2"
              >
                Contact
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-healing-primary text-primary-foreground hover:bg-healing-secondary transition-all duration-300 w-full mt-4"
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;