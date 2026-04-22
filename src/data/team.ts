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
    bio: 'César David Gaguine es Ingeniero Agrimensor graduado de la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de Córdoba en el año 1993. Además de su vasta trayectoria en el campo de la Agrimensura es Docente de Nivel Secundario desde hace más de 32 años. Por su capacidad y conocimientos legales es muy solicitado como perito de parte y como asesor en litigios relacionados con la tenencia de la tierra.',
    whatsapp: 'https://wa.me/3517160164',
    image: cesarImg
  },
  {
    id: 'maria',
    name: 'María de los Ángeles Granja',
    title: 'Martillero, Corredor Público y Corredor Inmobiliario',
    bio: 'Maria de los Angeles Granja es Martillero, Corredor Público y Corredor Inmobiliario. Siendo una de las fundadoras del Estudio, nunca deja de realizar cursos vinculados a la actividad catastral, legal y registral: "Diplomatura Superior en Catastro", "La Posesión y los Remedios legales que genera", "Organización del Trabajo", "El Catastro post COVID 19 Lecciones y alternativas para Latinoamérica", etc. Es quien se encarga de la articulación de todos los trámites necesarios para la visación de trabajos de Agrimensura, coordinando con Profesionales y organismos públicos y privados.',
    whatsapp: 'https://wa.me/3517160164',
    image: mariaImg
  },
  {
    id: 'francisco',
    name: 'Francisco Joaquín Gaguine Granja',
    title: 'Ingeniero Agrimensor',
    bio: 'Francisco Gaguine es Ingeniero Agrimensor egresado en 2024 de la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de Córdoba. Actualmente forma parte fundamental de Agrimensura Gaguine, participando activamente en el desarrollo y ejecución de proyectos. Cuenta con experiencia en relevamientos topográficos, interpretación del marco legal vigente y confección de planos mediante herramientas como AutoCAD. Su incorporación al equipo aporta una mirada actualizada y técnica, contribuyendo al crecimiento y la calidad de los servicios que brinda la empresa.',
    whatsapp: 'https://wa.me/3517160164',
    image: franciscoImg,
    linkedin: 'https://www.linkedin.com/in/francisco-joaqu%C3%ADn-gaguine-granja-440872223/'
  }
];
