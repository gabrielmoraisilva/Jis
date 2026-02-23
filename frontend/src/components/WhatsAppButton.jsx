import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5534999291289";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da JIS Terraplanagem.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      data-testid="whatsapp-float-button"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Abrir WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Icon */}
      <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" strokeWidth={0} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;
