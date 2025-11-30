import { Award, Target, Zap, Users, CheckCircle } from "lucide-react"

/**
 * About/Nosotros page content constants
 */

export const ABOUT_PAGE = {
  hero: {
    title: "Acerca de SUPAP",
    description:
      "Transformando la salud mental a través de investigación científica rigurosa y práctica terapéutica responsable",
  },

  mission: {
    title: "Nuestra Misión",
    icon: Target,
    primaryText:
      "SUPAP se dedica a la investigación, educación y promoción del uso terapéutico responsable de sustancias psicodélicas y enteógenas en el contexto de la salud mental y el bienestar integral.",
    secondaryText:
      "Trabajamos para crear un marco científico, ético y legal que permita a los profesionales de la salud acceder a herramientas terapéuticas innovadoras para tratar trastornos mentales graves y resistentes.",
  },

  vision: {
    title: "Nuestra Visión",
    icon: Zap,
    primaryText:
      "Una sociedad donde las psicoterapias asistidas por psicodélicos y enteógenos son reconocidas, investigadas y practicadas como herramientas terapéuticas seguras, efectivas y accesibles.",
    secondaryText:
      "Buscamos liderar el avance científico en Latinoamérica, demostrando que el uso responsable de estos recursos puede revolucionar el tratamiento de la salud mental.",
  },

  history: {
    badge: "HISTORIA",
    title: "Nuestro Camino",
    description:
      "Desde nuestra fundación, hemos trabajado incansablemente para establecer los estándares más altos en investigación y práctica clínica.",
    milestones: [
      {
        year: "2023",
        title: "Fundación de SUPAP",
        description:
          "Se constituye oficialmente la Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos",
      },
      {
        year: "2023",
        title: "Aprobación Regulatoria",
        description:
          "Obtención de aprobación del Ministerio de Educación y Cultura (MEC) y Ministerio de Salud Pública (MSP)",
      },
      {
        year: "2024",
        title: "Primeros Eventos Académicos",
        description: "Realización de conversatorios y talleres sobre investigación en psicodélicos",
      },
      {
        year: "2024",
        title: "Red Internacional",
        description:
          "Establecimiento de alianzas con organizaciones internacionales de investigación",
      },
      {
        year: "2025",
        title: "Expansión de Programas",
        description: "Lanzamiento de nuevos programas de formación e investigación colaborativa",
      },
    ],
  },

  objectives: {
    badge: "OBJETIVOS ESTRATÉGICOS",
    title: "Nuestros Objetivos",
    description:
      "Seis pilares estratégicos que guían nuestro trabajo y compromiso con la transformación de la salud mental",
    items: [
      {
        title: "Investigación Científica",
        description:
          "Promover y facilitar la investigación rigurosa sobre psicoterapias asistidas por psicodélicos",
        icon: Zap,
      },
      {
        title: "Formación Profesional",
        description:
          "Desarrollar programas educativos de calidad para profesionales de la salud mental",
        icon: Target,
      },
      {
        title: "Seguridad y Ética",
        description:
          "Establecer estándares éticos y de seguridad para prácticas terapéuticas responsables",
        icon: Award,
      },
      {
        title: "Advocacy Político",
        description:
          "Colaborar con reguladores y legisladores para crear marcos legales favorables",
        icon: Users,
      },
      {
        title: "Acceso a Tratamientos",
        description:
          "Facilitar el acceso equitativo a tratamientos psicodélicos validados científicamente",
        icon: CheckCircle,
      },
      {
        title: "Red Colaborativa",
        description:
          "Construir una red internacional de profesionales comprometidos con la excelencia",
        icon: Users,
      },
    ],
  },

  values: {
    badge: "VALORES FUNDAMENTALES",
    title: "Lo Que Nos Define",
    items: [
      {
        value: "Excelencia Científica",
        description:
          "Comprometidos con metodología rigurosa, evidencia basada en investigación y revisión científica transparente",
      },
      {
        value: "Responsabilidad Ética",
        description:
          "Priorizamos la seguridad del paciente, consentimiento informado y cumplimiento de normas éticas internacionales",
      },
      {
        value: "Inclusión y Acceso",
        description:
          "Trabajamos por reducir disparidades en acceso a tratamientos innovadores y promover equidad en salud mental",
      },
      {
        value: "Colaboración Abierta",
        description:
          "Creemos en el poder de trabajar juntos, compartiendo conocimiento y recursos con la comunidad internacional",
      },
    ],
  },

  partnerships: {
    badge: "ALIANZAS",
    title: "Reconocimiento y Colaboraciones",
    description:
      "SUPAP colabora con instituciones académicas, organismos de salud y organizaciones internacionales líderes en investigación psicodélica",
    categories: [
      {
        title: "Autoridades Regulatorias",
        items: ["Ministerio de Educación y Cultura (MEC)", "Ministerio de Salud Pública (MSP)"],
      },
      {
        title: "Redes Internacionales",
        items: [
          "Psychedelic Research Initiative",
          "International Society for Psychedelic Research",
        ],
      },
      {
        title: "Universidades Asociadas",
        items: ["Colaboraciones académicas", "Programas de investigación conjuntos"],
      },
    ],
  },

  cta: {
    title: "Únete a Nuestro Movimiento",
    description:
      "Sé parte de la revolución en salud mental. Juntos estamos transformando el futuro de la terapia psicológica.",
  },
} as const
