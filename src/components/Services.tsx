import { FileX, TruckIcon, Trash2, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileX,
      title: "Destruição de Documentos Sigilosos",
      description:
        "Garantimos a destruição segura e completa de documentos confidenciais, protegendo as informações sensíveis da sua empresa contra acessos não autorizados.",
    },
    {
      icon: Trash2,
      title: "Destruição de Documentos Prescritos",
      description:
        "Eliminamos documentos prescritos que ocupam espaço desnecessário, liberando ambiente de trabalho e reduzindo custos de armazenagem.",
    },
    {
      icon: Award,
      title: "Consultoria em Gestão de Documentos",
      description:
        "Orientamos sua empresa na organização, classificação e destinação adequada de documentos, garantindo conformidade legal e segurança da informação.",
    },
    {
      icon: TruckIcon,
      title: "Armazenamento Temporário de Documentos",
      description:
        "Oferecemos soluções seguras de armazenamento temporário para documentos que precisam ser mantidos por período determinado antes do descarte.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas e personalizadas para atender as necessidades da
            sua empresa com segurança, sustentabilidade e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 border-2 hover:border-primary animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
