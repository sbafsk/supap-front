"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in pointer-events-none" />
      )}
      <div className={isLoading ? "opacity-0" : "animate-fade-in"}>
        {children}
      </div>
    </>
  )
}
