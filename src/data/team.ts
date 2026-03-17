export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  whatsapp: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 'cesar',
    name: 'César David Gaguine',
    title: 'Ingeniero Agrimensor',
    bio: 'Graduado de la FCEFyN - UNC (1993). Docente de Nivel Secundario hace más de 32 años. Reconocido como perito de parte y asesor en litigios relacionados con la tenencia de la tierra.',
    whatsapp: 'https://wa.me/5493515407257',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    id: 'maria',
    name: 'María de los Ángeles Granja',
    title: 'Martillero, Corredor Público y Corredor Inmobiliario',
    bio: 'Cofundadora del Estudio. Especialista en trámites catastrales, legales y registrales. Coordina la visación de trabajos con profesionales y organismos públicos y privados. Posee múltiples diplomaturas y especializaciones en catastro y derecho real.',
    whatsapp: 'https://wa.me/5493515407257',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    id: 'francisco',
    name: 'Francisco Joaquín Gaguine Granja',
    title: 'Estudiante de Ingeniería en Agrimensura',
    bio: 'Cursando 4° año en la FCEFyN - UNC. Ayudante del estudio, con conocimientos en topografía, marco legal y confección de planos en AutoCAD.',
    whatsapp: 'https://wa.me/5493515407257',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  }
];
