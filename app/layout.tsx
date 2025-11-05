import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SUPAP - Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos",
  description:
    "Organización interdisciplinaria dedicada a la investigación, formación y difusión en psicoterapias asistidas por psicodélicos. Aprobada por MEC y MSP.",
  keywords: ["psicoterapia", "psicodélicos", "enteógenos", "salud mental", "Uruguay", "SUPAP"],
  authors: [{ name: "SUPAP" }],
  openGraph: {
    title: "SUPAP - Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos",
    description: "Organización interdisciplinaria dedicada a la investigación, formación y difusión en psicoterapias asistidas por psicodélicos",
    url: "https://supap.uy",
    siteName: "SUPAP",
    locale: "es_UY",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
