import { useState, useEffect } from "react";

const Stats = () => {
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

    const element = document.getElementById("stats");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "500+",
      label: "Empresas Atendidas",
      description: "Clientes corporativos satisfeitos",
    },
    {
      number: "2M+",
      label: "Documentos Processados",
      description: "Líder em destruição segura de materiais",
    },
    {
      number: "99.9%",
      label: "Taxa de Satisfação",
      description: "Clientes recomendam nossos serviços",
    },
    {
      number: "24/7",
      label: "Suporte Disponível",
      description: "Atendimento especializado",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Números que Impressionam
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa excelência refletida em resultados concretos e clientes satisfeitos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 group-hover:scale-105 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {isVisible ? stat.number : "0"}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-900">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
