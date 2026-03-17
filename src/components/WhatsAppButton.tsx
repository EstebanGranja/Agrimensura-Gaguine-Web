import whatsappLogo from '../public/images/whatsapp.png';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493515407257"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:hidden w-14 h-14 bg-[#1DA851] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#178C41] transition-all duration-300 hover:scale-110 z-40"
      aria-label="WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-7 h-7" />
    </a>
  );
}
