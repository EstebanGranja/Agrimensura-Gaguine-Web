import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

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

      <footer className="bg-[#26240B] text-[#F2F1DF] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold text-lg mb-2">Agrimensura Gaguine</p>
          <p className="text-sm text-[#D9D8C7]">
            Córdoba, Argentina | 0351-4750563
          </p>
          <p className="text-sm text-[#D9D8C7] mt-2">
            Lunes a Sábado: 08:00 – 20:00 hs
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;
