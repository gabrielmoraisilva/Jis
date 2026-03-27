import { useState } from "react";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const WHATSAPP_NUMBER = "5534999128938";

const services = [
  "Topografia",
  "Terraplanagem",
  "Pavimentação Asfáltica",
  "Barragens e Piscinões",
  "Fiscalização de Obra",
  "Outros",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(34) 9 9912-8938",
    href: "tel:+5534999291289",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "jis.terraplanagem@outlook.com",
    href: "mailto:jis.terraplanagem@outlook.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jis_servicos",
    href: "https://instagram.com/jis_servicos",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Ênio Gonçalves, 226 - Santa Juliana, MG",
    href: "https://maps.google.com/?q=Av.+Ênio+Gonçalves,+226+-+Santa+Juliana,+MG",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.service) newErrors.service = "Selecione um serviço";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.

*Serviço desejado:* ${formData.service}

*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}

${formData.message ? `*Mensagem:*\n${formData.message}` : ""}

Gostaria de mais informações e um orçamento. Aguardo retorno!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contato"
      data-testid="contact-section"
      className="py-16 md:py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            <span className="text-sm font-bold uppercase tracking-widest">Contato</span>
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          
          <h2
            data-testid="contact-title"
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3
              className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Informações de Contato
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white rounded-sm shadow-sm border border-slate-100 hover:border-orange-500/30 transition-colors"
                >
                  <div className="bg-orange-500/10 p-3 rounded-sm">
                    <item.icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-900 font-medium hover:text-orange-500 transition-colors"
                        data-testid={`contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-slate-200 rounded-sm h-48 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5!2d-47.5294!3d-19.3103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzM3LjEiUyA0N8KwMzEnNDUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização JIS Terraplanagem"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg border-t-4 border-orange-500">
            <h3
              className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Solicite um Orçamento
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-slate-700 font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  data-testid="contact-name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Seu nome"
                  className={`mt-1 rounded-sm ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-slate-700 font-medium">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  data-testid="contact-phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(00) 0 0000-0000"
                  className={`mt-1 rounded-sm ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  data-testid="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  className={`mt-1 rounded-sm ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Service Select */}
              <div>
                <Label htmlFor="service" className="text-slate-700 font-medium">
                  Serviço Desejado *
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger
                    id="service"
                    data-testid="contact-service"
                    className={`mt-1 rounded-sm ${errors.service ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-slate-700 font-medium">
                  Mensagem (opcional)
                </Label>
                <Textarea
                  id="message"
                  data-testid="contact-message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Descreva sua necessidade..."
                  rows={4}
                  className="mt-1 rounded-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-testid="contact-submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
