import { useEffect } from 'react';
import campoBg from '../public/images/campo.jpeg';
import { ArrowRight } from 'lucide-react';
import logo from '../public/images/logo.png';

interface InicioProps {
  onNavigate: (page: string) => void;
}

export default function Inicio({ onNavigate }: InicioProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#26240B]">
      <section className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center mb-[-1px] md:mb-0">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${campoBg})`,
            }}
        >
          <div className="absolute inset-0 bg-[#26240B] bg-opacity-75" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#26240B]" />
          <div className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-[#26240B] md:hidden" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 text-center">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2F1DF] mb-6 tracking-wide
              static sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:-top-10 sm:w-full">
              AGRIMENSURA GAGUINE
            </h1>
            <div className="pt-0 sm:pt-10">
              <p className="text-lg sm:text-xl text-[#F2F1DF] mb-4 leading-relaxed max-w-3xl mx-auto">
                Brindamos soluciones integrales en Agrimensura para particulares, empresas y organismos públicos en toda la provincia de Córdoba.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-16">
                <button
                  onClick={() => onNavigate('servicios')}
                  className="bg-[#E2E1CF] text-[#26240B] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#F2F1DF] hover:text-[#26240B] transition-all duration-300 transform hover:scale-105 border-2 border-[#26240B] w-auto min-w-[12rem] flex items-center justify-center gap-2 self-center sm:self-auto"
                >
                  <span>Ver Servicios</span>
                  <ArrowRight size={22} className="text-black" />
                </button>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="border-2 border-[#F2F1DF] text-[#F2F1DF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F2F1DF] hover:text-[#26240B] transition-all duration-300 transform hover:scale-105 w-auto self-center sm:self-auto"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#26240B] pt-8 md:pt-12 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="bg-[#D9D8C7] rounded-xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xl lg:max-w-[560px]">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl font-bold text-[#26240B] text-center pb-1">
                Últimas publicaciones
              </h3>
              <div className="w-44 h-px bg-gradient-to-r from-transparent via-[#26240B]/70 to-transparent"></div>
            </div>

            <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 mb-3 shadow-sm">
              <a
                href="https://instagram.com/agrimensuragaguine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={logo}
                  alt="Perfil de Instagram Agrimensura Gaguine"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-[#D9D8C7]"
                />
                <div className="text-left leading-tight">
                  <p className="text-[#26240B] text-xs sm:text-sm font-semibold">
                    Agrimensura Gaguine
                  </p>
                  <p className="text-[#4B492D] text-[11px] sm:text-xs">
                    @agrimensuragaguine
                  </p>
                </div>
              </a>
            </div>

            <iframe
              src="https://snapwidget.com/embed/1122390"
              className="snapwidget-widget"
              allowTransparency={true}
              sandbox="allow-scripts allow-same-origin"
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden', width: '100%' }}
              title="Posts from Instagram"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
