import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="text-2xl font-bold gradient-text">
            BioBeauty
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('solutions')} className="nav-link">
              Solutions
            </button>
            <button onClick={() => scrollToSection('market')} className="nav-link">
              Market
            </button>
            <button onClick={() => scrollToSection('impact')} className="nav-link">
              Impact
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-hero hidden sm:inline-flex"
          >
            Partner with Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;