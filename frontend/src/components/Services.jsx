import { Compass, Mountain, Route, Droplets, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5534999291289";

const services = [
  {
    icon: Compass,
    title: "Topografia",
    description: "Levantamentos planialtimétricos com alta precisão para projetos de engenharia e execução de obras.",
    image: "https://images.unsplash.com/photo-1709330181144-c7e6f518cb88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxyb2FkJTIwcGF2aW5nJTIwYXNwaGFsdCUyMHJvbGxlciUyMHN1cnZleW9yJTIwdG9wb2dyYXBoeSUyMGRhbSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NzE4ODQ4NDF8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Mountain,
    title: "Terraplanagem",
    description: "Corte, aterro, nivelamento e compactação de solos. Preparação de terrenos para obras civis e loteamentos.",
    image: "https://images.unsplash.com/photo-1770175960229-dd21e8cf950a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGV4Y2F2YXRvciUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8fHwxNzcxODg0ODMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Route,
    title: "Pavimentação Asfáltica",
    description: "Implantação e manutenção de vias urbanas e rurais. Acessos industriais, pátios e loteamentos.",
    image: "https://images.pexels.com/photos/34338544/pexels-photo-34338544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Droplets,
    title: "Barragens e Piscinões",
    description: "Execução de barragens para controle de cheias, irrigação e armazenamento de água para o agronegócio.",
    image: "https://images.unsplash.com/photo-1634580871198-88ac1fec9114?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxyb2FkJTIwcGF2aW5nJTIwYXNwaGFsdCUyMHJvbGxlciUyMHN1cnZleW9yJTIwdG9wb2dyYXBoeSUyMGRhbSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NzE4ODQ4NDF8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const Services = () => {
  const handleServiceClick = (serviceName) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para o serviço de ${serviceName}. Por favor, entre em contato com mais detalhes.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="servicos"
      data-testid="services-section"
      className="py-16 md:py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest">Nossos Serviços</span>
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          
          <h2
            data-testid="services-title"
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Soluções Completas em{" "}
            <span className="text-orange-500">Infraestrutura</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades em obras de infraestrutura.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-testid={`service-card-${index}`}
              className="group bg-white rounded-sm shadow-md border-t-4 border-orange-500 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <service.icon
                  className="absolute bottom-4 left-4 w-12 h-12 text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  data-testid={`service-cta-${index}`}
                  onClick={() => handleServiceClick(service.title)}
                  className="group/btn inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold uppercase text-sm tracking-wide transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
