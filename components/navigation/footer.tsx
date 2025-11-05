"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/supap-logo.jpg"
                alt="SUPAP Logo"
                width={40}
                height={40}
                className="rounded-full bg-white/10 p-1"
              />
              <div>
                <h3 className="font-bold text-base">SUPAP</h3>
                <p className="text-xs text-white/70">Sociedad Uruguaya</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Promoviendo el uso responsable y terapéutico de sustancias psicodélicas en el contexto de la salud mental.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Equipo", href: "/equipo" },
                { label: "Servicios", href: "/servicios" },
                { label: "Eventos", href: "/eventos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Contacto</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a href="mailto:supap.eventos@gmail.com" className="hover:text-white transition-colors">
                  supap.eventos@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/supap.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @supap.uy
                </a>
              </p>
              <p>Uruguay</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 SUPAP - Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos</p>
        </div>
      </div>
    </footer>
  )
}
