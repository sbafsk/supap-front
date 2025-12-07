"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { CheckCircle } from "lucide-react"
import { ABOUT_PAGE } from "@/data/about-content"
import { COMMON_LABELS } from "@/data/common-labels"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary text-white animate-fade-in">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              {ABOUT_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {ABOUT_PAGE.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <ScrollReveal animation="fade-in-up" delay={100}>
            <Card className="bg-linear-to-br from-primary/10 to-transparent  border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="rounded-t-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <ABOUT_PAGE.mission.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">{ABOUT_PAGE.mission.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{ABOUT_PAGE.mission.primaryText}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {ABOUT_PAGE.mission.secondaryText}
                </p>
              </CardContent>
            </Card>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal animation="fade-in-up" delay={200}>
            <Card className="bg-linear-to-br from-secondary/10   to-transparent border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="rounded-t-xl">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <ABOUT_PAGE.vision.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-secondary">{ABOUT_PAGE.vision.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{ABOUT_PAGE.vision.primaryText}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {ABOUT_PAGE.vision.secondaryText}
                </p>
              </CardContent>
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {ABOUT_PAGE.history.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ABOUT_PAGE.history.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ABOUT_PAGE.history.description}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {ABOUT_PAGE.history.milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-8 md:mb-12 last:mb-0">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background" />
                  {idx !== ABOUT_PAGE.history.milestones.length - 1 && (
                    <div className="w-1 h-32 md:h-40 bg-primary/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <Card className="border-0 shadow-lg flex-1 mt-2">
                  <CardHeader>
                    <div className="flex items-baseline gap-4 mb-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              {ABOUT_PAGE.objectives.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ABOUT_PAGE.objectives.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ABOUT_PAGE.objectives.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_PAGE.objectives.items.map((obj, idx) => {
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-accent/10 text-accent border-accent/20">
              {ABOUT_PAGE.values.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ABOUT_PAGE.values.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ABOUT_PAGE.values.items.map((item, idx) => (
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {ABOUT_PAGE.partnerships.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ABOUT_PAGE.partnerships.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {ABOUT_PAGE.partnerships.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ABOUT_PAGE.partnerships.categories.map((partner, idx) => (
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {ABOUT_PAGE.cta.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {ABOUT_PAGE.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90"
              >
                {COMMON_LABELS.buttons.becomeMember}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
                onClick={() => (window.location.href = "/")}
              >
                {COMMON_LABELS.buttons.backToHome}
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
