import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMode } from "@/contexts/ModeContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/how-we-work", label: "Cómo Trabajamos" },
  { to: "/team", label: "Equipo" },
  { to: "/resources", label: "Recursos" },
  { to: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const { mode, setMode } = useMode();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
          D' LA MANO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
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

        <div className="hidden lg:flex items-center gap-4">
          {/* Mode toggle */}
          <div className="flex items-center bg-secondary rounded-full p-1 text-xs">
            <button
              onClick={() => setMode("families")}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                mode === "families" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Para Familias
            </button>
            <button
              onClick={() => setMode("professionals")}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                mode === "professionals" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Para Profesionales
            </button>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-display tracking-wider rounded-full hover:opacity-90 transition-opacity"
          >
            CONTACTAR
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setMode("families")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    mode === "families" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Familias
                </button>
                <button
                  onClick={() => setMode("professionals")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    mode === "professionals" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Profesionales
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
