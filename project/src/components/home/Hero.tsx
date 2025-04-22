import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white mb-6 animate-fade-in">
            Le bois, notre passion
          </h1>
          <p className="text-xl md:text-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Créations de meubles sur mesure et éléments bois pour votre habitat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#services" className="btn-primary">
              Nos services
            </a>
            <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};