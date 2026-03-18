import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import logo from './public/images/logo.png';

const pageToPath = {
  inicio: '/',
  servicios: '/servicios',
  nosotros: '/nosotros',
  contacto: '/contacto'
} as const;

const pathToPage: Record<string, keyof typeof pageToPath> = {
  '/': 'inicio',
  '/servicios': 'servicios',
  '/nosotros': 'nosotros',
  '/contacto': 'contacto'
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = pathToPage[location.pathname] ?? 'inicio';

  const handleNavigate = (page: string) => {
    const targetPath = pageToPath[page as keyof typeof pageToPath];
    if (!targetPath || targetPath === location.pathname) return;

    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    document.title = `${pageTitle} - Agrimensura Gaguine`;
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#F2F1DF]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="transition-opacity duration-300 opacity-100">
        <Routes>
          <Route path="/" element={<Inicio onNavigate={handleNavigate} />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="bg-[#26240B] text-[#F2F1DF] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center text-center gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center gap-1.5 md:flex-row md:items-center md:gap-3 md:text-left md:pl-6 lg:pl-10">
              <img
                src={logo}
                alt="Logo Agrimensura Gaguine"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex flex-col items-center md:items-start leading-none md:leading-tight">
                <p className="font-semibold text-lg md:mt-0.5">Agrimensura Gaguine</p>
                <p className="text-sm md:text-xs text-[#D9D8C7]">Córdoba, Argentina</p>
                <p className="text-sm md:text-xs text-[#D9D8C7]">0351-4750563</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:pr-6 lg:pr-10">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#F2F1DF] hover:text-[#D9D8C7] transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#F2F1DF] hover:text-[#D9D8C7] transition-colors duration-300"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;
