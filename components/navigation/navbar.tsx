"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
  currentPage?: string
}

export function Navbar({ currentPage }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Inicio", href: "/", id: "home" },
    { label: "Nosotros", href: "/nosotros", id: "about" },
    { label: "Equipo", href: "/equipo", id: "team" },
    { label: "Servicios", href: "/servicios", id: "services" },
    { label: "Eventos", href: "/eventos", id: "events" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const handleNavClick = () => {
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 transition-all">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/supap-logo.jpg"
              alt="SUPAP Logo"
              width={50}
              height={50}
              className="rounded-full bg-primary/10 p-1"
            />
            <div>
              <h1 className="text-lg font-bold text-primary">SUPAP</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive(link.href) ? "text-primary font-bold" : "text-foreground/70 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/10 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${isActive(link.href)
                    ? "text-primary bg-muted font-bold"
                    : "text-foreground/70 hover:text-primary hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-secondary hover:bg-secondary/90">Contacto</Button>
          </div>
        )}
      </div>
    </header>
  )
}
