import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Shield, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fragmentação e transporte sustentável"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 text-center py-8 md:py-12">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-[1.1] tracking-normal px-3">
            <span className="block">Descarte</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Inteligente
            </span>
            <span className="block text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light">
              de Documentos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Soluções corporativas premium de fragmentação e transporte com 
            <span className="text-white font-medium"> certificação ambiental</span>. 
            Protegemos suas informações e o meio ambiente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 group shadow-2xl w-full sm:w-auto"
            >
              Solicite Coleta Agora
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça os Serviços
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 md:mb-3 border border-white/20">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-xs sm:text-sm">100% Seguro</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Proteção total de dados confidenciais</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 md:mb-3 border border-white/20">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-xs sm:text-sm">Sustentável</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Certificação ambiental completa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 md:mb-3 border border-white/20">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-xs sm:text-sm">Conformidade</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Conformidade total com LGPD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const element = document.getElementById("about");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-light tracking-widest">SCROLL</span>
          <ChevronDown size={24} className="text-white/60 group-hover:text-white transition-colors animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;