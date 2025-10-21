import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp, Award, Shield, Leaf } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const certifications = [
    { icon: Award, text: "ISO 14001" },
    { icon: Shield, text: "LGPD Compliance" },
    { icon: Leaf, text: "Certificação Ambiental" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Fragmentejá
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Soluções seguras e sustentáveis para fragmentação de documentos,
                descarte de resíduos e transporte especializado. Líder de mercado com mais de 15 anos de experiência.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                      <Icon className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{cert.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Siga-nos</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/fragmenteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/fragmenteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fragmenteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Processo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511970894455" 
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    (11) 97089-4455
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">E-mail</p>
                  <a 
                    href="mailto:contato@fragmenteja.com.br"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    contato@fragmenteja.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Endereço</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rua George Ohm, 206 Torre B<br />
                    Cidade Monções - SP
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Fragmentejá. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                CNPJ: XX.XXX.XXX/0001-XX | Desenvolvido com ❤️ para o meio ambiente
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;