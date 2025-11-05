"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Shield, Briefcase, Network, FileText, CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Formación Profesional",
      description:
        "Programas educativos especializados para profesionales de la salud mental que desean profundizar en terapias asistidas por psicodélicos",
      icon: BookOpen,
      details: [
        "Cursos teóricos y prácticos",
        "Certificación profesional",
        "Mentorías individualizadas",
        "Acceso a recursos científicos",
      ],
    },
    {
      title: "Investigación Clínica",
      description:
        "Oportunidades para participar en estudios de investigación rigurosos sobre eficacia terapéutica de sustancias psicodélicas",
      icon: FileText,
      details: [
        "Diseño de protocolos de investigación",
        "Recopilación de datos",
        "Análisis estadístico",
        "Publicación de resultados",
      ],
    },
    {
      title: "Consultoría Especializada",
      description:
        "Asesoramiento experto para instituciones y profesionales que implementan protocolos terapéuticos seguros",
      icon: Briefcase,
      details: [
        "Auditoría de protocolos",
        "Capacitación del personal",
        "Diseño de infraestructura",
        "Cumplimiento normativo",
      ],
    },
    {
      title: "Eventos Académicos",
      description:
        "Conferencias, seminarios y conversatorios sobre avances en investigación psicodélica y salud mental",
      icon: Users,
      details: ["Conferencias especializadas", "Talleres prácticos", "Mesas redondas", "Networking profesional"],
    },
    {
      title: "Red Internacional de Profesionales",
      description: "Conexión con expertos y organismos internacionales especializados en terapias psicodélicas",
      icon: Network,
      details: [
        "Directorio de profesionales",
        "Colaboraciones internacionales",
        "Intercambio de conocimiento",
        "Oportunidades de trabajo en red",
      ],
    },
    {
      title: "Recursos Educativos",
      description: "Acceso a biblioteca científica, publicaciones especializadas y materiales educativos actualizados",
      icon: Shield,
      details: ["Artículos científicos", "Libros especializados", "Videos educativos", "Webinarios grabados"],
    },
  ]

  const serviceProcess = [
    {
      step: 1,
      title: "Consulta Inicial",
      description: "Evaluamos tus necesidades específicas y recomendamos el servicio más apropiado",
    },
    {
      step: 2,
      title: "Evaluación Personalizada",
      description: "Realizamos un análisis detallado de tu situación y objetivos",
    },
    {
      step: 3,
      title: "Plan Personalizado",
      description: "Diseñamos un programa adaptado a tus requerimientos únicos",
    },
    {
      step: 4,
      title: "Implementación",
      description: "Trabajamos contigo para implementar y optimizar los resultados",
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              Soluciones integrales para profesionales e instituciones comprometidas con la excelencia en psicoterapias
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              SERVICIOS PRINCIPALES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Lo Que Ofrecemos</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Una gama completa de servicios diseñados para apoyar tu crecimiento profesional y práctica clínica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                    <ul className="space-y-2 text-sm">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              CÓMO FUNCIONA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestro Proceso</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {serviceProcess.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <Card className="border-0 shadow-lg flex-1 relative">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {item.step}
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                  {idx < serviceProcess.length - 1 && (
                    <div className="hidden md:flex justify-center mt-6">
                      <ArrowRight className="h-6 w-6 text-primary/30 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <Badge className="w-fit mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                  TESTIMONIO
                </Badge>
                <CardTitle className="text-2xl md:text-3xl">¿Por Qué Elegirnos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  En SUPAP, combinamos rigor científico con apoyo personalizado. Nuestro equipo multidisciplinario está
                  dedicado a tu éxito, ofreciendo programas flexibles, mentoría experta y acceso a la red más amplia de
                  profesionales en el campo de psicoterapias asistidas por psicodélicos.
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Expertos con décadas de experiencia",
                    "Programas personalizados",
                    "Certificación internacionalmente reconocida",
                    "Acceso a investigación de punta",
                    "Comunidad de profesionales",
                    "Apoyo continuo después del programa",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">¿Listo para Comenzar?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Contáctanos hoy para descubrir cuál es el servicio más adecuado para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90">
                Solicitar Información
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
