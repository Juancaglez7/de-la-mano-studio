import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Name Placeholder",
    role: "Lead Therapist",
    approach: "Developmental and family-centered",
    specialties: "Language delays, autism, early communication",
  },
  {
    name: "Name Placeholder",
    role: "Occupational Therapist",
    approach: "Sensory integration and motor skills",
    specialties: "Fine motor, sensory processing, daily routines",
  },
  {
    name: "Name Placeholder",
    role: "Child Psychologist",
    approach: "Play-based and behavioral",
    specialties: "Behavior, attention, social-emotional development",
  },
  {
    name: "Name Placeholder",
    role: "Family Coach",
    approach: "Strengths-based coaching",
    specialties: "Parent guidance, routines, sibling dynamics",
  },
];

const principles = [
  { title: "Clarity", desc: "We explain everything clearly — no jargon, no ambiguity." },
  { title: "Evidence", desc: "Our methods are grounded in science and validated tools." },
  { title: "Empathy", desc: "We meet every family where they are, with warmth and respect." },
  { title: "Collaboration", desc: "We work with families, schools, and other professionals as a team." },
];

const Team = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Our People</span>
          <h1 className="text-5xl md:text-7xl mb-4">THE TEAM</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            A multidisciplinary team united by one goal: giving every child the best possible start.
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
                      <span className="text-foreground font-medium not-italic">Approach:</span>{" "}
                      <span className="italic">{member.approach}</span>
                    </p>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium not-italic">Specialties:</span>{" "}
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
            <span className="font-serif text-lg text-muted-foreground italic">What guides us</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-10">OUR PRINCIPLES</h2>
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
