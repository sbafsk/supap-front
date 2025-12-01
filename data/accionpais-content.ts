import { FileText, Target, Users, Lightbulb } from "lucide-react"

/**
 * Accion Pais page content constants
 */

export interface AccionPaisDocument {
  title: string
  description: string
  date: string
  file: string
  type: string
}

export const ACCION_PAIS_PAGE = {
  hero: {
    title: "Acción País",
    description:
      "Iniciativas y proyectos para transformar la salud mental en Uruguay a través de políticas públicas basadas en evidencia científica",
  },

  intro: {
    badge: "NUESTRO COMPROMISO",
    title: "Transformando el Futuro de la Salud Mental",
    description:
      "Acción País es nuestra iniciativa para promover el desarrollo de políticas públicas en salud mental que reconozcan el potencial terapéutico de las psicoterapias asistidas.",
  },

  nationalInitiative: {
    badge: "INICIATIVA NACIONAL",
    title: "Acción País por la Salud Mental",
    description:
      "Una iniciativa participativa nacional impulsada por el Ministerio de Salud Pública que busca construir compromisos concretos entre todos los actores vinculados a la salud mental en Uruguay.",
    legalFramework: {
      title: "Marco Legal",
      description:
        "La iniciativa se fundamenta en la Ley N° 19.529 de Salud Mental (2017), el Plan Nacional de Salud Mental 2020-2027, y la Estrategia Nacional de Salud Mental y Bienestar 2025-2030, enfatizando derechos humanos, equidad, participación comunitaria y coordinación intersectorial.",
    },
    thematicAreas: {
      title: "Áreas Temáticas de Trabajo",
      description: "La iniciativa organiza su trabajo en siete áreas de enfoque:",
      areas: [
        "Gobernanza y estructuras de liderazgo",
        "Colaboración interinstitucional e intersectorial",
        "Promoción y prevención en salud mental",
        "Servicios de atención y tratamiento",
        "Gestión de recursos humanos y desarrollo profesional",
        "Sistemas de información y recopilación de datos en salud mental",
        "Proyectos territoriales de base comunitaria",
      ],
    },
    contact: {
      title: "Información de Contacto",
      ministry: "Ministerio de Salud Pública",
      address: "18 de Julio 1892",
      phone: "1934",
      hours: "Lunes a Viernes, 9:00-15:00",
    },
  },

  objectives: {
    badge: "OBJETIVOS",
    title: "Objetivos de Acción País",
    description: "Los pilares fundamentales de nuestra visión para el cambio en Uruguay",
    items: [
      {
        title: "Marco Regulatorio",
        description:
          "Impulsar la creación de un marco legal y regulatorio que permita la investigación y práctica clínica responsable",
        icon: FileText,
      },
      {
        title: "Acceso Equitativo",
        description:
          "Garantizar que todos los uruguayos tengan acceso a tratamientos innovadores de salud mental",
        icon: Target,
      },
      {
        title: "Formación Profesional",
        description:
          "Desarrollar programas de formación para profesionales de la salud en psicoterapias asistidas",
        icon: Users,
      },
      {
        title: "Investigación Nacional",
        description:
          "Fomentar la investigación científica local sobre la eficacia y seguridad de estos tratamientos",
        icon: Lightbulb,
      },
    ],
  },

  content: {
    badge: "RECURSOS",
    title: "Documentos y Materiales",
    description: "Accede a nuestra documentación, propuestas y material de presentación",
    // Array de documentos que se pueden agregar posteriormente
    documents: [] as AccionPaisDocument[],
  },

  cta: {
    title: "¿Quieres apoyar Acción País?",
    description: "Únete a nuestro esfuerzo por transformar el sistema de salud mental en Uruguay",
    buttons: {
      contact: "Contáctanos",
      learnMore: "Más Información",
    },
  },
} as const
