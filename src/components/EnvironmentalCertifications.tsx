import { useState, useEffect } from "react";
import { Award, Shield, CheckCircle } from "lucide-react";

const EnvironmentalCertifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("environmental-certifications");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const certifications = [
    {
      name: "AMLURB",
      fullName: "Autoridade Municipal de Limpeza Urbana",
      logo: "/logos/amlurb.png",
      hasRealLogo: true
    },
    {
      name: "ANTT",
      fullName: "Agência Nacional de Transportes Terrestres",
      logo: "/logos/antt.png",
      hasRealLogo: true
    },
    {
      name: "CETESB",
      fullName: "Companhia Ambiental do Estado de São Paulo",
      logo: "/logos/cetesb.png",
      hasRealLogo: true
    },
    {
      name: "IBAMA",
      fullName: "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
      logo: "/logos/ibama.png",
      hasRealLogo: true
    }
  ];

  return (
    <section 
      id="environmental-certifications"
      className="py-16 md:py-20 bg-[#F4F1E8] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Certificações Ambientais
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Processo Recomendado pelos <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Órgãos Ambientais</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Todo o nosso processo é aprovado, licenciado e autorizado pelos principais órgãos ambientais do Brasil, garantindo conformidade total com a legislação vigente.
            </p>
          </div>

          {/* Logos Section */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="group flex flex-col items-center p-6 bg-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                    {cert.hasRealLogo ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 text-center">
                    {cert.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 text-center leading-tight">
                    {cert.fullName}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CADRI Certificate */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                CADRI
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Certificado de Movimentação de Resíduos de Interesse Ambiental
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Documento oficial que comprova nossa capacidade técnica e ambiental para o transporte e destinação adequada de resíduos.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-700 font-medium">Conformidade Ambiental</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-700 font-medium">Anos de Licenciamento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                4
              </div>
              <div className="text-gray-700 font-medium">Órgãos Certificadores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalCertifications;
