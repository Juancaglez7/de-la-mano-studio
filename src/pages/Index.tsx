import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useMode } from "@/contexts/ModeContext";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Heart, ClipboardList, Users, MessageCircle } from "lucide-react";
import { useState } from "react";

const areas = [
  "Speech & Language", "Motor Skills", "Attention / Behavior", "Autism Support",
  "Early Stimulation", "Independence", "Family Support",
];

const Index = () => {
  const { mode } = useMode();
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Floating organic shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/8 rounded-full blur-2xl animate-float-slow pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="badge-stamp mb-6 inline-block">Early Intervention · 0–6 Years</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-2">
                  EARLY<br />INTERVENTION
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-display text-4xl sm:text-5xl md:text-6xl text-primary leading-none mb-6">
                  DE LA MANO
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-md italic leading-relaxed mb-8">
                  Evidence-led support, delivered with warmth — and a clear plan for your child's development.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    REQUEST AN ASSESSMENT <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/how-we-work"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    HOW WE WORK
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Child exploring sensory materials in a warm, natural-light setting"
                  className="rounded-2xl shadow-warm-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-5 py-3 shadow-soft">
                  <p className="font-display text-sm tracking-wider text-primary">TRUSTED BY FAMILIES</p>
                  <p className="font-serif text-sm text-muted-foreground italic">since 2020</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">What we promise</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Clear Assessment", desc: "A thorough, honest picture of your child's development — no jargon, no guesswork.", icon: ClipboardList },
              { num: "02", title: "Individualized Plan", desc: "A structured intervention plan built around your child's unique strengths and needs.", icon: Heart },
              { num: "03", title: "Family Guidance", desc: "Ongoing support and coaching for the whole family, because progress happens together.", icon: Users },
            ].map((card, i) => (
              <ScrollReveal key={card.num} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl p-8 card-hover border border-border/50 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="section-number">{card.num}</span>
                    <card.icon className="text-primary mt-2" size={24} />
                  </div>
                  <h3 className="text-2xl mb-3">{card.title}</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl mb-4">AREAS OF FOCUS</h2>
            <p className="font-serif text-xl text-muted-foreground italic mb-10 max-w-lg">
              We work across developmental domains, always tailored to the individual child.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setActiveArea(activeArea === area ? null : area)}
                  className={`px-5 py-2.5 rounded-full font-serif text-base transition-all duration-200 border ${
                    activeArea === area
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="editorial-line" />
              <span className="font-serif text-lg text-muted-foreground italic">
                {mode === "professionals" ? "Clinical methodology" : "How it works"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-14">OUR METHOD</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "First Conversation", desc: "We listen to your concerns, answer questions, and begin to understand your child's story." },
              { num: "02", title: "Developmental Assessment", desc: "A comprehensive evaluation using validated tools, adapted to your child's age and needs." },
              { num: "03", title: "Intervention Plan", desc: "A clear, written plan with goals, strategies, and timelines — shared with the whole team." },
              { num: "04", title: "Follow-Up & Coordination", desc: "Regular reviews, session adjustments, and collaboration with school or other professionals." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <span className="section-number mb-4 block">{step.num}</span>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-[2px] bg-primary/20" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl mb-4">FAMILIES SHARE</h2>
            <p className="font-serif text-xl text-muted-foreground italic mb-12">
              Real experiences from families we've worked with.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border/50">
                  <MessageCircle className="text-primary/30 mb-4" size={28} />
                  <p className="font-serif text-lg text-muted-foreground italic leading-relaxed mb-6">
                    "Testimonial placeholder — replace with a real family quote once available."
                  </p>
                  <div className="editorial-line mb-4" />
                  <p className="text-sm font-display tracking-wider">FAMILY {String(i).padStart(2, "0")}</p>
                  <p className="font-serif text-sm text-muted-foreground italic">Parent of a {i + 1}-year-old</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <span className="badge-stamp mb-6 inline-block">Ready to start?</span>
            <h2 className="text-5xl md:text-7xl mb-4">BOOK A FIRST CALL</h2>
            <p className="font-serif text-xl text-muted-foreground italic max-w-md mx-auto mb-8">
              No commitment needed. Let's talk about your child's development and how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              GET IN TOUCH <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
