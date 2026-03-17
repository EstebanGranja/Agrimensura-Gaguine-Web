import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493515407257"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:hidden w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 z-40"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
