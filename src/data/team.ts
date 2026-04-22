export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  whatsapp: string;
  image: string;
  linkedin?: string;
}

// Importar imágenes como módulos para que Vite procese las rutas correctamente
import cesarImg from '../public/equipo/CESAR_GAGUINE.jpeg';
import mariaImg from '../public/equipo/MARIA_GRANJA.jpeg';
import franciscoImg from '../public/equipo/FRANCISCO_GAGUINE.jpeg';

export const team: TeamMember[] = [
  {
    id: 'cesar',
    name: 'César David Gaguine',
    title: 'Ingeniero Agrimensor',
    bio: 'Ingeniero Agrimensor egresado de la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de Córdoba en el año 1993. Cuenta con una amplia trayectoria en el ejercicio de la agrimensura, con sólida experiencia en trabajos de campo, verificación de límites y resolución de problemáticas vinculadas a la propiedad de la tierra. Su profundo conocimiento del marco legal lo posiciona como referente en la materia, siendo frecuentemente convocado como perito de parte y asesor en litigios relacionados con la tenencia y delimitación de inmuebles.',
    whatsapp: 'https://wa.me/3517160164',
    image: cesarImg
  },
  {
    id: 'maria',
    name: 'María de los Ángeles Granja',
    title: 'Martillero, Corredor Público y Corredor Inmobiliario',
    bio: 'Martillera y Corredora Pública con un rol central en la gestión administrativa del estudio. Se encarga de la tramitación integral de trabajos de agrimensura, coordinando presentaciones de planos y gestionando expedientes ante organismos públicos y municipalidades. Cuenta con formación continua en áreas catastrales, legales y registrales, lo que le permite desenvolverse con eficiencia en la articulación entre profesionales y distintas reparticiones, asegurando que cada trámite avance de manera ordenada y sin demoras.',
    whatsapp: 'https://wa.me/3517160164',
    image: mariaImg
  },
  {
    id: 'francisco',
    name: 'Francisco Joaquín Gaguine Granja',
    title: 'Ingeniero Agrimensor',
    bio: 'Ingeniero Agrimensor egresado en 2024 de la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de Córdoba. Trabajo en el desarrollo y ejecución de proyectos de agrimensura en la provincia de Córdoba, con experiencia en relevamientos topográficos, verificación de límites y confección de planos mediante herramientas como AutoCAD. Cuento con formación técnica actualizada y un enfoque preciso en cada trabajo, combinando conocimiento del marco legal vigente con práctica en campo para brindar resultados confiables.',
    whatsapp: 'https://wa.me/3517160164',
    image: franciscoImg,
    linkedin: 'https://www.linkedin.com/in/francisco-joaqu%C3%ADn-gaguine-granja-440872223/'
  }
];
