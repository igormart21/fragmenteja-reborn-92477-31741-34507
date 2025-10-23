import { useState } from "react";
import { Building2, Users, Award, Shield, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";

const EnterpriseServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "Atendimento Corporativo",
      description: "Soluções personalizadas para grandes corporações e empresas multinacionais",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Equipe Dedicada",
      description: "Profissionais especializados exclusivamente para sua empresa",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Certificações Premium",
      description: "Certificações ISO e conformidade total com regulamentações",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Protocolos de segurança de nível militar para dados sensíveis",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Atendimento ininterrupto para emergências e operações críticas",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: CheckCircle,
      title: "SLA Garantido",
      description: "Acordos de nível de serviço com penalidades por não cumprimento",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const enterpriseStats = [
    { value: "500+", label: "Empresas Atendidas", description: "Grandes corporações confiam em nós" },
    { value: "15+", label: "Anos de Experiência", description: "Expertise comprovada no mercado" },
    { value: "99.9%", label: "SLA Cumprido", description: "Garantia de excelência operacional" },
    { value: "24/7", label: "Suporte Disponível", description: "Atendimento ininterrupto" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-green-50/30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-6 py-3 mb-8 text-sm font-medium">
            <Building2 className="w-4 h-4" />
            Serviços Empresariais
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Soluções para <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Grandes Empresas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Atendemos <span className="text-blue-600 font-semibold">corporações de grande porte</span> com soluções personalizadas, 
            infraestrutura robusta e <span className="text-green-600 font-semibold">garantias de nível empresarial</span>.
          </p>
        </div>

        {/* Enterprise Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <div className="relative z-10">
              <img
                src="/ChatGPT Image Oct 23, 2025, 01_47_20 PM.png"
                alt="Frota empresarial Fragmentejá - Caminhão especializado"
                className="w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Frota</div>
                  <div className="text-xs text-gray-600">Empresarial</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10">
              <img
                src="/ChatGPT Image Oct 23, 2025, 02_08_13 PM.png"
                alt="Operação industrial Fragmentejá - Equipamentos de grande porte"
                className="w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Grande</div>
                  <div className="text-xs text-gray-600">Porte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enterprise Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {enterpriseStats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pronto para <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Grandes Desafios</span>?
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está preparada para atender suas necessidades corporativas 
            com soluções personalizadas e garantias de nível empresarial.
          </p>
          
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            Solicite Proposta Empresarial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
          </button>
          
          <p className="text-gray-600 text-sm mt-4">
            Consultoria especializada e proposta personalizada em até 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseServices;
