import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/27000000000";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 animate-pulse-gentle"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export { WHATSAPP_URL };
export default WhatsAppButton;
