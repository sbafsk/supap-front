import { Users, Shield, Briefcase, Heart, Target, Handshake } from "lucide-react"

/**
 * Team/Equipo page content constants
 */

export interface BoardMember {
  name: string
  role: string
  bio: string
  image?: string
}

export const TEAM_PAGE = {
  hero: {
    title: "Nuestro Equipo",
    description:
      "Profesionales interdisciplinarios comprometidos con la excelencia en psicoterapias asistidas por psicodélicos y enteógenos",
  },

  structure: {
    badge: "ESTRUCTURA ORGANIZACIONAL",
    title: "Estructura Organizacional",
    description:
      "SUPAP está organizada en comisiones especializadas que trabajan conjuntamente para cumplir con nuestra misión.",
    items: [
      {
        title: "Comisión Directiva",
        icon: Users,
        description: "Dirección estratégica y gestión general de la organización",
        members: "10 miembros titulares y suplentes",
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
      {
        title: "Comisión Fiscal",
        icon: Shield,
        description: "Supervisión y control de fondos y operaciones",
        members: "6 miembros titulares y suplentes",
        color: "from-secondary/20 to-secondary/10",
        iconColor: "text-secondary",
      },
      {
        title: "Comisiones de Trabajo",
        icon: Briefcase,
        description: "7 comisiones especializadas que impulsan nuestras actividades",
        members:
          "Comunicación • Académica • Reducción de Daños • Legal • Tesorería • Publicaciones • Eventos",
        color: "from-accent/20 to-accent/10",
        iconColor: "text-accent",
      },
    ],
  },

  gallery: {
    badge: "GALERÍA",
    title: "Momentos de Nuestra Comunidad",
    description:
      "Actividades, eventos y encuentros que reflejan nuestro compromiso con la excelencia y la colaboración",
  },

  values: {
    badge: "VALORES",
    title: "Nuestros Valores",
    description: "Los principios que guían nuestro trabajo y compromiso con la comunidad",
    items: [
      {
        title: "Interdisciplinariedad",
        description: "Diversidad de enfoques y profesiones",
        icon: Handshake,
      },
      {
        title: "Rigor Científico",
        description: "Evidencia y metodología sólida",
        icon: Target,
      },
      {
        title: "Ética Profesional",
        description: "Compromiso con la seguridad y el bienestar",
        icon: Heart,
      },
      {
        title: "Colaboración",
        description: "Trabajo en red y construcción colectiva",
        icon: Users,
      },
    ],
  },

  boardMembers: {
    badge: "COMISIÓN DIRECTIVA",
    title: "Comisión Directiva",
    description:
      "Conoce a los profesionales que lideran SUPAP y trabajan para impulsar nuestra misión.",
    members: [] as BoardMember[],
  },

  cta: {
    title: "¿Quieres formar parte de SUPAP?",
    description:
      "Buscamos profesionales comprometidos con la excelencia terapéutica y la innovación en el campo de las psicoterapias asistidas.",
    buttons: {
      membership: "Información de Membresía",
      backToHome: "Volver al Inicio",
    },
  },
} as const
