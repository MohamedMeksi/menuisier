import React from 'react';

const projects = [
  {
    image: "https://images.pexels.com/photos/6958526/pexels-photo-6958526.jpeg",
    title: "Bibliothèque sur mesure",
    category: "Meuble",
    description: "Bibliothèque en chêne massif avec échelle coulissante"
  },
  {
    image: "https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg",
    title: "Escalier hélicoïdal",
    category: "Agencement",
    description: "Escalier en hêtre avec garde-corps en verre"
  },
  {
    image: "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg",
    title: "Cuisine intégrée",
    category: "Aménagement",
    description: "Cuisine complète en noyer avec îlot central"
  },
  {
    image: "https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg",
    title: "Dressing moderne",
    category: "Rangement",
    description: "Dressing sur mesure en chêne blanchi"
  }
];

export const Portfolio = () => {
  return (
    <section id="realisations" className="section-padding bg-tan-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Nos Réalisations</h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques-unes de nos créations récentes, alliant esthétique et fonctionnalité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary-200 mb-2">{project.category}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};