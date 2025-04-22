import React from 'react';
import { Save as Saw, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Saw size={32} />
              <span className="font-serif font-bold text-2xl">ArtBois</span>
            </div>
            <p className="text-primary-100 mb-6">
              Créations de meubles en bois sur mesure et éléments bois pour l'habitat depuis 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>12 rue du Bois, 75001 Paris, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>contact@artbois.fr</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-4">Horaires</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Lundi - Vendredi</p>
                  <p className="text-primary-200">9h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Samedi</p>
                  <p className="text-primary-200">10h - 16h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Dimanche</p>
                  <p className="text-primary-200">Fermé</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'Réalisations', 'Contact', 'Mentions légales', 'Politique de confidentialité'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <hr className="border-primary-700 my-8" />
        
        <div className="text-center text-primary-300">
          <p>&copy; {currentYear} ArtBois. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};