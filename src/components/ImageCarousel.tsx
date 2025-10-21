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
    { id: 1, src: sulamerica, alt: "SulAmérica" },
    { id: 2, src: aquamec, alt: "Aquamec" },
    { id: 3, src: bancoBrasil, alt: "Banco do Brasil" },
    { id: 4, src: maplebear, alt: "MapleBear" },
    { id: 5, src: zurich, alt: "Zurich Seguros" },
    { id: 6, src: petrobras, alt: "Petrobras" },
    { id: 7, src: gerdau, alt: "Gerdau" },
    { id: 8, src: goodstorage, alt: "GoodStorage" },
    { id: 9, src: portoSeguro, alt: "Porto Seguro" },
    { id: 10, src: gafisa, alt: "Gafisa" },
    { id: 11, src: bancoPan, alt: "Banco Pan" },
    { id: 12, src: itauSeguros, alt: "Itaú Seguros" },
    { id: 13, src: drogariaSp, alt: "Drogaria São Paulo" },
    { id: 14, src: brainlab, alt: "BrainLAB" },
    { id: 15, src: tecnisa, alt: "Tecnisa" },
    { id: 16, src: transmar, alt: "Transmar" },
    { id: 17, src: apae, alt: "APAE São Paulo" },
    { id: 18, src: durr, alt: "Dürr" },
    { id: 19, src: flamafer, alt: "Flamafer" },
    { id: 20, src: embraco, alt: "Embraco" },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 animate-fade-in">
          <h2 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-sm text-muted-foreground">
            Parceiros que confiam na nossa excelência
          </p>
        </div>

        <div className="carousel-container">
          <ul className="carousel">
            {duplicatedImages.map((image, index) => (
              <li key={`${image.id}-${index}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: transparent;
        }

        .carousel {
          display: flex;
          gap: 80px;
          list-style: none;
          padding: 0;
          margin: 0;
          animation: scroll 25s linear infinite;
        }

        .carousel li {
          flex: 0 0 auto;
          transition: opacity 0.3s ease;
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
      `}</style>
    </section>
  );
};

export default ImageCarousel;
