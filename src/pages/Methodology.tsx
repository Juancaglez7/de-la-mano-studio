import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Users, ClipboardCheck, Target, Sparkles, HeartHandshake } from "lucide-react";
import methodologyHero from "@/assets/methodology-hero.jpg";
import methodologyDetail from "@/assets/methodology-detail.jpg";
import methodologyFamily from "@/assets/methodology-family.jpg";

const steps = [
  { num: "01", title: "Entrevista inicial", desc: "Escuchamos la situación familiar, resolvemos dudas y establecemos el punto de partida.", icon: Users, image: methodologyFamily },
  { num: "02", title: "Valoración individual", desc: "Observación estructurada con herramientas validadas, adaptada a la edad del niño.", icon: ClipboardCheck, image: methodologyDetail },
  { num: "03", title: "Diseño de plan personalizado", desc: "Un plan escrito con objetivos claros, estrategias y plazos definidos.", icon: Target, image: methodologyHero },
  { num: "04", title: "Sesiones estructuradas", desc: "Intervención directa con el niño, combinando actividades lúdicas y estructuradas.", icon: Sparkles, image: methodologyDetail },
  { num: "05", title: "Seguimiento y coordinación familiar", desc: "Revisiones periódicas, ajustes del plan y colaboración continua con la familia.", icon: HeartHandshake, image: methodologyFamily },
];

/* ── Parallax hero section ── */
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0.08]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -120]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}>
        <img src={methodologyHero} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 right-20 w-24 h-24 border border-led/15 rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [-12, 12, -12], rotate: [0, 180, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-16 h-16 border border-primary/10 rotate-45 pointer-events-none hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [45, 135, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="container max-w-4xl text-center relative z-10" style={{ y: textY }}>
        <motion.span
          className="led-badge mb-6 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cómo trabajamos
        </motion.span>
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl mb-6 led-glow-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          METODOLOGÍA
        </motion.h1>
        <motion.div
          className="w-20 h-[2px] bg-gradient-to-r from-transparent via-led to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="font-serif text-xl md:text-2xl text-muted-foreground italic max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Un proceso claro y estructurado — siempre adaptado a cada niño y su familia.
        </motion.p>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ArrowDown size={22} className="mx-auto text-led animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ── Full-width image reveal between steps ── */
const ImageRevealSection = ({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.1, 1]);
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      <motion.div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden" style={{ opacity: imgOpacity }}>
        <motion.div
          className="absolute inset-0"
          style={{
            scale: imgScale,
            clipPath: useTransform(clipProgress, (v) => `inset(${v}% 0% 0% 0%)`),
          }}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
        {children && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {children}
          </div>
        )}
      </motion.div>
    </section>
  );
};

/* ── Individual step with cinematic entrance ── */
const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="py-8 md:py-12">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
        {/* Text */}
        <motion.div
          className={`${!isEven ? "lg:order-2" : ""}`}
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="w-16 h-16 rounded-full bg-led/10 border-2 border-led/30 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <step.icon size={24} className="text-led" strokeWidth={1.5} />
            </motion.div>
            <div>
              <span className="font-display text-sm tracking-widest text-led/60">PASO {step.num}</span>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-4">{step.title}</h3>
          <motion.div
            className="w-12 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-4"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
        </motion.div>

        {/* Image */}
        <motion.div
          className={`${!isEven ? "lg:order-1" : ""} overflow-hidden rounded-2xl`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={step.image}
            alt={step.title}
            className="w-full aspect-[16/10] object-cover rounded-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Connector line */}
      {index < steps.length - 1 && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="neon-arrow-vertical h-16">
            <div className="neon-arrow-line" />
            <div className="neon-arrow-tip" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

/* ── Horizontal timeline map ── */
const TimelineMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src={methodologyHero} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-card/95 pointer-events-none" />
      <div className="container max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none absolute left-1/2 -translate-x-1/2 -top-4">
              MAP
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 led-glow-text">MAPA DE INTERVENCIÓN</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-led to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Main line */}
          <motion.div
            className="absolute top-8 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--led-accent) / 0.4), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="grid grid-cols-5 gap-4">
            {["Entrevista", "Valoración", "Plan", "Sesiones", "Seguimiento"].map((label, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-card border-2 border-led/40 flex items-center justify-center mb-4 relative z-10"
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--led-accent))" }}
                >
                  <span className="font-display text-lg text-led">{String(i + 1).padStart(2, "0")}</span>
                </motion.div>
                <p className="font-display text-sm tracking-wider">{label.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-6">
          {["Entrevista", "Valoración", "Plan", "Sesiones", "Seguimiento"].map((label, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-led/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-sm text-led">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 h-[1px] bg-led/20" />
                <p className="font-display text-xs tracking-wider">{label.toUpperCase()}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Main page ── */
const Methodology = () => (
  <>
    <HeroSection />
    <div className="led-line" />

    {/* Intro text */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <span className="font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none">
            01
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">PROCESO DE INTERVENCIÓN</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-serif text-xl text-muted-foreground italic leading-relaxed max-w-2xl mx-auto">
            Cada familia es única. Por eso, nuestro proceso comienza siempre por escuchar,
            observar y comprender antes de actuar. Estos son los pasos que seguimos.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Steps with alternating layout */}
    <section className="pb-12">
      <div className="container max-w-6xl">
        {steps.map((step, i) => (
          <StepCard key={step.num} step={step} index={i} />
        ))}
      </div>
    </section>

    <div className="led-line" />

    {/* Full-width cinematic image break */}
    <ImageRevealSection src={methodologyHero} alt="Interior del centro">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-display text-3xl md:text-5xl text-background drop-shadow-lg">
          CADA DETALLE IMPORTA
        </p>
      </motion.div>
    </ImageRevealSection>

    <div className="led-line" />

    {/* Timeline map */}
    <TimelineMap />

    <div className="led-line" />

    {/* CTA */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img src={methodologyFamily} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/95 pointer-events-none" />
      <div className="container max-w-3xl text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl mb-6">¿EMPEZAMOS?</h2>
          <p className="font-serif text-xl text-muted-foreground italic leading-relaxed mb-10 max-w-lg mx-auto">
            El primer paso es una entrevista inicial gratuita donde conocemos tu situación y resolvemos todas tus dudas.
          </p>
          <Link
            to="/reservar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
          >
            SOLICITAR ENTREVISTA INICIAL <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Methodology;
