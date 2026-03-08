import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxRevealSection from "@/components/ParallaxRevealSection";
import heroPhoto from "@/assets/team-photo-5.jpeg";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";
import teamPhoto3 from "@/assets/team-photo-3.jpeg";
import teamPhoto1 from "@/assets/team-photo-1.jpeg";
import servicesImage from "@/assets/services-image.jpg";
import servicesChildren from "@/assets/services-children.jpg";
import servicesElderly from "@/assets/services-elderly.jpg";
import methodologyHero from "@/assets/methodology-hero.jpg";
import { ArrowRight, MessageCircle, Brain, Heart, Palette, Users, BarChart3, Handshake, Sun, Moon, ArrowDown, Sparkles } from "lucide-react";

/* ── Apple-style parallax quote section ── */
const ParallaxQuote = ({ image, quote, sub }: { image: string; quote: string; sub: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0.7, 0.4, 0.1]);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.7], [1.0, 1.08]);

  return (
    <section ref={ref} className="relative min-h-[80vh] overflow-hidden flex items-end pb-24 justify-center group cursor-default pt-40">
      {/* Background — subtle scroll scale + gentle hover zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: imgScale }}>
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </motion.div>
      {/* Overlay that fades away as you scroll — image becomes clearer */}
      <motion.div className="absolute inset-0 z-[1] bg-foreground pointer-events-none" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40 pointer-events-none" />

      {/* Thin corner accents */}
      <div className="absolute top-6 right-6 w-20 h-20 border-t border-r border-background/15 pointer-events-none z-[2]" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b border-l border-background/15 pointer-events-none z-[2]" />

      {/* Text — large, serif, elegant — fades out on scroll */}
      <motion.div className="container max-w-4xl text-center relative z-10 px-6" style={{ y: textY, opacity: textOpacity }}>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 text-background font-serif italic font-normal"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.12)' }}
        >
          {quote}
        </h2>
        <div className="w-10 h-[1px] bg-background/25 mx-auto mb-6" />
        <p className="font-serif text-base sm:text-lg md:text-xl text-background/60 leading-relaxed max-w-lg mx-auto">
          {sub}
        </p>
      </motion.div>
    </section>
  );
};

