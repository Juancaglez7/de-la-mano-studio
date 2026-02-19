import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, ClipboardList, Eye, Building2, Shield, MessageCircle } from "lucide-react";

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
                <span className="badge-stamp mb-6 inline-block">Centro de Atención Temprana · 0–6 Años</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
                  ACOMPAÑAMIENTO PROFESIONAL
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-lg italic leading-relaxed mb-8">
                  Centro especializado en atención temprana, estimulación del desarrollo y acompañamiento familiar en Jerez.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/reservar"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    SOLICITAR ENTREVISTA <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/34611658382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    CONTACTAR POR WHATSAPP
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Centro D' La Mano — espacio profesional de atención temprana en Jerez"
                  className="rounded-2xl shadow-warm-lg w-full object-cover aspect-[4/3]"
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

      {/* QUÉ HACEMOS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Qué hacemos</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {["Atención temprana", "Desarrollo infantil", "Intervención en conducta", "Orientación familiar"].map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="font-display text-sm md:text-base tracking-wide">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-display tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
              >
                VER SERVICIOS <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NUESTRO ENFOQUE */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">Nuestro enfoque</span>
              <div className="editorial-line" />
            </div>
            <h2 className="text-3xl md:text-5xl mb-6">INTERVENCIÓN INDIVIDUALIZADA</h2>
            <p className="font-serif text-xl text-muted-foreground italic leading-relaxed">
              Basada en la observación, la estructura y el acompañamiento familiar, respetando el ritmo evolutivo de cada niño.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* EL ESPACIO */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl mb-4">EL ESPACIO</h2>
            <p className="font-serif text-xl text-muted-foreground italic mb-10 max-w-lg">
              Un entorno diseñado para favorecer la calma, la seguridad y el desarrollo estructurado.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Sala de Intervención", desc: "Espacios equipados para sesiones individuales y actividades estructuradas." },
                { icon: Eye, title: "Sala Tranquila", desc: "Un entorno calmado diseñado para regulación sensorial y momentos de calma." },
                { icon: ClipboardList, title: "Despacho Profesional", desc: "Para entrevistas, valoraciones y reuniones con familias." },
              ].map((room, i) => (
                <div key={i} className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                  <room.icon className="text-primary mb-4" size={24} />
                  <h3 className="text-xl mb-2">{room.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">{room.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 bg-card rounded-2xl p-6 border border-border/50 text-center">
              <p className="font-serif text-muted-foreground italic">
                Galería de fotos del centro — próximamente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="py-16 bg-card">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <Shield className="text-primary" size={24} />
              <h3 className="text-xl">Seguridad</h3>
            </div>
            <p className="font-serif text-muted-foreground leading-relaxed">
              El centro dispone de sistema de videovigilancia en zonas comunes con fines exclusivamente de seguridad, cumpliendo la normativa vigente en protección de datos (RGPD).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <span className="badge-stamp mb-6 inline-block">Primer paso</span>
            <h2 className="text-5xl md:text-7xl mb-4">SOLICITA UNA ENTREVISTA INICIAL</h2>
            <p className="font-serif text-xl text-muted-foreground italic max-w-md mx-auto mb-8">
              Sin compromiso. Hablemos sobre la situación de tu hijo y cómo podemos ayudar.
            </p>
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              RESERVAR ENTREVISTA <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* TABLÓN DE NOTICIAS */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl mb-4">TABLÓN DE NOTICIAS</h2>
            <p className="font-serif text-xl text-muted-foreground italic mb-12">
              Artículos sobre desarrollo infantil, regulación emocional y orientación familiar.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Desarrollo infantil", desc: "Hitos y señales clave en los primeros años de vida." },
              { title: "Regulación emocional", desc: "Estrategias para acompañar las emociones de los más pequeños." },
              { title: "Orientación a familias", desc: "Consejos prácticos para el día a día en casa." },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border/50">
                  <MessageCircle className="text-primary/30 mb-4" size={28} />
                  <h3 className="text-xl mb-2">{post.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-4">{post.desc}</p>
                  <span className="font-serif text-sm text-primary italic">Próximamente</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
