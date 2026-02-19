import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Entrevista inicial", desc: "Escuchamos la situación familiar, resolvemos dudas y establecemos el punto de partida." },
  { num: "02", title: "Valoración individual", desc: "Observación estructurada con herramientas validadas, adaptada a la edad del niño." },
  { num: "03", title: "Diseño de plan personalizado", desc: "Un plan escrito con objetivos claros, estrategias y plazos definidos." },
  { num: "04", title: "Sesiones estructuradas", desc: "Intervención directa con el niño, combinando actividades lúdicas y estructuradas." },
  { num: "05", title: "Seguimiento y coordinación familiar", desc: "Revisiones periódicas, ajustes del plan y colaboración continua con la familia." },
];

const Methodology = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Cómo trabajamos</span>
          <h1 className="text-5xl md:text-7xl mb-4">METODOLOGÍA</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Un proceso claro y estructurado — siempre adaptado a cada niño y su familia.
          </p>
        </ScrollReveal>

        {/* Proceso */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl mb-8">PROCESO DE INTERVENCIÓN</h2>
        </ScrollReveal>

        <div className="space-y-6 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.08}>
              <div className="flex items-start gap-6 bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center font-display text-lg text-primary shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl mb-1">{step.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mapa visual */}
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16">
            <h2 className="text-2xl md:text-3xl mb-8">MAPA DE INTERVENCIÓN</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
              {["Entrevista", "Valoración", "Plan", "Sesiones", "Seguimiento"].map((step, i) => (
                <div key={step} className="flex items-center gap-4 flex-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center font-display text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="font-display text-xs tracking-wider mt-2">{step.toUpperCase()}</p>
                  </div>
                  {i < 4 && <div className="hidden md:block flex-1 h-[2px] bg-primary/15 mx-2" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              SOLICITAR ENTREVISTA INICIAL <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Methodology;
