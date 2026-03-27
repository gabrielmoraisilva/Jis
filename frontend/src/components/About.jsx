import { Users, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Clientes Atendidos",
  },
  {
    icon: MapPin,
    number: "100 mil+",
    label: "M² Pavimentados",
  },
  {
    icon: Award,
    number: "20+",
    label: "Anos de Experiência",
  },
];

export const About = () => {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
              <span className="w-8 h-0.5 bg-orange-500" />
              <span className="text-sm font-bold uppercase tracking-widest">Sobre Nós</span>
            </div>

            {/* Title */}
            <h2
              data-testid="about-title"
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Construindo o Futuro com{" "}
              <span className="text-orange-500">Excelência</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p data-testid="about-description">
                A <strong className="text-slate-900">JIS Terraplanagem e Pavimentação Asfáltica LTDA</strong> é 
                especializada no planejamento, execução e acompanhamento de obras de infraestrutura, 
                atuando com excelência técnica, segurança e compromisso com prazos.
              </p>
              <p>
                Com raízes no Triângulo Mineiro, nossa empresa contribui para o desenvolvimento 
                socioeconômico da região, apoiando o crescimento do agronegócio e da logística regional.
              </p>
              <p>
                Contamos com equipe técnica qualificada e equipamentos modernos para entregar 
                soluções de alta qualidade, sempre respeitando as normas ambientais e de segurança.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Qualidade", "Segurança", "Pontualidade", "Sustentabilidade"].map((value) => (
                <span
                  key={value}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-sm text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-testid={`stat-${index}`}
                className="bg-slate-50 p-6 rounded-sm border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-10 h-10 text-orange-500 mb-4" strokeWidth={1.5} />
                <div
                  className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