/* ── Horizontal scroll stat with animation ── */
const AnimatedStat = ({ num, label, delay }: { num: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        className="stat-number"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.1, type: "spring" }}
      >
        {num}
      </motion.p>
      <p className="font-serif text-xs md:text-sm text-muted-foreground mt-1 italic">{label}</p>
    </motion.div>
  );
};

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-10 lg:pt-0">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src={servicesImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 gradient-sweep pointer-events-none" />
        <motion.div
          className="absolute top-28 right-16 w-20 h-20 border border-led/15 rounded-full pointer-events-none hidden lg:block"
          animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-led/20 rounded-full pointer-events-none hidden lg:block"
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-12 h-12 border border-primary/10 rotate-45 pointer-events-none hidden lg:block"
          animate={{ y: [-8, 8, -8], rotate: [45, 135, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-led/10 rounded-full blur-2xl animate-float-slow pointer-events-none" />
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-led/20 rounded-tl-lg pointer-events-none hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-led/20 rounded-br-lg pointer-events-none hidden lg:block" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="led-badge mb-6 inline-block">Centro integral de estimulación y desarrollo</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
                  D' LA MANO
                </h1>
                <div className="w-20 h-[2px] bg-gradient-to-r from-led to-transparent mb-4" />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-lg italic leading-relaxed mb-8">
                  Acompañamos procesos de desarrollo y bienestar a través de programas personalizados para infancia y personas mayores.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
                  <a href="tel:611658382" className="font-display tracking-wider hover:text-led transition-colors">📞 611 65 83 82</a>
                  <span className="text-border">|</span>
                  <a href="https://wa.me/34611658382" target="_blank" rel="noopener noreferrer" className="font-display tracking-wider hover:text-led transition-colors">📱 WhatsApp</a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/reservar"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    RESERVAR ENTREVISTA <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/34611658382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    WHATSAPP
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <img
                  src={heroPhoto}
                  alt="Profesional del centro D' La Mano"
                  className="rounded-2xl shadow-warm-lg w-full object-cover aspect-[3/4] max-h-[600px]"
                />
                <div className="absolute -inset-2 rounded-2xl border border-led/10 pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-5 py-3 shadow-soft">
                  <p className="font-display text-sm tracking-wider text-led">JEREZ DE LA FRONTERA</p>
                  <p className="font-serif text-sm text-muted-foreground italic">📞 611 65 83 82</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <AnimatedStat num="50+" label="Familias atendidas" delay={0.4} />
            <AnimatedStat num="3+" label="Años de experiencia" delay={0.5} />
            <AnimatedStat num="6" label="Programas activos" delay={0.6} />
          </div>

          <ScrollReveal delay={0.7}>
            <div className="flex justify-center mt-12">
              <ArrowDown size={20} className="text-led animate-bounce" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="led-line" />

      {/* ═══ APPLE-STYLE PARALLAX: MISSION ═══ */}
      <ParallaxQuote
        image={servicesChildren}
        quote="Cada niño tiene su propio ritmo."
        sub="Nuestro trabajo es acompañarlo con profesionalidad, cercanía y respeto."
      />

      <div className="led-line" />

      {/* PROGRAMS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="relative mb-4">
              <span className="absolute -left-2 -top-8 font-display text-7xl md:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">01</span>
              <div className="flex items-center gap-4">
                <div className="led-dot" />
                <span className="font-serif text-lg text-muted-foreground italic">Nuestros programas</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-2 led-glow-text">PROGRAMAS</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mañanas · Personas mayores */}
            <ScrollReveal delay={0.1}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Sun size={20} className="text-led" />
                  <h3 className="text-2xl md:text-3xl">MAÑANAS</h3>
                  <span className="led-badge text-[10px]">Personas mayores</span>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Brain, title: "Estimulación cognitiva y memoria activa", desc: "Memoria, atención, lenguaje y orientación a través de actividades dinámicas." },
                    { icon: Heart, title: "Taller de autonomía y rutinas", desc: "Refuerzo de habilidades cotidianas para ganar seguridad y confianza." },
                    { icon: Palette, title: "Artística y música", desc: "Creatividad y música como herramientas de activación y socialización." },
                  ].map((s, i) => (
                    <div key={i} className="card-premium led-border-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-led/10 flex items-center justify-center shrink-0">
                          <s.icon size={18} className="text-led" />
                        </div>
                        <div>
                          <h4 className="text-lg mb-1">{s.title}</h4>
                          <p className="font-serif text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programas#mayores"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-led hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Tardes · Infancia */}
            <ScrollReveal delay={0.2}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Moon size={20} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl">TARDES</h3>
                  <span className="badge-stamp text-[10px]">Infancia 0–6</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Atención Temprana (0–6 años)",
                    "Estimulación del Desarrollo",
                    "Intervención en Conducta y Regulación Emocional",
                    "Orientación Familiar",
                    "Valoración Evolutiva",
                  ].map((s, i) => (
                    <div key={i} className="card-premium p-5">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                        <p className="font-display text-sm tracking-wide">{s}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programas#infancia"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="led-line" />

      <ParallaxRevealSection />

      <div className="led-line" />

      {/* ═══ APPLE-STYLE PARALLAX: ELDERLY ═══ */}
      <ParallaxQuote
        image={servicesElderly}
        quote="Envejecer con dignidad."
        sub="Activación, autonomía y bienestar — cada mañana cuenta."
      />

      <div className="led-line" />

      {/* VISUAL SECTION WITH PHOTOS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="relative mb-12">
              <span className="absolute -left-2 -top-8 font-display text-7xl md:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">03</span>
              <div className="flex items-center gap-4">
                <div className="led-dot" />
                <span className="font-serif text-lg text-muted-foreground italic">Nuestro equipo</span>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: teamPhoto1, caption: "Dirección y coordinación del centro" },
              { src: teamPhoto2, caption: "Profesionalidad y cercanía" },
              { src: teamPhoto3, caption: "Compromiso con cada persona" },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border/50 relative">
                  <div className="overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-5">
                    <p className="font-serif text-sm text-background/90 italic">{photo.caption}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-led/0 group-hover:border-led/20 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="led-line" />

      {/* ═══ APPLE-STYLE PARALLAX: METHODOLOGY ═══ */}
      <ParallaxQuote
        image={methodologyHero}
        quote="Un plan para cada persona."
        sub="Estructura, seguimiento y adaptación continua."
      />

      <div className="led-line" />

      {/* METHODOLOGY PREVIEW */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <img src={teamPhoto2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-card/95 pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="relative mb-4">
              <span className="absolute -left-2 -top-8 font-display text-7xl md:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">04</span>
              <div className="flex items-center gap-4">
                <div className="led-dot" />
                <span className="font-serif text-lg text-muted-foreground italic">Cómo trabajamos</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 led-glow-text">METODOLOGÍA</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch">
            {[
              { icon: Users, title: "Personalización", desc: "Cada plan se adapta a la persona, sus necesidades y su ritmo.", num: "01" },
              { icon: BarChart3, title: "Seguimiento", desc: "Evaluación continua y ajuste de objetivos en cada etapa.", num: "02" },
              { icon: Heart, title: "Bienestar", desc: "El objetivo es mejorar la calidad de vida y la independencia.", num: "03" },
              { icon: Handshake, title: "Coordinación", desc: "Trabajo conjunto con familias y entorno para maximizar resultados.", num: "04" },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex flex-col lg:flex-row items-center h-full">
                  <div className="card-neon-white text-center group flex-1 w-full">
                    <span className="font-display text-4xl text-led/20 block mb-2">{pillar.num}</span>
                    <div className="w-14 h-14 rounded-full bg-led/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-led/20 transition-colors duration-300">
                      <pillar.icon className="text-led" size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg mb-2">{pillar.title}</h3>
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                  {i < 3 && (
                    <>
                      <div className="hidden lg:flex neon-arrow w-8 mx-1 shrink-0">
                        <div className="neon-arrow-line" />
                        <div className="neon-arrow-tip" />
                      </div>
                      <div className="lg:hidden neon-arrow-vertical h-8 my-2">
                        <div className="neon-arrow-line" />
                        <div className="neon-arrow-tip" />
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 text-sm font-display tracking-wider text-led hover:opacity-80 transition-opacity"
              >
                VER METODOLOGÍA COMPLETA <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="led-line" />

      {/* TABLÓN DE NOTICIAS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="relative mb-4">
              <span className="absolute -left-2 -top-8 font-display text-7xl md:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">05</span>
              <div className="flex items-center gap-4">
                <div className="led-dot" />
                <span className="font-serif text-lg text-muted-foreground italic">Novedades</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 led-glow-text">TABLÓN DE NOTICIAS</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: "Marzo 2026", title: "Apertura del programa de mayores", desc: "Nuevo servicio matutino de estimulación cognitiva y talleres para personas mayores.", color: "led" },
              { date: "Marzo 2026", title: "Regulación emocional en la infancia", desc: "Estrategias para acompañar las emociones de los más pequeños en el día a día.", color: "primary" },
              { date: "Febrero 2026", title: "Orientación a familias", desc: "Consejos prácticos y herramientas para reforzar los avances desde casa.", color: "primary" },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`card-premium p-8 h-full ${i === 0 ? "led-border-card" : ""}`}>
                  <p className={`font-display text-xs tracking-widest mb-3 ${i === 0 ? "text-led" : "text-primary/60"}`}>{post.date}</p>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-4">{post.desc}</p>
                  <span className={`font-serif text-sm italic cursor-pointer hover:opacity-80 transition-opacity ${i === 0 ? "text-led" : "text-primary"}`}>Leer más →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative py-16 overflow-hidden">
        <div className="led-line absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-led/[0.03] pointer-events-none" />
        <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-led/20 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-led/20 pointer-events-none" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 led-glow-text">¿HABLAMOS?</h2>
            <p className="font-serif text-lg text-muted-foreground italic max-w-md mx-auto mb-6">
              Reserva una entrevista inicial sin compromiso y cuéntanos tu situación.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/reservar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                RESERVAR ENTREVISTA <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/34611658382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
              >
                <MessageCircle size={18} /> WHATSAPP
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="led-line absolute bottom-0 left-0 right-0" />
      </section>
    </>
  );
};

export default Index;
