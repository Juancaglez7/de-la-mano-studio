import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, Building2 } from "lucide-react";

const Centro = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Conócenos</span>
          <h1 className="text-5xl md:text-7xl mb-4">EL CENTRO</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Centro privado especializado en estimulación, desarrollo y bienestar con enfoque profesional y personalizado.
          </p>
        </ScrollReveal>

        {/* Quiénes somos */}
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-10">
            <h2 className="text-2xl md:text-3xl mb-6">QUIÉNES SOMOS</h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              D' La Mano es un centro integral de estimulación y desarrollo ubicado en Jerez de la Frontera. Ofrecemos un servicio profesional, estructurado y cercano, orientado a personas de todas las edades que necesitan acompañamiento especializado.
            </p>
          </div>
        </ScrollReveal>

        {/* Proyecto educativo */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl">PROYECTO EDUCATIVO</h2>
            </div>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
              Nuestro proyecto se fundamenta en cuatro pilares:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Prevención", desc: "Detección e intervención antes de que las dificultades se consoliden." },
                { num: "02", title: "Intervención estructurada", desc: "Planes individualizados con objetivos claros y medibles." },
                { num: "03", title: "Coordinación familiar", desc: "La familia como eje central del proceso de intervención." },
                { num: "04", title: "Respeto al ritmo individual", desc: "Cada niño avanza a su propio paso, sin comparaciones." },
              ].map((pillar) => (
                <div key={pillar.num} className="bg-card rounded-2xl p-6 border border-border/50">
                  <span className="font-display text-3xl text-primary/15 leading-none">{pillar.num}</span>
                  <h3 className="text-lg mt-2 mb-1">{pillar.title}</h3>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Instalaciones */}
        <ScrollReveal delay={0.2}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl">INSTALACIONES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Sala de intervención", "Sala tranquila", "Despacho profesional", "Recepción"].map((room) => (
                <div key={room} className="bg-card rounded-2xl p-5 border border-border/50">
                  <p className="font-display text-sm tracking-wider">{room}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Seguridad */}
        <ScrollReveal delay={0.3}>
          <div className="bg-card rounded-2xl p-8 border border-border/50 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={24} />
              <h2 className="text-xl">SEGURIDAD</h2>
            </div>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Videovigilancia en zonas comunes con fines exclusivamente de seguridad, cumpliendo la normativa vigente en protección de datos (RGPD).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
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

export default Centro;
