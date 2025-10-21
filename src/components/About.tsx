import { Shield, Leaf, Truck, FileCheck } from "lucide-react";
import aboutTruck from "@/assets/about-truck.png";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente e destino certificado",
    },
    {
      icon: Shield,
      title: "Segurança Certificada",
      description: "Proteção total de dados sensíveis e conformidade LGPD",
    },
    {
      icon: Truck,
      title: "Frota Própria",
      description: "Transporte especializado e rastreável em tempo real",
    },
    {
      icon: FileCheck,
      title: "Certificação",
      description: "Emissão de certificados de descarte e destinação final",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Sobre a Fragmentejá
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bem-vindo à Fragmentejá. Contribuímos efetivamente para a preservação do meio ambiente e para o bem-estar social. Prestamos serviços voltados para a destruição de documentos sigilosos ou já prescritos, que ocupam espaço nos escritórios, geram custos de armazenagem e dificultam o acesso aos documentos ativos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esses documentos frequentemente contêm informações confidenciais, que não podem ser descartadas nos sistemas tradicionais de coleta de lixo devido aos riscos envolvidos.
              </p>
            </div>
            <div className="animate-slide-up">
              <img 
                src={aboutTruck} 
                alt="Caminhão Fragmentejá - Serviço de coleta e fragmentação de documentos" 
                className="w-full h-auto rounded-xl shadow-hover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
