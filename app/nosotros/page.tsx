"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Zap, Users, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const objectives = [
    {
      title: "Investigación Científica",
      description: "Promover y facilitar la investigación rigurosa sobre psicoterapias asistidas por psicodélicos",
      icon: Zap,
    },
    {
      title: "Formación Profesional",
      description: "Desarrollar programas educativos de calidad para profesionales de la salud mental",
      icon: Target,
    },
    {
      title: "Seguridad y Ética",
      description: "Establecer estándares éticos y de seguridad para prácticas terapéuticas responsables",
      icon: Award,
    },
    {
      title: "Advocacy Político",
      description: "Colaborar con reguladores y legisladores para crear marcos legales favorables",
      icon: Users,
    },
    {
      title: "Acceso a Tratamientos",
      description: "Facilitar el acceso equitativo a tratamientos psicodélicos validados científicamente",
      icon: CheckCircle,
    },
    {
      title: "Red Colaborativa",
      description: "Construir una red internacional de profesionales comprometidos con la excelencia",
      icon: Users,
    },
  ]

  const milestones = [
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
      description: "Establecimiento de alianzas con organizaciones internacionales de investigación",
    },
    {
      year: "2025",
      title: "Expansión de Programas",
      description: "Lanzamiento de nuevos programas de formación e investigación colaborativa",
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">Acerca de SUPAP</h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              Transformando la salud mental a través de investigación científica rigurosa y práctica terapéutica
              responsable
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent pb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  SUPAP se dedica a la investigación, educación y promoción del uso terapéutico responsable de
                  sustancias psicodélicas y enteógenas en el contexto de la salud mental y el bienestar integral.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos para crear un marco científico, ético y legal que permita a los profesionales de la salud
                  acceder a herramientas terapéuticas innovadoras para tratar trastornos mentales graves y resistentes.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-br from-secondary/10 to-transparent pb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-secondary">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Una sociedad donde las psicoterapias asistidas por psicodélicos y enteógenos son reconocidas,
                  investigadas y practicadas como herramientas terapéuticas seguras, efectivas y accesibles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Buscamos liderar el avance científico en Latinoamérica, demostrando que el uso responsable de estos
                  recursos puede revolucionar el tratamiento de la salud mental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">HISTORIA</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestro Camino</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Desde nuestra fundación, hemos trabajado incansablemente para establecer los estándares más altos en
              investigación y práctica clínica.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-8 md:mb-12 last:mb-0">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background" />
                  {idx !== milestones.length - 1 && <div className="w-1 h-32 md:h-40 bg-primary/20 mt-4" />}
                </div>

                {/* Content */}
                <Card className="border-0 shadow-lg flex-1 mt-2">
                  <CardHeader>
                    <div className="flex items-baseline gap-4 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-lg md:text-xl">{milestone.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              OBJETIVOS ESTRATÉGICOS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestros Objetivos</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Seis pilares estratégicos que guían nuestro trabajo y compromiso con la transformación de la salud mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const IconComponent = obj.icon
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{obj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{obj.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-accent/10 text-accent border-accent/20">
              VALORES FUNDAMENTALES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Lo Que Nos Define</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">{item.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">ALIANZAS</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Reconocimiento y Colaboraciones</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              SUPAP colabora con instituciones académicas, organismos de salud y organizaciones internacionales líderes
              en investigación psicodélica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Autoridades Regulatorias",
                items: ["Ministerio de Educación y Cultura (MEC)", "Ministerio de Salud Pública (MSP)"],
              },
              {
                title: "Redes Internacionales",
                items: ["Psychedelic Research Initiative", "International Society for Psychedelic Research"],
              },
              {
                title: "Universidades Asociadas",
                items: ["Colaboraciones académicas", "Programas de investigación conjuntos"],
              },
            ].map((partner, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{partner.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {partner.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Únete a Nuestro Movimiento</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Sé parte de la revolución en salud mental. Juntos estamos transformando el futuro de la terapia
              psicológica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90">
                Hacerse Socio
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
