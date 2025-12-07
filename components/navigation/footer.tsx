import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/data/nav-links"
import { FOOTER_CONTENT } from "@/data/footer-content"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                <h3 className="font-bold text-base">{FOOTER_CONTENT.organization.name}</h3>
                <p className="text-xs text-white/70">{FOOTER_CONTENT.organization.tagline}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {FOOTER_CONTENT.organization.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">{FOOTER_CONTENT.sections.links}</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">{FOOTER_CONTENT.sections.contact}</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={FOOTER_CONTENT.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {FOOTER_CONTENT.contact.instagram}
                </a>
              </p>
              <p>{FOOTER_CONTENT.contact.country}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">{FOOTER_CONTENT.sections.partnerships}</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/70 mb-1">{FOOTER_CONTENT.partnerships.fipe.description}</p>
                <a
                  href={FOOTER_CONTENT.partnerships.fipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                  title={FOOTER_CONTENT.partnerships.fipe.fullName}
                >
                  {FOOTER_CONTENT.partnerships.fipe.name}
                </a>
              </div>
              <div>
                <p className="text-white/70 mb-1">
                  {FOOTER_CONTENT.partnerships.minka.description}
                </p>
                <a
                  href={FOOTER_CONTENT.partnerships.minka.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                  title={FOOTER_CONTENT.partnerships.minka.fullName}
                >
                  {FOOTER_CONTENT.partnerships.minka.name}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>{FOOTER_CONTENT.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
