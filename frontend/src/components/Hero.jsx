import { ArrowRight, MessageCircle } from "lucide-react";

const HERO_BG = "https://customer-assets.emergentagent.com/job_jis-asfalto/artifacts/mahmypeo_Escavadeira%201%20%281%29.JPEG";
const WHATSAPP_NUMBER = "5534999291289";

export const Hero = () => {
  const handleQuoteClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para os serviços da JIS Terraplanagem. Por favor, entre em contato.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da JIS Terraplanagem.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-sm mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-wide">+15 Anos de Experiência</span>
          </div>

          {/* Title */}
          <h1
            data-testid="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-tight mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Soluções completas em{" "}
            <span className="text-orange-500">Terraplanagem</span> e{" "}
            <span className="text-orange-500">Pavimentação Asfáltica</span>
          </h1>

          {/* Subtitle */}
          <p
            data-testid="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Do preparo do solo ao asfalto final, entregamos obras que sustentam o progresso. 
            Excelência técnica, segurança e compromisso com prazos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              data-testid="hero-cta-quote"
              onClick={handleQuoteClick}
              className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              data-testid="hero-cta-whatsapp"
              onClick={handleWhatsAppClick}
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-slate-900 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
