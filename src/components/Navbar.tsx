import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/centro", label: "Centro" },
  { to: "/services", label: "Servicios" },
  { to: "/team", label: "Equipo" },
  { to: "/methodology", label: "Metodología" },
  { to: "/tarifas", label: "Tarifas" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-8 text-xs font-display tracking-wider">
          <span>Centro de Atención Temprana · Jerez de la Frontera</span>
          <a href="tel:611658382" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={12} /> 611 65 83 82
          </a>
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="D' La Mano" className="h-28 md:h-32 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/reservar"
              className="px-5 py-2 bg-primary text-primary-foreground text-sm font-display tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              RESERVAR ENTREVISTA
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-display tracking-wide ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservar"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-display tracking-wider rounded-full"
              >
                RESERVAR ENTREVISTA
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
