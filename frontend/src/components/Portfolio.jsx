import { MapPin, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Execução SJ-0010",
    location: "Santa Juliana/MG",
    description: "Terraplanagem e preparação do terreno para pavimentação asfáltica.",
    image: "https://images.unsplash.com/photo-1761504537447-e39a3085d697?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHw0fHxoZWF2eSUyMG1hY2hpbmVyeSUyMGV4Y2F2YXRvciUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8fHwxNzcxODg0ODMyfDA&ixlib=rb-4.1.0&q=85",
    category: "Terraplanagem",
  },
  {
    title: "Pavimentação Viária",
    location: "Santa Juliana/MG",
    description: "Pavimentação asfáltica e sinalização viária completa.",
    image: "https://images.pexels.com/photos/12274274/pexels-photo-12274274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Pavimentação",
  },
  {
    title: "Implantação de Barragens",
    location: "Triângulo Mineiro",
    description: "Construção de reservatórios para irrigação e controle de cheias.",
    image: "https://images.unsplash.com/photo-1759950345011-ee5a96640e00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGV4Y2F2YXRvciUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8fHwxNzcxODg0ODMyfDA&ixlib=rb-4.1.0&q=85",
    category: "Barragens",
  },
  {
    title: "Terraplanagem para Loteamentos",
    location: "Região do Triângulo",
    description: "Preparação de terrenos para loteamentos residenciais e comerciais.",
    image: "https://images.unsplash.com/photo-1768117269305-58ad768e423e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGV4Y2F2YXRvciUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8fHwxNzcxODg0ODMyfDA&ixlib=rb-4.1.0&q=85",
    category: "Terraplanagem",
  },
];

export const Portfolio = () => {
  return (
    <section
      id="obras"
      data-testid="portfolio-section"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest">Nosso Portfólio</span>
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          
          <h2
            data-testid="portfolio-title"
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Obras <span className="text-orange-500">Realizadas</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que executamos com excelência e compromisso.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-testid={`portfolio-item-${index}`}
              className="group relative rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3
                    className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-orange-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-orange-500 p-2 rounded-sm">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
