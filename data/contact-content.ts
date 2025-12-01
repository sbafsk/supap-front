import { Mail, Instagram, MapPin } from "lucide-react"

/**
 * Contact page content constants
 */

export const CONTACT_PAGE = {
  hero: {
    title: "Contáctanos",
    description:
      "¿Tienes preguntas o deseas conocer más sobre SUPAP? Estamos aquí para ayudarte. Completa el formulario o comunícate directamente con nosotros.",
  },

  form: {
    title: "Envíanos un mensaje",
    description: "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
    fields: {
      name: {
        label: "Nombre completo",
        placeholder: "Tu nombre",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "tu@email.com",
      },
      subject: {
        label: "Asunto",
        placeholder: "¿En qué podemos ayudarte?",
      },
      message: {
        label: "Mensaje",
        placeholder: "Escribe tu mensaje aquí...",
      },
    },
    button: "Enviar mensaje",
  },

  info: {
    title: "Información de contacto",
    description: "También puedes comunicarte directamente a través de nuestros canales:",
    items: [
      {
        icon: Mail,
        label: "Correo electrónico",
        value: "supap.eventos@gmail.com",
        href: "mailto:supap.eventos@gmail.com",
      },
      {
        icon: Instagram,
        label: "Instagram",
        value: "@supap.uy",
        href: "https://instagram.com/supap.uy",
      },
      {
        icon: MapPin,
        label: "Ubicación",
        value: "Uruguay",
        href: null,
      },
    ],
  },
} as const
