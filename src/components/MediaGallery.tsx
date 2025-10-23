import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play, Pause } from "lucide-react";

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaItems = [
    {
      id: 1,
      type: "image",
      src: "/PHOTO-2025-10-23-09-52-15.jpg",
      alt: "Processo de fragmentação industrial - Equipe trabalhando com documentos",
      title: "Processamento Industrial",
      description: "Nossa equipe especializada trabalhando no processamento seguro de documentos com equipamentos de proteção individual (EPIs) completos."
    },
    {
      id: 2,
      type: "image", 
      src: "/PHOTO-2025-10-23-09-53-51.jpg",
      alt: "Material já processado e fragmentado",
      title: "Material Processado",
      description: "Material já processado e fragmentado, pronto para reciclagem sustentável e destinação final."
    },
    {
      id: 3,
      type: "image",
      src: "/PHOTO-2025-10-23-09-57-51.jpg", 
      alt: "Manuseio seguro de materiais",
      title: "Manuseio Seguro",
      description: "Processamento cuidadoso e seguro de materiais diversos em ambiente controlado com equipamentos de proteção."
    },
    {
      id: 4,
      type: "image",
      src: "/PHOTO-2025-10-23-10-02-05.jpg",
      alt: "Processo de triagem e separação de materiais",
      title: "Triagem de Materiais", 
      description: "Processo de triagem e separação manual de materiais para garantir a qualidade da reciclagem."
    },
    {
      id: 5,
      type: "video",
      src: "/VIDEO-2025-10-23-09-47-53.mp4",
      alt: "Vídeo do processo de fragmentação industrial",
      title: "Processo em Ação",
      description: "Veja nosso processo de fragmentação industrial em funcionamento - tecnologia de ponta em ação."
    },
    {
      id: 6,
      type: "video",
      src: "/VIDEO-2025-10-23-15-34-38.mp4", 
      alt: "Vídeo da operação de reciclagem",
      title: "Operação de Reciclagem",
      description: "Demonstração completa do nosso processo de reciclagem sustentável e gestão de resíduos."
    }
  ];

  const nextMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((prev) => (prev! + 1) % mediaItems.length);
    }
  };

  const prevMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((prev) => (prev! - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  const toggleVideoPlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="media-gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-green-50/30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-6 py-3 mb-8 text-sm font-medium">
            <Play className="w-4 h-4" />
            Galeria de Mídia
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nosso <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Processo</span> em Ação
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça de perto como trabalhamos: desde a coleta até a reciclagem final, 
            com <span className="text-blue-600 font-semibold">segurança, tecnologia e sustentabilidade</span>.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedMedia(index)}
            >
              {/* Media Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    muted
                    loop
                    preload="metadata"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Play/View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    {item.type === "video" ? (
                      <Play className="w-8 h-8 text-white" />
                    ) : (
                      <ZoomIn className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Video Badge */}
                {item.type === "video" && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    VÍDEO
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Toneladas Processadas/Mês</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Monitoramento Contínuo</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Reciclagem Garantida</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedMedia(null);
                setIsPlaying(false);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <div className="rounded-2xl aspect-video overflow-hidden">
              {mediaItems[selectedMedia].type === "image" ? (
                <img
                  src={mediaItems[selectedMedia].src}
                  alt={mediaItems[selectedMedia].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={mediaItems[selectedMedia].src}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay={isPlaying}
                  muted
                />
              )}
            </div>

            {/* Media Info */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {mediaItems[selectedMedia].title}
              </h3>
              <p className="text-gray-300">
                {mediaItems[selectedMedia].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;
