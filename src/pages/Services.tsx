import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowDown, Sun, Moon,
  Brain, Heart, Palette, Music, Users, Dumbbell,
  Baby, Sparkles, Shield, BookOpen, HandHeart,
} from "lucide-react";
import servicesElderly from "@/assets/services-elderly.jpg";
import servicesElderlyDetail from "@/assets/services-elderly-detail.jpg";
import servicesChildren from "@/assets/services-children.jpg";
import servicesFamilySession from "@/assets/services-family-session.jpg";

/* ── Data ── */
const elderlyServices = [
  { icon: Brain, title: "Estimulación cognitiva y memoria activa", desc: "Memoria, atención, lenguaje y orientación a través de actividades dinámicas y profesionales." },
  { icon: Dumbbell, title: "Taller de autonomía y rutinas", desc: "Refuerzo de habilidades cotidianas para ganar seguridad, confianza e independencia." },
  { icon: Palette, title: "Expresión artística", desc: "Creatividad como herramienta de activación emocional y socialización." },
  { icon: Music, title: "Musicoterapia", desc: "La música como estímulo para la activación cognitiva y el bienestar emocional." },
  { icon: Users, title: "Socialización y grupo", desc: "Actividades compartidas que fomentan vínculos, comunicación y sentido de pertenencia." },
];

const childrenServices = [
  { icon: Baby, title: "Atención Temprana (0–6 años)", desc: "Intervención individualizada ante dificultades evolutivas. Evaluación, diseño de plan y sesiones adaptadas." },
  { icon: Sparkles, title: "Estimulación del Desarrollo", desc: "Trabajo en áreas cognitivas, motrices y sociales para potenciar capacidades en los primeros años." },
  { icon: Shield, title: "Conducta y Regulación Emocional", desc: "Apoyo en rabietas, límites, impulsividad y adaptación escolar. Estrategias prácticas." },
  { icon: HandHeart, title: "Orientación Familiar", desc: "Asesoramiento práctico para casa. Herramientas, rutinas y acompañamiento continuo." },
  { icon: BookOpen, title: "Valoración Evolutiva", desc: "Observación estructurada y diseño de plan individualizado con herramientas validadas." },
];

/* ── Hero with parallax ── */
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.06]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}>
        <img src={servicesElderly} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />

      {/* Floating accents */}
      <motion.div
        className="absolute top-28 left-20 w-20 h-20 border border-led/15 rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-24 w-4 h-4 bg-primary/20 rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="container max-w-4xl text-center relative z-10" style={{ y: textY }}>
        <motion.span
          className="led-badge mb-6 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lo que ofrecemos
        </motion.span>
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl mb-6 led-glow-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          SERVICIOS
        </motion.h1>
        <motion.div
          className="w-20 h-[2px] bg-gradient-to-r from-transparent via-led to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="font-serif text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Dos mundos, un mismo compromiso: acompañar con profesionalidad, cercanía y respeto el desarrollo y bienestar de cada persona.
        </motion.p>

        {/* Quick nav pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#mayores" className="inline-flex items-center gap-2 px-6 py-3 bg-led/10 border border-led/30 rounded-full font-display text-sm tracking-wider text-led hover:bg-led/20 transition-colors">
            <Sun size={16} /> PERSONAS MAYORES
          </a>
          <a href="#infancia" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-display text-sm tracking-wider text-primary hover:bg-primary/20 transition-colors">
            <Moon size={16} /> INFANCIA 0–6
          </a>
        </motion.div>

        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <ArrowDown size={22} className="mx-auto text-led animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ── Full-width image reveal ── */
const ImageReveal = ({ src, alt, children, dark = false }: { src: string; alt: string; children?: React.ReactNode; dark?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.1, 1]);
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden" style={{ opacity: imgOpacity }}>
        <motion.div
          className="absolute inset-0"
          style={{ scale: imgScale, clipPath: useTransform(clipProgress, (v) => `inset(${v}% 0% 0% 0%)`) }}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
        <div className={`absolute inset-0 pointer-events-none ${dark ? "bg-foreground/40" : "bg-gradient-to-t from-background via-transparent to-background/50"}`} />
        {children && <div className="absolute inset-0 flex items-center justify-center z-10">{children}</div>}
      </motion.div>
    </section>
  );
};

