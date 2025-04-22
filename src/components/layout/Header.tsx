import React, { useState, useEffect } from 'react';
import { Save as Saw, X, Menu } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Saw 
            size={32} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`} 
          />
          <span 
            className={`font-serif font-bold text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-primary-800' : 'text-white'
            }`}
          >
            ArtBois
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Accueil', 'Services', 'Réalisations', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Devis gratuit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X 
              size={24} 
              className={isScrolled ? 'text-primary-800' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={24} 
              className={isScrolled ? 'text-primary-800' : 'text-white'} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            {['Accueil', 'Services', 'Réalisations', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium py-2 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Devis gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};