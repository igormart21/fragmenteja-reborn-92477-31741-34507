import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Shield, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Criar email com os dados do formulário
    const serviceNames = {
      'descarte-documentos': 'Descarte de Documentos',
      'descarte-uniformes-epis': 'Descarte de Uniformes e EPIs',
      'descarte-equipamentos': 'Descarte de Equipamentos',
      'descarte-material-promocional': 'Descarte de Material Promocional',
      'descarte-crachas-cartoes': 'Descarte de Crachás e Cartões',
      'descarte-eletronicos': 'Descarte de Eletrônicos',
      'outros': 'Outros'
    };

    const serviceDisplayName = serviceNames[formData.service as keyof typeof serviceNames] || formData.service;
    
    const subject = `Solicitação de Orçamento - ${serviceDisplayName}`;
    const body = `Nome: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${serviceDisplayName}
Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}

---
Enviado através do formulário do site Fragmentejá.`;
    
    const mailtoLink = `mailto:contato@fragmenteja.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Múltiplas tentativas para garantir que funcione
    const openEmailClient = () => {
      // Tentativa 1: Criar elemento <a> temporário
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.target = '_blank';
      tempLink.rel = 'noopener noreferrer';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    };

    // Tentativa 2: window.location.href
    const openWithLocation = () => {
      window.location.href = mailtoLink;
    };

    // Tentativa 3: window.open
    const openWithWindow = () => {
      window.open(mailtoLink, '_blank');
    };

    // Executar tentativas sequenciais
    try {
      openEmailClient();
    } catch (error1) {
      try {
        openWithLocation();
      } catch (error2) {
        try {
          openWithWindow();
        } catch (error3) {
          // Último recurso: mostrar link para copiar
          navigator.clipboard.writeText(mailtoLink).then(() => {
            toast({
              title: "Link copiado",
              description: "Cole o link no seu cliente de email: " + mailtoLink,
              variant: "default",
            });
          }).catch(() => {
            toast({
              title: "Erro ao abrir email",
              description: "Por favor, envie um email manual para: contato@fragmenteja.com.br",
              variant: "destructive",
            });
          });
        }
      }
    }

    toast({
      title: "Abrindo cliente de email",
      description: "Seu cliente de email deve abrir automaticamente.",
    });

    // Limpar formulário após um delay
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(11) 97089-4455",
      link: "https://wa.me/5511970894455",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@fragmenteja.com.br",
      link: "mailto:contato@fragmenteja.com.br",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua George Ohm, 206 Torre B\nCidade Monções - SP",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const benefits = [
    { icon: Clock, text: "Resposta em até 2 horas" },
    { icon: Shield, text: "Dados protegidos e seguros" },
    { icon: CheckCircle, text: "Orçamento sem compromisso" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <MessageCircle className="w-4 h-4" />
            Entre em Contato
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Solicite Seu Orçamento
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato e descubra como podemos ajudar sua empresa com 
            <span className="font-semibold text-blue-600"> soluções seguras e sustentáveis</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Fale <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Conosco</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-base">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line text-sm">{info.content}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Por que nos escolher?</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicite seu Orçamento</h3>
              <p className="text-gray-600">Preencha o formulário e entraremos em contato em breve</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Nome *"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Sobrenome *"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  placeholder="Telefone *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                  required
                >
                  <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Escolher serviço *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="descarte-documentos">Descarte de Documentos</SelectItem>
                    <SelectItem value="descarte-uniformes-epis">Descarte de Uniformes e EPIs</SelectItem>
                    <SelectItem value="descarte-equipamentos">Descarte de Equipamentos</SelectItem>
                    <SelectItem value="descarte-material-promocional">Descarte de Material Promocional</SelectItem>
                    <SelectItem value="descarte-crachas-cartoes">Descarte de Crachás e Cartões</SelectItem>
                    <SelectItem value="descarte-eletronicos">Descarte de Eletrônicos</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <textarea
                  placeholder="Mensagem adicional (opcional)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit" 
                size="lg" 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Solicitação
              </Button>
              
              {/* Botão alternativo para copiar link do email */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full mt-3 h-10 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
                onClick={() => {
                  const serviceNames = {
                    'descarte-documentos': 'Descarte de Documentos',
                    'descarte-uniformes-epis': 'Descarte de Uniformes e EPIs',
                    'descarte-equipamentos': 'Descarte de Equipamentos',
                    'descarte-material-promocional': 'Descarte de Material Promocional',
                    'descarte-crachas-cartoes': 'Descarte de Crachás e Cartões',
                    'descarte-eletronicos': 'Descarte de Eletrônicos',
                    'outros': 'Outros'
                  };
                  
                  const serviceDisplayName = serviceNames[formData.service as keyof typeof serviceNames] || formData.service;
                  const subject = `Solicitação de Orçamento - ${serviceDisplayName}`;
                  const body = `Nome: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${serviceDisplayName}
Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}

---
Enviado através do formulário do site Fragmentejá.`;
                  
                  const mailtoLink = `mailto:contato@fragmenteja.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  
                  navigator.clipboard.writeText(mailtoLink).then(() => {
                    toast({
                      title: "Link copiado!",
                      description: "Cole o link no seu cliente de email ou navegador.",
                      variant: "default",
                    });
                  }).catch(() => {
                    toast({
                      title: "Erro ao copiar",
                      description: "Por favor, envie um email manual para: contato@fragmenteja.com.br",
                      variant: "destructive",
                    });
                  });
                }}
              >
                📋 Copiar Link do Email
              </Button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Seus dados estão protegidos e serão utilizados apenas para contato comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;