export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full h-12 bg-ucsg-primary relative z-10 flex items-center justify-center">
      <p className="text-white text-sm font-medium">
        © {currentYear} UCSG Intranet. Todos los derechos reservados.
      </p>
    </footer>
  )
}
