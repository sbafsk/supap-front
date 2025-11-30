export interface NavLinkItem {
  id: string
  label: string
  href: string
}

export const navLinks: NavLinkItem[] = [
  { label: "Inicio", href: "/", id: "home" },
  { label: "Nosotros", href: "/nosotros", id: "about" },
  { label: "Equipo", href: "/equipo", id: "team" },
  { label: "Servicios", href: "/servicios", id: "services" },
  { label: "Eventos", href: "/eventos", id: "events" },
  { label: "Acción País", href: "/accionpais", id: "accionpais" },
  { label: "Aula Virtual", href: "/aulavirtual", id: "aulavirtual" },
]
