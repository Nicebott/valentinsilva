"use client"

import { Palette, Lightbulb, Zap } from "lucide-react"

const highlights = [
  {
    icon: Palette,
    title: "Diseno Visual",
    description:
      "Apasionado por la composicion, el color y la tipografia para crear piezas visuales impactantes.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento Creativo",
    description:
      "Siempre buscando nuevas formas de comunicar ideas y resolver problemas de diseno.",
  },
  {
    icon: Zap,
    title: "En Constante Aprendizaje",
    description:
      "Actualmente estudiando y perfeccionando mis habilidades para convertirme en un gran disenador.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono">
            Sobre Mi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-balance">
              Disenador grafico en formacion
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Soy Valentin Silva, un estudiante de diseno grafico con una profunda
              pasion por la creatividad visual. Creo que el buen diseno tiene el
              poder de comunicar, inspirar y transformar la manera en que las
              personas interactuan con el mundo.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Actualmente me encuentro estudiando y desarrollando mis habilidades
              en diversas areas del diseno, desde branding e identidad visual
              hasta diseno digital y editorial. Cada proyecto es una oportunidad
              para aprender y crecer.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
