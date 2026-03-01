export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Valentin Silva. Todos los derechos reservados."}
        </p>
        <a
          href="#inicio"
          className="font-mono text-sm font-bold text-foreground hover:text-primary transition-colors"
        >
          VS<span className="text-primary">.</span>
        </a>
      </div>
    </footer>
  )
}
