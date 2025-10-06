import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary/30">
      <div className="container py-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-bold text-primary">RC</span>
          <h3 className="text-2xl font-bold">Contacto</h3>
          <p className="max-w-md text-muted-foreground">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de sus visiones.
          </p>
          {/* <a href="mailto:romo.cuzco@example.com" className="text-lg font-semibold text-primary hover:underline">
            romo.cuzco@example.com
          </a> */}
          <p className="text-lg font-semibold text-primary hover:underline">
            0982738743
          </p>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Romo Cuzco. Todos los derechos reservados.
          </p>
           <Link href="/enhance-ui" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            AI UI/UX
          </Link>
        </div>
      </div>
    </footer>
  );
}
