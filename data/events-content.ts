import { Users, Clock, Calendar, Ticket } from "lucide-react"

/**
 * Events/Eventos page content constants
 */

export const EVENTS_PAGE = {
  hero: {
    title: "Próximos Eventos",
    description: "Aprende de los mejores expertos en un ambiente colaborativo y enriquecedor",
  },

  eventTypes: {
    badge: "TIPOS DE EVENTOS",
    title: "Formatos Variados",
    items: [
      {
        type: "Conversatorios",
        description: "Diálogos abiertos sobre temas de actualidad en psicoterapias asistidas",
        icon: Users,
      },
      {
        type: "Talleres Prácticos",
        description: "Capacitación interactiva con ejercicios y herramientas aplicables",
        icon: Clock,
      },
      {
        type: "Seminarios Especializados",
        description: "Profundización en temas específicos con expertos reconocidos",
        icon: Calendar,
      },
      {
        type: "Conferencias Magistrales",
        description: "Presentaciones de investigación de punta y hallazgos científicos",
        icon: Ticket,
      },
    ],
  },

  upcomingEvents: {
    badge: "CALENDARIO",
    title: "Próximos 4 Eventos",
    events: [
      {
        id: 1,
        title: "Conversatorio sobre Microdosis de Psilocibes",
        date: "2025-08-16",
        time: "10:00 - 13:00",
        location: "Virtual",
        speakers: ["Lic. Cecilia Morelli", "Lic. Sebastián Griscti"],
        description:
          "Exploraremos los efectos, beneficios y consideraciones éticas de la microdosificación de psilocibes.",
        capacity: "150 participantes",
        ticketPrice: "Socios: Gratuito | No socios: $800",
      },
      {
        id: 2,
        title: "Taller de Formación: Preparación Psicológica en Terapias Psicodélicas",
        date: "2025-09-20",
        time: "14:00 - 18:00",
        location: "Sala de Capacitación SUPAP",
        speakers: ["Dr. Fernando López", "Dra. María García"],
        description:
          "Aprende técnicas esenciales de preparación psicológica para optimizar resultados terapéuticos.",
        capacity: "30 participantes",
        ticketPrice: "Socios: Gratuito | No socios: $1200 | Estudiantes: $600",
      },
      {
        id: 3,
        title: "Seminario: Integración Post-Sesión en Terapias Asistidas",
        date: "2025-10-11",
        time: "09:00 - 12:00",
        location: "Virtual",
        speakers: ["Lic. Andrea Martínez"],
        description:
          "Abordaje integral del proceso de integración después de sesiones terapéuticas con psicodélicos.",
        capacity: "100 participantes",
        ticketPrice: "Socios: Gratuito | No socios: $750",
      },
      {
        id: 4,
        title: "Conferencia: Investigación Reciente en Depresión Resistente al Tratamiento",
        date: "2025-11-08",
        time: "18:00 - 20:00",
        location: "Teatro Auditorium",
        speakers: ["Dr. Roberto Silva"],
        description:
          "Presentación de últimos avances en investigación clínica sobre tratamiento de depresión.",
        capacity: "200 participantes",
        ticketPrice: "Socios: Gratuito | No socios: $500",
      },
    ],
    labels: {
      time: "Horario",
      location: "Ubicación",
      capacity: "Capacidad",
      speakers: "Disertantes",
      tickets: "Entradas",
    },
  },

  newsletter: {
    badge: "MANTENTE ACTUALIZADO",
    title: "Suscríbete a Nuestro Newsletter",
    description:
      "Recibe las últimas noticias sobre eventos, investigación y oportunidades de formación directamente en tu correo.",
  },

  cta: {
    title: "¿No encontraste lo que buscas?",
    description:
      "Contáctanos para conocer sobre eventos personalizados, talleres privados o consultoría especializada.",
  },
} as const
