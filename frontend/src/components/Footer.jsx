import { Phone, Mail, Instagram, MapPin, ChevronUp } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_8c9eed70-9cde-464b-9d25-e788e71c6da2/artifacts/5psnjy7o_Logo%20JIS%20%281%29.jpg.jpeg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  "Topografia",
  "Terraplanagem",
  "Pavimentação Asfáltica",
  "Barragens e Piscinões",
  "Fiscalização de Obra",
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="JIS Terraplanagem"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span
                className="font-bold text-lg"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                JIS TERRAPLANAGEM
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Soluções completas em terraplanagem e pavimentação asfáltica. 
              Excelência técnica, segurança e compromisso com prazos.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/jis_servicos"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="bg-slate-800 hover:bg-orange-500 p-2 rounded-sm transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-lg uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-lg uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-bold text-lg uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+5534999128938" className="hover:text-orange-500 transition-colors">
                  (34) 9 9912-8938
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:jis.terraplanagem@outlook.com" className="hover:text-orange-500 transition-colors">
                  jis.terraplanagem@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Instagram className="w-4 h-4 text-orange-500" />
                <a 
                  href="https://instagram.com/jis_servicos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  @jis_servicos
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Triângulo Mineiro, MG</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} JIS Terraplanagem e Pavimentação Asfáltica LTDA. Todos os direitos reservados.
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            data-testid="back-to-top"
            className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors text-sm"
          >
            Voltar ao topo
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
