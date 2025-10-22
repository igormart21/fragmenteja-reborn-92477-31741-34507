import { MapPin, Clock, Car, Building, Navigation } from "lucide-react";

const Location = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const locationInfo = [
    {
      icon: MapPin,
      title: "Endereço Completo",
      content: "Rua George Ohm, 206 Torre B\nCidade Monções - São Paulo/SP",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Car,
      title: "Estacionamento",
      content: "Vagas disponíveis para clientes\nFácil acesso de veículos",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Building,
      title: "Centro Empresarial",
      content: "Torre B - Sala 206\nAmbiente profissional e seguro",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-6 py-3 mb-8 text-sm font-medium">
            <Navigation className="w-4 h-4" />
            Nossa Localização
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Visite Nossa Sede
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Localizados estrategicamente em <span className="text-blue-600 font-semibold">Cidade Monções</span>, 
            oferecemos fácil acesso e infraestrutura completa para atender sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7644084937367!2d-46.68912892379453!3d-23.58871196224964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574d9f0f8c6f%3A0x2b0f6c3b3d3e6c6f!2sRua%20George%20Ohm%2C%20206%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Fragmentejá"
                  className="rounded-3xl"
                />
              </div>
              
              {/* Map Overlay */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fragmentejá</div>
                    <div className="text-xs text-gray-600">Sede Principal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Endereço Completo</h3>
                  <p className="text-gray-600">Nossa localização exata</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
                Rua George Ohm, 206 Torre B<br />
                Cidade Monções - São Paulo/SP<br />
                <span className="text-blue-600">CEP: 04576-080</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locationInfo.slice(1).map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-2 text-sm">{info.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-gray-900 font-bold mb-3">Agende uma Visita</h4>
              <p className="text-gray-600 text-sm mb-4">
                Venha conhecer nossa estrutura e conversar com nossa equipe especializada
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-6 py-3 text-gray-700 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Facilmente acessível por transporte público e particular</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;