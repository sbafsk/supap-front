"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Ticket, Mail } from "lucide-react"
import { EVENTS_PAGE } from "@/data/events-content"
import { COMMON_LABELS } from "@/data/common-labels"

export default function EventsPage() {
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

        <div className="relative container mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              {EVENTS_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {EVENTS_PAGE.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {EVENTS_PAGE.eventTypes.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {EVENTS_PAGE.eventTypes.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_PAGE.eventTypes.items.map((event, idx) => {
              const IconComponent = event.icon
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{event.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              {EVENTS_PAGE.upcomingEvents.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {EVENTS_PAGE.upcomingEvents.title}
            </h2>
          </div>

          <div className="space-y-6">
            {EVENTS_PAGE.upcomingEvents.events.map((event) => (
              <Card
                key={event.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <Badge variant="outline">
                          {new Date(event.date).toLocaleDateString("es-ES")}
                        </Badge>
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
                          <p className="font-semibold text-foreground text-sm">
                            {EVENTS_PAGE.upcomingEvents.labels.time}
                          </p>
                          <p className="text-muted-foreground text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {EVENTS_PAGE.upcomingEvents.labels.location}
                          </p>
                          <p className="text-muted-foreground text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {EVENTS_PAGE.upcomingEvents.labels.capacity}
                          </p>
                          <p className="text-muted-foreground text-sm">{event.capacity}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-2">
                          {EVENTS_PAGE.upcomingEvents.labels.speakers}
                        </p>
                        <ul className="space-y-1">
                          {event.speakers.map((speaker, i) => (
                            <p key={i} className="text-muted-foreground text-sm">
                              • {speaker}
                            </p>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-2">
                          {EVENTS_PAGE.upcomingEvents.labels.tickets}
                        </p>
                        <p className="text-muted-foreground text-sm">{event.ticketPrice}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-base">
                    <Ticket className="mr-2 h-5 w-5" />
                    {COMMON_LABELS.buttons.register}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-background">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                {EVENTS_PAGE.newsletter.badge}
              </Badge>
              <CardTitle className="text-3xl md:text-4xl">{EVENTS_PAGE.newsletter.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                {EVENTS_PAGE.newsletter.description}
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder={COMMON_LABELS.forms.emailPlaceholder}
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {EVENTS_PAGE.cta.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {EVENTS_PAGE.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90"
              >
                {COMMON_LABELS.buttons.requestCustomEvent}
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
