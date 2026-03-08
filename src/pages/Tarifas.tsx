import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CinematicHero from "@/components/CinematicHero";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

const Tarifas = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <>
      <CinematicHero
        badge="Información"
        title="TARIFAS"
        subtitle="Un modelo de intervención personalizado — porque cada proceso es único."
        image={servicesImage}
      />
      <div className="led-line" />

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          {/* Main info */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none">
                INFO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">MODELO PERSONALIZADO</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-led to-transparent mx-auto" />
            </div>
          </ScrollReveal>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: "Entrevista inicial", desc: "Primer contacto donde escuchamos tu situación y resolvemos todas las dudas.", highlight: true },
              { title: "Valoración individualizada", desc: "Se propone la frecuencia de intervención y modalidad más adecuada." },
              { title: "Sesiones individuales", desc: "Intervención directa adaptada al plan de trabajo personalizado." },
              { title: "Bonos mensuales", desc: "Opciones de bonos ajustados al plan y frecuencia de cada proceso." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className={`card-neon-white ${item.highlight ? "led-border-card" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-3xl text-led/20 block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Key points */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 mb-16">
              <h3 className="text-2xl mb-6">¿QUÉ INCLUYE?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Plan de intervención personalizado",
                  "Seguimiento y ajustes continuos",
                  "Coordinación con la familia",
                  "Informe de evolución",
                  "Material especializado incluido",
                  "Comunicación directa con el equipo",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-led shrink-0" />
                    <p className="font-serif text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center">
              <p className="font-serif text-lg text-muted-foreground italic mb-8 max-w-md mx-auto">
                Para recibir información detallada sobre tarifas, solicita una entrevista inicial sin compromiso.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/reservar"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                >
                  SOLICITAR ENTREVISTA <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/34611658382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
                >
                  <MessageCircle size={18} /> WHATSAPP
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Tarifas;
