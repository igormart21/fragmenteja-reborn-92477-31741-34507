import whatsappIcon from "@/assets/whatsapp-float.webp";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "5511970894455";
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar um orçamento para serviços de fragmentação."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 md:w-14 md:h-14 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-10 right-0 bg-foreground text-background px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale no WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
