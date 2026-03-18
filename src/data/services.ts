// Importar imágenes desde src/public/servicios
import altimetria1Img from '../public/servicios/altimetria1.jpg';
import altimetria2Img from '../public/servicios/altimetria2.jpg';
import altimetria3Img from '../public/servicios/altimetria3.jpg';
import amojonamientoImg from '../public/servicios/amojonamiento.png';
import amojonamiento1Img from '../public/servicios/amojonamiento1.jpg';
import amojonamiento2Img from '../public/servicios/amojonamiento2.jpg';
import amojonamiento3Img from '../public/servicios/amojonamiento3.jpg';
import certificadoAmojonamientoImg from '../public/servicios/certificado_amojonamiento.png';
import certifAmojonamiento1Img from '../public/servicios/certif_amojonamiento1.jpg';
import certifAmojonamiento2Img from '../public/servicios/certif_amojonamiento2.jpg';
import certifAmojonamiento3Img from '../public/servicios/certif_amojonamiento3.jpg';
import mensuraImg from '../public/servicios/mensura.png';
import mensura1Img from '../public/servicios/mensura1.jpg';
import mensura2Img from '../public/servicios/mensura2.jpg';
import mensura3Img from '../public/servicios/mensura3.jpg';
import mensuraPosesionImg from '../public/servicios/mensura_posesion.png';
import mensuraPosesion1Img from '../public/servicios/mensura_posesion1.jpg';
import mensuraPosesion2Img from '../public/servicios/mensura_posesion2.jpg';
import planialtimetriaImg from '../public/servicios/planialtimetria.png';
import relevamiento1Img from '../public/servicios/relevamiento1.jpg';
import relevamiento2Img from '../public/servicios/relevamiento2.jpg';
import relevamientoTopograficoImg from '../public/servicios/relevamiento_topografico.png';
import replanteo1Img from '../public/servicios/replanteo1.jpg';
import replanteo2Img from '../public/servicios/replanteo2.jpg';
import replanteoObrasImg from '../public/servicios/replanteo_obras.png';
import replanteoObras1Img from '../public/servicios/replanteo_obras1.jpg';
import replanteoObras2Img from '../public/servicios/replanteo_obras2.jpg';
import subUnionParcelasImg from '../public/servicios/sub-union_parcelas.png';
import subdivision1Img from '../public/servicios/subdivision1.jpg';
import subdivision2Img from '../public/servicios/subdivision2.jpg';
import subdivision3Img from '../public/servicios/subdivision3.jpg';
import vepImg from '../public/servicios/VEP.png';

export interface Service {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  carouselImages: string[];
}

