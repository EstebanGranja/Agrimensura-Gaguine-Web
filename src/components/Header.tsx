import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

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
    <header className="bg-[#F2F1DF] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigate('inicio')}>
            <div className="w-10 h-10 rounded-full bg-[#26240B] flex items-center justify-center text-[#F2F1DF] font-bold text-lg">
              AG
            </div>
            <span className="font-bold text-[#26240B] text-lg hidden sm:block">
              Agrimensura Gaguine
            </span>
            <span className="font-bold text-[#26240B] text-sm sm:hidden">
              A. Gaguine
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
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

          <a
            href="https://wa.me/5493515407257"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#20BD5A] transition-all duration-300"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#26240B]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
