"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_PAGE } from "@/data/contact-content"
import { COMMON_LABELS } from "@/data/common-labels"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:supap.eventos@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`

    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              {CONTACT_PAGE.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {CONTACT_PAGE.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{CONTACT_PAGE.form.title}</CardTitle>
                <CardDescription>{CONTACT_PAGE.form.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{CONTACT_PAGE.form.fields.name.label}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={CONTACT_PAGE.form.fields.name.placeholder}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{CONTACT_PAGE.form.fields.email.label}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={CONTACT_PAGE.form.fields.email.placeholder}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{CONTACT_PAGE.form.fields.subject.label}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={CONTACT_PAGE.form.fields.subject.placeholder}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{CONTACT_PAGE.form.fields.message.label}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={CONTACT_PAGE.form.fields.message.placeholder}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    {CONTACT_PAGE.form.button}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {CONTACT_PAGE.info.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {CONTACT_PAGE.info.description}
                </p>
              </div>

              <div className="space-y-4">
                {CONTACT_PAGE.info.items.map((item, idx) => {
                  const IconComponent = item.icon
                  return (
                    <Card key={idx} className="border-0 shadow-md">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.label}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ¿Interesado en formar parte de SUPAP?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Únete a nuestra comunidad de profesionales comprometidos con el uso responsable y terapéutico de sustancias psicodélicas.
            </p>
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
      </section>

      <Footer />
    </div>
  )
}
