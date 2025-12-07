"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in-up" | "fade-in" | "scale-in"
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0-start",
        isVisible && `animate-${animation}`,
        delay > 0 && isVisible && `delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  )
}
