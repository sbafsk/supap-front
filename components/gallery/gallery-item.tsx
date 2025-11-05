"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryItemProps {
  src: string
  alt: string
  caption: string
  date: string
  onClick: () => void
}

export function GalleryItem({ src, alt, caption, date, onClick }: GalleryItemProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div onClick={onClick} className="group relative h-64 md:h-72 bg-muted rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        onLoadingComplete={() => setIsLoading(false)}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
        <div className="text-white">
          <p className="font-semibold text-sm md:text-base">{caption}</p>
          <p className="text-xs text-white/80">{new Date(date).toLocaleDateString("es-ES")}</p>
        </div>
      </div>
    </div>
  )
}
