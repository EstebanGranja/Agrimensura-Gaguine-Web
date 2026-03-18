export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  whatsapp: string;
  image: string;
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
    whatsapp: 'https://wa.me/5493515407257',
    image: cesarImg
  },
  {
    id: 'maria',
    name: 'María de los Ángeles Granja',
    title: 'Martillero, Corredor Público y Corredor Inmobiliario',
    bio: 'Maria de los Angeles Granja es Martillero, Corredor Público y Corredor Inmobiliario. Siendo una de las fundadoras del Estudio, nunca deja de realizar cursos vinculados a la actividad catastral, legal y registral: "Diplomatura Superior en Catastro", "La Posesión y los Remedios legales que genera", "Organización del Trabajo", "El Catastro post COVID 19 Lecciones y alternativas para Latinoamérica", etc. Es quien se encarga de la articulación de todos los trámites necesarios para la visación de trabajos de Agrimensura, coordinando con Profesionales y organismos públicos y privados.',
    whatsapp: 'https://wa.me/5493515407257',
    image: mariaImg
  },
  {
    id: 'francisco',
    name: 'Francisco Joaquín Gaguine Granja',
    title: 'Estudiante de Ingeniería en Agrimensura',
    bio: 'Francisco, es estudiante de la carrera Ingeniería en Agrimensura, en la Facultad de Ciencias Exactas Físicas y Naturales de la Universidad Nacional de Córdoba. Se encuentra cursando cuarto año. Actualmente, es ayudante de la empresa, aportando sus conocimientos en topografía, marco legal y confección de planos en AutoCAD.',
    whatsapp: 'https://wa.me/5493515407257',
    image: franciscoImg
  }
];
