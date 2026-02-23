import { Truck, HardHat, Cog, Ruler } from "lucide-react";

const equipment = [
  {
    icon: HardHat,
    name: "Escavadeiras Hidráulicas",
    description: "Máquinas de alta potência para escavação e movimentação de terra.",
  },
  {
    icon: Truck,
    name: "Motoniveladoras",
    description: "Equipamentos para nivelamento preciso de terrenos e estradas.",
  },
  {
    icon: Cog,
    name: "Rolos Compactadores",
    description: "Compactação eficiente de solo e asfalto para obras duráveis.",
  },
  {
    icon: Truck,
    name: "Caminhões Basculantes",
    description: "Transporte de grande volume de materiais em obras.",
  },
  {
    icon: Ruler,
    name: "RTK e Estação Total",
    description: "Equipamentos de topografia com precisão milimétrica.",
  },
  {
    icon: HardHat,
    name: "Tratores de Esteira",
    description: "Máquinas robustas para trabalhos pesados de terraplanagem.",
  },
];

export const Equipment = () => {
  return (
    <section
      id="equipamentos"
      data-testid="equipment-section"
      className="py-16 md:py-24 bg-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest">Nossa Frota</span>
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          
          <h2
            data-testid="equipment-title"
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Equipamentos <span className="text-orange-500">Modernos</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Contamos com uma frota completa e moderna para atender projetos de qualquer porte.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div
              key={item.name}
              data-testid={`equipment-item-${index}`}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-sm p-6 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-sm group-hover:bg-orange-500/20 transition-colors">
                  <item.icon className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-white mb-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Precisa de equipamentos específicos para sua obra?
          </p>
          <a
            href="#contato"
            data-testid="equipment-cta"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
