
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import ContactCard from '../components/ContactCard';
import whatsappLogo from '../public/images/whatsapp.png';
import logo from '../public/images/logo.png';

export default function Contacto() {
  // Cargar SnapWidget script solo una vez
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // Widget SnapWidget 2x2 proporcionado por el usuario

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '0351-4750563'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+54 9 351 716-0164',
      link: 'https://wa.me/3517160164',
      external: true
    },
    {
      icon: Mail,
      label: 'Correo',
      value: 'cesargaguine@hotmail.com',
      link: 'mailto:cesargaguine@hotmail.com'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Córdoba, Argentina',
      link: 'https://maps.google.com/?q=Cordoba,+Argentina',
      external: true
    },
    {
      icon: Clock,
      label: 'Horarios de Atención',
      value: 'Lunes a Sábado: 08:00 – 20:00 hs'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@agrimensuragaguine',
      iconColor: '#E4405F',
      link: 'https://instagram.com/agrimensuragaguine',
      external: true
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Gaguine Agrimensura',
      iconColor: '#1877F2',
      link: 'https://www.facebook.com/profile.php?id=100023081305087',
      external: true
    }
  ];

  const primaryContactInfo = contactInfo.slice(0, 5);
  const socialContactInfo = contactInfo.slice(5);

  return (
    <div className="min-h-screen bg-[#F2F1DF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26240B] mb-6">
            Contacto
          </h1>
          <p className="text-[#26240B] text-lg mb-8">
            Estamos disponibles para responder tus consultas
          </p>
          <a
            href="https://wa.me/3517160164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1DA851] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#178C41] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {primaryContactInfo.map((info, index) => (
            <div
              key={info.label}
              className={`lg:col-span-2 ${
                index === 3 ? 'lg:col-start-2' : index === 4 ? 'lg:col-start-4' : ''
              }`}
            >
              <ContactCard
                icon={info.icon}
                label={info.label}
                value={info.value}
                link={info.link}
                external={info.external}
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#26240B] text-center mb-6">
            Seguinos en redes
          </h2>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,510px)] lg:items-start lg:gap-5 lg:max-w-[920px] lg:mx-auto lg:justify-center">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:w-full">
              {socialContactInfo.map((info) => (
                <ContactCard
                  key={info.label}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                  link={info.link}
                  external={info.external}
                  compact
                  iconColor={info.iconColor}
                />
              ))}
            </div>

            <section className="w-full flex justify-center lg:justify-start">
              <div className="bg-[#D9D8C7] rounded-xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xl lg:max-w-[510px]">
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

                {/* SnapWidget */}
                <iframe
                  src="https://snapwidget.com/embed/1122390"
                  className="snapwidget-widget"
                  allowTransparency={true}
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: 'none', overflow: 'hidden', width: '100%' }}
                  title="Posts from Instagram"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
