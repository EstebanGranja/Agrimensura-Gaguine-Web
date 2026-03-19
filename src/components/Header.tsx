import { useState } from 'react';
import logo from '../public/images/logo.jpeg';
import { Menu, X } from 'lucide-react';
import whatsappLogo from '../public/images/whatsapp.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#E2E1CF] shadow-sm sticky top-0 z-50 relative overflow-hidden">
      {/* Gradiente sutil desde la mitad hacia la derecha */}
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, transparent 50%, #B3B2A3 100%)',
          opacity: 0.32
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex items-center h-20 sm:h-24">
          <div className="flex items-center gap-3 sm:gap-6 -ml-2 sm:-ml-2 md:-ml-8 lg:-ml-16 cursor-pointer z-10" onClick={() => handleNavigate('inicio')}>
            <img src={logo} alt="Logo Agrimensura Gaguine" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full object-cover bg-[#E2E1CF]" />
            <span
              className="text-[#26240B] text-base sm:text-lg lg:text-xl mt-1 sm:mt-0 uppercase tracking-[0.04em] sm:tracking-[0.08em] leading-tight whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Agrimensura Gaguine
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-base sm:text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="relative text-[#26240B] font-medium transition-all duration-300 group"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#26240B] to-[#D9D8C7] transition-all duration-300 ${
                    currentPage === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Contenedor absoluto a la derecha para WhatsApp y menú móvil */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
            <a
              href="https://wa.me/3517160164"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#1DA851] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#178C41] transition-all duration-300"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#26240B]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <nav className="py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-[#D9D8C7] text-[#26240B]'
                    : 'text-[#26240B] hover:bg-[#D9D8C7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
