"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { galleryImages } from "@/data/gallery-images"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Mail } from "lucide-react"
import { TEAM_PAGE } from "@/data/team-content"
import Image from "next/image"

export default function TeamPage() {
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
              {TEAM_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {TEAM_PAGE.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {TEAM_PAGE.structure.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {TEAM_PAGE.structure.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {TEAM_PAGE.structure.description}
            </p>
          </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_PAGE.structure.items.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <ScrollReveal key={idx} animation="fade-in-up" delay={(idx * 100) as 0 | 100 | 200}>
                <Card
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
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground font-medium">{item.members}</p>
                    </div>
                  </CardContent>
                </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      {TEAM_PAGE.boardMembers.members.length > 0 && (
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                {TEAM_PAGE.boardMembers.badge}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                {TEAM_PAGE.boardMembers.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {TEAM_PAGE.boardMembers.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {TEAM_PAGE.boardMembers.members.map((member, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {member.role}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-center">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              {TEAM_PAGE.gallery.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {TEAM_PAGE.gallery.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {TEAM_PAGE.gallery.description}
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Badge className="mx-auto mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              {TEAM_PAGE.values.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {TEAM_PAGE.values.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {TEAM_PAGE.values.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_PAGE.values.items.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {TEAM_PAGE.cta.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {TEAM_PAGE.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg px-8 font-semibold bg-primary hover:bg-primary/90"
              >
                <Mail className="mr-2 h-5 w-5" />
                {TEAM_PAGE.cta.buttons.membership}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 font-semibold bg-transparent hover:bg-secondary/10"
                onClick={() => (window.location.href = "/")}
              >
                {TEAM_PAGE.cta.buttons.backToHome}
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
