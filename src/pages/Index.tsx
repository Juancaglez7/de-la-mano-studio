import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroPhoto from "@/assets/team-photo-4.jpeg";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";
import teamPhoto3 from "@/assets/team-photo-3.jpeg";
import { ArrowRight, Shield, MessageCircle, Brain, Heart, Palette, Users, BarChart3, Handshake, Sun, Moon } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/8 rounded-full blur-2xl animate-float-slow pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="badge-stamp mb-6 inline-block">Centro integral de estimulación y desarrollo</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
                  D' LA MANO
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-lg italic leading-relaxed mb-8">
                  Acompañamos procesos de desarrollo y bienestar a través de programas personalizados para infancia y personas mayores.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
                  <a href="tel:611658382" className="font-display tracking-wider hover:text-foreground transition-colors">📞 611 65 83 82</a>
                  <span className="text-border">|</span>
                  <a href="https://wa.me/34611658382" target="_blank" rel="noopener noreferrer" className="font-display tracking-wider hover:text-foreground transition-colors">📱 WhatsApp</a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/reservar"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    RESERVAR ENTREVISTA <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/34611658382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    WHATSAPP
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <img
                  src={heroPhoto}
                  alt="Profesional del centro D' La Mano"
                  className="rounded-2xl shadow-warm-lg w-full object-cover aspect-[3/4] max-h-[600px]"
                />
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-5 py-3 shadow-soft">
                  <p className="font-display text-sm tracking-wider text-primary">JEREZ DE LA FRONTERA</p>
                  <p className="font-serif text-sm text-muted-foreground italic">📞 611 65 83 82</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LED DIVIDER */}
      <div className="led-line" />

      {/* PROGRAMS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Nuestros programas</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-12">PROGRAMAS</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mañanas · Personas mayores */}
            <ScrollReveal delay={0.1}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Sun size={20} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl">MAÑANAS</h3>
                  <span className="badge-stamp text-[10px]">Personas mayores</span>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Brain, title: "Estimulación cognitiva y memoria activa", desc: "Memoria, atención, lenguaje y orientación a través de actividades dinámicas." },
                    { icon: Heart, title: "Taller de autonomía y rutinas", desc: "Refuerzo de habilidades cotidianas para ganar seguridad y confianza." },
                    { icon: Palette, title: "Artística y música", desc: "Creatividad y música como herramientas de activación y socialización." },
                  ].map((s, i) => (
                    <div key={i} className="card-premium p-6">
                      <div className="flex items-start gap-4">
                        <s.icon size={20} className="text-primary mt-1 shrink-0" />
                        <div>
                          <h4 className="text-lg mb-1">{s.title}</h4>
                          <p className="font-serif text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programas#mayores"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Tardes · Infancia */}
            <ScrollReveal delay={0.2}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Moon size={20} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl">TARDES</h3>
                  <span className="badge-stamp text-[10px]">Infancia 0–6</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Atención Temprana (0–6 años)",
                    "Estimulación del Desarrollo",
                    "Intervención en Conducta y Regulación Emocional",
                    "Orientación Familiar",
                    "Valoración Evolutiva",
                  ].map((s, i) => (
                    <div key={i} className="card-premium p-5">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                        <p className="font-display text-sm tracking-wide">{s}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programas#infancia"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
                >
                  VER PROGRAMA COMPLETO <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="led-line" />

      {/* ABOUT / EL CENTRO */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">El centro</span>
              <div className="editorial-line" />
            </div>
            <h2 className="text-3xl md:text-5xl mb-6">UN ESPACIO PROFESIONAL</h2>
            <p className="font-serif text-xl text-muted-foreground italic leading-relaxed mb-10">
              Un entorno estructurado, calmado y profesional donde cada persona recibe atención personalizada. Trabajamos con rigor y cercanía, respetando el ritmo de cada proceso.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-background rounded-2xl p-6 border border-border/50 inline-flex items-center gap-3">
              <Shield className="text-primary shrink-0" size={20} />
              <p className="font-serif text-sm text-muted-foreground text-left">
                El centro dispone de sistema de videovigilancia en zonas comunes con fines exclusivamente de seguridad, cumpliendo la normativa vigente y señalización informativa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="led-line" />

      {/* VISUAL SECTION WITH PHOTOS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Nuestro equipo</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: heroPhoto, caption: "Dirección y coordinación del centro" },
              { src: teamPhoto2, caption: "Profesionalidad y cercanía" },
              { src: teamPhoto3, caption: "Compromiso con cada persona" },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border/50">
                  <div className="overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <p className="font-serif text-sm text-muted-foreground italic">{photo.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="led-line" />

      {/* METHODOLOGY PREVIEW */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Cómo trabajamos</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-12">METODOLOGÍA</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Personalización", desc: "Cada plan se adapta a la persona, sus necesidades y su ritmo." },
              { icon: BarChart3, title: "Seguimiento", desc: "Evaluación continua y ajuste de objetivos en cada etapa." },
              { icon: Heart, title: "Bienestar y autonomía", desc: "El objetivo es mejorar la calidad de vida y la independencia." },
              { icon: Handshake, title: "Coordinación", desc: "Trabajo conjunto con familias y entorno para maximizar resultados." },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-premium p-8 h-full text-center">
                  <pillar.icon className="text-primary mx-auto mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="text-lg mb-2">{pillar.title}</h3>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 text-sm font-display tracking-wider text-primary hover:opacity-80 transition-opacity"
              >
                VER METODOLOGÍA COMPLETA <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="led-line" />

      {/* TABLÓN DE NOTICIAS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Novedades</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-12">TABLÓN DE NOTICIAS</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: "Marzo 2026", title: "Apertura del programa de mayores", desc: "Nuevo servicio matutino de estimulación cognitiva y talleres para personas mayores." },
              { date: "Marzo 2026", title: "Regulación emocional en la infancia", desc: "Estrategias para acompañar las emociones de los más pequeños en el día a día." },
              { date: "Febrero 2026", title: "Orientación a familias", desc: "Consejos prácticos y herramientas para reforzar los avances desde casa." },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-premium p-8">
                  <p className="font-display text-xs tracking-widest text-primary/60 mb-3">{post.date}</p>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-4">{post.desc}</p>
                  <span className="font-serif text-sm text-primary italic cursor-pointer hover:opacity-80 transition-opacity">Leer más →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative py-16 overflow-hidden">
        <div className="led-line absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl mb-4">¿HABLAMOS?</h2>
            <p className="font-serif text-lg text-muted-foreground italic max-w-md mx-auto mb-6">
              Reserva una entrevista inicial sin compromiso y cuéntanos tu situación.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/reservar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                RESERVAR ENTREVISTA <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/34611658382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
              >
                <MessageCircle size={18} /> WHATSAPP
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="led-line absolute bottom-0 left-0 right-0" />
      </section>
    </>
  );
};

export default Index;
