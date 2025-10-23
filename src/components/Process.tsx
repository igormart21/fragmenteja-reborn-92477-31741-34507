import { CheckCircle, Truck, Shield, Recycle, FileCheck } from "lucide-react";

const Process = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const steps = [
    {
      icon: CheckCircle,
      title: "Solicitação",
      description: "Entre em contato conosco através dos nossos canais oficiais",
      detail: "Atendimento personalizado e consultoria gratuita"
    },
    {
      icon: Truck,
      title: "Coleta",
      description: "Nossa equipe especializada coleta materiais diversos no local",
      detail: "Frota própria com rastreamento em tempo real"
    },
    {
      icon: Shield,
      title: "Processamento",
      description: "Processamento seguro e especializado de documentos e materiais diversos, com equipamentos industriais de alta tecnologia.",
      detail: "Processamos cerca de 100 toneladas por dia, garantindo total sigilo e sustentabilidade."
    },
    {
      icon: Recycle,
      title: "Reciclagem",
      description: "Reciclagem completa e destinação ambientalmente correta dos materiais",
      detail: "Certificação ISO 14001 e licenciamento ambiental"
    },
    {
      icon: FileCheck,
      title: "Certificação",
      description: "Emissão de certificado de reciclagem e destinação final",
      detail: "Comprovante legal para auditoria e conformidade ambiental"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Processo de <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Reciclagem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia comprovada garante reciclagem sustentável, segurança e eficiência em cada etapa do processo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Process Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-30" />
              
              <div className="flex items-start justify-between relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex flex-col items-center relative flex-1">
                      {/* Step Circle */}
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl group hover:scale-110 transition-transform duration-300 relative z-10">
                        <Icon className="w-12 h-12 text-white" />
                      </div>

                      {/* Step Content */}
                      <div className="text-center max-w-48">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {step.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div 
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <CheckCircle className="w-5 h-5" />
            Solicite Seu Orçamento
            <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
