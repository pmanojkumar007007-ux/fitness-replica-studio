import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
             <a href="#/">
                <img src="/logo.png" alt="AZARAIAHZ Logo" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center" />
              </a>
            <div>
              <h1 className="text-xl font-bold text-primary">AZARAIAHZ</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Holistic Health • Transformation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
            <a href="#/" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#/approach" className="text-foreground hover:text-primary transition-colors">
              Our Approach
            </a>
            <a href="#/success-stories" className="text-foreground hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#/celebrity-impact" className="text-foreground hover:text-primary transition-colors">
              Celebrity Impact
            </a>
            <a href="#/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            
            <Button className="btn-primary" onClick={() => setIsContactModalOpen(true)}>
              GET STARTED
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#/approach" className="text-foreground hover:text-primary transition-colors">
                Our Approach
              </a>
              <a href="#/success-stories" className="text-foreground hover:text-primary transition-colors">
                Success Stories
              </a>
              <a href="#/celebrity-impact" className="text-foreground hover:text-primary transition-colors">
                Celebrity Impact
              </a>
              <a href="#/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="btn-primary w-full" onClick={() => setIsContactModalOpen(true)}>
                GET STARTED
              </Button>
            </div>
          </nav>
        )}

        {/* Contact Form Modal */}
        <ContactFormModal 
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;