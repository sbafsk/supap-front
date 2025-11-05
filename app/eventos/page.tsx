"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Ticket, Mail } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
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
      description: "Aprende técnicas esenciales de preparación psicológica para optimizar resultados terapéuticos.",
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
      description: "Abordaje integral del proceso de integración después de sesiones terapéuticas con psicodélicos.",
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
      description: "Presentación de últimos avances en investigación clínica sobre tratamiento de depresión.",
      capacity: "200 participantes",
      ticketPrice: "Socios: Gratuito | No socios: $500",
    },
  ]

  const eventTypes = [
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
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">Próximos Eventos</h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              Aprende de los mejores expertos en un ambiente colaborativo y enriquecedor
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              TIPOS DE EVENTOS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Formatos Variados</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, idx) => {
              const IconComponent = event.icon
              return (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{event.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{event.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              CALENDARIO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Próximos 4 Eventos</h2>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <Badge variant="outline">{new Date(event.date).toLocaleDateString("es-ES")}</Badge>
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{event.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Horario</p>
                          <p className="text-muted-foreground text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Ubicación</p>
                          <p className="text-muted-foreground text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Capacidad</p>
                          <p className="text-muted-foreground text-sm">{event.capacity}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-2">Disertantes</p>
                        <ul className="space-y-1">
                          {event.speakers.map((speaker, i) => (
                            <p key={i} className="text-muted-foreground text-sm">
                              • {speaker}
                            </p>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-2">Entradas</p>
                        <p className="text-muted-foreground text-sm">{event.ticketPrice}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-base">
                    <Ticket className="mr-2 h-5 w-5" />
                    Registrarse
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-background">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                MANTENTE ACTUALIZADO
              </Badge>
              <CardTitle className="text-3xl md:text-4xl">Suscríbete a Nuestro Newsletter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                Recibe las últimas noticias sobre eventos, investigación y oportunidades de formación directamente en tu
                correo.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">¿No encontraste lo que buscas?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Contáctanos para conocer sobre eventos personalizados, talleres privados o consultoría especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90">
                Solicitar Evento Personalizado
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
                onClick={() => (window.location.href = "/")}
              >
                Volver al Inicio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
