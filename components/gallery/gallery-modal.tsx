"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  date: string
}

interface GalleryModalProps {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export function GalleryModal({ images, initialIndex, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const current = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-10"
        aria-label="Close modal"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative w-full flex-1 flex items-center justify-center">
          <Image src={current.src || "/placeholder.svg"} alt={current.alt} fill className="object-contain" priority />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors p-2"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors p-2"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Caption and info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-white font-semibold text-lg">{current.caption}</p>
          <p className="text-white/70 text-sm">{new Date(current.date).toLocaleDateString("es-ES")}</p>
          <p className="text-white/50 text-xs mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}
