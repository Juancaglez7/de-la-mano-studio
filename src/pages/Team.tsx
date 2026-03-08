import ScrollReveal from "@/components/ScrollReveal";
import CinematicHero from "@/components/CinematicHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamPhoto4 from "@/assets/team-photo-4.jpeg";
import teamPhoto5 from "@/assets/team-photo-5.jpeg";

const Team = () => (
  <>
    <CinematicHero
      badge="Quién está detrás"
      title="EQUIPO"
      subtitle="Dirección y coordinación a cargo de una profesional comprometida con el desarrollo y el bienestar."
      image={teamPhoto5}
    />
    <div className="led-line" />

    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">

        <ScrollReveal delay={0.1}>
          <div className="card-premium p-8 md:p-12 mb-16 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="relative group">
                <img
                  src={teamPhoto4}
                  alt="Dirección del centro D' La Mano"
                  className="w-40 h-52 md:w-48 md:h-64 rounded-2xl object-cover shrink-0 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -inset-1 rounded-2xl border border-led/10 pointer-events-none" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl mb-2">Dirección del Centro</h2>
                <p className="font-display text-xs tracking-widest text-led mb-4">COORDINACIÓN Y DIRECCIÓN</p>
                <div className="w-10 h-[2px] bg-gradient-to-r from-led/40 to-transparent mb-4" />
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  Profesional especializada en el ámbito educativo y social, con formación en Integración Social, Educación Infantil y Educación Social, y experiencia en atención a personas con necesidades diversas en todas las etapas de la vida.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Valores */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="led-dot" />
            <span className="font-serif text-lg text-muted-foreground italic">Lo que nos define</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-10 led-glow-text">NUESTROS VALORES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Profesionalidad", desc: "Formación continua y rigor en cada intervención." },
            { title: "Orden", desc: "Procesos claros y estructurados para cada persona." },
            { title: "Seguridad", desc: "Un entorno protegido y normativo." },
            { title: "Confianza", desc: "Transparencia y comunicación honesta con las familias." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="card-premium p-6 group">
                <span className="font-display text-3xl text-led/15 leading-none block mb-2 group-hover:text-led/30 transition-colors">
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
