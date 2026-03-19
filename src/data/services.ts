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
    fullDescription: 'La Mensura de Posesión es un trabajo técnico-jurídico que documenta la posesión efectiva y continua de un inmueble, siendo el primer paso para un Juicio de Usucapión. El agrimensor releva el terreno, construcciones y mejoras, y confecciona un plano que se presenta ante Catastro y la justicia para reflejar la situación posesoria.',
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
    fullDescription: 'El relevamiento topográfico es la medición detallada de las características físicas del terreno, como alturas, desniveles y construcciones. Usando equipos GPS y estaciones totales, generamos un plano preciso que sirve de base para el diseño de proyectos, cálculo de movimientos de suelo y regularizaciones.',
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
    fullDescription: 'El amojonamiento consiste en la colocación de mojones (hitos de hormigón o hierro) en los vértices de una parcela para materializar sus límites jurídicos. Este proceso incluye la determinación precisa de coordenadas y la documentación fotográfica, siendo fundamental para evitar conflictos de límites con propiedades vecinas.',
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
    fullDescription: 'El Certificado de Amojonamiento es un documento técnico-legal que acredita la correcta colocación de los mojones de una parcela, conforme al plano de mensura. Incluye fotografías y la ubicación de cada mojón, y es requerido para trámites de escrituras, créditos hipotecarios y regularizaciones, garantizando que el inmueble está bien delimitado.',
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
        fullDescription: 'La Verificación del Estado Parcelario (VEP) es un trámite que actualiza la información de una parcela en el Catastro. Consiste en verificar que los límites, medidas y edificaciones del inmueble coincidan con los registros existentes. Es un requisito legal para cualquier acto de transmisión o modificación de derechos reales sobre un inmueble, asegurando la transparencia y seguridad jurídica de la operación.',
    image: vepImg,
    carouselImages: [
      vepImg
    ]

  },
  {
    id: 'replanteo',
    name: 'Replanteo de Obras',
    description: 'Materializa en campo los ejes y niveles del proyecto para inicio de obras.',
        fullDescription: 'El replanteo de obras consiste en trasladar al terreno los puntos y ejes definidos en los planos de un proyecto de construcción. Utilizando estaciones totales y GPS de alta precisión, materializamos la ubicación exacta de cimientos, columnas, y otros elementos estructurales, asegurando que la obra se construya según las especificaciones del diseño.',
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
    fullDescription: 'La subdivisión de parcelas es el proceso para dividir un inmueble en dos o más lotes independientes, cada uno con su propia matrícula. Este trámite incluye la creación de un plano de subdivisión que cumple con las normativas locales y se inscribe en el Catastro, permitiendo la venta o transferencia individual de los nuevos lotes.',
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
        fullDescription: 'La planialtimetría combina la planimetría (medición de proyecciones horizontales) y la altimetría (medición de alturas y desniveles) en un solo plano. Este plano proporciona una representación tridimensional completa del terreno, incluyendo curvas de nivel, y es esencial para proyectos de ingeniería, arquitectura y estudios hidráulicos que requieren un conocimiento detallado del relieve.',
    image: planialtimetriaImg,
    carouselImages: [
      planialtimetriaImg,
      altimetria1Img,
      altimetria2Img,
      altimetria3Img
    ]
  }
];
