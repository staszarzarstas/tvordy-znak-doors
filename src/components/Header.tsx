
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-charcoal shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gold">Твердый знак</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gold transition-colors duration-300 font-medium text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-white hover:text-gold transition-colors duration-300 font-medium text-left"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-white hover:text-gold transition-colors duration-300 font-medium text-left"
              >
                Контакты
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
