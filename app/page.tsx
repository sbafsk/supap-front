"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Mail, MapPin, Calendar, Users, Heart, Brain, Leaf } from "lucide-react"

export default function HomePage() {
  const [scrollToSection] = useState(false)

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Sociedad Uruguaya de Psicoterapias Asistidas con Psicodélicos
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              Promoviendo el uso responsable y terapéutico de sustancias psicodélicas en el contexto de la salud mental
              y el bienestar integral
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-8 font-semibold">
                <Users className="mr-2 h-5 w-5" />
                Únete a SUPAP
              </Button>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold border-2 border-white/40 text-white bg-transparent hover:bg-white/10 transition-colors"
                onClick={() => scrollToId("events")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Próximos Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestra Misión</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              SUPAP es una organización dedicada a la investigación, educación y promoción del uso terapéutico
              responsable de sustancias psicodélicas y enteógenas en el contexto de la salud mental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Research Card */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Investigación</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Promovemos la investigación científica rigurosa sobre los efectos terapéuticos de las sustancias
                  psicodélicas.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Therapy Card */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Terapia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Desarrollamos protocolos terapéuticos seguros y efectivos para el tratamiento de diversos trastornos
                  mentales.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Educación</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Educamos a profesionales y al público sobre el uso responsable y los beneficios terapéuticos de estas
                  sustancias.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestros Servicios</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ofrecemos una amplia gama de servicios para profesionales, investigadores y personas interesadas en las
              terapias psicodélicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Formación Profesional",
                description:
                  "Cursos y talleres especializados para profesionales de la salud mental interesados en terapias asistidas por psicodélicos.",
                color: "border-l-primary",
              },
              {
                title: "Investigación Clínica",
                description:
                  "Participación en estudios clínicos y proyectos de investigación sobre la eficacia terapéutica de sustancias psicodélicas.",
                color: "border-l-secondary",
              },
              {
                title: "Consultoría",
                description:
                  "Asesoramiento especializado para instituciones y profesionales que deseen implementar protocolos terapéuticos seguros.",
                color: "border-l-accent",
              },
              {
                title: "Eventos Académicos",
                description:
                  "Conferencias, seminarios y conversatorios sobre avances en psicoterapias asistidas por psicodélicos.",
                color: "border-l-primary",
              },
              {
                title: "Red de Profesionales",
                description:
                  "Conexión con una red de profesionales especializados en terapias psicodélicas a nivel nacional e internacional.",
                color: "border-l-secondary",
              },
              {
                title: "Recursos Educativos",
                description:
                  "Acceso a biblioteca especializada, publicaciones científicas y materiales educativos actualizados.",
                color: "border-l-accent",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className={`hover:shadow-lg transition-all duration-300 border-l-4 ${service.color} bg-white`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Próximos Eventos</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mantente al día con nuestras actividades académicas y eventos especiales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">Próximo Evento</span>
                </div>
                <CardTitle className="text-xl">Conversatorio sobre Microdosis de Psilocibes</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-sm md:text-base">Sábado 16/08/25 de 10:00 a 13:00 (UY)</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-sm md:text-base">Modalidad Virtual</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mt-4">
                    Con Lic. Cecilia Morelli & Lic. Sebastián Griscti
                  </p>
                  <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-base">Registrarse</Button>
                </div>
              </CardContent>
            </Card>

            {/* Membership Info Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Información de Membresía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { label: "Socios SUPAP", value: "Gratuito", badge: "secondary" },
                    { label: "No socios", value: "$800", badge: "outline" },
                    { label: "Organizaciones FIPE", value: "USD 12", badge: "outline" },
                    { label: "Estudiantes Universitarios", value: "$500", badge: "outline" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                    >
                      <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
                      <Badge variant={item.badge as any}>{item.value}</Badge>
                    </div>
                  ))}
                </div>
                <div className="pt-6 space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Inscripción:</strong> link en bio @supap.uy
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Consultas:</strong> supap.eventos@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Únete a Nuestra Comunidad</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Forma parte de la red de profesionales que está transformando el futuro de la salud mental en Uruguay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
              >
                <Users className="mr-2 h-5 w-5" />
                Hacerse Socio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
