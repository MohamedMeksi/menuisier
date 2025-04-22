import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Propriétaire",
    content: "Un travail exceptionnel pour notre bibliothèque sur mesure. L'équipe a su parfaitement comprendre nos besoins et le résultat dépasse nos attentes.",
    rating: 5
  },
  {
    name: "Pierre Martin",
    role: "Architecte d'intérieur",
    content: "Je collabore régulièrement avec ArtBois pour mes projets. Leur expertise et leur professionnalisme sont remarquables.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "Cliente particulière",
    content: "La rénovation de notre escalier ancien a été réalisée avec un grand souci du détail. Un véritable savoir-faire artisanal.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Témoignages Clients</h2>
          <p className="text-lg text-gray-600">
            Découvrez ce que nos clients disent de notre travail et de notre service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote size={40} className="text-primary-300 mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent-700 text-accent-700" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold text-primary-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};