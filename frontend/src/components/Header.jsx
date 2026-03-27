import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_8c9eed70-9cde-464b-9d25-e788e71c6da2/artifacts/5psnjy7o_Logo%20JIS%20%281%29.jpg.jpeg";
const WHATSAPP_NUMBER = "5534999128938";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para os serviços da JIS Terraplanagem. Por favor, entre em contato.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            data-testid="header-logo"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
          >
            <img
              src={LOGO_URL}
              alt="JIS Terraplanagem"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              JIS TERRAPLANAGEM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className="text-white hover:text-orange-500 font-medium transition-colors uppercase text-sm tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            data-testid="header-cta"
            onClick={handleQuoteClick}
            className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 rounded-sm transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30"
          >
            <Phone className="w-4 h-4" />
            Solicitar Orçamento
          </button>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={`lg:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              className="text-white hover:text-orange-500 font-medium transition-colors uppercase text-sm tracking-wide py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            data-testid="mobile-header-cta"
            onClick={handleQuoteClick}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 rounded-sm transition-all mt-2"
          >
            <Phone className="w-4 h-4" />
            Solicitar Orçamento
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
