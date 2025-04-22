import React from 'react';
import { Hammer, Ruler, PaintBucket, Wrench } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Fabrication sur mesure',
    description: 'Création de meubles uniques selon vos besoins et votre espace, du design à la réalisation.'
  },
  {
    icon: PaintBucket,
    title: 'Rénovation',
    description: 'Restauration et rénovation de meubles anciens, portes, fenêtres et autres éléments en bois.'
  },
  {
    icon: Ruler,
    title: 'Agencement',
    description: 'Conception et installation de solutions d\'aménagement sur mesure pour optimiser votre espace.'
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Pose professionnelle de tous types d\'éléments en bois : portes, fenêtres, escaliers, parquets.'
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600">
            De la conception à la réalisation, nous vous accompagnons dans tous vos projets bois.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};