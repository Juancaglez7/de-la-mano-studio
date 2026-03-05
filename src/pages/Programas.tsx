import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Palette, Sun, Moon } from "lucide-react";

const Programas = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Lo que ofrecemos</span>
          <h1 className="text-5xl md:text-7xl mb-4">PROGRAMAS</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Dos programas diferenciados, adaptados a cada etapa de la vida. Mañanas para personas mayores, tardes para infancia.
          </p>
        </ScrollReveal>

        {/* ═══ MAÑANAS · PERSONAS MAYORES ═══ */}
        <div id="mayores" className="scroll-mt-40 mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <Sun size={24} className="text-primary" />
              <h2 className="text-3xl md:text-5xl">MAÑANAS</h2>
            </div>
            <p className="font-display text-sm tracking-widest text-primary mb-10">PERSONAS MAYORES</p>
            <div className="led-line mb-10" />
          </ScrollReveal>

          {/* SERVICE 1 */}
          <ScrollReveal delay={0.05}>
            <div className="card-premium p-8 md:p-10 mb-6">
              <div className="flex items-start gap-5">
                <Brain className="text-primary mt-1 shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-3">Estimulación cognitiva y memoria activa</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                    Trabajamos para mantener y potenciar capacidades como la memoria, la atención, el lenguaje y la orientación, a través de actividades dinámicas y adaptadas a cada persona. Nuestro objetivo es prevenir el deterioro, reforzar la autonomía y mejorar el bienestar en el día a día.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-primary mb-3">¿QUÉ TRABAJAMOS?</h4>
                      <ul className="space-y-2 font-serif text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Memoria (reciente y a largo plazo)</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Atención y concentración</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Lenguaje y comunicación</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Orientación (tiempo, espacio, rutinas)</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Funciones ejecutivas (planificación, organización, flexibilidad mental)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-primary mb-3">CÓMO SON LAS SESIONES</h4>
                      <ul className="space-y-2 font-serif text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Intervenciones individuales o en grupos reducidos</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Actividades prácticas, cercanas y motivadoras</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Seguimiento y adaptación según la evolución</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SERVICE 2 */}
          <ScrollReveal delay={0.1}>
            <div className="card-premium p-8 md:p-10 mb-6">
              <div className="flex items-start gap-5">
                <Heart className="text-primary mt-1 shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-3">Taller de autonomía y rutinas funcionales</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                    Servicio centrado en reforzar habilidades cotidianas para ganar seguridad y confianza: organización de rutinas, hábitos, tareas funcionales y actividades de la vida diaria.
                  </p>
                  <h4 className="font-display text-sm tracking-widest text-primary mb-3">INCLUYE</h4>
                  <ul className="space-y-2 font-serif text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Organización y estructuración del día</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Motricidad fina y coordinación (según necesidad)</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Estimulación sensorial suave</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Estrategias para mantener independencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SERVICE 3 */}
          <ScrollReveal delay={0.15}>
            <div className="card-premium p-8 md:p-10 mb-6">
              <div className="flex items-start gap-5">
                <Palette className="text-primary mt-1 shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-3">Artística y música</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                    La creatividad y la música son herramientas muy potentes para activar la mente, conectar con emociones y favorecer la comunicación. Utilizamos propuestas artísticas y musicales adaptadas para estimular, disfrutar y socializar.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-primary mb-3">QUÉ HACEMOS</h4>
                      <ul className="space-y-2 font-serif text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Pintura, collage, manualidades y expresión creativa</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Música activa: ritmo, percusión, palmas, canto, juegos musicales</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Música evocadora: recuerdos, emociones, conversación guiada</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Actividades en grupo para fomentar vínculo y participación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-primary mb-3">BENEFICIOS</h4>
                      <ul className="space-y-2 font-serif text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Estimula memoria y atención</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Mejora el estado de ánimo</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">·</span> Favorece expresión emocional y socialización</li>
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
            <div className="led-line mb-10" />
            <div className="flex items-center gap-3 mb-2">
              <Moon size={24} className="text-primary" />
              <h2 className="text-3xl md:text-5xl">TARDES</h2>
            </div>
            <p className="font-display text-sm tracking-widest text-primary mb-10">INFANCIA (0–6 AÑOS)</p>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { title: "Atención Temprana (0–6 años)", desc: "Intervención individualizada ante dificultades evolutivas. Evaluación, diseño de plan y sesiones adaptadas a cada niño." },
              { title: "Estimulación del Desarrollo", desc: "Trabajo en áreas cognitivas, motrices y sociales para potenciar las capacidades del niño en sus primeros años." },
              { title: "Intervención en Conducta y Regulación Emocional", desc: "Apoyo en rabietas, límites, impulsividad y adaptación escolar. Estrategias prácticas para el día a día." },
              { title: "Orientación Familiar", desc: "Asesoramiento práctico para casa. Herramientas, rutinas y acompañamiento para que la familia refuerce los avances." },
              { title: "Valoración Evolutiva", desc: "Observación estructurada y diseño de plan individualizado con herramientas validadas." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <div className="card-premium p-8 md:p-10">
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
