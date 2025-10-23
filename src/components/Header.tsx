import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import recyclingSymbol from "/png-transparent-recycling-symbol-others-recycling-logo-waste-removebg-preview.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Processo", id: "process" },
    { label: "Galeria", id: "media-gallery" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 97089-4455</span>
              </div>
              <div className="hidden md:block">|</div>
              <div className="hidden md:block">
                Atendimento 24/7 para emergências
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/fragmenteja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/fragmenteja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/fragmenteja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:opacity-80 transition-opacity group flex items-center gap-3"
              aria-label="Fragmentejá - Página Inicial"
            >
              <img 
                src={recyclingSymbol} 
                alt="Símbolo de Reciclagem" 
                className="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12"
              />
              <img 
                src={logo} 
                alt="Fragmentejá - Fragmentação de documentos" 
                className="h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? "text-gray-700 hover:text-blue-600" 
                    : "text-white hover:text-blue-200"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection("contact")} 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Solicite Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={() => scrollToSection("contact")} 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicite Orçamento
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;