import { useState, useEffect } from 'react';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    document.title = `${pageTitle} - Agrimensura Gaguine`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio onNavigate={handleNavigate} />;
      case 'servicios':
        return <Servicios />;
      case 'nosotros':
        return <Nosotros />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F1DF]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
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