export const services: Service[] = [
  {
    id: 'mensura',
    name: 'Mensura',
    description: 'Medición y documentación de límites, superficies del inmueble conforme a normativa catastral.',
    fullDescription: 'Es la determinación, medición, ubicación y documentación en un plano de los inmuebles y sus límites, registrado debidamente en el Catastro conforme a las causas jurídicas que los originan. Es decir es la aplicación del título de propiedad al terreno.',
    image: mensuraImg,
    carouselImages: [
      mensuraImg,
      mensura1Img,
      mensura2Img,
      mensura3Img
    ]
  },
  {
    id: 'posesion',
    name: 'Mensura de Posesión',
    description: 'Acredita la ocupación real para iniciar un Juicio de Usucapión.',
    fullDescription: 'La Mensura de Posesión es un trabajo técnico-jurídico realizado por el Ingeniero Agrimensor que documenta la posesión efectiva, continua, pública, pacífica y con ánimo de dueño de un inmueble. Es el primer paso indispensable para iniciar un Juicio de Usucapión (prescripción adquisitiva de dominio). El agrimensor releva el terreno ocupado, identifica construcciones y mejoras, releva colindancias, recopila testimonios, y confecciona un plano que refleja la situación posesoria actual. El plano se presenta ante la Dirección de Catastro y luego ante la justicia.',
    image: mensuraPosesionImg,
    carouselImages: [
      mensuraPosesionImg,
      mensuraPosesion1Img,
      mensuraPosesion2Img
    ]
  },
  {
    id: 'relevamiento',
    name: 'Relevamiento Topográfico',
    description: 'Medición precisa tridimensional del terreno con GPS y estaciones totales para obras.',
    fullDescription: 'El relevamiento topográfico es el proceso de medición y registro detallado de las características físicas del terreno: alturas, desniveles, construcciones existentes, vegetación, cursos de agua, y cualquier elemento presente. Utilizamos equipos GPS, estaciones totales y niveles digitales para obtener datos tridimensionales precisos. El resultado es un plano topográfico que sirve como base para el diseño de proyectos, cálculo de movimientos de suelo, regularizaciones dominiales y estudios de impacto.',
    image: relevamientoTopograficoImg,
    carouselImages: [
      relevamientoTopograficoImg,
      relevamiento1Img,
      relevamiento2Img
    ]
  },
  {
    id: 'amojonamiento',
    name: 'Amojonamiento',
    description: 'Colocación de mojones en el terreno para materializar los límites del inmueble.',
    fullDescription: 'El amojonamiento consiste en la colocación física de mojones (hitos de hormigón, hierro u otro material durable) en los vértices y puntos característicos de los límites de una parcela. Estos mojones materializan en el terreno los límites jurídicos del inmueble establecidos en la mensura. El proceso incluye la determinación precisa de las coordenadas de los vértices, excavación, colocación de los mojones conforme a normativa, y documentación fotográfica. Es un acto fundamental para evitar conflictos de límites entre propiedades colindantes.',
    image: amojonamientoImg,
    carouselImages: [
      amojonamientoImg,
      amojonamiento1Img,
      amojonamiento2Img,
      amojonamiento3Img
    ]
  },
  {
    id: 'certificado',
    name: 'Certificado de Amojonamiento',
    description: 'Acredita la correcta colocación de mojones en la parcela.',
    fullDescription: 'El Certificado de Amojonamiento es un documento técnico-legal emitido por el Ingeniero Agrimensor que acredita que los mojones han sido colocados correctamente en el terreno, materializando los límites de la parcela conforme al plano de mensura aprobado. Incluye fotografías de cada mojón, descripción de su ubicación, coordenadas, y firma del profesional. Este certificado es requerido frecuentemente para tramitar escrituras, créditos hipotecarios, y regularizaciones dominiales, ya que garantiza que el inmueble está correctamente delimitado.',
    image: certificadoAmojonamientoImg,
    carouselImages: [
      certificadoAmojonamientoImg,
      certifAmojonamiento1Img,
      certifAmojonamiento2Img,
      certifAmojonamiento3Img
    ]
  },
  {
    id: 'vep',
    name: 'VEP (Verificación de Estado Parcelario)',
    description: 'Verifica la concordancia entre el estado catastral y la realidad del inmueble.',
    fullDescription: 'La Verificación de Estado Parcelario (VEP) es un trámite técnico-catastral que acredita la concordancia entre el estado parcelario registrado en Catastro y la realidad del inmueble. Incluye la verificación de límites, superficies, edificaciones, nomenclatura catastral y situación jurídica. Es requisito obligatorio en la provincia de Córdoba para tramitar escrituras, subdivisiones, uniones de parcelas y otros actos que modifiquen el dominio. El profesional agrimensor confecciona el informe y lo presenta ante la Dirección de Catastro.',
    image: vepImg,
    carouselImages: [
      vepImg
    ]

  },
  {
    id: 'replanteo',
    name: 'Replanteo de Obras',
    description: 'Materializa en campo los ejes y niveles del proyecto para inicio de obras.',
    fullDescription: 'El replanteo de obras consiste en la materialización en el terreno de los puntos, ejes, niveles y geometrías definidos en el proyecto de ingeniería o arquitectura. Utilizamos equipos de alta precisión (estaciones totales, niveles, GPS RTK) para garantizar que la obra se ejecute conforme a plano. Es un servicio fundamental antes del inicio de cualquier construcción, ya que permite ubicar con exactitud dónde se excavará, construirá o instalará cada elemento estructural.',
    image: replanteoObrasImg,
    carouselImages: [
      replanteoObrasImg,
      replanteoObras1Img,
      replanteo1Img,
      replanteoObras2Img
    ]
  },
  
  
  {
    id: 'subdivision',
    name: 'Subdivisión / Unión de Parcelas',
    description: 'Procedimiento técnico-catastral para dividir o unificar lotes según normativa.',
    fullDescription: 'La subdivisión o unión de parcelas es el procedimiento técnico-legal mediante el cual se modifica la configuración parcelaria de un inmueble. La subdivisión permite dividir una parcela en dos o más lotes independientes, mientras que la unión unifica dos o más parcelas en una sola. Requiere confección de plano de mensura, visación en la Dirección de Catastro, inscripción en el Registro General de la Propiedad, y cumplimiento de normativas urbanísticas municipales. Es fundamental para desarrollos inmobiliarios, herencias o reagrupamientos prediales.',
    image: subUnionParcelasImg,
    carouselImages: [
      subUnionParcelasImg,
      subdivision1Img,
      subdivision2Img,
      subdivision3Img
    ]
  },
  {
    id: 'planialtimetria',
    name: 'Planialtimetría',
    description: 'Relevamiento tridimensional para obtener curvas de nivel y perfiles de proyecto.',
    fullDescription: 'La planialtimetría es un relevamiento topográfico integral que combina la medición planimétrica (coordenadas X, Y) y altimétrica (elevaciones, cotas Z) del terreno. Permite obtener curvas de nivel, perfiles longitudinales y transversales, cálculo de volúmenes, pendientes y diseño de drenajes. Es esencial para proyectos de arquitectura, ingeniería civil, agronomía, planificación urbana y obras de infraestructura. El resultado es un plano con información tridimensional completa que permite optimizar el diseño y prever movimientos de suelo.',
    image: planialtimetriaImg,
    carouselImages: [
      planialtimetriaImg,
      altimetria1Img,
      altimetria2Img,
      altimetria3Img
    ]
  }
];
