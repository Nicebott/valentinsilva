"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6 font-mono">
            Estudiante de Diseno Grafico
          </p>
        </div>

        <h1
          className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95] text-balance transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Valentin
          <br />
          <span className="text-primary">Silva</span>
        </h1>

        <p
          className={`mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Creando experiencias visuales con creatividad y pasion.
          Transformando ideas en disenos que comunican.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#sobre-mi"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Conoce mas
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            Contacto
          </a>
        </div>

        <a
          href="#sobre-mi"
          className={`mt-20 inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors duration-1000 delay-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll hacia abajo"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
