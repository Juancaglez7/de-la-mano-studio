import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Tarifas = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Información</span>
          <h1 className="text-5xl md:text-7xl mb-4">TARIFAS</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-10">
            <h2 className="text-2xl md:text-3xl mb-6">MODELO DE INTERVENCIÓN PERSONALIZADO</h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Cada proceso se adapta a las necesidades específicas de cada niño y familia.
              </p>
              <p>
                Tras una entrevista inicial y valoración individualizada, se propone la frecuencia de intervención y modalidad más adecuada.
              </p>
              <p>
                El centro ofrece sesiones individuales y bonos mensuales ajustados al plan de trabajo.
              </p>
              <p>
                Para recibir información detallada, puede solicitar una entrevista inicial.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              SOLICITAR ENTREVISTA <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Tarifas;