/* ── Animated service card ── */
const ServiceCard = ({ service, index, accent }: { service: typeof elderlyServices[0]; index: number; accent: "led" | "primary" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const accentClasses = accent === "led"
    ? { bg: "bg-led/10", border: "border-led/30", text: "text-led", hoverBg: "group-hover:bg-led/20" }
    : { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary", hoverBg: "group-hover:bg-primary/20" };

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`card-neon-white h-full ${accent === "led" ? "led-border-card" : ""}`}>
        <div className="flex items-start gap-4">
          <motion.div
            className={`w-12 h-12 rounded-full ${accentClasses.bg} border ${accentClasses.border} flex items-center justify-center shrink-0 ${accentClasses.hoverBg} transition-colors duration-300`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1, type: "spring" }}
          >
            <service.icon size={20} className={accentClasses.text} strokeWidth={1.5} />
          </motion.div>
          <div className="flex-1">
            <span className={`font-display text-xs tracking-widest ${accentClasses.text} opacity-40`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-lg md:text-xl mb-2">{service.title}</h4>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Section: Personas Mayores ── */
const ElderlySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.06]);

  return (
    <section id="mayores" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: bgOpacity }}>
        <img src={servicesElderly} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-background/95 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="led-dot" />
              <Sun size={20} className="text-led" />
              <span className="font-serif text-lg text-muted-foreground italic">Horario de mañanas</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <span className="absolute -left-2 -top-10 font-display text-8xl md:text-[10rem] text-led/[0.04] leading-none select-none pointer-events-none">
                AM
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 led-glow-text">PERSONAS MAYORES</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-6" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-serif text-xl text-muted-foreground italic leading-relaxed max-w-2xl">
              Un programa integral diseñado para mantener activas las capacidades cognitivas,
              emocionales y funcionales. Cada actividad tiene un propósito terapéutico claro.
            </p>
          </ScrollReveal>
        </div>

        {/* Image + cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: large image */}
          <ScrollReveal direction="left">
            <div className="relative group overflow-hidden rounded-2xl">
              <motion.img
                src={servicesElderlyDetail}
                alt="Actividad con personas mayores"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm text-background/90 tracking-wider">ACTIVACIÓN · MEMORIA · BIENESTAR</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-led/0 group-hover:border-led/20 transition-all duration-500 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right: service cards */}
          <div className="space-y-4">
            {elderlyServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} accent="led" />
            ))}
          </div>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { num: "5", label: "Talleres semanales" },
              { num: "8:1", label: "Ratio profesional" },
              { num: "100%", label: "Personalizado" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="stat-number">{stat.num}</p>
                <p className="font-serif text-xs text-muted-foreground mt-1 italic">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ── Section: Infancia ── */
const ChildrenSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.06]);

  return (
    <section id="infancia" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: bgOpacity }}>
        <img src={servicesChildren} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-background/95 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section header — right aligned for contrast */}
        <div className="max-w-4xl ml-auto text-right mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-end gap-4 mb-4">
              <span className="font-serif text-lg text-muted-foreground italic">Horario de tardes</span>
              <Moon size={20} className="text-primary" />
              <div className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: "0 0 6px hsl(var(--primary) / 0.5)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <span className="absolute -right-2 -top-10 font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none">
                PM
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4">INFANCIA 0–6</h2>
              <div className="w-16 h-[2px] bg-gradient-to-l from-primary/60 to-transparent mb-6 ml-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-serif text-xl text-muted-foreground italic leading-relaxed max-w-2xl ml-auto">
              Intervención especializada en los primeros años de vida, cuando el cerebro tiene
              mayor plasticidad y cada estímulo cuenta.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards + image — reversed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: service cards */}
          <div className="space-y-4 lg:order-1">
            {childrenServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} accent="primary" />
            ))}
          </div>

          {/* Right: large image */}
          <ScrollReveal direction="right" className="lg:order-2">
            <div className="relative group overflow-hidden rounded-2xl">
              <motion.img
                src={servicesFamilySession}
                alt="Sesión de intervención infantil"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm text-background/90 tracking-wider">DESARROLLO · JUEGO · FAMILIA</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>

        {/* Key differentiators */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl ml-auto">
            {[
              { label: "Individualizado", value: "1:1" },
              { label: "Edad", value: "0–6" },
              { label: "Con familia", value: "Sí" },
              { label: "Plan escrito", value: "100%" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-card rounded-xl p-4 border border-border/50">
                <p className="font-display text-2xl text-primary">{item.value}</p>
                <p className="font-serif text-xs text-muted-foreground mt-1 italic">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ── Comparison section ── */
const ComparisonSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">DOS PROGRAMAS, UN CENTRO</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="font-serif text-lg text-muted-foreground italic max-w-xl mx-auto">
              Cada programa tiene su identidad, su equipo y su metodología — pero comparten los mismos valores.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mayores card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-led/20 bg-card"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-48 overflow-hidden">
              <img src={servicesElderly} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-card" />
            </div>
            <div className="p-8 pt-4">
              <div className="flex items-center gap-3 mb-4">
                <Sun size={20} className="text-led" />
                <h3 className="text-2xl">MAÑANAS</h3>
                <span className="led-badge text-[10px]">Mayores</span>
              </div>
              <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                {["Estimulación cognitiva", "Talleres de autonomía", "Expresión artística", "Musicoterapia", "Socialización grupal"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-led/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/programas#mayores"
                className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-led hover:opacity-80 transition-opacity"
              >
                VER PROGRAMA <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Infancia card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-48 overflow-hidden">
              <img src={servicesChildren} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-card" />
            </div>
            <div className="p-8 pt-4">
              <div className="flex items-center gap-3 mb-4">
                <Moon size={20} className="text-primary" />
                <h3 className="text-2xl">TARDES</h3>
                <span className="badge-stamp text-[10px]">Infancia 0–6</span>
              </div>
              <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                {["Atención Temprana", "Estimulación del Desarrollo", "Regulación Emocional", "Orientación Familiar", "Valoración Evolutiva"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/programas#infancia"
                className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
              >
                VER PROGRAMA <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Main page ── */
const Services = () => (
  <>
    <HeroSection />
    <div className="led-line" />

    {/* ═══ PERSONAS MAYORES ═══ */}
    <ElderlySection />

    {/* Cinematic image break */}
    <ImageReveal src={servicesElderlyDetail} alt="Detalle actividad mayores" dark>
      <motion.p
        className="font-display text-3xl md:text-5xl text-background drop-shadow-lg text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        CADA MOMENTO CUENTA
      </motion.p>
    </ImageReveal>

    <div className="led-line" />

    {/* ═══ INFANCIA ═══ */}
    <ChildrenSection />

    {/* Cinematic image break */}
    <ImageReveal src={servicesChildren} alt="Espacio infantil">
      <motion.p
        className="font-display text-3xl md:text-5xl text-foreground drop-shadow-lg text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        DONDE TODO EMPIEZA
      </motion.p>
    </ImageReveal>

    <div className="led-line" />

    {/* ═══ COMPARACIÓN ═══ */}
    <ComparisonSection />

    <div className="led-line" />

    {/* ═══ CTA ═══ */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img src={servicesFamilySession} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/95 pointer-events-none" />
      <div className="container max-w-3xl text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl mb-6">¿NECESITAS ORIENTACIÓN?</h2>
          <p className="font-serif text-xl text-muted-foreground italic leading-relaxed mb-10 max-w-lg mx-auto">
            Cuéntanos tu situación. Te escuchamos y te ayudamos a encontrar el servicio más adecuado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              SOLICITAR VALORACIÓN <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/34611658382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
            >
              WHATSAPP
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
