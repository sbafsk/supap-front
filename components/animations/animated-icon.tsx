"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  animation?: "bounce" | "pulse" | "spin" | "wiggle" | "float"
}

export function AnimatedIcon({ icon: Icon, className, animation = "bounce" }: AnimatedIconProps) {
  const animationClasses = {
    bounce: "hover:animate-bounce",
    pulse: "hover:animate-pulse",
    spin: "hover:animate-spin",
    wiggle: "hover:animate-wiggle",
    float: "hover:animate-float",
  }

  return (
    <Icon
      className={cn(
        "transition-all duration-300",
        animationClasses[animation],
        className
      )}
    />
  )
}
