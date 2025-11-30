"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail } from "lucide-react"
import { ACCION_PAIS_PAGE } from "@/data/accionpais-content"

export default function AccionPaisPage() {
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
              {ACCION_PAIS_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {ACCION_PAIS_PAGE.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {ACCION_PAIS_PAGE.intro.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ACCION_PAIS_PAGE.intro.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ACCION_PAIS_PAGE.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              {ACCION_PAIS_PAGE.objectives.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ACCION_PAIS_PAGE.objectives.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ACCION_PAIS_PAGE.objectives.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ACCION_PAIS_PAGE.objectives.items.map((obj, idx) => {
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
                    <CardTitle className="text-xl">{obj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {obj.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-accent/10 text-accent border-accent/20">
              {ACCION_PAIS_PAGE.content.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ACCION_PAIS_PAGE.content.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ACCION_PAIS_PAGE.content.description}
            </p>
          </div>

          {ACCION_PAIS_PAGE.content.documents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ACCION_PAIS_PAGE.content.documents.map((doc, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {doc.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {doc.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{doc.description}</p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(doc.file, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Próximamente estará disponible material y documentación sobre nuestras iniciativas
                  de Acción País.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ACCION_PAIS_PAGE.cta.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {ACCION_PAIS_PAGE.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90"
              >
                <Mail className="mr-2 h-5 w-5" />
                {ACCION_PAIS_PAGE.cta.buttons.contact}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
                onClick={() => (window.location.href = "/")}
              >
                {ACCION_PAIS_PAGE.cta.buttons.learnMore}
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
