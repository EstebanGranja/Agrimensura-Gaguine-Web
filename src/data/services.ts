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
    id: 'replanteo',
    name: 'Replanteo de Obras',
    description: 'Implantación en campo de ejes, puntos de proyecto, niveles y geometrías para ejecución de obras.',
    fullDescription: 'El replanteo de obras consiste en la materialización en el terreno de los puntos, ejes, niveles y geometrías definidos en el proyecto de ingeniería o arquitectura. Utilizamos equipos de alta precisión (estaciones totales, niveles, GPS RTK) para garantizar que la obra se ejecute conforme a plano. Es un servicio fundamental antes del inicio de cualquier construcción, ya que permite ubicar con exactitud dónde se excavará, construirá o instalará cada elemento estructural.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200'
    ]
  },
  {
    id: 'relevamiento',
    name: 'Relevamiento Topográfico',
    description: 'Levantamiento preciso del terreno mediante instrumentos de alta precisión para obras o regularizaciones.',
    fullDescription: 'El relevamiento topográfico es el proceso de medición y registro detallado de las características físicas del terreno: alturas, desniveles, construcciones existentes, vegetación, cursos de agua, y cualquier elemento presente. Utilizamos equipos GPS, estaciones totales y niveles digitales para obtener datos tridimensionales precisos. El resultado es un plano topográfico que sirve como base para el diseño de proyectos, cálculo de movimientos de suelo, regularizaciones dominiales y estudios de impacto.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200'
    ]
  },
  {
    id: 'vep',
    name: 'VEP (Verificación de Estado Parcelario)',
    description: 'Comprobación y actualización de la situación geométrica, jurídica y documental del inmueble.',
    fullDescription: 'La Verificación de Estado Parcelario (VEP) es un trámite técnico-catastral que acredita la concordancia entre el estado parcelario registrado en Catastro y la realidad del inmueble. Incluye la verificación de límites, superficies, edificaciones, nomenclatura catastral y situación jurídica. Es requisito obligatorio en la provincia de Córdoba para tramitar escrituras, subdivisiones, uniones de parcelas y otros actos que modifiquen el dominio. El profesional agrimensor confecciona el informe y lo presenta ante la Dirección de Catastro.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200'
    ]
  },
  {
    id: 'subdivision',
    name: 'Subdivisión / Unión de Parcelas',
    description: 'Procedimiento técnico-catastral para dividir o unificar lotes según normativa.',
    fullDescription: 'La subdivisión o unión de parcelas es el procedimiento técnico-legal mediante el cual se modifica la configuración parcelaria de un inmueble. La subdivisión permite dividir una parcela en dos o más lotes independientes, mientras que la unión unifica dos o más parcelas en una sola. Requiere confección de plano de mensura, visación en la Dirección de Catastro, inscripción en el Registro General de la Propiedad, y cumplimiento de normativas urbanísticas municipales. Es fundamental para desarrollos inmobiliarios, herencias o reagrupamientos prediales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200'
    ]
  },
  {
    id: 'planialtimetria',
    name: 'Planialtimetría',
    description: 'Relevamiento planimétrico y altimétrico del terreno para proyectos, cálculos y documentación técnica.',
    fullDescription: 'La planialtimetría es un relevamiento topográfico integral que combina la medición planimétrica (coordenadas X, Y) y altimétrica (elevaciones, cotas Z) del terreno. Permite obtener curvas de nivel, perfiles longitudinales y transversales, cálculo de volúmenes, pendientes y diseño de drenajes. Es esencial para proyectos de arquitectura, ingeniería civil, agronomía, planificación urbana y obras de infraestructura. El resultado es un plano con información tridimensional completa que permite optimizar el diseño y prever movimientos de suelo.',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
      'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=1200'
    ]
  },
  {
    id: 'amojonamiento',
    name: 'Amojonamiento',
    description: 'Implantación, reposición o verificación de mojones que materializan los límites definidos del inmueble.',
    fullDescription: 'El amojonamiento consiste en la colocación física de mojones (hitos de hormigón, hierro u otro material durable) en los vértices y puntos característicos de los límites de una parcela. Estos mojones materializan en el terreno los límites jurídicos del inmueble establecidos en la mensura. El proceso incluye la determinación precisa de las coordenadas de los vértices, excavación, colocación de los mojones conforme a normativa, y documentación fotográfica. Es un acto fundamental para evitar conflictos de límites entre propiedades colindantes.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200'
    ]
  },
  {
    id: 'certificado',
    name: 'Certificado de Amojonamiento',
    description: 'Documento técnico que acredita la correcta materialización de los mojones en la parcela.',
    fullDescription: 'El Certificado de Amojonamiento es un documento técnico-legal emitido por el Ingeniero Agrimensor que acredita que los mojones han sido colocados correctamente en el terreno, materializando los límites de la parcela conforme al plano de mensura aprobado. Incluye fotografías de cada mojón, descripción de su ubicación, coordenadas, y firma del profesional. Este certificado es requerido frecuentemente para tramitar escrituras, créditos hipotecarios, y regularizaciones dominiales, ya que garantiza que el inmueble está correctamente delimitado.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200'
    ]
  },
  {
    id: 'posesion',
    name: 'Mensura de Posesión',
    description: 'Documento técnico que acredita la ocupación real del terreno para la realización del Juicio de Usucapión.',
    fullDescription: 'La Mensura de Posesión es un trabajo técnico-jurídico realizado por el Ingeniero Agrimensor que documenta la posesión efectiva, continua, pública, pacífica y con ánimo de dueño de un inmueble. Es el primer paso indispensable para iniciar un Juicio de Usucapión (prescripción adquisitiva de dominio). El agrimensor releva el terreno ocupado, identifica construcciones y mejoras, releva colindancias, recopila testimonios, y confecciona un plano que refleja la situación posesoria actual. El plano se presenta ante la Dirección de Catastro y luego ante la justicia.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200'
    ]
  },
  {
    id: 'mensura',
    name: 'Mensura',
    description: 'Determinación precisa de límites, superficies y condiciones del inmueble conforme a normativa catastral.',
    fullDescription: 'La Mensura es el acto técnico-jurídico fundamental de la Agrimensura, mediante el cual el profesional determina, verifica y documenta los límites, superficie, ubicación y características de un inmueble. Incluye trabajo de campo (mediciones con equipos de precisión, identificación de mojones, relevamiento de colindancias), estudio de títulos y antecedentes catastrales, y confección del plano de mensura. Este documento tiene valor legal, se inscribe en el Registro de la Propiedad, y es la base para cualquier acto de disposición, modificación o regularización del inmueble.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
    carouselImages: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1200',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200'
    ]
  }
];
