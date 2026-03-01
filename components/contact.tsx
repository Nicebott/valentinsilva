"use client"

import { Mail, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "valentin.silva@email.com",
    href: "mailto:valentin.silva@email.com",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Mexico",
    href: null,
  },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono">
            Contacto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-balance">
              Hablemos de tu
              <br />
              <span className="text-primary">proxima idea</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
              Estoy disponible para proyectos freelance, colaboraciones
              creativas o simplemente para charlar sobre diseno.
            </p>

            {/* Contact Info */}
            <div className="mt-10 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground text-sm hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-secondary text-foreground placeholder:text-muted-foreground border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-secondary text-foreground placeholder:text-muted-foreground border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuentame sobre tu proyecto..."
                  className="w-full bg-secondary text-foreground placeholder:text-muted-foreground border border-border rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Enviar Mensaje
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
