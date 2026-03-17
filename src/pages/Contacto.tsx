import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import ContactCard from '../components/ContactCard';

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
      value: '+54 9 351 540-7257',
      link: 'https://wa.me/5493515407257',
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
      label: 'Horario',
      value: 'Lunes a Sábado: 08:00 – 20:00 hs'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@agrimensuragaguine',
      link: 'https://instagram.com/agrimensuragaguine',
      external: true
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Gaguine Agrimensura',
      link: 'https://www.facebook.com/profile.php?id=100023081305087',
      external: true
    }
  ];

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
            href="https://wa.me/5493515407257"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20BD5A] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} />
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              label={info.label}
              value={info.value}
              link={info.link}
              external={info.external}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
