import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Atención Temprana (0–6 años)",
    desc: "Intervención individualizada ante dificultades evolutivas. Evaluación, diseño de plan y sesiones adaptadas a cada niño.",
  },
  {
    title: "Estimulación del Desarrollo",
    desc: "Trabajo en áreas cognitivas, motrices y sociales para potenciar las capacidades del niño en sus primeros años.",
  },
  {
    title: "Intervención en Conducta y Regulación Emocional",
    desc: "Apoyo en rabietas, límites, impulsividad y adaptación escolar. Estrategias prácticas para el día a día.",
  },
  {
    title: "Orientación Familiar",
    desc: "Asesoramiento práctico para casa. Herramientas, rutinas y acompañamiento para que la familia refuerce los avances.",
  },
  {
    title: "Valoración Evolutiva",
    desc: "Observación estructurada y diseño de plan individualizado con herramientas validadas.",
  },
];

const Services = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Lo que ofrecemos</span>
          <h1 className="text-5xl md:text-7xl mb-4">SERVICIOS</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Cada servicio está diseñado para ser claro, profesional y adaptado a las necesidades de cada niño.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 card-hover">
                <div className="flex items-start gap-6">
                  <span className="section-number hidden md:block text-5xl">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl mb-3">{service.title}</h3>
                    <p className="font-serif text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              SOLICITAR VALORACIÓN <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
