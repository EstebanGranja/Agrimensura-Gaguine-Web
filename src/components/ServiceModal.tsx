import { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import whatsappLogo from '../public/images/whatsapp.png';
import { Service } from '../data/services';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);
  const fadeDurationMs = 180;
  const galleryImages = useMemo(
    () => Array.from(new Set(service.carouselImages.slice(1))),
    [service.carouselImages]
  );
  const hasGalleryImages = galleryImages.length > 0;
  const hasMultipleGalleryImages = galleryImages.length > 1;
  const displayedImage = hasGalleryImages ? galleryImages[currentImageIndex] : service.image;

  const clearTransitionTimeout = () => {
    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTransitionTimeout();
    };
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsModalVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY;

    const originalBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overscrollBehavior: body.style.overscrollBehavior
    };
    const originalHtmlOverscroll = html.style.overscrollBehavior;

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overscrollBehavior = 'none';
    html.style.overscrollBehavior = 'none';

    return () => {
      body.style.overflow = originalBodyStyles.overflow;
      body.style.position = originalBodyStyles.position;
      body.style.top = originalBodyStyles.top;
      body.style.width = originalBodyStyles.width;
      body.style.overscrollBehavior = originalBodyStyles.overscrollBehavior;
      html.style.overscrollBehavior = originalHtmlOverscroll;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    if (!isFullscreenOpen || !hasGalleryImages) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreenOpen(false);
        return;
      }

      if (event.key === 'ArrowRight' && hasMultipleGalleryImages) {
        const nextIndex =
          currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
        changeImage(nextIndex);
      }

      if (event.key === 'ArrowLeft' && hasMultipleGalleryImages) {
        const nextIndex =
          currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
        changeImage(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    isFullscreenOpen,
    currentImageIndex,
    galleryImages.length,
    hasGalleryImages,
    hasMultipleGalleryImages
  ]);

  useEffect(() => {
    if (!hasGalleryImages) {
      setCurrentImageIndex(0);
      setIsFullscreenOpen(false);
      return;
    }

    if (currentImageIndex > galleryImages.length - 1) {
      setCurrentImageIndex(0);
    }
  }, [hasGalleryImages, currentImageIndex, galleryImages.length]);

  const changeImage = (nextIndex: number) => {
    if (!hasGalleryImages) return;

    const normalizedIndex =
      ((nextIndex % galleryImages.length) + galleryImages.length) % galleryImages.length;

    if (normalizedIndex === currentImageIndex) return;

    clearTransitionTimeout();
    setIsImageVisible(false);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setCurrentImageIndex(normalizedIndex);
      setIsImageVisible(true);
    }, fadeDurationMs);
  };

  const nextImage = () => {
    if (!hasGalleryImages) return;

    const nextIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(nextIndex);
  };

  const prevImage = () => {
    if (!hasGalleryImages) return;

    const nextIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    changeImage(nextIndex);
  };

  const goToImage = (index: number) => {
    changeImage(index);
  };

  const openFullscreen = (index?: number) => {
    if (!hasGalleryImages) return;

    if (typeof index === 'number' && index !== currentImageIndex) {
      setCurrentImageIndex(index);
      setIsImageVisible(true);
    }
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  const whatsappMessage = `Hola, quiero consultar sobre el servicio de ${service.name}`;
  const whatsappUrl = `https://wa.me/3517160164?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className={`fixed inset-x-0 top-0 h-[100dvh] bg-black flex items-center justify-center z-50 p-4 overflow-y-auto overscroll-y-contain transition-opacity duration-300 ease-out motion-reduce:transition-none ${
        isModalVisible ? 'bg-opacity-60 opacity-100' : 'bg-opacity-0 opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#F2F1DF] rounded-lg max-w-4xl w-full max-h-[90dvh] overflow-y-auto my-8 transform-gpu transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isModalVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.985]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="mb-6 md:max-w-2xl md:mx-auto">
            <div className="relative bg-[#F2F1DF] rounded-md overflow-visible">
              {hasGalleryImages ? (
                <button
                  type="button"
                  onClick={() => openFullscreen()}
                  className="w-full focus:outline-none"
                  aria-label={`Abrir ${service.name} en pantalla completa`}
                >
                  <img
                    src={displayedImage}
                    alt={`${service.name} ${currentImageIndex + 1}`}
                    className={`w-full h-60 md:h-72 object-contain rounded-md transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none opacity-95 cursor-zoom-in ${
                      isImageVisible && isModalVisible
                        ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                        : 'opacity-0 translate-x-2 translate-y-1 scale-[1.015]'
                    }`}
                  />
                </button>
              ) : (
                <img
                  src={displayedImage}
                  alt={`${service.name} icono`}
                  className={`w-full h-60 md:h-72 object-contain rounded-md transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none opacity-95 ${
                    isImageVisible && isModalVisible
                      ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                      : 'opacity-0 translate-x-2 translate-y-1 scale-[1.015]'
                  }`}
                />
              )}

              {hasMultipleGalleryImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-[#26240B] bg-opacity-70 text-[#F2F1DF] p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-[#26240B] bg-opacity-70 text-[#F2F1DF] p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {hasMultipleGalleryImages && (
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                    className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'border-[#26240B] ring-1 ring-[#26240B]/30'
                        : 'border-[#D9D8C7] hover:border-[#26240B]/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.name} miniatura ${index + 1}`}
                      className="w-full h-full object-cover opacity-95"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-[#26240B] text-2xl mb-4 relative inline-block">
              {service.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#26240B] to-[#D9D8C7]" />
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

      {isFullscreenOpen && hasGalleryImages && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 p-3 sm:p-6 overflow-hidden overscroll-none"
          onClick={(event) => {
            event.stopPropagation();
            closeFullscreen();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Vista completa de ${service.name}`}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeFullscreen}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#F2F1DF] text-[#26240B] p-2 rounded-full hover:scale-105 transition-all duration-200 z-10"
              aria-label="Cerrar imagen"
            >
              <X size={24} />
            </button>

            {hasMultipleGalleryImages && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-[#F2F1DF]/90 text-[#26240B] p-2 sm:p-3 rounded-full hover:bg-[#F2F1DF] transition-all duration-200"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={26} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-[#F2F1DF]/90 text-[#26240B] p-2 sm:p-3 rounded-full hover:bg-[#F2F1DF] transition-all duration-200"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}

            <img
              src={displayedImage}
              alt={`${service.name} en pantalla completa ${currentImageIndex + 1}`}
              className="max-w-[94vw] max-h-[88dvh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
