import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Nombre Placeholder",
    role: "Terapeuta Principal",
    approach: "Enfoque evolutivo y centrado en la familia",
    specialties: "Retrasos del lenguaje, autismo, comunicación temprana",
  },
  {
    name: "Nombre Placeholder",
    role: "Terapeuta Ocupacional",
    approach: "Integración sensorial y habilidades motoras",
    specialties: "Motricidad fina, procesamiento sensorial, rutinas diarias",
  },
  {
    name: "Nombre Placeholder",
    role: "Psicóloga Infantil",
    approach: "Enfoque lúdico y conductual",
    specialties: "Conducta, atención, desarrollo socioemocional",
  },
  {
    name: "Nombre Placeholder",
    role: "Orientadora Familiar",
    approach: "Acompañamiento basado en fortalezas",
    specialties: "Orientación a padres, rutinas, dinámica entre hermanos",
  },
];

const principles = [
  { title: "Claridad", desc: "Explicamos todo de forma clara — sin tecnicismos ni ambigüedades." },
  { title: "Evidencia", desc: "Nuestros métodos están respaldados por la ciencia y herramientas validadas." },
  { title: "Empatía", desc: "Recibimos a cada familia donde se encuentra, con calidez y respeto." },
  { title: "Colaboración", desc: "Trabajamos con familias, colegios y otros profesionales como un equipo." },
];

const Team = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Nuestro Equipo</span>
          <h1 className="text-5xl md:text-7xl mb-4">EL EQUIPO</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Un equipo multidisciplinar unido por un mismo objetivo: dar a cada niño el mejor comienzo posible.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 card-hover h-full">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-display text-2xl text-primary shrink-0">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="font-display text-xs tracking-widest text-primary mb-3">{member.role.toUpperCase()}</p>
                    <p className="font-serif text-muted-foreground leading-relaxed mb-2">
                      <span className="text-foreground font-medium not-italic">Enfoque:</span>{" "}
                      <span className="italic">{member.approach}</span>
                    </p>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium not-italic">Especialidades:</span>{" "}
                      <span className="italic">{member.specialties}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Principles */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="editorial-line" />
            <span className="font-serif text-lg text-muted-foreground italic">Lo que nos guía</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-10">NUESTROS PRINCIPIOS</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <span className="section-number block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl mb-2">{p.title}</h3>
                <p className="font-serif text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
