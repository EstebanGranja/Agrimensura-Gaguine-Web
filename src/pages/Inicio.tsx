import campoBg from '../public/images/campo.jpeg';
import { ArrowRight } from 'lucide-react';

interface InicioProps {
  onNavigate: (page: string) => void;
}

export default function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center">
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${campoBg})`,
          }}
      >
        <div className="absolute inset-0 bg-[#26240B] bg-opacity-80" />
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
    </div>
  );
}
