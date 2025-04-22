import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">Contactez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Une question ? Un projet ? N'hésitez pas à nous contacter pour en discuter.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Téléphone</h4>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-600">contact@artbois.fr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Adresse</h4>
                  <p className="text-gray-600">12 rue du Bois, 75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Horaires</h4>
                  <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                  <p className="text-gray-600">Sam: 10h-16h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Demander un devis</h3>

              <div className="mt-8 pt-6 border-t">
                <a
                  href="https://wa.me/2126433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Contacter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};