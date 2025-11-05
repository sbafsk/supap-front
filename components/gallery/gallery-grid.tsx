"use client"

import { useState } from "react"
import { GalleryItem } from "./gallery-item"
import { GalleryModal } from "./gallery-modal"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  date: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            date={image.date}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <GalleryModal images={images} initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}
    </>
  )
}
