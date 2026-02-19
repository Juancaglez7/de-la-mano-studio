import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl mb-3">D' LA MANO</h3>
          <p className="font-serif text-lg text-muted-foreground max-w-sm italic">
            Centro de atención temprana y desarrollo infantil en Jerez de la Frontera.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">NAVEGAR</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/centro" className="hover:text-foreground transition-colors">Centro</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Servicios</Link>
            <Link to="/team" className="hover:text-foreground transition-colors">Equipo</Link>
            <Link to="/methodology" className="hover:text-foreground transition-colors">Metodología</Link>
            <Link to="/tarifas" className="hover:text-foreground transition-colors">Tarifas</Link>
            <Link to="/faqs" className="hover:text-foreground transition-colors">FAQs</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contacto</Link>
            <Link to="/reservar" className="hover:text-foreground transition-colors">Reservar</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">CONTACTO</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:611658382" className="hover:text-foreground transition-colors">📞 611 65 83 82</a>
            <a href="https://wa.me/34611658382" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">📱 WhatsApp</a>
            <span>✉ info@dlamano.es</span>
            <span className="mt-2">📍 Jerez de la Frontera</span>
          </div>
        </div>
      </div>
      <div className="editorial-line mt-12 mb-6" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} D' La Mano. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="hover:text-foreground transition-colors cursor-pointer">Aviso legal</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Política de privacidad</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Política de cookies</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
