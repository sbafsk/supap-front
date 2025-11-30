/**
 * Common UI labels and text used across multiple components
 */

export const COMMON_LABELS = {
  // Organization name
  organizationName: 'SUPAP',
  organizationFullName:
    'Sociedad Uruguaya de Psicoterapias Asistidas con Psicodélicos',
  organizationFullNameLong:
    'SUPAP - Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos',

  // Common buttons
  buttons: {
    contact: 'Contacto',
    joinSupap: 'Únete a SUPAP',
    becomeMember: 'Hacerse Socio',
    register: 'Registrarse',
    backToHome: 'Volver al Inicio',
    requestInfo: 'Solicitar Información',
    requestCustomEvent: 'Solicitar Evento Personalizado',
    upcomingEvents: 'Próximos Eventos',
    subscribe: 'Suscribirse',
  },

  // Contact information
  contact: {
    email: 'supap.eventos@gmail.com',
    instagram: '@supap.uy',
    instagramLink: 'link en bio @supap.uy',
  },

  // Common form placeholders
  forms: {
    emailPlaceholder: 'Tu email',
  },
} as const;
