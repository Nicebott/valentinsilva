"use client"

const skills = [
  { name: "Adobe Photoshop", level: 75 },
  { name: "Adobe Illustrator", level: 70 },
  { name: "Figma", level: 65 },
  { name: "Tipografia", level: 70 },
  { name: "Teoria del Color", level: 80 },
  { name: "Composicion Visual", level: 72 },
]

const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "InDesign",
  "After Effects",
  "Canva",
  "Lightroom",
  "Premiere Pro",
]

export function Skills() {
  return (
    <section id="habilidades" className="relative py-32 px-6">
      {/* Subtle accent glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono">
            Habilidades
          </p>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-balance mb-16">
          Herramientas y competencias
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="flex flex-col gap-8">
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Nivel de dominio
            </h3>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-medium text-sm">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground text-xs font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono mb-8">
              Software y herramientas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-foreground text-sm font-medium">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
