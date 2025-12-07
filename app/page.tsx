"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Mail, MapPin, Calendar, Users, Heart, Brain, Leaf, ArrowRight } from "lucide-react"
import { HOME_PAGE } from "@/data/page-content"
import { COMMON_LABELS } from "@/data/common-labels"
import Link from "next/link"

export default function HomePage() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              {HOME_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {HOME_PAGE.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-8 font-semibold"
              >
                <Users className="mr-2 h-5 w-5" />
                {COMMON_LABELS.buttons.joinSupap}
              </Button>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold border-2 border-white/40 text-white bg-transparent hover:bg-white/10 transition-colors"
                onClick={() => scrollToId("events")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {COMMON_LABELS.buttons.upcomingEvents}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                {HOME_PAGE.mission.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {HOME_PAGE.mission.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Research Card */}
            <ScrollReveal animation="fade-in-up" delay={100}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{HOME_PAGE.mission.cards[0].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {HOME_PAGE.mission.cards[0].description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Therapy Card */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{HOME_PAGE.mission.cards[1].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {HOME_PAGE.mission.cards[1].description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Education Card */}
            <ScrollReveal animation="fade-in-up" delay={300}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{HOME_PAGE.mission.cards[2].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {HOME_PAGE.mission.cards[2].description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/nosotros">
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold hover:bg-primary/10"
              >
                {COMMON_LABELS.buttons.viewMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                {HOME_PAGE.services.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {HOME_PAGE.services.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_PAGE.services.items.map((service, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-in-up"
                delay={(idx % 3) * 100 as 0 | 100 | 200}
              >
                <Card
                  className={`hover:shadow-lg transition-all duration-300 border-l-4 ${service.color} bg-white h-full`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold hover:bg-primary/10"
              >
                {COMMON_LABELS.buttons.viewAllServices}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                {HOME_PAGE.events.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {HOME_PAGE.events.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {HOME_PAGE.events.upcomingEvent.badge}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{HOME_PAGE.events.upcomingEvent.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-sm md:text-base">
                        {HOME_PAGE.events.upcomingEvent.date}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-sm md:text-base">
                        {HOME_PAGE.events.upcomingEvent.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mt-4">
                      {HOME_PAGE.events.upcomingEvent.speakers}
                    </p>
                    <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-base">
                      {COMMON_LABELS.buttons.register}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Membership Info Card */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {HOME_PAGE.events.membership.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {HOME_PAGE.events.membership.pricing.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <span className="text-sm md:text-base font-medium text-foreground">
                          {item.label}
                        </span>
                        <Badge
                          variant={item.badge as "default" | "secondary" | "destructive" | "outline"}
                        >
                          {item.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">
                          {HOME_PAGE.events.membership.registration.label}
                        </strong>{" "}
                        {HOME_PAGE.events.membership.registration.value}
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">
                          {HOME_PAGE.events.membership.inquiries.label}
                        </strong>{" "}
                        {HOME_PAGE.events.membership.inquiries.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/eventos">
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold hover:bg-primary/10"
              >
                {COMMON_LABELS.buttons.viewAllEvents}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal animation="scale-in">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                {HOME_PAGE.cta.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                {HOME_PAGE.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {HOME_PAGE.cta.buttons.contact}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
                >
                  <Users className="mr-2 h-5 w-5" />
                  {HOME_PAGE.cta.buttons.becomeMember}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
