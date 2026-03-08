import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Brain, Heart, Palette, Sun, Moon, Baby, BookOpen, Smile, Users2, ClipboardCheck } from "lucide-react";
import programaCognitivo from "@/assets/programa-cognitivo.jpg";
import programaAutonomia from "@/assets/programa-autonomia.jpg";
import programaArtistica from "@/assets/programa-artistica.jpg";
import programaMananas from "@/assets/programa-mananas-banner.jpg";
import programaTardes from "@/assets/programa-tardes-banner.jpg";

const mananas = [
  {
    icon: Brain,
    title: "Estimulación cognitiva y memoria activa",
    desc: "Memoria, atención, lenguaje y orientación a través de actividades dinámicas y adaptadas.",
    image: teamPhoto1,
  },
  {
    icon: Heart,
    title: "Taller de autonomía y rutinas",
    desc: "Refuerzo de habilidades cotidianas para ganar seguridad, confianza e independencia.",
    image: teamPhoto2,
  },
  {
    icon: Palette,
    title: "Artística y música",
    desc: "Creatividad y música como herramientas de activación cognitiva y socialización.",
    image: teamPhoto3,
  },
];

const tardes = [
  {
    icon: Baby,
    title: "Atención Temprana (0–6 años)",
    desc: "Intervención individualizada ante dificultades evolutivas. Evaluación y sesiones adaptadas.",
  },
  {
    icon: BookOpen,
    title: "Estimulación del Desarrollo",
    desc: "Trabajo en áreas cognitivas, motrices y sociales para potenciar capacidades.",
  },
  {
    icon: Smile,
    title: "Conducta y Regulación Emocional",
    desc: "Apoyo en rabietas, límites, impulsividad y adaptación. Estrategias para el día a día.",
  },
  {
    icon: Users2,
    title: "Orientación Familiar",
    desc: "Asesoramiento práctico para casa. Herramientas, rutinas y acompañamiento.",
  },
  {
    icon: ClipboardCheck,
    title: "Valoración Evolutiva",
    desc: "Observación estructurada y plan individualizado con herramientas validadas.",
  },
];

const ProgramasHomepage = () => {
  const [active, setActive] = useState<"mananas" | "tardes">("mananas");

  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="relative mb-4">
            <span className="absolute -left-2 -top-6 md:-top-8 font-display text-6xl md:text-8xl lg:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">01</span>
            <div className="flex items-center gap-4">
              <div className="led-dot" />
              <span className="font-serif text-base md:text-lg text-muted-foreground italic">Nuestros programas</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 led-glow-text">PROGRAMAS</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-8 md:mb-12" />
        </ScrollReveal>

        {/* Tab switcher */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-3 md:gap-4 mb-10 md:mb-14">
            <button
              onClick={() => setActive("mananas")}
              className={`flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-full font-display text-sm md:text-base tracking-wider transition-all duration-300 ${
                active === "mananas"
                  ? "bg-led text-background shadow-lg shadow-led/20"
                  : "border border-border text-muted-foreground hover:border-led/40 hover:text-foreground"
              }`}
            >
              <Sun size={18} />
              MAÑANAS
              <span className={`hidden sm:inline text-xs tracking-widest ${active === "mananas" ? "text-background/70" : "text-muted-foreground/60"}`}>
                · MAYORES
              </span>
            </button>
            <button
              onClick={() => setActive("tardes")}
              className={`flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-full font-display text-sm md:text-base tracking-wider transition-all duration-300 ${
                active === "tardes"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <Moon size={18} />
              TARDES
              <span className={`hidden sm:inline text-xs tracking-widest ${active === "tardes" ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                · INFANCIA
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          {active === "mananas" ? (
            <motion.div
              key="mananas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Hero banner for mañanas */}
              <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-10">
                <img
                  src={servicesElderly}
                  alt="Programa de mañanas"
                  className="w-full h-48 sm:h-56 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
                <div className="absolute inset-0 flex items-center p-6 md:p-10">
                  <div>
                    <p className="font-display text-xs md:text-sm tracking-widest text-led mb-2">PERSONAS MAYORES</p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-background mb-2 md:mb-3">Programa de Mañanas</h3>
                    <p className="font-serif text-sm md:text-base text-background/70 max-w-md leading-relaxed">
                      Estimulación, autonomía y bienestar — cada mañana cuenta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {mananas.map((s, i) => (
                  <div key={i} className="group">
                    <div className="card-premium overflow-hidden h-full">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <div className="absolute top-3 left-3">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-led/90 flex items-center justify-center shadow-lg">
                            <s.icon size={16} className="text-background" />
                          </div>
                        </div>
                        <span className="absolute bottom-3 right-3 font-display text-3xl md:text-4xl text-background/15">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-5 md:p-6">
                        <h4 className="text-base md:text-lg mb-2">{s.title}</h4>
                        <p className="font-serif text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center md:text-left">
                <Link
                  to="/programas#mayores"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-display tracking-wider text-led hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tardes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Hero banner for tardes */}
              <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-10">
                <img
                  src={servicesFamily}
                  alt="Programa de tardes"
                  className="w-full h-48 sm:h-56 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
                <div className="absolute inset-0 flex items-center p-6 md:p-10">
                  <div>
                    <p className="font-display text-xs md:text-sm tracking-widest text-primary mb-2">INFANCIA · 0–6 AÑOS</p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-background mb-2 md:mb-3">Programa de Tardes</h3>
                    <p className="font-serif text-sm md:text-base text-background/70 max-w-md leading-relaxed">
                      Acompañamos cada paso del desarrollo con profesionalidad y cercanía.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {tardes.map((s, i) => (
                  <div key={i} className="card-premium p-5 md:p-6 h-full group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <s.icon size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-display text-xs text-primary/30 block mb-1">{String(i + 1).padStart(2, "0")}</span>
                        <h4 className="text-base md:text-lg mb-1.5">{s.title}</h4>
                        <p className="font-serif text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center md:text-left">
                <Link
                  to="/programas#infancia"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramasHomepage;
