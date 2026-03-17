import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import whatsappLogo from '../public/images/whatsapp.png';
import { Service } from '../data/services';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === service.carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? service.carouselImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const whatsappMessage = `Hola, quiero consultar sobre el servicio de ${service.name}`;
  const whatsappUrl = `https://wa.me/5493515407257?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F2F1DF] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#F2F1DF] z-10 p-4 border-b border-[#D9D8C7] flex justify-between items-center">
          <h2 className="font-bold text-[#26240B] text-xl">
            {service.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#D9D8C7] rounded-full transition-all duration-300"
          >
            <X size={24} className="text-[#26240B]" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative mb-6 bg-[#D9D8C7] rounded-lg overflow-hidden">
            <img
              src={service.carouselImages[currentImageIndex]}
              alt={`${service.name} ${currentImageIndex + 1}`}
              className="w-full h-64 md:h-96 object-cover"
            />

            {service.carouselImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#26240B] bg-opacity-70 text-[#F2F1DF] p-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#26240B] bg-opacity-70 text-[#F2F1DF] p-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {service.carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-[#F2F1DF] w-6'
                          : 'bg-[#F2F1DF] bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-[#26240B] text-2xl mb-4 relative inline-block">
              {service.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#26240B] to-[#D9D8C7]" />
            </h3>
            <p className="text-[#26240B] leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1DA851] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#178C41] transition-all duration-300"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
              Consultar
            </a>
            <button
              onClick={onClose}
              className="border-2 border-[#26240B] text-[#26240B] px-6 py-3 rounded-lg font-medium hover:bg-[#D9D8C7] transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
