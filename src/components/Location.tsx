import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nossa Localização
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
            <MapPin className="w-6 h-6 text-primary" />
            <p>
              Rua George Ohm, 206 Torre B<br />
              Cidade Monções - SP
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7644084937367!2d-46.68912892379453!3d-23.58871196224964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574d9f0f8c6f%3A0x2b0f6c3b3d3e6c6f!2sRua%20George%20Ohm%2C%20206%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Fragmentejá"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
