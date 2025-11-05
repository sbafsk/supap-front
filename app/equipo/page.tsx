"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { galleryImages } from "@/data/gallery-images"
import { Users, Shield, Briefcase, Heart, Target, Handshake, Mail } from "lucide-react"

export default function TeamPage() {
  const teamStructure = [
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
      members: "Comunicación • Académica • Reducción de Daños • Legal • Tesorería • Publicaciones • Eventos",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
    },
  ]

  const teamValues = [
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
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">Nuestro Equipo</h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              Profesionales interdisciplinarios comprometidos con la excelencia en psicoterapias asistidas por
              psicodélicos y enteógenos
            </p>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              ESTRUCTURA ORGANIZACIONAL
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Estructura Organizacional</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              SUPAP está organizada en comisiones especializadas que trabajan conjuntamente para cumplir con nuestra
              misión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamStructure.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground font-medium">{item.members}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              GALERÍA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Momentos de Nuestra Comunidad</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Actividades, eventos y encuentros que reflejan nuestro compromiso con la excelencia y la colaboración
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">VALORES</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Nuestros Valores</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Los principios que guían nuestro trabajo y compromiso con la comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">¿Quieres formar parte de SUPAP?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Buscamos profesionales comprometidos con la excelencia terapéutica y la innovación en el campo de las
              psicoterapias asistidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Información de Membresía
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
