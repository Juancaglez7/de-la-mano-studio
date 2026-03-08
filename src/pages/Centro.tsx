import ScrollReveal from "@/components/ScrollReveal";
import CinematicHero from "@/components/CinematicHero";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, Building2, Monitor, Cpu, Puzzle, Camera, ChevronRight } from "lucide-react";
import teamPhoto1 from "@/assets/team-photo-1.jpeg";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";
import teamPhoto3 from "@/assets/team-photo-3.jpeg";
import centroInterior from "@/assets/centro-interior.jpg";

const Centro = () => (
  <>
    <CinematicHero
      badge="Conócenos"
      title="EL CENTRO"
      subtitle="Centro privado especializado en estimulación, desarrollo y bienestar con enfoque profesional y personalizado."
      image={centroInterior}
    />
    <div className="led-line" />

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl relative z-10">

        {/* Quiénes somos - with photo */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50">
              <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 led-glow-text">QUIÉNES SOMOS</h2>
              <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                D' La Mano es un centro integral de estimulación y desarrollo ubicado en Jerez de la Frontera. Ofrecemos un servicio profesional, estructurado y cercano, orientado a personas de todas las edades que necesitan acompañamiento especializado.
              </p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-led/40 to-transparent" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/50 group">
              <img src={teamPhoto1} alt="Centro D' La Mano" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </ScrollReveal>

        <div className="led-line mb-16" />

        {/* Instalaciones - visual grid */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="text-led" size={24} />
              <h2 className="text-5xl md:text-6xl lg:text-7xl led-glow-text">INSTALACIONES</h2>
            </div>
            <div className="w-12 h-[2px] bg-gradient-to-r from-led/40 to-transparent mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Sala de intervención", desc: "Espacio principal para sesiones individuales y grupales.", icon: Puzzle, hasImage: true },
                { title: "Sala sensorial", desc: "Ambiente adaptado para estimulación multisensorial.", icon: Monitor, hasImage: true },
                { title: "Despacho profesional", desc: "Reuniones con familias y coordinación de casos.", icon: BookOpen, hasImage: false },
                { title: "Aula de tecnología", desc: "Recursos digitales y herramientas tecnológicas adaptadas.", icon: Cpu, hasImage: true },
                { title: "Zona de materiales", desc: "Materiales especializados y recursos didácticos.", icon: Puzzle, hasImage: true },
                { title: "Recepción y espera", desc: "Espacio acogedor para familias con zona informativa.", icon: Building2, hasImage: false },
              ].map((room, i) => (
                <ScrollReveal key={room.title} delay={i * 0.08}>
                  <div className="card-premium h-full overflow-hidden group">
                    {room.hasImage && (
                      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                        {/* Placeholder for room photos */}
                        <div className="absolute inset-0 bg-gradient-to-br from-led/10 to-primary/5 flex items-center justify-center">
                          <Camera size={24} className="text-muted-foreground/30" />
                          <span className="text-xs text-muted-foreground/40 ml-2 font-serif italic">Añadir foto</span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-led/10 flex items-center justify-center shrink-0">
                          <room.icon size={14} className="text-led" />
                        </div>
                        <h3 className="text-lg">{room.title}</h3>
                      </div>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed">{room.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="led-line mb-16" />

        {/* Materiales y tecnología */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="text-led" size={24} />
              <h2 className="text-5xl md:text-6xl lg:text-7xl led-glow-text">MATERIALES Y TECNOLOGÍA</h2>
            </div>
            <div className="w-12 h-[2px] bg-gradient-to-r from-led/40 to-transparent mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-led/10 to-primary/5 flex items-center justify-center">
                    <Camera size={28} className="text-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground/40 ml-2 font-serif italic">Foto materiales</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">Materiales especializados</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    Material manipulativo, juegos adaptados, recursos sensoriales, fichas y herramientas de intervención seleccionadas para cada programa.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-led/10 to-primary/5 flex items-center justify-center">
                    <Camera size={28} className="text-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground/40 ml-2 font-serif italic">Foto tecnología</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">Tecnología aplicada</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    Dispositivos y software adaptados para estimulación cognitiva, aplicaciones interactivas y herramientas digitales al servicio de cada proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="led-line mb-16" />

        {/* Proyecto educativo */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-led" size={24} />
              <h2 className="text-5xl md:text-6xl lg:text-7xl led-glow-text">PROYECTO EDUCATIVO</h2>
            </div>
            <div className="w-12 h-[2px] bg-gradient-to-r from-led/40 to-transparent mb-4" />
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestro proyecto se fundamenta en cuatro pilares:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Prevención", desc: "Detección e intervención antes de que las dificultades se consoliden." },
                { num: "02", title: "Intervención estructurada", desc: "Planes individualizados con objetivos claros y medibles." },
                { num: "03", title: "Coordinación familiar", desc: "La familia como eje central del proceso de intervención." },
                { num: "04", title: "Respeto al ritmo individual", desc: "Cada persona avanza a su propio paso, sin comparaciones." },
              ].map((pillar, i) => (
                <ScrollReveal key={pillar.num} delay={i * 0.08}>
                  <div className="card-premium p-6 h-full group">
                    <span className="font-display text-3xl text-led/20 leading-none group-hover:text-led/40 transition-colors">{pillar.num}</span>
                    <h3 className="text-lg mt-2 mb-1">{pillar.title}</h3>
                    <p className="font-serif text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Galería del centro */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="led-dot" />
              <span className="font-serif text-lg text-muted-foreground italic">Nuestro espacio</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[teamPhoto1, teamPhoto2, teamPhoto3].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border/50 group relative">
                  <img src={src} alt={`Centro D' La Mano - ${i + 1}`} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-led/0 group-hover:border-led/20 transition-all duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="led-line mb-16" />

        {/* Seguridad */}
        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-led/15 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-led" size={24} />
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
