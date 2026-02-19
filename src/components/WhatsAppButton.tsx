import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/34611658382"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
  >
    <MessageCircle size={32} fill="white" strokeWidth={0} />
  </a>
);

export default WhatsAppButton;
