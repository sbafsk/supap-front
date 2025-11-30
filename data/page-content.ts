/**
 * Home page content constants
 */

export const HOME_PAGE = {
  hero: {
    title: 'Sociedad Uruguaya de Psicoterapias Asistidas con Psicodélicos',
    description:
      'Promoviendo el uso responsable y terapéutico de sustancias psicodélicas en el contexto de la salud mental y el bienestar integral',
  },

  mission: {
    title: 'Nuestra Misión',
    description:
      'SUPAP es una organización dedicada a la investigación, educación y promoción del uso terapéutico responsable de sustancias psicodélicas y enteógenas en el contexto de la salud mental.',
    cards: [
      {
        title: 'Investigación',
        description:
          'Promovemos la investigación científica rigurosa sobre los efectos terapéuticos de las sustancias psicodélicas.',
      },
      {
        title: 'Terapia',
        description:
          'Desarrollamos protocolos terapéuticos seguros y efectivos para el tratamiento de diversos trastornos mentales.',
      },
      {
        title: 'Educación',
        description:
          'Educamos a profesionales y al público sobre el uso responsable y los beneficios terapéuticos de estas sustancias.',
      },
    ],
  },

  services: {
    title: 'Nuestros Servicios',
    description:
      'Ofrecemos una amplia gama de servicios para profesionales, investigadores y personas interesadas en las terapias psicodélicas.',
    items: [
      {
        title: 'Formación Profesional',
        description:
          'Cursos y talleres especializados para profesionales de la salud mental interesados en terapias asistidas por psicodélicos.',
        color: 'border-l-primary',
      },
      {
        title: 'Investigación Clínica',
        description:
          'Participación en estudios clínicos y proyectos de investigación sobre la eficacia terapéutica de sustancias psicodélicas.',
        color: 'border-l-secondary',
      },
      {
        title: 'Consultoría',
        description:
          'Asesoramiento especializado para instituciones y profesionales que deseen implementar protocolos terapéuticos seguros.',
        color: 'border-l-accent',
      },
      {
        title: 'Eventos Académicos',
        description:
          'Conferencias, seminarios y conversatorios sobre avances en psicoterapias asistidas por psicodélicos.',
        color: 'border-l-primary',
      },
      {
        title: 'Red de Profesionales',
        description:
          'Conexión con una red de profesionales especializados en terapias psicodélicas a nivel nacional e internacional.',
        color: 'border-l-secondary',
      },
      {
        title: 'Recursos Educativos',
        description:
          'Acceso a biblioteca especializada, publicaciones científicas y materiales educativos actualizados.',
        color: 'border-l-accent',
      },
    ],
  },

  events: {
    title: 'Próximos Eventos',
    description:
      'Mantente al día con nuestras actividades académicas y eventos especiales.',
    upcomingEvent: {
      badge: 'Próximo Evento',
      title: 'Conversatorio sobre Microdosis de Psilocibes',
      date: 'Sábado 16/08/25 de 10:00 a 13:00 (UY)',
      location: 'Modalidad Virtual',
      speakers: 'Con Lic. Cecilia Morelli & Lic. Sebastián Griscti',
    },
    membership: {
      title: 'Información de Membresía',
      pricing: [
        { label: 'Socios SUPAP', value: 'Gratuito', badge: 'secondary' },
        { label: 'No socios', value: '$800', badge: 'outline' },
        { label: 'Organizaciones FIPE', value: 'USD 12', badge: 'outline' },
        { label: 'Estudiantes Universitarios', value: '$500', badge: 'outline' },
      ],
      registration: {
        label: 'Inscripción:',
        value: 'link en bio @supap.uy',
      },
      inquiries: {
        label: 'Consultas:',
        value: 'supap.eventos@gmail.com',
      },
    },
  },

  cta: {
    title: 'Únete a Nuestra Comunidad',
    description:
      'Forma parte de la red de profesionales que está transformando el futuro de la salud mental en Uruguay.',
    buttons: {
      contact: 'Contactar',
      becomeMember: 'Hacerse Socio',
    },
  },
} as const;
