import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import ContactCard from '../components/ContactCard';
import whatsappLogo from '../public/images/whatsapp.png';

export default function Contacto() {
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
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
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
        </div>
      </div>
    </div>
  );
}
