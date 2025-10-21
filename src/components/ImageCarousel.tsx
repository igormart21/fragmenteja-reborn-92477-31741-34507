import { Award, Building2 } from "lucide-react";

// Import client logos
import sulamerica from "@/assets/clientes/sulamerica.png";
import aquamec from "@/assets/clientes/aquamec.png";
import bancoBrasil from "@/assets/clientes/banco-brasil.png";
import maplebear from "@/assets/clientes/maplebear.png";
import zurich from "@/assets/clientes/zurich.png";
import petrobras from "@/assets/clientes/petrobras.png";
import gerdau from "@/assets/clientes/gerdau.png";
import goodstorage from "@/assets/clientes/goodstorage.png";
import portoSeguro from "@/assets/clientes/porto-seguro.png";
import gafisa from "@/assets/clientes/gafisa.png";
import bancoPan from "@/assets/clientes/banco-pan.png";
import itauSeguros from "@/assets/clientes/itau-seguros.png";
import drogariaSp from "@/assets/clientes/drogaria-sp.png";
import brainlab from "@/assets/clientes/brainlab.png";
import tecnisa from "@/assets/clientes/tecnisa.png";
import transmar from "@/assets/clientes/transmar.png";
import apae from "@/assets/clientes/apae.png";
import durr from "@/assets/clientes/durr.png";
import flamafer from "@/assets/clientes/flamafer.png";
import embraco from "@/assets/clientes/embraco.png";

const ImageCarousel = () => {
  const images = [
    { id: 1, src: sulamerica, alt: "SulAmérica", category: "Seguros" },
    { id: 2, src: aquamec, alt: "Aquamec", category: "Tecnologia" },
    { id: 3, src: bancoBrasil, alt: "Banco do Brasil", category: "Bancário" },
    { id: 4, src: maplebear, alt: "MapleBear", category: "Educação" },
    { id: 5, src: zurich, alt: "Zurich Seguros", category: "Seguros" },
    { id: 6, src: petrobras, alt: "Petrobras", category: "Energia" },
    { id: 7, src: gerdau, alt: "Gerdau", category: "Siderurgia" },
    { id: 8, src: goodstorage, alt: "GoodStorage", category: "Logística" },
    { id: 9, src: portoSeguro, alt: "Porto Seguro", category: "Seguros" },
    { id: 10, src: gafisa, alt: "Gafisa", category: "Construção" },
    { id: 11, src: bancoPan, alt: "Banco Pan", category: "Bancário" },
    { id: 12, src: itauSeguros, alt: "Itaú Seguros", category: "Seguros" },
    { id: 13, src: drogariaSp, alt: "Drogaria São Paulo", category: "Farmácia" },
    { id: 14, src: brainlab, alt: "BrainLAB", category: "Tecnologia" },
    { id: 15, src: tecnisa, alt: "Tecnisa", category: "Construção" },
    { id: 16, src: transmar, alt: "Transmar", category: "Logística" },
    { id: 17, src: apae, alt: "APAE São Paulo", category: "Social" },
    { id: 18, src: durr, alt: "Dürr", category: "Tecnologia" },
    { id: 19, src: flamafer, alt: "Flamafer", category: "Indústria" },
    { id: 20, src: embraco, alt: "Embraco", category: "Tecnologia" },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  const categories = [...new Set(images.map(img => img.category))];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Building2 className="w-4 h-4" />
            Parceiros de Confiança
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Empresas que <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Confiam</span> em Nosso Trabalho
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de <span className="font-semibold text-blue-600">500 empresas</span> de diversos setores 
            confiam na nossa excelência e qualidade de serviço
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="carousel-container">
            <div className="carousel">
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="carousel-item group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-12 md:h-16 w-auto object-contain mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-600 font-medium">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-600 font-medium">Setores Diferentes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfação</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Certificação de Confiança</div>
                <div className="text-sm text-gray-600">Empresas líderes de mercado nos escolhem</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: transparent;
        }

        .carousel {
          display: flex;
          gap: 32px;
          animation: scroll 40s linear infinite;
          width: calc(200% + 32px);
        }

        .carousel-item {
          flex: 0 0 200px;
          transition: all 0.3s ease;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .carousel:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .carousel-item {
            flex: 0 0 150px;
          }
          .carousel {
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;