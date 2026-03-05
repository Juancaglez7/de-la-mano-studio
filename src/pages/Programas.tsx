import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Palette, Sun, Moon, CheckCircle2, ChevronRight, Camera, Sparkles } from "lucide-react";
import teamPhoto1 from "@/assets/team-photo-1.jpeg";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";
import teamPhoto3 from "@/assets/team-photo-3.jpeg";

const BulletItem = ({ children }: { children: string }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 size={14} className="text-led mt-1.5 shrink-0" />
    <span>{children}</span>
  </li>
);

const Programas = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <span className="led-badge mb-6 inline-block">Lo que ofrecemos</span>
          <h1 className="text-5xl md:text-7xl mb-4 led-glow-text">PROGRAMAS</h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-led/60 to-transparent mb-6" />
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Dos programas diferenciados, adaptados a cada etapa de la vida. Mañanas para personas mayores, tardes para infancia.
          </p>
        </ScrollReveal>

        {/* ═══ MAÑANAS · PERSONAS MAYORES ═══ */}
        <div id="mayores" className="scroll-mt-40 mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-led/15 flex items-center justify-center">
                <Sun size={20} className="text-led" />
              </div>
              <h2 className="text-3xl md:text-5xl led-glow-text">MAÑANAS</h2>
            </div>
            <p className="font-display text-sm tracking-widest text-led mb-4">PERSONAS MAYORES</p>
            <div className="w-full h-[2px] bg-gradient-to-r from-led/30 via-led/10 to-transparent mb-10" />
          </ScrollReveal>

          {/* SERVICE 1 - Cognitive */}
          <ScrollReveal delay={0.05}>
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-border/50 bg-card">
                {/* Photo side */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img src={teamPhoto1} alt="Estimulación cognitiva" className="w-full h-full object-cover min-h-[200px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-led/90 flex items-center justify-center shadow-lg">
                      <Brain size={18} className="text-background" />
                    </div>
                  </div>
                </div>
                {/* Content side */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <span className="font-display text-4xl text-led/15 block mb-1">01</span>
                  <h3 className="text-2xl md:text-3xl mb-3">Estimulación cognitiva y memoria activa</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-6">
                    Trabajamos para mantener y potenciar capacidades como la memoria, la atención, el lenguaje y la orientación, a través de actividades dinámicas y adaptadas a cada persona.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background rounded-xl p-5 border border-led/10">
                      <h4 className="font-display text-xs tracking-widest text-led mb-3 flex items-center gap-2">
                        <Sparkles size={12} /> ¿QUÉ TRABAJAMOS?
                      </h4>
                      <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                        <BulletItem>Memoria (reciente y a largo plazo)</BulletItem>
                        <BulletItem>Atención y concentración</BulletItem>
                        <BulletItem>Lenguaje y comunicación</BulletItem>
                        <BulletItem>Orientación (tiempo, espacio, rutinas)</BulletItem>
                        <BulletItem>Funciones ejecutivas</BulletItem>
                      </ul>
                    </div>
                    <div className="bg-background rounded-xl p-5 border border-led/10">
                      <h4 className="font-display text-xs tracking-widest text-led mb-3">CÓMO SON LAS SESIONES</h4>
                      <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                        <BulletItem>Intervenciones individuales o en grupos reducidos</BulletItem>
                        <BulletItem>Actividades prácticas y motivadoras</BulletItem>
                        <BulletItem>Seguimiento y adaptación continua</BulletItem>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Arrow connector */}
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-[2px] h-6 bg-gradient-to-b from-led/30 to-led/10" />
              <ChevronRight size={16} className="text-led/30 rotate-90" />
            </div>
          </div>

          {/* SERVICE 2 - Autonomy */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-border/50 bg-card">
                {/* Content first on this one (alternating) */}
                <div className="md:col-span-3 p-8 md:p-10 order-2 md:order-1">
                  <span className="font-display text-4xl text-led/15 block mb-1">02</span>
                  <h3 className="text-2xl md:text-3xl mb-3">Taller de autonomía y rutinas funcionales</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-6">
                    Servicio centrado en reforzar habilidades cotidianas para ganar seguridad y confianza: organización de rutinas, hábitos, tareas funcionales y actividades de la vida diaria.
                  </p>
                  <div className="bg-background rounded-xl p-5 border border-led/10">
                    <h4 className="font-display text-xs tracking-widest text-led mb-3">INCLUYE</h4>
                    <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                      <BulletItem>Organización y estructuración del día</BulletItem>
                      <BulletItem>Motricidad fina y coordinación</BulletItem>
                      <BulletItem>Estimulación sensorial suave</BulletItem>
                      <BulletItem>Estrategias para mantener independencia</BulletItem>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 relative overflow-hidden order-1 md:order-2">
                  <img src={teamPhoto2} alt="Taller de autonomía" className="w-full h-full object-cover min-h-[200px]" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-led/90 flex items-center justify-center shadow-lg">
                      <Heart size={18} className="text-background" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Arrow connector */}
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-[2px] h-6 bg-gradient-to-b from-led/30 to-led/10" />
              <ChevronRight size={16} className="text-led/30 rotate-90" />
            </div>
          </div>

          {/* SERVICE 3 - Art & Music */}
          <ScrollReveal delay={0.15}>
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-border/50 bg-card">
                <div className="md:col-span-2 relative overflow-hidden">
                  <img src={teamPhoto3} alt="Artística y música" className="w-full h-full object-cover min-h-[200px]" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-led/90 flex items-center justify-center shadow-lg">
                      <Palette size={18} className="text-background" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <span className="font-display text-4xl text-led/15 block mb-1">03</span>
                  <h3 className="text-2xl md:text-3xl mb-3">Artística y música</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-6">
                    La creatividad y la música son herramientas muy potentes para activar la mente, conectar con emociones y favorecer la comunicación.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background rounded-xl p-5 border border-led/10">
                      <h4 className="font-display text-xs tracking-widest text-led mb-3">QUÉ HACEMOS</h4>
                      <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                        <BulletItem>Pintura, collage y expresión creativa</BulletItem>
                        <BulletItem>Música activa: ritmo, percusión, canto</BulletItem>
                        <BulletItem>Música evocadora: recuerdos y emociones</BulletItem>
                        <BulletItem>Actividades grupales de vínculo</BulletItem>
                      </ul>
                    </div>
                    <div className="bg-background rounded-xl p-5 border border-led/10">
                      <h4 className="font-display text-xs tracking-widest text-led mb-3">BENEFICIOS</h4>
                      <ul className="space-y-2 font-serif text-sm text-muted-foreground">
                        <BulletItem>Estimula memoria y atención</BulletItem>
                        <BulletItem>Mejora el estado de ánimo</BulletItem>
                        <BulletItem>Favorece expresión y socialización</BulletItem>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ═══ TARDES · INFANCIA ═══ */}
        <div id="infancia" className="scroll-mt-40">
          <ScrollReveal>
            <div className="w-full h-[2px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent mb-10" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <Moon size={20} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl">TARDES</h2>
            </div>
            <p className="font-display text-sm tracking-widest text-primary mb-10">INFANCIA (0–6 AÑOS)</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Atención Temprana (0–6 años)", desc: "Intervención individualizada ante dificultades evolutivas. Evaluación, diseño de plan y sesiones adaptadas a cada niño." },
              { title: "Estimulación del Desarrollo", desc: "Trabajo en áreas cognitivas, motrices y sociales para potenciar las capacidades del niño en sus primeros años." },
              { title: "Conducta y Regulación Emocional", desc: "Apoyo en rabietas, límites, impulsividad y adaptación escolar. Estrategias prácticas para el día a día." },
              { title: "Orientación Familiar", desc: "Asesoramiento práctico para casa. Herramientas, rutinas y acompañamiento." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="card-premium p-8 h-full group">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-primary/15 group-hover:text-primary/30 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{service.title}</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.2}>
            <div className="mt-8 card-premium p-8">
              <div className="flex items-start gap-4">
                <span className="font-display text-3xl text-primary/15">05</span>
                <div>
                  <h3 className="text-xl mb-2">Valoración Evolutiva</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">Observación estructurada y diseño de plan individualizado con herramientas validadas.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
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

export default Programas;
