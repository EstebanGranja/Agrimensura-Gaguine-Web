interface InicioProps {
  onNavigate: (page: string) => void;
}

export default function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-[#26240B] bg-opacity-65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2F1DF] mb-6 tracking-wide">
          AGRIMENSURA GAGUINE
        </h1>

        <p className="text-lg sm:text-xl text-[#F2F1DF] mb-4 leading-relaxed max-w-3xl mx-auto">
          Brindamos soluciones integrales en Agrimensura para particulares, empresas y organismos públicos en toda la provincia de Córdoba.
        </p>

        <div className="mb-8">
          <span className="text-[#F2F1DF] text-lg">
            Nos encontramos en{' '}
          </span>
          <a
            href="https://maps.google.com/?q=Cordoba,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2F1DF] text-lg font-bold underline hover:text-[#D9D8C7] transition-colors duration-300"
          >
            Córdoba, Argentina
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('servicios')}
            className="bg-[#26240B] text-[#F2F1DF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0D0D0D] transition-all duration-300 transform hover:scale-105"
          >
            Ver Servicios
          </button>
          <button
            onClick={() => onNavigate('contacto')}
            className="border-2 border-[#F2F1DF] text-[#F2F1DF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F2F1DF] hover:text-[#26240B] transition-all duration-300 transform hover:scale-105"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
}
