import {
  BookOpen,
  FileText,
  Briefcase,
  Users,
  Network,
  Shield,
} from 'lucide-react';

/**
 * Services/Servicios page content constants
 */

export const SERVICES_PAGE = {
  hero: {
    title: 'Nuestros Servicios',
    description:
      'Soluciones integrales para profesionales e instituciones comprometidas con la excelencia en psicoterapias',
  },

  mainServices: {
    badge: 'SERVICIOS PRINCIPALES',
    title: 'Lo Que Ofrecemos',
    description:
      'Una gama completa de servicios diseñados para apoyar tu crecimiento profesional y práctica clínica',
    services: [
      {
        title: 'Formación Profesional',
        description:
          'Programas educativos especializados para profesionales de la salud mental que desean profundizar en terapias asistidas por psicodélicos',
        icon: BookOpen,
        details: [
          'Cursos teóricos y prácticos',
          'Certificación profesional',
          'Mentorías individualizadas',
          'Acceso a recursos científicos',
        ],
      },
      {
        title: 'Investigación Clínica',
        description:
          'Oportunidades para participar en estudios de investigación rigurosos sobre eficacia terapéutica de sustancias psicodélicas',
        icon: FileText,
        details: [
          'Diseño de protocolos de investigación',
          'Recopilación de datos',
          'Análisis estadístico',
          'Publicación de resultados',
        ],
      },
      {
        title: 'Consultoría Especializada',
        description:
          'Asesoramiento experto para instituciones y profesionales que implementan protocolos terapéuticos seguros',
        icon: Briefcase,
        details: [
          'Auditoría de protocolos',
          'Capacitación del personal',
          'Diseño de infraestructura',
          'Cumplimiento normativo',
        ],
      },
      {
        title: 'Eventos Académicos',
        description:
          'Conferencias, seminarios y conversatorios sobre avances en investigación psicodélica y salud mental',
        icon: Users,
        details: [
          'Conferencias especializadas',
          'Talleres prácticos',
          'Mesas redondas',
          'Networking profesional',
        ],
      },
      {
        title: 'Red Internacional de Profesionales',
        description:
          'Conexión con expertos y organismos internacionales especializados en terapias psicodélicas',
        icon: Network,
        details: [
          'Directorio de profesionales',
          'Colaboraciones internacionales',
          'Intercambio de conocimiento',
          'Oportunidades de trabajo en red',
        ],
      },
      {
        title: 'Recursos Educativos',
        description:
          'Acceso a biblioteca científica, publicaciones especializadas y materiales educativos actualizados',
        icon: Shield,
        details: [
          'Artículos científicos',
          'Libros especializados',
          'Videos educativos',
          'Webinarios grabados',
        ],
      },
    ],
  },

  process: {
    badge: 'CÓMO FUNCIONA',
    title: 'Nuestro Proceso',
    steps: [
      {
        step: 1,
        title: 'Consulta Inicial',
        description:
          'Evaluamos tus necesidades específicas y recomendamos el servicio más apropiado',
      },
      {
        step: 2,
        title: 'Evaluación Personalizada',
        description:
          'Realizamos un análisis detallado de tu situación y objetivos',
      },
      {
        step: 3,
        title: 'Plan Personalizado',
        description: 'Diseñamos un programa adaptado a tus requerimientos únicos',
      },
      {
        step: 4,
        title: 'Implementación',
        description:
          'Trabajamos contigo para implementar y optimizar los resultados',
      },
    ],
  },

  testimonial: {
    badge: 'TESTIMONIO',
    title: '¿Por Qué Elegirnos?',
    description:
      'En SUPAP, combinamos rigor científico con apoyo personalizado. Nuestro equipo multidisciplinario está dedicado a tu éxito, ofreciendo programas flexibles, mentoría experta y acceso a la red más amplia de profesionales en el campo de psicoterapias asistidas por psicodélicos.',
    benefits: [
      'Expertos con décadas de experiencia',
      'Programas personalizados',
      'Certificación internacionalmente reconocida',
      'Acceso a investigación de punta',
      'Comunidad de profesionales',
      'Apoyo continuo después del programa',
    ],
  },

  cta: {
    title: '¿Listo para Comenzar?',
    description:
      'Contáctanos hoy para descubrir cuál es el servicio más adecuado para ti.',
  },
} as const;
