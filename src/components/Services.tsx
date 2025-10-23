import { FileX, TruckIcon, Trash2, Award, Shield, Leaf, Clock, Users, Shirt, Monitor, Megaphone, CreditCard, Smartphone } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const services = [
    {
      icon: FileX,
      title: "Descarte de Documentos",
      description: "Processamento completo de documentos sigilosos, contratos, relatórios e papéis diversos, garantindo destruição segura e reciclagem sustentável.",
      features: ["Fragmentação industrial", "Certificação de destruição", "Reciclagem completa"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shirt,
      title: "Descarte de Uniformes e EPIs",
      description: "Coleta e processamento especializado de uniformes corporativos, equipamentos de proteção individual (EPIs) e roupas de trabalho usadas.",
      features: ["Processamento especializado", "Destinação sustentável", "Certificação ambiental"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Monitor,
      title: "Descarte de Equipamentos",
      description: "Reciclagem segura de equipamentos de escritório, mobiliário corporativo, máquinas e dispositivos diversos com certificação ambiental.",
      features: ["Desmontagem especializada", "Reciclagem de componentes", "Certificação de descarte"],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Megaphone,
      title: "Descarte de Material Promocional",
      description: "Processamento de banners, folhetos, cartazes, displays e materiais promocionais diversos com destinação ambientalmente correta.",
      features: ["Materiais diversos", "Processamento sustentável", "Certificação de reciclagem"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: CreditCard,
      title: "Descarte de Crachás e Cartões",
      description: "Destruição segura de crachás de funcionários, cartões de acesso, cartões de crédito corporativos e identificações diversas.",
      features: ["Destruição segura", "Proteção de dados", "Certificação de destruição"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Smartphone,
      title: "Descarte de Eletrônicos",
      description: "Reciclagem especializada de computadores, celulares, tablets, impressoras e equipamentos eletrônicos diversos com certificação ambiental.",
      features: ["Reciclagem especializada", "Certificação ambiental", "Destinação sustentável"],
      color: "from-indigo-500 to-blue-600"
    },
  ];

  const benefits = [
    { icon: Shield, text: "100% Seguro e Certificado" },
    { icon: Leaf, text: "Sustentável e Ecológico" },
    { icon: Clock, text: "Atendimento 24/7" },
    { icon: Users, text: "Equipe Especializada" },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 px-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-xs md:text-sm font-medium">
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            Soluções Premium
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de <span className="text-blue-600 font-semibold">reciclagem sustentável</span> e gestão de resíduos para empresas de todos os portes, 
            garantindo <span className="text-green-600 font-semibold">sustentabilidade, segurança e conformidade ambiental</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 shadow-lg"
              >
                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 md:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
                      <span className="text-gray-600 text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mx-4 shadow-lg">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
              Por que escolher a <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Fragmentejá</span>?
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Diferenciais que fazem a diferença no seu negócio
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-gray-900 font-medium text-sm md:text-base">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <div className="inline-flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group w-full md:w-auto"
            >
              Solicite Seu Orçamento
              <div className="w-2 h-2 bg-white rounded-full ml-2 group-hover:animate-pulse inline-block" />
            </button>
            <p className="text-gray-600 text-xs md:text-sm">
              Atendimento especializado e consultoria gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;