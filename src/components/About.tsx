import { Shield, Leaf, Truck, FileCheck, Award, Users, Clock, Globe } from "lucide-react";
// import aboutTruck from "@/assets/about-truck.png";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Reciclagem completa de materiais diversos com destino certificado",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Segurança Certificada",
      description: "Processamento seguro de documentos e materiais sensíveis",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Truck,
      title: "Frota Própria",
      description: "Coleta e transporte especializado com rastreabilidade total",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: FileCheck,
      title: "Certificação",
      description: "Emissão de certificados de reciclagem e destinação final",
      color: "from-orange-500 to-red-600"
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Empresas Atendidas" },
    { icon: Clock, value: "15+", label: "Anos de Experiência" },
    { icon: Globe, value: "Brasil", label: "Cobertura Nacional" },
    { icon: Award, value: "ISO", label: "Certificações" },
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-gradient-to-b from-green-50 to-green-100/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-green-50/30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              Líder de Mercado
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
              Líder em <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Reciclagem</span> e Gestão Sustentável
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Com mais de <span className="font-semibold text-blue-600">15 anos de experiência</span>, a Fragmentejá é referência 
              em soluções corporativas de <span className="font-semibold text-green-600">reciclagem sustentável</span> e gestão de resíduos, 
              atendendo empresas de todos os portes em todo o Brasil.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Contribuímos efetivamente para a preservação do meio ambiente e para o bem-estar social. 
              Oferecemos serviços completos de <span className="font-semibold text-blue-600">reciclagem de materiais diversos</span>, 
              processamento de documentos e gestão sustentável de resíduos, garantindo segurança total e conformidade ambiental.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 h-full">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/caminhao-fragmenteja.jpg"
                alt="Caminhão Fragmentejá"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 blur-xl" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Sustentável</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;