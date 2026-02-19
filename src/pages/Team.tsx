import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Team = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Quién está detrás</span>
          <h1 className="text-5xl md:text-7xl mb-4">EQUIPO</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Dirección y coordinación a cargo de una profesional comprometida con la infancia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Photo placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display text-4xl text-primary/40">Foto</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl mb-2">Dirección del Centro</h2>
                <p className="font-display text-xs tracking-widest text-primary mb-4">COORDINACIÓN Y DIRECCIÓN</p>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  Profesional especializada en el ámbito educativo y social, con formación en Integración Social, Educación Infantil y Educación Social, y experiencia en atención a menores con necesidades educativas diversas.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Valores */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="editorial-line" />
            <span className="font-serif text-lg text-muted-foreground italic">Lo que nos define</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-10">NUESTROS VALORES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Profesionalidad", desc: "Formación continua y rigor en cada intervención." },
            { title: "Orden", desc: "Procesos claros y estructurados para cada familia." },
            { title: "Seguridad", desc: "Un entorno protegido y normativo para los más pequeños." },
            { title: "Confianza", desc: "Transparencia y comunicación honesta con las familias." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <span className="font-display text-3xl text-primary/15 leading-none block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl mb-2">{v.title}</h3>
                <p className="font-serif text-muted-foreground">{v.desc}</p>
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
              SOLICITAR ENTREVISTA <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Team;
