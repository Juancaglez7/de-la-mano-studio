import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl mb-3">DE LA MANO</h3>
          <p className="font-serif text-lg text-muted-foreground max-w-sm italic">
            Evidence-led support, delivered with warmth — and a clear plan for your child's development.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">NAVIGATE</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link to="/how-we-work" className="hover:text-foreground transition-colors">How We Work</Link>
            <Link to="/team" className="hover:text-foreground transition-colors">Team</Link>
            <Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">CONNECT</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@delamano.com</span>
            <span>+1 (555) 000-0000</span>
            <span className="mt-2 text-xs">Location placeholder</span>
          </div>
        </div>
      </div>
      <div className="editorial-line mt-12 mb-6" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} De La Mano. All rights reserved. — Early Intervention Project (0–6 years)
      </p>
    </div>
  </footer>
);

export default Footer;
